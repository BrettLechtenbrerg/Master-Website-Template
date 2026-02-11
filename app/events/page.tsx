'use client';

import { useState, useEffect } from 'react';
import PageHeader from '@/components/PageHeader';
import { motion, AnimatePresence } from 'framer-motion';
import { LayoutList, LayoutGrid, MapPin, Clock, Search, CheckCircle2, Calendar, Loader2 } from 'lucide-react';

type EventType = 'chamber' | 'community';

interface ExtractedEvent {
    id: string;
    title: string;
    description: string;
    location: string;
    month: string;
    day: string;
    year: string;
    time: string;
    start: string;
    end: string;
    link: string;
    type: EventType;
    category: string;
    registerUrl?: string; // Added for compatibility with GHL
    payUrl?: string;
    detailsUrl?: string;
}

export default function EventsPage() {
    const [events, setEvents] = useState<ExtractedEvent[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [viewMode, setViewMode] = useState<'list' | 'card'>('list');
    const [activeFilter, setActiveFilter] = useState<'all' | EventType>('all');
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        async function fetchEvents() {
            try {
                const res = await fetch('/api/calendar?maxResults=20');
                const data = await res.json();
                if (data.items) {
                    // Map items to include GHL urls if they exist in description (optional enhancement)
                    const enhancedItems = data.items.map((item: any) => ({
                        ...item,
                        // We use the calendar link as the details URL
                        detailsUrl: item.link
                    }));
                    setEvents(enhancedItems);
                }
            } catch (error) {
                console.error('Failed to fetch events:', error);
            } finally {
                setIsLoading(false);
            }
        }
        fetchEvents();
    }, []);

    const filteredEvents = events.filter((event) => {
        const matchesFilter = activeFilter === 'all' || event.type === activeFilter;
        const matchesSearch =
            event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            (event.category || '').toLowerCase().includes(searchQuery.toLowerCase()) ||
            event.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
            event.description.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesFilter && matchesSearch;
    });

    return (
        <div className="min-h-screen">
            <PageHeader
                badge="Events"
                title="Murray Chamber Events"
                description="Chamber and community events in one place. Filter what you want to see, register for upcoming Chamber events, and subscribe for updates."
                breadcrumbs={[{ label: 'Events' }]}
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
                            onClick={() => setViewMode('card')}
                            className={`flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-bold transition-all ${viewMode === 'card'
                                ? 'bg-[#5D5FEF] text-white shadow-lg shadow-purple-500/20'
                                : 'text-white/40 hover:text-white'
                                }`}
                        >
                            <LayoutGrid className="w-4 h-4" />
                            Card View
                        </button>
                    </div>
                </div>

                {/* Main Content Area */}
                <div className="max-w-6xl mx-auto">
                    <div className="glass-card border border-white/10 p-8 sm:p-12 !bg-[#262035]/80">
                        <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
                            <div>
                                <h2 className="text-2xl font-black text-white uppercase tracking-tighter mb-2">Upcoming Events</h2>
                                <p className="text-sm text-white/50">Use filters to browse chamber and community opportunities.</p>
                            </div>
                            <div className="text-right">
                                <span className="text-xs font-bold text-purple-400/60 uppercase tracking-widest bg-purple-500/5 px-3 py-1 rounded-full border border-purple-500/10">
                                    {filteredEvents.length} Events Found
                                </span>
                            </div>
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
                                <div className="hidden sm:flex items-center gap-2 px-3 py-2 bg-white/5 border border-white/10 rounded-full">
                                    <CheckCircle2 className="w-4 h-4 text-green-400" />
                                    <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Live Now</span>
                                </div>
                            </div>
                        </div>

                        {/* Events Content */}
                        <AnimatePresence mode="wait">
                            {isLoading ? (
                                <motion.div
                                    key="loading"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="flex flex-col items-center justify-center py-20"
                                >
                                    <Loader2 className="w-8 h-8 text-purple-500 animate-spin mb-4" />
                                    <p className="text-white/40 font-medium uppercase tracking-widest text-xs">Loading Events...</p>
                                </motion.div>
                            ) : viewMode === 'list' ? (
                                <motion.div
                                    key="list"
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 10 }}
                                    className="space-y-6"
                                >
                                    {filteredEvents.map((event) => (
                                        <motion.div
                                            key={event.id}
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
                                                        <span className="max-w-[200px] truncate md:max-w-none">{event.location}</span>
                                                    </div>
                                                    <div className="flex items-center gap-1.5">
                                                        <Clock className="w-4 h-4 text-white/30" />
                                                        <span>{event.time}</span>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Actions */}
                                            <div className="flex gap-2">
                                                {event.link && (
                                                    <a
                                                        href={event.link}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="px-5 py-2 bg-white/10 hover:bg-white/20 text-white font-bold text-xs rounded-full transition-colors border border-white/10"
                                                    >
                                                        Details
                                                    </a>
                                                )}
                                                {event.registerUrl && (
                                                    <button className="px-5 py-2 bg-[#00D4FF] hover:bg-[#00B8E0] text-[#001D26] font-bold text-xs rounded-full transition-colors">
                                                        Register
                                                    </button>
                                                )}
                                            </div>
                                        </motion.div>
                                    ))}
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="card"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                                >
                                    {filteredEvents.map((event) => (
                                        <div key={event.id} className="bg-[#3D3352] rounded-3xl p-6 border border-white/5 flex flex-col group hover:bg-[#463B5E] transition-all hover:scale-[1.02] duration-300 shadow-xl">
                                            <div className="flex justify-between items-start mb-6">
                                                <div className="w-14 h-14 bg-[#262035] rounded-2xl flex flex-col items-center justify-center border border-white/10 shadow-inner">
                                                    <span className="text-[8px] font-black text-white/30 uppercase tracking-[0.2em] leading-none mb-1">{event.month}</span>
                                                    <span className="text-xl font-black text-white leading-none">{event.day}</span>
                                                </div>
                                                <div className="flex flex-col items-end gap-2">
                                                    <span className={`px-2 py-1 rounded-lg text-[8px] font-black uppercase tracking-widest ${event.type === 'chamber' ? 'bg-green-500/20 text-green-400 border border-green-500/30' : 'bg-blue-500/20 text-blue-400 border border-blue-500/30'}`}>
                                                        {event.type}
                                                    </span>
                                                </div>
                                            </div>

                                            <div className="flex-1">
                                                <h3 className="text-lg font-bold text-white mb-2 leading-tight group-hover:text-purple-300 transition-colors">
                                                    {event.title}
                                                </h3>
                                                <p className="text-xs text-white/40 line-clamp-2 mb-4 leading-relaxed italic">
                                                    {event.description || "Join us for this upcoming community event."}
                                                </p>

                                                <div className="space-y-2 mb-8">
                                                    <div className="flex items-center gap-2 text-[11px] text-white/50">
                                                        <MapPin className="w-3.5 h-3.5 text-[#F27A21]" />
                                                        <span className="truncate">{event.location}</span>
                                                    </div>
                                                    <div className="flex items-center gap-2 text-[11px] text-white/50">
                                                        <Clock className="w-3.5 h-3.5 text-purple-400" />
                                                        <span>{event.time}</span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="flex gap-2 pt-4 border-t border-white/5">
                                                {event.link && (
                                                    <a
                                                        href={event.link}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="flex-1 py-2.5 bg-white/5 hover:bg-white/10 text-white text-center font-black text-[10px] uppercase tracking-wider rounded-xl transition-all border border-white/10 active:scale-95"
                                                    >
                                                        Details
                                                    </a>
                                                )}
                                                {event.registerUrl && (
                                                    <button className="flex-1 py-2.5 bg-[#00D4FF] hover:bg-[#00B8E0] text-[#001D26] font-black text-[10px] uppercase tracking-wider rounded-xl transition-all active:scale-95">
                                                        Register
                                                    </button>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {!isLoading && filteredEvents.length === 0 && (
                            <div className="text-center py-20 bg-black/20 rounded-3xl border border-dashed border-white/10 mt-12">
                                <Search className="w-12 h-12 text-white/10 mx-auto mb-4" />
                                <p className="text-white/40 font-medium tracking-wide uppercase text-sm">No events found matching your search.</p>
                                <button
                                    onClick={() => { setSearchQuery(''); setActiveFilter('all'); }}
                                    className="mt-4 text-purple-400 text-xs font-bold hover:text-purple-300 underline underline-offset-4"
                                >
                                    Clear all filters
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
