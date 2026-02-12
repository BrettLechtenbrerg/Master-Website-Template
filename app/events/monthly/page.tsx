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

                <a
                  href="https://maps.google.com/?q=Murray+Area+Chamber+of+Commerce+141+E+5600+S+Murray+UT+84107"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card p-4 flex items-center gap-4 hover:border-pink-500/50 transition-all cursor-pointer group"
                >
                  <div className="w-12 h-12 rounded-xl bg-pink-500/30 flex items-center justify-center group-hover:bg-pink-500/50 transition-colors">
                    <MapPin className="w-6 h-6 text-pink-400" />
                  </div>
                  <div>
                    <p className="text-white/60 text-sm">Location</p>
                    <p className="text-white font-semibold group-hover:text-pink-300 transition-colors">Murray Chamber Office</p>
                    <p className="text-white/60 text-sm">141 E 5600 S #300, Murray, UT 84107</p>
                    <p className="text-white/50 text-xs">Independence Square</p>
                  </div>
                </a>
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

            {/* Right - Event Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              className="relative"
            >
              <div className="glass-card p-4 aspect-[4/3] relative overflow-hidden">
                <Image
                  src="/images/events/mixer.jpg"
                  alt="Women in Business networking event at the Murray Chamber"
                  fill
                  className="object-cover rounded-xl"
                />
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
              <Image
                src="/images/events/workshop.jpg"
                alt="Women in Business workshop and learning session"
                fill
                className="object-cover rounded-xl"
              />
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

      {/* Location & Map */}
      <section className="relative py-16 overflow-hidden">
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Find Us at the Murray Chamber Office
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Located in Independence Square, our office provides a welcoming space for
              women entrepreneurs to connect, learn, and grow together.
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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3026.8834507074874!2d-111.88646788459567!3d40.64115797934068!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87528aa8a4f5e84d%3A0x2f32f8e4e4e2f2f2!2s141%20E%205600%20S%20%23300%2C%20Murray%2C%20UT%2084107!5e0!3m2!1sen!2sus!4v1706000000000"
                width="100%"
                height="100%"
                style={{ border: 0, borderRadius: '0.75rem' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Murray Area Chamber of Commerce - Independence Square"
              />
            </motion.div>

            {/* Location Details */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              className="glass-card p-8"
            >
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                <MapPin className="w-6 h-6 text-pink-400" />
                Murray Chamber Office
              </h3>

              <div className="space-y-4 mb-6">
                <div>
                  <p className="text-white/60 text-sm mb-1">Address</p>
                  <p className="text-white font-medium">141 E 5600 S #300</p>
                  <p className="text-white">Murray, UT 84107</p>
                </div>
                <div>
                  <p className="text-white/60 text-sm mb-1">Located In</p>
                  <p className="text-white font-medium">Independence Square</p>
                </div>
                <div>
                  <p className="text-white/60 text-sm mb-1">Meeting Time</p>
                  <p className="text-white font-medium">3rd Wednesday of Every Month</p>
                  <p className="text-white/60 text-sm">Check calendar for specific times</p>
                </div>
              </div>

              <a
                href="https://maps.google.com/?q=Murray+Area+Chamber+of+Commerce+141+E+5600+S+Murray+UT+84107"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-500 hover:to-pink-400 text-white font-medium transition-all w-full"
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
