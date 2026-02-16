'use client';

import { useState } from 'react';
import Header from '@/components/power-hub/Header';
import { Calendar, ExternalLink, Copy, Check } from 'lucide-react';

export default function CalendarPage() {
  const [copied, setCopied] = useState(false);

  // Google Calendar embed URL - replace with your actual calendar ID
  // Format: https://calendar.google.com/calendar/embed?src=YOUR_CALENDAR_ID
  const calendarUrl = "https://calendar.google.com/calendar/embed?src=themurraychamber.com_calendar%40gmail.com&ctz=America%2FDenver";

  const copyUrl = () => {
    navigator.clipboard.writeText(calendarUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div>
      <Header title="Calendar" subtitle="View and manage chamber events" />

      <div className="p-8">
        {/* Info Box */}
        <div className="bg-purple-50 border border-purple-200 rounded-xl p-4 mb-6">
          <div className="flex items-start gap-3">
            <Calendar size={20} className="text-purple-600 mt-0.5" />
            <div className="flex-1">
              <p className="text-sm text-purple-800 font-medium">Google Calendar Integration</p>
              <p className="text-sm text-purple-600 mt-1">
                This calendar syncs with your Google Calendar. Add or edit events directly in Google Calendar and they'll appear here automatically.
              </p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={copyUrl}
                className="flex items-center gap-1 px-3 py-1.5 text-xs bg-white border border-purple-200 rounded-lg hover:bg-purple-50 transition-colors"
              >
                {copied ? <Check size={14} className="text-green-600" /> : <Copy size={14} />}
                {copied ? 'Copied!' : 'Copy URL'}
              </button>
              <a
                href="https://calendar.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 px-3 py-1.5 text-xs bg-[#4B2E83] text-white rounded-lg hover:bg-[#7A59B5] transition-colors"
              >
                <ExternalLink size={14} />
                Open Google Calendar
              </a>
            </div>
          </div>
        </div>

        {/* Calendar iframe */}
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
          <iframe
            src={calendarUrl}
            style={{ border: 0 }}
            width="100%"
            height="700"
            frameBorder="0"
            scrolling="no"
            className="w-full"
          />
        </div>

        {/* Help text */}
        <div className="mt-4 text-center text-sm text-gray-500">
          <p>Need to change the calendar? Update the calendar URL in <code className="bg-gray-100 px-1 rounded">app/power-hub/dashboard/calendar/page.tsx</code></p>
        </div>
      </div>
    </div>
  );
}
