"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";

export default function Header() {
    const [searchQuery, setSearchQuery] = useState("");
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

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

                        {/* Theme Toggle */}
                        {mounted ? (
                            <button
                                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                                className="relative p-2 text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-white transition-all hover:scale-110 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 group"
                                aria-label="Toggle theme"
                            >
                                <svg
                                    className={`w-5 h-5 absolute inset-0 m-auto transition-all duration-300 ${
                                        theme === "light" ? "scale-100 rotate-0 opacity-100" : "scale-0 rotate-90 opacity-0"
                                    }`}
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    viewBox="0 0 24 24"
                                >
                                    <circle cx="12" cy="12" r="5" />
                                    <path d="M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72 1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
                                </svg>
                                <svg
                                    className={`w-5 h-5 absolute inset-0 m-auto transition-all duration-300 ${
                                        theme === "dark" ? "scale-100 rotate-0 opacity-100" : "scale-0 -rotate-90 opacity-0"
                                    }`}
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                                </svg>
                                <div className="w-5 h-5" />
                            </button>
                        ) : (
                            <div className="w-9 h-9 rounded-lg bg-slate-100 dark:bg-slate-800 animate-pulse" />
                        )}

                        {/* Cart */}
                        <Link href="/cart" className="relative p-2 text-slate-600 dark:text-[#92a4c9] hover:text-primary dark:hover:text-white transition-all hover:scale-110">
                            <span className="material-symbols-outlined text-2xl">shopping_cart</span>
                            <span className="absolute top-1 right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] text-white font-bold animate-pulse">3</span>
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

                        {/* Mobile Menu */}
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="lg:hidden p-2 text-slate-600 dark:text-[#92a4c9] hover:text-primary transition-colors"
                        >
                            <span className="material-symbols-outlined">{mobileMenuOpen ? "close" : "menu"}</span>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div className="lg:hidden mt-4 pb-4 border-t border-slate-200 dark:border-[#232f48] pt-4">
                        <nav className="flex flex-col gap-3">
                            <Link href="/laptops" className="text-sm font-medium text-slate-600 dark:text-[#92a4c9] hover:text-primary transition-colors px-2 py-2 rounded hover:bg-slate-100 dark:hover:bg-[#232f48]" onClick={() => setMobileMenuOpen(false)}>Laptops</Link>
                            <Link href="/smartphones" className="text-sm font-medium text-slate-600 dark:text-[#92a4c9] hover:text-primary transition-colors px-2 py-2 rounded hover:bg-slate-100 dark:hover:bg-[#232f48]" onClick={() => setMobileMenuOpen(false)}>Smartphones</Link>
                            <Link href="/appliances" className="text-sm font-medium text-slate-600 dark:text-[#92a4c9] hover:text-primary transition-colors px-2 py-2 rounded hover:bg-slate-100 dark:hover:bg-[#232f48]" onClick={() => setMobileMenuOpen(false)}>Appliances</Link>
                            <Link href="/flash-sales" className="text-sm font-medium text-slate-600 dark:text-[#92a4c9] hover:text-primary transition-colors px-2 py-2 rounded hover:bg-slate-100 dark:hover:bg-[#232f48]" onClick={() => setMobileMenuOpen(false)}>Flash Sales</Link>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
}