'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import {
  Calendar,
  Clock,
  MapPin,
  Users,
  Coffee,
  ArrowRight,
  ExternalLink
} from 'lucide-react';
import PageHeader from '@/components/PageHeader';

// Placeholder event data - update with real information
const eventDetails = {
  name: 'Friday Connections',
  tagline: 'Start Your Weekend with Meaningful Connections',
  description: 'Friday Connections is our signature weekly community networking event. Local professionals, business owners, and community leaders gather to build relationships, share opportunities, and strengthen the Murray business ecosystem in a relaxed, morning setting.',
  schedule: 'Every Friday',
  time: '8:00 AM - 9:30 AM',
  address: {
    venue: 'Murray Chamber Office',
    street: '141 E 5600 S #300',
    city: 'Murray, UT 84107',
  },
  cost: 'Free for Chamber Members | $10 for Guests',
  image: '/images/events/friday-connections.jpg',
};

// Benefits of attending
const benefits = [
  {
    icon: Users,
    title: 'Expand Your Network',
    description: 'Meet local professionals and business owners in a relaxed, welcoming environment.',
  },
  {
    icon: Coffee,
    title: 'Casual Atmosphere',
    description: 'Enjoy complimentary coffee and light refreshments while making connections.',
  },
  {
    icon: Calendar,
    title: 'Weekly Consistency',
    description: 'Build lasting relationships through regular, recurring meetups every Friday.',
  },
];

export default function FridayConnectionsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-purple-950/20 to-slate-950 w-full">

      <PageHeader
        title="Friday Connections"
        description="Community networking event bringing Murray professionals together every Friday"
        badge="Community Event"
      />

      {/* Event Overview Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-start">

            {/* Left Column - Event Image */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Placeholder Image Container */}
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] glass-card">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-orange-500/20 flex items-center justify-center">
                  <div className="text-center p-8">
                    <Coffee className="w-16 h-16 text-purple-400 mx-auto mb-4" />
                    <p className="text-white/60 text-lg">Event Photo Placeholder</p>
                    <p className="text-white/40 text-sm mt-2">Replace with: /images/events/friday-connections.jpg</p>
                  </div>
                </div>
              </div>

              {/* Event Badge */}
              <div className="absolute -bottom-4 -right-4 glass-card p-4 rounded-xl">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-orange-500 flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Every Friday</p>
                    <p className="text-white/60 text-sm">8:00 AM</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Event Details */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-gradient-to-r from-purple-500/20 to-orange-500/20 text-purple-300 border border-purple-500/30 mb-4">
                  Community Networking
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  {eventDetails.tagline}
                </h2>
                <p className="text-white/70 text-lg leading-relaxed">
                  {eventDetails.description}
                </p>
              </div>

              {/* Event Info Cards */}
              <div className="grid sm:grid-cols-2 gap-4">
                {/* Schedule */}
                <div className="glass-card p-5 rounded-xl">
                  <div className="flex items-center gap-3 mb-2">
                    <Clock className="w-5 h-5 text-orange-400" />
                    <span className="text-white/60 text-sm">Schedule</span>
                  </div>
                  <p className="text-white font-semibold">{eventDetails.schedule}</p>
                  <p className="text-white/70">{eventDetails.time}</p>
                </div>

                {/* Cost */}
                <div className="glass-card p-5 rounded-xl">
                  <div className="flex items-center gap-3 mb-2">
                    <Users className="w-5 h-5 text-purple-400" />
                    <span className="text-white/60 text-sm">Admission</span>
                  </div>
                  <p className="text-white font-semibold">Free for Members</p>
                  <p className="text-white/70">$10 for Guests</p>
                </div>
              </div>

              {/* CTA Button */}
              <div className="flex flex-wrap gap-4">
                <Link href="/join">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="btn-glow flex items-center gap-2"
                  >
                    Join Chamber for Free Access
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </Link>
                <Link href="/contact">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="btn-secondary flex items-center gap-2"
                  >
                    Contact Us
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Location Section with Map */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 to-transparent" />
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Event Location
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Join us at our weekly gathering spot in the heart of Murray
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Map Placeholder */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card p-4 rounded-2xl overflow-hidden aspect-[4/3]"
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

            {/* Address Details */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="glass-card p-8 rounded-2xl">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-purple-500 to-orange-500 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Venue Address</h3>
                    <p className="text-white/80 text-lg">{eventDetails.address.venue}</p>
                    <p className="text-white/60">{eventDetails.address.street}</p>
                    <p className="text-white/60">{eventDetails.address.city}</p>
                  </div>
                </div>
              </div>

              <div className="glass-card p-8 rounded-2xl">
                <h3 className="text-xl font-bold text-white mb-4">Getting There</h3>
                <ul className="space-y-3 text-white/70">
                  <li className="flex items-start gap-3">
                    <span className="text-purple-400">•</span>
                    <span>Free parking available on-site</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-purple-400">•</span>
                    <span>Accessible entrance on main level</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-purple-400">•</span>
                    <span>Look for the Chamber welcome sign</span>
                  </li>
                </ul>
              </div>

              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                Open in Google Maps
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Attend Friday Connections?
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Discover the benefits of joining our weekly community networking event
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-8 rounded-2xl text-center group hover:bg-white/10 transition-colors"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-purple-500 to-orange-500 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-white/60">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-orange-500/10 to-purple-500/10" />
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Connect?
            </h2>
            <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
              Join us this Friday and become part of Murray&apos;s thriving business community.
              New faces are always welcome!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/join">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-glow"
                >
                  Become a Member
                </motion.button>
              </Link>
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-secondary"
                >
                  Learn More
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
