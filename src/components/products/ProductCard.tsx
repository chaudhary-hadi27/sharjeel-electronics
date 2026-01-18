// ============================================
// FILE: src/components/products/ProductCard.tsx
// ============================================
"use client";

import React from 'react';
import Link from 'next/link';
import Badge from '../ui/Badge';
import Icon from '../ui/Icon';

interface ProductCardProps {
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
    // AI Features (Subtle)
    viewCount?: number; // "847 customers viewed this"
    matchPercentage?: number; // "94% match" but subtle
    trending?: boolean;
}

export default function ProductCard({
                                        id,
                                        name,
                                        price,
                                        originalPrice,
                                        image,
                                        rating = 0,
                                        reviews = 0,
                                        badge,
                                        sale,
                                        discount,
                                        inStock = true,
                                        brand,
                                        viewCount,
                                        matchPercentage,
                                        trending,
                                    }: ProductCardProps) {
    return (
        <Link href={`/products/${id}`}>
            <div className="group bg-white dark:bg-[#192233] rounded-xl border border-slate-200 dark:border-[#232f48] overflow-hidden hover:shadow-2xl hover:border-primary/50 transition-all">
                {/* Image Container */}
                <div className="relative aspect-square overflow-hidden bg-slate-100 dark:bg-slate-800">
                    <img
                        src={image}
                        alt={name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />

                    {/* Badges */}
                    <div className="absolute top-2 left-2 right-2 flex items-start justify-between">
                        <div className="flex flex-col gap-1.5">
                            {sale && discount && (
                                <Badge variant="danger" size="sm" rounded>
                                    Save {discount}
                                </Badge>
                            )}
                            {badge && (
                                <Badge variant="primary" size="sm" rounded>
                                    {badge}
                                </Badge>
                            )}
                            {trending && (
                                <Badge variant="warning" size="sm" rounded icon="trending_up">
                                    Hot
                                </Badge>
                            )}
                        </div>

                        {/* Wishlist Button */}
                        <button className="p-2 bg-white/90 dark:bg-slate-900/90 backdrop-blur rounded-full text-slate-400 hover:text-red-500 transition-colors">
                            <Icon name="favorite" size="sm" />
                        </button>
                    </div>

                    {/* Stock Status */}
                    {!inStock && (
                        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center">
              <span className="bg-white dark:bg-slate-900 px-4 py-2 rounded-lg font-bold text-sm text-slate-900 dark:text-white">
                Out of Stock
              </span>
                        </div>
                    )}
                </div>

                {/* Content */}
                <div className="p-4 space-y-2">
                    {/* Brand */}
                    {brand && (
                        <p className="text-slate-500 dark:text-[#92a4c9] text-xs font-semibold uppercase tracking-wider">
                            {brand}
                        </p>
                    )}

                    {/* Name */}
                    <h3 className="text-slate-900 dark:text-white font-bold text-sm leading-tight line-clamp-2 group-hover:text-primary transition-colors">
                        {name}
                    </h3>

                    {/* Rating */}
                    {rating > 0 && (
                        <div className="flex items-center gap-1.5">
                            <div className="flex items-center gap-0.5">
                                {[...Array(5)].map((_, i) => (
                                    <Icon
                                        key={i}
                                        name={i < Math.floor(rating) ? 'star' : 'star_outline'}
                                        size="xs"
                                        fill={i < Math.floor(rating)}
                                        className="text-amber-400"
                                    />
                                ))}
                            </div>
                            <span className="text-slate-400 dark:text-[#92a4c9] text-xs">
                ({reviews})
              </span>
                        </div>
                    )}

                    {/* Subtle AI Insights */}
                    {viewCount && (
                        <div className="flex items-center gap-1 text-xs text-slate-500 dark:text-[#92a4c9]">
                            <Icon name="visibility" size="xs" />
                            <span>{viewCount} viewed recently</span>
                        </div>
                    )}

                    {matchPercentage && matchPercentage >= 85 && (
                        <div className="flex items-center gap-1 text-xs text-green-600 dark:text-green-400">
                            <Icon name="check_circle" size="xs" />
                            <span>Popular choice</span>
                        </div>
                    )}

                    {/* Price */}
                    <div className="flex items-center justify-between pt-2">
                        <div className="flex flex-col">
              <span className="text-primary font-black text-lg">
                Rs. {price.toLocaleString()}
              </span>
                            {originalPrice && (
                                <span className="text-slate-400 dark:text-[#92a4c9] text-xs line-through">
                  Rs. {originalPrice.toLocaleString()}
                </span>
                            )}
                        </div>

                        {/* Add to Cart */}
                        <button className="p-2.5 bg-slate-100 dark:bg-[#232f48] hover:bg-primary dark:hover:bg-primary text-slate-900 dark:text-white hover:text-white rounded-lg transition-colors group-hover:scale-110">
                            <Icon name="add_shopping_cart" size="sm" />
                        </button>
                    </div>
                </div>
            </div>
        </Link>
    );
}