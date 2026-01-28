'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import {
  ChevronDown,
  Menu,
  X,
  Building2,
  Calendar,
  Users,
  Newspaper,
  Info,
  Mail,
  LogIn,
  Heart
} from 'lucide-react';

// Navigation structure matching current site
const navigationItems = [
  {
    label: 'Business Resources',
    icon: Building2,
    items: [
      { label: 'Business Directory', href: '/directory' },
      { label: 'Small Business Resources', href: '/resources' },
      { label: 'Ribbon Cutting Request', href: '/ribbon-cutting' },
      { label: 'Certificate of Origin', href: '/certificate-of-origin' },
      { label: 'Good Things Utah', href: '/good-things-utah' },
      { label: 'LegalShield', href: '/legalshield' },
    ],
  },
  {
    label: 'Events',
    icon: Calendar,
    items: [
      { label: 'Events Calendar', href: '/events' },
      { label: 'Chamber Events', href: '/events/chamber' },
      { label: 'Weekly Events', href: '/events/weekly' },
      { label: 'Monthly Events', href: '/events/monthly' },
      { label: 'Annual Events', href: '/events/annual' },
      { label: 'Community Calendar', href: '/events/community' },
      { label: 'Professional Development', href: '/events/professional-development' },
    ],
  },
  {
    label: 'Membership',
    icon: Users,
    items: [
      { label: 'Member Directory', href: '/directory' },
      { label: 'Join The Chamber', href: '/join' },
      { label: 'Chamber Sponsors', href: '/sponsors' },
      { label: 'Member to Member Deals', href: '/deals' },
    ],
  },
  {
    label: 'News',
    icon: Newspaper,
    items: [
      { label: 'Chamber News', href: '/news/chamber' },
      { label: 'Community News', href: '/news/community' },
    ],
  },
  {
    label: 'Community',
    icon: Heart,
    items: [
      { label: 'Friday Connections', href: '/community/friday-connections' },
      { label: 'Business Spotlight', href: '/community/business-spotlight' },
      { label: 'Love Local', href: '/community/love-local' },
    ],
  },
  {
    label: 'About Us',
    icon: Info,
    items: [
      { label: 'About Us', href: '/about' },
      { label: 'Board', href: '/board' },
      { label: 'Ambassadors', href: '/ambassadors' },
      { label: 'Youth Internship Program', href: '/youth-internship' },
    ],
  },
  {
    label: 'Contact',
    href: '/contact',
    icon: Mail,
  },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
            ? 'nav-glass py-3'
            : 'bg-transparent py-5'
          }`}
      >
        <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center group">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 400 }}
                className="relative h-12 w-auto"
              >
                <Image
                  src="/images/macc-logo.png"
                  alt="Murray Area Chamber of Commerce"
                  width={180}
                  height={48}
                  className="h-12 w-auto object-contain"
                  priority
                />
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navigationItems.map((item) => (
                <div
                  key={item.label}
                  className="nav-item relative"
                  onMouseEnter={() => setActiveDropdown(item.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  {item.href ? (
                    <Link href={item.href} className="nav-link flex items-center gap-1.5 px-3 py-2 text-sm xl:text-base whitespace-nowrap">
                      {item.label}
                    </Link>
                  ) : (
                    <button className="nav-link flex items-center gap-1.5 px-3 py-2 text-sm xl:text-base whitespace-nowrap">
                      {item.label}
                      <ChevronDown className="w-3.5 h-3.5 xl:w-4 xl:h-4 transition-transform duration-300"
                        style={{ transform: activeDropdown === item.label ? 'rotate(180deg)' : 'rotate(0)' }}
                      />
                    </button>
                  )}

                  {/* Dropdown */}
                  {item.items && (
                    <AnimatePresence>
                      {activeDropdown === item.label && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          transition={{ duration: 0.2 }}
                          className="dropdown-menu"
                        >
                          {item.items.map((subItem, idx) => (
                            <motion.div
                              key={subItem.label}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: idx * 0.05 }}
                            >
                              <Link href={subItem.href} className="dropdown-item">
                                {subItem.label}
                              </Link>
                            </motion.div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center gap-4">
              <Link
                href="/login"
                className="flex items-center gap-2 text-white/80 hover:text-white transition-colors"
              >
                <LogIn className="w-4 h-4" />
                Member Login
              </Link>
              <Link href="/join">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-glow"
                >
                  Join Now
                </motion.button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-xl glass"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-white" />
              ) : (
                <Menu className="w-6 h-6 text-white" />
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)} />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="absolute right-0 top-0 bottom-0 w-80 glass-strong p-6 pt-24 overflow-y-auto"
            >
              <div className="space-y-2">
                {navigationItems.map((item) => (
                  <div key={item.label}>
                    {item.href ? (
                      <Link
                        href={item.href}
                        className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/10 transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <item.icon className="w-5 h-5 text-purple-400" />
                        <span className="text-white">{item.label}</span>
                      </Link>
                    ) : (
                      <div>
                        <button
                          onClick={() => setActiveDropdown(activeDropdown === item.label ? null : item.label)}
                          className="flex items-center justify-between w-full p-3 rounded-xl hover:bg-white/10 transition-colors"
                        >
                          <div className="flex items-center gap-3">
                            <item.icon className="w-5 h-5 text-purple-400" />
                            <span className="text-white">{item.label}</span>
                          </div>
                          <ChevronDown
                            className={`w-4 h-4 text-white/60 transition-transform ${activeDropdown === item.label ? 'rotate-180' : ''
                              }`}
                          />
                        </button>
                        <AnimatePresence>
                          {activeDropdown === item.label && item.items && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="overflow-hidden ml-8 mt-1 space-y-1"
                            >
                              {item.items.map((subItem) => (
                                <Link
                                  key={subItem.label}
                                  href={subItem.href}
                                  className="block p-2 pl-4 text-white/70 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
                                  onClick={() => setMobileMenuOpen(false)}
                                >
                                  {subItem.label}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-8 border-t border-white/10 space-y-4">
                <Link
                  href="/login"
                  className="flex items-center justify-center gap-2 p-3 rounded-xl border border-white/20 text-white hover:bg-white/10 transition-colors"
                >
                  <LogIn className="w-4 h-4" />
                  Member Login
                </Link>
                <Link href="/join" className="block" onClick={() => setMobileMenuOpen(false)}>
                  <button className="btn-glow w-full">
                    Join Now
                  </button>
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
