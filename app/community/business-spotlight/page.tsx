'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import {
  Building2,
  User,
  MapPin,
  Phone,
  Mail,
  Globe,
  Clock,
  Star,
  Award,
  ExternalLink,
  Calendar
} from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';

// Placeholder business data - update with real information
const spotlightBusiness = {
  name: '[Business Name - TBD]',
  tagline: '[Business Tagline or Slogan]',
  description: '[Business description goes here. Tell the story of this local Murray business - their history, what makes them special, their commitment to the community, and why they were selected for the Chamber spotlight.]',
  category: '[Industry/Category]',
  yearEstablished: '[Year]',
  owner: {
    name: '[Owner/Manager Name]',
    title: '[Title/Position]',
    bio: '[Brief bio about the owner/manager - their background, vision for the business, and involvement in the Murray community.]',
    image: '/images/spotlight/owner.jpg', // Placeholder
  },
  contact: {
    phone: '(801) XXX-XXXX',
    email: 'info@business.com',
    website: 'www.business.com',
  },
  address: {
    street: '[Street Address]',
    city: 'Murray, UT 84107',
  },
  hours: [
    { day: 'Monday - Friday', time: '9:00 AM - 6:00 PM' },
    { day: 'Saturday', time: '10:00 AM - 4:00 PM' },
    { day: 'Sunday', time: 'Closed' },
  ],
  images: {
    storefront: '/images/spotlight/storefront.jpg',
    interior: '/images/spotlight/interior.jpg',
  },
  highlights: [
    'Chamber Member Since [Year]',
    '[Years] Years Serving Murray',
    '[Special Achievement or Award]',
    'Community Partner',
  ],
};

export default function BusinessSpotlightPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-purple-950/20 to-slate-950">
      <Navigation />

      <PageHeader
        title="Business Spotlight"
        description="Celebrating the local businesses that make Murray great"
        badge="Featured Business"
      />

      {/* Business Overview Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

          {/* Current Spotlight Banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-4 rounded-xl mb-12 text-center bg-gradient-to-r from-purple-500/10 to-orange-500/10 border border-purple-500/30"
          >
            <div className="flex items-center justify-center gap-3">
              <Star className="w-5 h-5 text-orange-400" />
              <span className="text-white font-medium">January 2026 Featured Business</span>
              <Star className="w-5 h-5 text-orange-400" />
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">

            {/* Left Column - Business Images */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {/* Main Business Image Placeholder */}
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] glass-card">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-orange-500/20 flex items-center justify-center">
                  <div className="text-center p-8">
                    <Building2 className="w-16 h-16 text-purple-400 mx-auto mb-4" />
                    <p className="text-white/60 text-lg">Business/Storefront Photo</p>
                    <p className="text-white/40 text-sm mt-2">Replace with: /images/spotlight/storefront.jpg</p>
                  </div>
                </div>
              </div>

              {/* Secondary Image */}
              <div className="relative rounded-2xl overflow-hidden aspect-[16/9] glass-card">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-purple-500/20 flex items-center justify-center">
                  <div className="text-center p-8">
                    <Building2 className="w-12 h-12 text-orange-400 mx-auto mb-3" />
                    <p className="text-white/60">Interior/Products Photo</p>
                    <p className="text-white/40 text-sm mt-1">Replace with: /images/spotlight/interior.jpg</p>
                  </div>
                </div>
              </div>

              {/* Business Highlights */}
              <div className="grid grid-cols-2 gap-4">
                {spotlightBusiness.highlights.map((highlight, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="glass-card p-4 rounded-xl flex items-center gap-3"
                  >
                    <Award className="w-5 h-5 text-orange-400 flex-shrink-0" />
                    <span className="text-white/80 text-sm">{highlight}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Column - Business Details */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-gradient-to-r from-purple-500/20 to-orange-500/20 text-purple-300 border border-purple-500/30 mb-4">
                  {spotlightBusiness.category}
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {spotlightBusiness.name}
                </h2>
                <p className="text-orange-400 text-lg italic mb-4">
                  {spotlightBusiness.tagline}
                </p>
                <p className="text-white/70 text-lg leading-relaxed">
                  {spotlightBusiness.description}
                </p>
              </div>

              {/* Contact Info Cards */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-white">Contact Information</h3>
                <div className="grid gap-3">
                  <div className="glass-card p-4 rounded-xl flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center">
                      <Phone className="w-5 h-5 text-purple-400" />
                    </div>
                    <div>
                      <p className="text-white/60 text-sm">Phone</p>
                      <p className="text-white font-medium">{spotlightBusiness.contact.phone}</p>
                    </div>
                  </div>
                  <div className="glass-card p-4 rounded-xl flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-orange-500/20 flex items-center justify-center">
                      <Mail className="w-5 h-5 text-orange-400" />
                    </div>
                    <div>
                      <p className="text-white/60 text-sm">Email</p>
                      <p className="text-white font-medium">{spotlightBusiness.contact.email}</p>
                    </div>
                  </div>
                  <div className="glass-card p-4 rounded-xl flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center">
                      <Globe className="w-5 h-5 text-purple-400" />
                    </div>
                    <div>
                      <p className="text-white/60 text-sm">Website</p>
                      <p className="text-white font-medium">{spotlightBusiness.contact.website}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="glass-card p-6 rounded-xl">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-5 h-5 text-orange-400" />
                  <h3 className="text-lg font-bold text-white">Business Hours</h3>
                </div>
                <div className="space-y-2">
                  {spotlightBusiness.hours.map((item, index) => (
                    <div key={index} className="flex justify-between text-white/70">
                      <span>{item.day}</span>
                      <span className="text-white">{item.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Owner/Manager Section */}
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
              Meet the Owner
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              The faces behind the business making an impact in our community
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="glass-card p-8 md:p-12 rounded-2xl">
              <div className="grid md:grid-cols-3 gap-8 items-center">
                {/* Owner Photo Placeholder */}
                <div className="md:col-span-1">
                  <div className="relative rounded-2xl overflow-hidden aspect-square glass-card">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-orange-500/20 flex items-center justify-center">
                      <div className="text-center p-4">
                        <User className="w-16 h-16 text-purple-400 mx-auto mb-3" />
                        <p className="text-white/60 text-sm">Owner Photo</p>
                        <p className="text-white/40 text-xs mt-1">/images/spotlight/owner.jpg</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Owner Info */}
                <div className="md:col-span-2 space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white">{spotlightBusiness.owner.name}</h3>
                    <p className="text-orange-400 font-medium">{spotlightBusiness.owner.title}</p>
                  </div>
                  <p className="text-white/70 leading-relaxed">
                    {spotlightBusiness.owner.bio}
                  </p>
                  <div className="pt-4 border-t border-white/10">
                    <p className="text-white/50 text-sm">
                      Proudly serving Murray since {spotlightBusiness.yearEstablished}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Location Section with Map */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Visit Us
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Stop by and experience what makes this business special
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Map Placeholder */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl overflow-hidden aspect-[4/3]"
            >
              <div className="w-full h-full bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
                <div className="text-center p-8">
                  <MapPin className="w-16 h-16 text-purple-400 mx-auto mb-4" />
                  <p className="text-white/60 text-lg">Google Map Embed Placeholder</p>
                  <p className="text-white/40 text-sm mt-2">Add iframe embed code here</p>
                  <code className="block mt-4 text-xs text-purple-400/60 bg-black/30 p-3 rounded-lg">
                    {`<iframe src="https://maps.google.com/..." />`}
                  </code>
                </div>
              </div>
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
                    <h3 className="text-xl font-bold text-white mb-2">Business Address</h3>
                    <p className="text-white/80 text-lg">{spotlightBusiness.name}</p>
                    <p className="text-white/60">{spotlightBusiness.address.street}</p>
                    <p className="text-white/60">{spotlightBusiness.address.city}</p>
                  </div>
                </div>
              </div>

              <div className="glass-card p-8 rounded-2xl">
                <h3 className="text-xl font-bold text-white mb-4">Support Local</h3>
                <p className="text-white/70 mb-6">
                  When you support local businesses like {spotlightBusiness.name}, you&apos;re investing
                  in our community. Local businesses create jobs, support local causes, and keep
                  Murray thriving.
                </p>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  Get Directions
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Nominate a Business CTA */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-orange-500/10 to-purple-500/10" />
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Calendar className="w-12 h-12 text-orange-400 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Know a Business That Deserves the Spotlight?
            </h2>
            <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
              We&apos;re always looking for outstanding Murray businesses to feature.
              Nominate a business that makes our community special!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-glow"
                >
                  Nominate a Business
                </motion.button>
              </Link>
              <Link href="/directory">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-secondary"
                >
                  Browse Directory
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
