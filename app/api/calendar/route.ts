import { NextResponse } from 'next/server';

export async function GET(request: Request) {
    const apiKey = process.env.GCAL_API_KEY;
    const calendarId = process.env.GCAL_CALENDAR_ID;

    if (!apiKey || !calendarId) {
        console.error('Missing Google Calendar configuration: GCAL_API_KEY or GCAL_CALENDAR_ID');
        return NextResponse.json(
            { error: "Missing GCAL_API_KEY or GCAL_CALENDAR_ID" },
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
