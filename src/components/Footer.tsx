"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Footer() {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <footer className="bg-white dark:bg-[#192233] border-t border-slate-200 dark:border-[#232f48] pt-8 sm:pt-12 lg:pt-16 pb-6 sm:pb-8 px-4 sm:px-6 lg:px-20 transition-colors duration-200">
            <div className="max-w-[1440px] mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 mb-8 sm:mb-12 lg:mb-16">

                    {/* Brand Column */}
                    <div className="text-center sm:text-left">
                        <div className="flex items-center justify-center sm:justify-start gap-2 text-slate-900 dark:text-white mb-4 sm:mb-6">
                            <span className="material-symbols-outlined text-primary text-2xl sm:text-3xl">bolt</span>
                            <h2 className="text-lg sm:text-xl font-bold tracking-tight">Sharjeel Electronics</h2>
                        </div>
                        <p className="text-slate-500 dark:text-[#92a4c9] text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6 max-w-sm mx-auto sm:mx-0">
                            Pakistan's leading destination for high-end electronics. We bring the future to your doorstep with guaranteed authenticity and premium service.
                        </p>
                        <div className="flex gap-3 sm:gap-4 justify-center sm:justify-start">
                            <Link href="#" className="text-slate-500 dark:text-[#92a4c9] hover:text-primary transition-colors p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg">
                                <span className="material-symbols-outlined text-xl sm:text-2xl">social_leaderboard</span>
                            </Link>
                            <Link href="#" className="text-slate-500 dark:text-[#92a4c9] hover:text-primary transition-colors p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg">
                                <span className="material-symbols-outlined text-xl sm:text-2xl">public</span>
                            </Link>
                            <Link href="#" className="text-slate-500 dark:text-[#92a4c9] hover:text-primary transition-colors p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg">
                                <span className="material-symbols-outlined text-xl sm:text-2xl">rss_feed</span>
                            </Link>
                        </div>

                        {/* Theme Toggle Switch in Footer */}
                        <div className="mt-6 flex justify-center sm:justify-start items-center gap-3">
                            <span className="text-sm font-medium text-slate-600 dark:text-[#92a4c9]">
                                Theme
                            </span>
                            {mounted ? (
                                <button
                                    onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                                    className="flex items-center gap-3"
                                >
                                    <div className="relative w-14 h-7 bg-slate-200 dark:bg-slate-700 rounded-full transition-colors cursor-pointer">
                                        <div
                                            className={`absolute top-1 w-5 h-5 bg-white dark:bg-slate-900 rounded-full shadow-md transition-all duration-300 flex items-center justify-center ${
                                                theme === 'dark' ? 'left-8' : 'left-1'
                                            }`}
                                        >
                                            <span className="material-symbols-outlined text-xs text-slate-600 dark:text-amber-400">
                                                {theme === 'light' ? 'light_mode' : 'dark_mode'}
                                            </span>
                                        </div>
                                    </div>
                                </button>
                            ) : (
                                <div className="w-14 h-7 bg-slate-200 dark:bg-slate-700 rounded-full animate-pulse" />
                            )}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="text-center sm:text-left">
                        <h3 className="text-slate-900 dark:text-white font-bold mb-4 sm:mb-6 text-sm sm:text-base">Shop Categories</h3>
                        <ul className="space-y-2 sm:space-y-4 text-slate-500 dark:text-[#92a4c9] text-xs sm:text-sm">
                            <li>
                                <Link href="#" className="hover:text-primary transition-colors inline-block py-1">
                                    Laptops & Computers
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-primary transition-colors inline-block py-1">
                                    Smartphones & Tablets
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-primary transition-colors inline-block py-1">
                                    Home Appliances
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-primary transition-colors inline-block py-1">
                                    Gaming Gear
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-primary transition-colors inline-block py-1">
                                    Audio & Video
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact & Support */}
                    <div className="text-center sm:text-left">
                        <h3 className="text-slate-900 dark:text-white font-bold mb-4 sm:mb-6 text-sm sm:text-base">Support</h3>
                        <div className="space-y-3 sm:space-y-4">
                            <a
                                href="https://wa.me/923254473073"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 group justify-center sm:justify-start"
                            >
                                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-slate-100 dark:bg-[#232f48] flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all shrink-0">
                                    <span className="material-symbols-outlined text-lg sm:text-xl">call</span>
                                </div>
                                <div className="text-left">
                                    <p className="text-[10px] sm:text-xs text-slate-500 dark:text-[#92a4c9]">WhatsApp Us</p>
                                    <p className="text-slate-900 dark:text-white text-xs sm:text-sm font-semibold">
                                        +92 325 4473073
                                    </p>
                                </div>
                            </a>
                            <div className="flex items-center gap-3 justify-center sm:justify-start">
                                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-slate-100 dark:bg-[#232f48] flex items-center justify-center text-primary shrink-0">
                                    <span className="material-symbols-outlined text-lg sm:text-xl">mail</span>
                                </div>
                                <div className="text-left">
                                    <p className="text-[10px] sm:text-xs text-slate-500 dark:text-[#92a4c9]">Email Support</p>
                                    <p className="text-slate-900 dark:text-white text-xs sm:text-sm font-semibold break-all">
                                        support@sharjeel.tech
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Store Location */}
                    <div className="text-center sm:text-left">
                        <h3 className="text-slate-900 dark:text-white font-bold mb-4 sm:mb-6 text-sm sm:text-base">Our Store</h3>
                        <div className="rounded-lg sm:rounded-xl overflow-hidden h-32 sm:h-40 border border-slate-200 dark:border-[#232f48]">
                            <iframe
                                src="https://maps.google.com/maps?q=31.5818,74.4156&hl=en&z=15&output=embed"
                                width="100%"
                                height="100%"
                                className="border-0"
                                loading="lazy"
                            ></iframe>
                        </div>
                        <p className="mt-3 sm:mt-4 text-slate-500 dark:text-[#92a4c9] text-[10px] sm:text-xs flex gap-2 items-start justify-center sm:justify-start">
                            <span className="material-symbols-outlined text-xs sm:text-sm text-primary shrink-0 mt-0.5">location_on</span>
                            <span>31.5818, 74.4156 | Lahore, Pakistan</span>
                        </p>
                    </div>
                </div>

                {/* Trust Badges */}
                <div className="border-y border-slate-200 dark:border-[#232f48] py-6 sm:py-8 mb-6 sm:mb-8 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                    <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 justify-center p-3 sm:p-0">
                        <span className="material-symbols-outlined text-primary text-2xl sm:text-3xl shrink-0">verified_user</span>
                        <span className="text-[10px] sm:text-xs text-slate-900 dark:text-white font-bold uppercase tracking-wider text-center sm:text-left">
                            Official Warranty
                        </span>
                    </div>
                    <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 justify-center p-3 sm:p-0">
                        <span className="material-symbols-outlined text-primary text-2xl sm:text-3xl shrink-0">local_shipping</span>
                        <span className="text-[10px] sm:text-xs text-slate-900 dark:text-white font-bold uppercase tracking-wider text-center sm:text-left">
                            Secure Shipping
                        </span>
                    </div>
                    <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 justify-center p-3 sm:p-0">
                        <span className="material-symbols-outlined text-primary text-2xl sm:text-3xl shrink-0">payments</span>
                        <span className="text-[10px] sm:text-xs text-slate-900 dark:text-white font-bold uppercase tracking-wider text-center sm:text-left">
                            Cash on Delivery
                        </span>
                    </div>
                    <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 justify-center p-3 sm:p-0">
                        <span className="material-symbols-outlined text-primary text-2xl sm:text-3xl shrink-0">support_agent</span>
                        <span className="text-[10px] sm:text-xs text-slate-900 dark:text-white font-bold uppercase tracking-wider text-center sm:text-left">
                            24/7 Expert Help
                        </span>
                    </div>
                </div>

                {/* Copyright */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 dark:text-[#92a4c9] text-[10px] sm:text-xs">
                    <p className="text-center sm:text-left">© 2026 Sharjeel Electronics. All rights reserved.</p>
                    <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
                        <Link href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors whitespace-nowrap">
                            Privacy Policy
                        </Link>
                        <Link href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors whitespace-nowrap">
                            Terms of Service
                        </Link>
                        <Link href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors whitespace-nowrap">
                            Refund Policy
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}