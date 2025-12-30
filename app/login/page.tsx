'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Lock, Mail, Eye, EyeOff, ArrowRight, User, Building2 } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function LoginPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    company: '',
    confirmPassword: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // GHL Member Portal Integration
    // This would connect to your GHL member portal authentication
    // await fetch('YOUR_GHL_AUTH_ENDPOINT', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(formData),
    // });

    // Simulate authentication
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsSubmitting(false);

    // Redirect to member portal or dashboard
    // window.location.href = '/member-portal';
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <>
      <PageHeader
        badge="Members"
        title={isLogin ? 'Member Login' : 'Create Account'}
        description={isLogin
          ? 'Access your member portal, manage your profile, and explore exclusive member resources.'
          : 'Join the Murray Area Chamber of Commerce and unlock exclusive member benefits.'
        }
        breadcrumbs={[
          { label: 'Membership', href: '/members' },
          { label: isLogin ? 'Member Login' : 'Create Account' },
        ]}
      />

      <section className="relative py-16 overflow-hidden">
        <div className="relative z-10 w-full max-w-md mx-auto px-6 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-card p-8"
          >
            {/* Toggle Buttons */}
            <div className="flex rounded-xl bg-white/5 p-1 mb-8">
              <button
                onClick={() => setIsLogin(true)}
                className={`flex-1 py-2 rounded-lg text-sm font-medium transition-all ${
                  isLogin ? 'bg-purple-500 text-white' : 'text-white/60 hover:text-white'
                }`}
              >
                Sign In
              </button>
              <button
                onClick={() => setIsLogin(false)}
                className={`flex-1 py-2 rounded-lg text-sm font-medium transition-all ${
                  !isLogin ? 'bg-purple-500 text-white' : 'text-white/60 hover:text-white'
                }`}
              >
                Register
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6 ghl-form">
              {!isLogin && (
                <>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-white/70 mb-2">First Name</label>
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          required
                          className="input-glass w-full pl-12"
                          placeholder="First"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-white/70 mb-2">Last Name</label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        className="input-glass w-full"
                        placeholder="Last"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-white/70 mb-2">Company</label>
                    <div className="relative">
                      <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="input-glass w-full pl-12"
                        placeholder="Your company name"
                      />
                    </div>
                  </div>
                </>
              )}

              <div>
                <label className="block text-sm font-medium text-white/70 mb-2">Email</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="input-glass w-full pl-12"
                    placeholder="you@company.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-white/70 mb-2">Password</label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    className="input-glass w-full pl-12 pr-12"
                    placeholder="••••••••"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 hover:text-white/60 transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              {!isLogin && (
                <div>
                  <label className="block text-sm font-medium text-white/70 mb-2">Confirm Password</label>
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      required
                      className="input-glass w-full pl-12"
                      placeholder="••••••••"
                    />
                  </div>
                </div>
              )}

              {isLogin && (
                <div className="flex items-center justify-between">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="w-4 h-4 rounded border-white/20 bg-white/5 text-purple-500 focus:ring-purple-500" />
                    <span className="text-sm text-white/60">Remember me</span>
                  </label>
                  <a href="#" className="text-sm text-purple-400 hover:text-purple-300 transition-colors">
                    Forgot password?
                  </a>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-glow w-full disabled:opacity-50"
              >
                {isSubmitting ? 'Please wait...' : (isLogin ? 'Sign In' : 'Create Account')}
                <ArrowRight className="w-5 h-5" />
              </button>
            </form>

            {/* Alternative Actions */}
            <div className="mt-8 pt-8 border-t border-white/10 text-center">
              {isLogin ? (
                <p className="text-white/60 text-sm">
                  Not a member yet?{' '}
                  <Link href="/join" className="text-purple-400 hover:text-purple-300 transition-colors">
                    Join the Chamber
                  </Link>
                </p>
              ) : (
                <p className="text-white/60 text-sm">
                  Already have an account?{' '}
                  <button
                    onClick={() => setIsLogin(true)}
                    className="text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    Sign in here
                  </button>
                </p>
              )}
            </div>
          </motion.div>

          {/* Member Benefits Reminder */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-8 glass-card p-6 text-center"
          >
            <h3 className="font-semibold text-white mb-2">Member Portal Features</h3>
            <ul className="text-white/60 text-sm space-y-1">
              <li>• Update your business profile</li>
              <li>• Register for events</li>
              <li>• Access member-only resources</li>
              <li>• View and manage your deals</li>
              <li>• Connect with other members</li>
            </ul>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}
