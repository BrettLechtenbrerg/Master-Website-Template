'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Lock, ExternalLink, ArrowRight, Users, Calendar, BookOpen, MessageSquare, Gift, Shield, CheckCircle, AlertCircle } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { GHL_CONFIG } from '@/lib/ghl-config';

// Member portal features
const portalFeatures = [
  { icon: Users, title: 'Member Directory', description: 'Connect with fellow Chamber members' },
  { icon: Calendar, title: 'Event Registration', description: 'RSVP to exclusive member events' },
  { icon: BookOpen, title: 'Resources Library', description: 'Access business guides & templates' },
  { icon: MessageSquare, title: 'Community Forum', description: 'Discuss topics with other members' },
  { icon: Gift, title: 'Member Deals', description: 'Exclusive discounts from members' },
  { icon: Shield, title: 'Your Profile', description: 'Manage your business listing' },
];

export default function LoginPage() {
  const [isRedirecting, setIsRedirecting] = useState(false);
  const [showComingSoon, setShowComingSoon] = useState(!GHL_CONFIG.community.isConfigured);

  // Get the appropriate login URL
  const getLoginUrl = () => {
    // Use community URL if available, otherwise client portal
    if (GHL_CONFIG.community.loginUrl && !GHL_CONFIG.community.loginUrl.includes('YOUR_COMMUNITY_ID')) {
      return GHL_CONFIG.community.loginUrl;
    }
    if (GHL_CONFIG.community.clientPortalUrl && !GHL_CONFIG.community.clientPortalUrl.includes('YOUR_PORTAL_ID')) {
      return GHL_CONFIG.community.clientPortalUrl;
    }
    return null;
  };

  const handleLogin = () => {
    const loginUrl = getLoginUrl();
    if (loginUrl) {
      setIsRedirecting(true);
      // Small delay for visual feedback
      setTimeout(() => {
        window.location.href = loginUrl;
      }, 500);
    }
  };

  const loginUrl = getLoginUrl();
  const isConfigured = loginUrl !== null;

  return (
    <>
      <PageHeader
        badge="Members"
        title="Member Portal"
        description="Access your exclusive member community, resources, and connect with fellow Murray businesses."
        breadcrumbs={[
          { label: 'Membership', href: '/members' },
          { label: 'Member Login' },
        ]}
      />

      <section className="relative py-16 overflow-hidden">
        <div className="relative z-10 w-full max-w-4xl mx-auto px-6 sm:px-8">
          {/* Main Login Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-card p-8 md:p-12 text-center"
          >
            {/* Icon */}
            <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-purple-600 to-orange-500 flex items-center justify-center mx-auto mb-6 shadow-2xl">
              <Lock className="w-10 h-10 text-white" />
            </div>

            {isConfigured ? (
              <>
                {/* Configured - Show Login Button */}
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Welcome Back, Member!
                </h2>
                <p className="text-white/60 max-w-lg mx-auto mb-8">
                  Click below to access your exclusive member portal. You&apos;ll be redirected to our secure login page.
                </p>

                <button
                  onClick={handleLogin}
                  disabled={isRedirecting}
                  className="btn-glow text-lg px-8 py-4 disabled:opacity-70"
                >
                  {isRedirecting ? (
                    <>
                      <span className="animate-pulse">Redirecting...</span>
                    </>
                  ) : (
                    <>
                      Access Member Portal
                      <ExternalLink className="w-5 h-5" />
                    </>
                  )}
                </button>

                {/* Security Note */}
                <div className="mt-6 flex items-center justify-center gap-2 text-sm text-white/50">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Secure login powered by Go High Level</span>
                </div>
              </>
            ) : (
              <>
                {/* Not Configured - Show Coming Soon */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/20 text-orange-300 text-sm font-medium mb-6">
                  <AlertCircle className="w-4 h-4" />
                  Coming Soon
                </div>

                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Member Portal Launching Soon
                </h2>
                <p className="text-white/60 max-w-lg mx-auto mb-8">
                  We&apos;re building an exclusive online community for Murray Chamber members.
                  You&apos;ll be able to connect with fellow members, access resources, register for events, and more!
                </p>

                {/* Notify Me Form */}
                <div className="glass p-6 rounded-2xl max-w-md mx-auto mb-8">
                  <p className="text-white/80 text-sm mb-4">
                    Want to be notified when the member portal launches?
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link href="/contact" className="flex-1">
                      <button className="btn-glow w-full">
                        Contact Us
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </Link>
                    <a href="tel:801-263-2632" className="flex-1">
                      <button className="btn-secondary w-full">
                        Call (801) 263-2632
                      </button>
                    </a>
                  </div>
                </div>
              </>
            )}

            {/* Help Links */}
            <div className="pt-6 border-t border-white/10 flex flex-wrap justify-center gap-6 text-sm">
              <Link href="/join" className="text-purple-400 hover:text-purple-300 transition-colors flex items-center gap-1">
                Not a member? Join today
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/contact" className="text-white/60 hover:text-white transition-colors">
                Need help logging in?
              </Link>
            </div>
          </motion.div>

          {/* Portal Features Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-12"
          >
            <h3 className="text-xl font-bold text-white text-center mb-8">
              What&apos;s Inside the Member Portal
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {portalFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="glass-card p-5 flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600/30 to-orange-500/30 flex items-center justify-center shrink-0">
                    <feature.icon className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">{feature.title}</h4>
                    <p className="text-white/60 text-sm">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Membership CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-12 glass-strong rounded-2xl p-8 text-center"
          >
            <h3 className="text-xl font-bold text-white mb-3">
              Not a Chamber Member Yet?
            </h3>
            <p className="text-white/60 mb-6 max-w-lg mx-auto">
              Join 500+ Murray businesses and gain access to exclusive resources,
              networking events, and the member portal.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/join">
                <button className="btn-glow">
                  View Membership Options
                  <ArrowRight className="w-5 h-5" />
                </button>
              </Link>
              <Link href="/members">
                <button className="btn-secondary">
                  Learn About Benefits
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}
