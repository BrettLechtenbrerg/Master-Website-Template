'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, CheckCircle, AlertCircle, ArrowRight } from 'lucide-react';
import { submitNewsletterSignup } from '@/lib/ghl';

interface NewsletterSignupProps {
  variant?: 'inline' | 'card';
  className?: string;
}

export default function NewsletterSignup({ variant = 'inline', className = '' }: NewsletterSignupProps) {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const result = await submitNewsletterSignup({
        email,
        firstName: firstName || undefined,
      });

      if (result.success) {
        setIsSubmitted(true);
        setEmail('');
        setFirstName('');
      } else {
        setError(result.message || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      setError('Unable to subscribe. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  if (variant === 'card') {
    return (
      <div className={`glass-card p-8 md:p-10 ${className}`}>
        <div className="flex items-center gap-4 mb-6">
          <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-600 to-purple-700 flex items-center justify-center shadow-lg">
            <Mail className="w-7 h-7 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white">Stay Connected</h3>
            <p className="text-white/60 text-sm">Get chamber news and events in your inbox</p>
          </div>
        </div>

        {isSubmitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex items-center gap-3 p-4 rounded-xl bg-green-500/10 border border-green-500/20"
          >
            <CheckCircle className="w-5 h-5 text-green-400 shrink-0" />
            <span className="text-green-400 text-sm">You&apos;re subscribed! Check your inbox for a confirmation.</span>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {error && (
              <div className="flex items-center gap-3 p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span className="text-xs">{error}</span>
              </div>
            )}

            <div className="grid sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name (optional)"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="input-glass"
              />
              <input
                type="email"
                placeholder="Email Address *"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="input-glass"
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={isLoading}
              className="btn-glow w-full justify-center disabled:opacity-50"
            >
              {isLoading ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <>
                  <span>Subscribe</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </motion.button>

            <p className="text-xs text-white/40 text-center">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </form>
        )}
      </div>
    );
  }

  // Inline variant (for footer)
  return (
    <div className={className}>
      {isSubmitted ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex items-center gap-2 text-green-400 text-sm"
        >
          <CheckCircle className="w-4 h-4" />
          <span>Subscribed!</span>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-3">
          {error && (
            <div className="text-red-400 text-xs flex items-center gap-1">
              <AlertCircle className="w-3 h-3" />
              {error}
            </div>
          )}

          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 px-4 py-2.5 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/40 text-sm focus:outline-none focus:border-purple-500 transition-colors"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              disabled={isLoading}
              className="px-4 py-2.5 rounded-lg bg-gradient-to-r from-purple-600 to-purple-700 text-white font-medium text-sm disabled:opacity-50 transition-all hover:shadow-lg hover:shadow-purple-500/20"
            >
              {isLoading ? (
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <ArrowRight className="w-4 h-4" />
              )}
            </motion.button>
          </div>
        </form>
      )}
    </div>
  );
}
