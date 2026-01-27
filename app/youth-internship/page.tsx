'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import {
  Users,
  Award,
  Briefcase,
  BookOpen,
  ArrowRight,
  Heart,
  Target,
  Sparkles,
  GraduationCap,
  Building2,
  Handshake,
  CheckCircle,
  Clock,
  Calendar,
  Star
} from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import Footer from '@/components/Footer';
import Link from 'next/link';

const programBenefits = [
  {
    icon: Briefcase,
    title: 'Real Work Experience',
    description: 'Students gain hands-on professional experience working alongside industry professionals in actual business settings.',
  },
  {
    icon: GraduationCap,
    title: 'Academic Credit',
    description: 'Earn school credit while learning valuable career skills through our partnership with Murray School District.',
  },
  {
    icon: Handshake,
    title: 'Mentorship',
    description: 'Each intern is paired with a dedicated mentor who guides their professional development throughout the program.',
  },
  {
    icon: Target,
    title: 'Career Exploration',
    description: 'Explore different industries and career paths to help make informed decisions about future education and careers.',
  },
];

const howItWorks = [
  { step: '1', title: 'Apply Through Your School', description: 'Work with your school counselor to submit an internship application.' },
  { step: '2', title: 'Interview with Businesses', description: 'Get matched with participating Chamber member businesses for interviews.' },
  { step: '3', title: 'Begin Your Internship', description: 'Start working alongside professionals in your area of interest.' },
  { step: '4', title: 'Learn & Grow', description: 'Develop skills, build your resume, and earn academic credit.' },
  { step: '5', title: 'Complete & Celebrate', description: 'Graduate the program with real experience and professional references.' },
];

const businessBenefits = [
  'Access motivated, pre-screened student talent',
  'Develop future employees and community leaders',
  'Give back to the Murray community',
  'Fresh perspectives and enthusiasm in your workplace',
  'Structured program with school district support',
  'Tax benefits for participating businesses',
];

const industryAreas = [
  { name: 'Healthcare', icon: Heart },
  { name: 'Technology', icon: Target },
  { name: 'Finance', icon: Building2 },
  { name: 'Retail & Hospitality', icon: Users },
  { name: 'Professional Services', icon: Briefcase },
  { name: 'Trades & Manufacturing', icon: Award },
];

export default function YouthInternshipPage() {
  return (
    <>
      <PageHeader
        badge="Youth Programs"
        title="Youth Internship Program"
        description="Preparing Murray's next generation for success through real-world work experience. A unique partnership between the Murray Area Chamber of Commerce and Murray School District."
        breadcrumbs={[
          { label: 'About', href: '/about' },
          { label: 'Youth Internship Program' },
        ]}
      />

      {/* About the Program */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-transparent pointer-events-none" />
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <span className="inline-block px-4 py-2 text-sm font-medium text-purple-300 bg-purple-500/20 rounded-full mb-4">
                Chamber & School District Partnership
              </span>
              <h2 className="text-3xl font-bold text-white mb-6">
                Investing in Murray&apos;s Future Workforce
              </h2>
              <p className="text-white/70 mb-6">
                The Murray Area Chamber of Commerce has partnered with Murray School District to create
                a groundbreaking youth internship program that connects local high school students with
                real-world work opportunities at Chamber member businesses.
              </p>
              <p className="text-white/70 mb-8">
                This innovative program bridges the gap between classroom learning and career readiness,
                giving students valuable experience while helping local businesses develop the next generation
                of Murray&apos;s workforce.
              </p>
              <div className="flex flex-wrap gap-6 mb-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-orange-400">
                    50+
                  </div>
                  <div className="text-white/60 text-sm">Partner Businesses</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-orange-400">
                    200+
                  </div>
                  <div className="text-white/60 text-sm">Students Placed</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-orange-400">
                    15+
                  </div>
                  <div className="text-white/60 text-sm">Industry Areas</div>
                </div>
              </div>
              <Link href="/contact">
                <button className="btn-glow">
                  Learn More
                  <ArrowRight className="w-5 h-5" />
                </button>
              </Link>
            </motion.div>

            {/* Image Placeholder */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="relative"
            >
              <div className="glass-card p-4 aspect-[4/3] relative overflow-hidden">
                <Image
                  src="/images/youth-internship-1.jpg"
                  alt="Students collaborating in a professional setting"
                  fill
                  className="object-cover rounded-xl"
                />
              </div>
              <div className="absolute -top-4 -right-4 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500 to-orange-500 shadow-lg">
                <span className="text-white font-bold text-sm">New Program</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Program Benefits for Students */}
      <section className="relative py-16 overflow-hidden">
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white">Benefits for Students</h2>
            <p className="mt-4 text-white/60">What interns gain from the program</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {programBenefits.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-6 text-center hover:border-purple-500/50 transition-all"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-600 to-orange-500 mx-auto mb-4 flex items-center justify-center shadow-lg">
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-white/60 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-purple-900/30 to-transparent pointer-events-none" />
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image Placeholder */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="relative"
            >
              <div className="glass-card p-4 aspect-video relative overflow-hidden">
                <Image
                  src="/images/youth-internship-2.jpg"
                  alt="Young professionals working together in an office"
                  fill
                  className="object-cover rounded-xl"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <h2 className="text-3xl font-bold text-white mb-6">How the Program Works</h2>
              <p className="text-white/70 mb-8">
                Our streamlined process makes it easy for students to find meaningful internship opportunities.
              </p>
              <div className="space-y-4">
                {howItWorks.map((item, index) => (
                  <motion.div
                    key={item.step}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-600 to-orange-500 flex items-center justify-center shrink-0">
                      <span className="text-white font-bold">{item.step}</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">{item.title}</h4>
                      <p className="text-white/60 text-sm">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Industry Areas */}
      <section className="relative py-16 overflow-hidden">
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white">Explore Different Industries</h2>
            <p className="mt-4 text-white/60">Internship opportunities available across many fields</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {industryAreas.map((industry, index) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                className="glass-card p-4 text-center hover:border-orange-500/50 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600/50 to-orange-500/50 mx-auto mb-3 flex items-center justify-center">
                  <industry.icon className="w-6 h-6 text-white" />
                </div>
                <p className="text-white text-sm font-medium">{industry.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits for Businesses */}
      <section className="relative py-16 overflow-hidden">
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <span className="inline-block px-4 py-2 text-sm font-medium text-orange-300 bg-orange-500/20 rounded-full mb-4">
                For Chamber Members
              </span>
              <h2 className="text-3xl font-bold text-white mb-6">
                Benefits for Participating Businesses
              </h2>
              <p className="text-white/70 mb-6">
                Hosting an intern isn&apos;t just good for the community—it&apos;s good for your business.
                Our program provides structured support to make hosting an intern easy and rewarding.
              </p>
              <ul className="space-y-3 mb-8">
                {businessBenefits.map((benefit, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.05 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
                    <span className="text-white/80">{benefit}</span>
                  </motion.li>
                ))}
              </ul>
              <Link href="/contact">
                <button className="btn-glow">
                  Become a Host Business
                  <ArrowRight className="w-5 h-5" />
                </button>
              </Link>
            </motion.div>

            {/* Image Placeholder */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="relative"
            >
              <div className="glass-card p-4 aspect-[4/3] relative overflow-hidden">
                <Image
                  src="/images/youth-internship-3.jpg"
                  alt="Business professionals mentoring young team members"
                  fill
                  className="object-cover rounded-xl"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Partnership Info */}
      <section className="relative py-16 overflow-hidden">
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="glass-card p-8 border border-purple-500/30"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-600 to-purple-700 mb-6 flex items-center justify-center">
                <GraduationCap className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">For Students & Parents</h3>
              <p className="text-white/70 mb-6">
                Interested in joining the program? Talk to your school counselor about internship
                opportunities through the Chamber&apos;s Youth Internship Program. Applications are
                accepted throughout the school year.
              </p>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-2 text-white/60">
                  <Clock className="w-4 h-4 text-purple-400" />
                  <span>Flexible hours that work with school schedules</span>
                </div>
                <div className="flex items-center gap-2 text-white/60">
                  <Calendar className="w-4 h-4 text-purple-400" />
                  <span>Semester-long and summer placements available</span>
                </div>
                <div className="flex items-center gap-2 text-white/60">
                  <Star className="w-4 h-4 text-purple-400" />
                  <span>Earn academic credit toward graduation</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="glass-card p-8 border border-orange-500/30"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 mb-6 flex items-center justify-center">
                <Handshake className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Murray School District Partnership</h3>
              <p className="text-white/70 mb-6">
                This program is made possible through our strong partnership with Murray School District.
                Together, we&apos;re preparing students for success by combining classroom education with
                real-world experience.
              </p>
              <p className="text-white/60 text-sm">
                The Murray Area Chamber of Commerce is proud to work alongside educators and administrators
                to create meaningful opportunities for Murray&apos;s youth. Our shared commitment to workforce
                development strengthens the entire community.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-16 overflow-hidden">
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-strong rounded-3xl p-8 md:p-12 text-center"
          >
            <Sparkles className="w-16 h-16 text-orange-400 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-white">Invest in Murray&apos;s Future</h2>
            <p className="mt-4 text-white/60 max-w-2xl mx-auto">
              Whether you&apos;re a student looking for experience, a parent exploring opportunities for your child,
              or a business wanting to make a difference—we&apos;d love to hear from you.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/contact">
                <button className="btn-glow">
                  Get Involved
                  <ArrowRight className="w-5 h-5" />
                </button>
              </Link>
              <Link href="/contact">
                <button className="btn-secondary">Contact Program Coordinator</button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}
