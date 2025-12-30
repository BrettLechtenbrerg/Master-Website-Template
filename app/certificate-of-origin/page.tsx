'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { FileText, Globe, Truck, CheckCircle, ArrowRight, Download, Info } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import Footer from '@/components/Footer';

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
  { type: 'Members', price: '$25', description: 'Per certificate' },
  { type: 'Non-Members', price: '$50', description: 'Per certificate' },
  { type: 'Rush Processing', price: '+$15', description: 'Same-day service' },
];

export default function CertificateOfOriginPage() {
  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    productDescription: '',
    destinationCountry: '',
    quantity: '1',
    rushProcessing: false,
    additionalNotes: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // GHL Webhook Integration
    // await fetch('YOUR_GHL_WEBHOOK_URL', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(formData),
    // });

    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const value = e.target.type === 'checkbox' ? (e.target as HTMLInputElement).checked : e.target.value;
    setFormData(prev => ({ ...prev, [e.target.name]: value }));
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

      {/* About Section */}
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

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit.title}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="glass-card p-6 flex gap-4"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600 to-purple-700 flex items-center justify-center shrink-0">
                      <benefit.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">{benefit.title}</h3>
                      <p className="text-white/60 text-sm mt-1">{benefit.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
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

          <div className="grid md:grid-cols-3 gap-8">
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
        <div className="relative z-10 w-full max-w-3xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-card p-8"
          >
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 rounded-full bg-green-500/20 mx-auto mb-6 flex items-center justify-center">
                  <CheckCircle className="w-10 h-10 text-green-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Request Submitted!</h3>
                <p className="text-white/60 mb-8">
                  We&apos;ve received your Certificate of Origin request. Our team will contact you within 1 business day to confirm details and payment.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="btn-secondary"
                >
                  Submit Another Request
                </button>
              </div>
            ) : (
              <>
                <div className="flex items-center gap-3 mb-6">
                  <FileText className="w-8 h-8 text-purple-400" />
                  <h2 className="text-2xl font-bold text-white">Request a Certificate</h2>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6 ghl-form">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-white/70 mb-2">Company Name *</label>
                      <input
                        type="text"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleChange}
                        required
                        className="input-glass w-full"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-white/70 mb-2">Contact Name *</label>
                      <input
                        type="text"
                        name="contactName"
                        value={formData.contactName}
                        onChange={handleChange}
                        required
                        className="input-glass w-full"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-white/70 mb-2">Email *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="input-glass w-full"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-white/70 mb-2">Phone *</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="input-glass w-full"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-white/70 mb-2">Product Description *</label>
                    <textarea
                      name="productDescription"
                      value={formData.productDescription}
                      onChange={handleChange}
                      required
                      rows={3}
                      className="input-glass w-full resize-none"
                      placeholder="Describe the goods being exported"
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-white/70 mb-2">Destination Country *</label>
                      <input
                        type="text"
                        name="destinationCountry"
                        value={formData.destinationCountry}
                        onChange={handleChange}
                        required
                        className="input-glass w-full"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-white/70 mb-2">Number of Certificates</label>
                      <select
                        name="quantity"
                        value={formData.quantity}
                        onChange={handleChange}
                        className="input-glass select-glass w-full"
                      >
                        {[1, 2, 3, 4, 5, 10].map(n => (
                          <option key={n} value={n}>{n}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        name="rushProcessing"
                        checked={formData.rushProcessing}
                        onChange={handleChange}
                        className="w-5 h-5 rounded border-white/20 bg-white/5 text-purple-500 focus:ring-purple-500"
                      />
                      <span className="text-white/70">
                        Rush Processing (Same-day service, +$15)
                      </span>
                    </label>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-white/70 mb-2">Additional Notes</label>
                    <textarea
                      name="additionalNotes"
                      value={formData.additionalNotes}
                      onChange={handleChange}
                      rows={2}
                      className="input-glass w-full resize-none"
                      placeholder="Any special requirements or questions"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-glow w-full disabled:opacity-50"
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit Request'}
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </form>
              </>
            )}
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}
