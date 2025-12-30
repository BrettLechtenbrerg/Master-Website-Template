'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';
import Link from 'next/link';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: 'What exactly does Total Success do?',
    answer:
      'We teach businesses how to cut costs, maximize productivity, and increase revenue with AI and automation solutions.',
  },
  {
    question: 'How do you do that?',
    answer:
      'We provide comprehensive AI consulting, implementation, and training services. Our approach includes strategic planning, custom AI solution development, seamless integration with your existing systems, and hands-on training to empower your team. We work closely with you to identify opportunities, implement solutions, and ensure long-term success.',
  },
  {
    question: 'How do I find out more?',
    answer:
      'Schedule a free consultation call with our team! We offer 15-minute exploration calls, 30-minute onboarding calls, and 1-hour project evaluation calls. You can also reach out through our contact form or email us directly. We\'re always happy to discuss how AI can transform your business.',
  },
  {
    question: 'Is AI and automation integration expensive?',
    answer:
      'The cost varies based on your specific needs and scale. However, AI solutions are more accessible than ever before. We work with businesses of all sizes and can tailor solutions to fit your budget. Most importantly, our solutions are designed to deliver strong ROI by cutting costs, improving efficiency, and increasing revenue - often paying for themselves within months.',
  },
  {
    question: "What is your company's mission?",
    answer:
      'Our mission is to democratize AI and make cutting-edge technology accessible to service-based small businesses. We believe every business, regardless of size, should have the opportunity to leverage AI to grow, compete, and succeed in the modern marketplace. We\'re committed to delivering practical, results-driven solutions that create real value.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-[#1a1a2e] via-[#0f1419] to-navy">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Get answers to common questions about AI implementation, automation, and how our solutions can help your service-based small business grow.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-[#2a2a3e] rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-[#3a3a4e] transition-colors duration-200"
              >
                <h3 className="text-lg md:text-xl font-semibold text-white pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <FaMinus className="text-white text-xl" />
                  ) : (
                    <FaPlus className="text-white text-xl" />
                  )}
                </div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 text-gray-300 text-base md:text-lg leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-gray-300 text-lg mb-6">
            Have more questions? We're here to help.
          </p>
          <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-silver text-navy px-8 py-4 rounded-full font-semibold text-lg hover:bg-white transition-all duration-300"
            >
              Contact Us
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
