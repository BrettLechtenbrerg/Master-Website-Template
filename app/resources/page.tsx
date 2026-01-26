'use client';

import { motion } from 'framer-motion';
import {
  FileText,
  ExternalLink,
  Building2,
  MapPin,
  Landmark,
  Globe,
  Scale,
  Briefcase,
  Utensils,
  Users,
  DollarSign,
  Wine,
  ClipboardList,
  Building,
  BadgeCheck
} from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import Footer from '@/components/Footer';
import Link from 'next/link';

// Resource categories matching the old Murray Chamber website
const resourceCategories = [
  {
    title: 'Murray City Resources',
    icon: Building2,
    color: 'from-purple-600 to-purple-700',
    resources: [
      {
        title: 'Business Licensing',
        description: 'Every business in Murray must have one. Apply for or renew licenses through this portal.',
        href: 'https://www.murray.utah.gov/361/Business-Licensing',
        icon: BadgeCheck,
      },
      {
        title: 'Community & Economic Development',
        description: 'Access zoning information, permits, and planning assistance for new or expanding locations.',
        href: 'https://www.murray.utah.gov/158/Community-Economic-Development',
        icon: Building,
      },
      {
        title: 'Departments Directory',
        description: 'Contact Building, Planning, Public Works, or Finance departments for inspections and city services.',
        href: 'https://www.murray.utah.gov/8/Departments',
        icon: ClipboardList,
      },
    ],
  },
  {
    title: 'Salt Lake County Resources',
    icon: MapPin,
    color: 'from-orange-500 to-orange-600',
    resources: [
      {
        title: 'County Business Resources',
        description: 'Comprehensive county support including registration, permitting, workplace resources, and tax programs.',
        href: 'https://www.saltlakecounty.gov/business-resources/',
        icon: Briefcase,
      },
      {
        title: 'Food & Facility Permits',
        description: 'Required for restaurants, food trucks, bakeries, and catering businesses. Includes health inspection scheduling.',
        href: 'https://www.saltlakecounty.gov/health/food-protection/permits/',
        icon: Utensils,
      },
      {
        title: 'Economic Development',
        description: 'Workforce support, funding connections, and regional partnership assistance.',
        href: 'https://www.saltlakecounty.gov/regional-development/economic-development/',
        icon: DollarSign,
      },
    ],
  },
  {
    title: 'State of Utah Resources',
    icon: Landmark,
    color: 'from-purple-600 to-purple-700',
    resources: [
      {
        title: 'Business Grants & Incentives',
        description: "Governor's Office of Economic Opportunity provides grants, incentives, and growth programs.",
        href: 'https://business.utah.gov/',
        icon: DollarSign,
      },
      {
        title: 'Business Registration',
        description: 'Division of Corporations & Commercial Code handles business name, LLC, and corporation registration.',
        href: 'https://corporations.utah.gov/',
        icon: FileText,
      },
      {
        title: 'Tax Registration',
        description: 'Utah State Tax Commission TAP Registration for sales tax, employer tax, and business tax accounts.',
        href: 'https://tax.utah.gov/utah-taxes/registration',
        icon: ClipboardList,
      },
      {
        title: 'Employer Resources',
        description: 'Department of Workforce Services offers new hire reporting, employee recruitment, and job programs.',
        href: 'https://jobs.utah.gov/employer/index.html',
        icon: Users,
      },
      {
        title: 'Liquor Permits',
        description: 'Department of Alcoholic Beverage Services handles liquor and event alcohol permit applications.',
        href: 'https://abs.utah.gov/',
        icon: Wine,
      },
    ],
  },
  {
    title: 'Federal Resources',
    icon: Globe,
    color: 'from-orange-500 to-orange-600',
    resources: [
      {
        title: 'Small Business Administration (SBA)',
        description: 'Provides help with SBA services including funding programs, counseling, federal contracting certifications, and disaster recovery.',
        href: 'https://www.sba.gov/district/utah',
        icon: Briefcase,
      },
    ],
  },
];

// Chamber-specific quick links
const chamberServices = [
  {
    title: 'LegalShield',
    description: 'Affordable legal protection for your business',
    href: 'https://shieldbenefits.com/murraychamber/overview',
    icon: Scale,
    external: true,
  },
  {
    title: 'Certificate of Origin',
    description: 'Export documentation services for international trade',
    href: '/certificate-of-origin',
    icon: FileText,
  },
  {
    title: 'Good Things Utah',
    description: 'Media exposure opportunities for your business',
    href: '/good-things-utah',
    icon: ExternalLink,
  },
  {
    title: 'Ribbon Cutting Request',
    description: 'Celebrate your grand opening or milestone with the Chamber',
    href: '/ribbon-cutting',
    icon: BadgeCheck,
  },
];

export default function ResourcesPage() {
  return (
    <>
      <PageHeader
        badge="Business Resources"
        title="Small Business Resources"
        description="Access essential tools, guides, and government resources designed to help Murray businesses start, grow, and thrive."
        breadcrumbs={[{ label: 'Business Resources' }]}
      />

      {/* Chamber Services Quick Links */}
      <section className="relative py-16 overflow-hidden">
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white">Chamber Services</h2>
            <p className="mt-4 text-white/60 max-w-2xl mx-auto">
              Exclusive resources and services available through the Murray Area Chamber of Commerce.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {chamberServices.map((service, index) => {
              const CardContent = (
                <div className="glass-card p-6 group cursor-pointer h-full hover:border-purple-500/50 transition-all">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600 to-purple-700 flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white group-hover:text-purple-300 transition-colors flex items-center gap-2">
                    {service.title}
                    {service.external && <ExternalLink className="w-4 h-4 text-white/40" />}
                  </h3>
                  <p className="mt-2 text-white/60 text-sm">{service.description}</p>
                </div>
              );

              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {service.external ? (
                    <a href={service.href} target="_blank" rel="noopener noreferrer">
                      {CardContent}
                    </a>
                  ) : (
                    <Link href={service.href}>
                      {CardContent}
                    </Link>
                  )}
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Government Resources by Level */}
      <section className="relative py-16 overflow-hidden">
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white">Government Resources</h2>
            <p className="mt-4 text-white/60 max-w-2xl mx-auto">
              Essential links to city, county, state, and federal resources for business licensing, permits, and support programs.
            </p>
          </motion.div>

          <div className="space-y-12">
            {resourceCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: categoryIndex * 0.15 }}
              >
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center shadow-lg`}>
                    <category.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                </div>

                {/* Resources Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.resources.map((resource, index) => (
                    <motion.a
                      key={resource.title}
                      href={resource.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: categoryIndex * 0.15 + index * 0.05 }}
                      className="glass-card p-6 group cursor-pointer hover:border-orange-500/50 transition-all"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-orange-500/20 transition-colors">
                          <resource.icon className="w-5 h-5 text-orange-400" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2">
                            <h4 className="text-lg font-semibold text-white group-hover:text-orange-300 transition-colors">
                              {resource.title}
                            </h4>
                            <ExternalLink className="w-4 h-4 text-white/40 group-hover:text-orange-400 transition-colors flex-shrink-0" />
                          </div>
                          <p className="mt-2 text-white/60 text-sm leading-relaxed">
                            {resource.description}
                          </p>
                        </div>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="relative py-16 overflow-hidden">
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-strong rounded-3xl p-8 md:p-12 lg:p-16"
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold text-white">Need Help Finding Resources?</h2>
                <p className="mt-4 text-white/60">
                  The Murray Area Chamber of Commerce is here to help connect you with the right resources for your business needs. Reach out to us for personalized assistance.
                </p>
                <div className="mt-6 space-y-3">
                  <div className="flex items-center gap-3 text-white/80">
                    <Building2 className="w-5 h-5 text-purple-400" />
                    <span>141 E. 5600 S., Suite 300, Murray, UT 84107</span>
                  </div>
                  <div className="flex items-center gap-3 text-white/80">
                    <ExternalLink className="w-5 h-5 text-purple-400" />
                    <a href="tel:801-263-2632" className="hover:text-purple-300 transition-colors">
                      801-263-2632
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-end">
                <Link href="/join">
                  <button className="btn-glow w-full sm:w-auto">Become a Member</button>
                </Link>
                <Link href="/contact">
                  <button className="btn-secondary w-full sm:w-auto">Contact Us</button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}
