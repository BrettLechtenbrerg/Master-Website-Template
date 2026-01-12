'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Scissors, Calendar, Camera, Users, CheckCircle, Send, AlertCircle } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import Footer from '@/components/Footer';
import { submitRibbonCuttingForm } from '@/lib/ghl';

const recentRibbonCuttings = [
  {
    id: 1,
    business: 'Murray Tech Solutions',
    date: 'December 2025',
    image: '/images/ribbon-cuttings/ribbon-1.jpg',
  },
  {
    id: 2,
    business: 'Bloom Floral Design',
    date: 'November 2025',
    image: '/images/ribbon-cuttings/ribbon-2.jpg',
  },
  {
    id: 3,
    business: 'The Hive Murray',
    date: 'October 2025',
    image: '/images/ribbon-cuttings/ribbon-3.jpg',
  },
];

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
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    const formData = new FormData(e.currentTarget);

    try {
      const result = await submitRibbonCuttingForm({
        businessName: formData.get('business_name') as string,
        contactPerson: formData.get('contact_person') as string,
        email: formData.get('email') as string,
        phone: formData.get('phone') as string,
        businessAddress: formData.get('business_address') as string,
        preferredDate: formData.get('preferred_date') as string,
        preferredTime: formData.get('preferred_time') as string,
        celebrationType: formData.get('celebration_type') as string,
        additionalDetails: formData.get('additional_details') as string || undefined,
      });

      if (result.success) {
        setIsSubmitted(true);
      } else {
        setError(result.message || 'Something went wrong. Please try again.');
      }
    } catch {
      setError('Unable to submit form. Please try again later.');
    } finally {
      setIsLoading(false);
    }
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

      {/* Hero Image Section */}
      <section className="relative py-8 overflow-hidden">
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="relative h-72 md:h-96 rounded-3xl overflow-hidden">
            <img
              src="/images/ribbon-cuttings/hero.jpg"
              alt="Ribbon Cutting Ceremony"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-purple-900/80 via-slate-900/60 to-orange-900/40" />
            <div className="absolute inset-0 flex items-center justify-center text-center">
              <div className="p-8 max-w-2xl">
                <h2 className="text-3xl md:text-4xl font-bold text-white">Celebrate Your Milestone</h2>
                <p className="mt-4 text-lg text-white/80">Join the tradition of over 100+ successful ribbon cuttings we&apos;ve hosted.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative py-16 overflow-hidden">
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white">What&apos;s Included</h2>
            <p className="mt-4 text-white/60">Every ribbon cutting ceremony includes:</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="glass-card p-8 text-center">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white">{benefit.title}</h3>
                <p className="mt-3 text-white/60">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Ribbon Cuttings Gallery - Using exact Features.tsx pattern */}
      <section className="relative py-16 overflow-hidden">
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 text-sm font-medium text-orange-300 bg-orange-500/20 rounded-full mb-4">
              Recent Celebrations
            </span>
            <h2 className="text-3xl font-bold text-white">Our Latest Ribbon Cuttings</h2>
            <p className="mt-4 text-white/60">See how we celebrate business milestones in Murray</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {recentRibbonCuttings.map((ribbon) => (
              <div key={ribbon.id} className="glass-card overflow-hidden group cursor-pointer">
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={ribbon.image}
                    alt={`Ribbon cutting for ${ribbon.business}`}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-white group-hover:text-purple-300 transition-colors">
                    {ribbon.business}
                  </h3>
                  <p className="text-white/50 text-sm mt-1">{ribbon.date}</p>
                </div>
              </div>
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
                  Thank you for your ribbon cutting request. Our team will contact you within 2 business days to confirm details.
                </p>
                <button onClick={() => setIsSubmitted(false)} className="mt-8 btn-secondary">
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

                {error && (
                  <div className="flex items-center gap-3 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 mb-6">
                    <AlertCircle className="w-5 h-5 shrink-0" />
                    <span className="text-sm">{error}</span>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <label className="block text-sm font-medium text-white/80 mb-2">Business Name *</label>
                      <input type="text" name="business_name" required className="input-glass" placeholder="Your Business Name" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-white/80 mb-2">Contact Person *</label>
                      <input type="text" name="contact_person" required className="input-glass" placeholder="Full Name" />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
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
                    <label className="block text-sm font-medium text-white/80 mb-2">Business Address *</label>
                    <input type="text" name="business_address" required className="input-glass" placeholder="Street Address, City, State, ZIP" />
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <label className="block text-sm font-medium text-white/80 mb-2">Preferred Date *</label>
                      <input type="date" name="preferred_date" required className="input-glass" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-white/80 mb-2">Preferred Time *</label>
                      <input type="time" name="preferred_time" required className="input-glass" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-white/80 mb-2">Type of Celebration *</label>
                    <select name="celebration_type" required className="input-glass select-glass">
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
                    <label className="block text-sm font-medium text-white/80 mb-2">Additional Details</label>
                    <textarea name="additional_details" rows={4} className="input-glass" placeholder="Tell us about your business and any special requests..." />
                  </div>

                  <div className="flex items-start gap-3">
                    <input type="checkbox" required className="mt-1" />
                    <label className="text-sm text-white/60">
                      I confirm that my business is a member in good standing with the Murray Area Chamber of Commerce.
                    </label>
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
              </>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
