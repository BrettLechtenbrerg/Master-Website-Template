'use client';

import { MapPin, Clock, ArrowRight, Calendar } from 'lucide-react';
import Image from 'next/image';

export type EventType = 'chamber' | 'community';

interface EventItemProps {
  type: EventType;
  month: string;
  day: string;
  year?: string;
  time: string;
  title: string;
  location: string;
  description?: string;
  category?: string;
  image?: string;
  registerUrl?: string;
  payUrl?: string;
  detailsUrl?: string;
  isPast?: boolean;
  viewMode?: 'list' | 'card';
}

export default function EventItem({
  type,
  month,
  day,
  year = '2026',
  time,
  title,
  location,
  description,
  category,
  image = '/images/events/placeholder.jpg',
  registerUrl,
  payUrl,
  detailsUrl,
  isPast,
  viewMode = 'list',
}: EventItemProps) {
  if (viewMode === 'card') {
    return (
      <article className="glass-card flex flex-col h-full border border-white/10 overflow-hidden group hover:border-teal-500/50 transition-all duration-300">
        {/* Card Image with Badge */}
        <div className="relative aspect-[4/3] w-full overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute bottom-4 right-4 bg-teal-500 text-white px-3 py-1.5 rounded-lg shadow-xl flex items-center gap-2">
            <div className="flex flex-col items-center leading-none border-r border-white/20 pr-2">
              <Calendar className="w-3.5 h-3.5 mb-1" />
              <span className="text-[10px] uppercase font-bold">{month} {day}</span>
            </div>
            <div className="flex flex-col items-center leading-none">
              <Clock className="w-3.5 h-3.5 mb-1" />
              <span className="text-[10px] font-bold">{time}</span>
            </div>
          </div>
        </div>

        {/* Card Content */}
        <div className="p-6 flex-1 flex flex-col">
          <div className="flex-1">
            <h3 className="text-xl font-bold text-white mb-3 text-center group-hover:text-teal-400 transition-colors">
              {title}
            </h3>
            <div className="flex items-center justify-center gap-2 text-white/50 text-sm mb-4">
              <MapPin className="w-4 h-4 text-teal-500" />
              <span className="text-center">{location}</span>
            </div>
          </div>

          <div className="mt-4 pt-4 border-t border-white/5 flex justify-center">
            <a
              href={detailsUrl || registerUrl || '#'}
              className="inline-flex items-center gap-2 text-teal-400 font-bold hover:text-teal-300 transition-colors group/link"
            >
              Read More
              <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </article>
    );
  }

  // List View
  return (
    <article className="flex flex-col md:flex-row gap-8 py-8 border-b border-white/5 group last:border-0">
      {/* List Image */}
      <div className="relative aspect-[4/3] w-full md:w-64 rounded-xl overflow-hidden flex-shrink-0 border border-white/10 shadow-2xl">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* List Content */}
      <div className="flex-1 flex flex-col justify-center">
        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-teal-400 transition-colors">
          {title}
        </h3>

        <div className="flex flex-wrap gap-x-6 gap-y-2 mb-4 text-white/70">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-teal-500" />
            <span>{month} {day}, {year}, {time}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-teal-500" />
            <span>{location}</span>
          </div>
        </div>

        {description && (
          <p className="text-white/50 text-base leading-relaxed mb-6 max-w-2xl line-clamp-2">
            {description}
          </p>
        )}

        <div>
          <a
            href={detailsUrl || registerUrl || '#'}
            className="inline-flex items-center gap-2 text-teal-400 font-bold hover:text-teal-300 transition-colors group/link"
          >
            Read More
            <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </article>
  );
}

