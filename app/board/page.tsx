'use client';

import { motion } from 'framer-motion';
import { Linkedin, Mail, Building2 } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import Footer from '@/components/Footer';
import Link from 'next/link';

const boardMembers = [
  {
    name: 'Jennifer Martinez',
    title: 'Board Chair',
    company: 'Martinez Financial Group',
    bio: 'Jennifer has served on the Chamber board for 8 years, leading initiatives to strengthen small business resources.',
    linkedin: '#',
    email: 'jennifer@example.com',
  },
  {
    name: 'Michael Chen',
    title: 'Vice Chair',
    company: 'Murray Tech Solutions',
    bio: 'Michael brings 15 years of technology industry experience and a passion for innovation in Murray.',
    linkedin: '#',
    email: 'michael@example.com',
  },
  {
    name: 'Sarah Thompson',
    title: 'Treasurer',
    company: 'Thompson Accounting',
    bio: 'Sarah oversees chamber finances and brings expertise in helping small businesses manage growth.',
    linkedin: '#',
    email: 'sarah@example.com',
  },
  {
    name: 'David Williams',
    title: 'Secretary',
    company: 'Williams Real Estate',
    bio: 'David has been active in Murray real estate for 20 years and champions business-friendly development.',
    linkedin: '#',
    email: 'david@example.com',
  },
  {
    name: 'Lisa Rodriguez',
    title: 'Board Member',
    company: 'Bloom Floral Design',
    bio: 'Lisa represents Murray\'s vibrant retail community and advocates for small business visibility.',
    linkedin: '#',
    email: 'lisa@example.com',
  },
  {
    name: 'James Anderson',
    title: 'Board Member',
    company: 'Peak Fitness Murray',
    bio: 'James leads wellness initiatives and promotes healthy workplace cultures across Murray businesses.',
    linkedin: '#',
    email: 'james@example.com',
  },
  {
    name: 'Emily Park',
    title: 'Board Member',
    company: 'Park Legal Services',
    bio: 'Emily provides legal expertise and helps businesses navigate regulatory challenges.',
    linkedin: '#',
    email: 'emily@example.com',
  },
  {
    name: 'Robert Garcia',
    title: 'Board Member',
    company: 'Garcia Construction',
    bio: 'Robert represents the construction industry and supports workforce development initiatives.',
    linkedin: '#',
    email: 'robert@example.com',
  },
];

const staff = [
  {
    name: 'Amanda Foster',
    title: 'Executive Director',
    bio: 'Amanda leads the chamber with 12 years of experience in economic development and community building.',
    email: 'amanda@murraychamber.com',
  },
  {
    name: 'Kevin Brooks',
    title: 'Membership Director',
    bio: 'Kevin manages member relations and works to ensure every member gets value from their membership.',
    email: 'kevin@murraychamber.com',
  },
  {
    name: 'Rachel Kim',
    title: 'Events Coordinator',
    bio: 'Rachel plans and executes all chamber events, from networking luncheons to the annual golf tournament.',
    email: 'rachel@murraychamber.com',
  },
];

export default function BoardPage() {
  return (
    <>
      <PageHeader
        badge="Leadership"
        title="Board of Directors"
        description="Meet the dedicated business leaders who volunteer their time and expertise to guide the Murray Area Chamber of Commerce."
        breadcrumbs={[
          { label: 'About', href: '/about' },
          { label: 'Board of Directors' },
        ]}
      />

      {/* Board Members */}
      <section className="relative py-16 overflow-hidden">
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white">Board Members</h2>
            <p className="mt-4 text-white/60">Our volunteer board provides strategic direction and governance.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {boardMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="glass-card p-6 text-center group"
              >
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-purple-600 to-orange-500 mx-auto mb-4 flex items-center justify-center shadow-lg">
                  <span className="text-3xl font-bold text-white">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-white">{member.name}</h3>
                <p className="text-purple-400 text-sm font-medium">{member.title}</p>
                <div className="flex items-center justify-center gap-1 mt-2 text-white/50 text-xs">
                  <Building2 className="w-3 h-3" />
                  {member.company}
                </div>
                <p className="mt-4 text-white/60 text-sm line-clamp-3">{member.bio}</p>
                <div className="mt-4 flex justify-center gap-3">
                  <a
                    href={member.linkedin}
                    className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors"
                  >
                    <Linkedin className="w-4 h-4 text-white/60" />
                  </a>
                  <a
                    href={`mailto:${member.email}`}
                    className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors"
                  >
                    <Mail className="w-4 h-4 text-white/60" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Staff */}
      <section className="relative py-16 overflow-hidden">
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white">Chamber Staff</h2>
            <p className="mt-4 text-white/60">Our dedicated team works daily to serve our members.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {staff.map((person, index) => (
              <motion.div
                key={person.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-8 text-center"
              >
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-purple-600 to-orange-500 mx-auto mb-6 flex items-center justify-center shadow-lg">
                  <span className="text-4xl font-bold text-white">
                    {person.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-white">{person.name}</h3>
                <p className="text-purple-400 font-medium">{person.title}</p>
                <p className="mt-4 text-white/60">{person.bio}</p>
                <a
                  href={`mailto:${person.email}`}
                  className="inline-flex items-center gap-2 mt-4 text-sm text-purple-400 hover:text-purple-300 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  {person.email}
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Board CTA */}
      <section className="relative py-16 overflow-hidden">
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-strong rounded-3xl p-8 md:p-12 text-center"
          >
            <h2 className="text-3xl font-bold text-white">Interested in Serving?</h2>
            <p className="mt-4 text-white/60 max-w-2xl mx-auto">
              Board positions are filled through nominations. Contact us to learn about opportunities to serve on the board or join a committee.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/contact">
                <button className="btn-glow">Contact Us</button>
              </Link>
              <Link href="/ambassadors">
                <button className="btn-secondary">View Ambassadors</button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}
