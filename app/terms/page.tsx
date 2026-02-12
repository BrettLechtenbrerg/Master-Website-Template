'use client';

import { motion } from 'framer-motion';
import PageHeader from '@/components/PageHeader';
import Footer from '@/components/Footer';
import {
  FileText,
  ShieldCheck,
  HelpCircle,
  AlertCircle,
  ExternalLink,
  Scale
} from 'lucide-react';

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-purple-950/20 to-slate-950 w-full">
      <PageHeader
        title="Terms of Service"
        description="Agreements and guidelines for using the Murray Area Chamber of Commerce digital platforms."
        badge="Legal"
      />

      <section className="py-20 relative px-6 sm:px-8 lg:px-12">
        <div className="max-w-4xl mx-auto space-y-12">

          {/* Introduction Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 md:p-12 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <Scale className="w-24 h-24 text-purple-400" />
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <FileText className="w-8 h-8 text-purple-400" />
              Agreement to Terms
            </h2>
            <div className="space-y-4 text-white/70 leading-relaxed">
              <p>
                By accessing or using any Murray Area Chamber of Commerce ("the Chamber") web pages, social media platforms, or digital services, you agree to be bound by these Terms of Service. These terms apply to all visitors, users, and others who access our services.
              </p>
              <p>
                The Chamber reserves the right to modify or replace these terms at any time. Your continued use of the web pages following the posting of any changes to the Terms of Service constitutes acceptance of those changes.
              </p>
              <p className="text-sm italic">Last Updated: February 2026</p>
            </div>
          </motion.div>

          {/* Policy Sections Grid */}
          <div className="grid gap-8">

            {/* Intellectual Property */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card p-8 border border-purple-500/20"
            >
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                <ShieldCheck className="w-6 h-6 text-orange-400" />
                Intellectual Property & Copyright
              </h3>
              <p className="text-white/70 leading-relaxed">
                All editorial and creative content on this site, including but not limited to text, graphics, logos, images, and software, is the property of the Murray Area Chamber of Commerce or its content suppliers and is protected by U.S. and international copyright laws. Unauthorized use of any materials may violate copyright, trademark, and other laws.
              </p>
            </motion.div>

            {/* Liability Disclaimer */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card p-8 border border-purple-500/20"
            >
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                <AlertCircle className="w-6 h-6 text-purple-400" />
                Liability Disclaimer
              </h3>
              <div className="space-y-4 text-white/70">
                <p>
                  The Chamber does not guarantee the accuracy, completeness, or timeliness of the information provided on its web pages. This includes third-party content provided by members or external partners.
                </p>
                <p>
                  The Chamber is not liable for any damages—including but not limited to direct, indirect, incidental, or consequential damages—arising from your use of or inability to use our digital platforms, or from any information provided therein.
                </p>
              </div>
            </motion.div>

            {/* External Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card p-8 border border-purple-500/20"
            >
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                <ExternalLink className="w-6 h-6 text-orange-400" />
                External Links & Third Parties
              </h3>
              <p className="text-white/70 leading-relaxed">
                Our services may contain links to third-party web sites or services that are not owned or controlled by the Chamber. The Chamber has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third-party web sites or services.
              </p>
            </motion.div>

            {/* ADA Compliance */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card p-8 border border-purple-500/20"
            >
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                <HelpCircle className="w-6 h-6 text-purple-400" />
                ADA Compliance & Accessibility
              </h3>
              <p className="text-white/70 leading-relaxed">
                The Chamber is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone and applying the relevant accessibility standards. If you require reasonable accommodation or equal access to our communications, please contact us.
              </p>
            </motion.div>

            {/* Security Monitoring */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card p-8 border border-purple-500/20"
            >
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                <ShieldCheck className="w-6 h-6 text-green-400" />
                Security & Monitoring
              </h3>
              <p className="text-white/70 leading-relaxed">
                For site security purposes and to ensure that this service remains available to all users, the Chamber uses software programs to monitor network traffic to identify unauthorized attempts to upload or change information, or otherwise cause damage.
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
            <h3 className="text-xl font-bold text-white mb-4">Questions about our Terms?</h3>
            <p className="text-white/60 mb-6">Contact the Murray Area Chamber of Commerce for more information.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:8012632632" className="flex items-center gap-2 text-purple-400 hover:text-purple-300">
                (801) 263-2632
              </a>
              <span className="text-white/20">|</span>
              <a href="mailto:support@murrayareachamber.com" className="flex items-center gap-2 text-purple-400 hover:text-purple-300">
                support@murrayareachamber.com
              </a>
            </div>
          </motion.div>

        </div>
      </section>

      <Footer />
    </div>
  );
}
