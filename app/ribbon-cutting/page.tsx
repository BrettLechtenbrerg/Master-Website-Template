'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Scissors, Calendar, Camera, Users, CheckCircle, Send } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import Footer from '@/components/Footer';

const benefits = [
  {
    icon: Camera,
    title: 'Professional Photography',
    description: 'We capture your big moment with professional photos for social media and marketing.',
  },
  {
    icon: Users,
    title: 'Ambassador Attendance',
    description: 'Our Chamber Ambassadors will be there to celebrate and support your milestone.',
  },
  {
    icon: Calendar,
    title: 'Event Promotion',
    description: 'We promote your event on our website, newsletter, and social media channels.',
  },
];

export default function RibbonCuttingPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

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

      {/* Benefits Section */}
      <section className="relative py-16 overflow-hidden">
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white">What&apos;s Included</h2>
            <p className="mt-4 text-white/60">Every ribbon cutting ceremony includes:</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-8 text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white">{benefit.title}</h3>
                <p className="mt-3 text-white/60">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Request Form */}
      <section className="relative py-16 overflow-hidden">
        <div className="relative z-10 w-full max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-card p-8 md:p-12"
          >
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-10 h-10 text-green-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">Request Submitted!</h3>
                <p className="mt-4 text-white/60 max-w-md mx-auto">
                  Thank you for your ribbon cutting request. Our team will contact you within 2 business days to confirm details.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-8 btn-secondary"
                >
                  Submit Another Request
                </button>
              </div>
            ) : (
              <>
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600 to-purple-700 flex items-center justify-center shadow-lg">
                    <Scissors className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white">Request Form</h2>
                    <p className="text-white/60">Fill out the form below to schedule your ceremony</p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6 ghl-form">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <label className="block text-sm font-medium text-white/80 mb-2">
                        Business Name *
                      </label>
                      <input type="text" required className="input-glass" placeholder="Your Business Name" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-white/80 mb-2">
                        Contact Person *
                      </label>
                      <input type="text" required className="input-glass" placeholder="Full Name" />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <label className="block text-sm font-medium text-white/80 mb-2">
                        Email *
                      </label>
                      <input type="email" required className="input-glass" placeholder="email@company.com" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-white/80 mb-2">
                        Phone *
                      </label>
                      <input type="tel" required className="input-glass" placeholder="(801) 555-0123" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-white/80 mb-2">
                      Business Address *
                    </label>
                    <input type="text" required className="input-glass" placeholder="Street Address, City, State, ZIP" />
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <label className="block text-sm font-medium text-white/80 mb-2">
                        Preferred Date *
                      </label>
                      <input type="date" required className="input-glass" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-white/80 mb-2">
                        Preferred Time *
                      </label>
                      <input type="time" required className="input-glass" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-white/80 mb-2">
                      Type of Celebration *
                    </label>
                    <select required className="input-glass select-glass">
                      <option value="">Select an option</option>
                      <option value="grand-opening">Grand Opening</option>
                      <option value="relocation">New Location / Relocation</option>
                      <option value="renovation">Renovation / Expansion</option>
                      <option value="anniversary">Business Anniversary</option>
                      <option value="rebrand">Rebrand / New Ownership</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-white/80 mb-2">
                      Additional Details
                    </label>
                    <textarea
                      rows={4}
                      className="input-glass textarea-glass"
                      placeholder="Tell us about your business and any special requests..."
                    />
                  </div>

                  <div className="flex items-start gap-3">
                    <input type="checkbox" required className="mt-1" />
                    <label className="text-sm text-white/60">
                      I confirm that my business is a member in good standing with the Murray Area Chamber of Commerce.
                    </label>
                  </div>

                  <button type="submit" className="btn-glow w-full justify-center">
                    <Send className="w-5 h-5" />
                    Submit Request
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
