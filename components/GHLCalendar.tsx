'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, ExternalLink, X } from 'lucide-react';
import { getCalendarEmbedUrl } from '@/lib/ghl';

interface GHLCalendarProps {
  calendarType?: 'main' | 'networkingLunch' | 'workshop';
  title?: string;
  description?: string;
  buttonText?: string;
  className?: string;
}

export default function GHLCalendar({
  calendarType = 'main',
  title = 'Book an Appointment',
  description = 'Schedule a time that works for you.',
  buttonText = 'Open Calendar',
  className = '',
}: GHLCalendarProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const calendarUrl = getCalendarEmbedUrl(calendarType);

  // Check if calendar is configured
  const isConfigured = calendarUrl && !calendarUrl.includes('YOUR_');

  if (!isConfigured) {
    // Show placeholder when not configured
    return (
      <div className={`glass-card p-6 text-center ${className}`}>
        <Calendar className="w-12 h-12 text-purple-400 mx-auto mb-4" />
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <p className="mt-2 text-white/60 text-sm">{description}</p>
        <p className="mt-4 text-xs text-white/40 italic">
          Calendar booking coming soon!
        </p>
      </div>
    );
  }

  return (
    <>
      <div className={`glass-card p-6 text-center ${className}`}>
        <Calendar className="w-12 h-12 text-purple-400 mx-auto mb-4" />
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <p className="mt-2 text-white/60 text-sm">{description}</p>

        <div className="mt-6 flex flex-col sm:flex-row justify-center gap-3">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setIsModalOpen(true)}
            className="btn-primary"
          >
            <Calendar className="w-4 h-4" />
            {buttonText}
          </motion.button>

          <a
            href={calendarUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-flex items-center justify-center gap-2"
          >
            <ExternalLink className="w-4 h-4" />
            Open in New Tab
          </a>
        </div>
      </div>

      {/* Calendar Modal */}
      {isModalOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
        >
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => setIsModalOpen(false)}
          />

          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="relative w-full max-w-4xl h-[80vh] bg-slate-900 rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
          >
            <div className="flex items-center justify-between p-4 border-b border-white/10">
              <h3 className="text-lg font-semibold text-white">{title}</h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-2 rounded-lg hover:bg-white/10 transition-colors"
              >
                <X className="w-5 h-5 text-white" />
              </button>
            </div>

            <iframe
              src={calendarUrl}
              className="w-full h-[calc(100%-60px)]"
              frameBorder="0"
              title="Booking Calendar"
            />
          </motion.div>
        </motion.div>
      )}
    </>
  );
}
