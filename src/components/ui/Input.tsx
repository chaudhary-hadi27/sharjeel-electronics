// ============================================
// FILE: src/components/ui/Input.tsx
// ============================================
"use client";

import React from 'react';

interface InputProps {
    type?: 'text' | 'email' | 'password' | 'number' | 'search' | 'tel';
    placeholder?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onKeyPress?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
    icon?: string;
    iconPosition?: 'left' | 'right';
    error?: string;
    label?: string;
    disabled?: boolean;
    required?: boolean;
    fullWidth?: boolean;
    className?: string;
}

export default function Input({
                                  type = 'text',
                                  placeholder,
                                  value,
                                  onChange,
                                  onKeyPress,
                                  icon,
                                  iconPosition = 'left',
                                  error,
                                  label,
                                  disabled = false,
                                  required = false,
                                  fullWidth = true,
                                  className = '',
                              }: InputProps) {
    const baseStyles = 'bg-slate-100 dark:bg-slate-800 border-2 border-transparent rounded-lg px-4 py-2.5 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all';

    const errorStyles = error ? 'border-red-500 focus:ring-red-500 dark:border-red-600 dark:focus:ring-red-600' : '';
    const disabledStyles = disabled ? 'opacity-50 cursor-not-allowed' : '';
    const widthStyles = fullWidth ? 'w-full' : '';

    return (
        <div className={`${fullWidth ? 'w-full' : ''}`}>
            {label && (
                <label className="block text-sm font-semibold text-slate-900 dark:text-white mb-2 transition-colors">
                    {label} {required && <span className="text-red-500 dark:text-red-400">*</span>}
                </label>
            )}

            <div className="relative">
                {icon && iconPosition === 'left' && (
                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500 text-xl transition-colors">
                        {icon}
                    </span>
                )}

                <input
                    type={type}
                    value={value}
                    onChange={onChange}
                    onKeyPress={onKeyPress}
                    placeholder={placeholder}
                    disabled={disabled}
                    required={required}
                    className={`${baseStyles} ${errorStyles} ${disabledStyles} ${widthStyles} ${icon && iconPosition === 'left' ? 'pl-11' : ''} ${icon && iconPosition === 'right' ? 'pr-11' : ''} ${className}`}
                />

                {icon && iconPosition === 'right' && (
                    <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500 text-xl transition-colors">
                        {icon}
                    </span>
                )}
            </div>

            {error && (
                <p className="mt-1.5 text-xs text-red-500 dark:text-red-400 flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm">error</span>
                    {error}
                </p>
            )}
        </div>
    );
}