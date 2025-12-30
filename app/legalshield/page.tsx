'use client';

import { motion } from 'framer-motion';
import { Shield, Check, Phone, FileText, Scale, ArrowRight, Users, Building2 } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import Footer from '@/components/Footer';
import Link from 'next/link';

const businessBenefits = [
  'Legal consultations for business matters',
  'Contract and document review',
  'Debt collection assistance',
  'Defense of civil lawsuits',
  'IRS audit protection',
  'Access to a network of attorneys',
];

const personalBenefits = [
  'Will preparation and updates',
  'Traffic ticket assistance',
  'Family law consultation',
  'Real estate document review',
  'Identity theft protection',
  '24/7 emergency legal access',
];

const plans = [
  {
    name: 'Business Plan',
    price: '$49',
    period: 'month',
    description: 'Comprehensive legal protection for your business',
    features: businessBenefits,
    icon: Building2,
    color: 'from-purple-600 to-purple-700',
  },
  {
    name: 'Personal Plan',
    price: '$24.95',
    period: 'month',
    description: 'Legal coverage for you and your family',
    features: personalBenefits,
    icon: Users,
    color: 'from-orange-500 to-orange-600',
  },
];

const faqs = [
  {
    question: 'What is LegalShield?',
    answer: 'LegalShield is a prepaid legal services provider that gives individuals and businesses access to quality legal advice and representation at an affordable monthly rate.',
  },
  {
    question: 'How does the Chamber partnership work?',
    answer: 'Chamber members receive special group rates on LegalShield plans, plus dedicated support from a local LegalShield representative who understands small business needs.',
  },
  {
    question: 'Can I use any attorney?',
    answer: 'LegalShield connects you with a provider law firm in your area that specializes in your specific legal need. All attorneys are pre-screened and highly qualified.',
  },
  {
    question: 'Is there a waiting period?',
    answer: 'No waiting period! Your coverage begins immediately upon enrollment, so you can access legal services right away.',
  },
];

export default function LegalShieldPage() {
  return (
    <>
      <PageHeader
        badge="Partner Benefit"
        title="LegalShield"
        description="Affordable legal protection for your business and family. Murray Area Chamber members receive exclusive group rates on LegalShield plans."
        breadcrumbs={[
          { label: 'Business Resources', href: '/resources' },
          { label: 'LegalShield' },
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
              <span className="inline-block px-4 py-2 text-sm font-medium text-purple-300 bg-purple-500/20 rounded-full mb-4">
                Member Benefit
              </span>
              <h2 className="text-3xl font-bold text-white mb-6">
                Legal Protection Made Affordable
              </h2>
              <p className="text-white/70 mb-6">
                Every business faces legal questions. Contract disputes, employee issues, regulatory compliance—the list goes on. But legal help doesn&apos;t have to be expensive or complicated.
              </p>
              <p className="text-white/70 mb-8">
                Through our partnership with LegalShield, Murray Area Chamber members can access quality legal services at a fraction of traditional legal costs. Get the peace of mind knowing that legal help is just a phone call away.
              </p>

              <div className="flex items-center gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-orange-400">
                    45+
                  </div>
                  <div className="text-white/60 text-sm">Years of Service</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-orange-400">
                    4.5M+
                  </div>
                  <div className="text-white/60 text-sm">Members Nationwide</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-orange-400">
                    24/7
                  </div>
                  <div className="text-white/60 text-sm">Emergency Access</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="glass-card p-8 text-center"
            >
              <Shield className="w-24 h-24 text-purple-400 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">Protected by LegalShield</h3>
              <p className="text-white/60 mb-6">
                Don&apos;t wait for a legal emergency. Get proactive protection for your business and family today.
              </p>
              <Link href="/contact">
                <button className="btn-glow">
                  Get Started Today
                  <ArrowRight className="w-5 h-5" />
                </button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Plans */}
      <section className="relative py-16 overflow-hidden">
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white">Choose Your Plan</h2>
            <p className="mt-4 text-white/60">Chamber members receive exclusive group rates.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-8"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${plan.color} mx-auto mb-4 flex items-center justify-center shadow-lg`}>
                  <plan.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white text-center">{plan.name}</h3>
                <p className="text-white/60 text-sm text-center mt-2">{plan.description}</p>

                <div className="text-center mt-6">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-white/60">/{plan.period}</span>
                </div>

                <ul className="mt-6 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
                      <span className="text-white/70 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link href="/contact">
                  <button className="btn-primary w-full mt-6">
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="relative py-16 overflow-hidden">
        <div className="relative z-10 w-full max-w-3xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white">Frequently Asked Questions</h2>
          </motion.div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-6"
              >
                <h3 className="font-semibold text-white mb-2">{faq.question}</h3>
                <p className="text-white/60 text-sm">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="relative py-16 overflow-hidden">
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-strong rounded-3xl p-8 md:p-12 text-center"
          >
            <Scale className="w-16 h-16 text-purple-400 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-white">Ready to Get Protected?</h2>
            <p className="mt-4 text-white/60 max-w-2xl mx-auto">
              Contact us to learn more about LegalShield plans and how to enroll as a Chamber member.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/contact">
                <button className="btn-glow">Contact Us</button>
              </Link>
              <a href="tel:8012632632">
                <button className="btn-secondary">
                  <Phone className="w-5 h-5" />
                  (801) 263-2632
                </button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}
