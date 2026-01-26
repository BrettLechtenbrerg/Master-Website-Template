'use client';

import { motion } from 'framer-motion';
import { Scissors, Camera, Users, Clock, ArrowRight, Mail, Phone, Calendar } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function RibbonCuttingPage() {
  return (
    <>
      <PageHeader
        badge="Celebrate With Us"
        title="Ribbon Cutting Request"
        description="Celebrate your business milestone with the Murray Area Chamber of Commerce. Grand openings, renovations, anniversaries — we're here to help you shine."
        breadcrumbs={[
          { label: 'Business Resources', href: '/resources' },
          { label: 'Ribbon Cutting Request' },
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
            <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-purple-600 to-orange-500 flex items-center justify-center mx-auto mb-8 shadow-2xl">
              <Scissors className="w-12 h-12 text-white" />
            </div>

            {/* Coming Soon Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/20 text-orange-300 text-sm font-medium mb-6">
              <Clock className="w-4 h-4" />
              Coming Soon
            </div>

            {/* Title */}
            <h2 className="text-3xl font-bold text-white mb-4">
              Ribbon Cutting Request Form
            </h2>

            {/* Description */}
            <p className="text-white/60 max-w-xl mx-auto mb-8">
              We&apos;re setting up our online ribbon cutting request system. This service helps Chamber members celebrate grand openings, relocations, renovations, and business anniversaries.
            </p>

            {/* Features Preview */}
            <div className="grid sm:grid-cols-3 gap-4 mb-10">
              {[
                { icon: Camera, label: 'Professional Photos' },
                { icon: Users, label: 'Ambassador Attendance' },
                { icon: Calendar, label: 'Event Promotion' },
              ].map((item) => (
                <div key={item.label} className="p-4 rounded-xl bg-white/5">
                  <item.icon className="w-6 h-6 text-purple-400 mx-auto mb-2" />
                  <p className="text-white/70 text-sm">{item.label}</p>
                </div>
              ))}
            </div>

            {/* Contact Info */}
            <div className="glass p-6 rounded-2xl mb-8">
              <p className="text-white/80 mb-4">
                Ready to schedule your ribbon cutting? Contact us directly:
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
