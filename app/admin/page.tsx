'use client';

import { motion } from 'framer-motion';
import { Users, Settings, Database, ArrowRight, Activity, ShieldCheck, LogOut, FileCode } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import PageHeader from '@/components/PageHeader';
import Footer from '@/components/Footer';
import FadeIn from '@/components/animations/FadeIn';
import { supabase } from '@/lib/supabase';

const adminModules = [
    {
        title: 'Member Directory',
        description: 'Manage all chamber members, update tiers, and control visibility.',
        icon: Users,
        href: '/admin/members',
        color: 'from-purple-600 to-purple-800',
        stats: '150+ Members'
    },
    {
        title: 'System Settings',
        description: 'Configure general website settings and API integrations.',
        icon: Settings,
        href: '#',
        color: 'from-orange-500 to-orange-700',
        stats: 'GHL Active'
    },
    {
        title: 'Database Status',
        description: 'Monitor your Supabase connection and database health.',
        icon: Database,
        href: '#',
        color: 'from-blue-600 to-blue-800',
        stats: 'Healthy'
    },
    {
        title: 'Custom Scripts',
        description: 'Inject header/footer scripts sitewide or on specific pages.',
        icon: FileCode,
        href: '/admin/scripts',
        color: 'from-green-600 to-emerald-800',
        stats: 'Manage Tags'
    }
];

export default function AdminDashboard() {
    const router = useRouter();

    const handleLogout = async () => {
        await supabase.auth.signOut();
        router.push('/admin/login');
    };

    return (
        <>
            <div className="absolute top-8 right-8 z-50">
                <button
                    onClick={handleLogout}
                    className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-red-500/20 text-white/60 hover:text-red-400 rounded-xl transition-all border border-white/10 hover:border-red-500/30 font-medium"
                >
                    <LogOut className="w-4 h-4" />
                    Logout
                </button>
            </div>

            <PageHeader
                badge="Dashboard"
                title="Admin Portal"
                description="Welcome back. Manage your Chamber operations and website content."
                breadcrumbs={[
                    { label: 'Admin' },
                ]}
            />

            <section className="relative py-16 overflow-hidden min-h-screen">
                <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

                    {/* Welcome Alert */}
                    <FadeIn direction="up">
                        <div className="glass-card p-6 mb-12 flex items-center gap-4 border-l-4 border-purple-500">
                            <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center shrink-0">
                                <ShieldCheck className="w-6 h-6 text-purple-400" />
                            </div>
                            <div>
                                <h2 className="text-xl font-bold text-white">System Secured</h2>
                                <p className="text-white/60">Your admin actions are monitored and protected by Supabase Row Level Security.</p>
                            </div>
                        </div>
                    </FadeIn>

                    {/* Module Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {adminModules.map((module, index) => (
                            <FadeIn key={module.title} direction="up" delay={index * 0.1}>
                                <Link href={module.href}>
                                    <motion.div
                                        whileHover={{ y: -5 }}
                                        className="glass-card p-8 h-full flex flex-col group cursor-pointer"
                                    >
                                        <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${module.color} flex items-center justify-center mb-6 shadow-xl group-hover:scale-110 transition-transform`}>
                                            <module.icon className="w-7 h-7 text-white" />
                                        </div>

                                        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                                            {module.title}
                                        </h3>

                                        <p className="text-white/60 mb-8 flex-1">
                                            {module.description}
                                        </p>

                                        <div className="flex items-center justify-between pt-6 border-t border-white/10 mt-auto">
                                            <span className="text-sm font-medium text-white/40 flex items-center gap-1.5">
                                                <Activity className="w-4 h-4" />
                                                {module.stats}
                                            </span>
                                            <span className="text-purple-400 group-hover:translate-x-1 transition-transform">
                                                <ArrowRight className="w-5 h-5" />
                                            </span>
                                        </div>
                                    </motion.div>
                                </Link>
                            </FadeIn>
                        ))}
                    </div>

                </div>
            </section>

            <Footer />
        </>
    );
}
