'use client';

import { useState, useMemo } from 'react';
import PageHeader from '@/components/PageHeader';
import EventItem, { EventType } from '@/components/events/EventItem';
import EventFilters from '@/components/events/EventFilters';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import EventCalendarView from '@/components/events/EventCalendarView';

interface EventData {
    month: string;
    day: string;
    year?: string;
    time: string;
    title: string;
    type: EventType;
    category?: string;
    location: string;
    description?: string;
    image?: string;
    registerUrl?: string;
    payUrl?: string;
    detailsUrl?: string;
}

const ALL_EVENTS: EventData[] = [
    {
        month: 'Jan',
        day: '29',
        year: '2026',
        time: '11:30 AM MST',
        title: 'The Referral Community',
        type: 'chamber',
        category: 'Networking',
        location: 'Murray, UT',
        description: 'Referral Community is a relationship-driven networking group where Chamber members and guests connect, share referrals, and build trust...',
        image: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=800&auto=format&fit=crop',
        registerUrl: '#ghl-register',
    },
    {
        month: 'Feb',
        day: '05',
        year: '2026',
        time: '11:30 AM MST',
        title: 'The Referral Community',
        type: 'chamber',
        category: 'Networking',
        location: 'Murray, UT',
        description: 'Referral Community is a relationship-driven networking group where Chamber members and guests connect, share referrals, and build trust...',
        image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800&auto=format&fit=crop',
        registerUrl: '#ghl-register',
    },
    {
        month: 'Feb',
        day: '12',
        year: '2026',
        time: '11:30 AM MST',
        title: 'The Referral Community',
        type: 'chamber',
        category: 'Networking',
        location: '4760 s 900 e, Murray, UT 84117',
        description: 'Referral Community is a relationship-driven networking group where Chamber members and guests connect, share referrals, and build trust...',
        image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=800&auto=format&fit=crop',
        registerUrl: '#ghl-register',
    },
    {
        month: 'Feb',
        day: '20',
        year: '2026',
        time: '8:00 AM MST',
        title: 'Coffee & Connections Networking',
        type: 'chamber',
        category: 'Networking',
        location: 'Murray City Hall',
        description: 'Start your day with productive networking and fresh coffee. Meet fellow local professionals and build valuable community relationships.',
        image: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=800&auto=format&fit=crop',
        registerUrl: '#ghl-register',
    },
    {
        month: 'Feb',
        day: '27',
        year: '2026',
        time: '12:00 PM MST',
        title: 'AI Productivity Workshop',
        type: 'chamber',
        category: 'Education',
        location: 'Online (Zoom)',
        description: 'Learn how to leverage AI tools like ChatGPT and Midjourney to save hours of work every week and streamline your business operations.',
        image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=800&auto=format&fit=crop',
        registerUrl: '#ghl-register',
    },
    {
        month: 'Mar',
        day: '05',
        year: '2026',
        time: '4:00 PM MST',
        title: 'Ribbon Cutting – New Murray Tech',
        type: 'chamber',
        category: 'Ribbon Cutting',
        location: '4500 S State St, Murray',
        description: 'Join us for the official ribbon cutting of Murray Tech. Celebrate local growth and network with community leaders.',
        image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=800&auto=format&fit=crop',
        registerUrl: '#ghl-register',
    },
];

export default function EventsHubPage() {
    const [viewMode, setViewMode] = useState<'list' | 'card' | 'calendar'>('list');
    const [activeFilter, setActiveFilter] = useState<string>('all');
    const [dateFilter, setDateFilter] = useState<string>('');
    const [categoryFilter, setCategoryFilter] = useState<string>('all');
    const [searchQuery, setSearchQuery] = useState<string>('');

    const monthFull: Record<string, string> = {
        'Jan': 'January', 'Feb': 'February', 'Mar': 'March', 'Apr': 'April',
        'May': 'May', 'Jun': 'June', 'Jul': 'July', 'Aug': 'August',
        'Sep': 'September', 'Oct': 'October', 'Nov': 'November', 'Dec': 'December'
    };

    const filteredEvents = useMemo(() => {
        return ALL_EVENTS.filter((event) => {
            const matchesType = activeFilter === 'all' || event.type === activeFilter;
            const matchesCategory = categoryFilter === 'all' || event.category === categoryFilter;
            const matchesSearch =
                event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                (event.category || '').toLowerCase().includes(searchQuery.toLowerCase()) ||
                event.location.toLowerCase().includes(searchQuery.toLowerCase());

            const matchesDate = !dateFilter || (event.month.toLowerCase().includes(dateFilter) || event.year?.includes(dateFilter));

            return matchesType && matchesCategory && matchesSearch && matchesDate;
        });
    }, [activeFilter, categoryFilter, searchQuery, dateFilter]);

    const groupedEvents = useMemo(() => {
        const groups: Record<string, EventData[]> = {};
        filteredEvents.forEach(event => {
            const key = `${monthFull[event.month] || event.month} ${event.year || '2026'}`;
            if (!groups[key]) groups[key] = [];
            groups[key].push(event);
        });
        return groups;
    }, [filteredEvents]);

    const handleClear = () => {
        setActiveFilter('all');
        setDateFilter('');
        setCategoryFilter('all');
        setSearchQuery('');
    };

    return (
        <div className="bg-slate-950 min-h-screen">
            <PageHeader
                badge="Events"
                title="Murray Chamber Events"
                description="Chamber and community events in one place. Register for upcoming events and stay connected with the Murray business ecosystem."
                breadcrumbs={[{ label: 'Events' }]}
            />

            <div className="relative py-12 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto w-full">

                <EventFilters
                    viewMode={viewMode === 'calendar' ? 'list' : viewMode as 'list' | 'card'}
                    setViewMode={(mode) => setViewMode(mode)}
                    activeFilter={activeFilter}
                    setActiveFilter={setActiveFilter}
                    dateFilter={dateFilter}
                    setDateFilter={setDateFilter}
                    categoryFilter={categoryFilter}
                    setCategoryFilter={setCategoryFilter}
                    searchQuery={searchQuery}
                    setSearchQuery={setSearchQuery}
                    onSearch={() => { }}
                    onClear={handleClear}
                />

                <div className="mb-8 border-b border-white/10 pb-4">
                    <h2 className="text-xl font-black text-white uppercase tracking-widest text-center md:text-left">
                        DISPLAYING {filteredEvents.length} EVENTS:
                    </h2>
                </div>

                <AnimatePresence mode="wait">
                    {viewMode === 'list' && (
                        <motion.div
                            key="list-view"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="space-y-16"
                        >
                            {Object.entries(groupedEvents).map(([monthYear, events]) => (
                                <div key={monthYear} className="space-y-8">
                                    <div className="relative flex items-center justify-center">
                                        <div className="absolute inset-x-0 h-px bg-white/5" />
                                        <span className="relative bg-slate-950 px-6 text-sm font-bold text-white/40 uppercase tracking-[0.3em]">
                                            {monthYear}
                                        </span>
                                    </div>
                                    <div className="space-y-4">
                                        {events.map((event, idx) => (
                                            <EventItem key={`${event.title}-${idx}`} {...event} viewMode="list" />
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    )}

                    {viewMode === 'card' && (
                        <motion.div
                            key="card-view"
                            initial={{ opacity: 0, scale: 0.98 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.98 }}
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                        >
                            {filteredEvents.map((event, idx) => (
                                <EventItem key={`${event.title}-${idx}`} {...event} viewMode="card" />
                            ))}
                        </motion.div>
                    )}

                    {viewMode === 'calendar' && (
                        <motion.div
                            key="calendar-view"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        >
                            <EventCalendarView />
                        </motion.div>
                    )}
                </AnimatePresence>

                <div className="mt-24 max-w-4xl mx-auto">
                    <section className="glass-card p-10 border border-white/10 relative overflow-hidden group rounded-3xl">
                        <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="relative z-10 flex flex-col md:flex-row items-center gap-10">
                            <div className="w-20 h-20 rounded-2xl bg-teal-500/10 flex items-center justify-center flex-shrink-0">
                                <Users className="w-10 h-10 text-teal-400" />
                            </div>
                            <div className="flex-1 text-center md:text-left">
                                <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 mb-3">
                                    <h2 className="text-3xl font-black text-white uppercase tracking-tighter">Chamber Membership</h2>
                                    <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-teal-500/10 border border-teal-500/20 text-teal-400">
                                        GROW YOUR BUSINESS
                                    </span>
                                </div>
                                <p className="text-white/60 leading-relaxed text-lg">
                                    Join the Murray Area Chamber of Commerce to promote your business, gain visibility, and get plugged into local opportunities. Join us and strengthen our community together.
                                </p>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                                <Link href="/join" className="block w-full sm:w-auto">
                                    <button className="w-full btn-primary bg-teal-500 hover:bg-teal-400 text-slate-900 px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all">
                                        Join Now
                                        <ArrowRight className="w-5 h-5" />
                                    </button>
                                </Link>
                                <button className="w-full bg-white/5 border border-white/10 text-white px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition-all">
                                    View Benefits
                                </button>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}
