'use client';

import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import Header from '@/components/power-hub/Header';
import {
  Plus,
  Search,
  Edit2,
  Trash2,
  Eye,
  EyeOff,
  Star,
  MapPin,
  Loader2,
  X,
  Upload,
  ImageIcon,
  RefreshCw
} from 'lucide-react';
import Image from 'next/image';

// Tier display names and colors
const tierInfo = {
  sponsor: { label: 'Sponsor', color: 'bg-orange-100 text-orange-700', border: 'border-orange-200' },
  ambassador: { label: 'Ambassador', color: 'bg-purple-100 text-purple-700', border: 'border-purple-200' },
  member: { label: 'Member', color: 'bg-gray-100 text-gray-700', border: 'border-gray-200' },
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

export default function MembersPage() {
  const [members, setMembers] = useState<Member[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [isAddingMode, setIsAddingMode] = useState(false);
  const [editingMember, setEditingMember] = useState<Member | null>(null);
  const [uploading, setUploading] = useState(false);
  const [logoPreview, setLogoPreview] = useState<string | null>(null);
  const [error, setError] = useState('');

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
    setError('');
    try {
      const { data, error } = await supabase
        .from('members')
        .select('*')
        .order('tier', { ascending: true })
        .order('name', { ascending: true });

      if (error) {
        setError('Error loading members: ' + error.message);
      } else {
        setMembers(data || []);
      }
    } catch (err) {
      setError('Failed to connect to database');
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

      if (error) setError('Error updating member: ' + error.message);
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

      if (error) setError('Error adding member: ' + error.message);
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
      setError('Error toggling status: ' + error.message);
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
      setError('Error deleting member: ' + error.message);
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
    <div>
      <Header title="Member Directory" subtitle="Manage chamber members, update tiers, and control visibility" />

      <div className="p-8">
        {/* Controls */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsAddingMode(true)}
              className="flex items-center gap-2 px-4 py-2 bg-[#4B2E83] text-white rounded-lg hover:bg-[#7A59B5] transition-colors"
            >
              <Plus size={18} />
              Add Member
            </button>
            <button
              onClick={fetchMembers}
              disabled={loading}
              className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors disabled:opacity-50"
            >
              <RefreshCw size={18} className={loading ? 'animate-spin' : ''} />
              Refresh
            </button>
          </div>

          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="text"
              placeholder="Search members..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4B2E83]/20 focus:border-[#4B2E83] w-64"
            />
          </div>
        </div>

        {/* Error Display */}
        {error && (
          <div className="flex items-center gap-3 p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 mb-6">
            <X size={20} />
            <p>{error}</p>
            <button onClick={() => setError('')} className="ml-auto text-red-500 hover:text-red-700">✕</button>
          </div>
        )}

        {/* Loading State */}
        {loading && members.length === 0 && (
          <div className="text-center py-12">
            <Loader2 size={48} className="mx-auto text-[#4B2E83] animate-spin mb-4" />
            <p className="text-gray-500">Loading members...</p>
          </div>
        )}

        {/* Members Table */}
        {!loading && (
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Member</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Category</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Tier</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Status</th>
                  <th className="px-6 py-4 text-right text-sm font-semibold text-gray-600">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {filteredMembers.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="px-6 py-12 text-center text-gray-400">
                      No members found
                    </td>
                  </tr>
                ) : (
                  filteredMembers.map((member) => (
                    <tr key={member.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-gray-100 border border-gray-200 flex items-center justify-center overflow-hidden">
                            {member.image_url ? (
                              <Image
                                src={member.image_url}
                                alt={member.name}
                                width={32}
                                height={32}
                                className="object-contain"
                                unoptimized
                              />
                            ) : (
                              <ImageIcon size={16} className="text-gray-400" />
                            )}
                          </div>
                          <div>
                            <div className="font-medium text-gray-900">{member.name}</div>
                            <div className="text-xs text-gray-400 flex items-center gap-1">
                              <MapPin size={10} />
                              {member.address.split(',')[0]}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">{member.category}</td>
                      <td className="px-6 py-4">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${tierInfo[member.tier].color}`}>
                          {tierInfo[member.tier].label}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <button
                          onClick={() => toggleActive(member)}
                          className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium transition-colors ${
                            member.is_active
                              ? 'bg-green-100 text-green-700 hover:bg-green-200'
                              : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                          }`}
                        >
                          {member.is_active ? <Eye size={12} /> : <EyeOff size={12} />}
                          {member.is_active ? 'Active' : 'Hidden'}
                        </button>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <div className="flex justify-end gap-2">
                          <button
                            onClick={() => startEdit(member)}
                            className="p-2 rounded-lg hover:bg-gray-100 text-gray-500 hover:text-[#4B2E83] transition-colors"
                          >
                            <Edit2 size={16} />
                          </button>
                          <button
                            onClick={() => deleteMember(member.id)}
                            className="p-2 rounded-lg hover:bg-red-50 text-gray-500 hover:text-red-500 transition-colors"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        )}

        {/* Add/Edit Modal */}
        {isAddingMode && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/50">
            <div className="bg-white w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl shadow-xl p-8 relative">
              <button
                onClick={resetForm}
                className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X size={24} />
              </button>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                {editingMember ? 'Edit Member' : 'Add New Member'}
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Logo Upload */}
                <div className="p-6 bg-gray-50 border-2 border-dashed border-gray-200 rounded-xl">
                  <label className="block text-sm font-medium text-gray-700 mb-4">Business Logo</label>
                  <div className="flex items-center gap-6">
                    <div className="w-20 h-20 rounded-xl bg-white border border-gray-200 flex items-center justify-center overflow-hidden relative group">
                      {logoPreview ? (
                        <>
                          <img src={logoPreview} alt="Preview" className="w-full h-full object-contain p-2" />
                          <button
                            type="button"
                            onClick={() => { setLogoPreview(null); setFormData({ ...formData, image_url: '' }); }}
                            className="absolute inset-0 bg-red-500/80 items-center justify-center hidden group-hover:flex"
                          >
                            <X size={20} className="text-white" />
                          </button>
                        </>
                      ) : (
                        <ImageIcon size={24} className="text-gray-300" />
                      )}
                      {uploading && (
                        <div className="absolute inset-0 bg-white/80 flex items-center justify-center">
                          <Loader2 size={20} className="text-[#4B2E83] animate-spin" />
                        </div>
                      )}
                    </div>
                    <label className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors">
                      <Upload size={16} className="text-[#4B2E83]" />
                      <span className="text-sm font-medium">{logoPreview ? 'Change' : 'Upload Logo'}</span>
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

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Business Name</label>
                    <input
                      required
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4B2E83]/20 focus:border-[#4B2E83]"
                      placeholder="e.g. AAA Restoration"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                    <input
                      required
                      type="text"
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4B2E83]/20 focus:border-[#4B2E83]"
                      placeholder="e.g. Cleaning Services"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                  <input
                    required
                    type="text"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4B2E83]/20 focus:border-[#4B2E83]"
                    placeholder="123 Main St, Murray, UT 84107"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone (Optional)</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4B2E83]/20 focus:border-[#4B2E83]"
                      placeholder="(801) 000-0000"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Website (Optional)</label>
                    <input
                      type="text"
                      value={formData.website}
                      onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4B2E83]/20 focus:border-[#4B2E83]"
                      placeholder="example.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Membership Tier</label>
                    <select
                      value={formData.tier}
                      onChange={(e) => setFormData({ ...formData, tier: e.target.value as any })}
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4B2E83]/20 focus:border-[#4B2E83]"
                    >
                      <option value="member">Member</option>
                      <option value="ambassador">Ambassador</option>
                      <option value="sponsor">Sponsor</option>
                    </select>
                  </div>
                  <div className="flex items-center pt-6">
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.is_active}
                        onChange={(e) => setFormData({ ...formData, is_active: e.target.checked })}
                        className="w-5 h-5 rounded border-gray-300 text-[#4B2E83] focus:ring-[#4B2E83]"
                      />
                      <span className="font-medium text-gray-700">Show in Directory</span>
                    </label>
                  </div>
                </div>

                <div className="flex gap-4 pt-4">
                  <button
                    type="button"
                    onClick={resetForm}
                    className="flex-1 px-4 py-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors font-medium"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={loading}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-[#4B2E83] text-white rounded-lg hover:bg-[#7A59B5] transition-colors disabled:opacity-50 font-medium"
                  >
                    {loading ? <Loader2 size={18} className="animate-spin" /> : null}
                    {editingMember ? 'Update Member' : 'Add Member'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
