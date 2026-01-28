'use client';

import { Calendar, Plus, Users, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function EventSidebar() {
    return (
        <aside className="space-y-6">
            {/* Calendar View */}
            <section className="glass-card p-6 border border-white/10">
                <div className="flex items-center justify-between mb-4">
                    <div>
                        <h2 className="text-lg font-bold text-white uppercase tracking-tighter">Calendar View</h2>
                        <p className="text-xs text-white/50">Subscribe to stay up to date.</p>
                    </div>
                    <span className="px-2 py-1 rounded-full text-[10px] font-bold bg-white/5 border border-white/10 text-white/60">
                        Google Calendar
                    </span>
                </div>

                <div className="rounded-xl border border-white/10 bg-black/20 p-4 mb-4">
                    <p className="text-sm text-white/60 leading-relaxed mb-4">
                        In production, this iframe would be your public "All Events" calendar (Chamber + Community).
                    </p>
                    <div className="aspect-square bg-slate-800/50 rounded-lg flex items-center justify-center border border-dashed border-white/20">
                        <span className="text-white/30 text-xs italic">Calendar Iframe Placeholder</span>
                    </div>
                </div>

                <div className="flex flex-wrap gap-2">
                    <button className="flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-full text-[13px] font-bold bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 hover:bg-emerald-500/20 transition-all">
                        <Calendar className="w-4 h-4" />
                        Subscribe
                    </button>
                    <button className="flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-full text-[13px] font-bold bg-white/5 border border-white/10 text-white/60 hover:bg-white/10 transition-all">
                        <Plus className="w-4 h-4" />
                        Add to Google
                    </button>
                </div>
            </section>

            {/* Submit Event */}
            <section className="glass-card p-6 border border-white/10 bg-gradient-to-br from-indigo-900/40 to-slate-900">
                <div className="flex items-center justify-between mb-4">
                    <div>
                        <h2 className="text-lg font-bold text-white uppercase tracking-tighter">Submit Event</h2>
                        <p className="text-xs text-white/50">Events are reviewed before posting.</p>
                    </div>
                    <span className="px-2 py-1 rounded-full text-[10px] font-bold bg-white/5 border border-white/10 text-white/60">
                        Approval Required
                    </span>
                </div>

                <div className="p-4 rounded-xl border border-white/10 bg-white/5 mb-4">
                    <h3 className="text-sm font-bold text-white mb-2">Have an event to share?</h3>
                    <p className="text-xs text-white/60 leading-relaxed">
                        Submit your event details for review. If approved, it will appear in the Community Events calendar.
                    </p>
                </div>

                <div className="space-y-2">
                    <button className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-full text-sm font-bold bg-gradient-to-r from-blue-500 to-indigo-600 text-white hover:brightness-110 transition-all">
                        Open Submission Form
                    </button>
                    <button className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-full text-sm font-bold bg-white/5 border border-white/10 text-white/70 hover:bg-white/10 transition-all">
                        Event Guidelines
                    </button>
                </div>
            </section>

            {/* Membership */}
            <section className="glass-card p-6 border border-white/10">
                <div className="flex items-center justify-between mb-4">
                    <div>
                        <h2 className="text-lg font-bold text-white uppercase tracking-tighter">Chamber Membership</h2>
                        <p className="text-xs text-white/50">Visibility, connections, and support.</p>
                    </div>
                    <span className="px-2 py-1 rounded-full text-[10px] font-bold bg-white/5 border border-white/10 text-white/60">
                        Member Benefits
                    </span>
                </div>

                <div className="p-4 rounded-xl border border-white/10 bg-white/5 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center mb-3">
                        <Users className="w-5 h-5 text-orange-400" />
                    </div>
                    <h3 className="text-sm font-bold text-white mb-2">Get involved in Murray</h3>
                    <p className="text-xs text-white/60 leading-relaxed">
                        Join the Chamber to promote your business and get plugged into local opportunities.
                    </p>
                </div>

                <div className="space-y-2">
                    <Link href="/join" className="block w-full">
                        <button className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-full text-sm font-bold bg-gradient-to-r from-orange-400 to-orange-600 text-white hover:brightness-110 transition-all">
                            Join Now
                            <ArrowRight className="w-4 h-4" />
                        </button>
                    </Link>
                    <button className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-full text-sm font-bold bg-white/5 border border-white/10 text-white/70 hover:bg-white/10 transition-all">
                        View Benefits
                    </button>
                </div>
            </section>
        </aside>
    );
}
