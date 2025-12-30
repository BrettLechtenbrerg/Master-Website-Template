'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Tag, Percent, Clock, Building2, Filter, ArrowRight } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import Footer from '@/components/Footer';
import Link from 'next/link';

const deals = [
  {
    id: 1,
    business: 'Murray Tech Solutions',
    category: 'Technology',
    offer: '20% Off First Month of IT Support',
    description: 'New customers receive 20% off their first month of managed IT services.',
    expires: '2026-03-31',
    code: 'CHAMBER20',
  },
  {
    id: 2,
    business: 'Bloom Floral Design',
    category: 'Retail',
    offer: '15% Off Wedding Packages',
    description: 'Chamber members receive 15% off complete wedding floral packages.',
    expires: '2026-12-31',
    code: 'CHAMBERWED',
  },
  {
    id: 3,
    business: 'Peak Fitness Murray',
    category: 'Health & Wellness',
    offer: 'Free Personal Training Session',
    description: 'Complimentary one-hour personal training session with any membership.',
    expires: '2026-06-30',
    code: 'CHAMBERFIT',
  },
  {
    id: 4,
    business: 'The Hive Murray',
    category: 'Food & Beverage',
    offer: '10% Off Catering Orders',
    description: 'Save 10% on catering orders of $500 or more for chamber members.',
    expires: '2026-12-31',
    code: 'CHAMBERHIVE',
  },
  {
    id: 5,
    business: 'Torres Legal Group',
    category: 'Professional Services',
    offer: 'Free 30-Minute Consultation',
    description: 'Complimentary legal consultation for chamber member businesses.',
    expires: '2026-12-31',
    code: 'CHAMBERLAW',
  },
  {
    id: 6,
    business: 'Murray Print & Design',
    category: 'Marketing',
    offer: '25% Off First Order',
    description: 'New customers save 25% on their first print or design order.',
    expires: '2026-04-30',
    code: 'CHAMBERPRINT',
  },
];

const categories = ['All Deals', 'Technology', 'Retail', 'Health & Wellness', 'Food & Beverage', 'Professional Services', 'Marketing'];

export default function DealsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All Deals');

  const filteredDeals = deals.filter(
    deal => selectedCategory === 'All Deals' || deal.category === selectedCategory
  );

  return (
    <>
      <PageHeader
        badge="Exclusive Savings"
        title="Member to Member Deals"
        description="Exclusive discounts and offers available only to Murray Area Chamber of Commerce members. Support local businesses and save!"
        breadcrumbs={[
          { label: 'Membership', href: '/members' },
          { label: 'Member Deals' },
        ]}
      />

      {/* Category Filter */}
      <section className="relative py-8 overflow-hidden">
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-wrap items-center gap-3"
          >
            <Filter className="w-5 h-5 text-white/60" />
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-orange-500 text-white'
                    : 'bg-white/5 text-white/60 hover:bg-white/10 hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Deals Grid */}
      <section className="relative py-8 pb-24 overflow-hidden">
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDeals.map((deal, index) => (
              <motion.div
                key={deal.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-6 group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center shadow-lg">
                    <Percent className="w-6 h-6 text-white" />
                  </div>
                  <span className="px-3 py-1 text-xs font-medium text-purple-300 bg-purple-500/20 rounded-full">
                    {deal.category}
                  </span>
                </div>

                <h3 className="text-xl font-semibold text-white mb-2">{deal.offer}</h3>
                <p className="text-white/60 text-sm mb-4">{deal.description}</p>

                <div className="flex items-center gap-2 text-sm text-white/50 mb-4">
                  <Building2 className="w-4 h-4 text-purple-400" />
                  {deal.business}
                </div>

                <div className="flex items-center gap-2 text-sm text-white/50 mb-6">
                  <Clock className="w-4 h-4 text-orange-400" />
                  Expires {new Date(deal.expires).toLocaleDateString()}
                </div>

                <div className="p-4 bg-white/5 rounded-xl border border-dashed border-white/20 text-center">
                  <span className="text-xs text-white/40 block mb-1">Promo Code</span>
                  <span className="text-lg font-mono font-bold text-white">{deal.code}</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Submit Deal CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-16 glass-strong rounded-3xl p-8 md:p-12 text-center"
          >
            <Tag className="w-16 h-16 text-orange-400 mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-white">Want to Offer a Deal?</h3>
            <p className="mt-4 text-white/60 max-w-lg mx-auto">
              Chamber members can submit their own deals to be featured on this page. It&apos;s a great way to attract new customers!
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/contact">
                <button className="btn-glow">Submit Your Deal</button>
              </Link>
              <Link href="/join">
                <button className="btn-secondary">Become a Member</button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}
