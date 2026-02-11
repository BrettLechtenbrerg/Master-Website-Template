'use client';

import { motion } from 'framer-motion';
import { FileText, Scale, Users, Globe, AlertTriangle, Mail, ShieldCheck, Building2 } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function TermsOfServicePage() {
  return (
    <>
      <PageHeader
        badge="Legal"
        title="Terms of Service"
        description="Please read these terms carefully before using our website or becoming a member of the Murray Area Chamber of Commerce."
        breadcrumbs={[
          { label: 'Terms of Service' },
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
              <FileText className="w-6 h-6 text-white" />
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
            {/* Agreement to Terms */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <Scale className="w-6 h-6 text-purple-400" />
                1. Agreement to Terms
              </h2>
              <p className="text-white/70 leading-relaxed">
                By accessing the Murray Area Chamber of Commerce website at themurraychamber.com, becoming a member, or using our services, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, please do not use our website or services. These terms apply to all visitors, members, and others who access or use our services.
              </p>
            </div>

            {/* Services Description */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <Building2 className="w-6 h-6 text-purple-400" />
                2. Description of Services
              </h2>
              <p className="text-white/70 mb-3">
                The Murray Area Chamber of Commerce is a nonprofit organization that supports and promotes businesses in the Murray, Utah area. Our services include:
              </p>
              <ul className="list-disc pl-6 text-white/70 space-y-2">
                <li>Business networking events and programs</li>
                <li>Member directory listing and business promotion</li>
                <li>Advocacy and representation with local government</li>
                <li>Business resources, education, and workshops</li>
                <li>Ribbon cutting ceremonies and grand opening support</li>
                <li>Community events and sponsorship opportunities</li>
                <li>Referrals and business connections</li>
              </ul>
            </div>

            {/* Membership */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <Users className="w-6 h-6 text-purple-400" />
                3. Membership Terms
              </h2>

              <h3 className="text-lg font-semibold text-purple-300 mt-6 mb-3">Membership Application</h3>
              <p className="text-white/70 mb-4">
                Membership is open to businesses, organizations, and individuals who support the Chamber&apos;s mission. All membership applications are subject to approval by the Chamber. We reserve the right to decline membership at our discretion.
              </p>

              <h3 className="text-lg font-semibold text-purple-300 mt-4 mb-2">Membership Dues</h3>
              <p className="text-white/70 mb-4">
                Membership dues are based on the membership level selected and are billed according to the payment schedule agreed upon at enrollment. Dues are non-refundable except as specified in individual membership agreements.
              </p>

              <h3 className="text-lg font-semibold text-purple-300 mt-4 mb-2">Membership Renewal</h3>
              <p className="text-white/70 mb-4">
                Memberships are renewable on an annual basis. We will notify you prior to your renewal date. Failure to pay renewal dues may result in termination of membership and removal from member benefits and directories.
              </p>

              <h3 className="text-lg font-semibold text-purple-300 mt-4 mb-2">Membership Termination</h3>
              <p className="text-white/70">
                The Chamber may terminate membership for non-payment, violation of these terms, conduct detrimental to the Chamber&apos;s reputation, or other reasonable cause. Members may cancel their membership at any time by providing written notice.
              </p>
            </div>

            {/* Website Use */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <Globe className="w-6 h-6 text-purple-400" />
                4. Website Use
              </h2>
              <p className="text-white/70 mb-3">When using our website, you agree to:</p>
              <ul className="list-disc pl-6 text-white/70 space-y-2">
                <li>Provide accurate and complete information when submitting forms or applications</li>
                <li>Use the website only for lawful purposes</li>
                <li>Not attempt to gain unauthorized access to any part of the website</li>
                <li>Not interfere with the proper functioning of the website</li>
                <li>Not copy, reproduce, or distribute website content without permission</li>
                <li>Not use automated systems (bots, scrapers) to access the website</li>
              </ul>
            </div>

            {/* Member Directory */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">5. Member Directory</h2>
              <p className="text-white/70 mb-4">
                By joining the Chamber, you consent to having your business name, contact information, and business description published in our online and printed member directories. You may request modifications or removal from the directory by contacting us.
              </p>
              <p className="text-white/70">
                Members are responsible for the accuracy of their directory listings. The Chamber is not responsible for errors in information provided by members or third parties.
              </p>
            </div>

            {/* Intellectual Property */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">6. Intellectual Property</h2>
              <p className="text-white/70 mb-4">
                All content on this website, including text, graphics, logos, images, and software, is the property of the Murray Area Chamber of Commerce or its content providers and is protected by copyright and trademark laws.
              </p>
              <p className="text-white/70">
                You may not reproduce, distribute, modify, or create derivative works from any content on this website without our prior written consent. The Chamber&apos;s name, logo, and trademarks may not be used without authorization.
              </p>
            </div>

            {/* Events and Programs */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">7. Events and Programs</h2>
              <p className="text-white/70 mb-4">
                Participation in Chamber events and programs is subject to registration, availability, and any applicable fees. The Chamber reserves the right to:
              </p>
              <ul className="list-disc pl-6 text-white/70 space-y-2">
                <li>Cancel or reschedule events with reasonable notice</li>
                <li>Limit attendance or participation in events</li>
                <li>Modify event content, speakers, or format</li>
                <li>Remove participants who violate event policies or disrupt activities</li>
              </ul>
              <p className="text-white/70 mt-4">
                Refund policies for event registrations are determined on a per-event basis and will be communicated at the time of registration.
              </p>
            </div>

            {/* Photography and Media */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">8. Photography and Media Release</h2>
              <p className="text-white/70">
                By attending Chamber events, you grant the Murray Area Chamber of Commerce permission to photograph, video record, and use your image and likeness for promotional purposes, including on our website, social media, newsletters, and marketing materials. If you do not wish to be photographed, please notify Chamber staff at the event.
              </p>
            </div>

            {/* Limitation of Liability */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <AlertTriangle className="w-6 h-6 text-purple-400" />
                9. Limitation of Liability
              </h2>
              <p className="text-white/70 mb-4">
                The Murray Area Chamber of Commerce provides its website and services on an &quot;as is&quot; basis without warranties of any kind. To the fullest extent permitted by law:
              </p>
              <ul className="list-disc pl-6 text-white/70 space-y-2">
                <li>We disclaim all warranties, express or implied, including merchantability and fitness for a particular purpose</li>
                <li>We are not liable for any indirect, incidental, special, or consequential damages</li>
                <li>We are not responsible for business decisions made based on information provided by the Chamber</li>
                <li>We are not liable for the actions, products, or services of member businesses</li>
              </ul>
              <p className="text-white/70 mt-4">
                Our total liability shall not exceed the amount you paid to the Chamber in the twelve months preceding any claim.
              </p>
            </div>

            {/* Indemnification */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">10. Indemnification</h2>
              <p className="text-white/70">
                You agree to indemnify and hold harmless the Murray Area Chamber of Commerce, its officers, directors, employees, and volunteers from any claims, damages, losses, or expenses arising from your use of our website or services, your violation of these terms, or your violation of any rights of others.
              </p>
            </div>

            {/* Third-Party Links */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">11. Third-Party Links and Services</h2>
              <p className="text-white/70">
                Our website may contain links to third-party websites, including member business websites. These links are provided for convenience only. The Chamber does not endorse, warrant, or guarantee the products, services, or information provided by third parties. We are not responsible for the content or practices of linked websites.
              </p>
            </div>

            {/* Governing Law */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <ShieldCheck className="w-6 h-6 text-purple-400" />
                12. Governing Law
              </h2>
              <p className="text-white/70">
                These Terms of Service shall be governed by and construed in accordance with the laws of the State of Utah, without regard to its conflict of law provisions. Any disputes arising from these terms or your use of our services shall be resolved in the state or federal courts located in Salt Lake County, Utah.
              </p>
            </div>

            {/* Changes to Terms */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">13. Changes to These Terms</h2>
              <p className="text-white/70">
                We may update these Terms of Service from time to time. Changes will be posted on this page with an updated effective date. Your continued use of our website or services after changes are posted constitutes acceptance of the revised terms. We encourage you to review these terms periodically.
              </p>
            </div>

            {/* Contact */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <Mail className="w-6 h-6 text-purple-400" />
                14. Contact Us
              </h2>
              <p className="text-white/70 mb-4">
                If you have questions about these Terms of Service, please contact us:
              </p>
              <div className="glass p-6 rounded-xl">
                <p className="text-white font-semibold">Murray Area Chamber of Commerce</p>
                <p className="text-white/70 mt-2">141 E 5600 S #300</p>
                <p className="text-white/70">Murray, UT 84107</p>
                <p className="text-white/70 mt-2">Phone: (801) 263-2632</p>
                <p className="text-white/70">Email: support@murrayareachamber.com</p>
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
