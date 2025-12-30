'use client';

import { motion } from 'framer-motion';
import { Check, ArrowRight, Building2, Users, Calendar, Trophy, Megaphone, BadgePercent } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import Footer from '@/components/Footer';
import Link from 'next/link';

const membershipTiers = [
  {
    name: 'Bronze',
    price: 275,
    period: 'year',
    description: 'Perfect for small businesses and startups',
    color: 'from-amber-700 to-amber-800',
    features: [
      'Business listing in member directory',
      'Monthly newsletter subscription',
      'Member pricing on events',
      'Networking event access',
      'Digital membership certificate',
    ],
    popular: false,
  },
  {
    name: 'Silver',
    price: 475,
    period: 'year',
    description: 'Great for growing businesses',
    color: 'from-gray-400 to-gray-500',
    features: [
      'All Bronze benefits',
      'Enhanced directory listing',
      'Social media features (2x/year)',
      'Ribbon cutting ceremony',
      'Committee participation',
      'Member-to-member discounts',
    ],
    popular: false,
  },
  {
    name: 'Gold',
    price: 750,
    period: 'year',
    description: 'Maximum visibility and engagement',
    color: 'from-yellow-400 to-yellow-500',
    features: [
      'All Silver benefits',
      'Premium directory placement',
      'Monthly social media features',
      'Newsletter spotlight (1x/year)',
      'Event sponsorship opportunities',
      'Ambassador program eligibility',
      'Exclusive networking events',
    ],
    popular: true,
  },
  {
    name: 'Platinum',
    price: 1500,
    period: 'year',
    description: 'Premier partnership status',
    color: 'from-purple-400 to-purple-500',
    features: [
      'All Gold benefits',
      'Top directory placement',
      'Weekly social media features',
      'Quarterly newsletter features',
      'Premier event sponsorship',
      'Board meeting invitations',
      'Custom partnership opportunities',
      'VIP event access',
    ],
    popular: false,
  },
];

const benefits = [
  { icon: Building2, title: 'Business Visibility', description: 'Get listed in our member directory and reach thousands of potential customers.' },
  { icon: Users, title: 'Networking', description: 'Connect with 500+ local businesses at our monthly events and mixers.' },
  { icon: Calendar, title: 'Exclusive Events', description: 'Access member-only workshops, luncheons, and special celebrations.' },
  { icon: Trophy, title: 'Recognition', description: 'Ribbon cuttings, awards, and social media features to celebrate your success.' },
  { icon: Megaphone, title: 'Advocacy', description: 'We represent your interests at city council and community planning meetings.' },
  { icon: BadgePercent, title: 'Member Deals', description: 'Exclusive discounts from fellow Chamber members.' },
];

export default function JoinPage() {
  return (
    <>
      <PageHeader
        badge="Join Us"
        title="Become a Member"
        description="Join 500+ Murray businesses and unlock the resources, connections, and visibility your business needs to thrive."
        breadcrumbs={[
          { label: 'Membership', href: '/members' },
          { label: 'Join the Chamber' },
        ]}
      />

      {/* Benefits Grid */}
      <section className="relative py-16 overflow-hidden">
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white">Membership Benefits</h2>
            <p className="mt-4 text-white/60">Everything you need to grow your business in Murray.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-6"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600 to-purple-700 flex items-center justify-center mb-4 shadow-lg">
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white">{benefit.title}</h3>
                <p className="mt-2 text-white/60 text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="relative py-16 overflow-hidden">
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white">Choose Your Membership Level</h2>
            <p className="mt-4 text-white/60">Select the tier that best fits your business needs.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {membershipTiers.map((tier, index) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`relative glass-card p-6 ${tier.popular ? 'ring-2 ring-purple-500' : ''}`}
              >
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-purple-500 text-white text-xs font-medium rounded-full">
                    Most Popular
                  </div>
                )}

                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${tier.color} mx-auto mb-4 flex items-center justify-center shadow-lg`}>
                  <span className="text-white font-bold text-lg">{tier.name.charAt(0)}</span>
                </div>

                <h3 className="text-xl font-bold text-white text-center">{tier.name}</h3>
                <p className="mt-2 text-white/60 text-sm text-center">{tier.description}</p>

                <div className="mt-4 text-center">
                  <span className="text-4xl font-bold text-white">${tier.price}</span>
                  <span className="text-white/60">/{tier.period}</span>
                </div>

                <ul className="mt-6 space-y-3">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
                      <span className="text-white/70 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`mt-6 w-full ${tier.popular ? 'btn-glow' : 'btn-secondary'}`}>
                  Select {tier.name}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application CTA */}
      <section className="relative py-16 overflow-hidden">
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-strong rounded-3xl p-8 md:p-12 lg:p-16 text-center"
          >
            <h2 className="text-3xl font-bold text-white">Ready to Join?</h2>
            <p className="mt-4 text-white/60 max-w-2xl mx-auto">
              Have questions about membership? Contact us for a personalized consultation.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/contact">
                <button className="btn-glow">
                  Start Application
                  <ArrowRight className="w-5 h-5" />
                </button>
              </Link>
              <Link href="/contact">
                <button className="btn-secondary">Schedule a Call</button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}
