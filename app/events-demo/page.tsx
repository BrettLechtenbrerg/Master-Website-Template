'use client';

import { useState } from 'react';
import PageHeader from '@/components/PageHeader';
import { motion, AnimatePresence } from 'framer-motion';
import { LayoutList, Calendar as CalendarIcon, MapPin, Clock, Search, CheckCircle2 } from 'lucide-react';

type EventType = 'chamber' | 'community';

const ALL_EVENTS = [
    {
        month: 'Feb',
        day: '20',
        time: '8:00 AM',
        title: 'Coffee & Connections Networking',
        type: 'chamber' as EventType,
        category: 'Networking',
        location: 'Murray City Hall',
        registerUrl: '#',
        payUrl: '#',
    },
    {
        month: 'Feb',
        day: '22',
        time: '5:00 PM',
        title: 'Murray City Job Fair',
        type: 'community' as EventType,
        category: 'Community',
        location: 'Murray Park Pavilion',
        detailsUrl: '#',
    },
    {
        month: 'Feb',
        day: '27',
        time: '12:00 PM',
        title: 'Small Business Workshop: AI That Saves Time',
        type: 'chamber' as EventType,
        category: 'Education',
        location: 'Online (Zoom)',
        registerUrl: '#',
        payUrl: '#',
    },
];

export default function EventsDemoPage() {
    const [viewMode, setViewMode] = useState<'list' | 'calendar'>('list');
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
        <div className="min-h-screen">
            <PageHeader
                badge="Events"
                title="Murray Chamber Events"
                description="Chamber and community events in one place. Filter what you want to see, register for upcoming Chamber events, and subscribe for updates."
                breadcrumbs={[{ label: 'Events Demo' }]}
            />

            <div className="relative py-12 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto w-full">
                {/* View Toggle */}
                <div className="flex justify-center mb-12">
                    <div className="inline-flex p-1 bg-white/5 border border-white/10 rounded-xl">
                        <button
                            onClick={() => setViewMode('list')}
                            className={`flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-bold transition-all ${viewMode === 'list'
                                ? 'bg-[#5D5FEF] text-white shadow-lg shadow-purple-500/20'
                                : 'text-white/40 hover:text-white'
                                }`}
                        >
                            <LayoutList className="w-4 h-4" />
                            List View
                        </button>
                        <button
                            onClick={() => setViewMode('calendar')}
                            className={`flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-bold transition-all ${viewMode === 'calendar'
                                ? 'bg-[#5D5FEF] text-white shadow-lg shadow-purple-500/20'
                                : 'text-white/40 hover:text-white'
                                }`}
                        >
                            <CalendarIcon className="w-4 h-4" />
                            Calendar View
                        </button>
                    </div>
                </div>

                {/* Main Card */}
                <div className="max-w-4xl mx-auto">
                    <div className="glass-card border border-white/10 p-8 sm:p-12 !bg-[#262035]/80">
                        <div className="mb-10">
                            <h2 className="text-2xl font-black text-white uppercase tracking-tighter mb-2">Events</h2>
                            <p className="text-sm text-white/50">Use filters to view Chamber, Community, or All events.</p>
                        </div>

                        {/* Filters Row */}
                        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-12">
                            <div className="flex flex-wrap gap-3">
                                <button
                                    onClick={() => setActiveFilter('all')}
                                    className={`px-6 py-2 rounded-full text-[11px] font-black uppercase tracking-widest transition-all ${activeFilter === 'all' ? 'bg-[#3B82F6] text-white' : 'bg-white/5 text-white/40 border border-white/10 hover:bg-white/10'}`}
                                >
                                    All Events
                                </button>
                                <button
                                    onClick={() => setActiveFilter('chamber')}
                                    className={`px-6 py-2 rounded-full text-[11px] font-black uppercase tracking-widest transition-all ${activeFilter === 'chamber' ? 'bg-[#3B82F6] text-white' : 'bg-white/5 text-white/40 border border-white/10 hover:bg-white/10'}`}
                                >
                                    Chamber Events
                                </button>
                                <button
                                    onClick={() => setActiveFilter('community')}
                                    className={`px-6 py-2 rounded-full text-[11px] font-black uppercase tracking-widest transition-all ${activeFilter === 'community' ? 'bg-[#3B82F6] text-white' : 'bg-white/5 text-white/40 border border-white/10 hover:bg-white/10'}`}
                                >
                                    Community Events
                                </button>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="relative flex-1 lg:w-64">
                                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20" />
                                    <input
                                        type="text"
                                        placeholder="Search events..."
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        className="w-full bg-black/40 border border-white/10 rounded-lg py-2 pl-10 pr-4 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-purple-500/50"
                                    />
                                </div>
                                <div className="flex items-center gap-2 px-3 py-2 bg-white/5 border border-white/10 rounded-full">
                                    <CheckCircle2 className="w-4 h-4 text-green-400" />
                                    <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Future-Only</span>
                                </div>
                            </div>
                        </div>

                        {/* Events List */}
                        <div className="space-y-6">
                            <AnimatePresence mode="popLayout">
                                {filteredEvents.map((event, idx) => (
                                    <motion.div
                                        key={`${event.title}-${idx}`}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, scale: 0.95 }}
                                        transition={{ delay: idx * 0.05 }}
                                        className="bg-[#3D3352] rounded-2xl p-6 border border-white/5 flex flex-col md:flex-row items-center gap-6 group hover:bg-[#463B5E] transition-colors"
                                    >
                                        {/* Date Badge */}
                                        <div className="w-24 h-24 bg-[#262035] rounded-xl flex flex-col items-center justify-center border border-white/5 flex-shrink-0">
                                            <span className="text-[10px] font-bold text-white/30 uppercase tracking-widest leading-none mb-1">{event.month}</span>
                                            <span className="text-3xl font-black text-white leading-none mb-1">{event.day}</span>
                                            <span className="text-[10px] font-bold text-white/30 leading-none">{event.time}</span>
                                        </div>

                                        {/* Content */}
                                        <div className="flex-1 text-center md:text-left">
                                            <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 mb-2">
                                                <h3 className="text-xl font-bold text-white">{event.title}</h3>
                                                <span className={`px-2 py-0.5 rounded-full text-[9px] font-black uppercase tracking-widest ${event.type === 'chamber' ? 'bg-green-500/20 text-green-400 border border-green-500/30' : 'bg-blue-500/20 text-blue-400 border border-blue-500/30'}`}>
                                                    {event.type}
                                                </span>
                                                <span className="px-2 py-0.5 rounded-full text-[9px] font-black uppercase tracking-widest bg-white/5 text-white/40 border border-white/10">
                                                    {event.category}
                                                </span>
                                            </div>
                                            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-sm text-white/50">
                                                <div className="flex items-center gap-1.5">
                                                    <MapPin className="w-4 h-4 text-[#F27A21]" />
                                                    <span>{event.location}</span>
                                                </div>
                                                <div className="flex items-center gap-1.5">
                                                    <Clock className="w-4 h-4 text-white/30" />
                                                    <span>{event.time}</span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Actions */}
                                        <div className="flex gap-2">
                                            {event.registerUrl && (
                                                <button className="px-5 py-2 bg-[#00D4FF] hover:bg-[#00B8E0] text-[#001D26] font-bold text-xs rounded-full transition-colors">
                                                    Register
                                                </button>
                                            )}
                                            {event.payUrl && (
                                                <button className="px-5 py-2 bg-gradient-to-r from-orange-400 to-purple-400 text-white font-bold text-xs rounded-full transition-colors shadow-lg">
                                                    Pay
                                                </button>
                                            )}
                                            {event.detailsUrl && (
                                                <button className="px-5 py-2 bg-white/10 hover:bg-white/20 text-white font-bold text-xs rounded-full transition-colors border border-white/10">
                                                    Details
                                                </button>
                                            )}
                                        </div>
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
