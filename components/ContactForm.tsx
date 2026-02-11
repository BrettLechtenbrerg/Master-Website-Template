'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import {
  Send,
  MapPin,
  Phone,
  Mail,
  Clock,
  CheckCircle,
  Building2,
  AlertCircle
} from 'lucide-react';
import { submitContactForm } from '@/lib/ghl';

export default function ContactForm() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    const formData = new FormData(e.currentTarget);

    try {
      const result = await submitContactForm({
        firstName: formData.get('first_name') as string,
        lastName: formData.get('last_name') as string,
        email: formData.get('email') as string,
        phone: formData.get('phone') as string || undefined,
        companyName: formData.get('company_name') as string || undefined,
        interest: formData.get('interest') as string,
        message: formData.get('message') as string,
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

  return (
    <section ref={ref} className="relative w-full py-12 sm:py-16 md:py-20 overflow-hidden">
      <div className="absolute inset-0 mesh-gradient opacity-30" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-orange-400 font-semibold uppercase tracking-wider text-sm">
            Get in Touch
          </span>
          <h2 className="mt-4 text-4xl sm:text-5xl font-bold text-white">
            Contact the Chamber
          </h2>
          <p className="mt-4 text-lg text-white/60 max-w-2xl mx-auto">
            Have questions about membership, events, or resources? We&apos;re here to help your business thrive.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-2 space-y-6 lg:space-y-8"
          >
            <div className="glass-card p-8 flex items-start gap-6">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-600 to-purple-700 flex items-center justify-center shrink-0 shadow-lg shadow-purple-500/20">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Visit Us</h3>
                <p className="mt-2 text-white/60 leading-relaxed">
                  141 E. 5600 S., Suite 300<br />
                  Murray, UT 84107
                </p>
              </div>
            </div>

            <div className="glass-card p-8 flex items-start gap-6">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center shrink-0 shadow-lg shadow-orange-500/20">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Call Us</h3>
                <a href="tel:8012632632" className="mt-2 block text-white/60 hover:text-white transition-colors">
                  (801) 263-2632
                </a>
              </div>
            </div>

            <div className="glass-card p-8 flex items-start gap-6">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-600 to-purple-700 flex items-center justify-center shrink-0 shadow-lg shadow-purple-500/20">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Email Us</h3>
                <a href="mailto:support@murrayareachamber.com" className="mt-2 block text-white/60 hover:text-white transition-colors">
                  support@murrayareachamber.com
                </a>
              </div>
            </div>

            <div className="glass-card p-8 flex items-start gap-6">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center shrink-0 shadow-lg shadow-orange-500/20">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Business Hours</h3>
                <p className="mt-2 text-white/60 leading-relaxed">
                  Monday – Friday<br />
                  8:00 AM – 4:00 PM
                </p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form - GHL Integrated */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <div className="glass-card p-10 md:p-12">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-green-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Message Sent!</h3>
                  <p className="mt-2 text-white/60">
                    Thank you for reaching out. We&apos;ll get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="mt-6 btn-secondary"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {error && (
                    <div className="flex items-center gap-3 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400">
                      <AlertCircle className="w-5 h-5 shrink-0" />
                      <span className="text-sm">{error}</span>
                    </div>
                  )}

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-white/80 mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="first_name"
                        required
                        className="input-glass"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-white/80 mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="last_name"
                        required
                        className="input-glass"
                        placeholder="Smith"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="input-glass"
                        placeholder="john@company.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-white/80 mb-2">
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="input-glass"
                        placeholder="(801) 555-0123"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-white/80 mb-2">
                      Company Name
                    </label>
                    <div className="relative">
                      <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                      <input
                        type="text"
                        id="company"
                        name="company_name"
                        className="input-glass pl-12"
                        placeholder="Your Business Name"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="interest" className="block text-sm font-medium text-white/80 mb-2">
                      I&apos;m interested in *
                    </label>
                    <select
                      id="interest"
                      name="interest"
                      required
                      className="input-glass select-glass"
                    >
                      <option value="">Select an option</option>
                      <option value="membership">Becoming a Member</option>
                      <option value="events">Hosting/Attending Events</option>
                      <option value="ribbon-cutting">Ribbon Cutting Request</option>
                      <option value="sponsorship">Sponsorship Opportunities</option>
                      <option value="resources">Business Resources</option>
                      <option value="other">Other Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-white/80 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      className="input-glass"
                      placeholder="How can we help you?"
                    />
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={isLoading}
                    className="btn-primary w-full justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isLoading ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </motion.button>

                  <p className="text-center text-xs text-white/40">
                    By submitting this form, you agree to our privacy policy and consent to receiving communications from Murray Area Chamber of Commerce.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
