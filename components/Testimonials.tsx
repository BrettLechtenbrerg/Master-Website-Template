'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    content: "Joining the Murray Chamber was one of the best decisions we made for our business. The networking events alone have generated countless referrals and partnerships.",
    author: "Sarah Mitchell",
    role: "Owner",
    company: "Mitchell & Co. Accounting",
    rating: 5,
  },
  {
    id: 2,
    content: "The Chamber's ribbon cutting for our grand opening brought the entire community together. The exposure and support we received was incredible.",
    author: "David Chen",
    role: "Founder",
    company: "Murray Tech Solutions",
    rating: 5,
  },
  {
    id: 3,
    content: "As a small business, the resources and workshops provided by the Chamber have been invaluable. They truly care about helping businesses succeed.",
    author: "Jennifer Rodriguez",
    role: "CEO",
    company: "Bloom Floral Design",
    rating: 5,
  },
  {
    id: 4,
    content: "The Ambassador program welcomed us with open arms. We've made genuine connections that have transformed how we do business in Murray.",
    author: "Michael Torres",
    role: "Managing Partner",
    company: "Torres Legal Group",
    rating: 5,
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
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
    <section ref={ref} className="relative w-full py-12 sm:py-16 md:py-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full filter blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-500/20 rounded-full filter blur-3xl" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-orange-400 font-semibold uppercase tracking-wider text-sm">
            Success Stories
          </span>
          <h2 className="mt-4 text-4xl sm:text-5xl font-bold text-white">
            What Our Members Say
          </h2>
          <p className="mt-4 text-lg text-white/60 max-w-2xl mx-auto">
            Join hundreds of thriving businesses who have grown with the Murray Chamber.
          </p>
        </motion.div>

        {/* Testimonial Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="glass-strong rounded-3xl p-10 md:p-14 lg:p-20 border border-white/10">
            <div className="flex flex-col items-center text-center">
                {/* Quote Icon */}
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-600 to-orange-500 flex items-center justify-center mb-8">
                  <Quote className="w-8 h-8 text-white" />
                </div>

                {/* Testimonial Content */}
                <div className="relative h-[200px] sm:h-[150px] w-full max-w-3xl overflow-hidden">
                  {testimonials.map((testimonial, index) => (
                    <motion.div
                      key={testimonial.id}
                      initial={{ opacity: 0, x: 100 }}
                      animate={{
                        opacity: index === currentIndex ? 1 : 0,
                        x: index === currentIndex ? 0 : index < currentIndex ? -100 : 100,
                      }}
                      transition={{ duration: 0.5 }}
                      className="absolute inset-0 flex flex-col items-center justify-center"
                    >
                      {/* Stars */}
                      <div className="flex gap-1 mb-6">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 text-orange-400 fill-orange-400" />
                        ))}
                      </div>

                      <p className="text-xl md:text-2xl text-white/90 leading-relaxed font-light italic">
                        &ldquo;{testimonial.content}&rdquo;
                      </p>
                    </motion.div>
                  ))}
                </div>

                {/* Author Info */}
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-8"
                >
                  <div className="text-lg font-semibold text-white">
                    {testimonials[currentIndex].author}
                  </div>
                  <div className="text-white/60">
                    {testimonials[currentIndex].role}, {testimonials[currentIndex].company}
                  </div>
                </motion.div>

                {/* Navigation */}
                <div className="mt-8 flex items-center gap-4">
                  <button
                    onClick={prev}
                    className="p-3 rounded-xl glass hover:bg-white/10 transition-colors"
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
                    className="p-3 rounded-xl glass hover:bg-white/10 transition-colors"
                    aria-label="Next testimonial"
                  >
                    <ChevronRight className="w-5 h-5 text-white" />
                  </button>
                </div>
              </div>
            </div>
        </motion.div>

        {/* Member Logos */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 md:mt-20 text-center"
        >
          <p className="text-white/40 text-sm uppercase tracking-wider mb-8">
            Trusted by 500+ Murray Businesses
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-50">
            {/* Placeholder for member logos */}
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="w-32 h-12 rounded-lg bg-white/10 animate-pulse"
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
