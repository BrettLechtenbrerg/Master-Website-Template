'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Crown, Star, Award, Sparkles, Building2, ArrowRight, CheckCircle } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import Footer from '@/components/Footer';

// Sponsor tiers with prestigious styling
const sponsorTiers = [
  {
    name: 'Platinum',
    icon: Crown,
    color: 'from-slate-300 via-white to-slate-400',
    borderColor: 'border-slate-300/50',
    glowColor: 'shadow-slate-300/20',
    description: 'Our most distinguished partners',
  },
  {
    name: 'Gold',
    icon: Star,
    color: 'from-yellow-400 via-amber-300 to-yellow-500',
    borderColor: 'border-yellow-400/50',
    glowColor: 'shadow-yellow-400/20',
    description: 'Premier business leaders',
  },
  {
    name: 'Silver',
    icon: Award,
    color: 'from-gray-300 via-slate-200 to-gray-400',
    borderColor: 'border-gray-300/50',
    glowColor: 'shadow-gray-300/20',
    description: 'Valued community supporters',
  },
];

// Current sponsors - 6 placeholder spots ready for real sponsors
const currentSponsors = [
  {
    id: 1,
    name: 'Your Business Here',
    tier: 'Platinum',
    description: 'Become a Platinum Sponsor and gain premier visibility across all Chamber events and communications.',
    logo: null, // Will use MACC logo as placeholder
    website: null,
    isPlaceholder: true,
  },
  {
    id: 2,
    name: 'Your Business Here',
    tier: 'Platinum',
    description: 'Join our exclusive circle of Platinum sponsors and showcase your commitment to Murray\'s business community.',
    logo: null,
    website: null,
    isPlaceholder: true,
  },
  {
    id: 3,
    name: 'Your Business Here',
    tier: 'Gold',
    description: 'Gold sponsors receive prominent recognition at Chamber events and in our member communications.',
    logo: null,
    website: null,
    isPlaceholder: true,
  },
  {
    id: 4,
    name: 'Your Business Here',
    tier: 'Gold',
    description: 'Elevate your brand with Gold sponsor status and connect with hundreds of local business leaders.',
    logo: null,
    website: null,
    isPlaceholder: true,
  },
  {
    id: 5,
    name: 'Your Business Here',
    tier: 'Silver',
    description: 'Silver sponsors demonstrate their dedication to strengthening Murray\'s local economy.',
    logo: null,
    website: null,
    isPlaceholder: true,
  },
  {
    id: 6,
    name: 'Your Business Here',
    tier: 'Silver',
    description: 'Support the Chamber as a Silver sponsor and be recognized throughout our community.',
    logo: null,
    website: null,
    isPlaceholder: true,
  },
];

const sponsorBenefits = [
  'Premier logo placement on Chamber website',
  'Recognition at all Chamber events',
  'Featured in monthly newsletter',
  'Social media spotlight campaigns',
  'Exclusive networking opportunities',
  'Priority booth placement at events',
  'Speaking opportunities at luncheons',
  'Direct access to 500+ member businesses',
];

export default function SponsorsPage() {
  const getTierStyle = (tierName: string) => {
    return sponsorTiers.find(t => t.name === tierName) || sponsorTiers[2];
  };

  return (
    <>
      <PageHeader
        badge="Sponsors"
        title="Chamber Sponsors"
        description="Meet the distinguished businesses that power the Murray Area Chamber of Commerce. Our sponsors are the cornerstone of our community's economic vitality."
        breadcrumbs={[
          { label: 'Membership', href: '/join' },
          { label: 'Chamber Sponsors' },
        ]}
      />

      {/* Prestigious Introduction */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-transparent pointer-events-none" />
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-orange-500/20 border border-purple-500/30 mb-6">
              <Sparkles className="w-4 h-4 text-orange-400" />
              <span className="text-sm font-medium text-white/80">An Elite Partnership</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Supporting Murray&apos;s Business Excellence
            </h2>
            <p className="text-lg text-white/70">
              For over 75 years, the Murray Area Chamber of Commerce has been the catalyst for business
              growth and community prosperity. Our sponsors enjoy unparalleled visibility and the prestige
              of being recognized as leaders who invest in our collective success.
            </p>
          </motion.div>

          {/* Tier Legend */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {sponsorTiers.map((tier, index) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`glass-card p-6 text-center border ${tier.borderColor} hover:shadow-lg ${tier.glowColor} transition-all duration-300`}
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${tier.color} mx-auto mb-4 flex items-center justify-center shadow-lg`}>
                  <tier.icon className="w-8 h-8 text-purple-900" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{tier.name} Sponsors</h3>
                <p className="text-white/60 text-sm">{tier.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Sponsors Grid */}
      <section className="relative py-16 overflow-hidden">
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Our Distinguished Sponsors
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              These exceptional businesses have chosen to invest in Murray&apos;s future.
              Join them and become part of an elite group of community leaders.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentSponsors.map((sponsor, index) => {
              const tierStyle = getTierStyle(sponsor.tier);

              return (
                <motion.div
                  key={sponsor.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`glass-card p-8 border ${tierStyle.borderColor} hover:shadow-xl ${tierStyle.glowColor} transition-all duration-500 group relative overflow-hidden`}
                >
                  {/* Tier Badge */}
                  <div className={`absolute top-4 right-4 px-3 py-1 rounded-full bg-gradient-to-r ${tierStyle.color} shadow-md`}>
                    <span className="text-xs font-bold text-purple-900 uppercase tracking-wide">
                      {sponsor.tier}
                    </span>
                  </div>

                  {/* Logo Area */}
                  <div className="w-32 h-32 mx-auto mb-6 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center group-hover:border-orange-500/50 transition-colors overflow-hidden">
                    {sponsor.isPlaceholder ? (
                      <div className="text-center p-4">
                        <Building2 className="w-12 h-12 text-white/40 mx-auto mb-2" />
                        <span className="text-xs text-white/40">Your Logo Here</span>
                      </div>
                    ) : (
                      <Image
                        src={sponsor.logo || '/images/macc-logo.png'}
                        alt={sponsor.name}
                        width={120}
                        height={120}
                        className="object-contain p-2"
                      />
                    )}
                  </div>

                  {/* Sponsor Info */}
                  <h3 className="text-xl font-bold text-white text-center mb-3 group-hover:text-orange-300 transition-colors">
                    {sponsor.name}
                  </h3>
                  <p className="text-white/60 text-sm text-center leading-relaxed">
                    {sponsor.description}
                  </p>

                  {/* CTA for Placeholder */}
                  {sponsor.isPlaceholder && (
                    <Link href="/contact" className="block mt-6">
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-purple-600 to-purple-700 hover:from-orange-500 hover:to-orange-600 text-white font-medium text-sm transition-all duration-300 flex items-center justify-center gap-2"
                      >
                        Claim This Spot
                        <ArrowRight className="w-4 h-4" />
                      </motion.button>
                    </Link>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-purple-900/30 to-transparent pointer-events-none" />
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/20 border border-orange-500/30 mb-6">
                <Crown className="w-4 h-4 text-orange-400" />
                <span className="text-sm font-medium text-orange-300">Exclusive Benefits</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Why Become a Chamber Sponsor?
              </h2>
              <p className="text-lg text-white/70 mb-8">
                Chamber sponsors receive unmatched visibility and recognition throughout Murray&apos;s
                thriving business community. Your investment directly supports economic development,
                networking events, and programs that benefit all local businesses.
              </p>
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-glow"
                >
                  Become a Sponsor
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              className="glass-card p-8"
            >
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                <Star className="w-6 h-6 text-orange-400" />
                Sponsor Benefits Include
              </h3>
              <ul className="space-y-4">
                {sponsorBenefits.map((benefit, index) => (
                  <motion.li
                    key={benefit}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.05 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
                    <span className="text-white/80">{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="relative z-10 w-full max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-card p-12 border border-orange-500/30"
          >
            <Crown className="w-16 h-16 text-orange-400 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Elevate Your Brand?
            </h2>
            <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto">
              Join Murray&apos;s most influential businesses as a Chamber sponsor.
              Limited sponsorship opportunities available.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-glow"
                >
                  Contact Us Today
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>
              <Link href="/join">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-secondary"
                >
                  Learn About Membership
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}
