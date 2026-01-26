'use client';

import { motion } from 'framer-motion';
import { Linkedin, Mail } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import Footer from '@/components/Footer';
import Link from 'next/link';

const boardMembers = [
  {
    name: 'Brett Lechtenberg',
    title: 'Chair of the Board',
    subtitle: 'Education Chair',
    bio: 'Brett leads the Chamber board and chairs the Education Committee, driving initiatives to support Murray businesses.',
    linkedin: '#',
    email: 'info@themurraychamber.com',
  },
  {
    name: 'Kristen Latimer',
    title: 'Vice Chair of the Board',
    subtitle: 'Marketing Chair',
    bio: 'Kristen serves as Vice Chair and leads marketing initiatives to promote Chamber members and programs.',
    linkedin: '#',
    email: 'info@themurraychamber.com',
  },
  {
    name: 'Amber Miller',
    title: 'Treasurer',
    bio: 'Amber oversees Chamber finances, ensuring responsible stewardship of member resources.',
    linkedin: '#',
    email: 'info@themurraychamber.com',
  },
  {
    name: 'Elvon Farrell',
    title: 'Chair of Bylaws',
    subtitle: 'Parliamentarian',
    bio: 'Elvon leads the Bylaws Committee and serves as Parliamentarian for board proceedings.',
    linkedin: '#',
    email: 'info@themurraychamber.com',
  },
  {
    name: 'Lenny Leslie',
    title: 'Advisor to the Board',
    bio: 'Lenny provides strategic guidance and institutional knowledge as Advisor to the Board.',
    linkedin: '#',
    email: 'info@themurraychamber.com',
  },
  {
    name: 'Dorie Olds',
    title: 'Secretary',
    subtitle: 'Women in Business; Ribbon Cutting Committee',
    bio: 'Dorie serves as Secretary and leads both the Women in Business and Ribbon Cutting Committees.',
    linkedin: '#',
    email: 'info@themurraychamber.com',
  },
  {
    name: 'John Doe',
    title: 'Board Member',
    bio: 'Board member position.',
    linkedin: '#',
    email: 'info@themurraychamber.com',
  },
  {
    name: 'John Doe',
    title: 'Board Member',
    bio: 'Board member position.',
    linkedin: '#',
    email: 'info@themurraychamber.com',
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
                {member.subtitle && (
                  <p className="text-orange-400/80 text-xs font-medium mt-1">{member.subtitle}</p>
                )}
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
