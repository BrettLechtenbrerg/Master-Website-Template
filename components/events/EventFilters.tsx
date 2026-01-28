'use client';

import { Search, CheckCircle2 } from 'lucide-react';
import { EventType } from './EventItem';

interface EventFiltersProps {
    activeFilter: 'all' | EventType;
    setActiveFilter: (filter: 'all' | EventType) => void;
    searchQuery: string;
    setSearchQuery: (query: string) => void;
}

export default function EventFilters({
    activeFilter,
    setActiveFilter,
    searchQuery,
    setSearchQuery,
}: EventFiltersProps) {
    return (
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div className="flex flex-wrap gap-2">
                {(['all', 'chamber', 'community'] as const).map((filter) => (
                    <button
                        key={filter}
                        onClick={() => setActiveFilter(filter)}
                        className={`px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest transition-all ${activeFilter === filter
                                ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg shadow-purple-500/20'
                                : 'bg-white/5 border border-white/10 text-white/50 hover:bg-white/10 hover:text-white'
                            }`}
                    >
                        {filter === 'all' ? 'All Events' : `${filter} Events`}
                    </button>
                ))}
            </div>

            <div className="flex items-center gap-4">
                <div className="relative flex-1 md:w-64">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                    <input
                        type="text"
                        placeholder="Search events..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full bg-black/20 border border-white/10 rounded-xl py-2 pl-10 pr-4 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-purple-500/50 transition-colors"
                    />
                </div>
                <span className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-[10px] font-bold text-white/40 uppercase tracking-widest">
                    <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                    Future-only
                </span>
            </div>
        </div>
    );
}
