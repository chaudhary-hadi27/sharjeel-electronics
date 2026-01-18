// ============================================
// FILE: src/app/page.tsx - UPDATED WITH REUSABLE COMPONENTS
// ============================================
"use client";

import Hero from "@/components/sections/Hero";
import CategorySection from "@/components/sections/CategorySection";
import ProductCarousel from "@/components/products/ProductCarousel";
import ProductGrid from "@/components/products/ProductGrid";
import Newsletter from "@/components/sections/Newsletter";

export default function Home() {
    // ========== DUMMY DATA ==========
    const categories = [
        { name: "Mobiles", icon: "smartphone", slug: "mobiles", count: 234 },
        { name: "Laptops", icon: "laptop_mac", slug: "laptops", count: 156 },
        { name: "Audio", icon: "headphones", slug: "audio", count: 89 },
        { name: "Smart Home", icon: "home_iot_device", slug: "smart-home", count: 67 },
        { name: "Appliances", icon: "microwave", slug: "appliances", count: 123 }
    ];

    const featuredProducts = [
        {
            id: 1,
            name: "MacBook Pro M3",
            price: 450000,
            image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800",
            rating: 5,
            reviews: 124,
            brand: "Apple",
            viewCount: 847, // Subtle AI insight
            matchPercentage: 94,
        },
        {
            id: 2,
            name: "Galaxy S24 Ultra",
            price: 385000,
            originalPrice: 420000,
            image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=800",
            rating: 4.5,
            reviews: 89,
            brand: "Samsung",
            sale: true,
            discount: "8%",
            trending: true,
            viewCount: 623,
        },
        {
            id: 3,
            name: "Sony WH-1000XM5",
            price: 95000,
            image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=800",
            rating: 5,
            reviews: 210,
            brand: "Sony",
            badge: "Bestseller",
            viewCount: 1024,
            matchPercentage: 91,
        },
        {
            id: 4,
            name: "Apple Watch Ultra 2",
            price: 220000,
            image: "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=800",
            rating: 4.5,
            reviews: 156,
            brand: "Apple",
            viewCount: 445,
        },
    ];

    const latestProducts = [
        {
            id: 5,
            name: '55" Crystal UHD TV',
            brand: "Samsung",
            price: 145000,
            originalPrice: 170000,
            rating: 4.5,
            reviews: 42,
            sale: true,
            discount: "15%",
            image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=800",
        },
        {
            id: 6,
            name: "QuietComfort Headphones",
            brand: "Bose",
            price: 84999,
            rating: 5,
            reviews: 128,
            image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=800",
            viewCount: 234,
        },
        {
            id: 7,
            name: "Enki Pro Gaming Chair",
            brand: "Razer",
            price: 110000,
            rating: 4,
            reviews: 15,
            image: "https://images.unsplash.com/photo-1598550476439-6847785fcea6?w=800",
        },
        {
            id: 8,
            name: "iPad Pro 12.9-inch",
            brand: "Apple",
            price: 320000,
            rating: 5,
            reviews: 256,
            badge: "Bestseller",
            image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=800",
            viewCount: 892,
            matchPercentage: 88,
        },
    ];

    return (
        <main className="w-full">
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-20 py-8">

                {/* ========== HERO SECTION ========== */}
                <Hero
                    badge="New Arrival"
                    title="The New Era of"
                    highlight="Performance"
                    description="Experience the power of the latest flagship smartphone with cutting-edge technology and pro-grade cameras."
                    image="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=1600"
                    primaryButtonText="Shop Now"
                    secondaryButtonText="Learn More"
                />

                {/* ========== CATEGORIES ========== */}
                <CategorySection
                    title="Shop by Category"
                    categories={categories}
                    columns={5}
                />

                {/* ========== FEATURED PRODUCTS (AI-Powered) ========== */}
                <ProductCarousel
                    title="Featured for You"
                    subtitle="Smart recommendations based on trends"
                    icon="auto_awesome"
                    products={featuredProducts}
                    showNavigation={true}
                />

                {/* ========== LATEST PRODUCTS GRID ========== */}
                <section className="mb-12">
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                        Latest Tech Deals
                    </h2>
                    <ProductGrid
                        products={latestProducts}
                        columns={4}
                        gap="md"
                    />
                </section>

                {/* ========== NEWSLETTER ========== */}
                <Newsletter
                    title="Stay updated with the latest tech drops"
                    description="Subscribe to our newsletter and get exclusive access to limited edition releases."
                    buttonText="Subscribe Now"
                />

            </div>
        </main>
    );
}