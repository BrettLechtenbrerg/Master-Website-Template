'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Search, MapPin, Phone, Globe, Filter, Grid, List } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import Footer from '@/components/Footer';

// Sample business data - would come from API/database in production
const businesses = [
  {
    id: 1,
    name: 'Murray Tech Solutions',
    category: 'Technology',
    description: 'IT services and technology consulting for small businesses.',
    address: '123 Main St, Murray, UT',
    phone: '(801) 555-0101',
    website: 'murraytech.com',
  },
  {
    id: 2,
    name: 'Bloom Floral Design',
    category: 'Retail',
    description: 'Beautiful floral arrangements for all occasions.',
    address: '456 Fashion Blvd, Murray, UT',
    phone: '(801) 555-0102',
    website: 'bloomfloral.com',
  },
  {
    id: 3,
    name: 'Mitchell & Co. Accounting',
    category: 'Professional Services',
    description: 'Full-service accounting and tax preparation.',
    address: '789 Business Park Dr, Murray, UT',
    phone: '(801) 555-0103',
    website: 'mitchellcpa.com',
  },
  {
    id: 4,
    name: 'The Hive Murray',
    category: 'Food & Beverage',
    description: 'Craft cocktails and local cuisine in a vibrant atmosphere.',
    address: '321 5600 S, Murray, UT',
    phone: '(801) 555-0104',
    website: 'thehivemurray.com',
  },
  {
    id: 5,
    name: 'Torres Legal Group',
    category: 'Professional Services',
    description: 'Business law, contracts, and corporate counsel.',
    address: '555 State St, Murray, UT',
    phone: '(801) 555-0105',
    website: 'torreslegal.com',
  },
  {
    id: 6,
    name: 'Peak Fitness Murray',
    category: 'Health & Wellness',
    description: 'State-of-the-art gym with personal training services.',
    address: '999 Fitness Way, Murray, UT',
    phone: '(801) 555-0106',
    website: 'peakfitnessmurray.com',
  },
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
];

export default function DirectoryPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const filteredBusinesses = businesses.filter((business) => {
    const matchesSearch = business.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      business.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All Categories' || business.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <PageHeader
        badge="Business Resources"
        title="Member Directory"
        description="Connect with over 500 local businesses in the Murray area. Find partners, suppliers, and customers right in your community."
        breadcrumbs={[
          { label: 'Business Resources', href: '/resources' },
          { label: 'Member Directory' },
        ]}
      />

      <section className="relative py-16 overflow-hidden">
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          {/* Search and Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="glass-card p-6 mb-12"
          >
            <div className="flex flex-col lg:flex-row gap-4">
              {/* Search Input */}
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                <input
                  type="text"
                  placeholder="Search businesses..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="input-glass pl-12 w-full"
                />
              </div>

              {/* Category Filter */}
              <div className="relative">
                <Filter className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="input-glass select-glass pl-12 w-full lg:w-64"
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>

              {/* View Toggle */}
              <div className="flex gap-2">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-3 rounded-xl transition-colors ${viewMode === 'grid' ? 'bg-purple-500/30 text-white' : 'bg-white/5 text-white/60 hover:bg-white/10'}`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-3 rounded-xl transition-colors ${viewMode === 'list' ? 'bg-purple-500/30 text-white' : 'bg-white/5 text-white/60 hover:bg-white/10'}`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>

          {/* Results Count */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-white/60 mb-6"
          >
            Showing {filteredBusinesses.length} of {businesses.length} businesses
          </motion.p>

          {/* Business Grid/List */}
          <div className={viewMode === 'grid' ? 'grid md:grid-cols-2 lg:grid-cols-3 gap-8' : 'space-y-6'}>
            {filteredBusinesses.map((business, index) => (
              <motion.div
                key={business.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className={`glass-card p-6 group cursor-pointer ${viewMode === 'list' ? 'flex gap-6' : ''}`}
              >
                {/* Logo Placeholder */}
                <div className={`${viewMode === 'list' ? 'w-24 h-24 shrink-0' : 'w-full h-32 mb-4'} rounded-xl bg-white/10 flex items-center justify-center`}>
                  <span className="text-3xl font-bold text-white/30">{business.name.charAt(0)}</span>
                </div>

                <div className="flex-1">
                  {/* Category Badge */}
                  <span className="inline-block px-3 py-1 text-xs font-medium text-purple-300 bg-purple-500/20 rounded-full mb-3">
                    {business.category}
                  </span>

                  <h3 className="text-xl font-semibold text-white group-hover:text-purple-300 transition-colors">
                    {business.name}
                  </h3>

                  <p className="mt-2 text-white/60 text-sm line-clamp-2">
                    {business.description}
                  </p>

                  <div className="mt-4 space-y-2">
                    <div className="flex items-center gap-2 text-sm text-white/50">
                      <MapPin className="w-4 h-4 text-orange-400" />
                      {business.address}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-white/50">
                      <Phone className="w-4 h-4 text-purple-400" />
                      {business.phone}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-white/50">
                      <Globe className="w-4 h-4 text-orange-400" />
                      {business.website}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Load More */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-12 text-center"
          >
            <button className="btn-secondary">
              Load More Businesses
            </button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}
