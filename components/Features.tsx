'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
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

const features = [
  {
    icon: Building2,
    title: 'Member Directory',
    description: 'Connect with over 500 local businesses. Find partners, suppliers, and customers right in Murray.',
    href: '/members',
    color: 'purple',
  },
  {
    icon: Calendar,
    title: 'Chamber Events',
    description: 'Networking luncheons, ribbon cuttings, and mixers that create meaningful business connections.',
    href: '/events',
    color: 'orange',
  },
  {
    icon: Users,
    title: 'Join the Chamber',
    description: 'Unlock exclusive benefits, visibility, and resources designed to accelerate your business growth.',
    href: '/join',
    color: 'purple',
  },
  {
    icon: Trophy,
    title: 'Ribbon Cuttings',
    description: 'Celebrate your milestones with the community. Grand openings, renovations, and anniversaries.',
    href: '/ribbon-cutting',
    color: 'orange',
  },
  {
    icon: HandHeart,
    title: 'Community Events',
    description: 'Stay connected with Murray\'s vibrant community calendar and local happenings.',
    href: '/events/community',
    color: 'purple',
  },
  {
    icon: Briefcase,
    title: 'Business Resources',
    description: 'Access tools, guides, and support to help your business thrive in today\'s market.',
    href: '/resources',
    color: 'orange',
  },
];

export default function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="relative w-full py-12 sm:py-16 md:py-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 mesh-gradient opacity-50" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-orange-400 font-semibold uppercase tracking-wider text-sm">
            Why Choose Us
          </span>
          <h2 className="mt-4 text-4xl sm:text-5xl font-bold text-white">
            Everything Your Business Needs
          </h2>
          <p className="mt-4 text-lg text-white/60 max-w-2xl mx-auto">
            From networking to resources, we provide the foundation for your business success in the Murray area.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link href={feature.href}>
                <div className="glass-card p-10 h-full group cursor-pointer">
                  <div className={`feature-icon ${feature.color === 'orange' ? 'orange' : ''}`}>
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-white/60 leading-relaxed mb-4">
                    {feature.description}
                  </p>
                  <div className="flex items-center gap-2 text-purple-400 group-hover:text-orange-400 transition-colors">
                    <span className="text-sm font-medium">Learn more</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 sm:mt-16"
        >
          <div className="glass-strong rounded-3xl p-8 md:p-12 lg:p-16 border border-white/10">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
              <div className="max-w-2xl">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
                  Ready to Grow Your Business?
                </h3>
                <p className="mt-4 text-lg text-white/60">
                  Join the Murray Area Chamber of Commerce today and unlock a world of opportunities.
                </p>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-glow whitespace-nowrap shrink-0"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
