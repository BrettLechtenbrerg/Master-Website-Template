'use client';

import { motion } from 'framer-motion';
import { Star, Users, Calendar, Award, ArrowRight, Linkedin } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import Footer from '@/components/Footer';
import Link from 'next/link';

const ambassadors = [
  { name: 'Marcus Thompson', company: 'Thompson Insurance', years: 5 },
  { name: 'Jennifer Lee', company: 'Lee Marketing Group', years: 3 },
  { name: 'Carlos Ramirez', company: 'Ramirez Auto Care', years: 4 },
  { name: 'Patricia Chen', company: 'Chen Consulting', years: 2 },
  { name: 'David Wilson', company: 'Wilson Plumbing', years: 6 },
  { name: 'Michelle Adams', company: 'Adams Photography', years: 3 },
  { name: 'Brian Foster', company: 'Foster IT Solutions', years: 4 },
  { name: 'Angela Martinez', company: 'Murray Dental Care', years: 2 },
  { name: 'Steven Kim', company: 'Kim Financial', years: 5 },
  { name: 'Laura Jackson', company: 'Jackson Realty', years: 3 },
  { name: 'Christopher Brown', company: 'Brown Legal', years: 4 },
  { name: 'Stephanie White', company: 'White Design Studio', years: 2 },
];

const benefits = [
  {
    icon: Users,
    title: 'Networking Priority',
    description: 'First access to networking events and VIP introductions to new members.',
  },
  {
    icon: Star,
    title: 'Recognition',
    description: 'Featured on our website, social media, and in chamber publications.',
  },
  {
    icon: Calendar,
    title: 'Exclusive Events',
    description: 'Ambassador-only gatherings and behind-the-scenes access to chamber activities.',
  },
  {
    icon: Award,
    title: 'Leadership Development',
    description: 'Training opportunities and pathways to board service.',
  },
];

const responsibilities = [
  'Attend monthly ambassador meetings',
  'Welcome new members and attend ribbon cuttings',
  'Represent the chamber at community events',
  'Mentor new businesses joining the chamber',
  'Participate in at least 2 chamber events per month',
  'Serve as a positive voice for the Murray business community',
];

export default function AmbassadorsPage() {
  return (
    <>
      <PageHeader
        badge="Ambassadors"
        title="Chamber Ambassadors"
        description="Our Ambassador program connects passionate business leaders who serve as the welcoming face of the Murray Area Chamber of Commerce."
        breadcrumbs={[
          { label: 'About', href: '/about' },
          { label: 'Chamber Ambassadors' },
        ]}
      />

      {/* About the Program */}
      <section className="relative py-16 overflow-hidden">
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <span className="inline-block px-4 py-2 text-sm font-medium text-orange-300 bg-orange-500/20 rounded-full mb-4">
                Join the Team
              </span>
              <h2 className="text-3xl font-bold text-white mb-6">
                Be the Face of Murray Business
              </h2>
              <p className="text-white/70 mb-6">
                Chamber Ambassadors are dedicated volunteers who serve as the welcoming committee for new members and represent the chamber at community events. They play a vital role in creating connections and fostering a vibrant business community.
              </p>
              <p className="text-white/70 mb-8">
                As an Ambassador, you&apos;ll expand your professional network, develop leadership skills, and make a meaningful impact on Murray&apos;s business landscape.
              </p>
              <Link href="/contact">
                <button className="btn-glow">
                  Apply to Be an Ambassador
                  <ArrowRight className="w-5 h-5" />
                </button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="glass-card p-8"
            >
              <h3 className="text-xl font-semibold text-white mb-6">Ambassador Benefits</h3>
              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit.title}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center shrink-0">
                      <benefit.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-medium text-white">{benefit.title}</h4>
                      <p className="text-white/60 text-sm">{benefit.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Responsibilities */}
      <section className="relative py-16 overflow-hidden">
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-card p-8 md:p-12"
          >
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-white">Ambassador Responsibilities</h2>
              <p className="mt-2 text-white/60">What we ask of our ambassadors</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {responsibilities.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-start gap-3 p-4 rounded-xl bg-white/5"
                >
                  <div className="w-6 h-6 rounded-full bg-gradient-to-r from-purple-500 to-orange-500 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-white text-xs font-bold">{index + 1}</span>
                  </div>
                  <span className="text-white/80 text-sm">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Current Ambassadors */}
      <section className="relative py-16 overflow-hidden">
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white">Meet Our Ambassadors</h2>
            <p className="mt-4 text-white/60">Dedicated volunteers making a difference in Murray.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
            {ambassadors.map((ambassador, index) => (
              <motion.div
                key={ambassador.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="glass-card p-6 text-center group"
              >
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-600 to-orange-500 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">
                    {ambassador.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="font-semibold text-white">{ambassador.name}</h3>
                <p className="text-white/50 text-sm">{ambassador.company}</p>
                <p className="text-xs text-purple-400 mt-2">Ambassador for {ambassador.years} years</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Apply CTA */}
      <section className="relative py-16 overflow-hidden">
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-strong rounded-3xl p-8 md:p-12 text-center"
          >
            <Star className="w-16 h-16 text-orange-400 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-white">Ready to Make an Impact?</h2>
            <p className="mt-4 text-white/60 max-w-2xl mx-auto">
              Chamber members in good standing can apply to join our Ambassador program. Gold and Platinum members receive priority consideration.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/contact">
                <button className="btn-glow">Apply Now</button>
              </Link>
              <Link href="/join">
                <button className="btn-secondary">Become a Member First</button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}
