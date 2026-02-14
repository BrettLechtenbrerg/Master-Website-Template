'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { supabase } from '@/lib/supabase';

interface CustomScript {
    id: string;
    name: string;
    location: 'header' | 'footer';
    scope: 'sitewide' | 'page';
    page_path: string | null;
    content: string;
}

export default function ScriptInjector() {
    const pathname = usePathname();
    const [scripts, setScripts] = useState<CustomScript[]>([]);

    useEffect(() => {
        const fetchScripts = async () => {
            const { data, error } = await supabase
                .from('custom_scripts')
                .select('*')
                .eq('is_active', true);

            if (!error && data) {
                setScripts(data);
            }
        };

        fetchScripts();
    }, []);

    useEffect(() => {
        if (scripts.length === 0) return;

        // Filter scripts based on current pathname
        const activeScripts = scripts.filter(script => {
            if (script.scope === 'sitewide') return true;
            if (script.scope === 'page' && script.page_path === pathname) return true;
            return false;
        });

        // Separate and inject
        const headerScripts = activeScripts.filter(s => s.location === 'header');
        const footerScripts = activeScripts.filter(s => s.location === 'footer');

        // Clean up previous injections to prevent duplication on nav
        const removeExisting = (attr: string) => {
            document.querySelectorAll(`[data-macc-script="${attr}"]`).forEach(el => el.remove());
        };

        removeExisting('header');
        removeExisting('footer');

        // Inject header content
        headerScripts.forEach(script => {
            const container = document.createElement('div');
            container.innerHTML = script.content;
            Array.from(container.children).forEach(child => {
                const newEl = document.createElement(child.tagName);
                // Copy all attributes
                Array.from(child.attributes).forEach(attr => newEl.setAttribute(attr.name, attr.value));
                newEl.innerHTML = child.innerHTML;
                newEl.setAttribute('data-macc-script', 'header');
                document.head.appendChild(newEl);
            });

            // Handle raw text/scripts if no tags provided
            if (container.children.length === 0 && script.content.trim()) {
                const s = document.createElement('script');
                s.innerHTML = script.content;
                s.setAttribute('data-macc-script', 'header');
                document.head.appendChild(s);
            }
        });

        // Inject footer content
        footerScripts.forEach(script => {
            const container = document.createElement('div');
            container.innerHTML = script.content;
            Array.from(container.children).forEach(child => {
                const newEl = document.createElement(child.tagName);
                Array.from(child.attributes).forEach(attr => newEl.setAttribute(attr.name, attr.value));
                newEl.innerHTML = child.innerHTML;
                newEl.setAttribute('data-macc-script', 'footer');
                document.body.appendChild(newEl);
            });

            if (container.children.length === 0 && script.content.trim()) {
                const s = document.createElement('script');
                s.innerHTML = script.content;
                s.setAttribute('data-macc-script', 'footer');
                document.body.appendChild(s);
            }
        });

    }, [pathname, scripts]);

    return null; // This component doesn't render anything itself
}
