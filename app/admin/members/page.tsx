'use client';

import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import {
    Plus,
    Search,
    Edit2,
    Trash2,
    Eye,
    EyeOff,
    MoreVertical,
    Star,
    Building2,
    MapPin,
    Phone,
    Globe,
    Loader2,
    Check,
    X,
    Upload,
    ImageIcon
} from 'lucide-react';
import Image from 'next/image';
import PageHeader from '@/components/PageHeader';
import Footer from '@/components/Footer';

// Tier display names and colors
const tierInfo = {
    sponsor: { label: 'Sponsor', color: 'from-orange-500 to-orange-600', textColor: 'text-orange-300', bgColor: 'bg-orange-500/20' },
    ambassador: { label: 'Ambassador', color: 'from-purple-500 to-purple-600', textColor: 'text-purple-300', bgColor: 'bg-purple-500/20' },
    member: { label: 'Member', color: 'from-slate-500 to-slate-600', textColor: 'text-white/70', bgColor: 'bg-white/10' },
};

interface Member {
    id: string;
    name: string;
    category: string;
    address: string;
    phone: string | null;
    website: string | null;
    image_url: string | null;
    tier: 'sponsor' | 'ambassador' | 'member';
    is_active: boolean;
}

export default function AdminMembersPage() {
    const [members, setMembers] = useState<Member[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [isAddingMode, setIsAddingMode] = useState(false);
    const [editingMember, setEditingMember] = useState<Member | null>(null);
    const [uploading, setUploading] = useState(false);
    const [logoPreview, setLogoPreview] = useState<string | null>(null);

    // Form State
    const [formData, setFormData] = useState({
        name: '',
        category: '',
        address: '',
        phone: '',
        website: '',
        tier: 'member' as 'sponsor' | 'ambassador' | 'member',
        is_active: true,
        image_url: ''
    });

    useEffect(() => {
        fetchMembers();
    }, []);

    async function fetchMembers() {
        setLoading(true);
        const { data, error } = await supabase
            .from('members')
            .select('*')
            .order('tier', { ascending: true }) // This is a bit tricky with strings, but okay for now
            .order('name', { ascending: true });

        if (error) {
            console.error('Error fetching members:', error);
        } else {
            setMembers(data || []);
        }
        setLoading(false);
    }

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setLoading(true);

        if (editingMember) {
            const { error } = await supabase
                .from('members')
                .update({
                    name: formData.name,
                    category: formData.category,
                    address: formData.address,
                    phone: formData.phone || null,
                    website: formData.website || null,
                    tier: formData.tier,
                    is_active: formData.is_active,
                    image_url: formData.image_url || null
                })
                .eq('id', editingMember.id);

            if (error) console.error('Error updating member:', error);
        } else {
            const { error } = await supabase
                .from('members')
                .insert([{
                    name: formData.name,
                    category: formData.category,
                    address: formData.address,
                    phone: formData.phone || null,
                    website: formData.website || null,
                    tier: formData.tier,
                    is_active: formData.is_active,
                    image_url: formData.image_url || null
                }]);

            if (error) console.error('Error adding member:', error);
        }

        resetForm();
        await fetchMembers();
    }

    async function toggleActive(member: Member) {
        const { error } = await supabase
            .from('members')
            .update({ is_active: !member.is_active })
            .eq('id', member.id);

        if (error) {
            console.error('Error toggling active state:', error);
        } else {
            setMembers(members.map(m => m.id === member.id ? { ...m, is_active: !m.is_active } : m));
        }
    }

    async function deleteMember(id: string) {
        if (!confirm('Are you sure you want to delete this member?')) return;

        const { error } = await supabase
            .from('members')
            .delete()
            .eq('id', id);

        if (error) {
            console.error('Error deleting member:', error);
        } else {
            setMembers(members.filter(m => m.id !== id));
        }
    }

    function startEdit(member: Member) {
        setEditingMember(member);
        setFormData({
            name: member.name,
            category: member.category,
            address: member.address,
            phone: member.phone || '',
            website: member.website || '',
            tier: member.tier,
            is_active: member.is_active,
            image_url: member.image_url || ''
        });
        setLogoPreview(member.image_url || null);
        setIsAddingMode(true);
    }

    async function handleFileUpload(e: React.ChangeEvent<HTMLInputElement>) {
        const file = e.target.files?.[0];
        if (!file) return;

        if (!file.type.startsWith('image/')) {
            alert('Please upload an image file.');
            return;
        }

        setUploading(true);
        try {
            const fileExt = file.name.split('.').pop();
            const fileName = `${Math.random().toString(36).substring(2)}_${Date.now()}.${fileExt}`;
            const filePath = `logos/${fileName}`;

            const { error: uploadError } = await supabase.storage
                .from('member-logos')
                .upload(filePath, file);

            if (uploadError) throw uploadError;

            const { data: { publicUrl } } = supabase.storage
                .from('member-logos')
                .getPublicUrl(filePath);

            setFormData({ ...formData, image_url: publicUrl });
            setLogoPreview(publicUrl);
        } catch (error: any) {
            console.error('Error uploading logo:', error.message);
            alert('Error uploading logo: ' + error.message);
        } finally {
            setUploading(false);
        }
    }

    function resetForm() {
        setFormData({
            name: '',
            category: '',
            address: '',
            phone: '',
            website: '',
            tier: 'member',
            is_active: true,
            image_url: ''
        });
        setEditingMember(null);
        setLogoPreview(null);
        setIsAddingMode(false);
    }

    const filteredMembers = members.filter(m =>
        m.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        m.category.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>
            <PageHeader
                badge="Admin"
                title="Member Management"
                description="Add, update, or remove chamber members from the directory."
                breadcrumbs={[
                    { label: 'Admin', href: '/admin' },
                    { label: 'Members' },
                ]}
            />

            <section className="relative py-12 overflow-hidden min-h-screen">
                <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

                    {/* Controls */}
                    <div className="flex flex-col md:flex-row gap-4 mb-8 items-center justify-between">
                        <div className="relative w-full md:w-96">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                            <input
                                type="text"
                                placeholder="Search members..."
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
                            Add New Member
                        </button>
                    </div>

                    {/* Form Modal (Simplified as conditional section) */}
                    {isAddingMode && (
                        <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-slate-950/80 backdrop-blur-sm">
                            <div className="glass-card w-full max-w-2xl max-h-[90vh] overflow-y-auto p-8 relative">
                                <button
                                    onClick={resetForm}
                                    className="absolute top-4 right-4 p-2 text-white/40 hover:text-white transition-colors"
                                >
                                    <X className="w-6 h-6" />
                                </button>

                                <h2 className="text-2xl font-bold text-white mb-6">
                                    {editingMember ? 'Edit Member' : 'Add New Member'}
                                </h2>

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    {/* Logo Upload Section */}
                                    <div className="p-6 glass-card border-dashed border-2 border-white/10 rounded-2xl">
                                        <label className="block text-sm font-medium text-white/60 mb-4 ml-1 uppercase tracking-wider">Business Logo</label>

                                        <div className="flex flex-col md:flex-row items-center gap-8">
                                            {/* Preview Area */}
                                            <div className="w-24 h-24 rounded-2xl bg-white/5 border border-white/10 overflow-hidden flex items-center justify-center shrink-0 relative group">
                                                {logoPreview ? (
                                                    <>
                                                        <img src={logoPreview} alt="Preview" className="w-full h-full object-contain p-2" />
                                                        <button
                                                            type="button"
                                                            onClick={() => { setLogoPreview(null); setFormData({ ...formData, image_url: '' }); }}
                                                            className="absolute inset-0 bg-red-500/80 items-center justify-center hidden group-hover:flex transition-all"
                                                        >
                                                            <X className="w-5 h-5 text-white" />
                                                        </button>
                                                    </>
                                                ) : (
                                                    <div className="text-white/20 flex flex-col items-center">
                                                        <ImageIcon className="w-8 h-8 mb-1" />
                                                        <span className="text-[8px] uppercase font-bold tracking-widest text-center px-1">No Logo</span>
                                                    </div>
                                                )}

                                                {uploading && (
                                                    <div className="absolute inset-0 bg-slate-900/60 flex items-center justify-center z-10 backdrop-blur-sm">
                                                        <Loader2 className="w-5 h-5 text-purple-500 animate-spin" />
                                                    </div>
                                                )}
                                            </div>

                                            {/* Upload Controls */}
                                            <div className="flex-1">
                                                <p className="text-white/40 text-xs mb-3 leading-relaxed">
                                                    <strong className="text-purple-400 uppercase tracking-tighter">Recommended:</strong> Square PNG/SVG. Transparent background preferred. <br />Ideal size: <span className="text-white font-bold">400x400px</span>.
                                                </p>

                                                <label className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 text-white text-sm rounded-xl transition-all cursor-pointer border border-white/10 font-bold group">
                                                    <Upload className="w-4 h-4 text-purple-400 group-hover:scale-110 transition-transform" />
                                                    <span>{logoPreview ? 'Change' : 'Upload Logo'}</span>
                                                    <input
                                                        type="file"
                                                        className="hidden"
                                                        accept="image/*"
                                                        onChange={handleFileUpload}
                                                        disabled={uploading}
                                                    />
                                                </label>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-white/60 mb-1">Business Name</label>
                                            <input
                                                required
                                                type="text"
                                                value={formData.name}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                className="input-glass w-full"
                                                placeholder="e.g. AAA Restoration"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-white/60 mb-1">Category</label>
                                            <input
                                                required
                                                type="text"
                                                value={formData.category}
                                                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                                                className="input-glass w-full"
                                                placeholder="e.g. Cleaning Services"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-white/60 mb-1">Full Address</label>
                                        <input
                                            required
                                            type="text"
                                            value={formData.address}
                                            onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                                            className="input-glass w-full"
                                            placeholder="PO BOX 123, Salt Lake City, UT 84157"
                                        />
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-white/60 mb-1">Phone (Optional)</label>
                                            <input
                                                type="tel"
                                                value={formData.phone}
                                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                                className="input-glass w-full"
                                                placeholder="(801) 000-0000"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-white/60 mb-1">Website (Optional)</label>
                                            <input
                                                type="text"
                                                value={formData.website}
                                                onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                                                className="input-glass w-full"
                                                placeholder="example.com"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-white/60 mb-1">Membership Tier</label>
                                            <select
                                                value={formData.tier}
                                                onChange={(e) => setFormData({ ...formData, tier: e.target.value as any })}
                                                className="input-glass select-glass w-full"
                                            >
                                                <option value="member">Member</option>
                                                <option value="ambassador">Ambassador</option>
                                                <option value="sponsor">Sponsor (Gold)</option>
                                            </select>
                                        </div>
                                        <div className="flex items-center justify-center pt-6">
                                            <label className="flex items-center gap-3 cursor-pointer">
                                                <input
                                                    type="checkbox"
                                                    checked={formData.is_active}
                                                    onChange={(e) => setFormData({ ...formData, is_active: e.target.checked })}
                                                    className="w-5 h-5 rounded bg-white/5 border-white/10 text-purple-600 focus:ring-purple-500"
                                                />
                                                <span className="text-white font-medium">Show in Directory</span>
                                            </label>
                                        </div>
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
                                            {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : (editingMember ? 'Update Member' : 'Save Member')}
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    )}

                    {/* Members Table/List */}
                    <div className="glass-card overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-white/5">
                                        <th className="px-6 py-4 text-sm font-semibold text-white/60">Member</th>
                                        <th className="px-6 py-4 text-sm font-semibold text-white/60">Category</th>
                                        <th className="px-6 py-4 text-sm font-semibold text-white/60">Tier</th>
                                        <th className="px-6 py-4 text-sm font-semibold text-white/60">Status</th>
                                        <th className="px-6 py-4 text-sm font-semibold text-white/60 text-right">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-white/5">
                                    {loading && members.length === 0 ? (
                                        <tr>
                                            <td colSpan={5} className="px-6 py-12 text-center">
                                                <Loader2 className="w-8 h-8 animate-spin mx-auto text-purple-500" />
                                                <p className="mt-2 text-white/40">Loading members...</p>
                                            </td>
                                        </tr>
                                    ) : filteredMembers.length === 0 ? (
                                        <tr>
                                            <td colSpan={5} className="px-6 py-12 text-center">
                                                <p className="text-white/40">No members found.</p>
                                            </td>
                                        </tr>
                                    ) : (
                                        filteredMembers.map((member) => (
                                            <tr key={member.id} className="hover:bg-white/5 transition-colors">
                                                <td className="px-6 py-4">
                                                    <div className="flex items-center gap-3">
                                                        <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center relative overflow-hidden">
                                                            <Image
                                                                src={member.image_url || "/images/macc-logo.png"}
                                                                alt={member.name}
                                                                width={32}
                                                                height={32}
                                                                className="object-contain p-1"
                                                                unoptimized
                                                            />
                                                        </div>
                                                        <div>
                                                            <div className="font-semibold text-white">{member.name}</div>
                                                            <div className="text-xs text-white/40 flex items-center gap-1">
                                                                <MapPin className="w-3 h-3" />
                                                                {member.address.split(',')[0]}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4">
                                                    <span className="text-sm text-white/80">{member.category}</span>
                                                </td>
                                                <td className="px-6 py-4">
                                                    <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${tierInfo[member.tier].bgColor} ${tierInfo[member.tier].textColor}`}>
                                                        {member.tier}
                                                    </span>
                                                </td>
                                                <td className="px-6 py-4">
                                                    <button
                                                        onClick={() => toggleActive(member)}
                                                        className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium transition-colors ${member.is_active
                                                            ? 'bg-green-500/10 text-green-400 hover:bg-green-500/20'
                                                            : 'bg-red-500/10 text-red-400 hover:bg-red-500/20'
                                                            }`}
                                                    >
                                                        {member.is_active ? <Eye className="w-3.5 h-3.5" /> : <EyeOff className="w-3.5 h-3.5" />}
                                                        {member.is_active ? 'Active' : 'Disabled'}
                                                    </button>
                                                </td>
                                                <td className="px-6 py-4 text-right">
                                                    <div className="flex justify-end gap-2">
                                                        <button
                                                            onClick={() => startEdit(member)}
                                                            className="p-2 rounded-lg bg-white/5 text-white/60 hover:text-purple-400 hover:bg-purple-500/10 transition-all"
                                                            title="Edit"
                                                        >
                                                            <Edit2 className="w-4 h-4" />
                                                        </button>
                                                        <button
                                                            onClick={() => deleteMember(member.id)}
                                                            className="p-2 rounded-lg bg-white/5 text-white/60 hover:text-red-400 hover:bg-red-500/10 transition-all"
                                                            title="Delete"
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
