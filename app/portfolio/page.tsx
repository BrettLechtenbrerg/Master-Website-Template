'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaExpand, FaAward, FaFileAlt, FaPlay, FaStar, FaCheckCircle, FaPaperPlane } from 'react-icons/fa';

export default function Portfolio() {
  const [selectedImage, setSelectedImage] = useState<any>(null);

  // AI Solutions/Services - matching old site structure
  const aiSolutions = [
    {
      id: 1,
      title: 'Voice AI Receptionist',
      description: 'Never miss a call or opportunity again. Our AI receptionist handles appointment scheduling 24/7, increasing your responsiveness and professionalism.',
      icon: <FaStar size={32} />,
    },
    {
      id: 2,
      title: 'Database Reactivation',
      description: 'Revive your contacts and boost your ROI. Transform dormant contacts into active clients with automated, personalized outreach at scale.',
      icon: <FaCheckCircle size={32} />,
    },
    {
      id: 3,
      title: 'Content Creation',
      description: 'Drive traffic and engagement with high-quality, SEO-rich blogs and social posts. Enhance your visibility without the heavy manual workload.',
      icon: <FaPaperPlane size={32} />,
    },
    {
      id: 4,
      title: 'Custom AI Consulting',
      description: 'Your business is unique. Your AI solution should be too. Get personalized AI strategies tailored to your precise business objectives.',
      icon: <FaStar size={32} />,
    },
    {
      id: 5,
      title: 'AI Analytics',
      description: 'Gain actionable insights from your business data. Our AI analytics solutions help you make data-driven decisions to optimize operations and increase profitability.',
      icon: <FaCheckCircle size={32} />,
    },
    {
      id: 6,
      title: 'Workflow Automation',
      description: 'Streamline your business processes with intelligent automation. Reduce manual tasks, eliminate errors, and free up your team to focus on high-value activities.',
      icon: <FaPaperPlane size={32} />,
    },
    {
      id: 7,
      title: 'SaaS Development With AI',
      description: 'Transform your business idea into a scalable SaaS product. We help validate your concept, build MVPs, and develop custom AI-powered solutions tailored to your market.',
      icon: <FaStar size={32} />,
    },
  ];

  const recommendations = [
    {
      id: 1,
      name: 'Thank You Amazing AI Team',
      from: 'GC',
      file: '/images/recommendations/rec1.pdf',
      preview: 'Heartfelt appreciation for outstanding AI consulting and implementation services.',
    },
    {
      id: 2,
      name: 'Thank You Brett',
      from: 'Sam Beard',
      file: '/images/recommendations/rec3.pdf',
      preview: 'Personal testimonial recognizing exceptional AI strategy and support.',
    },
    {
      id: 3,
      name: 'Recommendation Letter',
      from: 'Kristen Campbell, MSI',
      file: '/images/recommendations/rec2.pdf',
      preview: 'Professional recommendation highlighting leadership and technical expertise.',
    },
  ];

  // Custom Solutions for Clients
  const customSolutions = [
    {
      id: 1,
      name: 'Network Wizard',
      description: 'Say goodbye to manual data entry! Network Wizard lets you add networking contacts to your CRM using only your voice. Meet, greet, and store—all hands-free.',
      logo: '/images/solutions/solution1.png',
    },
    {
      id: 2,
      name: 'Marketing Pro',
      description: 'Get 30 years of marketing wisdom in minutes! Marketing Pro crafts battle-tested marketing plans tailored to your business—like having a seasoned expert on speed dial.',
      logo: '/images/solutions/solution2.png',
    },
    {
      id: 3,
      name: 'Worker Bee',
      description: 'Ditch Zapier, Make, and n8n! Worker Bee builds custom software connections and automations that buzz exactly how you need them—no cookie-cutter workflows here.',
      logo: '/images/solutions/solution3.png',
    },
    {
      id: 4,
      name: 'Video Nexus',
      description: 'Spy on the competition—legally! Video Nexus tracks the hottest videos on YouTube, TikTok, and Instagram from the past week in your niche, so you can create content that crushes it.',
      logo: '/images/solutions/solution4.png',
    },
    {
      id: 5,
      name: 'Speak Easy',
      description: 'No coding, no problem! Speak Easy creates ultra-realistic voice chatbots for your site in minutes. Your visitors will think they\'re talking to a real person—because it sounds like one.',
      logo: '/images/solutions/solution5.png',
    },
    {
      id: 6,
      name: 'The Parenting Suite',
      description: 'Parenting is a 24/7 job—now you\'ve got 24/7 backup! The Parenting Suite connects you with world-class resources and a supportive community anytime, anywhere. Expert advice meets parent power.',
      logo: '/images/solutions/solution6.png',
    },
  ];

  // Client Videos - EASY TO UPDATE: Just replace the youtubeId with your video ID
  // To get YouTube ID: From URL "https://www.youtube.com/watch?v=dQw4w9WgXcQ" -> Use "dQw4w9WgXcQ"
  const clientVideos = [
    {
      id: 1,
      clientName: 'Video Visibility Pro',
      campaign: '$97 AI Video Generator',
      description: 'Struggling to get noticed online? This AI-powered video creator turns businesses into content machines—pumping out scroll-stopping videos that attract followers, boost visibility, and drive real business. All for just $97!',
      youtubeId: '5OZhUi4qIsM',
    },
    {
      id: 2,
      clientName: 'Business Outsource Services',
      campaign: 'Bookkeeping & Tax Solutions VSL',
      description: 'Drowning in receipts and tax stress? This video puts expert accounting services in the spotlight—attracting clients who need their books clean, their taxes handled, and their finances finally making sense. Numbers that work for you!',
      youtubeId: 'RSsYj_kEnf0',
    },
    {
      id: 3,
      clientName: 'Biznis Resource',
      campaign: 'Sell Your Business for Top Dollar',
      description: 'Selling your business shouldn\'t feel like giving it away! This video showcases expert exit strategies that attract qualified buyers and drive top-dollar offers—so you get every penny your hard work is worth. Build it, sell it, profit big!',
      youtubeId: 'NzywwRoQRQg',
    },
  ];

  const ImageModal = ({ item, type }: { item: any; type: 'project' | 'recommendation' }) => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={() => setSelectedImage(null)}
    >
      <motion.div
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.9 }}
        className="max-w-4xl w-full max-h-[95vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={() => setSelectedImage(null)}
          className="absolute top-4 right-4 text-white hover:text-silver transition-colors z-10"
        >
          <FaTimes size={32} />
        </button>

        <div className="bg-white rounded-xl overflow-hidden">
          {/* PDF Display for Recommendations */}
          {type === 'recommendation' && (
            <>
              <div className="bg-navy p-4 flex justify-between items-center">
                <div>
                  <h3 className="text-xl font-bold text-white">{item.name}</h3>
                  <p className="text-silver-light">From: {item.from}</p>
                </div>
                <a
                  href={item.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-silver text-navy px-4 py-2 rounded-lg font-semibold hover:bg-white transition-colors text-sm"
                >
                  Open Full PDF
                </a>
              </div>
              <iframe
                src={item.file}
                title={item.name}
                className="w-full h-[70vh] border-0"
              />
            </>
          )}

          {/* Image Display for Projects */}
          {type === 'project' && (
            <>
              <div className="bg-gradient-to-br from-navy to-navy-light flex items-center justify-center relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full max-h-[70vh] object-contain"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.nextElementSibling?.classList.remove('hidden');
                  }}
                />
                <div className="hidden text-center text-white absolute inset-0 flex items-center justify-center py-20">
                  <div>
                    <FaFileAlt size={100} className="mx-auto mb-4 text-silver" />
                    <p className="text-xl">Image Placeholder</p>
                    <p className="text-silver-light mt-2">Project Screenshot</p>
                  </div>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-3xl font-bold text-navy mb-2">{item.title}</h3>
                <p className="text-xl text-navy-light mb-4">{item.category}</p>
                <p className="text-gray-700 mb-6">{item.description}</p>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag: string, index: number) => (
                    <span
                      key={index}
                      className="bg-silver-light text-navy px-4 py-2 rounded-full text-sm font-semibold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      </motion.div>
    </motion.div>
  );

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
              Our <span className="text-silver">Portfolio</span>
            </h1>
            <p className="text-xl text-silver-light max-w-3xl mx-auto">
              See how we've helped people grow, teams collaborate better, and businesses thrive with AI that puts humanity first
            </p>
          </motion.div>
        </div>
      </section>

      {/* Custom Solutions for Clients Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4">
              Here is a Sample of Custom Solutions<br />
              We Have Built For Clients
            </h2>
            <p className="text-xl text-gray-700">
              Tailored AI solutions that empower individuals, enhance teamwork, and drive business success for our clients
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {customSolutions.map((solution, index) => (
              <motion.div
                key={solution.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl border-2 border-silver-light p-8 hover:border-navy hover:shadow-xl transition-all duration-300"
              >
                {/* Logo Container */}
                <div className="flex items-center justify-center mb-6 h-32 bg-silver-light rounded-lg p-4">
                  <div className="relative w-full h-full">
                    <Image
                      src={solution.logo}
                      alt={solution.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>

                {/* Solution Info */}
                <h3 className="text-xl font-bold text-navy mb-3 text-center">
                  {solution.name}
                </h3>
                <p className="text-gray-700 text-center">
                  {solution.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sample Videos for Clients Section */}
      <section className="py-20 bg-silver-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4">
              Sample Videos for Clients
            </h2>
            <p className="text-xl text-gray-700">
              Real-world AI implementations and success stories from our clients
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {clientVideos.map((video, index) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all border-2 border-silver-light hover:border-navy"
              >
                {/* YouTube Video Embed */}
                <div className="relative aspect-video bg-black">
                  <iframe
                    src={`https://www.youtube.com/embed/${video.youtubeId}`}
                    title={video.campaign}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                  ></iframe>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <FaPlay className="text-navy-light" />
                    <h3 className="text-lg font-bold text-navy">
                      {video.clientName}
                    </h3>
                  </div>
                  <h4 className="text-md font-semibold text-navy-light mb-2">
                    {video.campaign}
                  </h4>
                  <p className="text-gray-700 text-sm">
                    {video.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Letters of Recommendation Section */}
      <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4">
                <FaAward className="inline-block mr-3 text-navy-light" />
                Letters of Recommendation
              </h2>
              <p className="text-xl text-gray-700">
                Testimonials from clients who trust our AI solutions
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {recommendations.map((rec, index) => (
                <motion.div
                  key={rec.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow cursor-pointer group"
                  onClick={() => setSelectedImage(rec)}
                >
                  {/* PDF Preview */}
                  <div className="bg-gradient-to-br from-navy to-navy-light aspect-[3/4] flex items-center justify-center relative overflow-hidden">
                    <iframe
                      src={`${rec.file}#toolbar=0&navpanes=0&scrollbar=0`}
                      title={rec.name}
                      className="w-full h-full pointer-events-none"
                      style={{ transform: 'scale(1)', transformOrigin: 'top left' }}
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity text-center">
                        <FaExpand className="text-white mx-auto mb-2" size={32} />
                        <p className="text-white font-semibold">Click to View</p>
                      </div>
                    </div>
                  </div>

                  <div className="p-4">
                    <h3 className="text-lg font-bold text-navy mb-1">
                      {rec.name}
                    </h3>
                    <p className="text-sm text-navy-light">From: {rec.from}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

      {/* AI Solutions Section */}
        <section className="py-20 bg-gradient-to-br from-navy via-navy-light to-navy">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                AI Solutions That Empower Your People, Teams & Business
              </h2>
              <p className="text-silver-light text-lg md:text-xl max-w-3xl mx-auto mb-8">
                We help service-based businesses empower their people with AI companions that handle routine tasks—freeing individuals to focus on creativity, teams to build stronger relationships, and businesses to serve customers at the highest level. Our 3-pronged approach ensures everyone benefits.
              </p>
              <Link href="/services">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-silver text-navy px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white transition-all duration-300"
                >
                  Explore Our Services
                </motion.button>
              </Link>
            </motion.div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
              {aiSolutions.slice(0, 6).map((solution, index) => (
                <motion.div
                  key={solution.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-navy/40 backdrop-blur-sm border border-silver/20 rounded-xl p-6 hover:bg-navy/60 hover:border-silver/40 transition-all duration-300"
                >
                  <div className="text-silver mb-4">
                    {solution.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {solution.title}
                  </h3>
                  <p className="text-silver-light leading-relaxed">
                    {solution.description}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Centered 7th Item */}
            <div className="flex justify-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="bg-navy/40 backdrop-blur-sm border border-silver/20 rounded-xl p-6 hover:bg-navy/60 hover:border-silver/40 transition-all duration-300 max-w-md w-full"
              >
                <div className="text-silver mb-4">
                  {aiSolutions[6].icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {aiSolutions[6].title}
                </h3>
                <p className="text-silver-light leading-relaxed">
                  {aiSolutions[6].description}
                </p>
              </motion.div>
            </div>
          </div>
        </section>

      {/* Additional Services Section */}
      <section className="py-20 bg-gradient-to-br from-[#0f1419] via-[#1a1a2e] to-navy">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Additional Services
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {[
              { name: 'Custom Website Build', id: 1 },
              { name: 'AI Chatbot Integration', id: 2 },
              { name: 'Custom Data Integration', id: 3 },
              { name: 'Advanced Training Sessions', id: 4 },
            ].map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-[#2a2a3e] rounded-xl p-6 flex items-center justify-between hover:bg-[#3a3a4e] transition-colors duration-300"
              >
                <h3 className="text-xl font-semibold text-white">
                  {service.name}
                </h3>
                <span className="text-silver font-medium whitespace-nowrap ml-4">
                  Call for pricing
                </span>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center"
          >
            <p className="text-silver-light text-lg mb-6 max-w-3xl mx-auto">
              Not sure which plan is right for you? Schedule a free consultation to discuss your specific needs.
            </p>
            <a href="https://www.speaktobrett.com" target="_blank" rel="noopener noreferrer">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-silver text-navy px-8 py-4 rounded-full font-semibold text-lg hover:bg-white transition-all duration-300"
              >
                Book Free Consultation
              </motion.button>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selectedImage && (
          <ImageModal
            item={selectedImage}
            type='recommendation'
          />
        )}
      </AnimatePresence>
    </div>
  );
}
