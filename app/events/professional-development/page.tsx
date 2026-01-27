'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import {
  GraduationCap,
  Users,
  TrendingUp,
  ExternalLink,
  Zap,
  Target,
} from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import Footer from '@/components/Footer';

// Trainer information
const trainers = [
  {
    name: 'Brett Lechtenberg',
    role: 'Co-Founder & Training Facilitator',
    title: 'Chair of the Board, Education Chair',
    bio: "Brett brings years of experience in business development, AI implementation, and marketing automation. As co-founder of Total Success AI and the Master's Edge Training programs, he's helped countless businesses achieve breakthrough results.",
    image: '/images/brett.png',
    link: 'https://brettlechtenberg.com',
    linkText: 'BrettLechtenberg.com',
    gradient: 'from-purple-600 to-orange-500',
    borderColor: 'border-purple-500/30',
    linkColor: 'text-purple-400 hover:text-purple-300',
  },
  {
    name: 'Manny Torres',
    role: 'Co-Founder & AI Implementation Specialist',
    title: 'Technical AI Expert',
    bio: "Manny is a hands-on AI implementation specialist dedicated to creating solutions that put people first. His expertise in automation, AI workflows, and practical business applications helps teams collaborate better and drive real results.",
    image: '/images/manny.png',
    link: 'https://totalsuccessai.com/about',
    linkText: 'TotalSuccessAI.com',
    gradient: 'from-orange-500 to-purple-600',
    borderColor: 'border-orange-500/30',
    linkColor: 'text-orange-400 hover:text-orange-300',
  },
];

const trainingBenefits = [
  { icon: Zap, text: 'Practical, actionable strategies you can implement immediately' },
  { icon: Users, text: 'Network with fellow Murray business owners' },
  { icon: Target, text: 'Personalized guidance for your specific business challenges' },
  { icon: TrendingUp, text: 'Stay ahead of the competition with cutting-edge knowledge' },
];

export default function ProfessionalDevelopmentPage() {
  return (
    <>
      <PageHeader
        badge="Professional Development"
        title="Elevate Your Business Skills"
        description="Join our bi-monthly live training sessions and weekly online training led by Brett Lechtenberg and Manny Torres. Master business marketing, AI, and automation to take your business to the next level."
        breadcrumbs={[
          { label: 'Events', href: '/events/chamber' },
          { label: 'Professional Development' },
        ]}
      />

      {/* Hero Section - About the Training */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-transparent pointer-events-none" />
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left - Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-orange-500/20 border border-purple-500/30 mb-6">
                <GraduationCap className="w-4 h-4 text-orange-400" />
                <span className="text-sm font-medium text-white/80">Expert-Led Training</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Bi-Monthly Live Training Sessions
              </h2>
              <p className="text-lg text-white/70 mb-6">
                The Murray Area Chamber of Commerce is proud to offer professional development
                training sessions twice a month, designed specifically for local business owners
                and entrepreneurs who want to stay competitive in today&apos;s rapidly evolving marketplace.
              </p>
              <p className="text-white/60 mb-8">
                Our training covers the latest in business marketing, artificial intelligence,
                automation tools, and growth strategies. Whether you&apos;re just starting out or
                looking to scale, these sessions provide the knowledge and skills you need to succeed.
              </p>

              {/* Benefits */}
              <div className="grid sm:grid-cols-2 gap-4">
                {trainingBenefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    className="flex items-start gap-3 glass-card p-4"
                  >
                    <div className="w-8 h-8 rounded-lg bg-orange-500/20 flex items-center justify-center shrink-0">
                      <benefit.icon className="w-4 h-4 text-orange-400" />
                    </div>
                    <span className="text-white/80 text-sm">{benefit.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right - Trainer Info Cards */}
            <div className="space-y-6">
              {trainers.map((trainer, index) => (
                <motion.div
                  key={trainer.name}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`glass-card p-6 border ${trainer.borderColor}`}
                >
                  <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start">
                    <div className="shrink-0">
                      <div className={`w-24 h-24 rounded-2xl bg-gradient-to-br ${trainer.gradient} p-1`}>
                        <div className="w-full h-full rounded-xl bg-white/10 flex items-center justify-center overflow-hidden">
                          <Image
                            src={trainer.image}
                            alt={trainer.name}
                            width={96}
                            height={96}
                            className="object-cover w-full h-full"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="text-center sm:text-left flex-1">
                      <h3 className="text-xl font-bold text-white mb-1">{trainer.name}</h3>
                      <p className="text-orange-400 font-medium text-sm mb-1">{trainer.role}</p>
                      <p className="text-white/60 text-xs mb-3">{trainer.title}</p>
                      <p className="text-white/70 text-sm mb-4">{trainer.bio}</p>
                      <a
                        href={trainer.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center gap-2 ${trainer.linkColor} text-sm font-medium transition-colors`}
                      >
                        {trainer.linkText}
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Shared CTA */}
              <a
                href="https://totalsuccessai.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-purple-600 to-orange-500 hover:from-purple-500 hover:to-orange-400 text-white font-medium transition-all w-full"
              >
                Visit TotalSuccessAI.com
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Online Training Group CTA */}
      <section className="relative py-20 overflow-hidden">
        <div className="relative z-10 w-full max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-card p-12 border border-orange-500/30"
          >
            <div className="flex justify-center mb-8">
              <div className="w-full max-w-md h-64 rounded-2xl overflow-hidden">
                <Image
                  src="/images/ai-implementation-lab.png"
                  alt="AI Implementation Lab"
                  width={400}
                  height={256}
                  className="object-contain w-full h-full"
                />
              </div>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Learn More About The AI Implementation Lab
            </h2>
            <p className="text-lg text-white/70 mb-6 max-w-2xl mx-auto">
              Ready to transform your business with AI? The AI Implementation Lab is our
              comprehensive online training community where you&apos;ll learn to implement
              cutting-edge AI tools, automation systems, and marketing strategies.
            </p>
            <p className="text-white/70 mb-8 max-w-2xl mx-auto">
              Members get access to <span className="text-orange-400 font-semibold">two live training sessions per month</span> plus
              <span className="text-orange-400 font-semibold"> weekly Zoom training and Q&amp;A sessions</span> where you can get
              personalized guidance and support from our expert trainers.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://www.totalsuccessai.com/ai-academy"
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-glow"
                >
                  Learn More About the Training
                  <ExternalLink className="w-5 h-5" />
                </motion.button>
              </a>
              <a
                href="https://totalsuccessai.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-secondary"
                >
                  Learn More at TotalSuccessAI.com
                  <ExternalLink className="w-5 h-5" />
                </motion.button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}
