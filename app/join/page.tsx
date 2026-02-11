'use client';

import { motion } from 'framer-motion';
import { Check, ArrowRight, Building2, Users, Calendar, Trophy, Megaphone, BadgePercent, Briefcase, Heart, Home, Star, Sparkles, Gift } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import Footer from '@/components/Footer';
import Link from 'next/link';

// Standard membership tiers based on business size
const standardMemberships = [
  {
    name: 'Nonprofit / Individual / Home-Based',
    price: 250,
    period: 'year',
    description: 'For nonprofits, individuals, and home-based businesses',
    icon: Home,
    color: 'from-green-500 to-green-600',
    features: [
      'Business listing in member directory',
      'Monthly newsletter subscription',
      'Member pricing on events',
      'Networking event access',
      'Digital membership certificate',
      'Member-to-member discounts',
    ],
    paymentUrl: 'https://link.fastpaydirect.com/payment-link/698ca45e86a548d2ef0f7a3a',
  },
  {
    name: '10 or Fewer Employees',
    price: 350,
    period: 'year',
    description: 'For small businesses with up to 10 employees',
    icon: Briefcase,
    color: 'from-purple-500 to-purple-600',
    popular: true,
    features: [
      'Business listing in member directory',
      'Monthly newsletter subscription',
      'Member pricing on events',
      'Networking event access',
      'Digital membership certificate',
      'Ribbon cutting ceremony',
      'Member-to-member discounts',
    ],
    paymentUrl: 'https://link.fastpaydirect.com/payment-link/698ca5069577be41f8b37ab0',
  },
  {
    name: '11-20 Employees',
    price: 500,
    period: 'year',
    description: 'For growing businesses with 11-20 employees',
    icon: Users,
    color: 'from-orange-500 to-orange-600',
    features: [
      'All small business benefits',
      'Enhanced directory listing',
      'Social media features (2x/year)',
      'Ribbon cutting ceremony',
      'Committee participation',
      'Event sponsorship opportunities',
    ],
    paymentUrl: 'https://link.fastpaydirect.com/payment-link/698ca4af9b27186a53d6eaf7',
  },
  {
    name: '21-50 Employees',
    price: 850,
    period: 'year',
    description: 'For established businesses with 21-50 employees',
    icon: Building2,
    color: 'from-blue-500 to-blue-600',
    features: [
      'All mid-size business benefits',
      'Premium directory placement',
      'Monthly social media features',
      'Newsletter spotlight (1x/year)',
      'Priority event sponsorship',
      'Ambassador program eligibility',
    ],
    paymentUrl: 'https://link.fastpaydirect.com/payment-link/698ca549888cc476363d0dd06',
  },
];

// Premium partnership tiers for higher investment
const premiumPartnerships = [
  {
    name: 'Murray Advocate',
    price: 1000,
    period: 'year',
    description: 'Support local business growth',
    color: 'from-amber-500 to-amber-600',
    icon: Heart,
    features: [
      'All standard membership benefits',
      'Recognition at Chamber events',
      'Logo on Chamber website',
      'Social media recognition',
      'Quarterly newsletter feature',
    ],
    paymentUrl: 'https://link.fastpaydirect.com/payment-link/698ca621658ec288bfef4220',
  },
  {
    name: 'Murray Champion',
    price: 2500,
    period: 'year',
    description: 'Champion Murray business community',
    color: 'from-purple-500 to-purple-600',
    popular: true,
    icon: Trophy,
    features: [
      'All Advocate benefits',
      'Premium logo placement',
      'Monthly social media features',
      'Event speaking opportunities',
      'Board meeting invitations',
      'VIP event access',
    ],
    paymentUrl: 'https://link.fastpaydirect.com/payment-link/698ca6690691e4706081ab24',
  },
  {
    name: 'Murray Premier Partner',
    price: 5000,
    period: 'year',
    description: 'Premier community partnership',
    color: 'from-orange-500 to-orange-600',
    icon: Star,
    features: [
      'All Champion benefits',
      'Top-tier logo placement',
      'Weekly social media features',
      'Exclusive networking events',
      'Custom partnership opportunities',
      'Premier event sponsorship',
    ],
    paymentUrl: 'https://link.fastpaydirect.com/payment-link/698ca68e8049648300e59b70',
  },
  {
    name: 'Murray Legacy Sponsor',
    price: 7500,
    period: 'year',
    description: 'Leave a lasting legacy in Murray',
    color: 'from-yellow-400 to-yellow-500',
    icon: Building2,
    features: [
      'All Premier Partner benefits',
      'Founding sponsor recognition',
      'Naming opportunities',
      'Executive roundtable access',
      'Custom marketing partnership',
      'Annual impact report feature',
      'Direct Chamber leadership access',
    ],
    paymentUrl: 'https://link.fastpaydirect.com/payment-link/698ca6c7c7c0a4dd028abb3e9e',
  },
];

const applicationFormUrl = 'https://api.leadconnectorhq.com/widget/form/pz2YBIOQrwGBRq1YFOi0?notrack=true';

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

      {/* New Business Complimentary Membership */}
      <section className="relative py-16 overflow-hidden">
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative glass-strong rounded-3xl p-8 md:p-12 overflow-hidden"
          >
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-green-500/20 to-emerald-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

            <div className="relative z-10 flex flex-col lg:flex-row items-center gap-8">
              {/* Icon and Badge */}
              <div className="text-center lg:text-left shrink-0">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/20 text-green-300 text-sm font-medium mb-4">
                  <Sparkles className="w-4 h-4" />
                  New Business Special
                </div>
                <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center shadow-2xl mx-auto lg:mx-0">
                  <Gift className="w-12 h-12 text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 text-center lg:text-left">
                <h2 className="text-2xl md:text-3xl font-bold text-white">
                  1 Year Complimentary Membership
                </h2>
                <p className="mt-3 text-white/70 max-w-2xl">
                  <span className="text-green-400 font-semibold">Brand new to Murray?</span> We want to welcome you!
                  New businesses in Murray receive a complimentary first year of Chamber membership.
                  After your free year, your membership will automatically continue at the rate matching your business size.
                </p>
                <div className="mt-4 flex flex-wrap gap-4 justify-center lg:justify-start text-sm">
                  <div className="flex items-center gap-2 text-white/60">
                    <Check className="w-4 h-4 text-green-400" />
                    <span>Full member benefits</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/60">
                    <Check className="w-4 h-4 text-green-400" />
                    <span>No commitment first year</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/60">
                    <Check className="w-4 h-4 text-green-400" />
                    <span>Auto-renews at your tier</span>
                  </div>
                </div>
              </div>

              {/* Price and CTA */}
              <div className="text-center shrink-0">
                <div className="mb-2">
                  <span className="text-5xl font-bold text-green-400">FREE</span>
                </div>
                <p className="text-white/50 text-sm mb-4">First year for new businesses</p>
                <Link href="/contact">
                  <button className="btn-glow bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500">
                    Apply Now
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Standard Membership Tiers */}
      <section className="relative py-16 overflow-hidden">
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-2 text-sm font-medium text-purple-300 bg-purple-500/20 rounded-full mb-4">
              Annual Memberships
            </span>
            <h2 className="text-3xl font-bold text-white">Choose Your Membership Level</h2>
            <p className="mt-4 text-white/60">Select the tier that best fits your business size.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {standardMemberships.map((tier, index) => (
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

                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${tier.color} mx-auto mb-4 flex items-center justify-center shadow-lg`}>
                  <tier.icon className="w-7 h-7 text-white" />
                </div>

                <h3 className="text-lg font-bold text-white text-center leading-tight min-h-[56px] flex items-center justify-center">{tier.name}</h3>
                <p className="mt-2 text-white/60 text-xs text-center">{tier.description}</p>

                <div className="mt-4 text-center">
                  <span className="text-4xl font-bold text-white">${tier.price}</span>
                  <span className="text-white/60">/{tier.period}</span>
                </div>

                <ul className="mt-6 space-y-2">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-400 shrink-0 mt-0.5" />
                      <span className="text-white/70 text-xs">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={(tier as any).paymentUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full"
                >
                  <button className={`mt-6 w-full ${tier.popular ? 'btn-glow' : 'btn-secondary'} text-sm`}>
                    Join Now
                  </button>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Partnership Tiers */}
      <section className="relative py-16 overflow-hidden">
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-2 text-sm font-medium text-orange-300 bg-orange-500/20 rounded-full mb-4">
              Premium Partnerships
            </span>
            <h2 className="text-3xl font-bold text-white">Invest in Murray&apos;s Future</h2>
            <p className="mt-4 text-white/60 max-w-2xl mx-auto">
              Make a greater impact in our community with premium partnership levels.
              Perfect for businesses looking to maximize visibility and community involvement.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {premiumPartnerships.map((tier, index) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`relative glass-card p-6 ${tier.popular ? 'ring-2 ring-orange-500' : ''}`}
              >
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-orange-500 text-white text-xs font-medium rounded-full">
                    Best Value
                  </div>
                )}

                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${tier.color} mx-auto mb-4 flex items-center justify-center shadow-lg`}>
                  <tier.icon className="w-7 h-7 text-white" />
                </div>

                <h3 className="text-lg font-bold text-white text-center">{tier.name}</h3>
                <p className="mt-2 text-white/60 text-xs text-center">{tier.description}</p>

                <div className="mt-4 text-center">
                  <span className="text-3xl font-bold text-white">${tier.price.toLocaleString()}</span>
                  {tier.name === 'Murray Legacy Sponsor' && <span className="text-white/60 text-sm">+</span>}
                  <span className="text-white/60">/{tier.period}</span>
                </div>

                <ul className="mt-6 space-y-2">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                      <span className="text-white/70 text-xs">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={(tier as any).paymentUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full"
                >
                  <button className={`mt-6 w-full ${tier.popular ? 'btn-glow' : 'btn-secondary'} text-sm`}>
                    Become a Partner
                  </button>
                </a>
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
              Have questions about membership? Contact us for a personalized consultation
              and find the perfect membership level for your business.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a href={applicationFormUrl} target="_blank" rel="noopener noreferrer">
                <button className="btn-glow">
                  Start Application
                  <ArrowRight className="w-5 h-5" />
                </button>
              </a>
              <a href="tel:801-263-2632">
                <button className="btn-secondary">Call (801) 263-2632</button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}
