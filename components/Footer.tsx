'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import {
  Facebook,
  Youtube,
  Linkedin,
  Instagram,
  MapPin,
  Phone,
  Mail,
} from 'lucide-react';
import NewsletterSignup from './NewsletterSignup';

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

      {/* Newsletter Section - GHL Integrated */}
      <div className="border-b border-white/10">
        <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16">
          <NewsletterSignup variant="card" />
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 lg:py-20">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-10">
          {/* Brand Column */}
          <div className="col-span-2">
            <Link href="/" className="inline-block group">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative"
              >
                <Image
                  src="/images/macc-logo.png"
                  alt="Murray Area Chamber of Commerce"
                  width={200}
                  height={54}
                  className="h-14 w-auto object-contain"
                />
              </motion.div>
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
                  className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 hover:border-purple-500/50 transition-all"
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
                    <Link
                      href={link.href}
                      className="text-sm text-white/60 hover:text-white transition-colors"
                    >
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
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
