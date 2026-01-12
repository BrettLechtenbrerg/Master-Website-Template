'use client';

import { motion } from 'framer-motion';
import { MapPin, Clock, ArrowRight, Calendar, Users } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import FadeIn from './animations/FadeIn';
import StaggerChildren, { StaggerItem } from './animations/StaggerChildren';
import NewsletterSignup from './NewsletterSignup';

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
    image: '/images/events/networking-lunch.jpg',
    attendees: 45,
  },
  {
    id: 2,
    title: 'Ribbon Cutting: Tech Startup Hub',
    date: new Date('2026-01-18'),
    time: '4:00 PM - 5:30 PM',
    location: '5600 S Fashion Blvd',
    category: 'Ribbon Cutting',
    description: 'Join us to celebrate the grand opening of Murray\'s newest tech incubator.',
    image: '/images/events/ribbon-cutting.jpg',
    attendees: 30,
  },
  {
    id: 3,
    title: 'Business After Hours Mixer',
    date: new Date('2026-01-22'),
    time: '5:30 PM - 7:30 PM',
    location: 'The Hive Murray',
    category: 'Networking',
    description: 'Casual networking with complimentary appetizers and drinks.',
    image: '/images/events/mixer.jpg',
    attendees: 60,
  },
  {
    id: 4,
    title: 'Small Business Workshop: Digital Marketing',
    date: new Date('2026-01-25'),
    time: '9:00 AM - 12:00 PM',
    location: 'Chamber Conference Room',
    category: 'Workshop',
    description: 'Learn the latest digital marketing strategies for local businesses.',
    image: '/images/events/workshop.jpg',
    attendees: 25,
  },
];

const categoryColors: Record<string, string> = {
  'Networking': 'bg-purple-500/20 text-purple-300 border-purple-500/30',
  'Ribbon Cutting': 'bg-orange-500/20 text-orange-300 border-orange-500/30',
  'Workshop': 'bg-blue-500/20 text-blue-300 border-blue-500/30',
  'Community': 'bg-green-500/20 text-green-300 border-green-500/30',
};

export default function Events() {
  const formatDate = (date: Date) => ({
    day: date.getDate(),
    month: date.toLocaleString('default', { month: 'short' }),
  });

  return (
    <section className="relative w-full py-16 sm:py-20 md:py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-slate-900/95" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <FadeIn direction="up">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
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
            <Link href="/events/chamber">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-white bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all"
              >
                View All Events
                <Calendar className="w-5 h-5" />
              </motion.button>
            </Link>
          </div>
        </FadeIn>

        {/* Events Grid - Cards with Images */}
        <StaggerChildren staggerDelay={0.1} className="grid md:grid-cols-2 gap-8">
          {upcomingEvents.map((event) => {
            const { day, month } = formatDate(event.date);
            return (
              <StaggerItem key={event.id}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="glass-card overflow-hidden group cursor-pointer h-full"
                >
                  {/* Image Header */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={event.image}
                      alt={event.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      unoptimized
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />

                    {/* Date Badge */}
                    <div className="absolute top-4 left-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-4 py-2 text-center">
                      <span className="block text-2xl font-bold text-white">{day}</span>
                      <span className="block text-xs uppercase text-white/70">{month}</span>
                    </div>

                    {/* Category Badge */}
                    <div className="absolute top-4 right-4">
                      <span className={`px-3 py-1 text-xs font-medium rounded-full border ${categoryColors[event.category]}`}>
                        {event.category}
                      </span>
                    </div>

                    {/* Attendees */}
                    <div className="absolute bottom-4 right-4 flex items-center gap-1.5 text-white/80 text-sm">
                      <Users className="w-4 h-4" />
                      <span>{event.attendees} attending</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white group-hover:text-purple-300 transition-colors">
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

                    <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between">
                      <span className="text-sm text-white/40">Free for members</span>
                      <div className="flex items-center gap-2 text-purple-400 group-hover:text-orange-400 transition-colors">
                        <span className="text-sm font-medium">Register Now</span>
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              </StaggerItem>
            );
          })}
        </StaggerChildren>

        {/* Newsletter CTA with Background Image */}
        <FadeIn direction="up" delay={0.4}>
          <div className="mt-20 relative rounded-3xl overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
              <Image
                src="/images/events/newsletter-bg.jpg"
                alt="Murray Events"
                fill
                className="object-cover"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/90 to-slate-900/95" />
            </div>

            <div className="relative z-10 p-8 md:p-12 lg:p-16 text-center">
              <Calendar className="w-16 h-16 text-purple-400 mx-auto mb-6" />
              <h3 className="text-2xl md:text-3xl font-bold text-white">
                Never Miss an Event
              </h3>
              <p className="mt-4 text-lg text-white/60 max-w-lg mx-auto">
                Subscribe to our newsletter and get event updates, business tips, and community news delivered to your inbox.
              </p>

              <div className="mt-8 max-w-md mx-auto">
                <NewsletterSignup variant="inline" />
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
