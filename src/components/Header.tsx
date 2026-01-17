"use client";

import { useState } from "react";
import Link from "next/link";
import { useTheme } from "./ThemeProvider";

export default function Header() {
    const [searchQuery, setSearchQuery] = useState("");
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { theme, toggleTheme } = useTheme();

    return (
        <header className="sticky top-0 z-50 w-full bg-white/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-slate-200 dark:border-[#232f48]">
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-20 py-2 sm:py-3">
                <div className="flex items-center justify-between gap-4 sm:gap-8">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-1.5 sm:gap-2 text-slate-900 dark:text-white shrink-0">
                        <div className="text-primary">
                            <span className="material-symbols-outlined text-2xl sm:text-3xl lg:text-4xl">bolt</span>
                        </div>
                        <h2 className="text-sm sm:text-lg lg:text-xl font-bold tracking-tight">
                            Sharjeel <span className="text-primary hidden xs:inline">Electronics</span>
                        </h2>
                    </Link>

                    {/* Search Bar - Hidden on mobile, visible on md+ */}
                    <div className="hidden md:flex items-center bg-slate-100 dark:bg-[#232f48] rounded-lg px-3 py-1.5 flex-1 max-w-md lg:max-w-lg">
            <span className="material-symbols-outlined text-slate-400 dark:text-[#92a4c9] text-lg sm:text-xl">
              search
            </span>
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="bg-transparent border-none focus:ring-0 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-[#92a4c9] w-full outline-none px-2"
                            placeholder="Search premium tech..."
                        />
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center gap-4 xl:gap-6 text-xs xl:text-sm font-medium text-slate-600 dark:text-[#92a4c9]">
                        <Link href="/laptops" className="hover:text-primary transition-colors whitespace-nowrap">
                            Laptops
                        </Link>
                        <Link href="/smartphones" className="hover:text-primary transition-colors whitespace-nowrap">
                            Smartphones
                        </Link>
                        <Link href="/appliances" className="hover:text-primary transition-colors whitespace-nowrap">
                            Appliances
                        </Link>
                        <Link href="/flash-sales" className="hover:text-primary transition-colors whitespace-nowrap">
                            Sales
                        </Link>
                    </nav>

                    {/* Action Buttons */}
                    <div className="flex items-center gap-1 sm:gap-2 lg:gap-3">
                        {/* Theme Toggle */}
                        <button
                            onClick={toggleTheme}
                            className="p-1.5 sm:p-2 text-slate-600 dark:text-[#92a4c9] hover:text-primary dark:hover:text-white transition-colors"
                        >
              <span className="material-symbols-outlined text-lg sm:text-xl lg:text-2xl">
                {theme === "light" ? "dark_mode" : "light_mode"}
              </span>
                        </button>

                        {/* Search Icon for Mobile */}
                        <button className="md:hidden p-1.5 sm:p-2 text-slate-600 dark:text-[#92a4c9] hover:text-primary dark:hover:text-white transition-colors">
                            <span className="material-symbols-outlined text-lg sm:text-xl">search</span>
                        </button>

                        {/* Cart */}
                        <button className="relative p-1.5 sm:p-2 text-slate-600 dark:text-[#92a4c9] hover:text-primary dark:hover:text-white transition-colors">
                            <span className="material-symbols-outlined text-lg sm:text-xl lg:text-2xl">shopping_cart</span>
                            <span className="absolute top-0.5 right-0.5 sm:top-1 sm:right-1 flex h-3.5 w-3.5 sm:h-4 sm:w-4 items-center justify-center rounded-full bg-primary text-[9px] sm:text-[10px] text-white font-bold">
                3
              </span>
                        </button>

                        {/* Favorites - Hidden on small mobile */}
                        <button className="hidden xs:block p-1.5 sm:p-2 text-slate-600 dark:text-[#92a4c9] hover:text-primary dark:hover:text-white transition-colors">
                            <span className="material-symbols-outlined text-lg sm:text-xl lg:text-2xl">favorite</span>
                        </button>

                        {/* Profile - Compact on mobile */}
                        <button className="flex items-center gap-1 sm:gap-2 bg-slate-100 dark:bg-[#232f48] hover:bg-slate-200 dark:hover:bg-[#2d3b5a] transition-colors px-2 sm:px-3 lg:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                            <span className="material-symbols-outlined text-base sm:text-lg lg:text-xl">person</span>
                            <span className="hidden sm:inline">Profile</span>
                        </button>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="lg:hidden p-1.5 sm:p-2 text-slate-600 dark:text-[#92a4c9]"
                        >
              <span className="material-symbols-outlined text-lg sm:text-xl">
                {mobileMenuOpen ? "close" : "menu"}
              </span>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div className="lg:hidden mt-4 pb-4 border-t border-slate-200 dark:border-[#232f48] pt-4">
                        <nav className="flex flex-col gap-3">
                            <Link href="/laptops" className="text-sm font-medium text-slate-600 dark:text-[#92a4c9] hover:text-primary transition-colors">
                                Laptops
                            </Link>
                            <Link href="/smartphones" className="text-sm font-medium text-slate-600 dark:text-[#92a4c9] hover:text-primary transition-colors">
                                Smartphones
                            </Link>
                            <Link href="/appliances" className="text-sm font-medium text-slate-600 dark:text-[#92a4c9] hover:text-primary transition-colors">
                                Appliances
                            </Link>
                            <Link href="/flash-sales" className="text-sm font-medium text-slate-600 dark:text-[#92a4c9] hover:text-primary transition-colors">
                                Flash Sales
                            </Link>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
}