import { NextResponse } from 'next/server';

export async function GET(request: Request) {
    const apiKey = process.env.GCAL_API_KEY || process.env.NEXT_PUBLIC_GCAL_API_KEY;
    const calendarId = process.env.GCAL_CALENDAR_ID || process.env.NEXT_PUBLIC_GCAL_CALENDAR_ID;

    if (!apiKey || !calendarId) {
        const missing = [];
        if (!apiKey) missing.push('GCAL_API_KEY');
        if (!calendarId) missing.push('GCAL_CALENDAR_ID');

        const allKeys = Object.keys(process.env).filter(key => key.includes('GCAL'));

        console.error(`Missing Google Calendar configuration: ${missing.join(', ')}. Found keys: ${allKeys.join(', ')}`);
        return NextResponse.json(
            {
                error: "Configuration Missing",
                message: `The following environment variables are missing in Vercel: ${missing.join(', ')}`,
                foundKeys: allKeys,
                hint: "Ensure these are added to Vercel Settings -> Environment Variables and then REDEPLOY. Current visible GCAL keys are: " + (allKeys.length ? allKeys.join(', ') : "None")
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
            next: { revalidate: 180 }, // 3-minute cache
        });

        const data = await res.json();

        if (!res.ok) {
            console.error('Google Calendar API Error:', data);
            return NextResponse.json(
                {
                    error: "Google Calendar API Returned Error",
                    message: data.error?.message || "Not Found",
                    status: res.status,
                    hint: "Ensure the calendar is set to 'Public' and the Calendar ID is correct."
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
