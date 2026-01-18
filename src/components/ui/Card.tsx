// ============================================
// FILE: src/components/ui/Card.tsx
// ============================================
"use client";

import React from 'react';

interface CardProps {
    children: React.ReactNode;
    variant?: 'default' | 'bordered' | 'elevated' | 'flat';
    padding?: 'none' | 'sm' | 'md' | 'lg';
    hover?: boolean;
    clickable?: boolean;
    onClick?: () => void;
    className?: string;
}

export default function Card({
                                 children,
                                 variant = 'default',
                                 padding = 'md',
                                 hover = false,
                                 clickable = false,
                                 onClick,
                                 className = '',
                             }: CardProps) {
    const baseStyles = 'rounded-xl transition-all';

    const variants = {
        default: 'bg-white dark:bg-[#192233] border border-slate-200 dark:border-[#232f48]',
        bordered: 'bg-white dark:bg-[#192233] border-2 border-slate-300 dark:border-[#232f48]',
        elevated: 'bg-white dark:bg-[#192233] shadow-xl',
        flat: 'bg-slate-50 dark:bg-slate-900',
    };

    const paddings = {
        none: '',
        sm: 'p-3',
        md: 'p-4 sm:p-5',
        lg: 'p-6 sm:p-8',
    };

    const hoverStyles = hover ? 'hover:shadow-2xl hover:border-primary/50 hover:-translate-y-1' : '';
    const clickableStyles = clickable ? 'cursor-pointer active:scale-[0.98]' : '';

    return (
        <div
            onClick={onClick}
            className={`${baseStyles} ${variants[variant]} ${paddings[padding]} ${hoverStyles} ${clickableStyles} ${className}`}
        >
            {children}
        </div>
    );
}