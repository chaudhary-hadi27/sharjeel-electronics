// ============================================
// FILE: src/components/sections/CategorySection.tsx
// ============================================
"use client";

import React from 'react';
import Link from 'next/link';
import Card from '../ui/Card';
import Icon from '../ui/Icon';

interface Category {
    name: string;
    icon: string;
    slug?: string;
    count?: number;
}

interface CategorySectionProps {
    title?: string;
    categories: Category[];
    columns?: 3 | 4 | 5 | 6;
}

export default function CategorySection({
                                            title = 'Shop by Category',
                                            categories,
                                            columns = 5,
                                        }: CategorySectionProps) {
    const columnClasses = {
        3: 'grid-cols-2 sm:grid-cols-3',
        4: 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-4',
        5: 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-5',
        6: 'grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6',
    };

    return (
        <section className="mb-12">
            <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                    {title}
                </h3>
                <Link
                    href="/categories"
                    className="text-primary font-semibold text-sm hover:underline"
                >
                    View All
                </Link>
            </div>

            <div className={`grid ${columnClasses[columns]} gap-4`}>
                {categories.map((category) => (
                    <Link
                        key={category.name}
                        href={category.slug ? `/category/${category.slug}` : '#'}
                    >
                        <Card
                            variant="default"
                            padding="md"
                            hover
                            clickable
                            className="flex flex-col items-center gap-4 text-center"
                        >
                            <div className="size-16 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                <Icon name={category.icon} size="xl" />
                            </div>
                            <div>
                <span className="font-bold text-slate-900 dark:text-white block">
                  {category.name}
                </span>
                                {category.count && (
                                    <span className="text-xs text-slate-500 dark:text-[#92a4c9] mt-1">
                    {category.count} items
                  </span>
                                )}
                            </div>
                        </Card>
                    </Link>
                ))}
            </div>
        </section>
    );
}