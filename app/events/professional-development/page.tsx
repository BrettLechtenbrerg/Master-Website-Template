'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import {
  GraduationCap,
  Calendar,
  Users,
  Sparkles,
  Bot,
  TrendingUp,
  Megaphone,
  ArrowRight,
  ExternalLink,
  Play,
  Clock,
  MapPin,
  CheckCircle,
  Zap,
  Target,
  Award
} from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import Footer from '@/components/Footer';

// Training Programs
const trainingPrograms = [
  {
    name: 'Total Success AI',
    description: 'Master cutting-edge AI tools and automation strategies to transform your business operations. Learn to leverage artificial intelligence for marketing, customer service, content creation, and workflow optimization.',
    icon: Bot,
    topics: ['AI Tools & Platforms', 'Business Automation', 'AI-Powered Marketing', 'Workflow Optimization'],
    link: 'https://totalsuccessai.com',
    logo: '/images/TSAI-logo-final.jpg',
  },
  {
    name: "Master's Edge Training",
    description: 'Comprehensive business development program designed to give you the competitive edge. From leadership skills to strategic planning, gain the expertise needed to excel in today\'s dynamic business environment.',
    icon: Award,
    topics: ['Leadership Development', 'Strategic Planning', 'Sales Excellence', 'Business Growth'],
    link: 'https://brettlechtenberg.com',
    logo: null,
  },
  {
    name: 'Business Marketing Mastery',
    description: 'Learn proven marketing strategies that drive real results. From digital marketing to brand building, discover how to attract more customers and grow your revenue.',
    icon: Megaphone,
    topics: ['Digital Marketing', 'Social Media Strategy', 'Brand Building', 'Lead Generation'],
    link: 'https://brettlechtenberg.com',
    logo: null,
  },
];

// Bi-Monthly Training Schedule (placeholder events)
const upcomingTrainings = [
  {
    id: 1,
    title: 'AI Tools for Small Business',
    date: 'Coming Soon',
    time: '11:30 AM - 1:00 PM',
    location: 'Murray Chamber Office',
    type: 'Live Training',
    image: null, // Placeholder for event image
    description: 'Discover practical AI tools that can save you hours every week.',
  },
  {
    id: 2,
    title: 'Marketing Automation Workshop',
    date: 'Coming Soon',
    time: '11:30 AM - 1:00 PM',
    location: 'Murray Chamber Office',
    type: 'Live Training',
    image: null,
    description: 'Learn to automate your marketing for consistent lead generation.',
  },
  {
    id: 3,
    title: 'Social Media Strategy Session',
    date: 'Coming Soon',
    time: '11:30 AM - 1:00 PM',
    location: 'Murray Chamber Office',
    type: 'Live Training',
    image: null,
    description: 'Build a social media presence that converts followers to customers.',
  },
  {
    id: 4,
    title: 'Business Growth Strategies',
    date: 'Coming Soon',
    time: '11:30 AM - 1:00 PM',
    location: 'Murray Chamber Office',
    type: 'Live Training',
    image: null,
    description: 'Proven strategies to scale your business to the next level.',
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
        description="Join our bi-monthly live training sessions and online programs led by Brett Lechtenberg and Manny Torres. Master business marketing, AI, and automation to take your business to the next level."
        breadcrumbs={[
          { label: 'Events', href: '/events/chamber' },
          { label: 'Professional Development' },
        ]}
      />

      {/* Hero Section - About the Training */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-transparent pointer-events-none" />
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
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
              <div className="space-y-4">
                {trainingBenefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-8 h-8 rounded-lg bg-orange-500/20 flex items-center justify-center shrink-0">
                      <benefit.icon className="w-4 h-4 text-orange-400" />
                    </div>
                    <span className="text-white/80">{benefit.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right - Trainer Info Cards */}
            <div className="space-y-6">
              {/* Brett Lechtenberg */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                className="glass-card p-6 border border-purple-500/30"
              >
                <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start">
                  <div className="shrink-0">
                    <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-purple-600 to-orange-500 p-1">
                      <div className="w-full h-full rounded-xl bg-white/10 flex items-center justify-center overflow-hidden">
                        <Image
                          src="/images/brett.png"
                          alt="Brett Lechtenberg"
                          width={96}
                          height={96}
                          className="object-cover w-full h-full"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="text-center sm:text-left flex-1">
                    <h3 className="text-xl font-bold text-white mb-1">Brett Lechtenberg</h3>
                    <p className="text-orange-400 font-medium text-sm mb-1">Co-Founder & Training Facilitator</p>
                    <p className="text-white/60 text-xs mb-3">Chair of the Board, Education Chair</p>
                    <p className="text-white/70 text-sm mb-4">
                      Brett brings years of experience in business development, AI implementation,
                      and marketing automation. As co-founder of Total Success AI and the Master&apos;s Edge
                      Training programs, he&apos;s helped countless businesses achieve breakthrough results.
                    </p>
                    <a
                      href="https://brettlechtenberg.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 text-sm font-medium transition-colors"
                    >
                      BrettLechtenberg.com
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Manny Torres */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="glass-card p-6 border border-orange-500/30"
              >
                <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start">
                  <div className="shrink-0">
                    <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-orange-500 to-purple-600 p-1">
                      <div className="w-full h-full rounded-xl bg-white/10 flex items-center justify-center overflow-hidden">
                        <Image
                          src="/images/manny.png"
                          alt="Manny Torres"
                          width={96}
                          height={96}
                          className="object-cover w-full h-full"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="text-center sm:text-left flex-1">
                    <h3 className="text-xl font-bold text-white mb-1">Manny Torres</h3>
                    <p className="text-orange-400 font-medium text-sm mb-1">Co-Founder & AI Implementation Specialist</p>
                    <p className="text-white/60 text-xs mb-3">Technical AI Expert</p>
                    <p className="text-white/70 text-sm mb-4">
                      Manny is a hands-on AI implementation specialist dedicated to creating solutions
                      that put people first. His expertise in automation, AI workflows, and practical
                      business applications helps teams collaborate better and drive real results.
                    </p>
                    <a
                      href="https://totalsuccessai.com/about"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-orange-400 hover:text-orange-300 text-sm font-medium transition-colors"
                    >
                      TotalSuccessAI.com
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </motion.div>

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

      {/* Training Programs */}
      <section className="relative py-16 overflow-hidden">
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Training Programs
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Our comprehensive training curriculum covers everything you need to grow your business
              in the digital age.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {trainingPrograms.map((program, index) => (
              <motion.div
                key={program.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-8 hover:border-orange-500/50 transition-all duration-300 group"
              >
                {/* Logo or Icon */}
                <div className="mb-6">
                  {program.logo ? (
                    <div className="w-20 h-20 rounded-2xl bg-white p-2 mx-auto">
                      <Image
                        src={program.logo}
                        alt={program.name}
                        width={80}
                        height={80}
                        className="object-contain w-full h-full rounded-xl"
                      />
                    </div>
                  ) : (
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-600 to-orange-500 mx-auto flex items-center justify-center">
                      <program.icon className="w-10 h-10 text-white" />
                    </div>
                  )}
                </div>

                <h3 className="text-xl font-bold text-white text-center mb-3 group-hover:text-orange-300 transition-colors">
                  {program.name}
                </h3>
                <p className="text-white/60 text-sm text-center mb-6 leading-relaxed">
                  {program.description}
                </p>

                {/* Topics */}
                <div className="space-y-2 mb-6">
                  {program.topics.map((topic) => (
                    <div key={topic} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400 shrink-0" />
                      <span className="text-white/70 text-sm">{topic}</span>
                    </div>
                  ))}
                </div>

                <a
                  href={program.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl border border-white/20 hover:border-orange-500/50 hover:bg-orange-500/10 text-white/80 hover:text-white font-medium text-sm transition-all"
                >
                  Learn More
                  <ExternalLink className="w-4 h-4" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Trainings */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-purple-900/30 to-transparent pointer-events-none" />
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/20 border border-orange-500/30 mb-6">
              <Calendar className="w-4 h-4 text-orange-400" />
              <span className="text-sm font-medium text-orange-300">Bi-Monthly Schedule</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Upcoming Training Sessions
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Mark your calendar for our next live training events. Space is limited, so register early!
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {upcomingTrainings.map((training, index) => (
              <motion.div
                key={training.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="glass-card overflow-hidden group hover:border-orange-500/50 transition-all duration-300"
              >
                {/* Event Image Placeholder */}
                <div className="h-48 bg-gradient-to-br from-purple-900/50 to-purple-800/30 relative">
                  {training.image ? (
                    <Image
                      src={training.image}
                      alt={training.title}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-16 h-16 rounded-2xl bg-white/10 mx-auto mb-3 flex items-center justify-center">
                          <Play className="w-8 h-8 text-white/40" />
                        </div>
                        <span className="text-white/40 text-sm">Event Image Coming Soon</span>
                      </div>
                    </div>
                  )}
                  {/* Type Badge */}
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-orange-500 text-white text-xs font-bold">
                    {training.type}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-300 transition-colors">
                    {training.title}
                  </h3>
                  <p className="text-white/60 text-sm mb-4">
                    {training.description}
                  </p>

                  <div className="space-y-2 mb-6">
                    <div className="flex items-center gap-2 text-white/70 text-sm">
                      <Calendar className="w-4 h-4 text-purple-400" />
                      <span>{training.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-white/70 text-sm">
                      <Clock className="w-4 h-4 text-purple-400" />
                      <span>{training.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-white/70 text-sm">
                      <MapPin className="w-4 h-4 text-purple-400" />
                      <span>{training.location}</span>
                    </div>
                  </div>

                  <Link href="/contact">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-purple-600 to-purple-700 hover:from-orange-500 hover:to-orange-600 text-white font-medium text-sm transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      Register Interest
                      <ArrowRight className="w-4 h-4" />
                    </motion.button>
                  </Link>
                </div>
              </motion.div>
            ))}
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
            <div className="flex justify-center gap-6 mb-8">
              <div className="w-20 h-20 rounded-2xl bg-white p-2">
                <Image
                  src="/images/TSAI-logo-final.jpg"
                  alt="Total Success AI"
                  width={80}
                  height={80}
                  className="object-contain w-full h-full rounded-xl"
                />
              </div>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Join Our Online Training Community
            </h2>
            <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto">
              Can&apos;t make it to our live sessions? Join the Total Success AI online training
              group for on-demand access to business marketing, AI, and automation training.
              Learn at your own pace with expert guidance.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://totalsuccessai.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-glow"
                >
                  Explore Total Success AI
                  <ExternalLink className="w-5 h-5" />
                </motion.button>
              </a>
              <a
                href="https://brettlechtenberg.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-secondary"
                >
                  Visit BrettLechtenberg.com
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
