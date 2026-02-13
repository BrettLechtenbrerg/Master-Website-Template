'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Scissors, Calendar, Camera, Users, CheckCircle, Send, AlertCircle, Play, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import PageHeader from '@/components/PageHeader';
import Footer from '@/components/Footer';
import StaggerChildren, { StaggerItem } from '@/components/animations/StaggerChildren';
import { submitRibbonCuttingForm } from '@/lib/ghl';
import SuccessState from '@/components/SuccessState';

// YouTube Video ID
const YOUTUBE_VIDEO_ID = 'F_VdvVmJcWw';

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
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

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
    } catch (err) {
      setError('Unable to submit form. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  const hasVideo = Boolean(YOUTUBE_VIDEO_ID);

  return (
    <>
      <PageHeader
        badge="Celebrate With Us"
        title="Ribbon Cuttings"
        description="Celebrate your business milestone with the Murray Area Chamber of Commerce. Grand openings, renovations, anniversaries — we're here to help you shine."
        breadcrumbs={[
          { label: 'Business Resources', href: '/resources' },
          { label: 'Ribbon Cuttings' },
        ]}
      />

      {/* Video Section */}
      <section className="relative py-12 overflow-hidden">
        <div className="relative z-10 w-full max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-card p-8"
          >
            {hasVideo && isVideoPlaying ? (
              /* YouTube Embed */
              <div className="aspect-video rounded-xl overflow-hidden mb-6">
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=1&rel=0`}
                  title="Murray Chamber Ribbon Cuttings"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
            ) : (
              /* Video Placeholder / Thumbnail */
              <div
                className="aspect-video bg-gradient-to-br from-purple-600/30 to-orange-500/30 rounded-xl flex items-center justify-center mb-6 cursor-pointer group relative overflow-hidden"
                onClick={() => hasVideo && setIsVideoPlaying(true)}
              >
                {hasVideo ? (
                  /* Show YouTube thumbnail if video is configured */
                  <>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={`https://img.youtube.com/vi/${YOUTUBE_VIDEO_ID}/hqdefault.jpg`}
                      alt="Ribbon Cutting Video"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors" />
                  </>
                ) : null}
                <div className="relative w-20 h-20 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm group-hover:bg-white/20 transition-colors group-hover:scale-110 duration-300">
                  <Play className="w-10 h-10 text-white ml-2" />
                </div>
                {!hasVideo && (
                  <div className="absolute bottom-4 left-0 right-0 text-center">
                    <span className="text-white/60 text-sm">Video Coming Soon</span>
                  </div>
                )}
              </div>
            )}
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-2">Celebrate Your Milestone</h3>
              <p className="text-white/60">
                Join the tradition of over 100+ successful ribbon cuttings we&apos;ve hosted for Murray businesses.
              </p>
            </div>
          </motion.div>
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

      {/* Recent Ribbon Cuttings Gallery */}
      <section className="relative py-16 overflow-hidden">
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 text-sm font-medium text-orange-300 bg-orange-500/20 rounded-full mb-4">
              Recent Celebrations
            </span>
            <h2 className="text-3xl font-bold text-white">Our Latest Ribbon Cuttings</h2>
            <p className="mt-4 text-white/60">See how we celebrate business milestones in Murray</p>
          </div>

          <StaggerChildren staggerDelay={0.1} className="grid md:grid-cols-3 gap-8">
            {recentRibbonCuttings.map((ribbon) => (
              <StaggerItem key={ribbon.id}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="glass-card overflow-hidden group cursor-pointer"
                >
                  {/* Business Image */}
                  <div className="relative h-48 overflow-hidden bg-gradient-to-br from-purple-600/20 to-orange-500/20">
                    <Image
                      src={ribbon.image}
                      alt={ribbon.business}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-white group-hover:text-purple-300 transition-colors">
                      {ribbon.business}
                    </h3>
                    <p className="text-white/50 text-sm mt-1">{ribbon.date}</p>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Request Form */}
      <section className="relative py-16 overflow-hidden">
        <div className="relative z-10 w-full max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="glass-card p-8 md:p-12">
            {isSubmitted ? (
              <SuccessState
                title="Request Submitted!"
                message="Thank you for your ribbon cutting request. Our team will contact you within 2 business days to confirm details."
                onButtonClick={() => setIsSubmitted(false)}
                buttonText="Submit Another Request"
              />
            ) : (
              <>
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600 to-purple-700 flex items-center justify-center shadow-lg">
                    <Scissors className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white">Request a Ribbon Cutting</h2>
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
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-white/80 mb-2">Business Name *</label>
                      <input type="text" name="business_name" required className="input-glass" placeholder="Your Business Name" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-white/80 mb-2">Contact Person *</label>
                      <input type="text" name="contact_person" required className="input-glass" placeholder="Full Name" />
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
                    <label className="block text-sm font-medium text-white/80 mb-2">Business Address *</label>
                    <input type="text" name="business_address" required className="input-glass" placeholder="Street Address, City, State, ZIP" />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
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
                    <input type="checkbox" required className="mt-1 accent-purple-500" />
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

                {/* Alternative Contact */}
                <div className="mt-8 pt-8 border-t border-white/10 text-center">
                  <p className="text-white/60 text-sm mb-4">
                    Prefer to speak with someone directly?
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
