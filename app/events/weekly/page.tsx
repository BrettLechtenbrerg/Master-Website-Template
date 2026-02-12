'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import {
  Calendar,
  Clock,
  MapPin,
  Users,
  Utensils,
  Handshake,
  GraduationCap,
  ArrowRight,
  CheckCircle,
  Repeat,
  Star
} from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import Footer from '@/components/Footer';

const eventHighlights = [
  { icon: Handshake, title: 'Networking', description: 'Connect with local business owners and build valuable relationships' },
  { icon: GraduationCap, title: 'Education', description: 'Learn new skills and strategies from expert presenters each week' },
  { icon: Utensils, title: 'Great Food', description: 'Enjoy a delicious lunch at The Murray Break Sports Grill' },
  { icon: Users, title: 'Community', description: 'Be part of a supportive business community that helps each other grow' },
];

const whatToExpect = [
  'Structured networking time to meet fellow business owners',
  'Weekly educational presentation on business topics',
  'Opportunity to share your business with the group',
  'Referral exchange and lead sharing',
  'Supportive community focused on mutual success',
  'Delicious lunch included with registration',
];

export default function WeeklyEventsPage() {
  return (
    <>
      <PageHeader
        badge="Weekly Events"
        title="Referral Community"
        description="Join Murray's premier weekly networking and education group. Every Thursday, local business owners come together to build relationships, share referrals, and grow their businesses."
        breadcrumbs={[
          { label: 'Events', href: '/events/chamber' },
          { label: 'Weekly Events' },
        ]}
      />

      {/* Main Event Info */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-transparent pointer-events-none" />
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Event Details */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-orange-500/20 border border-purple-500/30 mb-6">
                <Repeat className="w-4 h-4 text-orange-400" />
                <span className="text-sm font-medium text-white/80">Every Thursday</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                The Referral Community
              </h2>

              <p className="text-lg text-white/70 mb-8">
                The Referral Community is Murray&apos;s most active weekly networking group.
                Each Thursday, business owners gather at The Murray Break Sports Grill for a powerful
                combination of networking and education designed to help you grow your business
                through meaningful connections and referrals.
              </p>

              {/* Event Details Cards */}
              <div className="space-y-4 mb-8">
                <div className="glass-card p-4 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-purple-600/30 flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <p className="text-white/60 text-sm">When</p>
                    <p className="text-white font-semibold">Every Thursday</p>
                  </div>
                </div>

                <div className="glass-card p-4 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-orange-500/30 flex items-center justify-center">
                    <Clock className="w-6 h-6 text-orange-400" />
                  </div>
                  <div>
                    <p className="text-white/60 text-sm">Time</p>
                    <p className="text-white font-semibold">11:30 AM - 1:00 PM</p>
                  </div>
                </div>

                <a
                  href="https://maps.google.com/?q=The+Murray+Break+Sports+Grill+4760+S+900+E+Murray+UT+84117"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card p-4 flex items-center gap-4 hover:border-green-500/50 transition-all cursor-pointer group"
                >
                  <div className="w-12 h-12 rounded-xl bg-green-500/30 flex items-center justify-center group-hover:bg-green-500/50 transition-colors">
                    <MapPin className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <p className="text-white/60 text-sm">Location</p>
                    <p className="text-white font-semibold group-hover:text-green-300 transition-colors">The Murray Break Sports Grill</p>
                    <p className="text-white/60 text-sm">4760 S 900 E, Murray, UT 84117</p>
                    <p className="text-white/50 text-xs">Ivy Place Shopping Village</p>
                  </div>
                </a>
              </div>

            </motion.div>

            {/* Right - Event Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              className="relative"
            >
              <div className="glass-card p-4 aspect-[4/3] relative overflow-hidden">
                <Image
                  src="/images/events/networking-lunch-1.png"
                  alt="Referral Community networking lunch at The Murray Break Sports Grill"
                  fill
                  className="object-cover rounded-xl"
                />
              </div>
              {/* Decorative badge */}
              <div className="absolute -top-4 -right-4 px-4 py-2 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 shadow-lg">
                <span className="text-white font-bold text-sm">Weekly</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="relative py-16 overflow-hidden">
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Why Join the Referral Community?
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              More than just a networking group - it&apos;s a community dedicated to helping each other succeed.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {eventHighlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-6 text-center hover:border-orange-500/50 transition-all"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-600 to-orange-500 mx-auto mb-4 flex items-center justify-center">
                  <highlight.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{highlight.title}</h3>
                <p className="text-white/60 text-sm">{highlight.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-purple-900/30 to-transparent pointer-events-none" />
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="glass-card p-4 aspect-video relative overflow-hidden"
            >
              <Image
                src="/images/events/networking-lunch-2.png"
                alt="Business networking at the Referral Community"
                fill
                className="object-cover rounded-xl"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                What to Expect
              </h2>
              <p className="text-white/70 mb-6">
                Each Referral Community meeting follows a proven format designed to maximize
                your networking ROI and help you build genuine business relationships.
              </p>
              <ul className="space-y-3">
                {whatToExpect.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.05 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
                    <span className="text-white/80">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Location & Map */}
      <section className="relative py-16 overflow-hidden">
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Find Us at The Murray Break Sports Grill
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Located in Ivy Place Shopping Village, The Murray Break Sports Grill offers the perfect atmosphere
              for networking over a delicious lunch.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="glass-card p-4 h-80"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3025.8!2d-111.8686!3d40.6589!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87528a9e1d8b5555%3A0x1234567890abcdef!2s4760%20S%20900%20E%2C%20Murray%2C%20UT%2084117!5e0!3m2!1sen!2sus!4v1706000000000"
                width="100%"
                height="100%"
                style={{ border: 0, borderRadius: '0.75rem' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="The Murray Break Sports Grill - Ivy Place Shopping Village"
              />
            </motion.div>

            {/* Location Details */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              className="glass-card p-8"
            >
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                <MapPin className="w-6 h-6 text-green-400" />
                The Murray Break Sports Grill
              </h3>

              <div className="space-y-4 mb-6">
                <div>
                  <p className="text-white/60 text-sm mb-1">Address</p>
                  <p className="text-white font-medium">4760 S 900 E</p>
                  <p className="text-white">Murray, UT 84117</p>
                </div>
                <div>
                  <p className="text-white/60 text-sm mb-1">Located In</p>
                  <p className="text-white font-medium">Ivy Place Shopping Village</p>
                </div>
                <div>
                  <p className="text-white/60 text-sm mb-1">Meeting Time</p>
                  <p className="text-white font-medium">Every Thursday</p>
                  <p className="text-white">11:30 AM - 1:00 PM</p>
                </div>
              </div>

              <a
                href="https://maps.google.com/?q=The+Murray+Break+Sports+Grill+4760+S+900+E+Murray+UT+84117"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-green-600 to-green-700 hover:from-green-500 hover:to-green-600 text-white font-medium transition-all w-full"
              >
                <MapPin className="w-5 h-5" />
                Get Directions
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 overflow-hidden">
        <div className="relative z-10 w-full max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-card p-12 border border-orange-500/30"
          >
            <Star className="w-16 h-16 text-orange-400 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Grow Your Network?
            </h2>
            <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto">
              Join us this Thursday at The Murray Break Sports Grill. First-time visitors are welcome!
              Come see why the Referral Community is Murray&apos;s favorite networking group.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="w-full sm:w-auto">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-glow w-full"
                >
                  Contact Us
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>
              <Link href="/events/chamber">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-secondary"
                >
                  View All Events
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}
