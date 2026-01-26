'use client';

import { motion } from 'framer-motion';
import { Shield, Lock, Eye, Database, UserCheck, Mail } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHeader
        badge="Legal"
        title="Privacy Policy"
        description="Your privacy is important to us. This policy explains how we collect, use, and protect your information."
        breadcrumbs={[
          { label: 'Privacy Policy' },
        ]}
      />

      <section className="relative py-16 overflow-hidden">
        <div className="relative z-10 w-full max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          {/* Last Updated */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-card p-6 mb-8 flex items-center gap-4"
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600 to-purple-700 flex items-center justify-center">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-white font-semibold">Effective Date: January 1, 2026</p>
              <p className="text-white/60 text-sm">Murray Area Chamber of Commerce</p>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="glass-card p-8 md:p-12 space-y-8"
          >
            {/* Introduction */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <Lock className="w-6 h-6 text-purple-400" />
                Introduction
              </h2>
              <p className="text-white/70 leading-relaxed">
                The Murray Area Chamber of Commerce (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website at themurraychamber.com and use our services. By using our website, you consent to the practices described in this policy.
              </p>
            </div>

            {/* Information We Collect */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <Database className="w-6 h-6 text-purple-400" />
                1. Information We Collect
              </h2>

              <h3 className="text-lg font-semibold text-purple-300 mt-6 mb-3">Personal Information You Provide</h3>
              <p className="text-white/70 mb-3">We may collect personal information that you voluntarily provide, including:</p>
              <ul className="list-disc pl-6 text-white/70 space-y-2">
                <li>Name and contact information (email, phone, mailing address)</li>
                <li>Business name, address, and industry information</li>
                <li>Membership application details</li>
                <li>Event registration information</li>
                <li>Payment and billing information</li>
                <li>Communications and correspondence you send to us</li>
              </ul>

              <h3 className="text-lg font-semibold text-purple-300 mt-6 mb-3">Automatically Collected Information</h3>
              <p className="text-white/70 mb-3">When you visit our website, we may automatically collect:</p>
              <ul className="list-disc pl-6 text-white/70 space-y-2">
                <li>IP address and device information</li>
                <li>Browser type and version</li>
                <li>Pages visited and time spent on pages</li>
                <li>Referring website addresses</li>
                <li>Geographic location (city/region level)</li>
              </ul>
            </div>

            {/* How We Use Information */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <Eye className="w-6 h-6 text-purple-400" />
                2. How We Use Your Information
              </h2>
              <p className="text-white/70 mb-3">We use the information we collect to:</p>
              <ul className="list-disc pl-6 text-white/70 space-y-2">
                <li>Process membership applications and renewals</li>
                <li>Register you for Chamber events and programs</li>
                <li>Send newsletters, updates, and Chamber communications</li>
                <li>Publish your business in our member directory (with your consent)</li>
                <li>Process payments and maintain financial records</li>
                <li>Respond to inquiries and provide customer support</li>
                <li>Improve our website and services</li>
                <li>Comply with legal obligations</li>
              </ul>
            </div>

            {/* Information Sharing */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <UserCheck className="w-6 h-6 text-purple-400" />
                3. Information Sharing and Disclosure
              </h2>
              <p className="text-white/70 mb-4">We may share your information in the following circumstances:</p>

              <h3 className="text-lg font-semibold text-purple-300 mt-4 mb-2">Member Directory</h3>
              <p className="text-white/70 mb-4">
                With your consent, we publish member business information in our online and printed directories to help connect businesses and consumers in our community.
              </p>

              <h3 className="text-lg font-semibold text-purple-300 mt-4 mb-2">Service Providers</h3>
              <p className="text-white/70 mb-4">
                We may share information with third-party service providers who assist us with payment processing, email communications, event management, and website hosting.
              </p>

              <h3 className="text-lg font-semibold text-purple-300 mt-4 mb-2">Legal Requirements</h3>
              <p className="text-white/70">
                We may disclose information when required by law, court order, or to protect the rights, property, or safety of the Chamber or others.
              </p>
            </div>

            {/* Cookies */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">4. Cookies and Tracking Technologies</h2>
              <p className="text-white/70 mb-4">
                Our website uses cookies and similar technologies to enhance your browsing experience. Cookies are small text files stored on your device that help us:
              </p>
              <ul className="list-disc pl-6 text-white/70 space-y-2">
                <li>Remember your preferences and settings</li>
                <li>Understand how you use our website</li>
                <li>Improve website performance and functionality</li>
                <li>Analyze website traffic and usage patterns</li>
              </ul>
              <p className="text-white/70 mt-4">
                You can control cookies through your browser settings. Disabling cookies may affect certain website features.
              </p>
            </div>

            {/* Data Security */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">5. Data Security</h2>
              <p className="text-white/70">
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include encryption, secure servers, and access controls. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
              </p>
            </div>

            {/* Data Retention */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">6. Data Retention</h2>
              <p className="text-white/70">
                We retain your personal information for as long as necessary to fulfill the purposes outlined in this policy, maintain your membership, comply with legal obligations, and resolve disputes. When information is no longer needed, we securely delete or anonymize it.
              </p>
            </div>

            {/* Your Rights */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">7. Your Rights and Choices</h2>
              <p className="text-white/70 mb-3">You have the right to:</p>
              <ul className="list-disc pl-6 text-white/70 space-y-2">
                <li><strong className="text-white">Access:</strong> Request a copy of the personal information we hold about you</li>
                <li><strong className="text-white">Correction:</strong> Request correction of inaccurate or incomplete information</li>
                <li><strong className="text-white">Deletion:</strong> Request deletion of your personal information (subject to legal retention requirements)</li>
                <li><strong className="text-white">Opt-Out:</strong> Unsubscribe from marketing communications at any time</li>
                <li><strong className="text-white">Directory Removal:</strong> Request removal of your business from our public directory</li>
              </ul>
              <p className="text-white/70 mt-4">
                To exercise these rights, please contact us using the information below.
              </p>
            </div>

            {/* Third-Party Links */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">8. Third-Party Links</h2>
              <p className="text-white/70">
                Our website may contain links to third-party websites, including member business websites and partner organizations. We are not responsible for the privacy practices of these external sites. We encourage you to review the privacy policies of any websites you visit.
              </p>
            </div>

            {/* Children's Privacy */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">9. Children&apos;s Privacy</h2>
              <p className="text-white/70">
                Our services are intended for businesses and adults. We do not knowingly collect personal information from children under 13. If you believe we have collected information from a child, please contact us immediately.
              </p>
            </div>

            {/* Changes to Policy */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">10. Changes to This Policy</h2>
              <p className="text-white/70">
                We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated effective date. We encourage you to review this policy periodically. Continued use of our website after changes constitutes acceptance of the updated policy.
              </p>
            </div>

            {/* Contact */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <Mail className="w-6 h-6 text-purple-400" />
                11. Contact Us
              </h2>
              <p className="text-white/70 mb-4">
                If you have questions about this Privacy Policy or wish to exercise your privacy rights, please contact us:
              </p>
              <div className="glass p-6 rounded-xl">
                <p className="text-white font-semibold">Murray Area Chamber of Commerce</p>
                <p className="text-white/70 mt-2">141 E 5600 S #300</p>
                <p className="text-white/70">Murray, UT 84107</p>
                <p className="text-white/70 mt-2">Phone: (801) 263-2632</p>
                <p className="text-white/70">Email: info@themurraychamber.com</p>
              </div>
            </div>
          </motion.div>

          {/* Back Link */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-8 text-center"
          >
            <Link href="/">
              <button className="btn-secondary">Back to Home</button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}
