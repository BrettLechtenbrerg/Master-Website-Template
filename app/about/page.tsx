'use client';

import { motion } from 'framer-motion';
import { Building2, Users, Calendar, Trophy, Heart, Target, ArrowRight } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import Footer from '@/components/Footer';
import Link from 'next/link';

const milestones = [
  { year: '1948', title: 'Chamber Founded', description: 'The Murray Area Chamber of Commerce was established to facilitate meaningful connections among business owners and serve as a resource for our community.' },
  { year: '1970s', title: 'Community Growth', description: 'Expanded services to support Murray\'s growing business community during a period of rapid development.' },
  { year: '1998', title: '50 Year Anniversary', description: 'Celebrated half a century of serving Murray businesses and strengthening the local economy.' },
  { year: '2010s', title: '500+ Members', description: 'Reached over 500 member businesses, reflecting the Chamber\'s vital role in the community.' },
  { year: '2020', title: 'Digital Transformation', description: 'Launched virtual events and online member resources to adapt to changing times.' },
  { year: '2023', title: '75 Years Strong', description: 'Celebrating 75 years of empowering local businesses and fostering economic growth in Murray.' },
];

const values = [
  { icon: Users, title: 'Community', description: 'Building strong connections between businesses and residents.' },
  { icon: Target, title: 'Growth', description: 'Helping businesses thrive and expand in Murray.' },
  { icon: Heart, title: 'Support', description: 'Providing resources and advocacy for our members.' },
  { icon: Trophy, title: 'Excellence', description: 'Recognizing and celebrating business achievements.' },
];

const stats = [
  { value: '500+', label: 'Member Businesses' },
  { value: '75+', label: 'Years of Service' },
  { value: '100+', label: 'Annual Events' },
  { value: '$2M+', label: 'Member Savings' },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        badge="About"
        title="About the Chamber"
        description="Founded in 1948, the Murray Area Chamber of Commerce has been the voice of business in Murray, Utah for over 75 years. Learn about our mission, history, and commitment to our community."
        breadcrumbs={[
          { label: 'About', href: '/about' },
          { label: 'About the Chamber' },
        ]}
      />

      {/* Mission Section */}
      <section className="relative py-16 overflow-hidden">
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <span className="inline-block px-4 py-2 text-sm font-medium text-purple-300 bg-purple-500/20 rounded-full mb-4">
                Our Mission
              </span>
              <h2 className="text-3xl font-bold text-white mb-6">
                Empowering Murray Businesses to Thrive
              </h2>
              <p className="text-white/70 mb-6">
                Our mission is to foster economic growth and prosperity in our community by empowering local businesses, advocating for their interests, and facilitating meaningful connections among business owners, government agencies, and other members.
              </p>
              <p className="text-white/70 mb-8">
                We strive to create a vibrant and inclusive business ecosystem that promotes innovation, collaboration, and sustainability while supporting the long-term success of our members and contributing to the overall well-being of our community.
              </p>
              <Link href="/join">
                <button className="btn-glow">
                  Join Our Mission
                  <ArrowRight className="w-5 h-5" />
                </button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="glass-card p-8"
            >
              <div className="grid grid-cols-2 gap-8">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="text-center p-4"
                  >
                    <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-orange-400">
                      {stat.value}
                    </div>
                    <div className="text-white/60 text-sm mt-2">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="relative py-16 overflow-hidden">
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white">Our Core Values</h2>
            <p className="mt-4 text-white/60">The principles that guide everything we do.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-6 text-center"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-600 to-purple-700 mx-auto mb-4 flex items-center justify-center shadow-lg">
                  <value.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white">{value.title}</h3>
                <p className="mt-2 text-white/60 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="relative py-16 overflow-hidden">
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white">Our History</h2>
            <p className="mt-4 text-white/60">Serving Murray businesses since 1948.</p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500 via-orange-500 to-purple-500" />

            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative flex items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'} pl-12 md:pl-0`}>
                    <div className="glass-card p-6">
                      <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-orange-400">
                        {milestone.year}
                      </span>
                      <h3 className="text-lg font-semibold text-white mt-2">{milestone.title}</h3>
                      <p className="text-white/60 text-sm mt-2">{milestone.description}</p>
                    </div>
                  </div>

                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-purple-500 to-orange-500 ring-4 ring-[#0a0a1a]" />

                  <div className="flex-1 hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team CTA */}
      <section className="relative py-16 overflow-hidden">
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-strong rounded-3xl p-8 md:p-12 lg:p-16 text-center"
          >
            <h2 className="text-3xl font-bold text-white">Meet Our Team</h2>
            <p className="mt-4 text-white/60 max-w-2xl mx-auto">
              Get to know the dedicated board members, ambassadors, and staff who work to support our business community.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/board">
                <button className="btn-glow">Board of Directors</button>
              </Link>
              <Link href="/ambassadors">
                <button className="btn-secondary">Ambassadors</button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}
