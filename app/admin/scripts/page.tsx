'use client';

import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import {
    Plus,
    Search,
    Edit2,
    Trash2,
    Code2,
    Check,
    X,
    Loader2,
    Eye,
    EyeOff,
    Save,
    Layout,
    Globe,
    FileCode,
    ChevronLeft
} from 'lucide-react';
import Link from 'next/link';
import PageHeader from '@/components/PageHeader';
import Footer from '@/components/Footer';

interface CustomScript {
    id: string;
    name: string;
    location: 'header' | 'footer';
    scope: 'sitewide' | 'page';
    page_path: string | null;
    content: string;
    is_active: boolean;
}

export default function AdminScriptsPage() {
    const [scripts, setScripts] = useState<CustomScript[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [isAddingMode, setIsAddingMode] = useState(false);
    const [editingScript, setEditingScript] = useState<CustomScript | null>(null);

    // Form State
    const [formData, setFormData] = useState({
        name: '',
        location: 'header' as 'header' | 'footer',
        scope: 'sitewide' as 'sitewide' | 'page',
        page_path: '',
        content: '',
        is_active: true
    });

    useEffect(() => {
        fetchScripts();
    }, []);

    async function fetchScripts() {
        setLoading(true);
        const { data, error } = await supabase
            .from('custom_scripts')
            .select('*')
            .order('created_at', { ascending: false });

        if (!error) {
            setScripts(data || []);
        }
        setLoading(false);
    }

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setLoading(true);

        const payload = {
            ...formData,
            page_path: formData.scope === 'page' ? formData.page_path : null
        };

        if (editingScript) {
            const { error } = await supabase
                .from('custom_scripts')
                .update(payload)
                .eq('id', editingScript.id);

            if (error) alert('Error updating script: ' + error.message);
        } else {
            const { error } = await supabase
                .from('custom_scripts')
                .insert([payload]);

            if (error) alert('Error adding script: ' + error.message);
        }

        resetForm();
        await fetchScripts();
    }

    async function toggleActive(script: CustomScript) {
        const { error } = await supabase
            .from('custom_scripts')
            .update({ is_active: !script.is_active })
            .eq('id', script.id);

        if (!error) {
            setScripts(scripts.map(s => s.id === script.id ? { ...s, is_active: !s.is_active } : s));
        }
    }

    async function deleteScript(id: string) {
        if (!confirm('Are you sure you want to delete this script? This action cannot be undone.')) return;

        const { error } = await supabase
            .from('custom_scripts')
            .delete()
            .eq('id', id);

        if (!error) {
            setScripts(scripts.filter(s => s.id !== id));
        }
    }

    function startEdit(script: CustomScript) {
        setEditingScript(script);
        setFormData({
            name: script.name,
            location: script.location,
            scope: script.scope,
            page_path: script.page_path || '',
            content: script.content,
            is_active: script.is_active
        });
        setIsAddingMode(true);
    }

    function resetForm() {
        setFormData({
            name: '',
            location: 'header',
            scope: 'sitewide',
            page_path: '',
            content: '',
            is_active: true
        });
        setEditingScript(null);
        setIsAddingMode(false);
    }

    const filteredScripts = scripts.filter(s =>
        s.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>
            <PageHeader
                badge="Settings"
                title="Custom Scripts"
                description="Manage global or page-specific header and footer scripts (GTM, Analytics, Meta Pixel, etc.)"
                breadcrumbs={[
                    { label: 'Admin', href: '/admin' },
                    { label: 'Scripts' },
                ]}
            />

            <section className="relative py-12 overflow-hidden min-h-screen">
                <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

                    <div className="flex flex-col md:flex-row gap-4 mb-8 items-center justify-between">
                        <Link href="/admin" className="flex items-center gap-2 text-white/60 hover:text-white transition-colors mr-auto">
                            <ChevronLeft className="w-5 h-5" />
                            Back to Dashboard
                        </Link>

                        <div className="relative w-full md:w-80">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                            <input
                                type="text"
                                placeholder="Search scripts..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="input-glass pl-12 w-full"
                            />
                        </div>

                        <button
                            onClick={() => setIsAddingMode(true)}
                            className="btn-glow w-full md:w-auto"
                        >
                            <Plus className="w-5 h-5" />
                            Add New Script
                        </button>
                    </div>

                    {isAddingMode && (
                        <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-slate-950/80 backdrop-blur-sm">
                            <div className="glass-card w-full max-w-3xl max-h-[90vh] overflow-y-auto p-8 relative">
                                <button
                                    onClick={resetForm}
                                    className="absolute top-4 right-4 p-2 text-white/40 hover:text-white transition-colors"
                                >
                                    <X className="w-6 h-6" />
                                </button>

                                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                                    <Code2 className="w-7 h-7 text-purple-400" />
                                    {editingScript ? 'Edit Script' : 'Add New Script'}
                                </h2>

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div>
                                        <label className="block text-sm font-medium text-white/60 mb-1 ml-1">Script Name / Label</label>
                                        <input
                                            required
                                            type="text"
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            className="input-glass w-full"
                                            placeholder="e.g. Google Tag Manager"
                                        />
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-medium text-white/60 mb-1 ml-1">Location</label>
                                            <select
                                                value={formData.location}
                                                onChange={(e) => setFormData({ ...formData, location: e.target.value as any })}
                                                className="input-glass select-glass w-full"
                                            >
                                                <option value="header">Header (Top of &lt;head&gt;)</option>
                                                <option value="footer">Footer (Bottom of &lt;body&gt;)</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-white/60 mb-1 ml-1">Scope</label>
                                            <select
                                                value={formData.scope}
                                                onChange={(e) => setFormData({ ...formData, scope: e.target.value as any })}
                                                className="input-glass select-glass w-full"
                                            >
                                                <option value="sitewide">Sitewide (Every Page)</option>
                                                <option value="page">Page Specific</option>
                                            </select>
                                        </div>
                                    </div>

                                    {formData.scope === 'page' && (
                                        <div className="animate-in fade-in slide-in-from-top-2 duration-300">
                                            <label className="block text-sm font-medium text-white/60 mb-1 ml-1">Target Page Path</label>
                                            <input
                                                required
                                                type="text"
                                                value={formData.page_path}
                                                onChange={(e) => setFormData({ ...formData, page_path: e.target.value })}
                                                className="input-glass w-full"
                                                placeholder="e.g. /contact"
                                            />
                                        </div>
                                    )}

                                    <div>
                                        <label className="block text-sm font-medium text-white/60 mb-1 ml-1">Script Content (HTML/JS)</label>
                                        <textarea
                                            required
                                            value={formData.content}
                                            onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                                            rows={12}
                                            className="input-glass w-full font-mono text-sm"
                                            placeholder="<script>...</script>"
                                        ></textarea>
                                    </div>

                                    <div className="flex gap-4 pt-4">
                                        <button
                                            type="button"
                                            onClick={resetForm}
                                            className="btn-secondary flex-1"
                                        >
                                            Cancel
                                        </button>
                                        <button
                                            type="submit"
                                            disabled={loading}
                                            className="btn-glow flex-1"
                                        >
                                            {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : (editingScript ? 'Update' : 'Save')}
                                            {!loading && <Save className="w-5 h-5 ml-2" />}
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    )}

                    <div className="glass-card overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-white/5">
                                        <th className="px-6 py-4 text-sm font-semibold text-white/60">Script</th>
                                        <th className="px-6 py-4 text-sm font-semibold text-white/60">Location</th>
                                        <th className="px-6 py-4 text-sm font-semibold text-white/60">Scope</th>
                                        <th className="px-6 py-4 text-sm font-semibold text-white/60">Status</th>
                                        <th className="px-6 py-4 text-sm font-semibold text-white/60 text-right">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-white/5">
                                    {loading && scripts.length === 0 ? (
                                        <tr>
                                            <td colSpan={5} className="px-6 py-12 text-center text-white/40">
                                                <Loader2 className="w-8 h-8 animate-spin mx-auto text-purple-500 mb-2" />
                                                Loading scripts...
                                            </td>
                                        </tr>
                                    ) : filteredScripts.length === 0 ? (
                                        <tr>
                                            <td colSpan={5} className="px-6 py-12 text-center text-white/40 italic">
                                                No scripts found. Add your first tag manager or analytics script above.
                                            </td>
                                        </tr>
                                    ) : (
                                        filteredScripts.map((script) => (
                                            <tr key={script.id} className="hover:bg-white/5 transition-colors group">
                                                <td className="px-6 py-4">
                                                    <div className="flex items-center gap-3">
                                                        <div className="w-10 h-10 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center">
                                                            <Code2 className="w-5 h-5 text-orange-400" />
                                                        </div>
                                                        <div className="font-semibold text-white">{script.name}</div>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4">
                                                    <div className="flex items-center gap-2 text-sm">
                                                        {script.location === 'header' ? (
                                                            <>
                                                                <Layout className="w-4 h-4 text-blue-400" />
                                                                <span className="text-white/80">Header</span>
                                                            </>
                                                        ) : (
                                                            <>
                                                                <Layout className="w-4 h-4 text-green-400 rotate-180" />
                                                                <span className="text-white/80">Footer</span>
                                                            </>
                                                        )}
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4">
                                                    <div className="flex items-center gap-2 text-sm text-white/60">
                                                        {script.scope === 'sitewide' ? (
                                                            <>
                                                                <Globe className="w-4 h-4 text-purple-400" />
                                                                <span>Sitewide</span>
                                                            </>
                                                        ) : (
                                                            <>
                                                                <FileCode className="w-4 h-4 text-orange-400" />
                                                                <span>{script.page_path}</span>
                                                            </>
                                                        )}
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4">
                                                    <button
                                                        onClick={() => toggleActive(script)}
                                                        className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider transition-colors ${script.is_active
                                                            ? 'bg-green-500/10 text-green-400 hover:bg-green-500/20 shadow-[0_0_10px_rgba(34,197,94,0.1)]'
                                                            : 'bg-white/5 text-white/30 hover:bg-white/10'
                                                            }`}
                                                    >
                                                        {script.is_active ? <Eye className="w-3.5 h-3.5" /> : <EyeOff className="w-3.5 h-3.5" />}
                                                        {script.is_active ? 'Active' : 'Muted'}
                                                    </button>
                                                </td>
                                                <td className="px-6 py-4 text-right">
                                                    <div className="flex justify-end gap-2">
                                                        <button
                                                            onClick={() => startEdit(script)}
                                                            className="p-2 rounded-lg bg-white/5 text-white/40 hover:text-purple-400 hover:bg-purple-500/10 transition-all"
                                                        >
                                                            <Edit2 className="w-4 h-4" />
                                                        </button>
                                                        <button
                                                            onClick={() => deleteScript(script.id)}
                                                            className="p-2 rounded-lg bg-white/5 text-white/40 hover:text-red-400 hover:bg-red-500/10 transition-all opacity-0 group-hover:opacity-100"
                                                        >
                                                            <Trash2 className="w-4 h-4" />
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}
