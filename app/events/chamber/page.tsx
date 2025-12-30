'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { MapPin, Clock, Calendar, Users, ArrowRight, Filter } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import Footer from '@/components/Footer';
import Link from 'next/link';

const events = [
  {
    id: 1,
    title: 'Monthly Networking Luncheon',
    date: new Date('2026-01-15'),
    time: '11:30 AM - 1:00 PM',
    location: 'Murray City Hall',
    category: 'Networking',
    description: 'Connect with fellow business owners over lunch. Guest speaker TBA. Lunch included with registration.',
    attendees: 45,
    price: 'Members: $25 | Non-Members: $35',
  },
  {
    id: 2,
    title: 'Ribbon Cutting: Tech Startup Hub',
    date: new Date('2026-01-18'),
    time: '4:00 PM - 5:30 PM',
    location: '5600 S Fashion Blvd',
    category: 'Ribbon Cutting',
    description: "Join us to celebrate the grand opening of Murray's newest tech incubator.",
    attendees: 30,
    price: 'Free',
  },
  {
    id: 3,
    title: 'Business After Hours Mixer',
    date: new Date('2026-01-22'),
    time: '5:30 PM - 7:30 PM',
    location: 'The Hive Murray',
    category: 'Networking',
    description: 'Casual networking with complimentary appetizers and drinks. Bring your business cards!',
    attendees: 60,
    price: 'Members: Free | Non-Members: $15',
  },
  {
    id: 4,
    title: 'Small Business Workshop: Digital Marketing',
    date: new Date('2026-01-25'),
    time: '9:00 AM - 12:00 PM',
    location: 'Chamber Conference Room',
    category: 'Workshop',
    description: 'Learn the latest digital marketing strategies for local businesses. Hands-on session included.',
    attendees: 25,
    price: 'Members: $45 | Non-Members: $65',
  },
  {
    id: 5,
    title: 'Annual Golf Tournament',
    date: new Date('2026-06-15'),
    time: '8:00 AM - 4:00 PM',
    location: 'Murray Parkway Golf Course',
    category: 'Special Event',
    description: 'Our biggest fundraiser of the year! Includes 18 holes, cart, lunch, and prizes.',
    attendees: 120,
    price: '$150 per player',
  },
  {
    id: 6,
    title: 'State of the Chamber Address',
    date: new Date('2026-02-10'),
    time: '7:30 AM - 9:00 AM',
    location: 'Murray Cultural Arts Center',
    category: 'Special Event',
    description: 'Annual address featuring updates on chamber initiatives and community partnerships.',
    attendees: 150,
    price: 'Members: $30 | Non-Members: $45',
  },
];

const categories = ['All Events', 'Networking', 'Workshop', 'Ribbon Cutting', 'Special Event'];

const categoryColors: Record<string, string> = {
  'Networking': 'bg-purple-500/20 text-purple-300 border-purple-500/30',
  'Ribbon Cutting': 'bg-orange-500/20 text-orange-300 border-orange-500/30',
  'Workshop': 'bg-blue-500/20 text-blue-300 border-blue-500/30',
  'Special Event': 'bg-green-500/20 text-green-300 border-green-500/30',
};

export default function ChamberEventsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All Events');

  const filteredEvents = events.filter(
    event => selectedCategory === 'All Events' || event.category === selectedCategory
  );

  const formatDate = (date: Date) => ({
    day: date.getDate(),
    month: date.toLocaleString('default', { month: 'short' }),
    full: date.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }),
  });

  return (
    <>
      <PageHeader
        badge="Events"
        title="Chamber Events"
        description="Join us for networking luncheons, workshops, ribbon cuttings, and special events designed to help your business grow."
        breadcrumbs={[
          { label: 'Events', href: '/events/chamber' },
          { label: 'Chamber Events' },
        ]}
      />

      {/* Filter Section */}
      <section className="relative py-8 overflow-hidden">
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-wrap items-center gap-3"
          >
            <Filter className="w-5 h-5 text-white/60" />
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-purple-500 text-white'
                    : 'bg-white/5 text-white/60 hover:bg-white/10 hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Events List */}
      <section className="relative py-8 pb-24 overflow-hidden">
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="space-y-8">
            {filteredEvents.map((event, index) => {
              const { day, month, full } = formatDate(event.date);
              return (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="event-card p-6 sm:p-8"
                >
                  <div className="flex flex-col lg:flex-row gap-6">
                    {/* Date Box */}
                    <div className="event-date shrink-0 self-start">
                      <span className="day">{day}</span>
                      <span className="month">{month}</span>
                    </div>

                    {/* Event Details */}
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        <span className={`inline-block px-3 py-1 text-xs font-medium rounded-full border ${categoryColors[event.category]}`}>
                          {event.category}
                        </span>
                        <span className="text-white/40 text-sm">{full}</span>
                      </div>

                      <h3 className="text-2xl font-semibold text-white">{event.title}</h3>
                      <p className="mt-3 text-white/60">{event.description}</p>

                      <div className="mt-4 flex flex-wrap gap-6 text-sm text-white/60">
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-purple-400" />
                          {event.time}
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-orange-400" />
                          {event.location}
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="w-4 h-4 text-purple-400" />
                          {event.attendees} attending
                        </div>
                      </div>

                      <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
                        <span className="text-white/80 font-medium">{event.price}</span>
                        <button className="btn-primary">
                          Register Now
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Calendar Embed CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-16 glass-card p-8 md:p-12 text-center"
          >
            <Calendar className="w-16 h-16 text-purple-400 mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-white">Add to Your Calendar</h3>
            <p className="mt-4 text-white/60 max-w-lg mx-auto">
              Subscribe to our events calendar and never miss a networking opportunity.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <button className="btn-glow">Subscribe to Calendar</button>
              <Link href="/events/community">
                <button className="btn-secondary">View Community Events</button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}
