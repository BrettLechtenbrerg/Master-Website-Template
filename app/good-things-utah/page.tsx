'use client';

import { motion } from 'framer-motion';
import { Tv, Star, Clock, ArrowRight, Mail, Phone, Calendar } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function GoodThingsUtahPage() {
  return (
    <>
      <PageHeader
        badge="Media"
        title="Good Things Utah"
        description="Get your Murray business featured on Good Things Utah! The Chamber partners with ABC4 to spotlight our member businesses."
        breadcrumbs={[
          { label: 'Business Resources', href: '/resources' },
          { label: 'Good Things Utah' },
        ]}
      />

      {/* Coming Soon Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="relative z-10 w-full max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-card p-12 text-center"
          >
            {/* Icon */}
            <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-orange-500 to-purple-600 flex items-center justify-center mx-auto mb-8 shadow-2xl">
              <Tv className="w-12 h-12 text-white" />
            </div>

            {/* Coming Soon Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/20 text-orange-300 text-sm font-medium mb-6">
              <Clock className="w-4 h-4" />
              Coming Soon
            </div>

            {/* Title */}
            <h2 className="text-3xl font-bold text-white mb-4">
              Good Things Utah Partnership
            </h2>

            {/* Description */}
            <p className="text-white/60 max-w-xl mx-auto mb-8">
              We&apos;re building our online application system for Good Things Utah TV segments. This program helps Murray Chamber members get featured on ABC4&apos;s popular morning show.
            </p>

            {/* Features Preview */}
            <div className="grid sm:grid-cols-3 gap-4 mb-10">
              {[
                { icon: Tv, label: 'Local TV Exposure' },
                { icon: Star, label: 'Brand Awareness' },
                { icon: Calendar, label: 'Flexible Scheduling' },
              ].map((item) => (
                <div key={item.label} className="p-4 rounded-xl bg-white/5">
                  <item.icon className="w-6 h-6 text-orange-400 mx-auto mb-2" />
                  <p className="text-white/70 text-sm">{item.label}</p>
                </div>
              ))}
            </div>

            {/* Contact Info */}
            <div className="glass p-6 rounded-2xl mb-8">
              <p className="text-white/80 mb-4">
                Interested in being featured? Contact us directly:
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm">
                <a href="tel:801-263-2632" className="flex items-center gap-2 text-purple-300 hover:text-purple-200 transition-colors">
                  <Phone className="w-4 h-4" />
                  (801) 263-2632
                </a>
                <a href="mailto:info@themurraychamber.com" className="flex items-center gap-2 text-purple-300 hover:text-purple-200 transition-colors">
                  <Mail className="w-4 h-4" />
                  info@themurraychamber.com
                </a>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <button className="btn-glow">
                  Contact Us
                  <ArrowRight className="w-5 h-5" />
                </button>
              </Link>
              <Link href="/resources">
                <button className="btn-secondary">
                  Back to Resources
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}
