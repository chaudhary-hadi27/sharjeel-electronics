// ============================================
// FILE: src/components/ui/Icon.tsx
// ============================================
"use client";

import React from 'react';

interface IconProps {
    name: string;
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
    fill?: boolean;
    className?: string;
    onClick?: () => void;
}

export default function Icon({
                                 name,
                                 size = 'md',
                                 fill = false,
                                 className = '',
                                 onClick,
                             }: IconProps) {
    const sizes = {
        xs: 'text-sm',
        sm: 'text-base',
        md: 'text-xl',
        lg: 'text-2xl',
        xl: 'text-3xl',
        '2xl': 'text-4xl',
    };

    const fillClass = fill ? 'fill-1' : '';
    const clickableClass = onClick ? 'cursor-pointer hover:opacity-80 transition-opacity' : '';

    return (
        <span
            onClick={onClick}
            className={`material-symbols-outlined ${sizes[size]} ${fillClass} ${clickableClass} ${className}`}
        >
      {name}
    </span>
    );
}