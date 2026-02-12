'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Repeat, CalendarDays, Trophy, GraduationCap } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import FadeIn from './animations/FadeIn';
import StaggerChildren, { StaggerItem } from './animations/StaggerChildren';
import NewsletterSignup from './NewsletterSignup';

// Event categories matching the chamber events page
const eventCategories = [
  {
    id: 'weekly',
    title: 'Weekly Events',
    subtitle: 'The Referral Community',
    description: 'Join Murray\'s premier weekly networking group every Thursday at The Murray Break Sports Grill. Connect with local business owners and grow your business through meaningful connections.',
    icon: Repeat,
    color: 'from-orange-500 to-orange-600',
    borderColor: 'border-orange-500/30',
    schedule: 'Every Thursday',
    time: '11:30 AM - 1:00 PM',
    image: '/images/events/networking-lunch-1.png',
    href: '/events/weekly',
  },
  {
    id: 'monthly',
    title: 'Monthly Events',
    subtitle: 'Women in Business',
    description: 'Empowering women entrepreneurs with monthly networking, education, and support. Join fellow business women for inspiring discussions and valuable connections.',
    icon: CalendarDays,
    color: 'from-purple-500 to-pink-500',
    borderColor: 'border-pink-500/30',
    schedule: '3rd Wednesday',
    time: '4 pm to 6 pm',
    image: '/images/events/mixer.jpg',
    href: '/events/monthly',
  },
  {
    id: 'annual',
    title: 'Annual Events',
    subtitle: 'Signature Celebrations',
    description: 'Experience Murray\'s most anticipated business events including the Taste of Murray, Annual Golf Tournament, and the magical Magic Over Murray Balloon Festival.',
    icon: Trophy,
    color: 'from-purple-600 to-orange-500',
    borderColor: 'border-purple-500/30',
    schedule: 'Throughout the Year',
    time: 'Various Times',
    image: '/images/events/taste-of-murray.png',
    href: '/events/annual',
  },
  {
    id: 'professional-development',
    title: 'Professional Development',
    subtitle: 'Professional Development',
    description: 'Elevate your business skills with bi-monthly training sessions led by Brett Lechtenberg and Manny Torres. Master AI, marketing automation, and business growth strategies.',
    icon: GraduationCap,
    color: 'from-purple-600 to-purple-800',
    borderColor: 'border-purple-500/30',
    schedule: 'Bi-Monthly',
    time: 'Various Times',
    image: '/images/events/workshop.jpg',
    href: '/events/professional-development',
  },
];

export default function Events() {
  return (
    <section className="relative w-full py-16 sm:py-20 md:py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-slate-900/95" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <FadeIn direction="up">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
            <div>
              <span className="text-orange-400 font-semibold uppercase tracking-wider text-sm">
                Get Involved
              </span>
              <h2 className="mt-4 text-4xl sm:text-5xl font-bold text-white">
                Chamber Events
              </h2>
              <p className="mt-4 text-lg text-white/60 max-w-xl">
                Connect, learn, and grow with events designed to help your business thrive in Murray.
              </p>
            </div>
            <Link href="/events/chamber">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-white bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all"
              >
                View All Events
                <Calendar className="w-5 h-5" />
              </motion.button>
            </Link>
          </div>
        </FadeIn>

        {/* Event Categories Grid */}
        <StaggerChildren staggerDelay={0.1} className="grid md:grid-cols-2 gap-8">
          {eventCategories.map((category) => (
            <StaggerItem key={category.id}>
              <Link href={category.href} className="block h-full">
                <motion.div
                  whileHover={{ y: -5 }}
                  className={`glass-card overflow-hidden group cursor-pointer h-full border ${category.borderColor} hover:border-opacity-70 transition-all`}
                >
                  {/* Image Header */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={category.image}
                      alt={category.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />

                    {/* Icon Badge */}
                    <div className={`absolute bottom-4 left-4 w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center shadow-lg`}>
                      <category.icon className="w-6 h-6 text-white" />
                    </div>

                    {/* Subtitle Badge */}
                    <div className={`absolute top-4 right-4 px-3 py-1 rounded-full bg-gradient-to-r ${category.color} shadow-lg`}>
                      <span className="text-white font-bold text-xs">{category.subtitle}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white group-hover:text-orange-300 transition-colors">
                      {category.title}
                    </h3>

                    <p className="mt-2 text-white/60 text-sm line-clamp-2">
                      {category.description}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-4 text-sm text-white/60">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-4 h-4 text-purple-400" />
                        {category.schedule}
                      </div>
                    </div>

                    <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between">
                      <span className="text-sm text-white/40">Open to all members</span>
                      <div className="flex items-center gap-2 text-purple-400 group-hover:text-orange-400 transition-colors">
                        <span className="text-sm font-medium">Learn More</span>
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerChildren>

        {/* Newsletter CTA with Background Image */}
        <FadeIn direction="up" delay={0.4}>
          <div className="mt-20 relative rounded-3xl overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
              <Image
                src="/images/events/newsletter-bg.jpg"
                alt="Murray Events"
                fill
                className="object-cover"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/90 to-slate-900/95" />
            </div>

            <div className="relative z-10 p-8 md:p-12 lg:p-16 text-center">
              <Calendar className="w-16 h-16 text-purple-400 mx-auto mb-6" />
              <h3 className="text-2xl md:text-3xl font-bold text-white">
                Never Miss an Event
              </h3>
              <p className="mt-4 text-lg text-white/60 max-w-lg mx-auto">
                Subscribe to our newsletter and get event updates, business tips, and community news delivered to your inbox.
              </p>

              <div className="mt-8 max-w-md mx-auto">
                <NewsletterSignup variant="inline" />
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
