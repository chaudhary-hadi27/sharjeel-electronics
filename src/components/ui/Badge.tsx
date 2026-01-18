// ============================================
// FILE: src/components/ui/Badge.tsx
// ============================================
"use client";

import React from 'react';

interface BadgeProps {
    children: React.ReactNode;
    variant?: 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'neutral';
    size?: 'sm' | 'md' | 'lg';
    icon?: string;
    rounded?: boolean;
    className?: string;
}

export default function Badge({
                                  children,
                                  variant = 'primary',
                                  size = 'md',
                                  icon,
                                  rounded = false,
                                  className = '',
                              }: BadgeProps) {
    const baseStyles = 'inline-flex items-center gap-1.5 font-bold uppercase tracking-wider';

    const variants = {
        primary: 'bg-primary/10 text-primary border border-primary/30',
        success: 'bg-green-500/10 text-green-600 dark:text-green-400 border border-green-500/30',
        warning: 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/30',
        danger: 'bg-red-500/10 text-red-600 dark:text-red-400 border border-red-500/30',
        info: 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/30',
        neutral: 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700',
    };

    const sizes = {
        sm: 'px-2 py-0.5 text-[10px]',
        md: 'px-2.5 py-1 text-xs',
        lg: 'px-3 py-1.5 text-sm',
    };

    const roundedStyles = rounded ? 'rounded-full' : 'rounded';

    return (
        <span className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${roundedStyles} ${className}`}>
      {icon && <span className="material-symbols-outlined text-sm">{icon}</span>}
            {children}
    </span>
    );
}