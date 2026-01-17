"use client";

import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-white dark:bg-[#192233] border-t border-slate-200 dark:border-[#232f48] pt-16 pb-8 px-4 lg:px-20">
            <div className="max-w-[1440px] mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Column */}
                    <div>
                        <div className="flex items-center gap-2 text-slate-900 dark:text-white mb-6">
                            <span className="material-symbols-outlined text-primary text-3xl">bolt</span>
                            <h2 className="text-xl font-bold tracking-tight">Sharjeel Electronics</h2>
                        </div>
                        <p className="text-slate-500 dark:text-[#92a4c9] text-sm leading-relaxed mb-6">
                            Pakistan's leading destination for high-end electronics. We bring the future to your doorstep with guaranteed authenticity and premium service.
                        </p>
                        <div className="flex gap-4">
                            <Link href="#" className="text-slate-500 dark:text-[#92a4c9] hover:text-primary transition-colors">
                                <span className="material-symbols-outlined">social_leaderboard</span>
                            </Link>
                            <Link href="#" className="text-slate-500 dark:text-[#92a4c9] hover:text-primary transition-colors">
                                <span className="material-symbols-outlined">public</span>
                            </Link>
                            <Link href="#" className="text-slate-500 dark:text-[#92a4c9] hover:text-primary transition-colors">
                                <span className="material-symbols-outlined">rss_feed</span>
                            </Link>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-slate-900 dark:text-white font-bold mb-6">Shop Categories</h3>
                        <ul className="space-y-4 text-slate-500 dark:text-[#92a4c9] text-sm">
                            <li>
                                <Link href="#" className="hover:text-primary transition-colors">
                                    Laptops & Computers
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-primary transition-colors">
                                    Smartphones & Tablets
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-primary transition-colors">
                                    Home Appliances
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-primary transition-colors">
                                    Gaming Gear
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-primary transition-colors">
                                    Audio & Video
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact & Support */}
                    <div>
                        <h3 className="text-slate-900 dark:text-white font-bold mb-6">Support</h3>
                        <div className="space-y-4">
                            <a
                                href="https://wa.me/923254473073"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 group"
                            >
                                <div className="w-10 h-10 rounded-lg bg-slate-100 dark:bg-[#232f48] flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                                    <span className="material-symbols-outlined">call</span>
                                </div>
                                <div>
                                    <p className="text-xs text-slate-500 dark:text-[#92a4c9]">WhatsApp Us</p>
                                    <p className="text-slate-900 dark:text-white text-sm font-semibold">
                                        +92 325 4473073
                                    </p>
                                </div>
                            </a>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-lg bg-slate-100 dark:bg-[#232f48] flex items-center justify-center text-primary">
                                    <span className="material-symbols-outlined">mail</span>
                                </div>
                                <div>
                                    <p className="text-xs text-slate-500 dark:text-[#92a4c9]">Email Support</p>
                                    <p className="text-slate-900 dark:text-white text-sm font-semibold">
                                        support@sharjeel.tech
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Store Location */}
                    <div>
                        <h3 className="text-slate-900 dark:text-white font-bold mb-6">Our Store</h3>
                        <div className="rounded-xl overflow-hidden h-40 border border-slate-200 dark:border-[#232f48]">
                            <iframe
                                src="https://maps.google.com/maps?q=31.5818,74.4156&hl=en&z=15&output=embed"
                                width="100%"
                                height="100%"
                                className="border-0"
                            ></iframe>
                        </div>
                        <p className="mt-4 text-slate-500 dark:text-[#92a4c9] text-xs flex gap-2">
                            <span className="material-symbols-outlined text-sm text-primary">location_on</span>
                            31.5818, 74.4156 | Lahore, Pakistan
                        </p>
                    </div>
                </div>

                {/* Trust Badges */}
                <div className="border-y border-slate-200 dark:border-[#232f48] py-8 mb-8 grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="flex items-center gap-3 justify-center">
                        <span className="material-symbols-outlined text-primary text-3xl">verified_user</span>
                        <span className="text-xs text-slate-900 dark:text-white font-bold uppercase tracking-wider">
              Official Warranty
            </span>
                    </div>
                    <div className="flex items-center gap-3 justify-center">
                        <span className="material-symbols-outlined text-primary text-3xl">local_shipping</span>
                        <span className="text-xs text-slate-900 dark:text-white font-bold uppercase tracking-wider">
              Secure Shipping
            </span>
                    </div>
                    <div className="flex items-center gap-3 justify-center">
                        <span className="material-symbols-outlined text-primary text-3xl">payments</span>
                        <span className="text-xs text-slate-900 dark:text-white font-bold uppercase tracking-wider">
              Cash on Delivery
            </span>
                    </div>
                    <div className="flex items-center gap-3 justify-center">
                        <span className="material-symbols-outlined text-primary text-3xl">support_agent</span>
                        <span className="text-xs text-slate-900 dark:text-white font-bold uppercase tracking-wider">
              24/7 Expert Help
            </span>
                    </div>
                </div>

                {/* Copyright */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-slate-500 dark:text-[#92a4c9] text-xs">
                    <p>© 2026 Sharjeel Electronics. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">
                            Privacy Policy
                        </Link>
                        <Link href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">
                            Terms of Service
                        </Link>
                        <Link href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">
                            Refund Policy
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}