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

const eventDetails = {
  name: 'Friday Connections',
  tagline: 'Start Your Weekend with Meaningful Connections',
  description: 'Friday Connections is a partner event between the Murray Area Chamber of Commerce and Chamber West. Joined together, this monthly gathering brings business professionals from across the valley to build relationships, share ideas, and strengthen the local business community.',
  schedule: '3rd Friday Monthly',
  time: '8:30 AM - 10:00 AM MST',
  address: {
    venue: 'Utah Trucking Association',
    street: '4181 West 2100 South',
    city: 'West Valley City, UT 84120',
  },
  cost: 'Members: $5.00 | Non-Members: $10.00',
  website: 'https://business.chamberwest.com/events',
  contact: 'Makaila Kelso',
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
    title: 'Monthly Consistency',
    description: 'Build lasting relationships through regular, recurring meetups every 3rd Friday.',
  },
];

export default function FridayConnectionsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-purple-950/20 to-slate-950 w-full">

      <PageHeader
        title="Friday Connections"
        description="A partner event between Murray Chamber and Chamber West on the 3rd Friday of every month"
        badge="Partner Event"
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
                    <p className="text-white font-semibold">3rd Friday Monthly</p>
                    <p className="text-white/60 text-sm">8:30 AM</p>
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
                  <p className="text-white font-semibold">Members: $5.00</p>
                  <p className="text-white/70">Non-Members: $10.00</p>
                </div>
              </div>

              {/* Partner Section */}
              <div className="glass-card p-5 rounded-xl border border-purple-500/30">
                <p className="text-white/60 text-sm mb-2 font-medium uppercase tracking-wider">Partner Event</p>
                <div className="flex items-center gap-4">
                  <div className="text-white font-bold text-lg">Murray Chamber × Chamber West</div>
                </div>
              </div>

              {/* CTA Button */}
              <div className="flex flex-wrap gap-4">
                <a href={eventDetails.website} target="_blank" rel="noopener noreferrer">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="btn-glow flex items-center gap-2"
                  >
                    Register at Chamber West
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </a>
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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.366472408906!2d-111.9904!3d40.725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8752f4c9fb60d62d%3A0xc6c4f877f98e6d2!2s4181%20W%202100%20S%2C%20West%20Valley%20City%2C%20UT%2084120!5e0!3m2!1sen!2sus!4v1706000000000"
                width="100%"
                height="100%"
                style={{ border: 0, borderRadius: '0.75rem' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Utah Trucking Association - Friday Connections Venue"
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
                href="https://maps.google.com/?q=Utah+Trucking+Association+4181+West+2100+South+West+Valley+City+UT+84120"
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
              Join us on the 3rd Friday of every month and become part of a broader business community.
              New faces are always welcome!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href={eventDetails.website} target="_blank" rel="noopener noreferrer">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-glow"
                >
                  Register Now
                </motion.button>
              </a>
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
