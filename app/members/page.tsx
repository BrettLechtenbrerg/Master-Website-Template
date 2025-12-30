'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Search, MapPin, Phone, Globe, Filter, ArrowRight } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import Footer from '@/components/Footer';
import Link from 'next/link';

// Featured member businesses
const featuredMembers = [
  {
    id: 1,
    name: 'Murray Tech Solutions',
    category: 'Technology',
    description: 'Full-service IT solutions and managed services for businesses of all sizes.',
    memberSince: 2018,
    featured: true,
  },
  {
    id: 2,
    name: 'Bloom Floral Design',
    category: 'Retail',
    description: 'Award-winning floral arrangements for weddings, events, and everyday moments.',
    memberSince: 2015,
    featured: true,
  },
  {
    id: 3,
    name: 'Torres Legal Group',
    category: 'Professional Services',
    description: 'Business law expertise with a personal touch.',
    memberSince: 2012,
    featured: true,
  },
];

const membershipTiers = [
  { name: 'Bronze', count: 250, color: 'from-amber-700 to-amber-800' },
  { name: 'Silver', count: 150, color: 'from-gray-400 to-gray-500' },
  { name: 'Gold', count: 75, color: 'from-yellow-400 to-yellow-500' },
  { name: 'Platinum', count: 25, color: 'from-purple-400 to-purple-500' },
];

const categories = [
  'All Categories',
  'Technology',
  'Retail',
  'Professional Services',
  'Food & Beverage',
  'Health & Wellness',
  'Construction',
  'Real Estate',
  'Automotive',
  'Financial Services',
  'Manufacturing',
];

export default function MembersPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');

  return (
    <>
      <PageHeader
        badge="Membership"
        title="Member Directory"
        description="Explore our network of 500+ member businesses. Find the products, services, and partners you need right here in Murray."
        breadcrumbs={[
          { label: 'Membership', href: '/join' },
          { label: 'Member Directory' },
        ]}
      />

      {/* Stats Bar */}
      <section className="relative py-8 overflow-hidden">
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {membershipTiers.map((tier, index) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-6 text-center"
              >
                <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${tier.color} mx-auto mb-3 flex items-center justify-center`}>
                  <span className="text-white font-bold">{tier.count}</span>
                </div>
                <span className="text-white/60 text-sm">{tier.name} Members</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Search Section */}
      <section className="relative py-8 overflow-hidden">
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-card p-6"
          >
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                <input
                  type="text"
                  placeholder="Search members by name or keyword..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="input-glass pl-12 w-full"
                />
              </div>
              <div className="relative lg:w-64">
                <Filter className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="input-glass select-glass pl-12 w-full"
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>
              <button className="btn-primary shrink-0">
                <Search className="w-5 h-5" />
                Search
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Members */}
      <section className="relative py-16 overflow-hidden">
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-between mb-8"
          >
            <h2 className="text-2xl font-bold text-white">Featured Members</h2>
            <Link href="/directory" className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors">
              View All
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-6 group cursor-pointer"
              >
                <div className="w-full h-32 rounded-xl bg-white/10 flex items-center justify-center mb-4">
                  <span className="text-4xl font-bold text-white/30">{member.name.charAt(0)}</span>
                </div>
                <span className="inline-block px-3 py-1 text-xs font-medium text-purple-300 bg-purple-500/20 rounded-full mb-3">
                  {member.category}
                </span>
                <h3 className="text-xl font-semibold text-white group-hover:text-purple-300 transition-colors">
                  {member.name}
                </h3>
                <p className="mt-2 text-white/60 text-sm">{member.description}</p>
                <p className="mt-4 text-xs text-white/40">Member since {member.memberSince}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join CTA */}
      <section className="relative py-16 overflow-hidden">
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-strong rounded-3xl p-8 md:p-12 lg:p-16 text-center"
          >
            <h2 className="text-3xl font-bold text-white">Want to Be Listed?</h2>
            <p className="mt-4 text-white/60 max-w-2xl mx-auto">
              Join the Murray Area Chamber of Commerce and get your business featured in our member directory, plus access to exclusive benefits and networking opportunities.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/join">
                <button className="btn-glow">Join the Chamber</button>
              </Link>
              <Link href="/deals">
                <button className="btn-secondary">View Member Deals</button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}
