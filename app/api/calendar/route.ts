import { NextResponse } from 'next/server';

// Forced refresh to sync environment variables: 2026-02-12 09:37 AM

export async function GET(request: Request) {
    const apiKey = (process.env.GCAL_API_KEY || process.env.NEXT_PUBLIC_GCAL_API_KEY || "").trim();
    const calendarId = (process.env.GCAL_CALENDAR_ID || process.env.NEXT_PUBLIC_GCAL_CALENDAR_ID || "").trim();

    // Debug logging for Vercel (safe parts only)
    if (process.env.VERCEL) {
        console.log(`[Calendar API V3] Using ID: ${calendarId.substring(0, 5)}... Key begins: ${apiKey.substring(0, 5)}...`);
    }

    if (!apiKey || !calendarId) {
        const missing = [];
        if (!apiKey) missing.push('GCAL_API_KEY');
        if (!calendarId) missing.push('GCAL_CALENDAR_ID');

        console.error(`Missing Google Calendar configuration: ${missing.join(', ')}`);
        return NextResponse.json(
            {
                error: "Configuration Missing",
                message: `Vercel is not providing the following keys: ${missing.join(', ')}`,
                hint: "Ensure these are added to Vercel Settings -> Environment Variables, checked for 'Preview' and 'Production', and then REDEPLOYED."
            },
            { status: 500 }
        );
    }

    const { searchParams } = new URL(request.url);
    const maxResults = searchParams.get("maxResults") || "10";
    const timeMin = searchParams.get("timeMin") || new Date().toISOString();

    const url =
        `https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(calendarId)}/events` +
        `?key=${encodeURIComponent(apiKey)}` +
        `&singleEvents=true` +
        `&orderBy=startTime` +
        `&timeMin=${encodeURIComponent(timeMin)}` +
        `&maxResults=${encodeURIComponent(maxResults)}`;

    try {
        const res = await fetch(url, {
            next: { revalidate: 0 }, // Disable cache for debugging
        });

        const data = await res.json();

        if (!res.ok) {
            const errorMessage = data.error?.message || "Not Found";
            const hint = "Ensure the calendar is set to 'Public' and the Calendar ID is correct.";
            console.error('Google Calendar API Error:', data);
            return NextResponse.json(
                {
                    error: "Google Calendar API Returned Error",
                    message: `${errorMessage}. Hint: ${hint}`,
                    status: res.status
                },
                { status: res.status === 404 ? 404 : 502 }
            );
        }

        const items = (data.items || []).map((event: any) => {
            const start = event.start?.dateTime || event.start?.date;
            const end = event.end?.dateTime || event.end?.date;

            // Parse dates for the frontend
            const startDate = start ? new Date(start) : null;

            const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

            return {
                id: event.id,
                title: event.summary || "(No title)",
                description: event.description || "",
                location: event.location || "Murray Area Chamber of Commerce",
                month: startDate ? monthNames[startDate.getMonth()] : "TBD",
                day: startDate ? startDate.getDate().toString() : "--",
                year: startDate ? startDate.getFullYear().toString() : "2026",
                time: startDate ? startDate.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' }) : "TBD",
                start: start || null,
                end: end || null,
                link: event.htmlLink || "",
                // Default to community for Google Calendar events unless specified otherwise in description or via tags
                type: (event.description?.toLowerCase().includes('chamber') || event.summary?.toLowerCase().includes('chamber')) ? 'chamber' : 'community',
                category: 'Event'
            };
        });

        return NextResponse.json({ items });
    } catch (error) {
        console.error('Fetch error:', error);
        return NextResponse.json(
            { error: "Failed to fetch calendar data" },
            { status: 500 }
        );
    }
}
