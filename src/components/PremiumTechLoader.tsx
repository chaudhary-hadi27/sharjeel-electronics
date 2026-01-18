"use client";

import { useEffect, useState } from "react";

export default function PremiumTechLoader({ onComplete }: { onComplete?: () => void }) {
    const [phase, setPhase] = useState<'doors' | 'showcase' | 'fade'>('doors');
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        // Smooth progress
        const progressInterval = setInterval(() => {
            setProgress(prev => Math.min(prev + 1, 100));
        }, 40);

        // Phase 1: Doors opening (2.5s)
        const showcaseTimer = setTimeout(() => {
            setPhase('showcase');
        }, 2500);

        // Phase 2: Product showcase (2s)
        const fadeTimer = setTimeout(() => {
            setPhase('fade');
        }, 4500);

        // Complete
        const completeTimer = setTimeout(() => {
            onComplete?.();
        }, 5000);

        return () => {
            clearInterval(progressInterval);
            clearTimeout(showcaseTimer);
            clearTimeout(fadeTimer);
            clearTimeout(completeTimer);
        };
    }, [onComplete]);

    return (
        <div className={`fixed inset-0 z-[9999] bg-black transition-opacity duration-500 ${phase === 'fade' ? 'opacity-0' : 'opacity-100'}`}>

            {/* Premium Store Floor - Marble/Concrete */}
            <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-800" />

            {/* Ambient Lighting from Top */}
            <div className="absolute top-0 inset-x-0 h-96 bg-gradient-to-b from-white/5 via-white/2 to-transparent" />

            {/* Left Glass Door */}
            <div
                className={`absolute inset-y-0 left-0 w-1/2 transition-all duration-[2000ms] ease-out ${
                    phase === 'showcase' || phase === 'fade' ? '-translate-x-full' : 'translate-x-0'
                }`}
            >
                {/* Glass Panel with Reflection */}
                <div className="absolute inset-0 bg-gradient-to-br from-zinc-900/95 via-zinc-800/90 to-zinc-900/95 backdrop-blur-sm">
                    {/* Frosted Glass Effect */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.05),transparent_50%)]" />

                    {/* Metal Frame */}
                    <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-r from-zinc-700 via-zinc-600 to-zinc-700" />

                    {/* Door Handle - Professional */}
                    <div className="absolute right-20 top-1/2 -translate-y-1/2">
                        <div className="w-3 h-40 bg-gradient-to-b from-zinc-400 via-zinc-300 to-zinc-400 rounded-full shadow-2xl" />
                    </div>

                    {/* Subtle Logo Etching */}
                    <div className="absolute top-32 left-1/4 -translate-x-1/2 opacity-20">
                        <span className="material-symbols-outlined text-white text-8xl">
                            storefront
                        </span>
                    </div>
                </div>
            </div>

            {/* Right Glass Door */}
            <div
                className={`absolute inset-y-0 right-0 w-1/2 transition-all duration-[2000ms] ease-out ${
                    phase === 'showcase' || phase === 'fade' ? 'translate-x-full' : 'translate-x-0'
                }`}
            >
                {/* Glass Panel with Reflection */}
                <div className="absolute inset-0 bg-gradient-to-bl from-zinc-900/95 via-zinc-800/90 to-zinc-900/95 backdrop-blur-sm">
                    {/* Frosted Glass Effect */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(255,255,255,0.05),transparent_50%)]" />

                    {/* Metal Frame */}
                    <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-l from-zinc-700 via-zinc-600 to-zinc-700" />

                    {/* Door Handle - Professional */}
                    <div className="absolute left-20 top-1/2 -translate-y-1/2">
                        <div className="w-3 h-40 bg-gradient-to-b from-zinc-400 via-zinc-300 to-zinc-400 rounded-full shadow-2xl" />
                    </div>

                    {/* Subtle Logo Etching */}
                    <div className="absolute top-32 right-1/4 translate-x-1/2 opacity-20">
                        <span className="material-symbols-outlined text-white text-8xl">
                            devices
                        </span>
                    </div>
                </div>
            </div>

            {/* Premium Showroom Behind Doors */}
            <div className={`absolute inset-0 transition-all duration-1000 ${
                phase === 'showcase' ? 'opacity-100' : 'opacity-0'
            }`}>

                {/* Showroom Lighting - Spotlights */}
                <div className="absolute top-0 left-1/4 w-32 h-96 bg-gradient-to-b from-white/10 via-white/5 to-transparent blur-2xl" />
                <div className="absolute top-0 right-1/4 w-32 h-96 bg-gradient-to-b from-white/10 via-white/5 to-transparent blur-2xl" />
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-96 bg-gradient-to-b from-white/15 via-white/8 to-transparent blur-3xl" />

                {/* Display Stands - Professional Product Showcase */}
                <div className="absolute inset-0 flex items-center justify-center perspective-1000">

                    {/* Center Stage - Main Product */}
                    <div className="relative">
                        {/* Glass Pedestal */}
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-64 h-8 bg-gradient-to-t from-white/20 to-transparent blur-sm" />

                        {/* Product Display - Rotating Device */}
                        <div className="animate-float-slow">
                            <div className="relative w-64 h-80 flex items-center justify-center">
                                {/* Holographic Product - Phone */}
                                <div className="relative group">
                                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all" />
                                    <div className="relative bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-3xl p-8 border border-white/10 shadow-2xl rotate-y-12 animate-rotate-y">
                                        <div className="w-48 h-72 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-2xl shadow-inner flex items-center justify-center">
                                            <span className="material-symbols-outlined text-white text-9xl fill-1">
                                                smartphone
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Product Info Display */}
                        <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 text-center">
                            <p className="text-white/80 text-sm font-light tracking-wider">PREMIUM COLLECTION</p>
                        </div>
                    </div>

                    {/* Side Products - Left */}
                    <div className="absolute left-32 top-1/2 -translate-y-1/2 opacity-70">
                        <div className="animate-float-slow" style={{ animationDelay: '0.5s' }}>
                            <div className="bg-zinc-800/50 backdrop-blur-sm rounded-2xl p-6 border border-white/5">
                                <span className="material-symbols-outlined text-white/60 text-7xl">
                                    laptop_mac
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Side Products - Right */}
                    <div className="absolute right-32 top-1/2 -translate-y-1/2 opacity-70">
                        <div className="animate-float-slow" style={{ animationDelay: '1s' }}>
                            <div className="bg-zinc-800/50 backdrop-blur-sm rounded-2xl p-6 border border-white/5">
                                <span className="material-symbols-outlined text-white/60 text-7xl">
                                    headphones
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Side Products - Bottom Left */}
                    <div className="absolute left-48 bottom-32 opacity-50">
                        <div className="animate-float-slow" style={{ animationDelay: '1.5s' }}>
                            <div className="bg-zinc-800/50 backdrop-blur-sm rounded-xl p-4 border border-white/5">
                                <span className="material-symbols-outlined text-white/50 text-5xl">
                                    watch
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Side Products - Bottom Right */}
                    <div className="absolute right-48 bottom-32 opacity-50">
                        <div className="animate-float-slow" style={{ animationDelay: '2s' }}>
                            <div className="bg-zinc-800/50 backdrop-blur-sm rounded-xl p-4 border border-white/5">
                                <span className="material-symbols-outlined text-white/50 text-5xl">
                                    tablet
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Professional Branding - Top */}
            <div className={`absolute top-16 left-0 right-0 text-center transition-all duration-1000 ${
                phase === 'doors' ? 'opacity-0 -translate-y-10' : 'opacity-100 translate-y-0'
            }`}>
                <h1 className="text-7xl md:text-8xl font-light text-white tracking-[0.2em] mb-4">
                    SHARJEEL
                </h1>
                <div className="flex items-center justify-center gap-4 mb-6">
                    <div className="h-px w-24 bg-gradient-to-r from-transparent to-white/30" />
                    <p className="text-xl text-white/60 font-light tracking-[0.3em]">
                        ELECTRONICS
                    </p>
                    <div className="h-px w-24 bg-gradient-to-l from-transparent to-white/30" />
                </div>
                <p className="text-sm text-white/40 font-light tracking-wider">
                    PREMIUM TECHNOLOGY DESTINATION
                </p>
            </div>

            {/* Minimalist Progress Bar - Bottom */}
            <div className="absolute bottom-0 left-0 right-0 pb-16">
                <div className="max-w-md mx-auto px-8">
                    <div className="flex items-center justify-between text-white/40 text-xs font-light tracking-wider mb-3">
                        <span>LOADING</span>
                        <span>{progress}%</span>
                    </div>
                    <div className="h-px bg-white/10 rounded-full overflow-hidden">
                        <div
                            className="h-full bg-gradient-to-r from-white/60 to-white/40 transition-all duration-300"
                            style={{ width: `${progress}%` }}
                        />
                    </div>
                </div>
            </div>

            {/* Store Hours / Info */}
            <div className="absolute bottom-8 left-8 text-white/20 text-xs font-light tracking-wider">
                <p>LAHORE, PAKISTAN</p>
            </div>

            <div className="absolute bottom-8 right-8 text-white/20 text-xs font-light tracking-wider">
                <p>EST. 2024</p>
            </div>
        </div>
    );
}