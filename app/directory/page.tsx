'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Search, MapPin, Phone, Globe, Filter, Grid, List, Mail, Star, Building2, Loader2 } from 'lucide-react';
import Image from 'next/image';
import PageHeader from '@/components/PageHeader';
import Footer from '@/components/Footer';
import FadeIn from '@/components/animations/FadeIn';
import { supabase } from '@/lib/supabase';

// Business type definition
interface Business {
  id: string;
  name: string;
  category: string;
  address: string;
  phone?: string | null;
  website?: string | null;
  email?: string | null;
  image_url?: string | null;
  tier: 'sponsor' | 'ambassador' | 'member';
}

// Tier display names and colors
const tierInfo = {
  sponsor: { label: 'Sponsor', color: 'from-orange-500 to-orange-600', textColor: 'text-orange-300', bgColor: 'bg-orange-500/20' },
  ambassador: { label: 'Ambassador', color: 'from-purple-500 to-purple-600', textColor: 'text-purple-300', bgColor: 'bg-purple-500/20' },
  member: { label: 'Member', color: 'from-slate-500 to-slate-600', textColor: 'text-white/70', bgColor: 'bg-white/10' },
};

export default function DirectoryPage() {
  const [businesses, setBusinesses] = useState<Business[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedTier, setSelectedTier] = useState<'all' | 'sponsor' | 'ambassador' | 'member'>('all');

  useEffect(() => {
    async function fetchBusinesses() {
      setLoading(true);
      const { data, error } = await supabase
        .from('members')
        .select('*')
        .eq('is_active', true)
        .order('name', { ascending: true });

      if (error) {
        console.error('Error fetching businesses:', error);
      } else {
        setBusinesses(data || []);
      }
      setLoading(false);
    }

    fetchBusinesses();
  }, []);

  // Get unique categories from current businesses
  const allCategories = ['All Categories', ...Array.from(new Set(businesses.map(b => b.category))).sort()];

  const filteredBusinesses = businesses.filter((business) => {
    const matchesSearch = business.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      business.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All Categories' || business.category === selectedCategory;
    const matchesTier = selectedTier === 'all' || business.tier === selectedTier;
    return matchesSearch && matchesCategory && matchesTier;
  });

  // Sort: sponsors first, then ambassadors, then members
  const sortedBusinesses = [...filteredBusinesses].sort((a, b) => {
    const tierOrder = { sponsor: 0, ambassador: 1, member: 2 };
    return tierOrder[a.tier] - tierOrder[b.tier];
  });

  return (
    <>
      <PageHeader
        badge="Business Resources"
        title="Member Directory"
        description="Connect with over 100 local businesses in the Murray area. Find partners, suppliers, and customers right in your community."
        breadcrumbs={[
          { label: 'Business Resources', href: '/resources' },
          { label: 'Member Directory' },
        ]}
      />

      <section className="relative py-16 overflow-hidden min-h-screen">
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          {/* Search and Filters */}
          <FadeIn direction="up">
            <div className="glass-card p-6 mb-8">
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
                    {allCategories.map((category) => (
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

              {/* Tier Filter */}
              <div className="flex flex-wrap gap-2 mt-4">
                {(['all', 'sponsor', 'ambassador', 'member'] as const).map((tier) => (
                  <button
                    key={tier}
                    onClick={() => setSelectedTier(tier)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${selectedTier === tier
                      ? tier === 'all' ? 'bg-white/20 text-white' : `${tierInfo[tier as keyof typeof tierInfo]?.bgColor} ${tierInfo[tier as keyof typeof tierInfo]?.textColor}`
                      : 'bg-white/5 text-white/60 hover:bg-white/10'
                      }`}
                  >
                    {tier === 'all' ? 'All Members' : tierInfo[tier]?.label}
                    {tier !== 'all' && (
                      <span className="ml-2 text-xs">
                        ({businesses.filter(b => b.tier === tier).length})
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </FadeIn>

          {loading ? (
            <div className="flex flex-col items-center justify-center py-20">
              <Loader2 className="w-12 h-12 text-purple-500 animate-spin mb-4" />
              <p className="text-white/60 font-medium">Loading local businesses...</p>
            </div>
          ) : (
            <>
              {/* Results Count */}
              <p className="text-white/60 mb-6">
                Showing {sortedBusinesses.length} of {businesses.length} businesses
              </p>

              {/* Business Grid/List */}
              <div className={viewMode === 'grid' ? 'grid md:grid-cols-2 lg:grid-cols-3 gap-6' : 'space-y-4'}>
                {sortedBusinesses.map((business) => (
                  <motion.div
                    key={business.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    whileHover={{ y: -3 }}
                    className={`glass-card overflow-hidden group ${viewMode === 'list' ? 'flex' : ''}`}
                  >
                    {/* Business Image */}
                    <div className={`relative ${viewMode === 'list' ? 'w-24 sm:w-32 shrink-0' : 'aspect-square'} overflow-hidden bg-white/5 border-b border-white/5`}>
                      <Image
                        src={business.image_url || "/images/macc-logo.png"}
                        alt={business.name}
                        fill
                        className="object-contain p-6 transition-transform duration-500 group-hover:scale-105"
                        unoptimized
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
                      {/* Tier Badge on Image */}
                      {business.tier !== 'member' && (
                        <div className={`absolute top-3 left-3 px-2 py-1 rounded-full text-xs font-medium ${tierInfo[business.tier].bgColor} ${tierInfo[business.tier].textColor} flex items-center gap-1`}>
                          <Star className="w-3 h-3" />
                          {tierInfo[business.tier].label}
                        </div>
                      )}
                    </div>

                    <div className="p-5 flex-1">
                      {/* Category Badge */}
                      <span className="inline-block px-3 py-1 text-xs font-medium text-purple-300 bg-purple-500/20 rounded-full mb-2">
                        {business.category}
                      </span>

                      <h3 className="text-lg font-semibold text-white group-hover:text-purple-300 transition-colors line-clamp-1">
                        {business.name}
                      </h3>

                      <div className="mt-3 space-y-1.5">
                        <div className="flex items-start gap-2 text-sm text-white/50">
                          <MapPin className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                          <span className="line-clamp-2">{business.address}</span>
                        </div>
                        {business.phone && (
                          <div className="flex items-center gap-2 text-sm text-white/50">
                            <Phone className="w-4 h-4 text-purple-400 shrink-0" />
                            <a href={`tel:${business.phone}`} className="hover:text-white transition-colors">{business.phone}</a>
                          </div>
                        )}
                        {business.website && (
                          <div className="flex items-center gap-2 text-sm text-white/50">
                            <Globe className="w-4 h-4 text-orange-400 shrink-0" />
                            <a href={business.website.startsWith('http') ? business.website : `https://${business.website}`} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors truncate">
                              {business.website.replace('https://', '').replace('http://', '')}
                            </a>
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {sortedBusinesses.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-white/60">No businesses found matching your criteria.</p>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      <Footer />
    </>
  );
}
