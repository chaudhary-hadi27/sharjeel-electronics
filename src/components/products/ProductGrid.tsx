// ============================================
// FILE: src/components/products/ProductGrid.tsx
// ============================================
"use client";

import React from 'react';
import ProductCard from './ProductCard';

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

interface ProductGridProps {
    products: Product[];
    columns?: 2 | 3 | 4 | 5;
    gap?: 'sm' | 'md' | 'lg';
    loading?: boolean;
}

export default function ProductGrid({
                                        products,
                                        columns = 4,
                                        gap = 'md',
                                        loading = false,
                                    }: ProductGridProps) {
    const columnClasses = {
        2: 'grid-cols-1 sm:grid-cols-2',
        3: 'grid-cols-2 md:grid-cols-3',
        4: 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4',
        5: 'grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5',
    };

    const gapClasses = {
        sm: 'gap-3',
        md: 'gap-4 lg:gap-6',
        lg: 'gap-6 lg:gap-8',
    };

    if (loading) {
        return (
            <div className={`grid ${columnClasses[columns]} ${gapClasses[gap]}`}>
                {[...Array(8)].map((_, i) => (
                    <div key={i} className="animate-pulse">
                        <div className="aspect-square bg-slate-200 dark:bg-slate-800 rounded-xl mb-4 transition-colors"></div>
                        <div className="h-4 bg-slate-200 dark:bg-slate-800 rounded w-3/4 mb-2 transition-colors"></div>
                        <div className="h-4 bg-slate-200 dark:bg-slate-800 rounded w-1/2 transition-colors"></div>
                    </div>
                ))}
            </div>
        );
    }

    if (products.length === 0) {
        return (
            <div className="text-center py-20">
                <span className="material-symbols-outlined text-6xl text-slate-300 dark:text-slate-700 mb-4 transition-colors">
                    inventory_2
                </span>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 transition-colors">
                    No Products Found
                </h3>
                <p className="text-slate-500 dark:text-[#92a4c9] transition-colors">
                    Try adjusting your filters or search query
                </p>
            </div>
        );
    }

    return (
        <div className={`grid ${columnClasses[columns]} ${gapClasses[gap]}`}>
            {products.map((product) => (
                <ProductCard key={product.id} {...product} />
            ))}
        </div>
    );
}