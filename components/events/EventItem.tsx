'use client';

import { MapPin, Clock } from 'lucide-react';

export type EventType = 'chamber' | 'community';

interface EventItemProps {
  type: EventType;
  month: string;
  day: string;
  time: string;
  title: string;
  location: string;
  description?: string;
  category?: string;
  registerUrl?: string;
  payUrl?: string;
  detailsUrl?: string;
  isPast?: boolean;
}

export default function EventItem({
  type,
  month,
  day,
  time,
  title,
  location,
  category,
  registerUrl,
  payUrl,
  detailsUrl,
  isPast,
}: EventItemProps) {
  return (
    <article className="flex flex-col sm:flex-row gap-4 p-4 rounded-xl border border-white/10 bg-slate-900/50 backdrop-blur-sm transition-all hover:border-white/20 group">
      {/* Date Box */}
      <div className="flex sm:flex-col items-center justify-center min-w-[90px] p-3 rounded-xl border border-white/10 bg-white/5 space-x-2 sm:space-x-0 sm:space-y-1">
        <span className="text-[10px] font-bold uppercase tracking-widest text-white/60">{month}</span>
        <span className="text-2xl font-black text-white">{day}</span>
        <span className="text-[11px] font-medium text-white/60">{time}</span>
      </div>

      {/* Content */}
      <div className="flex-1">
        <div className="flex flex-wrap items-center gap-2 mb-2">
          <h3 className="text-base font-bold text-white group-hover:text-purple-300 transition-colors">
            {title}
          </h3>
          <span className={`px-2 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider border ${
            type === 'chamber' 
              ? 'border-emerald-500/30 bg-emerald-500/10 text-emerald-300' 
              : 'border-blue-500/30 bg-blue-500/10 text-blue-300'
          }`}>
            {type === 'chamber' ? 'Chamber' : 'Community'}
          </span>
          {category && (
            <span className="px-2 py-0.5 rounded-full text-[10px] font-bold border border-white/10 bg-white/5 text-white/60 uppercase tracking-widest">
              {category}
            </span>
          )}
        </div>

        <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-white/50">
          <span className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5" />
            {location}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5" />
            {time}
          </span>
        </div>
      </div>

      {/* Actions */}
      <div className="flex flex-wrap items-center gap-2 mt-2 sm:mt-0 sm:min-w-[150px] justify-end">
        {isPast ? (
          <span className="px-3 py-2 rounded-full text-xs font-black bg-white/5 border border-white/10 text-white/40">
            Ended
          </span>
        ) : (
          <>
            {registerUrl && (
              <a 
                href={registerUrl}
                className="px-3 py-2 rounded-full text-xs font-black bg-gradient-to-r from-emerald-400 to-blue-500 text-slate-900 transition-transform hover:scale-105"
              >
                Register
              </a>
            )}
            {payUrl && (
              <a 
                href={payUrl}
                className="px-3 py-2 rounded-full text-xs font-black bg-gradient-to-r from-amber-400 to-purple-500 text-slate-900 transition-transform hover:scale-105"
              >
                Pay
              </a>
            )}
            {detailsUrl && (
              <a 
                href={detailsUrl}
                className="px-3 py-2 rounded-full text-xs font-black bg-white/10 border border-white/10 text-white transition-opacity hover:opacity-80"
              >
                Details
              </a>
            )}
          </>
        )}
      </div>
    </article>
  );
}
