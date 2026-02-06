'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { useRouter, usePathname } from 'next/navigation';
import { Loader2 } from 'lucide-react';

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const [loading, setLoading] = useState(true);
    const [authenticated, setAuthenticated] = useState(false);
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        const checkAuth = async () => {
            // Allow the login page itself
            if (pathname === '/admin/login') {
                setLoading(false);
                return;
            }

            const { data: { session } } = await supabase.auth.getSession();

            if (!session) {
                router.push('/admin/login');
            } else {
                setAuthenticated(true);
            }
            setLoading(false);
        };

        checkAuth();

        // Listen for auth changes
        const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
            if (event === 'SIGNED_OUT') {
                setAuthenticated(false);
                router.push('/admin/login');
            } else if (event === 'SIGNED_IN' || event === 'INITIAL_SESSION') {
                setAuthenticated(true);
            }
        });

        return () => {
            subscription.unsubscribe();
        };
    }, [router, pathname]);

    if (loading) {
        return (
            <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center">
                <Loader2 className="w-12 h-12 text-purple-500 animate-spin mb-4" />
                <p className="text-white/60 font-medium">Verifying authorization...</p>
            </div>
        );
    }

    // If we are on the login page, just render it
    if (pathname === '/admin/login') {
        return <>{children}</>;
    }

    // Otherwise, only render if authenticated
    return authenticated ? <>{children}</> : null;
}
