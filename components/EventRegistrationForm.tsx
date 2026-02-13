'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Building2, User, Mail, Phone, AlertCircle } from 'lucide-react';
import { submitEventRegistration } from '@/lib/ghl';
import SuccessState from './SuccessState';

interface EventRegistrationFormProps {
    eventName: string;
    eventDate: string;
    onSuccess?: () => void;
}

export default function EventRegistrationForm({
    eventName,
    eventDate,
    onSuccess,
}: EventRegistrationFormProps) {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        setError(null);

        const formData = new FormData(e.currentTarget);

        try {
            const result = await submitEventRegistration({
                firstName: formData.get('first_name') as string,
                lastName: formData.get('last_name') as string,
                email: formData.get('email') as string,
                phone: formData.get('phone') as string || undefined,
                companyName: formData.get('company_name') as string || undefined,
                eventName: eventName,
                eventDate: eventDate,
            });

            if (result.success) {
                setIsSubmitted(true);
                if (onSuccess) {
                    // Keep success state visible for a bit before potentially closing modal
                    setTimeout(onSuccess, 3000);
                }
            } else {
                setError(result.message || 'Something went wrong. Please try again.');
            }
        } catch (err) {
            setError('Unable to submit registration. Please try again later.');
        } finally {
            setIsLoading(false);
        }
    };

    if (isSubmitted) {
        return (
            <SuccessState
                title="See You There!"
                message={`We've received your registration for ${eventName}. Check your email for event details and calendar invites.`}
            />
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
                <div className="flex items-center gap-3 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400">
                    <AlertCircle className="w-5 h-5 shrink-0" />
                    <span className="text-sm">{error}</span>
                </div>
            )}

            {/* Event Info Context */}
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 mb-6">
                <p className="text-xs text-white/40 uppercase tracking-wider font-semibold mb-1">Registering For</p>
                <p className="text-white font-bold">{eventName}</p>
                <p className="text-white/60 text-sm">{eventDate}</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                <div>
                    <label htmlFor="first_name" className="block text-sm font-medium text-white/80 mb-2">
                        First Name *
                    </label>
                    <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                        <input
                            type="text"
                            id="first_name"
                            name="first_name"
                            required
                            className="input-glass pl-12"
                            placeholder="First Name"
                        />
                    </div>
                </div>
                <div>
                    <label htmlFor="last_name" className="block text-sm font-medium text-white/80 mb-2">
                        Last Name *
                    </label>
                    <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                        <input
                            type="text"
                            id="last_name"
                            name="last_name"
                            required
                            className="input-glass pl-12"
                            placeholder="Last Name"
                        />
                    </div>
                </div>
            </div>

            <div>
                <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-2">
                    Email Address *
                </label>
                <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="input-glass pl-12"
                        placeholder="email@company.com"
                    />
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-white/80 mb-2">
                        Phone Number
                    </label>
                    <div className="relative">
                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            className="input-glass pl-12"
                            placeholder="(801) 555-0123"
                        />
                    </div>
                </div>
                <div>
                    <label htmlFor="company_name" className="block text-sm font-medium text-white/80 mb-2">
                        Company Name
                    </label>
                    <div className="relative">
                        <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                        <input
                            type="text"
                            id="company_name"
                            name="company_name"
                            className="input-glass pl-12"
                            placeholder="Your Business"
                        />
                    </div>
                </div>
            </div>

            <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isLoading}
                className="btn-glow w-full justify-center disabled:opacity-50 disabled:cursor-not-allowed py-4"
            >
                {isLoading ? (
                    <div className="flex items-center gap-3">
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Registering...</span>
                    </div>
                ) : (
                    <div className="flex items-center gap-2 font-bold uppercase tracking-wider">
                        <Send className="w-5 h-5" />
                        <span>Complete Registration</span>
                    </div>
                )}
            </motion.button>

            <p className="text-center text-[10px] text-white/30 uppercase tracking-widest">
                Registration is free for all members and invited guests.
            </p>
        </form>
    );
}
