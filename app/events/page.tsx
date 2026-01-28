'use client';

import { useState } from 'react';
import PageHeader from '@/components/PageHeader';
import Footer from '@/components/Footer';
import EventItem, { EventType } from '@/components/events/EventItem';
import EventSidebar from '@/components/events/EventSidebar';
import EventFilters from '@/components/events/EventFilters';
import { motion, AnimatePresence } from 'framer-motion';

const ALL_EVENTS = [
    {
        month: 'Feb',
        day: '20',
        time: '8:00 AM',
        title: 'Coffee & Connections Networking',
        type: 'chamber' as EventType,
        category: 'Networking',
        location: 'Murray City Hall',
        registerUrl: '#ghl-register-coffee',
        payUrl: '#ghl-pay-coffee',
    },
    {
        month: 'Feb',
        day: '22',
        time: '5:00 PM',
        title: 'Murray City Job Fair',
        type: 'community' as EventType,
        location: 'Murray Park Pavilion',
        detailsUrl: '#community-details-jobfair',
    },
    {
        month: 'Feb',
        day: '27',
        time: '12:00 PM',
        title: 'Small Business Workshop: AI That Saves Time',
        type: 'chamber' as EventType,
        category: 'Education',
        location: 'Online (Zoom)',
        registerUrl: '#ghl-register-ai',
        payUrl: '#ghl-pay-ai',
    },
    {
        month: 'Mar',
        day: '05',
        time: '4:00 PM',
        title: 'Ribbon Cutting – New Murray Business',
        type: 'chamber' as EventType,
        category: 'Ribbon Cutting',
        location: '4500 S State St',
        registerUrl: '#ghl-register-ribbon',
        payUrl: '#ghl-pay-ribbon',
    },
];

const PAST_EVENTS = [
    {
        title: 'January Luncheon',
        date: 'Jan 15 • 11:30 AM',
        recapUrl: '#recap-jan',
    },
    {
        title: 'Holiday Mixer',
        date: 'Dec 12 • 5:30 PM',
        recapUrl: '#recap-holiday',
    },
];

export default function EventsHubPage() {
    const [activeFilter, setActiveFilter] = useState<'all' | EventType>('all');
    const [searchQuery, setSearchQuery] = useState('');

    const filteredEvents = ALL_EVENTS.filter((event) => {
        const matchesFilter = activeFilter === 'all' || event.type === activeFilter;
        const matchesSearch =
            event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            (event.category || '').toLowerCase().includes(searchQuery.toLowerCase()) ||
            event.location.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesFilter && matchesSearch;
    });

    return (
        <>
            <PageHeader
                badge="Events"
                title="Murray Chamber Events"
                description="Chamber and community events in one place. Filter what you want to see, register for upcoming Chamber events, and subscribe for updates."
                breadcrumbs={[{ label: 'Events' }]}
            />

            <main className="relative py-12 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-[1fr,350px] gap-12">
                    {/* Main Events List */}
                    <section className="space-y-6">
                        <div className="glass-card p-6 sm:p-8 border border-white/10 relative overflow-hidden">
                            <div className="flex items-center justify-between mb-8">
                                <div>
                                    <h2 className="text-2xl font-black text-white uppercase tracking-tighter">Events</h2>
                                    <p className="text-sm text-white/50 mt-1">Use filters to view Chamber, Community, or All events.</p>
                                </div>
                            </div>

                            <EventFilters
                                activeFilter={activeFilter}
                                setActiveFilter={setActiveFilter}
                                searchQuery={searchQuery}
                                setSearchQuery={setSearchQuery}
                            />

                            <div className="space-y-8">
                                {/* We'll just group by month in a real implementation, for now simple list */}
                                <div className="space-y-4">
                                    <AnimatePresence mode="popLayout">
                                        {filteredEvents.length > 0 ? (
                                            filteredEvents.map((event, idx) => (
                                                <motion.div
                                                    key={event.title}
                                                    initial={{ opacity: 0, y: 10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    exit={{ opacity: 0, scale: 0.95 }}
                                                    transition={{ delay: idx * 0.05 }}
                                                >
                                                    <EventItem {...event} />
                                                </motion.div>
                                            ))
                                        ) : (
                                            <motion.div
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                className="text-center py-20 bg-white/5 rounded-2xl border border-dashed border-white/10"
                                            >
                                                <p className="text-white/40 italic">No events found matching your current filters.</p>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>

                                {/* Past Events Recap */}
                                <div className="pt-8 border-t border-white/10">
                                    <details className="group">
                                        <summary className="flex items-center justify-between cursor-pointer list-none">
                                            <h3 className="text-base font-bold text-white uppercase tracking-widest flex items-center gap-2">
                                                Past Events (Recaps)
                                                <span className="px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-[10px] text-white/40">
                                                    Recaps only
                                                </span>
                                            </h3>
                                            <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-open:rotate-180 transition-transform">
                                                <svg className="w-4 h-4 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                                </svg>
                                            </div>
                                        </summary>
                                        <div className="grid sm:grid-cols-2 gap-4 mt-6">
                                            {PAST_EVENTS.map((event) => (
                                                <div key={event.title} className="p-4 rounded-xl border border-white/5 bg-white/5 flex items-center justify-between group">
                                                    <div>
                                                        <p className="text-sm font-bold text-white mb-1 group-hover:text-purple-300 transition-colors">
                                                            {event.title}
                                                        </p>
                                                        <p className="text-xs text-white/40">{event.date}</p>
                                                    </div>
                                                    <a href={event.recapUrl} className="text-xs font-black text-blue-400 hover:underline underline-offset-4">
                                                        View Recap
                                                    </a>
                                                </div>
                                            ))}
                                        </div>
                                    </details>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Sidebar */}
                    <EventSidebar />
                </div>
            </main>

            <Footer />
        </>
    );
}
