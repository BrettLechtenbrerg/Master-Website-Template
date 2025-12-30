'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, Clock, ArrowRight, Calendar } from 'lucide-react';
import Link from 'next/link';

// Sample events - in production, these would come from GHL calendar API
const upcomingEvents = [
  {
    id: 1,
    title: 'Monthly Networking Luncheon',
    date: new Date('2026-01-15'),
    time: '11:30 AM - 1:00 PM',
    location: 'Murray City Hall',
    category: 'Networking',
    description: 'Connect with fellow business owners over lunch. Guest speaker TBA.',
  },
  {
    id: 2,
    title: 'Ribbon Cutting: Tech Startup Hub',
    date: new Date('2026-01-18'),
    time: '4:00 PM - 5:30 PM',
    location: '5600 S Fashion Blvd',
    category: 'Ribbon Cutting',
    description: 'Join us to celebrate the grand opening of Murray\'s newest tech incubator.',
  },
  {
    id: 3,
    title: 'Business After Hours Mixer',
    date: new Date('2026-01-22'),
    time: '5:30 PM - 7:30 PM',
    location: 'The Hive Murray',
    category: 'Networking',
    description: 'Casual networking with complimentary appetizers and drinks.',
  },
  {
    id: 4,
    title: 'Small Business Workshop: Digital Marketing',
    date: new Date('2026-01-25'),
    time: '9:00 AM - 12:00 PM',
    location: 'Chamber Conference Room',
    category: 'Workshop',
    description: 'Learn the latest digital marketing strategies for local businesses.',
  },
];

const categoryColors: Record<string, string> = {
  'Networking': 'bg-purple-500/20 text-purple-300 border-purple-500/30',
  'Ribbon Cutting': 'bg-orange-500/20 text-orange-300 border-orange-500/30',
  'Workshop': 'bg-blue-500/20 text-blue-300 border-blue-500/30',
  'Community': 'bg-green-500/20 text-green-300 border-green-500/30',
};

export default function Events() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const formatDate = (date: Date) => ({
    day: date.getDate(),
    month: date.toLocaleString('default', { month: 'short' }),
  });

  return (
    <section ref={ref} className="relative w-full py-12 sm:py-16 md:py-20 overflow-hidden">
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-20"
        >
          <div>
            <span className="text-orange-400 font-semibold uppercase tracking-wider text-sm">
              Mark Your Calendar
            </span>
            <h2 className="mt-4 text-4xl sm:text-5xl font-bold text-white">
              Upcoming Events
            </h2>
            <p className="mt-4 text-lg text-white/60 max-w-xl">
              Don&apos;t miss out on our networking events, workshops, and community celebrations.
            </p>
          </div>
          <Link href="/events">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary"
            >
              View All Events
              <Calendar className="w-5 h-5" />
            </motion.button>
          </Link>
        </motion.div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          {upcomingEvents.map((event, index) => {
            const { day, month } = formatDate(event.date);
            return (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="event-card p-8 sm:p-10 group cursor-pointer h-full">
                  <div className="flex gap-5">
                    {/* Date Box */}
                    <div className="event-date shrink-0">
                      <span className="day">{day}</span>
                      <span className="month">{month}</span>
                    </div>

                    {/* Event Details */}
                    <div className="flex-1 min-w-0">
                      {/* Category Badge */}
                      <span className={`inline-block px-3 py-1 text-xs font-medium rounded-full border ${categoryColors[event.category]}`}>
                        {event.category}
                      </span>

                      <h3 className="mt-3 text-xl font-semibold text-white group-hover:text-purple-300 transition-colors line-clamp-2">
                        {event.title}
                      </h3>

                      <p className="mt-2 text-white/50 text-sm line-clamp-2">
                        {event.description}
                      </p>

                      <div className="mt-4 flex flex-wrap gap-4 text-sm text-white/60">
                        <div className="flex items-center gap-1.5">
                          <Clock className="w-4 h-4 text-purple-400" />
                          {event.time}
                        </div>
                        <div className="flex items-center gap-1.5">
                          <MapPin className="w-4 h-4 text-orange-400" />
                          {event.location}
                        </div>
                      </div>

                      <div className="mt-4 flex items-center gap-2 text-purple-400 group-hover:text-orange-400 transition-colors">
                        <span className="text-sm font-medium">Register Now</span>
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Newsletter CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-12 sm:mt-16 glass-card p-8 md:p-10 lg:p-12 text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white">
            Never Miss an Event
          </h3>
          <p className="mt-4 text-lg text-white/60 max-w-lg mx-auto">
            Subscribe to our newsletter and get event updates, business tips, and community news delivered to your inbox.
          </p>

          {/* GHL-Ready Newsletter Form */}
          <form className="mt-8 flex flex-col sm:flex-row gap-4 max-w-lg mx-auto ghl-form">
            <input
              type="email"
              placeholder="Enter your email"
              className="input-glass flex-1"
              name="email"
              required
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="btn-primary shrink-0"
            >
              <span>Subscribe</span>
            </motion.button>
          </form>
          <p className="mt-4 text-xs text-white/40">
            By subscribing, you agree to receive emails from Murray Area Chamber of Commerce.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
