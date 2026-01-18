// ============================================
// FILE: src/components/sections/Hero.tsx
// ============================================
"use client";

import React from 'react';
import Button from '../ui/Button';
import Badge from '../ui/Badge';

interface HeroProps {
    badge?: string;
    title: string;
    highlight?: string;
    description: string;
    image: string;
    primaryButtonText?: string;
    secondaryButtonText?: string;
    onPrimaryClick?: () => void;
    onSecondaryClick?: () => void;
}

export default function Hero({
                                 badge,
                                 title,
                                 highlight,
                                 description,
                                 image,
                                 primaryButtonText = 'Shop Now',
                                 secondaryButtonText = 'Learn More',
                                 onPrimaryClick,
                                 onSecondaryClick,
                             }: HeroProps) {
    return (
        <section className="mb-12">
            <div className="relative w-full rounded-xl overflow-hidden group">
                <div className="aspect-[16/9] md:aspect-[21/9]">
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 dark:from-black/95 via-slate-900/60 dark:via-black/60 to-transparent z-10 transition-colors duration-200" />

                    {/* Background Image */}
                    <img
                        src={image}
                        alt={title}
                        className="absolute inset-0 w-full h-full object-cover"
                    />

                    {/* Content */}
                    <div className="absolute inset-0 z-20 flex flex-col justify-center px-8 lg:px-12 max-w-2xl">
                        {badge && (
                            <Badge variant="primary" size="md" rounded className="mb-4 w-fit">
                                {badge}
                            </Badge>
                        )}

                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 lg:mb-6 leading-[1.1]">
                            {title}
                            {highlight && (
                                <>
                                    <br />
                                    <span className="text-primary">{highlight}</span>
                                </>
                            )}
                        </h2>

                        <p className="text-base lg:text-lg text-slate-300 dark:text-slate-200 mb-6 lg:mb-8 max-w-lg transition-colors">
                            {description}
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button
                                variant="primary"
                                size="lg"
                                onClick={onPrimaryClick}
                            >
                                {primaryButtonText}
                            </Button>
                            <Button
                                variant="ghost"
                                size="lg"
                                onClick={onSecondaryClick}
                                className="bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border-white/20"
                            >
                                {secondaryButtonText}
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}