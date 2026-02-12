'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { FileText, Globe, Truck, CheckCircle, ArrowRight, Info, Send, AlertCircle } from 'lucide-react';
import Image from 'next/image';
import PageHeader from '@/components/PageHeader';
import Footer from '@/components/Footer';
import Link from 'next/link';

// Certificate of Origin Image
const CERTIFICATE_IMAGE = '/images/certificates/certificate-hero.jpg';
const HAS_IMAGE = true;

const benefits = [
  {
    icon: Globe,
    title: 'International Trade',
    description: 'Essential documentation for exporting goods to foreign markets.',
  },
  {
    icon: CheckCircle,
    title: 'Official Certification',
    description: 'Chamber-certified documents recognized by customs authorities worldwide.',
  },
  {
    icon: Truck,
    title: 'Smooth Customs',
    description: 'Help expedite customs clearance and avoid import delays.',
  },
];

const pricingTiers = [
  { type: 'Members', price: 'Free', description: 'Unlimited pages' },
  { type: 'Non-Members', price: '$25', description: 'Per page' },
  { type: 'Rush Processing', price: '+$15', description: 'Same-day service' },
];

export default function CertificateOfOriginPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    const formData = new FormData(e.currentTarget);

    try {
      // Simulate form submission (replace with actual GHL integration when ready)
      await new Promise(resolve => setTimeout(resolve, 1000));

      console.log('Certificate request submitted:', {
        companyName: formData.get('company_name'),
        contactName: formData.get('contact_name'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        productDescription: formData.get('product_description'),
        destinationCountry: formData.get('destination_country'),
        quantity: formData.get('quantity'),
        rushProcessing: formData.get('rush_processing'),
        additionalNotes: formData.get('additional_notes'),
      });

      setIsSubmitted(true);
    } catch {
      setError('Unable to submit request. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <PageHeader
        badge="Services"
        title="Certificate of Origin"
        description="The Murray Area Chamber of Commerce is authorized to issue Certificates of Origin for businesses exporting goods internationally."
        breadcrumbs={[
          { label: 'Business Resources', href: '/resources' },
          { label: 'Certificate of Origin' },
        ]}
      />

      {/* About Section with Image */}
      <section className="relative py-16 overflow-hidden">
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <span className="inline-block px-4 py-2 text-sm font-medium text-purple-300 bg-purple-500/20 rounded-full mb-4">
                About This Service
              </span>
              <h2 className="text-3xl font-bold text-white mb-6">
                What is a Certificate of Origin?
              </h2>
              <p className="text-white/70 mb-6">
                A Certificate of Origin (CO) is a document declaring in which country a commodity or good was manufactured. It is required by many international trade agreements and customs authorities to determine appropriate duties and tariffs.
              </p>
              <p className="text-white/70 mb-8">
                As an authorized Chamber of Commerce, we can certify and notarize Certificates of Origin for businesses in the Murray area, facilitating smooth international trade transactions.
              </p>

              <div className="glass-card p-6 border-l-4 border-orange-500">
                <div className="flex items-start gap-3">
                  <Info className="w-6 h-6 text-orange-400 shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-white mb-2">Processing Time</h4>
                    <p className="text-white/60 text-sm">
                      Standard processing takes 2-3 business days. Rush processing available for same-day service (additional fee applies).
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Image Section */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="glass-card p-8"
            >
              <div className="aspect-[4/3] bg-gradient-to-br from-purple-600/30 to-orange-500/30 rounded-xl flex items-center justify-center mb-6 relative overflow-hidden">
                {HAS_IMAGE ? (
                  <Image
                    src={CERTIFICATE_IMAGE}
                    alt="Certificate of Origin Service"
                    fill
                    className="object-cover rounded-xl"
                    unoptimized
                  />
                ) : (
                  <div className="text-center p-8">
                    <FileText className="w-16 h-16 text-white/40 mx-auto mb-4" />
                    <p className="text-white/40 text-sm">Certificate of Origin</p>
                  </div>
                )}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Official Chamber Documentation</h3>
              <p className="text-white/60 text-sm">
                Get your exports certified with official Chamber of Commerce documentation recognized worldwide.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative py-16 overflow-hidden">
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white">Why You Need a Certificate of Origin</h2>
            <p className="mt-4 text-white/60">Essential for international trade compliance</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-8 text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-600 to-purple-700 flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white">{benefit.title}</h3>
                <p className="mt-3 text-white/60">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="relative py-8 overflow-hidden">
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8"
          >
            <h2 className="text-2xl font-bold text-white">Pricing</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={tier.type}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-6 text-center"
              >
                <h3 className="text-lg font-semibold text-white">{tier.type}</h3>
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-orange-400 mt-2">
                  {tier.price}
                </div>
                <p className="text-white/60 text-sm mt-1">{tier.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Request Form */}
      <section className="relative py-16 overflow-hidden">
        <div className="relative z-10 w-full max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="glass-card p-8 md:p-12">
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-10 h-10 text-green-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">Request Submitted!</h3>
                <p className="mt-4 text-white/60 max-w-md mx-auto">
                  We&apos;ve received your Certificate of Origin request. Our team will contact you within 1 business day to confirm details and payment.
                </p>
                <button onClick={() => setIsSubmitted(false)} className="mt-8 btn-secondary">
                  Submit Another Request
                </button>
              </div>
            ) : (
              <>
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600 to-purple-700 flex items-center justify-center shadow-lg">
                    <FileText className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white">Request a Certificate</h2>
                    <p className="text-white/60">Fill out the form below to get started</p>
                  </div>
                </div>

                {error && (
                  <div className="flex items-center gap-3 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 mb-6">
                    <AlertCircle className="w-5 h-5 shrink-0" />
                    <span className="text-sm">{error}</span>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-white/80 mb-2">Company Name *</label>
                      <input type="text" name="company_name" required className="input-glass" placeholder="Your Company Name" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-white/80 mb-2">Contact Name *</label>
                      <input type="text" name="contact_name" required className="input-glass" placeholder="Full Name" />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-white/80 mb-2">Email *</label>
                      <input type="email" name="email" required className="input-glass" placeholder="email@company.com" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-white/80 mb-2">Phone *</label>
                      <input type="tel" name="phone" required className="input-glass" placeholder="(801) 555-0123" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-white/80 mb-2">Product Description *</label>
                    <textarea name="product_description" required rows={3} className="input-glass" placeholder="Describe the goods being exported" />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-white/80 mb-2">Destination Country *</label>
                      <input type="text" name="destination_country" required className="input-glass" placeholder="e.g., Canada, Mexico, Germany" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-white/80 mb-2">Number of Pages</label>
                      <select name="quantity" className="input-glass select-glass">
                        {[1, 2, 3, 4, 5, 10, 20].map(n => (
                          <option key={n} value={n}>{n}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <input type="checkbox" name="rush_processing" value="yes" className="mt-1 accent-purple-500" />
                    <label className="text-sm text-white/60">
                      <span className="font-medium text-white">Rush Processing</span> - Same-day service (+$15 per page)
                    </label>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-white/80 mb-2">Additional Notes</label>
                    <textarea name="additional_notes" rows={2} className="input-glass" placeholder="Any special requirements or questions" />
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={isLoading}
                    className="btn-glow w-full justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isLoading ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Submitting...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Submit Request</span>
                      </>
                    )}
                  </motion.button>
                </form>

                {/* Alternative Contact */}
                <div className="mt-8 pt-8 border-t border-white/10 text-center">
                  <p className="text-white/60 text-sm mb-4">
                    Have questions? Contact us directly.
                  </p>
                  <Link href="/contact">
                    <button className="btn-secondary inline-flex items-center gap-2">
                      Contact Us
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </Link>
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
