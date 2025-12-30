'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Script from 'next/script';

export default function Terms() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-navy via-navy-light to-navy py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Terms and <span className="text-silver">Conditions</span>
            </h1>
            <p className="text-xl text-silver-light max-w-3xl mx-auto">
              Last Updated: January 1, 2026
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="prose prose-lg max-w-none"
          >
            <div className="space-y-8 text-gray-700">
              <div>
                <h2 className="text-3xl font-bold text-navy mb-4">1. Agreement to Terms</h2>
                <p>
                  By accessing and using the Total Success AI website and services, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you may not access our services.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-navy mb-4">2. Services Description</h2>
                <p>
                  Total Success AI provides AI consulting, implementation, and training services to businesses. Our services include but are not limited to:
                </p>
                <ul className="list-disc pl-6 mt-2">
                  <li>Strategic AI consulting and advisory services</li>
                  <li>Custom AI solution development and implementation</li>
                  <li>AI training programs and workshops</li>
                  <li>Ongoing support and maintenance</li>
                  <li>Additional services as described on our website</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-navy mb-4">3. User Obligations</h2>
                <p>
                  When using our services, you agree to:
                </p>
                <ul className="list-disc pl-6 mt-2">
                  <li>Provide accurate and complete information</li>
                  <li>Maintain the confidentiality of any account credentials</li>
                  <li>Notify us immediately of any unauthorized use of your account</li>
                  <li>Comply with all applicable laws and regulations</li>
                  <li>Not use our services for any unlawful or prohibited purpose</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-navy mb-4">4. Intellectual Property Rights</h2>
                <p>
                  All content, materials, and intellectual property on this website, including but not limited to text, graphics, logos, and software, are owned by or licensed to Total Success AI. You may not reproduce, distribute, or create derivative works without our express written permission.
                </p>
                <p className="mt-4">
                  Custom solutions developed for clients remain subject to separate agreements and ownership terms as specified in individual service contracts.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-navy mb-4">5. Payment Terms</h2>
                <p>
                  Payment terms for services will be outlined in individual service agreements. General terms include:
                </p>
                <ul className="list-disc pl-6 mt-2">
                  <li>Fees are quoted based on project scope and requirements</li>
                  <li>Payment schedules will be established in service contracts</li>
                  <li>Late payments may incur additional fees</li>
                  <li>Refund policies are specified in individual agreements</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-navy mb-4">6. Confidentiality</h2>
                <p>
                  We respect the confidential nature of client information and maintain strict confidentiality standards. Both parties agree to:
                </p>
                <ul className="list-disc pl-6 mt-2">
                  <li>Protect confidential information shared during the course of services</li>
                  <li>Use confidential information only for agreed-upon purposes</li>
                  <li>Not disclose confidential information to third parties without consent</li>
                  <li>Return or destroy confidential materials upon request</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-navy mb-4">7. Limitation of Liability</h2>
                <p>
                  To the fullest extent permitted by law, Total Success AI shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use our services. Our total liability shall not exceed the amount paid by you for the specific service in question.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-navy mb-4">8. Warranties and Disclaimers</h2>
                <p>
                  While we strive to provide high-quality services, we provide our services "as is" and make no warranties, express or implied, regarding:
                </p>
                <ul className="list-disc pl-6 mt-2">
                  <li>The accuracy or completeness of information provided</li>
                  <li>Specific results or outcomes from our services</li>
                  <li>Uninterrupted or error-free service</li>
                  <li>Compatibility with all systems or technologies</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-navy mb-4">9. Termination</h2>
                <p>
                  Either party may terminate services according to the terms specified in individual service agreements. Upon termination:
                </p>
                <ul className="list-disc pl-6 mt-2">
                  <li>Outstanding payments become immediately due</li>
                  <li>Access to services and materials will be revoked</li>
                  <li>Confidentiality obligations continue to apply</li>
                  <li>Work product ownership follows agreement terms</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-navy mb-4">10. Modifications to Terms</h2>
                <p>
                  We reserve the right to modify these Terms and Conditions at any time. Changes will be effective immediately upon posting to this website. Your continued use of our services after changes are posted constitutes acceptance of the modified terms.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-navy mb-4">11. Governing Law</h2>
                <p>
                  These Terms and Conditions shall be governed by and construed in accordance with the laws of the jurisdiction in which Total Success AI operates, without regard to its conflict of law provisions.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-navy mb-4">12. Contact Information</h2>
                <p className="mb-6">
                  If you have any questions about these Terms and Conditions, please contact us:
                </p>
                {/* GHL Embedded Form */}
                <div className="bg-silver-light rounded-xl p-6">
                  <iframe
                    src="https://api.leadconnectorhq.com/widget/form/9XweWVfbhcfTSXcEVgRK"
                    style={{ width: '100%', height: '600px', border: 'none', borderRadius: '8px' }}
                    id="inline-terms-9XweWVfbhcfTSXcEVgRK"
                    data-form-name="TSAI Website Contact Form"
                    data-form-id="9XweWVfbhcfTSXcEVgRK"
                    title="TSAI Website Contact Form"
                  />
                  <Script
                    src="https://link.msgsndr.com/js/form_embed.js"
                    strategy="lazyOnload"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Back to Home */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12 text-center"
          >
            <Link href="/">
              <button className="bg-navy text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-navy-light transition-all duration-300">
                Back to Home
              </button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
