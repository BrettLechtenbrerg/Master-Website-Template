'use client';

import { motion } from 'framer-motion';
import { Users, Award, Calendar, BookOpen, ArrowRight, Heart, Target, Sparkles } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import Footer from '@/components/Footer';
import Link from 'next/link';

const programHighlights = [
  {
    icon: Users,
    title: 'Leadership Development',
    description: 'Students develop essential leadership skills through hands-on community projects and business interactions.',
  },
  {
    icon: BookOpen,
    title: 'Business Education',
    description: 'Learn about entrepreneurship, economics, and how local businesses contribute to community prosperity.',
  },
  {
    icon: Heart,
    title: 'Community Service',
    description: 'Participate in meaningful service projects that make a real difference in Murray.',
  },
  {
    icon: Target,
    title: 'Career Exploration',
    description: 'Connect with local business leaders and explore potential career paths through mentorship.',
  },
];

const activities = [
  { title: 'Monthly Leadership Meetings', description: 'Students meet monthly to plan projects and develop leadership skills.' },
  { title: 'Community Service Projects', description: 'Organize and participate in service projects throughout Murray.' },
  { title: 'Business Shadowing', description: 'Experience real-world business operations with local companies.' },
  { title: 'Annual Youth Business Expo', description: 'Showcase student entrepreneurship projects to the community.' },
  { title: 'City Council Presentations', description: 'Present youth perspectives on community issues to city leaders.' },
  { title: 'Networking Events', description: 'Build professional connections with chamber members and business leaders.' },
];

const testimonials = [
  {
    quote: "MYCC taught me leadership skills I use every day. The mentorship and real-world experience prepared me for college and beyond.",
    name: "Alex Johnson",
    role: "Former MYCC President, 2024",
    school: "Murray High School"
  },
  {
    quote: "Being part of MYCC showed me how businesses work together to strengthen our community. It inspired my career in business.",
    name: "Maria Santos",
    role: "MYCC Alumni, Class of 2023",
    school: "Hillcrest High School"
  },
];

export default function MYCCPage() {
  return (
    <>
      <PageHeader
        badge="Youth Leadership"
        title="Murray Youth Community Council"
        description="Empowering the next generation of Murray business and community leaders through education, service, and mentorship."
        breadcrumbs={[
          { label: 'About', href: '/about' },
          { label: 'Murray Youth Community Council' },
        ]}
      />

      {/* About MYCC */}
      <section className="relative py-16 overflow-hidden">
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <span className="inline-block px-4 py-2 text-sm font-medium text-purple-300 bg-purple-500/20 rounded-full mb-4">
                About MYCC
              </span>
              <h2 className="text-3xl font-bold text-white mb-6">
                Building Tomorrow&apos;s Leaders Today
              </h2>
              <p className="text-white/70 mb-6">
                The Murray Youth Community Council (MYCC) is a partnership between the Murray Area Chamber of Commerce and local schools that provides high school students with hands-on experience in leadership, business, and community service.
              </p>
              <p className="text-white/70 mb-8">
                Founded in 2010, MYCC has helped hundreds of students develop the skills and connections they need to succeed in their future careers while making a positive impact on our community.
              </p>
              <div className="flex flex-wrap gap-6 mb-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-orange-400">
                    15+
                  </div>
                  <div className="text-white/60 text-sm">Years Strong</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-orange-400">
                    500+
                  </div>
                  <div className="text-white/60 text-sm">Alumni</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-orange-400">
                    50+
                  </div>
                  <div className="text-white/60 text-sm">Annual Projects</div>
                </div>
              </div>
              <Link href="/contact">
                <button className="btn-glow">
                  Apply to Join MYCC
                  <ArrowRight className="w-5 h-5" />
                </button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="glass-card p-8"
            >
              <Sparkles className="w-12 h-12 text-purple-400 mb-6" />
              <h3 className="text-xl font-semibold text-white mb-6">Program Eligibility</h3>
              <ul className="space-y-6">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-green-400 text-xs">✓</span>
                  </div>
                  <span className="text-white/70">High school students (grades 9-12) in Murray or surrounding areas</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-green-400 text-xs">✓</span>
                  </div>
                  <span className="text-white/70">Minimum 2.5 GPA and good standing at school</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-green-400 text-xs">✓</span>
                  </div>
                  <span className="text-white/70">Commitment to attend monthly meetings and events</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-green-400 text-xs">✓</span>
                  </div>
                  <span className="text-white/70">Interest in leadership, business, or community service</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-green-400 text-xs">✓</span>
                  </div>
                  <span className="text-white/70">Parent/guardian permission</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Program Highlights */}
      <section className="relative py-16 overflow-hidden">
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white">Program Highlights</h2>
            <p className="mt-4 text-white/60">What MYCC members experience</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {programHighlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-6 text-center"
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

      {/* Activities */}
      <section className="relative py-16 overflow-hidden">
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white">MYCC Activities</h2>
            <p className="mt-4 text-white/60">A year of learning, service, and growth</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activities.map((activity, index) => (
              <motion.div
                key={activity.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-6"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 to-purple-700 flex items-center justify-center mb-4">
                  <Calendar className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white">{activity.title}</h3>
                <p className="mt-2 text-white/60 text-sm">{activity.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative py-16 overflow-hidden">
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white">Student Voices</h2>
            <p className="mt-4 text-white/60">Hear from MYCC alumni</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-8"
              >
                <div className="text-4xl text-purple-400 mb-4">&quot;</div>
                <p className="text-white/80 text-lg italic">{testimonial.quote}</p>
                <div className="mt-6 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-600 to-orange-500 flex items-center justify-center">
                    <span className="text-lg font-bold text-white">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-white">{testimonial.name}</p>
                    <p className="text-white/60 text-sm">{testimonial.role}</p>
                    <p className="text-white/40 text-xs">{testimonial.school}</p>
                  </div>
                </div>
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
            <Award className="w-16 h-16 text-orange-400 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-white">Start Your Leadership Journey</h2>
            <p className="mt-4 text-white/60 max-w-2xl mx-auto">
              Applications for the next MYCC class are now open. Join a community of young leaders making a difference in Murray.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/contact">
                <button className="btn-glow">Apply Now</button>
              </Link>
              <Link href="/contact">
                <button className="btn-secondary">Contact MYCC Advisor</button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}
