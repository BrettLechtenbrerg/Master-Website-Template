'use client';

import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight } from 'lucide-react';

interface SuccessStateProps {
    title?: string;
    message?: string;
    buttonText?: string;
    onButtonClick?: () => void;
}

export default function SuccessState({
    title = 'Success!',
    message = 'Thank you for your submission. We have received your information and will be in touch soon.',
    buttonText = 'Close',
    onButtonClick,
}: SuccessStateProps) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-8"
        >
            <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-green-400" />
            </div>
            <h3 className="text-2xl font-bold text-white">{title}</h3>
            <p className="mt-4 text-white/60 max-w-sm mx-auto leading-relaxed">
                {message}
            </p>
            {onButtonClick && (
                <button
                    onClick={onButtonClick}
                    className="mt-8 btn-secondary flex items-center gap-2 mx-auto"
                >
                    {buttonText}
                    <ArrowRight className="w-4 h-4" />
                </button>
            )}
        </motion.div>
    );
}
