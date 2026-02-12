'use client';

import { motion } from 'framer-motion';
import PageHeader from '@/components/PageHeader';
import Footer from '@/components/Footer';
import {
  Lock,
  Eye,
  Shield,
  Database,
  Mail,
  Smartphone
} from 'lucide-react';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-purple-950/20 to-slate-950 w-full">
      <PageHeader
        title="Privacy Policy"
        description="Your privacy is important to us. Learn how we collect, use, and protect your information."
        badge="Legal"
      />

      <section className="py-20 relative px-6 sm:px-8 lg:px-12">
        <div className="max-w-4xl mx-auto space-y-12">

          {/* Privacy Overview Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 md:p-12 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <Shield className="w-24 h-24 text-purple-400" />
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <Lock className="w-8 h-8 text-purple-400" />
              Information Practices
            </h2>
            <div className="space-y-4 text-white/70 leading-relaxed">
              <p>
                The Murray Area Chamber of Commerce ("the Chamber") is committed to protecting the privacy of our members and visitors to our website. We do not sell or share personally identifiable information for commercial marketing.
              </p>
              <p>
                Information is only collected when voluntarily provided through online forms, membership applications, or event registrations. This information is used solely for Chamber-related updates, business inquiries, and processing your requests.
              </p>
              <p className="text-sm italic">Last Updated: February 2026</p>
            </div>
          </motion.div>

          {/* Privacy Sections Grid */}
          <div className="grid md:grid-cols-2 gap-8">

            {/* Automatic Collection */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card p-8 border border-purple-500/20"
            >
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                <Database className="w-6 h-6 text-orange-400" />
                Automatic Data
              </h3>
              <p className="text-white/60 text-sm mb-4">We automatically log technical data to improve site performance:</p>
              <ul className="space-y-2 text-white/70 text-sm">
                <li>• IP address and Domain name</li>
                <li>• Date and time of access</li>
                <li>• Browser type and Operating system</li>
                <li>• Referring webpage and pages visited</li>
              </ul>
            </motion.div>

            {/* Cookies */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card p-8 border border-purple-500/20"
            >
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                <Eye className="w-6 h-6 text-purple-400" />
                Cookies
              </h3>
              <p className="text-white/70 text-sm">
                The Chamber uses "cookies" to track visits and enhance user experience. You can choose to accept or decline cookies through your browser settings, though this may prevent you from taking full advantage of the website.
              </p>
            </motion.div>

            {/* SMS Policy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card p-8 border border-purple-500/20"
            >
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                <Smartphone className="w-6 h-6 text-orange-400" />
                SMS Messaging
              </h3>
              <p className="text-white/70 text-sm">
                The Chamber may use contact information for emergency notifications or updates if users opt-in through registration or inquiries. We do not share SMS opt-in data with third parties for marketing purposes.
              </p>
            </motion.div>

            {/* Support */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card p-8 border border-purple-500/20"
            >
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                <Mail className="w-6 h-6 text-purple-400" />
                Contact Info
              </h3>
              <p className="text-white/70 text-sm">
                If you have questions about this Privacy Policy or how we handle your data, please reach out to our support team at support@murrayareachamber.com or call (801) 263-2632.
              </p>
            </motion.div>

          </div>

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 text-center"
          >
            <h3 className="text-xl font-bold text-white mb-4">Location Information</h3>
            <div className="space-y-2 text-white/60">
              <p>Murray Area Chamber of Commerce</p>
              <p>141 E. 5600 S. Suite 300</p>
              <p>Murray, UT 84107</p>
            </div>
          </motion.div>

        </div>
      </section>

      <Footer />
    </div>
  );
}
