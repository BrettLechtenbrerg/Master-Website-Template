'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  Facebook,
  Youtube,
  Linkedin,
  Instagram,
  MapPin,
  Phone,
  Mail,
  ArrowRight
} from 'lucide-react';

const footerLinks = {
  'Business Resources': [
    { label: 'Business Directory', href: '/directory' },
    { label: 'Small Business Resources', href: '/resources' },
    { label: 'Ribbon Cutting Request', href: '/ribbon-cutting' },
    { label: 'Certificate of Origin', href: '/certificate-of-origin' },
  ],
  'Events': [
    { label: 'Chamber Events', href: '/events/chamber' },
    { label: 'Community Calendar', href: '/events/community' },
    { label: 'Golf Tournament', href: '/golf' },
    { label: 'MYCC', href: '/mycc' },
  ],
  'Membership': [
    { label: 'Join the Chamber', href: '/join' },
    { label: 'Member Directory', href: '/members' },
    { label: 'Member Deals', href: '/deals' },
    { label: 'Member Login', href: '/login' },
  ],
  'About': [
    { label: 'About Us', href: '/about' },
    { label: 'Board of Directors', href: '/board' },
    { label: 'Ambassadors', href: '/ambassadors' },
    { label: 'Contact', href: '/contact' },
  ],
};

const socialLinks = [
  { icon: Facebook, href: 'https://facebook.com/MurrayChamberOfCommerce', label: 'Facebook' },
  { icon: Youtube, href: 'https://youtube.com/@murrayareachamberofcommerc2584', label: 'YouTube' },
  { icon: Linkedin, href: 'https://linkedin.com/company/murray-chamber-of-commerce', label: 'LinkedIn' },
  { icon: Instagram, href: 'https://instagram.com/murrayareachamber', label: 'Instagram' },
];

export default function Footer() {
  return (
    <footer className="footer-glass relative overflow-hidden w-full">
      {/* Top Wave */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />

      {/* Newsletter Section */}
      <div className="border-b border-white/10">
        <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16">
          <div className="glass-card p-8 md:p-12 lg:p-14">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="text-center lg:text-left flex-1">
                <h3 className="text-2xl md:text-3xl font-bold text-white">
                  Stay Connected
                </h3>
                <p className="mt-3 text-white/60 max-w-lg">
                  Get the latest news, event updates, and business resources delivered to your inbox.
                </p>
              </div>
              <form className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto shrink-0 ghl-form">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="input-glass w-full sm:w-72"
                  name="email"
                  required
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="btn-glow whitespace-nowrap"
                >
                  Subscribe
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 lg:py-20">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-10">
          {/* Brand Column */}
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-3 group">
              <motion.div
                className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600 to-orange-500 flex items-center justify-center shadow-lg"
                whileHover={{ scale: 1.05, rotate: -5 }}
              >
                <span className="text-white font-bold text-xl">M</span>
              </motion.div>
              <div>
                <div className="text-white font-bold text-lg leading-tight">Murray Area</div>
                <div className="text-white/60 text-sm">Chamber of Commerce</div>
              </div>
            </Link>

            <p className="mt-6 text-white/50 text-sm leading-relaxed max-w-xs">
              Your hub for innovation and growth. Strengthening Murray&apos;s business community since 1985.
            </p>

            {/* Contact Info */}
            <div className="mt-6 space-y-3">
              <a href="https://maps.google.com" className="flex items-center gap-3 text-sm text-white/60 hover:text-white transition-colors">
                <MapPin className="w-4 h-4 text-purple-400" />
                141 E. 5600 S., Suite 300, Murray, UT 84107
              </a>
              <a href="tel:8012632632" className="flex items-center gap-3 text-sm text-white/60 hover:text-white transition-colors">
                <Phone className="w-4 h-4 text-orange-400" />
                (801) 263-2632
              </a>
              <a href="mailto:info@themurraychamber.com" className="flex items-center gap-3 text-sm text-white/60 hover:text-white transition-colors">
                <Mail className="w-4 h-4 text-purple-400" />
                info@themurraychamber.com
              </a>
            </div>

            {/* Social Links */}
            <div className="mt-6 flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="social-icon"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white font-semibold mb-4">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="footer-link text-sm">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/40 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Murray Area Chamber of Commerce. All rights reserved.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
              <Link href="/terms" className="text-white/40 hover:text-white transition-colors">
                Terms & Policies
              </Link>
              <Link href="/privacy" className="text-white/40 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="https://murraycity.org" target="_blank" className="text-white/40 hover:text-white transition-colors">
                Murray City
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
