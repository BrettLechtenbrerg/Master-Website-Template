'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import {
    Building2,
    Users,
    CheckCircle,
    Send,
    AlertCircle,
    ArrowRight,
    Upload,
    ImageIcon,
    Loader2,
    X,
    Info
} from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { submitMembershipApplication } from '@/lib/ghl';

export default function MembershipApplicationPage() {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [uploading, setUploading] = useState(false);
    const [logoPreview, setLogoPreview] = useState<string | null>(null);
    const [logoUrl, setLogoUrl] = useState('');

    const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        setUploading(true);
        setError(null);

        const formData = new FormData();
        formData.append('file', file);

        try {
            const response = await fetch('/api/upload-logo', {
                method: 'POST',
                body: formData,
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Failed to upload logo');
            }

            setLogoUrl(data.url);
            setLogoPreview(data.url);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Error uploading logo');
        } finally {
            setUploading(false);
        }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        setError(null);

        const formData = new FormData(e.currentTarget);

        try {
            if (!logoUrl) {
                throw new Error('Please upload your business logo.');
            }

            const result = await submitMembershipApplication({
                firstName: formData.get('first_name') as string,
                lastName: formData.get('last_name') as string,
                phone: formData.get('phone') as string,
                email: formData.get('email') as string,
                companyName: formData.get('company_name') as string,
                address: formData.get('address') as string,
                city: formData.get('city') as string,
                state: formData.get('state') as string,
                postalCode: formData.get('postal_code') as string,
                numEmployees: formData.get('num_employees') as string,
                aboutBusiness: formData.get('about_business') as string,
                logoUrl: logoUrl,
                howDidYouHear: formData.get('how_heard') as string,
                smsConsentMarketing: formData.get('consent_marketing') === 'on',
                smsConsentNonMarketing: formData.get('consent_non_marketing') === 'on',
            });

            if (!result.success) {
                throw new Error(result.message);
            }

            setIsSubmitted(true);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Unable to submit application. Please try again later.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <PageHeader
                badge="Join Us"
                title="Membership Application"
                description="Become a member of the Murray Area Chamber of Commerce and connect with our vibrant community of local businesses."
                breadcrumbs={[
                    { label: 'Membership', href: '/members' },
                    { label: 'Join', href: '/join' },
                    { label: 'Application' },
                ]}
            />

            <section className="relative py-16 overflow-hidden">
                <div className="relative z-10 w-full max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
                    <div className="glass-card p-8 md:p-12">
                        {isSubmitted ? (
                            <div className="text-center py-12">
                                <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-6">
                                    <CheckCircle className="w-10 h-10 text-green-400" />
                                </div>
                                <h3 className="text-3xl font-bold text-white">Application Received!</h3>
                                <p className="mt-4 text-white/60 max-w-md mx-auto">
                                    Thank you for applying to the Murray Area Chamber of Commerce. Our team will review your application and contact you within 1-2 business days.
                                </p>
                                <div className="mt-8 flex flex-col items-center gap-4">
                                    <Link href="/join">
                                        <button className="btn-glow">
                                            Proceed to Membership Payment
                                            <ArrowRight className="w-5 h-5" />
                                        </button>
                                    </Link>
                                    <button onClick={() => setIsSubmitted(false)} className="text-white/40 hover:text-white transition-colors text-sm">
                                        Submit Another Application
                                    </button>
                                </div>
                            </div>
                        ) : (
                            <>
                                <div className="flex items-center gap-4 mb-10">
                                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600 to-purple-700 flex items-center justify-center shadow-lg">
                                        <Building2 className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-bold text-white">Murray Area Chamber of Commerce Membership Application</h2>
                                        <p className="text-white/60">Complete the form below to begin your membership</p>
                                    </div>
                                </div>

                                {error && (
                                    <div className="flex items-center gap-3 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 mb-8">
                                        <AlertCircle className="w-5 h-5 shrink-0" />
                                        <span className="text-sm">{error}</span>
                                    </div>
                                )}

                                <form onSubmit={handleSubmit} className="space-y-8">
                                    {/* Personal Info */}
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-medium text-white/80 mb-2">First Name *</label>
                                            <input type="text" name="first_name" required className="input-glass" placeholder="First Name" />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-white/80 mb-2">Last Name *</label>
                                            <input type="text" name="last_name" required className="input-glass" placeholder="Last Name" />
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-medium text-white/80 mb-2">Phone *</label>
                                            <input type="tel" name="phone" required className="input-glass" placeholder="(801) 555-0123" />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-white/80 mb-2">Email *</label>
                                            <input type="email" name="email" required className="input-glass" placeholder="email@company.com" />
                                        </div>
                                    </div>

                                    {/* Business Info */}
                                    <div className="pt-4 border-t border-white/10">
                                        <div className="mb-6">
                                            <label className="block text-sm font-medium text-white/80 mb-2">Company Name *</label>
                                            <input type="text" name="company_name" required className="input-glass" placeholder="Company Name" />
                                        </div>

                                        <div className="mb-6">
                                            <label className="block text-sm font-medium text-white/80 mb-2">Address *</label>
                                            <input type="text" name="address" required className="input-glass" placeholder="Street Address" />
                                        </div>

                                        <div className="grid md:grid-cols-3 gap-6 mb-6">
                                            <div className="md:col-span-1">
                                                <label className="block text-sm font-medium text-white/80 mb-2">City *</label>
                                                <input type="text" name="city" required className="input-glass" placeholder="City" />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-white/80 mb-2">State *</label>
                                                <input type="text" name="state" required className="input-glass" placeholder="State" defaultValue="UT" />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-white/80 mb-2">Postal Code *</label>
                                                <input type="text" name="postal_code" required className="input-glass" placeholder="Zip" />
                                            </div>
                                        </div>

                                        <div className="mb-6">
                                            <label className="block text-sm font-medium text-white/80 mb-2">Number of Employees *</label>
                                            <input type="text" name="num_employees" required className="input-glass" placeholder="e.g., 5" />
                                        </div>

                                        <div className="mb-6">
                                            <label className="block text-sm font-medium text-white/80 mb-2">About Your Business *</label>
                                            <p className="text-white/40 text-xs mb-2">Please provide a brief description of your business (1–2 sentences).</p>
                                            <textarea name="about_business" required rows={3} className="input-glass" placeholder="Tell us about what you do..." />
                                        </div>
                                    </div>

                                    {/* Logo Upload */}
                                    <div className="p-6 glass-card border-dashed border-2 border-white/10 rounded-2xl bg-white/5">
                                        <label className="block text-sm font-medium text-white/80 mb-4 uppercase tracking-wider">Upload Your Business Logo *</label>

                                        <div className="flex flex-col md:flex-row items-center gap-8">
                                            <div className="w-32 h-32 rounded-2xl bg-white/5 border border-white/10 overflow-hidden flex items-center justify-center shrink-0 relative group">
                                                {logoPreview ? (
                                                    <>
                                                        {/* eslint-disable-next-line @next/next/no-img-element */}
                                                        <img src={logoPreview} alt="Preview" className="w-full h-full object-contain p-2" />
                                                        <button
                                                            type="button"
                                                            onClick={() => { setLogoPreview(null); setLogoUrl(''); }}
                                                            className="absolute inset-0 bg-red-500/80 items-center justify-center hidden group-hover:flex transition-all"
                                                        >
                                                            <X className="w-6 h-6 text-white" />
                                                        </button>
                                                    </>
                                                ) : (
                                                    <div className="text-white/20 flex flex-col items-center">
                                                        <ImageIcon className="w-10 h-10 mb-2" />
                                                        <span className="text-[10px] uppercase font-bold tracking-widest">Logo Preview</span>
                                                    </div>
                                                )}

                                                {uploading && (
                                                    <div className="absolute inset-0 bg-slate-900/60 flex items-center justify-center z-10 backdrop-blur-sm">
                                                        <Loader2 className="w-6 h-6 text-purple-500 animate-spin" />
                                                    </div>
                                                )}
                                            </div>

                                            <div className="flex-1 text-center md:text-left">
                                                <p className="text-white/60 text-sm mb-4 leading-relaxed">
                                                    Please upload a landscape image or logo, ideally <span className="text-white font-semibold">800 × 500 pixels</span> (minimum 400 × 250).
                                                </p>
                                                <div className="flex items-center gap-2 mb-4 justify-center md:justify-start">
                                                    <Info className="w-4 h-4 text-purple-400" />
                                                    <p className="text-white/40 text-xs text-left">
                                                        Keep your logo and important content centered, as edges may be cropped on different screen sizes.<br />
                                                        Preferred format: <span className="text-white">WebP</span>. Accepted: <span className="text-white">PNG or JPG</span>.
                                                    </p>
                                                </div>

                                                <label className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600/20 hover:bg-purple-600/30 text-white text-sm font-bold rounded-xl transition-all cursor-pointer border border-purple-500/30 group">
                                                    <Upload className="w-5 h-5 text-purple-400 group-hover:scale-110 transition-transform" />
                                                    <span>{logoPreview ? 'Change Logo' : 'Choose Logo File'}</span>
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

                                    {/* Survey & Consents */}
                                    <div className="pt-4 border-t border-white/10 space-y-6">
                                        <div>
                                            <label className="block text-sm font-medium text-white/80 mb-2">How did you hear about the Murray Chamber?</label>
                                            <input type="text" name="how_heard" className="input-glass" placeholder="e.g., Referral, Social Media, Event..." />
                                        </div>

                                        <div className="space-y-4">
                                            <label className="flex items-start gap-4 cursor-pointer group">
                                                <input
                                                    type="checkbox"
                                                    name="consent_non_marketing"
                                                    required
                                                    className="mt-1 w-5 h-5 rounded bg-white/5 border-white/10 text-purple-600 focus:ring-purple-500 accent-purple-600"
                                                />
                                                <span className="text-sm text-white/60 leading-relaxed group-hover:text-white/80 transition-colors">
                                                    By checking this box, I consent to receive <span className="text-white">non-marketing text messages</span> from the Murray Area Chamber of Commerce related to my membership, events, and account notifications. Message frequency varies. Message and data rates may apply. Reply STOP to opt out.
                                                </span>
                                            </label>

                                            <label className="flex items-start gap-4 cursor-pointer group">
                                                <input
                                                    type="checkbox"
                                                    name="consent_marketing"
                                                    className="mt-1 w-5 h-5 rounded bg-white/5 border-white/10 text-purple-600 focus:ring-purple-500 accent-purple-600"
                                                />
                                                <span className="text-sm text-white/60 leading-relaxed group-hover:text-white/80 transition-colors">
                                                    By checking this box, I consent to receive <span className="text-white">marketing and promotional text messages</span> from the Murray Area Chamber of Commerce, including event announcements, programs, and special offers. Message frequency varies. Message and data rates may apply. Reply STOP to opt out.
                                                </span>
                                            </label>
                                        </div>
                                    </div>

                                    <motion.button
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        type="submit"
                                        disabled={isLoading || uploading}
                                        className="btn-glow w-full lg:w-auto px-12 py-4 justify-center disabled:opacity-50 disabled:cursor-not-allowed text-lg"
                                    >
                                        {isLoading ? (
                                            <>
                                                <Loader2 className="w-6 h-6 animate-spin" />
                                                <span>Submitting...</span>
                                            </>
                                        ) : (
                                            <>
                                                <span>Continue to Membership Payment</span>
                                                <ArrowRight className="w-5 h-5" />
                                            </>
                                        )}
                                    </motion.button>
                                </form>

                                <div className="mt-8 pt-6 border-t border-white/10 text-center">
                                    <div className="flex justify-center gap-6 text-xs text-white/40">
                                        <Link href="/privacy" className="hover:text-purple-400 transition-colors">Privacy Policy</Link>
                                        <span>|</span>
                                        <Link href="/terms" className="hover:text-purple-400 transition-colors">Terms of Service</Link>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}
