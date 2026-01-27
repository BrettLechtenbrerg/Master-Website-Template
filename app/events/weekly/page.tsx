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
  { icon: Utensils, title: 'Great Food', description: 'Enjoy a delicious lunch at The Break Restaurant' },
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
                Each Thursday, business owners gather at The Break Restaurant for a powerful
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

                <div className="glass-card p-4 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-green-500/30 flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <p className="text-white/60 text-sm">Location</p>
                    <p className="text-white font-semibold">The Break Restaurant</p>
                    <p className="text-white/60 text-sm">Murray, Utah</p>
                  </div>
                </div>
              </div>

              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-glow"
                >
                  Register to Attend
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>
            </motion.div>

            {/* Right - Event Image Placeholder */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              className="relative"
            >
              <div className="glass-card p-4 aspect-[4/3] relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/50 to-orange-900/30 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-24 h-24 rounded-2xl bg-white/10 mx-auto mb-4 flex items-center justify-center">
                      <Handshake className="w-12 h-12 text-white/40" />
                    </div>
                    <p className="text-white/40 text-lg font-medium">Referral Community</p>
                    <p className="text-white/30 text-sm">Event Photo Coming Soon</p>
                  </div>
                </div>
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
              <div className="absolute inset-0 bg-gradient-to-br from-purple-900/50 to-orange-900/30 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-20 h-20 rounded-2xl bg-white/10 mx-auto mb-4 flex items-center justify-center">
                    <Users className="w-10 h-10 text-white/40" />
                  </div>
                  <p className="text-white/40">Networking in Action</p>
                  <p className="text-white/30 text-sm">Photo Coming Soon</p>
                </div>
              </div>
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
              Join us this Thursday at The Break Restaurant. First-time visitors are welcome!
              Come see why the Referral Community is Murray&apos;s favorite networking group.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-glow"
                >
                  Register Now
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
