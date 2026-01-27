'use client';

import { motion } from 'framer-motion';
import {
  Building2,
  Calendar,
  Users,
  Trophy,
  HandHeart,
  Briefcase,
  ArrowRight
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import FadeIn from './animations/FadeIn';
import StaggerChildren, { StaggerItem } from './animations/StaggerChildren';

const features = [
  {
    icon: Building2,
    title: 'Member Directory',
    description: 'Connect with over 500 local businesses. Find partners, suppliers, and customers right in Murray.',
    href: '/directory',
    color: 'purple',
    image: '/images/features/directory.jpg',
  },
  {
    icon: Calendar,
    title: 'Chamber Events',
    description: 'Networking luncheons, ribbon cuttings, and mixers that create meaningful business connections.',
    href: '/events/chamber',
    color: 'orange',
    image: '/images/features/events.jpg',
  },
  {
    icon: Users,
    title: 'Join the Chamber',
    description: 'Unlock exclusive benefits, visibility, and resources designed to accelerate your business growth.',
    href: '/join',
    color: 'purple',
    image: '/images/features/membership.jpg',
  },
  {
    icon: Trophy,
    title: 'Ribbon Cuttings',
    description: 'Celebrate your milestones with the community. Grand openings, renovations, and anniversaries.',
    href: '/ribbon-cutting',
    color: 'orange',
    image: '/images/features/ribbon-cutting.jpg',
  },
  {
    icon: HandHeart,
    title: 'Community Events',
    description: 'Stay connected with Murray\'s vibrant community calendar and local happenings.',
    href: '/events/community',
    color: 'purple',
    image: '/images/features/community.jpg',
  },
  {
    icon: Briefcase,
    title: 'Business Resources',
    description: 'Access tools, guides, and support to help your business thrive in today\'s market.',
    href: '/resources',
    color: 'orange',
    image: '/images/features/resources.jpg',
  },
];

export default function Features() {
  return (
    <section className="relative w-full py-16 sm:py-20 md:py-24 overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900/95 to-slate-900">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <FadeIn direction="up">
          <div className="text-center mb-16">
            <span className="text-orange-400 font-semibold uppercase tracking-wider text-sm">
              Why Choose Us
            </span>
            <h2 className="mt-4 text-4xl sm:text-5xl font-bold text-white">
              Everything Your Business Needs
            </h2>
            <p className="mt-4 text-lg text-white/60 max-w-2xl mx-auto">
              From networking to resources, we provide the foundation for your business success in the Murray area.
            </p>
          </div>
        </FadeIn>

        {/* Features Grid */}
        <StaggerChildren staggerDelay={0.1} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <StaggerItem key={feature.title}>
              <Link href={feature.href} className="block h-full">
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="glass-card overflow-hidden h-full group cursor-pointer"
                >
                  {/* Image Header */}
                  <div className="relative h-48 overflow-hidden">
                    {feature.image ? (
                      <Image
                        src={feature.image}
                        alt={feature.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        unoptimized
                      />
                    ) : (
                      <div className={`w-full h-full bg-gradient-to-br ${
                        feature.color === 'orange'
                          ? 'from-orange-600 to-orange-800'
                          : 'from-purple-600 to-purple-800'
                      } flex items-center justify-center`}>
                        <feature.icon className="w-16 h-16 text-white/80 group-hover:scale-110 transition-transform" />
                      </div>
                    )}
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                    {/* Icon Badge */}
                    <div className={`absolute bottom-4 left-4 w-12 h-12 rounded-xl flex items-center justify-center shadow-lg ${
                      feature.color === 'orange'
                        ? 'bg-gradient-to-br from-orange-500 to-orange-600'
                        : 'bg-gradient-to-br from-purple-500 to-purple-600'
                    }`}>
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-orange-400 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-white/60 leading-relaxed mb-4 text-sm">
                      {feature.description}
                    </p>
                    <div className="flex items-center gap-2 text-purple-400 group-hover:text-orange-400 transition-colors">
                      <span className="text-sm font-medium">Learn more</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
                    </div>
                  </div>
                </motion.div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerChildren>

        {/* CTA Banner with Background Image */}
        <FadeIn direction="up" delay={0.4}>
          <div className="mt-20 relative rounded-3xl overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
              <Image
                src="/images/features/cta-background.jpg"
                alt="Murray City"
                fill
                className="object-cover"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 via-slate-900/80 to-orange-900/90" />
            </div>

            <div className="relative z-10 p-8 md:p-12 lg:p-16">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
                <div className="max-w-2xl">
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
                    Ready to Grow Your Business?
                  </h3>
                  <p className="mt-4 text-lg text-white/70">
                    Join the Murray Area Chamber of Commerce today and unlock a world of opportunities.
                  </p>
                </div>
                <Link href="/join">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-white bg-gradient-to-r from-orange-500 to-orange-600 shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 transition-all whitespace-nowrap"
                  >
                    Get Started Today
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </Link>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
