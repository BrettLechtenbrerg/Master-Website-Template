'use client';

import { motion } from 'framer-motion';
import { MapPin, Clock, Calendar, ExternalLink } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import Footer from '@/components/Footer';
import Link from 'next/link';

const communityEvents = [
  {
    id: 1,
    title: 'Murray City Winterfest',
    date: new Date('2026-01-20'),
    time: '10:00 AM - 6:00 PM',
    location: 'Murray City Park',
    organizer: 'Murray City',
    description: 'Annual winter celebration with ice skating, hot chocolate, and family activities.',
    link: '#',
  },
  {
    id: 2,
    title: 'Murray Farmers Market',
    date: new Date('2026-05-01'),
    time: '8:00 AM - 1:00 PM',
    location: 'Murray Park',
    organizer: 'Murray City',
    description: 'Fresh produce, local vendors, and artisan goods every Saturday through October.',
    link: '#',
  },
  {
    id: 3,
    title: 'Jazz in the Park Concert Series',
    date: new Date('2026-06-15'),
    time: '7:00 PM - 9:00 PM',
    location: 'Murray City Amphitheater',
    organizer: 'Murray Arts Council',
    description: 'Free outdoor concert featuring local and regional jazz performers.',
    link: '#',
  },
  {
    id: 4,
    title: 'Murray City Independence Day Celebration',
    date: new Date('2026-07-04'),
    time: '6:00 PM - 10:00 PM',
    location: 'Murray City Park',
    organizer: 'Murray City',
    description: 'Fireworks spectacular with live entertainment, food trucks, and family fun.',
    link: '#',
  },
  {
    id: 5,
    title: 'Murray High School Homecoming Parade',
    date: new Date('2026-09-25'),
    time: '4:00 PM - 6:00 PM',
    location: 'State Street',
    organizer: 'Murray School District',
    description: 'Annual homecoming parade featuring floats, bands, and community spirit.',
    link: '#',
  },
  {
    id: 6,
    title: 'Holiday Lights Festival',
    date: new Date('2026-12-05'),
    time: '5:00 PM - 9:00 PM',
    location: 'Murray City Center',
    organizer: 'Murray City',
    description: 'Tree lighting ceremony with carolers, Santa, and holiday festivities.',
    link: '#',
  },
];

export default function CommunityEventsPage() {
  const formatDate = (date: Date) => ({
    day: date.getDate(),
    month: date.toLocaleString('default', { month: 'short' }),
    full: date.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }),
  });

  return (
    <>
      <PageHeader
        badge="Community"
        title="Community Calendar"
        description="Stay connected with Murray's vibrant community. Discover local events, festivals, and happenings throughout the year."
        breadcrumbs={[
          { label: 'Events', href: '/events/chamber' },
          { label: 'Community Calendar' },
        ]}
      />

      {/* Events List */}
      <section className="relative py-16 overflow-hidden">
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {communityEvents.map((event, index) => {
              const { day, month, full } = formatDate(event.date);
              return (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-card p-6 group"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="event-date shrink-0 !w-16 !h-16">
                      <span className="day !text-xl">{day}</span>
                      <span className="month !text-xs">{month}</span>
                    </div>
                    <div>
                      <span className="text-xs text-white/40">{full}</span>
                      <h3 className="text-lg font-semibold text-white group-hover:text-purple-300 transition-colors">
                        {event.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-white/60 text-sm mb-4">{event.description}</p>

                  <div className="space-y-2 text-sm text-white/50 mb-4">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-purple-400" />
                      {event.time}
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-orange-400" />
                      {event.location}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-white/10">
                    <span className="text-xs text-white/40">By {event.organizer}</span>
                    <a href={event.link} className="flex items-center gap-1 text-sm text-purple-400 hover:text-purple-300 transition-colors">
                      Learn More
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Submit Event CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-16 glass-strong rounded-3xl p-8 md:p-12 text-center"
          >
            <Calendar className="w-16 h-16 text-orange-400 mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-white">Have a Community Event?</h3>
            <p className="mt-4 text-white/60 max-w-lg mx-auto">
              Submit your Murray community event to be featured on our calendar.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/contact">
                <button className="btn-glow">Submit an Event</button>
              </Link>
              <Link href="/events/chamber">
                <button className="btn-secondary">View Chamber Events</button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}
