'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import {
  Calendar,
  Clock,
  MapPin,
  Users,
  Heart,
  Sparkles,
  ArrowRight,
  CheckCircle,
  Star,
  Award,
  MessageCircle,
  TrendingUp
} from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import Footer from '@/components/Footer';

const programHighlights = [
  { icon: Users, title: 'Empowering Community', description: 'Connect with fellow women business leaders in a supportive environment' },
  { icon: MessageCircle, title: 'Inspiring Speakers', description: 'Hear from successful women entrepreneurs and industry experts' },
  { icon: TrendingUp, title: 'Professional Growth', description: 'Develop skills and strategies to advance your career and business' },
  { icon: Heart, title: 'Meaningful Connections', description: 'Build lasting relationships with like-minded professionals' },
];

const meetingTopics = [
  'Leadership development and executive presence',
  'Work-life integration strategies',
  'Business growth and scaling techniques',
  'Personal branding and visibility',
  'Negotiation and communication skills',
  'Industry trends and market insights',
];

export default function MonthlyEventsPage() {
  return (
    <>
      <PageHeader
        badge="Monthly Events"
        title="Women in Business"
        description="Empowering women entrepreneurs and professionals through connection, education, and support. Join us on the 3rd Wednesday of every month at the Chamber office."
        breadcrumbs={[
          { label: 'Events', href: '/events/chamber' },
          { label: 'Monthly Events' },
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
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 mb-6">
                <Sparkles className="w-4 h-4 text-pink-400" />
                <span className="text-sm font-medium text-white/80">3rd Wednesday Monthly</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Women in Business
              </h2>

              <p className="text-lg text-white/70 mb-8">
                The Women in Business program brings together Murray&apos;s most dynamic women
                entrepreneurs, executives, and professionals for an inspiring monthly gathering.
                Whether you&apos;re launching a startup or leading a team, you&apos;ll find support,
                inspiration, and valuable connections here.
              </p>

              {/* Event Details Cards */}
              <div className="space-y-4 mb-8">
                <div className="glass-card p-4 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-purple-600/30 flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <p className="text-white/60 text-sm">When</p>
                    <p className="text-white font-semibold">3rd Wednesday of Every Month</p>
                  </div>
                </div>

                <div className="glass-card p-4 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-pink-500/30 flex items-center justify-center">
                    <Clock className="w-6 h-6 text-pink-400" />
                  </div>
                  <div>
                    <p className="text-white/60 text-sm">Time</p>
                    <p className="text-white font-semibold">Check Calendar for Details</p>
                  </div>
                </div>

                <div className="glass-card p-4 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-orange-500/30 flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-orange-400" />
                  </div>
                  <div>
                    <p className="text-white/60 text-sm">Location</p>
                    <p className="text-white font-semibold">Murray Chamber Office</p>
                    <p className="text-white/60 text-sm">141 E 5600 S #300, Murray, UT 84107</p>
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
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/50 to-pink-900/30 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-24 h-24 rounded-2xl bg-white/10 mx-auto mb-4 flex items-center justify-center">
                      <Heart className="w-12 h-12 text-white/40" />
                    </div>
                    <p className="text-white/40 text-lg font-medium">Women in Business</p>
                    <p className="text-white/30 text-sm">Event Photo Coming Soon</p>
                  </div>
                </div>
              </div>
              {/* Decorative badge */}
              <div className="absolute -top-4 -right-4 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg">
                <span className="text-white font-bold text-sm">Monthly</span>
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
              Why Join Women in Business?
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              A powerful community dedicated to the success and advancement of women in the Murray business community.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {programHighlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-6 text-center hover:border-pink-500/50 transition-all"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-600 to-pink-500 mx-auto mb-4 flex items-center justify-center">
                  <highlight.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{highlight.title}</h3>
                <p className="text-white/60 text-sm">{highlight.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Meeting Topics */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-purple-900/30 to-transparent pointer-events-none" />
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="glass-card p-4 aspect-video relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-900/50 to-pink-900/30 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-20 h-20 rounded-2xl bg-white/10 mx-auto mb-4 flex items-center justify-center">
                    <Award className="w-10 h-10 text-white/40" />
                  </div>
                  <p className="text-white/40">Inspiring Speakers</p>
                  <p className="text-white/30 text-sm">Photo Coming Soon</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                Topics We Cover
              </h2>
              <p className="text-white/70 mb-6">
                Each month features relevant discussions, expert speakers, and actionable
                insights designed to help you thrive in business and leadership.
              </p>
              <ul className="space-y-3">
                {meetingTopics.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.05 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-pink-400 shrink-0 mt-0.5" />
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
            className="glass-card p-12 border border-pink-500/30"
          >
            <Sparkles className="w-16 h-16 text-pink-400 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Join Our Community
            </h2>
            <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto">
              Whether you&apos;re an established business owner or just starting your entrepreneurial
              journey, Women in Business welcomes you. Come be inspired and inspire others.
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
