'use client';

import { motion } from 'framer-motion';
import {
  FileText,
  Download,
  ExternalLink,
  BookOpen,
  Scale,
  DollarSign,
  Users,
  Briefcase,
  TrendingUp,
  Shield
} from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import Footer from '@/components/Footer';
import Link from 'next/link';

const resourceCategories = [
  {
    title: 'Starting a Business',
    icon: Briefcase,
    resources: [
      { title: 'Business Startup Checklist', type: 'PDF', href: '#' },
      { title: 'Murray Business License Guide', type: 'PDF', href: '#' },
      { title: 'LLC vs Corporation: Which is Right?', type: 'Article', href: '#' },
      { title: 'Finding Your Business Location', type: 'Guide', href: '#' },
    ],
  },
  {
    title: 'Funding & Finance',
    icon: DollarSign,
    resources: [
      { title: 'SBA Loan Programs Overview', type: 'Guide', href: '#' },
      { title: 'Small Business Grant Directory', type: 'Database', href: '#' },
      { title: 'Cash Flow Management Tips', type: 'Article', href: '#' },
      { title: 'Tax Deductions for Small Business', type: 'PDF', href: '#' },
    ],
  },
  {
    title: 'Legal & Compliance',
    icon: Scale,
    resources: [
      { title: 'Utah Employment Laws', type: 'Guide', href: '#' },
      { title: 'Business Insurance Requirements', type: 'Article', href: '#' },
      { title: 'Contract Templates', type: 'Templates', href: '#' },
      { title: 'OSHA Compliance Checklist', type: 'PDF', href: '#' },
    ],
  },
  {
    title: 'Marketing & Growth',
    icon: TrendingUp,
    resources: [
      { title: 'Digital Marketing 101', type: 'Course', href: '#' },
      { title: 'Social Media Strategy Guide', type: 'Guide', href: '#' },
      { title: 'Local SEO Best Practices', type: 'Article', href: '#' },
      { title: 'Customer Retention Strategies', type: 'PDF', href: '#' },
    ],
  },
  {
    title: 'HR & Hiring',
    icon: Users,
    resources: [
      { title: 'Hiring Your First Employee', type: 'Guide', href: '#' },
      { title: 'Employee Handbook Template', type: 'Template', href: '#' },
      { title: 'Workplace Safety Guidelines', type: 'PDF', href: '#' },
      { title: 'Remote Work Policies', type: 'Article', href: '#' },
    ],
  },
  {
    title: 'Cybersecurity',
    icon: Shield,
    resources: [
      { title: 'Small Business Security Checklist', type: 'PDF', href: '#' },
      { title: 'Password Management Guide', type: 'Guide', href: '#' },
      { title: 'Data Protection Basics', type: 'Article', href: '#' },
      { title: 'Phishing Prevention Tips', type: 'Infographic', href: '#' },
    ],
  },
];

const quickLinks = [
  { title: 'LegalShield', description: 'Affordable legal protection for your business', href: '/legalshield', icon: Scale },
  { title: 'Certificate of Origin', description: 'Export documentation services', href: '/certificate-of-origin', icon: FileText },
  { title: 'Good Things Utah', description: 'Media exposure opportunities', href: '/good-things-utah', icon: ExternalLink },
];

export default function ResourcesPage() {
  return (
    <>
      <PageHeader
        badge="Business Resources"
        title="Small Business Resources"
        description="Access free tools, guides, and resources designed to help Murray businesses start, grow, and thrive in today's market."
        breadcrumbs={[
          { label: 'Business Resources' },
        ]}
      />

      {/* Quick Links */}
      <section className="relative py-16 overflow-hidden">
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid md:grid-cols-3 gap-8"
          >
            {quickLinks.map((link, index) => (
              <motion.div
                key={link.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link href={link.href}>
                  <div className="glass-card p-6 group cursor-pointer h-full">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600 to-purple-700 flex items-center justify-center mb-4 shadow-lg">
                      <link.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-white group-hover:text-purple-300 transition-colors">
                      {link.title}
                    </h3>
                    <p className="mt-2 text-white/60 text-sm">{link.description}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="relative py-16 overflow-hidden">
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white">Resource Library</h2>
            <p className="mt-4 text-white/60 max-w-2xl mx-auto">
              Browse our collection of guides, templates, and educational materials.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resourceCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-6"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center shadow-lg">
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{category.title}</h3>
                </div>

                <ul className="space-y-3">
                  {category.resources.map((resource) => (
                    <li key={resource.title}>
                      <a
                        href={resource.href}
                        className="flex items-center justify-between p-3 rounded-xl hover:bg-white/5 transition-colors group"
                      >
                        <div className="flex items-center gap-3">
                          <BookOpen className="w-4 h-4 text-purple-400" />
                          <span className="text-white/80 group-hover:text-white transition-colors text-sm">
                            {resource.title}
                          </span>
                        </div>
                        <span className="text-xs text-white/40 bg-white/5 px-2 py-1 rounded">
                          {resource.type}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 overflow-hidden">
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-strong rounded-3xl p-8 md:p-12 lg:p-16 text-center"
          >
            <Download className="w-16 h-16 text-purple-400 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-white">Need More Resources?</h2>
            <p className="mt-4 text-white/60 max-w-2xl mx-auto">
              Chamber members get exclusive access to premium resources, one-on-one consultations, and personalized business support.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/join">
                <button className="btn-glow">Become a Member</button>
              </Link>
              <Link href="/contact">
                <button className="btn-secondary">Contact Us</button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}
