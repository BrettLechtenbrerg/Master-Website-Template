'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Privacy() {
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
              Privacy <span className="text-silver">Policy</span>
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
                <h2 className="text-3xl font-bold text-navy mb-4">Introduction</h2>
                <p>
                  At Total Success AI, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
                </p>
                <p className="mt-4">
                  By using our website and services, you agree to the collection and use of information in accordance with this policy.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-navy mb-4">1. Information We Collect</h2>

                <h3 className="text-2xl font-semibold text-navy-light mt-6 mb-3">Personal Information</h3>
                <p>We may collect personal information that you voluntarily provide to us, including but not limited to:</p>
                <ul className="list-disc pl-6 mt-2">
                  <li>Name and contact information (email address, phone number, mailing address)</li>
                  <li>Company name and business information</li>
                  <li>Professional title and role</li>
                  <li>Payment and billing information</li>
                  <li>Communication preferences</li>
                  <li>Any other information you choose to provide</li>
                </ul>

                <h3 className="text-2xl font-semibold text-navy-light mt-6 mb-3">Automatically Collected Information</h3>
                <p>When you visit our website, we may automatically collect certain information, including:</p>
                <ul className="list-disc pl-6 mt-2">
                  <li>IP address and device information</li>
                  <li>Browser type and version</li>
                  <li>Operating system</li>
                  <li>Pages visited and time spent on pages</li>
                  <li>Referring website addresses</li>
                  <li>Clickstream data</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-navy mb-4">2. How We Use Your Information</h2>
                <p>We use the information we collect for various purposes, including:</p>
                <ul className="list-disc pl-6 mt-2">
                  <li>Providing, maintaining, and improving our services</li>
                  <li>Processing transactions and sending related information</li>
                  <li>Responding to your inquiries and providing customer support</li>
                  <li>Sending you technical notices, updates, and administrative messages</li>
                  <li>Communicating about products, services, offers, and events</li>
                  <li>Monitoring and analyzing trends, usage, and activities</li>
                  <li>Detecting, preventing, and addressing technical issues and security threats</li>
                  <li>Complying with legal obligations</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-navy mb-4">3. Information Sharing and Disclosure</h2>
                <p>We may share your information in the following circumstances:</p>

                <h3 className="text-2xl font-semibold text-navy-light mt-6 mb-3">Service Providers</h3>
                <p>
                  We may share your information with third-party service providers who perform services on our behalf, such as payment processing, data analysis, email delivery, hosting services, and customer service.
                </p>

                <h3 className="text-2xl font-semibold text-navy-light mt-6 mb-3">Business Transfers</h3>
                <p>
                  If we are involved in a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction.
                </p>

                <h3 className="text-2xl font-semibold text-navy-light mt-6 mb-3">Legal Requirements</h3>
                <p>
                  We may disclose your information if required to do so by law or in response to valid requests by public authorities.
                </p>

                <h3 className="text-2xl font-semibold text-navy-light mt-6 mb-3">With Your Consent</h3>
                <p>
                  We may share your information for any other purpose with your consent.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-navy mb-4">4. Data Security</h2>
                <p>
                  We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
                </p>
                <p className="mt-4">
                  Our security measures include:
                </p>
                <ul className="list-disc pl-6 mt-2">
                  <li>Encryption of sensitive data</li>
                  <li>Regular security assessments</li>
                  <li>Access controls and authentication</li>
                  <li>Secure data storage practices</li>
                  <li>Employee training on data protection</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-navy mb-4">5. Data Retention</h2>
                <p>
                  We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. When we no longer need your information, we will securely delete or anonymize it.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-navy mb-4">6. Your Rights and Choices</h2>
                <p>
                  Depending on your location, you may have certain rights regarding your personal information:
                </p>
                <ul className="list-disc pl-6 mt-2">
                  <li><strong>Access:</strong> Request access to your personal information</li>
                  <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                  <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                  <li><strong>Restriction:</strong> Request restriction of processing of your information</li>
                  <li><strong>Portability:</strong> Request transfer of your information to another party</li>
                  <li><strong>Objection:</strong> Object to our processing of your information</li>
                  <li><strong>Withdraw Consent:</strong> Withdraw consent where processing is based on consent</li>
                </ul>
                <p className="mt-4">
                  To exercise these rights, please contact us using the information provided at the end of this policy.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-navy mb-4">7. Cookies and Tracking Technologies</h2>
                <p>
                  We use cookies and similar tracking technologies to collect and track information about your use of our website. Cookies are small data files stored on your device.
                </p>

                <h3 className="text-2xl font-semibold text-navy-light mt-6 mb-3">Types of Cookies We Use:</h3>
                <ul className="list-disc pl-6 mt-2">
                  <li><strong>Essential Cookies:</strong> Necessary for the website to function</li>
                  <li><strong>Analytics Cookies:</strong> Help us understand how visitors use our website</li>
                  <li><strong>Preference Cookies:</strong> Remember your preferences and settings</li>
                  <li><strong>Marketing Cookies:</strong> Track your browsing to show relevant advertisements</li>
                </ul>

                <p className="mt-4">
                  You can control cookies through your browser settings. However, disabling cookies may affect your ability to use certain features of our website.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-navy mb-4">8. Third-Party Links</h2>
                <p>
                  Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these third-party sites. We encourage you to read the privacy policies of any linked websites you visit.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-navy mb-4">9. Children's Privacy</h2>
                <p>
                  Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you become aware that a child has provided us with personal information, please contact us, and we will take steps to delete such information.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-navy mb-4">10. International Data Transfers</h2>
                <p>
                  Your information may be transferred to and processed in countries other than your country of residence. These countries may have different data protection laws. By using our services, you consent to the transfer of your information to these countries.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-navy mb-4">11. Changes to This Privacy Policy</h2>
                <p>
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. You are advised to review this Privacy Policy periodically for any changes.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-navy mb-4">12. Contact Us</h2>
                <p>
                  If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
                </p>
                <div className="mt-4 p-6 bg-silver-light rounded-lg">
                  <p className="font-semibold text-navy">Total Success AI</p>
                  <p className="mt-2">Website: <a href="https://brettlechtenberg.com" className="text-navy-light hover:text-navy">brettlechtenberg.com</a></p>
                  <p>Website: <a href="https://mannytorresai.com" className="text-navy-light hover:text-navy">mannytorresai.com</a></p>
                  <p className="mt-2">
                    <Link href="/contact" className="text-navy-light hover:text-navy font-semibold">
                      Contact Form →
                    </Link>
                  </p>
                </div>
              </div>

              <div className="mt-8 p-6 bg-navy text-white rounded-lg">
                <p className="text-sm">
                  <strong>Your Privacy Matters:</strong> We are committed to protecting your privacy and handling your data responsibly. If you have any questions or concerns, please don't hesitate to reach out to us.
                </p>
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
