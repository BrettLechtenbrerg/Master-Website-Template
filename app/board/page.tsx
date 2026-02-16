'use client';

import { motion } from 'framer-motion';
import { Linkedin, Mail } from 'lucide-react';
import Image from 'next/image';
import PageHeader from '@/components/PageHeader';
import Footer from '@/components/Footer';
import Link from 'next/link';
import boardContent from '@/content/board.json';

interface BoardMember {
  name: string;
  title: string;
  subtitle?: string;
  bio: string;
  linkedin?: string;
  email: string;
  image?: string;
}

interface StaffMember {
  name: string;
  title: string;
  subtitle?: string;
  bio: string;
  email: string;
  image?: string;
}

export default function BoardPage() {
  const boardMembers: BoardMember[] = boardContent.boardMembers;
  const staff: StaffMember[] = boardContent.staff;

  return (
    <>
      <PageHeader
        badge="Leadership"
        title={boardContent.hero.headline}
        description={boardContent.hero.subheadline}
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
            <h2 className="text-3xl font-bold text-white">{boardContent.boardSection.title}</h2>
            <p className="mt-4 text-white/60">{boardContent.boardSection.description}</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {boardMembers.map((member, index) => (
              <motion.div
                key={`${member.name}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="glass-card p-6 text-center group"
              >
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-purple-600 to-orange-500 mx-auto mb-4 flex items-center justify-center shadow-lg overflow-hidden">
                  {member.image ? (
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={96}
                      height={96}
                      className="w-full h-full object-cover"
                      unoptimized
                    />
                  ) : (
                    <span className="text-3xl font-bold text-white">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  )}
                </div>
                <h3 className="text-lg font-semibold text-white">{member.name}</h3>
                <p className="text-purple-400 text-sm font-medium">{member.title}</p>
                {member.subtitle && (
                  <p className="text-orange-400/80 text-xs font-medium mt-1">{member.subtitle}</p>
                )}
                <p className="mt-4 text-white/60 text-sm line-clamp-3">{member.bio}</p>
                <div className="mt-4 flex justify-center gap-3">
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors"
                    >
                      <Linkedin className="w-4 h-4 text-white/60" />
                    </a>
                  )}
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
            <h2 className="text-3xl font-bold text-white">{boardContent.staffSection.title}</h2>
            <p className="mt-4 text-white/60">{boardContent.staffSection.description}</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {staff.map((person, index) => (
              <motion.div
                key={`${person.name}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-8 text-center"
              >
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-purple-600 to-orange-500 mx-auto mb-6 flex items-center justify-center shadow-lg overflow-hidden">
                  {person.image ? (
                    <Image
                      src={person.image}
                      alt={person.name}
                      width={128}
                      height={128}
                      className="w-full h-full object-cover"
                      unoptimized
                    />
                  ) : (
                    <span className="text-4xl font-bold text-white">
                      {person.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  )}
                </div>
                <h3 className="text-xl font-semibold text-white">{person.name}</h3>
                <p className="text-purple-400 font-medium">{person.title}</p>
                {person.subtitle && (
                  <p className="text-orange-400/80 text-sm font-medium mt-1">{person.subtitle}</p>
                )}
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
            <h2 className="text-3xl font-bold text-white">{boardContent.cta.headline}</h2>
            <p className="mt-4 text-white/60 max-w-2xl mx-auto">
              {boardContent.cta.description}
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href={boardContent.cta.buttonLink}>
                <button className="btn-glow">{boardContent.cta.buttonText}</button>
              </Link>
              <Link href={boardContent.cta.secondaryButtonLink}>
                <button className="btn-secondary">{boardContent.cta.secondaryButtonText}</button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}
