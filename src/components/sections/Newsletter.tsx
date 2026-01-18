// ============================================
// FILE: src/components/sections/Newsletter.tsx
// ============================================
"use client";

import React, { useState } from 'react';
import Input from '../ui/Input';
import Button from '../ui/Button';

interface NewsletterProps {
    title?: string;
    description?: string;
    buttonText?: string;
}

export default function Newsletter({
                                       title = 'Stay updated with the latest tech drops',
                                       description = 'Subscribe to our newsletter and get exclusive access to limited edition releases.',
                                       buttonText = 'Subscribe Now',
                                   }: NewsletterProps) {
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        // Simulate API call
        setTimeout(() => {
            setLoading(false);
            setSuccess(true);
            setEmail('');

            setTimeout(() => setSuccess(false), 3000);
        }, 1500);
    };

    return (
        <section className="bg-primary dark:bg-blue-700 rounded-2xl p-8 lg:p-12 text-white relative overflow-hidden mb-12 transition-colors duration-200">
            {/* Decorative Background */}
            <div className="absolute -right-20 -bottom-20 size-80 bg-white/10 dark:bg-white/5 rounded-full blur-3xl" />

            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
                {/* Text Content */}
                <div className="max-w-xl text-center lg:text-left">
                    <h3 className="text-3xl lg:text-4xl font-black mb-4">
                        {title}
                    </h3>
                    <p className="text-white/90 dark:text-white/80 text-lg">
                        {description}
                    </p>
                </div>

                {/* Form */}
                <div className="w-full lg:w-auto shrink-0">
                    {success ? (
                        <div className="bg-white/20 dark:bg-white/10 backdrop-blur rounded-lg px-6 py-4 flex items-center gap-3">
                            <span className="material-symbols-outlined text-2xl">check_circle</span>
                            <span className="font-bold">Successfully subscribed!</span>
                        </div>
                    ) : (
                        <form
                            onSubmit={handleSubmit}
                            className="flex flex-col sm:flex-row gap-3 min-w-[320px]"
                        >
                            <Input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email"
                                required
                                className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white border-white/20 dark:border-slate-700"
                            />
                            <Button
                                type="submit"
                                variant="secondary"
                                loading={loading}
                                className="bg-slate-900 dark:bg-white hover:bg-black dark:hover:bg-slate-100 text-white dark:text-slate-900 whitespace-nowrap transition-colors"
                            >
                                {buttonText}
                            </Button>
                        </form>
                    )}
                </div>
            </div>
        </section>
    );
}