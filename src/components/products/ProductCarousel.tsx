// ============================================
// FILE: src/components/products/ProductCarousel.tsx
// ============================================
"use client";

import React, { useRef } from 'react';
import ProductCard from './ProductCard';
import Button from '../ui/Button';

interface Product {
    id: number | string;
    name: string;
    price: number;
    originalPrice?: number;
    image: string;
    rating?: number;
    reviews?: number;
    badge?: string;
    sale?: boolean;
    discount?: string;
    inStock?: boolean;
    brand?: string;
    viewCount?: number;
    matchPercentage?: number;
    trending?: boolean;
}

interface ProductCarouselProps {
    title: string;
    subtitle?: string;
    products: Product[];
    icon?: string;
    showNavigation?: boolean;
}

export default function ProductCarousel({
                                            title,
                                            subtitle,
                                            products,
                                            icon,
                                            showNavigation = true,
                                        }: ProductCarouselProps) {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const scrollAmount = direction === 'left' ? -400 : 400;
            scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    return (
        <section className="mb-12">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                        {icon && (
                            <span className="material-symbols-outlined text-primary text-2xl">
                {icon}
              </span>
                        )}
                        {title}
                    </h2>
                    {subtitle && (
                        <p className="text-slate-500 dark:text-[#92a4c9] text-sm mt-1">
                            {subtitle}
                        </p>
                    )}
                </div>

                {/* Navigation Buttons */}
                {showNavigation && (
                    <div className="hidden md:flex gap-2">
                        <button
                            onClick={() => scroll('left')}
                            className="p-2 rounded-full border border-slate-200 dark:border-[#232f48] text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-[#232f48] transition-colors"
                        >
                            <span className="material-symbols-outlined">chevron_left</span>
                        </button>
                        <button
                            onClick={() => scroll('right')}
                            className="p-2 rounded-full border border-slate-200 dark:border-[#232f48] text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-[#232f48] transition-colors"
                        >
                            <span className="material-symbols-outlined">chevron_right</span>
                        </button>
                    </div>
                )}
            </div>

            {/* Carousel */}
            <div
                ref={scrollRef}
                className="flex overflow-x-auto gap-6 pb-4 scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0"
            >
                {products.map((product) => (
                    <div key={product.id} className="flex-none w-64 md:w-72">
                        <ProductCard {...product} />
                    </div>
                ))}
            </div>
        </section>
    );
}