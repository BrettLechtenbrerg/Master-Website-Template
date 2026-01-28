'use client';

import { Search, RotateCcw } from 'lucide-react';

interface EventFiltersProps {
    viewMode: 'list' | 'card';
    setViewMode: (mode: 'list' | 'card') => void;
    activeFilter: string;
    setActiveFilter: (filter: string) => void;
    dateFilter: string;
    setDateFilter: (date: string) => void;
    categoryFilter: string;
    setCategoryFilter: (category: string) => void;
    searchQuery: string;
    setSearchQuery: (query: string) => void;
    onSearch: () => void;
    onClear: () => void;
}

export default function EventFilters({
    viewMode,
    setViewMode,
    activeFilter,
    setActiveFilter,
    dateFilter,
    setDateFilter,
    categoryFilter,
    setCategoryFilter,
    searchQuery,
    setSearchQuery,
    onSearch,
    onClear,
}: EventFiltersProps) {
    return (
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-12 shadow-2xl backdrop-blur-xl">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6 items-end">

                {/* Select View */}
                <div className="space-y-2">
                    <label className="text-[11px] font-black text-white/40 uppercase tracking-widest block ml-1">
                        Select View
                    </label>
                    <select
                        value={viewMode}
                        onChange={(e) => setViewMode(e.target.value as 'list' | 'card')}
                        className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-purple-500/50 appearance-none cursor-pointer"
                    >
                        <option value="list">List view</option>
                        <option value="card">Card view</option>
                    </select>
                </div>

                {/* Filter by Date */}
                <div className="space-y-2">
                    <label className="text-[11px] font-black text-white/40 uppercase tracking-widest block ml-1">
                        Filter by Date
                    </label>
                    <input
                        type="date"
                        value={dateFilter}
                        onChange={(e) => setDateFilter(e.target.value)}
                        className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-purple-500/50 [color-scheme:dark]"
                    />
                </div>

                {/* Filter by Type */}
                <div className="space-y-2">
                    <label className="text-[11px] font-black text-white/40 uppercase tracking-widest block ml-1">
                        Filter by Type
                    </label>
                    <select
                        value={activeFilter}
                        onChange={(e) => setActiveFilter(e.target.value)}
                        className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-purple-500/50 appearance-none cursor-pointer"
                    >
                        <option value="all">All Types</option>
                        <option value="chamber">Chamber Events</option>
                        <option value="community">Community Events</option>
                    </select>
                </div>

                {/* Filter by Event Categories */}
                <div className="space-y-2">
                    <label className="text-[11px] font-black text-white/40 uppercase tracking-widest block ml-1">
                        Filter by Event Categories
                    </label>
                    <select
                        value={categoryFilter}
                        onChange={(e) => setCategoryFilter(e.target.value)}
                        className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-purple-500/50 appearance-none cursor-pointer"
                    >
                        <option value="all">All Categories</option>
                        <option value="Networking">Networking</option>
                        <option value="Education">Education</option>
                        <option value="Ribbon Cutting">Ribbon Cutting</option>
                        <option value="Community">Community</option>
                    </select>
                </div>

                {/* Search by Keyword */}
                <div className="space-y-2">
                    <label className="text-[11px] font-black text-white/40 uppercase tracking-widest block ml-1">
                        Search by Keyword
                    </label>
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20" />
                        <input
                            type="text"
                            placeholder="Search events..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full bg-black/40 border border-white/10 rounded-xl py-2.5 pl-10 pr-4 text-sm text-white placeholder:text-white/10 focus:outline-none focus:border-purple-500/50 transition-colors"
                        />
                    </div>
                </div>

                {/* Buttons */}
                <div className="flex gap-2">
                    <button
                        onClick={onSearch}
                        className="flex-1 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 text-white font-black uppercase tracking-widest text-[11px] py-3 rounded-xl transition-all shadow-lg shadow-purple-500/20 active:scale-95 flex items-center justify-center gap-2"
                    >
                        Search
                    </button>
                    <button
                        onClick={onClear}
                        className="bg-white/5 border border-white/10 hover:bg-white/10 text-white/70 font-black uppercase tracking-widest text-[11px] px-6 py-3 rounded-xl transition-all active:scale-95"
                    >
                        Clear
                    </button>
                </div>

            </div>
        </div>
    );
}

