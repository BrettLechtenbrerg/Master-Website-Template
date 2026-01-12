'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Quote, ChevronLeft, ChevronRight, Star, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import FadeIn from './animations/FadeIn';
import StaggerChildren, { StaggerItem } from './animations/StaggerChildren';

const testimonials = [
  {
    id: 1,
    content: "Joining the Murray Chamber was one of the best decisions we made for our business. The networking events alone have generated countless referrals and partnerships.",
    author: "Sarah Mitchell",
    role: "Owner",
    company: "Mitchell & Co. Accounting",
    rating: 5,
    image: '/images/team/member-1.jpg',
  },
  {
    id: 2,
    content: "The Chamber's ribbon cutting for our grand opening brought the entire community together. The exposure and support we received was incredible.",
    author: "David Chen",
    role: "Founder",
    company: "Murray Tech Solutions",
    rating: 5,
    image: '/images/team/member-2.jpg',
  },
  {
    id: 3,
    content: "As a small business, the resources and workshops provided by the Chamber have been invaluable. They truly care about helping businesses succeed.",
    author: "Jennifer Rodriguez",
    role: "CEO",
    company: "Bloom Floral Design",
    rating: 5,
    image: '/images/team/member-3.jpg',
  },
  {
    id: 4,
    content: "The Ambassador program welcomed us with open arms. We've made genuine connections that have transformed how we do business in Murray.",
    author: "Michael Torres",
    role: "Managing Partner",
    company: "Torres Legal Group",
    rating: 5,
    image: '/images/team/member-4.jpg',
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const next = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="relative w-full py-16 sm:py-20 md:py-24 overflow-hidden">
      {/* Background with Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero/testimonials-bg.jpg"
          alt="Murray Business Community"
          fill
          className="object-cover"
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/95 via-slate-900/90 to-slate-900/95" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-500/10 rounded-full filter blur-3xl" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <FadeIn direction="up">
          <div className="text-center mb-16">
            <span className="text-orange-400 font-semibold uppercase tracking-wider text-sm">
              Success Stories
            </span>
            <h2 className="mt-4 text-4xl sm:text-5xl font-bold text-white">
              What Our Members Say
            </h2>
            <p className="mt-4 text-lg text-white/60 max-w-2xl mx-auto">
              Join hundreds of thriving businesses who have grown with the Murray Chamber.
            </p>
          </div>
        </FadeIn>

        {/* Testimonials Grid - Card Style like ITMA */}
        <StaggerChildren staggerDelay={0.1} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {testimonials.map((testimonial, index) => (
            <StaggerItem key={testimonial.id}>
              <motion.div
                whileHover={{ y: -5, scale: 1.02 }}
                className={`relative glass-card overflow-hidden h-full cursor-pointer transition-all ${
                  index === currentIndex ? 'ring-2 ring-purple-500/50' : ''
                }`}
                onClick={() => {
                  setIsAutoPlaying(false);
                  setCurrentIndex(index);
                }}
              >
                {/* Decorative Quote */}
                <Quote className="absolute top-4 right-4 w-10 h-10 text-purple-500/20" />

                <div className="p-6">
                  {/* Photo */}
                  <div className="relative w-16 h-16 mx-auto mb-4 rounded-full overflow-hidden border-3 border-purple-500/30">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.author}
                      fill
                      className="object-cover"
                      unoptimized
                    />
                  </div>

                  {/* Name & Company */}
                  <div className="text-center mb-4">
                    <h3 className="text-lg font-bold text-white">{testimonial.author}</h3>
                    <p className="text-sm text-white/60">{testimonial.role}</p>
                    <p className="text-xs text-purple-400">{testimonial.company}</p>
                  </div>

                  {/* Stars */}
                  <div className="flex justify-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-orange-400 fill-orange-400" />
                    ))}
                  </div>

                  {/* Quote Preview */}
                  <p className="text-white/70 text-sm italic text-center line-clamp-3">
                    &ldquo;{testimonial.content}&rdquo;
                  </p>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerChildren>

        {/* Featured Testimonial - Large Display */}
        <FadeIn direction="up" delay={0.2}>
          <div className="glass-strong rounded-3xl p-8 md:p-12 lg:p-16 border border-white/10">
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
              {/* Large Photo */}
              <div className="shrink-0">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="relative w-32 h-32 lg:w-40 lg:h-40 rounded-2xl overflow-hidden border-4 border-purple-500/30"
                >
                  <Image
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].author}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </motion.div>
              </div>

              {/* Content */}
              <div className="flex-1 text-center lg:text-left">
                {/* Stars */}
                <div className="flex justify-center lg:justify-start gap-1 mb-4">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-orange-400 fill-orange-400" />
                  ))}
                </div>

                {/* Quote */}
                <motion.p
                  key={`quote-${currentIndex}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-xl md:text-2xl text-white/90 leading-relaxed font-light italic"
                >
                  &ldquo;{testimonials[currentIndex].content}&rdquo;
                </motion.p>

                {/* Author */}
                <motion.div
                  key={`author-${currentIndex}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-6"
                >
                  <div className="text-lg font-semibold text-white">
                    {testimonials[currentIndex].author}
                  </div>
                  <div className="text-white/60">
                    {testimonials[currentIndex].role}, {testimonials[currentIndex].company}
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Navigation */}
            <div className="mt-8 flex items-center justify-center gap-4">
              <button
                onClick={prev}
                className="p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5 text-white" />
              </button>

              {/* Dots */}
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setIsAutoPlaying(false);
                      setCurrentIndex(index);
                    }}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? 'w-8 bg-gradient-to-r from-purple-500 to-orange-500'
                        : 'bg-white/30 hover:bg-white/50'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>
        </FadeIn>

        {/* CTA */}
        <FadeIn direction="up" delay={0.4}>
          <div className="mt-12 text-center">
            <Link href="/join">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-white bg-gradient-to-r from-purple-600 to-purple-700 shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 transition-all"
              >
                Join These Success Stories
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
