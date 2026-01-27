'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import {
  Calendar,
  Star,
  Sparkles,
  ArrowRight,
  Wine,
  Flag,
  PartyPopper,
  Trophy,
  MapPin,
  Users,
  Heart
} from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import Footer from '@/components/Footer';

// Annual Events
const annualEvents = [
  {
    id: 1,
    name: 'The Taste of Murray',
    subtitle: 'Annual Gala',
    description: 'Murray\'s premier culinary celebration! Sample exquisite dishes from the finest local restaurants while enjoying live entertainment, silent auctions, and an unforgettable evening of community celebration. This black-tie optional gala brings together business leaders, community members, and food enthusiasts for a night of elegance and flavor.',
    icon: Wine,
    color: 'from-purple-600 to-purple-800',
    accentColor: 'purple',
    highlights: [
      'Tastings from 20+ local restaurants',
      'Live entertainment and dancing',
      'Silent auction with exclusive items',
      'Networking with community leaders',
      'Awards ceremony honoring local businesses',
    ],
    season: 'Check calendar for date',
    image: '/images/events/gala.jpg',
  },
  {
    id: 2,
    name: 'Annual Golf Tournament',
    subtitle: 'Chamber Classic',
    description: 'Tee off for a great cause at the Murray Chamber\'s Annual Golf Tournament! This beloved tradition brings together golfers of all skill levels for a day of friendly competition, networking on the green, and supporting local business initiatives. Enjoy contests, prizes, and the camaraderie that makes this event a highlight of the year.',
    icon: Flag,
    color: 'from-green-600 to-green-800',
    accentColor: 'green',
    highlights: [
      'Scramble format for all skill levels',
      'Hole-in-one contests with prizes',
      'Longest drive & closest to pin competitions',
      'Networking lunch and awards dinner',
      'Sponsorship opportunities available',
    ],
    season: 'Summer',
    image: '/images/events/golf.jpg',
  },
  {
    id: 3,
    name: 'Magic Over Murray',
    subtitle: 'Balloon Festival',
    description: 'Watch the skies come alive with color at the Magic Over Murray Balloon Festival! This spectacular annual event features dozens of hot air balloons, tethered rides, live music, food vendors, and family-friendly activities. As dawn breaks, witness the breathtaking balloon glow and mass ascension that makes this one of Utah\'s most magical community events.',
    icon: PartyPopper,
    color: 'from-orange-500 to-red-600',
    accentColor: 'orange',
    highlights: [
      'Hot air balloon mass ascension',
      'Evening balloon glow event',
      'Tethered balloon rides',
      'Live music and entertainment',
      'Food trucks and vendor village',
      'Kids\' activities and games',
    ],
    season: 'Fall',
    image: '/images/events/balloon.jpg',
  },
];

export default function AnnualEventsPage() {
  return (
    <>
      <PageHeader
        badge="Annual Events"
        title="Signature Events"
        description="Experience Murray's most anticipated annual celebrations. From elegant galas to community festivals, these signature events bring our community together year after year."
        breadcrumbs={[
          { label: 'Events', href: '/events/chamber' },
          { label: 'Annual Events' },
        ]}
      />

      {/* Intro Section */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-transparent pointer-events-none" />
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-orange-500/20 border border-purple-500/30 mb-6">
              <Trophy className="w-4 h-4 text-orange-400" />
              <span className="text-sm font-medium text-white/80">Signature Experiences</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Events That Define Our Community
            </h2>
            <p className="text-lg text-white/70">
              For over 75 years, the Murray Area Chamber of Commerce has brought our community
              together through unforgettable annual events. These signature celebrations showcase
              the best of Murray - our businesses, our people, and our spirit.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Annual Events */}
      <section className="relative py-8 overflow-hidden">
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-20">
          {annualEvents.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
            >
              {/* Content */}
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${event.color} mb-6`}>
                  <event.icon className="w-4 h-4 text-white" />
                  <span className="text-sm font-bold text-white">{event.subtitle}</span>
                </div>

                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  {event.name}
                </h2>

                <p className="text-white/70 mb-6 leading-relaxed">
                  {event.description}
                </p>

                {/* Season Badge */}
                <div className="flex items-center gap-2 mb-6 text-white/60">
                  <Calendar className="w-5 h-5" />
                  <span>{event.season}</span>
                </div>

                {/* Highlights */}
                <div className="glass-card p-6 mb-8">
                  <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                    <Star className="w-5 h-5 text-orange-400" />
                    Event Highlights
                  </h4>
                  <ul className="space-y-2">
                    {event.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Sparkles className={`w-4 h-4 shrink-0 mt-1 ${
                          event.accentColor === 'purple' ? 'text-purple-400' :
                          event.accentColor === 'green' ? 'text-green-400' :
                          'text-orange-400'
                        }`} />
                        <span className="text-white/80 text-sm">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link href="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-glow"
                  >
                    Get Event Updates
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </Link>
              </div>

              {/* Event Image */}
              <div className={`relative ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="glass-card p-4 aspect-[4/3] relative overflow-hidden">
                  {event.image ? (
                    <Image
                      src={event.image}
                      alt={event.name}
                      fill
                      className="object-cover rounded-xl"
                    />
                  ) : (
                    <>
                      <div className={`absolute inset-0 bg-gradient-to-br ${event.color} opacity-30`} />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center p-8">
                          <div className="w-28 h-28 rounded-2xl bg-white/10 mx-auto mb-4 flex items-center justify-center">
                            <event.icon className="w-14 h-14 text-white/40" />
                          </div>
                          <p className="text-white/50 text-xl font-bold">{event.name}</p>
                          <p className="text-white/30 text-sm mt-2">Event Photo Coming Soon</p>
                        </div>
                      </div>
                    </>
                  )}
                </div>
                {/* Decorative badge */}
                <div className={`absolute -top-4 -right-4 px-4 py-2 rounded-full bg-gradient-to-r ${event.color} shadow-lg`}>
                  <span className="text-white font-bold text-sm">Annual</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Sponsorship CTA */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-purple-900/30 to-transparent pointer-events-none" />
        <div className="relative z-10 w-full max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-card p-12 border border-orange-500/30"
          >
            <Heart className="w-16 h-16 text-orange-400 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Sponsor a Signature Event
            </h2>
            <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto">
              Put your brand in front of thousands of community members. Event sponsorships
              offer unparalleled visibility and demonstrate your commitment to Murray.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-glow"
                >
                  Become a Sponsor
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>
              <Link href="/sponsors">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-secondary"
                >
                  View Sponsorship Options
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Other Events CTA */}
      <section className="relative py-16 overflow-hidden">
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Don&apos;t Miss Our Regular Events
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto mb-8">
              In addition to our signature annual events, we host weekly and monthly gatherings
              to keep our business community connected year-round.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <Link href="/events/weekly">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="glass-card p-8 hover:border-orange-500/50 transition-all cursor-pointer group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center shrink-0">
                    <Users className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-orange-300 transition-colors">
                      Weekly: Referral Community
                    </h3>
                    <p className="text-white/60">
                      Every Thursday at The Break Restaurant. Networking and education from 11:30 AM - 1:00 PM.
                    </p>
                  </div>
                </div>
              </motion.div>
            </Link>

            <Link href="/events/monthly">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="glass-card p-8 hover:border-pink-500/50 transition-all cursor-pointer group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shrink-0">
                    <Sparkles className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-pink-300 transition-colors">
                      Monthly: Women in Business
                    </h3>
                    <p className="text-white/60">
                      3rd Wednesday of every month at the Chamber office. Empowering women entrepreneurs.
                    </p>
                  </div>
                </div>
              </motion.div>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
