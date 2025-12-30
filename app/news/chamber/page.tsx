'use client';

import { motion } from 'framer-motion';
import { Calendar, ArrowRight, User, Tag } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import Footer from '@/components/Footer';
import Link from 'next/link';

const chamberNews = [
  {
    id: 1,
    title: 'Chamber Announces 2026 Business Excellence Awards Nominees',
    excerpt: 'The Murray Area Chamber of Commerce is proud to announce the nominees for the 2026 Business Excellence Awards, recognizing outstanding achievements in our business community.',
    date: new Date('2026-01-10'),
    author: 'Chamber Staff',
    category: 'Awards',
    image: '/news/awards.jpg',
    featured: true,
  },
  {
    id: 2,
    title: 'New Partnership with Murray City Economic Development',
    excerpt: 'We are excited to announce a new strategic partnership with Murray City Economic Development to better serve local businesses and attract new investment.',
    date: new Date('2026-01-05'),
    author: 'Sarah Thompson',
    category: 'Partnerships',
    image: '/news/partnership.jpg',
    featured: true,
  },
  {
    id: 3,
    title: 'Small Business Workshop Series Launches in February',
    excerpt: 'Join us for our comprehensive small business workshop series covering marketing, finance, and operations for local entrepreneurs.',
    date: new Date('2026-01-02'),
    author: 'Education Committee',
    category: 'Education',
    image: '/news/workshop.jpg',
    featured: false,
  },
  {
    id: 4,
    title: 'Chamber Welcomes 15 New Members in December',
    excerpt: 'We are thrilled to welcome 15 new member businesses to our growing network. Learn more about our newest members and their services.',
    date: new Date('2025-12-20'),
    author: 'Membership Team',
    category: 'Membership',
    image: '/news/members.jpg',
    featured: false,
  },
  {
    id: 5,
    title: 'Holiday Networking Event Breaks Attendance Record',
    excerpt: 'Our annual holiday mixer saw record attendance with over 200 business professionals gathering to celebrate the season and build connections.',
    date: new Date('2025-12-15'),
    author: 'Events Team',
    category: 'Events',
    image: '/news/holiday.jpg',
    featured: false,
  },
  {
    id: 6,
    title: 'Chamber Advocacy Efforts Result in New Business-Friendly Policies',
    excerpt: 'Thanks to our advocacy committee\'s efforts, Murray City Council has approved several new policies supporting local business growth.',
    date: new Date('2025-12-10'),
    author: 'Advocacy Committee',
    category: 'Advocacy',
    image: '/news/advocacy.jpg',
    featured: false,
  },
];

const categoryColors: Record<string, string> = {
  'Awards': 'bg-yellow-500/20 text-yellow-300',
  'Partnerships': 'bg-purple-500/20 text-purple-300',
  'Education': 'bg-blue-500/20 text-blue-300',
  'Membership': 'bg-green-500/20 text-green-300',
  'Events': 'bg-orange-500/20 text-orange-300',
  'Advocacy': 'bg-pink-500/20 text-pink-300',
};

export default function ChamberNewsPage() {
  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  const featuredNews = chamberNews.filter(news => news.featured);
  const regularNews = chamberNews.filter(news => !news.featured);

  return (
    <>
      <PageHeader
        badge="News"
        title="Chamber News"
        description="Stay informed about the latest updates, announcements, and happenings from the Murray Area Chamber of Commerce."
        breadcrumbs={[
          { label: 'News', href: '/news/chamber' },
          { label: 'Chamber News' },
        ]}
      />

      {/* Featured News */}
      <section className="relative py-16 overflow-hidden">
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-2xl font-bold text-white mb-8"
          >
            Featured Stories
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            {featuredNews.map((news, index) => (
              <motion.article
                key={news.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="glass-card overflow-hidden group cursor-pointer"
              >
                <div className="h-48 bg-gradient-to-br from-purple-600/30 to-orange-500/30 flex items-center justify-center">
                  <span className="text-6xl font-bold text-white/20">{news.title.charAt(0)}</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className={`px-3 py-1 text-xs font-medium rounded-full ${categoryColors[news.category]}`}>
                      {news.category}
                    </span>
                    <span className="text-xs text-white/40">{formatDate(news.date)}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white group-hover:text-purple-300 transition-colors">
                    {news.title}
                  </h3>
                  <p className="mt-3 text-white/60 text-sm line-clamp-2">{news.excerpt}</p>
                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs text-white/40">
                      <User className="w-3 h-3" />
                      {news.author}
                    </div>
                    <span className="flex items-center gap-1 text-sm text-purple-400 group-hover:text-purple-300 transition-colors">
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* All News */}
      <section className="relative py-8 pb-24 overflow-hidden">
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-2xl font-bold text-white mb-8"
          >
            Recent News
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularNews.map((news, index) => (
              <motion.article
                key={news.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-6 group cursor-pointer"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className={`px-3 py-1 text-xs font-medium rounded-full ${categoryColors[news.category]}`}>
                    {news.category}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-white group-hover:text-purple-300 transition-colors">
                  {news.title}
                </h3>
                <p className="mt-3 text-white/60 text-sm line-clamp-3">{news.excerpt}</p>
                <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-4 text-xs text-white/40">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {formatDate(news.date)}
                    </span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-purple-400 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.article>
            ))}
          </div>

          {/* Newsletter CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-16 glass-strong rounded-3xl p-8 md:p-12 text-center"
          >
            <h3 className="text-2xl font-bold text-white">Never Miss an Update</h3>
            <p className="mt-4 text-white/60 max-w-lg mx-auto">
              Subscribe to our newsletter and get chamber news delivered directly to your inbox.
            </p>
            <form className="mt-8 flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="input-glass flex-1"
              />
              <button type="submit" className="btn-glow">Subscribe</button>
            </form>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}
