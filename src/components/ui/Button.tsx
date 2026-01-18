// ============================================
// FILE: src/components/ui/Button.tsx
// ============================================
"use client";

import React from 'react';

interface ButtonProps {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
    size?: 'sm' | 'md' | 'lg';
    icon?: string;
    iconPosition?: 'left' | 'right';
    fullWidth?: boolean;
    disabled?: boolean;
    loading?: boolean;
    onClick?: () => void;
    type?: 'button' | 'submit' | 'reset';
    className?: string;
}

export default function Button({
                                   children,
                                   variant = 'primary',
                                   size = 'md',
                                   icon,
                                   iconPosition = 'left',
                                   fullWidth = false,
                                   disabled = false,
                                   loading = false,
                                   onClick,
                                   type = 'button',
                                   className = '',
                               }: ButtonProps) {
    const baseStyles = 'font-bold rounded-lg transition-all inline-flex items-center justify-center gap-2 active:scale-95';

    const variants = {
        primary: 'bg-primary text-white hover:bg-blue-600 shadow-lg shadow-primary/25',
        secondary: 'bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white hover:bg-slate-200 dark:hover:bg-slate-700',
        outline: 'border-2 border-primary text-primary hover:bg-primary/5 dark:hover:bg-primary/10',
        ghost: 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800',
        danger: 'bg-red-600 text-white hover:bg-red-700',
    };

    const sizes = {
        sm: 'px-3 py-1.5 text-xs',
        md: 'px-4 py-2.5 text-sm',
        lg: 'px-6 py-3 text-base',
    };

    const widthClass = fullWidth ? 'w-full' : '';
    const disabledClass = disabled || loading ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer';

    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled || loading}
            className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${widthClass} ${disabledClass} ${className}`}
        >
            {loading ? (
                <span className="material-symbols-outlined animate-spin">progress_activity</span>
            ) : (
                <>
                    {icon && iconPosition === 'left' && (
                        <span className="material-symbols-outlined text-xl">{icon}</span>
                    )}
                    {children}
                    {icon && iconPosition === 'right' && (
                        <span className="material-symbols-outlined text-xl">{icon}</span>
                    )}
                </>
            )}
        </button>
    );
}