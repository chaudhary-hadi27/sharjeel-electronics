"use client";

import { useState } from "react";
import { useParams } from "next/navigation";

export default function ProductDetailPage() {
    const params = useParams();
    const [selectedImage, setSelectedImage] = useState(0);
    const [quantity, setQuantity] = useState(1);

    // Mock product data
    const product = {
        id: params.id,
        name: "iPhone 15 Pro Max",
        price: 485000,
        originalPrice: 520000,
        images: [
            "https://images.unsplash.com/photo-1696446702061-cbd0e76cd43f?w=800",
            "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=800",
            "https://images.unsplash.com/photo-1695048064942-d06ba48c2c8b?w=800",
        ],
        rating: 4.8,
        reviews: 234,
        inStock: true,
        category: "Smartphones",
        brand: "Apple",
        description: "Latest flagship phone with A17 Pro chip, titanium design, and professional camera system.",
        specs: {
            "Processor": "A17 Pro Bionic Chip",
            "Display": "6.7-inch Super Retina XDR",
            "Camera": "48MP Main + 12MP Ultra Wide",
            "Battery": "Up to 29 hours video playback",
            "Storage": "256GB",
        },
        aiInsight: "✨ AI Analysis: Perfect for content creators and professionals. Camera quality beats competitors in low light. Battery timing excellent for heavy users.",
        aiMatch: 94,
        trendingViews: 847,
    };

    const relatedProducts = [
        {
            id: 2,
            name: "AirPods Pro",
            price: 89000,
            image: "https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7?w=300",
            aiReason: "Perfect pairing with iPhone"
        },
        {
            id: 3,
            name: "iPhone 15 Pro Case",
            price: 8500,
            image: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=300",
            aiReason: "Premium protection"
        },
    ];

    return (
        <main className="w-full bg-white dark:bg-[#101622] min-h-screen transition-colors duration-200">
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-20 py-4 sm:py-6 lg:py-8">

                {/* Breadcrumb */}
                <div className="text-xs sm:text-sm text-slate-500 dark:text-[#92a4c9] mb-4 sm:mb-6 flex items-center gap-2 overflow-x-auto scrollbar-hide transition-colors">
                    <span className="whitespace-nowrap">Home</span>
                    <span className="material-symbols-outlined text-xs">chevron_right</span>
                    <span className="whitespace-nowrap">{product.category}</span>
                    <span className="material-symbols-outlined text-xs">chevron_right</span>
                    <span className="text-slate-900 dark:text-white truncate transition-colors">{product.name}</span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12">

                    {/* Left: Images */}
                    <div className="order-1">
                        {/* Main Image */}
                        <div className="aspect-square rounded-xl lg:rounded-2xl overflow-hidden bg-slate-100 dark:bg-[#192233] mb-3 sm:mb-4 transition-colors">
                            <img
                                src={product.images[selectedImage]}
                                alt={product.name}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Thumbnail Gallery */}
                        <div className="grid grid-cols-3 gap-2 sm:gap-4">
                            {product.images.map((img, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setSelectedImage(idx)}
                                    className={`aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                                        selectedImage === idx
                                            ? "border-primary scale-105"
                                            : "border-slate-200 dark:border-[#232f48] hover:border-slate-300 dark:hover:border-[#2d3b5a]"
                                    }`}
                                >
                                    <img src={img} alt="" className="w-full h-full object-cover" />
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Right: Details */}
                    <div className="space-y-4 sm:space-y-6 order-2">

                        {/* AI Match Badge */}
                        <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-bold">
                            <span className="material-symbols-outlined text-base sm:text-lg animate-pulse">auto_awesome</span>
                            {product.aiMatch}% Match for You
                        </div>

                        {/* Title & Rating */}
                        <div>
                            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 dark:text-white mb-2 leading-tight transition-colors">
                                {product.name}
                            </h1>
                            <div className="flex items-center gap-3 sm:gap-4 flex-wrap">
                                <div className="flex items-center gap-1">
                                    {[...Array(5)].map((_, i) => (
                                        <span
                                            key={i}
                                            className={`material-symbols-outlined text-amber-400 text-base sm:text-lg ${
                                                i < Math.floor(product.rating) ? "fill-1" : ""
                                            }`}
                                        >
                                            star
                                        </span>
                                    ))}
                                    <span className="text-slate-600 dark:text-[#92a4c9] ml-2 text-xs sm:text-sm transition-colors">
                                        {product.rating} ({product.reviews} reviews)
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* AI Insight Box */}
                        <div className="bg-gradient-to-r from-primary/5 to-blue-500/5 dark:from-primary/10 dark:to-blue-500/10 border border-primary/20 dark:border-primary/30 rounded-lg sm:rounded-xl p-3 sm:p-4 transition-colors">
                            <div className="flex items-start gap-2 sm:gap-3">
                                <span className="material-symbols-outlined text-primary text-xl sm:text-2xl mt-0.5 sm:mt-1 shrink-0">stars</span>
                                <div>
                                    <h3 className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white mb-1 transition-colors">
                                        AI Insight
                                    </h3>
                                    <p className="text-xs sm:text-sm text-slate-600 dark:text-[#92a4c9] leading-relaxed italic transition-colors">
                                        {product.aiInsight}
                                    </p>
                                    <div className="mt-2 sm:mt-3 flex items-center gap-2 text-[10px] sm:text-xs text-slate-500 dark:text-[#92a4c9] transition-colors">
                                        <span className="material-symbols-outlined text-xs sm:text-sm">visibility</span>
                                        {product.trendingViews} customers viewed this in last 24 hours
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Price */}
                        <div className="flex items-end gap-2 sm:gap-3">
                            <span className="text-3xl sm:text-4xl font-black text-primary">
                                Rs. {product.price.toLocaleString()}
                            </span>
                            {product.originalPrice && (
                                <span className="text-lg sm:text-xl text-slate-400 dark:text-[#92a4c9] line-through transition-colors">
                                    Rs. {product.originalPrice.toLocaleString()}
                                </span>
                            )}
                        </div>

                        {/* Stock Status */}
                        {product.inStock ? (
                            <div className="flex items-center gap-2 text-green-600 dark:text-green-400 text-xs sm:text-sm font-bold">
                                <span className="material-symbols-outlined text-base sm:text-lg">check_circle</span>
                                In Stock - Ready to Ship
                            </div>
                        ) : (
                            <div className="flex items-center gap-2 text-red-600 dark:text-red-400 text-xs sm:text-sm font-bold">
                                <span className="material-symbols-outlined text-base sm:text-lg">cancel</span>
                                Out of Stock
                            </div>
                        )}

                        {/* Quantity & Add to Cart */}
                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                            <div className="flex items-center border border-slate-200 dark:border-[#232f48] rounded-lg w-fit transition-colors">
                                <button
                                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                    className="px-3 sm:px-4 py-2 sm:py-3 hover:bg-slate-100 dark:hover:bg-[#232f48] transition-colors"
                                >
                                    <span className="material-symbols-outlined text-lg sm:text-xl text-slate-900 dark:text-white">remove</span>
                                </button>
                                <span className="px-4 sm:px-6 py-2 sm:py-3 font-bold text-slate-900 dark:text-white min-w-[40px] text-center transition-colors">
                                    {quantity}
                                </span>
                                <button
                                    onClick={() => setQuantity(quantity + 1)}
                                    className="px-3 sm:px-4 py-2 sm:py-3 hover:bg-slate-100 dark:hover:bg-[#232f48] transition-colors"
                                >
                                    <span className="material-symbols-outlined text-lg sm:text-xl text-slate-900 dark:text-white">add</span>
                                </button>
                            </div>

                            <div className="flex gap-2 sm:gap-3 flex-1">
                                <button className="flex-1 bg-primary text-white font-bold py-3 sm:py-4 px-4 sm:px-6 rounded-lg hover:bg-blue-600 transition-all flex items-center justify-center gap-2 text-sm sm:text-base active:scale-95">
                                    <span className="material-symbols-outlined text-lg sm:text-xl">add_shopping_cart</span>
                                    <span className="hidden xs:inline">Add to Cart</span>
                                    <span className="xs:hidden">Add</span>
                                </button>

                                <button className="p-3 sm:p-4 border border-slate-200 dark:border-[#232f48] rounded-lg hover:bg-slate-100 dark:hover:bg-[#232f48] transition-colors shrink-0">
                                    <span className="material-symbols-outlined text-lg sm:text-xl text-slate-900 dark:text-white">favorite</span>
                                </button>
                            </div>
                        </div>

                        {/* Specs */}
                        <div className="border border-slate-200 dark:border-[#232f48] rounded-lg sm:rounded-xl p-4 sm:p-6 space-y-2 sm:space-y-3 transition-colors">
                            <h3 className="font-bold text-base sm:text-lg text-slate-900 dark:text-white mb-3 sm:mb-4 transition-colors">
                                Specifications
                            </h3>
                            {Object.entries(product.specs).map(([key, value]) => (
                                <div key={key} className="flex justify-between py-2 border-b border-slate-100 dark:border-[#232f48] last:border-0 gap-4 transition-colors">
                                    <span className="text-slate-600 dark:text-[#92a4c9] text-xs sm:text-sm transition-colors">
                                        {key}
                                    </span>
                                    <span className="font-semibold text-slate-900 dark:text-white text-xs sm:text-sm text-right transition-colors">
                                        {value}
                                    </span>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>

                {/* AI Recommended Products */}
                <section className="mt-12 sm:mt-16">
                    <div className="flex items-center gap-2 mb-4 sm:mb-6">
                        <span className="material-symbols-outlined text-primary text-xl sm:text-2xl animate-pulse">
                            auto_awesome
                        </span>
                        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white transition-colors">
                            AI Recommends
                        </h2>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
                        {relatedProducts.map((item) => (
                            <div
                                key={item.id}
                                className="bg-white dark:bg-[#192233] rounded-lg sm:rounded-xl border border-slate-200 dark:border-[#232f48] overflow-hidden hover:shadow-xl transition-all group"
                            >
                                <div className="aspect-square overflow-hidden bg-slate-100 dark:bg-slate-800 transition-colors">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                </div>
                                <div className="p-3 sm:p-4">
                                    <p className="text-[10px] sm:text-xs text-primary font-bold mb-1 sm:mb-2 flex items-center gap-1">
                                        <span className="material-symbols-outlined text-xs sm:text-sm">stars</span>
                                        {item.aiReason}
                                    </p>
                                    <h3 className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white mb-1 sm:mb-2 line-clamp-2 transition-colors">
                                        {item.name}
                                    </h3>
                                    <p className="text-primary font-bold text-sm sm:text-base lg:text-lg">
                                        Rs. {item.price.toLocaleString()}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

            </div>
        </main>
    );
}