"use client";

import { useState } from "react";
import Link from "next/link";
import { useTheme } from "@/context/ThemeContext";

export default function Header() {
    const [searchQuery, setSearchQuery] = useState("");
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { theme, toggleTheme } = useTheme();

    return (
        <header className="sticky top-0 z-50 w-full bg-white/80 dark:bg-[#101622]/80 backdrop-blur-md border-b border-slate-200 dark:border-[#232f48] transition-colors duration-200">
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-20 py-3">
                <div className="flex items-center justify-between gap-8">

                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 text-slate-900 dark:text-white shrink-0 group">
                        <div className="text-primary group-hover:scale-110 transition-transform">
                            <span className="material-symbols-outlined text-3xl">bolt</span>
                        </div>
                        <h2 className="text-lg font-bold tracking-tight">
                            Sharjeel <span className="text-primary">Electronics</span>
                        </h2>
                    </Link>

                    {/* Search Bar */}
                    <div className="hidden md:flex items-center bg-slate-100 dark:bg-[#232f48] rounded-lg px-3 py-2 flex-1 max-w-lg transition-colors">
                        <span className="material-symbols-outlined text-slate-400 dark:text-[#92a4c9]">search</span>
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="bg-transparent border-none focus:ring-0 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-[#92a4c9] w-full outline-none px-2"
                            placeholder="Search premium tech..."
                        />
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-600 dark:text-[#92a4c9]">
                        <Link href="/laptops" className="hover:text-primary transition-colors">
                            Laptops
                        </Link>
                        <Link href="/smartphones" className="hover:text-primary transition-colors">
                            Smartphones
                        </Link>
                        <Link href="/appliances" className="hover:text-primary transition-colors">
                            Appliances
                        </Link>
                        <Link href="/flash-sales" className="hover:text-primary transition-colors">
                            Sales
                        </Link>
                    </nav>

                    {/* Action Buttons */}
                    <div className="flex items-center gap-3">

                        {/* Theme Toggle Button */}
                        <button
                            onClick={toggleTheme}
                            className="p-2 text-slate-600 dark:text-[#92a4c9] hover:text-primary dark:hover:text-white transition-all hover:scale-110 relative group"
                            aria-label="Toggle theme"
                            title={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
                        >
                            <span className="material-symbols-outlined text-2xl">
                                {theme === 'light' ? 'dark_mode' : 'light_mode'}
                            </span>

                            {/* Tooltip */}
                            <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                                {theme === 'light' ? 'Dark mode' : 'Light mode'}
                            </span>
                        </button>

                        {/* Cart */}
                        <Link href="/cart" className="relative p-2 text-slate-600 dark:text-[#92a4c9] hover:text-primary dark:hover:text-white transition-all hover:scale-110">
                            <span className="material-symbols-outlined text-2xl">shopping_cart</span>
                            <span className="absolute top-1 right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] text-white font-bold animate-pulse">
                                3
                            </span>
                        </Link>

                        {/* Favorites */}
                        <button className="hidden sm:block p-2 text-slate-600 dark:text-[#92a4c9] hover:text-primary dark:hover:text-white transition-all hover:scale-110">
                            <span className="material-symbols-outlined text-2xl">favorite</span>
                        </button>

                        {/* Profile */}
                        <button className="flex items-center gap-2 bg-slate-100 dark:bg-[#232f48] hover:bg-slate-200 dark:hover:bg-[#2d3b5a] transition-colors px-4 py-2 rounded-lg text-sm font-bold text-slate-900 dark:text-white">
                            <span className="material-symbols-outlined">person</span>
                            <span className="hidden sm:inline">Profile</span>
                        </button>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="lg:hidden p-2 text-slate-600 dark:text-[#92a4c9] hover:text-primary transition-colors"
                            aria-label="Toggle menu"
                        >
                            <span className="material-symbols-outlined">
                                {mobileMenuOpen ? "close" : "menu"}
                            </span>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div className="lg:hidden mt-4 pb-4 border-t border-slate-200 dark:border-[#232f48] pt-4 animate-fadeIn">
                        <nav className="flex flex-col gap-3">
                            <Link
                                href="/laptops"
                                className="text-sm font-medium text-slate-600 dark:text-[#92a4c9] hover:text-primary transition-colors px-2 py-2 rounded hover:bg-slate-100 dark:hover:bg-[#232f48]"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Laptops
                            </Link>
                            <Link
                                href="/smartphones"
                                className="text-sm font-medium text-slate-600 dark:text-[#92a4c9] hover:text-primary transition-colors px-2 py-2 rounded hover:bg-slate-100 dark:hover:bg-[#232f48]"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Smartphones
                            </Link>
                            <Link
                                href="/appliances"
                                className="text-sm font-medium text-slate-600 dark:text-[#92a4c9] hover:text-primary transition-colors px-2 py-2 rounded hover:bg-slate-100 dark:hover:bg-[#232f48]"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Appliances
                            </Link>
                            <Link
                                href="/flash-sales"
                                className="text-sm font-medium text-slate-600 dark:text-[#92a4c9] hover:text-primary transition-colors px-2 py-2 rounded hover:bg-slate-100 dark:hover:bg-[#232f48]"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Flash Sales
                            </Link>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
}