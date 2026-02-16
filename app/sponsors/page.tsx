'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Crown, Star, Award, Sparkles, Building2, ArrowRight, CheckCircle } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import Footer from '@/components/Footer';
import sponsorsContent from '@/content/sponsors.json';

// Sponsor tiers with prestigious styling
const tierStyles = {
  Platinum: {
    icon: Crown,
    color: 'from-slate-300 via-white to-slate-400',
    borderColor: 'border-slate-300/50',
    glowColor: 'shadow-slate-300/20',
  },
  Gold: {
    icon: Star,
    color: 'from-yellow-400 via-amber-300 to-yellow-500',
    borderColor: 'border-yellow-400/50',
    glowColor: 'shadow-yellow-400/20',
  },
  Silver: {
    icon: Award,
    color: 'from-gray-300 via-slate-200 to-gray-400',
    borderColor: 'border-gray-300/50',
    glowColor: 'shadow-gray-300/20',
  },
};

interface Sponsor {
  name: string;
  tier: string;
  description: string;
  logo?: string;
  website?: string;
  isPlaceholder?: boolean;
}

export default function SponsorsPage() {
  const getTierStyle = (tierName: string) => {
    return tierStyles[tierName as keyof typeof tierStyles] || tierStyles.Silver;
  };

  const sponsors: Sponsor[] = sponsorsContent.sponsors;

  return (
    <>
      <PageHeader
        badge="Sponsors"
        title={sponsorsContent.hero.headline}
        description={sponsorsContent.hero.subheadline}
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
              <span className="text-sm font-medium text-white/80">{sponsorsContent.intro.badge}</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              {sponsorsContent.intro.title}
            </h2>
            <p className="text-lg text-white/70">
              {sponsorsContent.intro.description}
            </p>
          </motion.div>

          {/* Tier Legend */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {sponsorsContent.tiers.map((tier, index) => {
              const style = getTierStyle(tier.name);
              const TierIcon = style.icon;
              return (
                <motion.div
                  key={tier.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`glass-card p-6 text-center border ${style.borderColor} hover:shadow-lg ${style.glowColor} transition-all duration-300`}
                >
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${style.color} mx-auto mb-4 flex items-center justify-center shadow-lg`}>
                    <TierIcon className="w-8 h-8 text-purple-900" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{tier.name} Sponsors</h3>
                  <p className="text-white/60 text-sm">{tier.description}</p>
                </motion.div>
              );
            })}
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
            {sponsors.map((sponsor, index) => {
              const tierStyle = getTierStyle(sponsor.tier);

              return (
                <motion.div
                  key={`sponsor-${index}`}
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
                    {sponsor.logo && !sponsor.isPlaceholder ? (
                      <Image
                        src={sponsor.logo}
                        alt={sponsor.name}
                        width={120}
                        height={120}
                        className="object-contain p-2"
                        unoptimized
                      />
                    ) : (
                      <div className="text-center p-4">
                        <Building2 className="w-12 h-12 text-white/40 mx-auto mb-2" />
                        <span className="text-xs text-white/40">Your Logo Here</span>
                      </div>
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
                {sponsorsContent.benefits.map((benefit, index) => (
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
              {sponsorsContent.cta.headline}
            </h2>
            <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto">
              {sponsorsContent.cta.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={sponsorsContent.cta.buttonLink}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-glow"
                >
                  {sponsorsContent.cta.buttonText}
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>
              <Link href={sponsorsContent.cta.secondaryButtonLink}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-secondary"
                >
                  {sponsorsContent.cta.secondaryButtonText}
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
