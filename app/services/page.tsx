'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { FaRobot, FaCogs, FaGraduationCap, FaChartLine, FaLightbulb, FaUsers, FaCode, FaRocket, FaCheckCircle } from 'react-icons/fa';

export default function Services() {
  const mainServices = [
    {
      icon: <FaRobot size={50} />,
      title: 'AI Consulting',
      subtitle: 'Strategic Guidance for AI Success',
      description: 'Navigate the complex world of AI with expert guidance focused on empowering your team and creating solutions that benefit people—from your employees to your customers.',
      features: [
        'AI Readiness Assessment',
        'Strategic Roadmap Development',
        'Use Case Identification',
        'ROI Analysis & Projections',
        'Technology Stack Recommendations',
        'Risk Assessment & Mitigation',
      ],
      benefits: [
        'Make informed decisions about AI investments',
        'Identify high-value opportunities',
        'Avoid common pitfalls and costly mistakes',
        'Build executive buy-in with clear ROI projections',
      ],
    },
    {
      icon: <FaCogs size={50} />,
      title: 'AI Implementation',
      subtitle: 'From Strategy to Reality',
      description: 'Transform your AI vision into working solutions that empower your team to focus on creativity, relationships, and serving people better.',
      features: [
        'Custom AI Solution Development',
        'System Integration & Deployment',
        'Data Pipeline Architecture',
        'Model Training & Optimization',
        'Testing & Quality Assurance',
        'Production Deployment & Monitoring',
      ],
      benefits: [
        'Reduce time to value with proven methodologies',
        'Ensure seamless integration with existing systems',
        'Build scalable, maintainable solutions',
        'Minimize disruption to operations',
      ],
    },
    {
      icon: <FaGraduationCap size={50} />,
      title: 'AI Training',
      subtitle: 'Empower Individuals, Strengthen Teams, Build Business Capability',
      description: 'Comprehensive training programs that give each person confidence with AI, help teams collaborate more effectively with intelligent tools, and build lasting business capability.',
      features: [
        'Executive AI Awareness Workshops',
        'Technical Team Training',
        'Custom Curriculum Development',
        'Hands-on Implementation Labs',
        'Best Practices & Case Studies',
        'Ongoing Learning Support',
      ],
      benefits: [
        'Build internal AI expertise',
        'Accelerate adoption across your organization',
        'Reduce dependency on external consultants',
        'Foster an innovation-driven culture',
      ],
    },
  ];

  const additionalServices = [
    {
      icon: <FaChartLine />,
      title: 'Performance Optimization',
      description: 'Fine-tune existing AI systems for maximum efficiency and accuracy.',
    },
    {
      icon: <FaLightbulb />,
      title: 'Innovation Workshops',
      description: 'Facilitate ideation sessions to uncover AI opportunities.',
    },
    {
      icon: <FaUsers />,
      title: 'Change Management',
      description: 'Guide your team through AI adoption with proven strategies.',
    },
    {
      icon: <FaCode />,
      title: 'Technical Audits',
      description: 'Evaluate existing AI systems and provide improvement recommendations.',
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-navy via-navy-light to-navy py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our <span className="text-silver">Services</span>
            </h1>
            <p className="text-xl text-silver-light max-w-3xl mx-auto">
              End-to-end AI solutions designed to empower individuals, strengthen teams, and elevate businesses—from strategy to implementation, always putting people first
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {mainServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`mb-20 ${index !== mainServices.length - 1 ? 'border-b border-gray-200 pb-20' : ''}`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                {/* Left Column */}
                <div>
                  <div className="text-navy mb-6">{service.icon}</div>
                  <h2 className="text-4xl font-bold text-navy mb-2">
                    {service.title}
                  </h2>
                  <p className="text-xl text-navy-light font-semibold mb-4">
                    {service.subtitle}
                  </p>
                  <p className="text-lg text-gray-700 mb-8">
                    {service.description}
                  </p>

                  {/* Featured Image */}
                  <div className="rounded-xl overflow-hidden shadow-lg">
                    <Image
                      src={index === 0 ? "/images/AI-Consulting-Nano-1.png" : index === 1 ? "/images/AI-Implementation-Nano-1.png" : "/images/AI-Training-Nano-1.png"}
                      alt={index === 0 ? "AI Consulting Services" : index === 1 ? "AI Implementation Services" : "AI Training Services"}
                      width={800}
                      height={600}
                      className="w-full h-auto"
                    />
                  </div>
                </div>

                {/* Right Column */}
                <div>
                  <div className="bg-silver-light rounded-xl p-8 mb-6">
                    <h3 className="text-2xl font-bold text-navy mb-4">
                      What's Included
                    </h3>
                    <ul className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <FaCheckCircle className="text-navy-light mt-1 flex-shrink-0" />
                          <span className="text-gray-800">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-gradient-to-br from-navy to-navy-light rounded-xl p-8 text-white">
                    <h3 className="text-2xl font-bold mb-4">Key Benefits</h3>
                    <ul className="space-y-3">
                      {service.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <FaCheckCircle className="text-silver mt-1 flex-shrink-0" />
                          <span className="text-silver-light">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-silver-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-navy mb-4">
              Additional Services
            </h2>
            <p className="text-xl text-gray-700">
              Complementary services to support your AI journey
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-navy text-3xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-navy mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-700">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-navy to-navy-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Put People, Teams & Business First?
            </h2>
            <p className="text-xl text-silver-light mb-8">
              Schedule a consultation to discuss how AI can empower your people, strengthen your teams, and elevate your business
            </p>
            <a href="https://www.speaktobrett.com" target="_blank" rel="noopener noreferrer">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-silver text-navy px-10 py-4 rounded-full font-semibold text-lg hover:bg-white transition-all duration-300"
              >
                Schedule Consultation
              </motion.button>
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
