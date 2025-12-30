'use client';

import { motion } from 'framer-motion';
import { Calendar, MapPin, ArrowRight, ExternalLink } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import Footer from '@/components/Footer';
import Link from 'next/link';

const communityNews = [
  {
    id: 1,
    title: 'Murray City Announces New Downtown Revitalization Project',
    excerpt: 'Murray City has unveiled plans for a major downtown revitalization initiative that will transform the historic district with new retail, dining, and public spaces.',
    date: new Date('2026-01-08'),
    source: 'Murray City',
    category: 'Development',
    link: '#',
  },
  {
    id: 2,
    title: 'Local Tech Company Brings 200 New Jobs to Murray',
    excerpt: 'InnovateTech Inc. announces expansion of their Murray headquarters, creating 200 new high-paying technology jobs for the region.',
    date: new Date('2026-01-03'),
    source: 'Murray Journal',
    category: 'Business',
    link: '#',
  },
  {
    id: 3,
    title: 'Murray School District Recognized for Excellence',
    excerpt: 'Murray School District receives statewide recognition for innovative STEM programs and student achievement improvements.',
    date: new Date('2025-12-28'),
    source: 'Utah Education News',
    category: 'Education',
    link: '#',
  },
  {
    id: 4,
    title: 'New Mixed-Use Development Approved for State Street',
    excerpt: 'City council approves plans for a new mixed-use development bringing housing, retail, and office space to State Street corridor.',
    date: new Date('2025-12-22'),
    source: 'Murray City',
    category: 'Development',
    link: '#',
  },
  {
    id: 5,
    title: 'Murray Parks Awarded Grant for Trail Expansion',
    excerpt: 'Murray Parks and Recreation receives $2 million grant to expand the city trail system, connecting more neighborhoods to outdoor recreation.',
    date: new Date('2025-12-18'),
    source: 'Murray Parks Dept',
    category: 'Recreation',
    link: '#',
  },
  {
    id: 6,
    title: 'Local Restaurant Week Returns in February',
    excerpt: 'Murray Restaurant Week will showcase the best of local dining with special menus and promotions at participating restaurants.',
    date: new Date('2025-12-12'),
    source: 'Murray Dining Association',
    category: 'Dining',
    link: '#',
  },
  {
    id: 7,
    title: 'Murray Police Department Launches Community Outreach Program',
    excerpt: 'New community outreach initiative aims to strengthen relationships between law enforcement and Murray residents through events and engagement.',
    date: new Date('2025-12-08'),
    source: 'Murray PD',
    category: 'Community',
    link: '#',
  },
  {
    id: 8,
    title: 'Historic Murray Theater Renovation Complete',
    excerpt: 'The beloved Murray Theater reopens after extensive renovation, preserving its historic character while adding modern amenities.',
    date: new Date('2025-12-05'),
    source: 'Murray Arts Council',
    category: 'Arts & Culture',
    link: '#',
  },
];

const categoryColors: Record<string, string> = {
  'Development': 'bg-blue-500/20 text-blue-300',
  'Business': 'bg-green-500/20 text-green-300',
  'Education': 'bg-purple-500/20 text-purple-300',
  'Recreation': 'bg-orange-500/20 text-orange-300',
  'Dining': 'bg-pink-500/20 text-pink-300',
  'Community': 'bg-yellow-500/20 text-yellow-300',
  'Arts & Culture': 'bg-indigo-500/20 text-indigo-300',
};

export default function CommunityNewsPage() {
  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  return (
    <>
      <PageHeader
        badge="Community"
        title="Community News"
        description="Stay connected with the latest news and developments happening throughout Murray and the surrounding community."
        breadcrumbs={[
          { label: 'News', href: '/news/chamber' },
          { label: 'Community News' },
        ]}
      />

      {/* News Grid */}
      <section className="relative py-16 overflow-hidden">
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {communityNews.map((news, index) => (
              <motion.article
                key={news.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-6 group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className={`px-3 py-1 text-xs font-medium rounded-full ${categoryColors[news.category]}`}>
                    {news.category}
                  </span>
                  <span className="text-xs text-white/40">{news.source}</span>
                </div>

                <h3 className="text-lg font-semibold text-white group-hover:text-purple-300 transition-colors">
                  {news.title}
                </h3>
                <p className="mt-3 text-white/60 text-sm line-clamp-3">{news.excerpt}</p>

                <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="flex items-center gap-1 text-xs text-white/40">
                    <Calendar className="w-3 h-3" />
                    {formatDate(news.date)}
                  </span>
                  <a
                    href={news.link}
                    className="flex items-center gap-1 text-sm text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    Read More
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Submit News CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-16 glass-strong rounded-3xl p-8 md:p-12 text-center"
          >
            <h3 className="text-2xl font-bold text-white">Have News to Share?</h3>
            <p className="mt-4 text-white/60 max-w-lg mx-auto">
              Submit your community news, press releases, or announcements to be featured on our site.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/contact">
                <button className="btn-glow">Submit News</button>
              </Link>
              <Link href="/news/chamber">
                <button className="btn-secondary">View Chamber News</button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}
