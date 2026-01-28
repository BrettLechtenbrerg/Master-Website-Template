'use client';

import { Calendar, Plus } from 'lucide-react';

export default function EventCalendarView() {
    return (
        <section className="glass-card p-6 border border-white/10 bg-black/20">
            <div className="flex flex-col md:flex-row items-center justify-between mb-8 gap-4">
                <div>
                    <h2 className="text-2xl font-black text-white uppercase tracking-tighter">Calendar View</h2>
                    <p className="text-sm text-white/50 mt-1">View all Chamber and Community events in a calendar format.</p>
                </div>
                <div className="flex flex-wrap gap-2">
                    <button className="flex items-center justify-center gap-2 px-4 py-2 rounded-full text-sm font-bold bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 hover:bg-emerald-500/20 transition-all">
                        <Calendar className="w-4 h-4" />
                        Subscribe
                    </button>
                    <button className="flex items-center justify-center gap-2 px-4 py-2 rounded-full text-sm font-bold bg-white/5 border border-white/10 text-white/60 hover:bg-white/10 transition-all">
                        <Plus className="w-4 h-4" />
                        Add to Google
                    </button>
                </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/40 overflow-hidden">
                <div className="aspect-[16/10] w-full bg-slate-800/50 flex flex-col items-center justify-center border border-dashed border-white/10 p-12 text-center">
                    <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-4">
                        <Calendar className="w-8 h-8 text-white/20" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">Google Calendar Integration</h3>
                    <p className="text-white/40 max-w-md mx-auto leading-relaxed">
                        In a production environment, this space would be occupied by an interactive Google Calendar iframe or a custom calendar component populated with GHL event data.
                    </p>
                    <div className="mt-8 p-4 rounded-xl bg-purple-500/5 border border-purple-500/10 inline-block">
                        <code className="text-[10px] text-purple-300 uppercase tracking-widest font-bold">
                            // TODO: Replace with &lt;iframe src="..." /&gt; or GHL Integration
                        </code>
                    </div>
                </div>
            </div>
        </section>
    );
}
