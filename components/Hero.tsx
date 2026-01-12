'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Play } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import FadeIn from './animations/FadeIn';
import ScaleIn from './animations/ScaleIn';

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero/murray-downtown.jpg"
          alt="Murray Utah Downtown"
          fill
          className="object-cover"
          priority
          unoptimized
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/60 to-slate-900/90" />
        {/* Purple/Orange Accent Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-transparent to-orange-900/20" />
      </div>

      {/* Animated Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-purple-400/20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center pt-32 pb-20">
        {/* Badge */}
        <FadeIn direction="up">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-medium">
            <Sparkles className="w-4 h-4 text-orange-400" />
            Murray Area Chamber of Commerce
          </span>
        </FadeIn>

        {/* Headline */}
        <FadeIn direction="up" delay={0.1}>
          <h1 className="mt-8 text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight">
            <span className="bg-gradient-to-r from-purple-400 via-orange-400 to-purple-400 bg-clip-text text-transparent">
              Hub of Innovation
            </span>
            <br />
            <span className="text-white">& Business Growth</span>
          </h1>
        </FadeIn>

        {/* Subheadline */}
        <FadeIn direction="up" delay={0.2}>
          <p className="mt-6 text-lg sm:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Strengthening Murray&apos;s business economy by providing unparalleled resources,
            networking opportunities, and support for businesses of all sizes.
          </p>
        </FadeIn>

        {/* CTA Buttons */}
        <FadeIn direction="up" delay={0.3}>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/join">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-white bg-gradient-to-r from-orange-500 to-orange-600 shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 transition-all"
              >
                <span>Become a Member</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
            <Link href="/about">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-white bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all"
              >
                <Play className="w-5 h-5" />
                <span>Learn More</span>
              </motion.button>
            </Link>
          </div>
        </FadeIn>

        {/* Stats Row */}
        <FadeIn direction="up" delay={0.5}>
          <div className="mt-24 grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              { number: '500+', label: 'Member Businesses' },
              { number: '40+', label: 'Years Serving Murray' },
              { number: '100+', label: 'Annual Events' },
              { number: '$2M+', label: 'Economic Impact' },
            ].map((stat, index) => (
              <ScaleIn key={stat.label} delay={0.6 + index * 0.1}>
                <div className="glass-card p-6 sm:p-8 flex flex-col items-center justify-center">
                  <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-purple-400 to-orange-400 bg-clip-text text-transparent">
                    {stat.number}
                  </div>
                  <div className="text-white/60 text-sm mt-2">{stat.label}</div>
                </div>
              </ScaleIn>
            ))}
          </div>
        </FadeIn>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900 to-transparent" />

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2"
        >
          <motion.div
            animate={{ opacity: [1, 0, 1], y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-1.5 rounded-full bg-white/60"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
