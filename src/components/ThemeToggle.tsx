"use client";

import { useTheme } from "@/context/ThemeContext";

interface ThemeToggleProps {
    variant?: 'icon' | 'button' | 'switch';
    size?: 'sm' | 'md' | 'lg';
    showLabel?: boolean;
}

export default function ThemeToggle({
                                        variant = 'icon',
                                        size = 'md',
                                        showLabel = false
                                    }: ThemeToggleProps) {
    const { theme, toggleTheme } = useTheme();

    const sizes = {
        sm: 'text-base p-1.5',
        md: 'text-2xl p-2',
        lg: 'text-3xl p-3',
    };

    // Icon Button Variant (Default)
    if (variant === 'icon') {
        return (
            <button
                onClick={toggleTheme}
                className={`${sizes[size]} text-slate-600 dark:text-[#92a4c9] hover:text-primary dark:hover:text-white transition-all hover:scale-110 relative group rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800`}
                aria-label="Toggle theme"
                title={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
            >
                <span className="material-symbols-outlined">
                    {theme === 'light' ? 'dark_mode' : 'light_mode'}
                </span>

                {/* Tooltip */}
                <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-50">
                    {theme === 'light' ? 'Dark mode' : 'Light mode'}
                </span>
            </button>
        );
    }

    // Full Button Variant
    if (variant === 'button') {
        return (
            <button
                onClick={toggleTheme}
                className="flex items-center gap-2 bg-slate-100 dark:bg-[#232f48] hover:bg-slate-200 dark:hover:bg-[#2d3b5a] transition-colors px-4 py-2 rounded-lg text-sm font-bold text-slate-900 dark:text-white"
            >
                <span className="material-symbols-outlined text-xl">
                    {theme === 'light' ? 'dark_mode' : 'light_mode'}
                </span>
                <span>{theme === 'light' ? 'Dark Mode' : 'Light Mode'}</span>
            </button>
        );
    }

    // Toggle Switch Variant
    if (variant === 'switch') {
        return (
            <button
                onClick={toggleTheme}
                className="flex items-center gap-3"
                aria-label="Toggle theme"
            >
                {showLabel && (
                    <span className="text-sm font-medium text-slate-600 dark:text-[#92a4c9]">
                        {theme === 'light' ? 'Light' : 'Dark'}
                    </span>
                )}

                <div className="relative w-14 h-7 bg-slate-200 dark:bg-slate-700 rounded-full transition-colors cursor-pointer">
                    <div
                        className={`absolute top-1 w-5 h-5 bg-white dark:bg-slate-900 rounded-full shadow-md transition-all duration-300 flex items-center justify-center ${
                            theme === 'dark' ? 'left-8' : 'left-1'
                        }`}
                    >
                        <span className="material-symbols-outlined text-sm text-slate-600 dark:text-amber-400">
                            {theme === 'light' ? 'light_mode' : 'dark_mode'}
                        </span>
                    </div>
                </div>
            </button>
        );
    }

    return null;
}