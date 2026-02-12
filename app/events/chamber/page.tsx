'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import {
  Calendar,
  Clock,
  MapPin,
  ArrowRight,
  Repeat,
  CalendarDays,
  Trophy,
  GraduationCap,
  Users,
  Sparkles,
  Star
} from 'lucide-react';
import PageHeader from '@/components/PageHeader';

const eventCategories = [
  {
    id: 'weekly',
    title: 'Weekly Events',
    subtitle: 'The Referral Community',
    description: 'Join Murray\'s premier weekly networking group every Thursday at The Break Sports Grill. Connect with local business owners, share referrals, and grow your business through meaningful connections.',
    icon: Repeat,
    color: 'from-orange-500 to-orange-600',
    borderColor: 'border-orange-500/30',
    hoverColor: 'hover:border-orange-500/50',
    schedule: 'Every Thursday',
    time: '11:30 AM - 1:00 PM',
    location: 'The Murray Break Sports Grill',
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
    hoverColor: 'hover:border-pink-500/50',
    schedule: '3rd Wednesday of Every Month',
    time: '4 pm to 6 pm',
    location: 'Murray Chamber Office',
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
    hoverColor: 'hover:border-purple-500/50',
    schedule: 'Throughout the Year',
    time: 'Various Times',
    location: 'Multiple Venues',
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
    hoverColor: 'hover:border-purple-500/50',
    schedule: 'Bi-Monthly',
    time: 'Various Times',
    location: 'Murray Chamber Office & Online',
    image: '/images/events/workshop.jpg',
    href: '/events/professional-development',
  },
];

const highlights = [
  { icon: Users, title: 'Networking', description: 'Build valuable relationships with local business owners' },
  { icon: GraduationCap, title: 'Education', description: 'Learn new skills and strategies from expert speakers' },
  { icon: Star, title: 'Community', description: 'Be part of Murray\'s thriving business community' },
  { icon: Sparkles, title: 'Growth', description: 'Discover opportunities to grow your business' },
];

export default function ChamberEventsPage() {
  return (
    <>
      <PageHeader
        badge="Events"
        title="Chamber Events"
        description="Connect, learn, and grow with the Murray Area Chamber of Commerce. From weekly networking to signature annual celebrations, we have events designed to help your business thrive."
        breadcrumbs={[
          { label: 'Events' },
        ]}
      />

      {/* Event Categories Overview */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-transparent pointer-events-none" />
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white">Explore Our Events</h2>
            <p className="mt-4 text-white/60 max-w-2xl mx-auto">
              The Murray Chamber hosts a variety of events throughout the year. Find the perfect opportunity to connect with your community.
            </p>
          </motion.div>

          <div className="space-y-12">
            {eventCategories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`glass-card overflow-hidden ${category.borderColor} ${category.hoverColor} transition-all group`}
              >
                <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
                  {/* Image */}
                  <div className={`relative h-64 lg:h-auto min-h-[300px] overflow-hidden ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <Image
                      src={category.image}
                      alt={category.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-${index % 2 === 1 ? 'l' : 'r'} from-slate-900/80 via-slate-900/40 to-transparent`} />
                    {/* Badge */}
                    <div className={`absolute top-4 ${index % 2 === 1 ? 'left-4' : 'right-4'} px-4 py-2 rounded-full bg-gradient-to-r ${category.color} shadow-lg`}>
                      <span className="text-white font-bold text-sm">{category.subtitle}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`p-8 lg:p-10 flex flex-col justify-center ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center shadow-lg`}>
                        <category.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                    </div>

                    <p className="text-white/70 mb-6">{category.description}</p>

                    {/* Event Details */}
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center gap-3 text-sm">
                        <Calendar className="w-4 h-4 text-purple-400" />
                        <span className="text-white/80">{category.schedule}</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm">
                        <Clock className="w-4 h-4 text-orange-400" />
                        <span className="text-white/80">{category.time}</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm">
                        <MapPin className="w-4 h-4 text-green-400" />
                        <span className="text-white/80">{category.location}</span>
                      </div>
                    </div>

                    <Link href={category.href}>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="btn-glow"
                      >
                        Learn More
                        <ArrowRight className="w-5 h-5" />
                      </motion.button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Attend Section */}
      <section className="relative py-16 overflow-hidden">
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Why Attend Chamber Events?
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Every event is an opportunity to strengthen your business and your community.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-6 text-center hover:border-purple-500/50 transition-all"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-600 to-orange-500 mx-auto mb-4 flex items-center justify-center">
                  <highlight.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{highlight.title}</h3>
                <p className="text-white/60 text-sm">{highlight.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-purple-900/30 to-transparent pointer-events-none" />
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Community Calendar */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="glass-card p-8 border border-purple-500/30"
            >
              <Calendar className="w-12 h-12 text-purple-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Community Calendar</h3>
              <p className="text-white/70 mb-6">
                View all community events happening in Murray. From festivals to city events, stay connected with what's happening.
              </p>
              <Link href="/events/community">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-secondary w-full"
                >
                  View Community Calendar
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </Link>
            </motion.div>

            {/* Host an Event */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="glass-card p-8 border border-orange-500/30"
            >
              <Sparkles className="w-12 h-12 text-orange-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Host a Ribbon Cutting</h3>
              <p className="text-white/70 mb-6">
                Celebrate your business milestone with a Chamber ribbon cutting ceremony. We'll help you make it memorable!
              </p>
              <Link href="/ribbon-cutting">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-secondary w-full"
                >
                  Request Ribbon Cutting
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 overflow-hidden">
        <div className="relative z-10 w-full max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-card p-12 border border-purple-500/30"
          >
            <Star className="w-16 h-16 text-purple-400 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Get Involved?
            </h2>
            <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto">
              Join the Murray Area Chamber of Commerce and get access to all our networking events, professional development, and community celebrations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/join">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-glow"
                >
                  Become a Member
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-secondary"
                >
                  Contact Us
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </>
  );
}
