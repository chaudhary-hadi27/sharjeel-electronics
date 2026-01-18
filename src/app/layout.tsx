"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AIChatButton from "@/components/AIChatButton";
import PremiumTechLoader from "@/components/PremiumTechLoader";
import { ThemeProvider } from "@/providers/theme-provider";
import { useState, useEffect } from "react";

const inter = Inter({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700", "800", "900"],
    variable: "--font-inter",
    display: "swap",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
    const [isLoading, setIsLoading] = useState(true);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const hasVisited = sessionStorage.getItem('hasVisited');
        if (hasVisited === 'true') {
            setIsLoading(false);
        } else {
            sessionStorage.setItem('hasVisited', 'true');
        }
    }, []);

    return (
        <html lang="en" suppressHydrationWarning className={inter.variable}>
        <head>
            <link
                rel="preload"
                href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
                as="style"
            />
            <link
                href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
                rel="stylesheet"
            />

            <title>Sharjeel Electronics | Premium Tech Store</title>
            <meta name="description" content="Pakistan's leading destination for high-end electronics" />
            <link rel="preconnect" href="https://images.unsplash.com" />
        </head>
        <body className={`${inter.className} antialiased overflow-x-hidden`}>
        <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem={false}
            storageKey="sharjeel-theme"
        >
            {/* Premium Store Entrance */}
            {isLoading && mounted && <PremiumTechLoader onComplete={() => setIsLoading(false)} />}

            {/* Main Content */}
            {mounted && (
                <div className={`transition-opacity duration-1000 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
                    <div className="bg-white dark:bg-[#101622] text-slate-900 dark:text-slate-100 min-h-screen transition-colors duration-300">
                        <Header />
                        {children}
                        <Footer />
                        <AIChatButton />
                    </div>
                </div>
            )}
        </ThemeProvider>
        </body>
        </html>
    );
}