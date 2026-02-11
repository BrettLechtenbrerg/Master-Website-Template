'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, MessageSquare, Calendar, Users, CheckCircle, AlertCircle, ExternalLink } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import Footer from '@/components/Footer';
import { GHL_CONFIG } from '@/lib/ghl-config';

const contactInfo = [
  {
    icon: MapPin,
    title: 'Visit Us',
    lines: ['Independence Square', '141 E 5600 S #300, Murray, UT 84107'],
    href: 'https://maps.google.com/?q=Independence+Square+141+E+5600+S+Murray+UT+84107',
  },
  {
    icon: Phone,
    title: 'Call Us',
    lines: ['(801) 263-2632'],
    href: 'tel:801-263-2632',
  },
  {
    icon: Mail,
    title: 'Email Us',
    lines: ['support@murrayareachamber.com'],
    href: 'mailto:support@murrayareachamber.com',
  },
  {
    icon: Clock,
    title: 'Office Hours',
    lines: ['Monday - Friday', '9:00 AM - 5:00 PM'],
  },
];

const inquiryTypes = [
  { value: 'general', label: 'General Inquiry' },
  { value: 'membership', label: 'Membership Information' },
  { value: 'events', label: 'Events & Sponsorship' },
  { value: 'advertising', label: 'Advertising Opportunities' },
  { value: 'ribbon-cutting', label: 'Ribbon Cutting Request' },
  { value: 'partnership', label: 'Partnership Inquiry' },
  { value: 'media', label: 'Media Inquiry' },
  { value: 'other', label: 'Other' },
];

const quickActions = [
  { icon: Users, title: 'Join the Chamber', description: 'Learn about membership benefits', href: '/join' },
  { icon: Calendar, title: 'Upcoming Events', description: 'Browse chamber events', href: '/events/chamber' },
  { icon: MessageSquare, title: 'Member Support', description: 'Get help with your account', href: '/login' },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    inquiryType: 'general',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Check if GHL webhook is configured
  const isWebhookConfigured = GHL_CONFIG.webhooks.contact &&
    !GHL_CONFIG.webhooks.contact.includes('YOUR_CONTACT_WEBHOOK_ID');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    // Prepare data for GHL - format fields as GHL expects
    const ghlData = {
      // Standard GHL contact fields
      first_name: formData.firstName,
      last_name: formData.lastName,
      full_name: `${formData.firstName} ${formData.lastName}`,
      email: formData.email,
      phone: formData.phone || '',
      company_name: formData.company || '',

      // Custom fields for GHL
      inquiry_type: formData.inquiryType,
      message: formData.message,

      // Tags for GHL automation
      tags: [GHL_CONFIG.tags.contact, `inquiry-${formData.inquiryType}`],

      // Source tracking
      source: 'Website Contact Form',
      website: 'themurraychamber.com',

      // Timestamp
      submitted_at: new Date().toISOString(),
    };

    try {
      if (isWebhookConfigured) {
        // Send to GHL webhook
        const response = await fetch(GHL_CONFIG.webhooks.contact, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(ghlData),
        });

        if (!response.ok) {
          throw new Error('Failed to submit form');
        }
      } else {
        // If webhook not configured, simulate submission for demo
        console.log('GHL Webhook not configured. Form data:', ghlData);
        await new Promise(resolve => setTimeout(resolve, 1000));
      }

      setSubmitted(true);
    } catch (err) {
      console.error('Form submission error:', err);
      setError('There was a problem submitting your message. Please try again or call us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <>
      <PageHeader
        badge="Contact"
        title="Get in Touch"
        description="Have questions? We're here to help. Reach out to the Murray Area Chamber of Commerce and let's start a conversation."
        breadcrumbs={[
          { label: 'Contact' },
        ]}
      />

      {/* Contact Info Cards */}
      <section className="relative py-8 overflow-hidden">
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((item, index) => {
              const isClickable = !!item.href;

              const CardContent = (
                <>
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600 to-purple-700 mx-auto mb-4 flex items-center justify-center ${isClickable ? 'group-hover:from-orange-500 group-hover:to-orange-600' : ''} transition-all`}>
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className={`font-semibold text-white mb-2 flex items-center justify-center gap-2 ${isClickable ? 'group-hover:text-orange-300' : ''} transition-colors`}>
                    {item.title}
                    {isClickable && (
                      <ExternalLink className="w-4 h-4 text-white/40 group-hover:text-orange-400 transition-colors" />
                    )}
                  </h3>
                  {item.lines.map((line, i) => (
                    <p key={i} className={`text-white/60 text-sm ${isClickable ? 'group-hover:text-white/80' : ''} transition-colors`}>{line}</p>
                  ))}
                </>
              );

              return item.href ? (
                <motion.a
                  key={item.title}
                  href={item.href}
                  target={item.href.startsWith('http') || item.href.startsWith('mailto:') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') || item.href.startsWith('mailto:') ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-card p-6 text-center cursor-pointer group hover:border-orange-500/50 hover:bg-white/5 transition-all"
                >
                  {CardContent}
                </motion.a>
              ) : (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-card p-6 text-center"
                >
                  {CardContent}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="relative py-16 overflow-hidden">
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="glass-card p-8"
            >
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 rounded-full bg-green-500/20 mx-auto mb-6 flex items-center justify-center">
                    <CheckCircle className="w-10 h-10 text-green-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Message Sent!</h3>
                  <p className="text-white/60">
                    Thank you for contacting us. We&apos;ll get back to you within 1-2 business days.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setError(null);
                      setFormData({
                        firstName: '',
                        lastName: '',
                        email: '',
                        phone: '',
                        company: '',
                        inquiryType: 'general',
                        message: '',
                      });
                    }}
                    className="btn-secondary mt-6"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <>
                  <h2 className="text-2xl font-bold text-white mb-6">Send Us a Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-6 ghl-form">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-white/70 mb-2">First Name *</label>
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          required
                          className="input-glass w-full"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-white/70 mb-2">Last Name *</label>
                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
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
                        <label className="block text-sm font-medium text-white/70 mb-2">Phone</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="input-glass w-full"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-white/70 mb-2">Company/Organization</label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="input-glass w-full"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-white/70 mb-2">Inquiry Type *</label>
                      <select
                        name="inquiryType"
                        value={formData.inquiryType}
                        onChange={handleChange}
                        required
                        className="input-glass select-glass w-full"
                      >
                        {inquiryTypes.map(type => (
                          <option key={type.value} value={type.value}>{type.label}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-white/70 mb-2">Message *</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="input-glass w-full resize-none"
                        placeholder="How can we help you?"
                      />
                    </div>

                    {/* Error Message */}
                    {error && (
                      <div className="flex items-start gap-3 p-4 rounded-xl bg-red-500/10 border border-red-500/20">
                        <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                        <div>
                          <p className="text-red-300 text-sm">{error}</p>
                          <a href="tel:801-263-2632" className="text-red-400 hover:text-red-300 text-sm font-medium">
                            Call (801) 263-2632
                          </a>
                        </div>
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-glow w-full disabled:opacity-50"
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                      <Send className="w-5 h-5" />
                    </button>

                    {/* GHL Integration Status - only visible when not configured */}
                    {!isWebhookConfigured && (
                      <p className="text-white/30 text-xs text-center mt-4">
                        Demo mode - configure GHL webhook to enable submissions
                      </p>
                    )}
                  </form>
                </>
              )}
            </motion.div>

            {/* Map & Quick Actions */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              {/* Map Embed */}
              <div className="glass-card p-4 h-80">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3026.8834507074874!2d-111.88646788459567!3d40.64115797934068!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87528aa8a4f5e84d%3A0x2f32f8e4e4e2f2f2!2s141%20E%205600%20S%20%23300%2C%20Murray%2C%20UT%2084107!5e0!3m2!1sen!2sus!4v1706000000000"
                  width="100%"
                  height="100%"
                  style={{ border: 0, borderRadius: '0.75rem' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Murray Area Chamber of Commerce - Independence Square"
                />
              </div>

              {/* Quick Actions */}
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-white">Quick Actions</h3>
                {quickActions.map((action, index) => (
                  <motion.a
                    key={action.title}
                    href={action.href}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    className="glass-card p-4 flex items-center gap-4 group hover:bg-white/10 transition-colors"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center shrink-0">
                      <action.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-medium text-white group-hover:text-purple-300 transition-colors">
                        {action.title}
                      </h4>
                      <p className="text-white/60 text-sm">{action.description}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
