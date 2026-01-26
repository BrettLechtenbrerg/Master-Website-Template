'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Tv, Star, Calendar, ArrowRight, Play, Clock } from 'lucide-react';
import Image from 'next/image';
import PageHeader from '@/components/PageHeader';
import Footer from '@/components/Footer';
import Link from 'next/link';

// YouTube Video ID
const YOUTUBE_VIDEO_ID = 'Dq7agUEBr6I';

const featuredSegments = [
  {
    title: 'Murray Chamber Holiday Showcase',
    date: 'December 15, 2025',
    description: 'Chamber Executive Director highlights local businesses and holiday shopping in Murray.',
    business: 'Murray Area Chamber of Commerce',
  },
  {
    title: 'Small Business Success Story',
    date: 'November 20, 2025',
    description: 'Local florist shares their journey from startup to award-winning Murray business.',
    business: 'Local Murray Business',
  },
  {
    title: 'Tech Innovation in Murray',
    date: 'October 8, 2025',
    description: 'Murray tech company discusses the growing tech sector in our community.',
    business: 'Murray Tech Business',
  },
];

const benefits = [
  { icon: Tv, title: 'Local TV Exposure', description: 'Reach thousands of Utah viewers on ABC4.' },
  { icon: Star, title: 'Brand Awareness', description: 'Showcase your business to a wide audience.' },
  { icon: Calendar, title: 'Flexible Scheduling', description: 'We help coordinate your segment timing.' },
];

export default function GoodThingsUtahPage() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  return (
    <>
      <PageHeader
        badge="Media"
        title="Good Things Utah"
        description="Get your Murray business featured on Good Things Utah! The Chamber partners with ABC4 to spotlight our member businesses."
        breadcrumbs={[
          { label: 'Business Resources', href: '/resources' },
          { label: 'Good Things Utah' },
        ]}
      />

      {/* About Section */}
      <section className="relative py-16 overflow-hidden">
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <span className="inline-block px-4 py-2 text-sm font-medium text-orange-300 bg-orange-500/20 rounded-full mb-4">
                Partner Program
              </span>
              <h2 className="text-3xl font-bold text-white mb-6">
                Shine on Local Television
              </h2>
              <p className="text-white/70 mb-6">
                Good Things Utah is ABC4&apos;s popular morning lifestyle show, reaching hundreds of thousands of Utah viewers each week. Through our partnership, Murray Area Chamber members have the opportunity to be featured on the show and share their story with a wider audience.
              </p>
              <p className="text-white/70 mb-8">
                Whether you&apos;re launching a new product, celebrating a milestone, or simply want to introduce your business to the community, a Good Things Utah segment can help you connect with potential customers across the Wasatch Front.
              </p>

              <div className="flex flex-wrap gap-6">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit.title}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center">
                      <benefit.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-medium text-white text-sm">{benefit.title}</h4>
                      <p className="text-white/50 text-xs">{benefit.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="glass-card p-8"
            >
              {isVideoPlaying ? (
                /* YouTube Embed */
                <div className="aspect-video rounded-xl overflow-hidden mb-6">
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=1&rel=0`}
                    title="Good Things Utah - Murray Chamber"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
              ) : (
                /* Video Thumbnail */
                <div
                  className="aspect-video bg-gradient-to-br from-purple-600/30 to-orange-500/30 rounded-xl flex items-center justify-center mb-6 cursor-pointer group relative overflow-hidden"
                  onClick={() => setIsVideoPlaying(true)}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`https://img.youtube.com/vi/${YOUTUBE_VIDEO_ID}/hqdefault.jpg`}
                    alt="Good Things Utah Video"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors" />
                  <div className="relative w-20 h-20 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm group-hover:bg-white/20 transition-colors group-hover:scale-110 duration-300">
                    <Play className="w-10 h-10 text-white ml-2" />
                  </div>
                </div>
              )}
              <h3 className="text-xl font-semibold text-white mb-2">Watch Our Latest Segment</h3>
              <p className="text-white/60 text-sm">
                See how Murray businesses are making an impact on Good Things Utah.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="relative py-16 overflow-hidden">
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white">How It Works</h2>
            <p className="mt-4 text-white/60">Getting your business on Good Things Utah is easy.</p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: 1, title: 'Apply', description: 'Submit your interest through the Chamber.' },
              { step: 2, title: 'Review', description: 'Our team reviews and coordinates with ABC4.' },
              { step: 3, title: 'Prepare', description: 'We help you prepare for your segment.' },
              { step: 4, title: 'Shine', description: 'Share your story on live television!' },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-6 text-center relative"
              >
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-orange-500 flex items-center justify-center text-white font-bold text-sm">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold text-white mt-4">{item.title}</h3>
                <p className="text-white/60 text-sm mt-2">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Segments */}
      <section className="relative py-16 overflow-hidden">
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white">Recent Chamber Segments</h2>
            <p className="mt-4 text-white/60">Murray businesses making waves on TV.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredSegments.map((segment, index) => (
              <motion.div
                key={segment.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-6 group cursor-pointer"
              >
                <div className="aspect-video bg-gradient-to-br from-purple-600/20 to-orange-500/20 rounded-xl flex items-center justify-center mb-4">
                  <Play className="w-12 h-12 text-white/40 group-hover:text-white/60 transition-colors" />
                </div>
                <div className="flex items-center gap-2 text-xs text-white/40 mb-2">
                  <Clock className="w-3 h-3" />
                  {segment.date}
                </div>
                <h3 className="text-lg font-semibold text-white group-hover:text-purple-300 transition-colors">
                  {segment.title}
                </h3>
                <p className="text-white/60 text-sm mt-2">{segment.description}</p>
                <p className="text-purple-400 text-sm mt-3">{segment.business}</p>
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
            <Tv className="w-16 h-16 text-orange-400 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-white">Ready for Your Close-Up?</h2>
            <p className="mt-4 text-white/60 max-w-2xl mx-auto">
              Gold and Platinum members receive priority placement. Contact us to learn how to get your business featured on Good Things Utah.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/contact">
                <button className="btn-glow">
                  Apply for a Segment
                  <ArrowRight className="w-5 h-5" />
                </button>
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
