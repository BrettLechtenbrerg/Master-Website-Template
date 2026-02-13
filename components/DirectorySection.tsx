'use client';

import { motion } from 'framer-motion';
import { Search, Building2, Users, ArrowRight, Star, ShieldCheck } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import FadeIn from './animations/FadeIn';

const stats = [
    { label: 'Active Members', value: '500+', icon: Users },
    { label: 'Business Categories', value: '40+', icon: Building2 },
    { label: 'Community Support', value: '75 Years', icon: Star },
];

export default function DirectorySection() {
    return (
        <section className="relative w-full py-24 overflow-hidden bg-slate-950">
            {/* Background Orbs */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px]" />
                <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-orange-600/10 rounded-full blur-[120px]" />
            </div>

            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left Content */}
                    <FadeIn direction="right">
                        <div>
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium mb-6">
                                <ShieldCheck className="w-4 h-4" />
                                Verified Local Businesses
                            </div>

                            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                                Find Your Next <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-orange-400">
                                    Business Partner
                                </span>
                            </h2>

                            <p className="mt-8 text-lg text-white/60 leading-relaxed max-w-xl">
                                The Murray Area Chamber of Commerce directory is the most comprehensive resource for finding trusted local businesses.
                                Support our members and help strengthen our local economy.
                            </p>

                            <div className="mt-10 flex flex-wrap gap-4">
                                <Link href="/directory">
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-white bg-gradient-to-r from-purple-600 to-purple-700 shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 transition-all"
                                    >
                                        <Search className="w-5 h-5" />
                                        Explore Directory
                                    </motion.button>
                                </Link>

                                <Link href="/join">
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-white bg-white/5 border border-white/10 hover:bg-white/10 transition-all"
                                    >
                                        List Your Business
                                        <ArrowRight className="w-5 h-5" />
                                    </motion.button>
                                </Link>
                            </div>

                            {/* Stats Grid */}
                            <div className="mt-16 grid grid-cols-3 gap-8 border-t border-white/10 pt-8">
                                {stats.map((stat) => (
                                    <div key={stat.label}>
                                        <div className="flex items-center gap-2 text-orange-400 mb-1">
                                            <stat.icon className="w-4 h-4" />
                                            <span className="text-2xl font-bold text-white">{stat.value}</span>
                                        </div>
                                        <p className="text-xs text-white/40 uppercase tracking-wider font-semibold">
                                            {stat.label}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </FadeIn>

                    {/* Right Visual Element */}
                    <FadeIn direction="left" delay={0.2}>
                        <div className="relative">
                            {/* Main Decorative Card */}
                            <div className="glass-card p-2 rounded-[2rem] aspect-[4/5] relative overflow-hidden group">
                                <Image
                                    src="/images/features/directory.jpg"
                                    alt="Member Business Directory"
                                    fill
                                    className="object-cover rounded-[1.8rem] opacity-60 grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                                    unoptimized
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

                                {/* Floating Member Card Fragment */}
                                <motion.div
                                    initial={{ x: 50, opacity: 0 }}
                                    whileInView={{ x: 0, opacity: 1 }}
                                    transition={{ delay: 0.5, duration: 0.8 }}
                                    className="absolute bottom-8 right-8 left-8 glass-card p-6 backdrop-blur-xl border-white/20"
                                >
                                    <div className="flex items-center gap-4 mb-3">
                                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-orange-500 flex items-center justify-center">
                                            <Building2 className="w-6 h-6 text-white" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-white">Trust Local</h4>
                                            <p className="text-xs text-white/50">MACC Certified Members</p>
                                        </div>
                                    </div>
                                    <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: '100%' }}
                                            transition={{ delay: 1, duration: 1.5 }}
                                            className="h-full bg-gradient-to-r from-purple-500 to-orange-500"
                                        />
                                    </div>
                                </motion.div>
                            </div>

                            {/* Decorative elements */}
                            <div className="absolute -top-6 -right-6 w-32 h-32 bg-orange-500/20 rounded-full blur-2xl animate-pulse" />
                            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-purple-500/20 rounded-full blur-2xl animate-pulse" />
                        </div>
                    </FadeIn>

                </div>
            </div>
        </section>
    );
}
