// ============================================
// FILE: src/app/page.tsx - COMPLETE VERSION
// ============================================
"use client";

import { useState } from "react";

export default function Home() {
    const [email, setEmail] = useState("");

    const categories = [
        { name: "Mobiles", icon: "smartphone" },
        { name: "Laptops", icon: "laptop_mac" },
        { name: "Audio", icon: "headphones" },
        { name: "Smart Home", icon: "home_iot_device" },
        { name: "Appliances", icon: "microwave" }
    ];

    const aiProducts = [
        {
            id: 1,
            name: "MacBook Pro M3",
            insight: "Unmatched power for creatives. The neural engine optimizes 4K rendering in real-time.",
            price: 450000,
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC0-YjEtXjztTNqrh_DyiqpSVf7kXHMbnWSwZnbd0nxhuFAHccnTmsIH3gODMcM1mgT0i-Bg74qG_1yjaM-fDbBQ1FioegogIxBM60DU8-sWBh2WU286zBcpy-gT0E6m1xanBPuQNAfB-pCIEmcNb2vehxyiGnWIN6qKinSiOS5akm22V5A7ArOQIKf-2vM7ABa4mXKesGDLz0GvEzP_YO0jE3Sf6CRUUhPJRpMPQtli7v9QOBJE4RGAdFZDOAcOOLbD3rBN32tQ0w",
        },
        {
            id: 2,
            name: "Galaxy S24 Ultra",
            insight: "The smartest zoom on a phone. AI-assisted nightography captures detail the human eye misses.",
            price: 385000,
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDUtrrG7R1ERuaoQ-F-1AnaKTLqmpk1FFabtET8N10k10q_pL7JZjIU6Lq-bEpAs9gGl30y6tmt5hpRiehuon7MVivV3hp85yX-9X3JAYMiZxWDr4p6RmJ3U9BTROjjnbmZe9GbP8guiVilJEb_ymKBIQ5Q6KKcoVieDquTLuf5Mjpcsz5QJgBPweIx6HPT0KtNckqDuchhEcHeFrPrj01udqCTMKwpfFU8MisN78XBx_twAhYym96ZfPCKkkd_DHWCH8kiMLESRAU",
        },
        {
            id: 3,
            name: "Sony WH-1000XM5",
            insight: "Industry-leading silence. Adapts noise cancellation based on your movement and environment.",
            price: 95000,
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuChqDf5shtN_ld2ll4ffHYcd5esIV6zupqgd2_4Ck_cR_tjd65Bm4Wyjj5mTvTpscq1cgjzdL5ghmSHnyisysFyUsoSkStsWatI7kb0OQpvBP3NmmqJdBZtTib7LLHtjODy9vESQyN1w4DglQzk5yN1FSRI289ThPOAsgNm7Vn_hShWnM4f5clkdRXFT4TuhVCPNEfQPoqI6V5HTwACKl4ddagtNjAiOD9O_BJQPj5GujhceL1GqOl5pfIlOFnmb1NAbH7M2o9lbEU",
        },
        {
            id: 4,
            name: "Apple Watch Ultra",
            insight: "Built for the extreme. Advanced health sensors provide proactive heart health notifications.",
            price: 220000,
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA8BdvivWw3HxoE5YJBT23WxwsUF3q7vgbnl-dSGVFWMqAK-8PUUftpJ_hQMsrHcyxPsEcw2JhW46ncKaki7xZ5K4uAzl8egn-2tWAKnlS9S3nXYSPJjuAVyp_yRSa63XWXgcZJI9nKAD1xNtBAwRIIn1BU7bmskObr8TryRiUcBECI6TxZaYS6s32Pg-ZqufP00JVkrg6VHZVyJ-tRpQc5wlxel7ZJ2GITyjgN9vu_gzqzpr6SEQ6DUtRYywnmnQmu81cuiKUqimQ",
        },
    ];

    const products = [
        {
            id: 1,
            name: '55" Crystal UHD 4K Smart TV',
            brand: "Samsung",
            price: 145000,
            rating: 4.5,
            reviews: 42,
            sale: true,
            discount: "15%",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC6nHd9RIsDujsmZOsU-qywFI6bIhuSE_ATgPyYZkDR3ePFhjbRA5Ylw1OUHoT4plsKtL-KYaxss9XEC_gUo8U3NgGcQeVEh9KBap4NsS0A7emCYeXd7KFNXxezx8oo1G9F_LknTZKaQNdr3d-A2f6kQWkJbpCRner9hBgCkBi-En2XCbsTdDXI9NUn8zdvS964NojbhPoL1MkANM4i049cbygX8qj9OT41SfaVJ_X1Cxz6VU9aowhDg4KdGK39jV5FAVqLwxhL9lQ",
        },
        {
            id: 2,
            name: "QuietComfort Headphones",
            brand: "Bose",
            price: 84999,
            rating: 5,
            reviews: 128,
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDaCGoZeac__gRiagw7xu2JEr12XYDLthuO5hdKlpO5JW_yMTw56_SvOHNAVma6JYjJQqpTiO5lEt7-o6lhGhdT_LYcLS9XW2_VPMC5CHqGhczxAijnixX5_qbHfi6V1LdlBpfp6Jj5uUn9YmpfgXXAkpx4qgLSBFS1LuGqsJziR6z99hOd9OrnbL1IWq2WBUg_pAF_S_L8RJRxdz7wowe-SeVc6Cm-mV5Vi-E50lUJTtqOABsdgnLIAdFRZnPIRdyiDgqAJrbHAZY",
        },
        {
            id: 3,
            name: "Enki Pro Gaming Chair",
            brand: "Razer",
            price: 110000,
            rating: 4,
            reviews: 15,
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuACtoWvRPIZ9maKNmp-kW_lJTTVaqyy9SdYoDYIWIxrnK9talaQw8t58VLxTfCRQCDmV2mDl0jG65bbCGWfsN5gWSZKcc-H8Y2H4ujpssQoljxMSuxcxh5gzZGPQo5zfA_WxQtboK-S3vUEti-Dy0hW_p7JvkNDGi0Y5IM1PJCz_BpdIgybzVSKAQXdaHu2infkH4W-t5bIPM4funQzTXhXF7aTAzM4espf4ROdz-w2nCZzo0bJeAcJamF5160V8hwFGxcoZ1BJG1k",
        },
        {
            id: 4,
            name: "iPad Pro 12.9-inch (M2)",
            brand: "Apple",
            price: 320000,
            rating: 5,
            reviews: 256,
            badge: "Bestseller",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB2ChpPmIwB79LbkocarrgU9_CkfiLXfIMkKQ1_6U7JLp-leYRBCGiPWywbTleXHHcniYQYXwXWayfwzHTj_xqEvcNWwQY-ofOIsaLjZQfpJGKTcX402vN-exRaNMT8SzYvBjwFQ_cefTStvXLEfXK7DHrVKuxVWH4MQoujOf_5tSnELqDJ5AkkJ0rDVfyYPpM1gx9Ajlogl3igaJkTWzQHIXwyNiSPHq-FE1d8i1-qF5i3QMOYSKio42f7OOTXsUt-d0qPEPoxdaw",
        },
    ];

    const laptops = [
        {
            id: 1,
            name: "MacBook Pro M3 Max",
            description: "The ultimate pro laptop for power users and creatives.",
            price: 985000,
            rating: 5,
            reviews: 124,
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDcY2jzxokSP9S1iW8kXB9m9vQbmH2VFrfq9xr3pKza4zxHiA6OtGWYvW5TaLioWDyYd1AkuoT-_sOb8jfI_2rOKmExWO6lt3MJMSPvsB4m-h3Uu5vOs4qNwAs-bow3yHaz_Y4EjqvpTiQnxBlilq5dg2EyiMZ3sSwuJlosi9C33iKHhjN73rrORDOUwizYKlmE7Bt0knskG0wvwaR3nMWZId57YFGPNwD87cReb4HKhiHVzD0-GiLdzByP_23lr4WafB0A3_XqTW8",
        },
        {
            id: 2,
            name: "Dell XPS 15 OLED",
            description: "Stunning 4K display meets high performance in a compact frame.",
            price: 620000,
            rating: 4,
            reviews: 89,
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCQQdkQNoPfkTOcxF9Kg2ZFhqOCMdORuhpR5MgWPqrlNFI-KDKcequN7_eEAjuS4UowvfSkUaJRKWqX36wEcCpkDqPT1XCv_jcpVn3iNgMFwEmUYN525Wowmjbcy3d31XwYwTPeEW0yU9rNbtaTIPs8AyqATpSBtF8Irw4_eMHha_eRna9JZ14qpvBEBYPSwnag4-o3awLZkQZ3_c4BsDPq3Kdy2unJMyR2hO1PCk_ebJQh9lc3KQwyWCvIUtXYL9c40EjKk_oZEbk",
        },
        {
            id: 3,
            name: "ThinkPad X1 Carbon",
            description: "The gold standard for business productivity and reliability.",
            price: 520000,
            rating: 5,
            reviews: 210,
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCihvAAQnLx0zF5R55Q7GRmNSxyIvJxlAZyRSQu9ELwpzZxZHqvKm-0IZGF2vOzI8kdQMqrSaQz3hvGZGNmsT1-1u4pQQop_E672UtrsmFBs1RwdHHi0pzFA_YF__FOELlWWcA7BqJQDYw152_U3dX5ZUpS2jJsqZFVBBtLwS1Dqjl_pOrIxPcvX13u7SZpqeLQ8s7oSaaLNmlE7yltLhTdbA66BDV5XQus_GZn4w2pLgHh5Q6CWpdzc6JzhWH5pwUSzJXWK49trXY",
        },
        {
            id: 4,
            name: "Razer Blade 16",
            description: "Ultimate gaming performance with an elegant minimalist design.",
            price: 815000,
            originalPrice: 900000,
            rating: 4,
            reviews: 56,
            sale: true,
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBuLASI3uLW2VjaPTUheBxNTkSsjcAOyaQTnb3Aah2s_lGj5AsgogZIJgAkfT5RTexwL7zEwR74zAz-vnuu0lycRHZ8hnAIxvNLc35mDoJG3DkLtuL-8DhOPZYx_igksVkbKnqyKvRvsc7v3-mAyEzXhy7peRjvwLarYSZHVus9Lj6xhsKQOZ1RKiymAU0OqxeLkE8pehWFhjGPlBOAw4qJYFnEkALeH0Q0Ofb3NL06Mm7FWuK0Xuna92Nicu86OKoL9A2BIupES_M",
        },
    ];

    return (
        <main className="w-full">
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-20 py-4 sm:py-6 lg:py-8">

                {/* ========== HERO SECTION - COMPLETE ========== */}
                <section className="mb-8 sm:mb-10 lg:mb-12">
                    <div className="relative w-full rounded-lg sm:rounded-xl overflow-hidden group">
                        <div className="aspect-[16/12] sm:aspect-[16/10] md:aspect-[21/10] lg:aspect-[21/9]">
                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 dark:from-background-dark/95 via-slate-900/60 dark:via-background-dark/60 to-transparent z-10"></div>

                            {/* Background Image */}
                            <img
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDOcyDVTHFH0KkPuAv-RdrufRYF-fWxjlPvCtDEHDXIpE9UFWT-sYrWaFVbH59asIgA0m36seDvpwK29_wuuSMcU0EuQL0SyGA9zVXULP17XSJJ9jAd1MlM7p5rs1I0PWyznBUD9OqXNsEimdLNrPJ2UT60h1BN89lCadd4GTKkgY0BaSSfSrPryPwKVJlYC8a0nrvCK6GDcycfNkTnOlLpAkGflYHuKiQrk40-P2HssIA__0Zv9UiQWE42WYtXpqoR4Hb01YjZAGo"
                                alt="Flagship Smartphone"
                                className="absolute inset-0 w-full h-full object-cover"
                            />

                            {/* Hero Content */}
                            <div className="absolute inset-0 z-20 flex flex-col justify-center px-4 sm:px-8 lg:px-12 max-w-full sm:max-w-xl lg:max-w-2xl">
                                {/* New Arrival Badge */}
                                <span className="inline-block px-2 sm:px-3 py-1 bg-primary/20 text-primary border border-primary/30 text-[10px] sm:text-xs font-bold uppercase tracking-widest rounded-full mb-3 sm:mb-4 w-fit">
                  New Arrival
                </span>

                                {/* Main Heading */}
                                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-3 sm:mb-4 lg:mb-6 leading-[1.1]">
                                    The New Era of <br />
                                    <span className="text-primary">Performance</span>
                                </h2>

                                {/* Description */}
                                <p className="text-sm sm:text-base lg:text-lg text-slate-300 mb-4 sm:mb-6 lg:mb-8 line-clamp-2 sm:line-clamp-none max-w-lg">
                                    Experience the power of the latest flagship smartphone with cutting-edge technology and pro-grade cameras.
                                </p>

                                {/* CTA Buttons */}
                                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                                    <button className="bg-primary hover:bg-primary/90 text-white font-bold py-2.5 sm:py-3 px-6 sm:px-8 rounded-lg transition-all shadow-lg shadow-primary/25 text-sm sm:text-base">
                                        Shop Now
                                    </button>
                                    <button className="bg-white/10 hover:bg-white/20 text-white font-bold py-2.5 sm:py-3 px-6 sm:px-8 rounded-lg backdrop-blur-md transition-all text-sm sm:text-base">
                                        Learn More
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ========== SHOP BY CATEGORY ========== */}
                <section className="mb-8 sm:mb-10 lg:mb-12">
                    <div className="flex items-center justify-between mb-4 sm:mb-6">
                        <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
                            Shop by Category
                        </h3>
                        <a href="#" className="text-primary font-semibold text-xs sm:text-sm hover:underline">
                            View All
                        </a>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
                        {categories.map((category) => (
                            <div
                                key={category.name}
                                className="group cursor-pointer bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 sm:p-6 rounded-xl flex flex-col items-center gap-3 sm:gap-4 transition-all hover:shadow-xl hover:border-primary/50"
                            >
                                <div className="size-12 sm:size-16 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                    <span className="material-symbols-outlined text-2xl sm:!text-3xl">{category.icon}</span>
                                </div>
                                <span className="font-bold text-sm sm:text-base text-slate-900 dark:text-white">{category.name}</span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* ========== AI FEATURED PRODUCTS ========== */}
                <section className="mb-8 sm:mb-10 lg:mb-12">
                    <div className="flex items-center justify-between mb-4 sm:mb-6 px-1 sm:px-2">
                        <div>
                            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <span className="material-symbols-outlined text-primary animate-pulse text-xl sm:text-2xl">
                  auto_awesome
                </span>
                                <span className="hidden sm:inline">Feature Products</span>
                                <span className="sm:hidden">Feature Products</span>
                            </h2>
                            <p className="text-slate-500 dark:text-[#92a4c9] text-xs sm:text-sm mt-1">
                                Smart recommendations based on your needs
                            </p>
                        </div>
                        <div className="hidden sm:flex gap-2">
                            <button className="p-2 rounded-full border border-slate-200 dark:border-[#232f48] text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-[#232f48] transition-colors">
                                <span className="material-symbols-outlined text-lg sm:text-xl">chevron_left</span>
                            </button>
                            <button className="p-2 rounded-full border border-slate-200 dark:border-[#232f48] text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-[#232f48] transition-colors">
                                <span className="material-symbols-outlined text-lg sm:text-xl">chevron_right</span>
                            </button>
                        </div>
                    </div>

                    <div className="flex overflow-x-auto pb-4 gap-4 sm:gap-6 scrollbar-hide -mx-4 sm:mx-0 px-4 sm:px-0">
                        {aiProducts.map((product) => (
                            <div
                                key={product.id}
                                className="flex-none w-64 sm:w-72 bg-white dark:bg-[#192233] border border-slate-200 dark:border-[#232f48] rounded-xl overflow-hidden hover:border-primary/50 hover:shadow-xl transition-all group"
                            >
                                <div className="aspect-[3/4] relative overflow-hidden">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                                <div className="p-4 sm:p-5">
                                    <h3 className="text-slate-900 dark:text-white font-bold mb-1 text-sm sm:text-base">
                                        {product.name}
                                    </h3>
                                    <p className="text-primary text-[10px] sm:text-xs font-bold uppercase mb-2 sm:mb-3 flex items-center gap-1">
                                        <span className="material-symbols-outlined text-xs sm:text-sm animate-pulse">stars</span>
                                        AI Insight
                                    </p>
                                    <p className="text-slate-500 dark:text-[#92a4c9] text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4 italic line-clamp-3">
                                        "{product.insight}"
                                    </p>
                                    <div className="flex items-center justify-between">
                    <span className="text-slate-900 dark:text-white font-bold text-sm sm:text-base">
                      Rs. {product.price.toLocaleString()}
                    </span>
                                        <button className="p-1.5 sm:p-2 bg-primary rounded-lg text-white hover:bg-blue-600 transition-colors">
                                            <span className="material-symbols-outlined text-base sm:text-lg">add_shopping_cart</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* ========== PRO WORKSTATIONS ========== */}
                <section className="mb-8 sm:mb-10 lg:mb-12">
                    <div className="flex items-center justify-between mb-4 sm:mb-6">
                        <div>
                            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                                Pro Workstations
                            </h3>
                            <p className="text-slate-500 dark:text-[#92a4c9] text-xs sm:text-sm mt-1">
                                Empower your creative workflow
                            </p>
                        </div>
                        <div className="hidden md:flex gap-2">
                            <button className="size-8 sm:size-10 flex items-center justify-center rounded-full border border-slate-200 dark:border-[#232f48] hover:bg-slate-100 dark:hover:bg-[#232f48] transition-colors">
                                <span className="material-symbols-outlined text-lg sm:text-xl">chevron_left</span>
                            </button>
                            <button className="size-8 sm:size-10 flex items-center justify-center rounded-full border border-slate-200 dark:border-[#232f48] hover:bg-slate-100 dark:hover:bg-[#232f48] transition-colors">
                                <span className="material-symbols-outlined text-lg sm:text-xl">chevron_right</span>
                            </button>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
                        {laptops.map((laptop) => (
                            <div
                                key={laptop.id}
                                className="group bg-white dark:bg-[#192233] rounded-lg sm:rounded-xl border border-slate-200 dark:border-[#232f48] overflow-hidden hover:shadow-2xl hover:border-primary/50 transition-all"
                            >
                                <div className="relative aspect-square overflow-hidden bg-slate-100 dark:bg-slate-800">
                                    <img
                                        src={laptop.image}
                                        alt={laptop.name}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    {laptop.sale && (
                                        <span className="absolute top-2 left-2 bg-red-500 text-white text-[10px] font-bold px-1.5 sm:px-2 py-0.5 sm:py-1 rounded uppercase">
                      Sale
                    </span>
                                    )}
                                    <button className="absolute top-2 right-2 p-1.5 sm:p-2 bg-white/80 dark:bg-slate-900/80 backdrop-blur rounded-full text-slate-400 hover:text-red-500 transition-colors">
                                        <span className="material-symbols-outlined text-base sm:text-xl">favorite</span>
                                    </button>
                                </div>
                                <div className="p-3 sm:p-4 lg:p-5 space-y-1.5 sm:space-y-2">
                                    <div className="flex items-center gap-0.5 sm:gap-1 text-amber-400">
                                        {[...Array(5)].map((_, i) => (
                                            <span
                                                key={i}
                                                className={`material-symbols-outlined text-xs sm:text-sm ${
                                                    i < laptop.rating ? "fill-1" : ""
                                                }`}
                                            >
                        star
                      </span>
                                        ))}
                                        <span className="text-slate-400 dark:text-[#92a4c9] text-[10px] sm:text-xs ml-0.5 sm:ml-1">
                      ({laptop.reviews})
                    </span>
                                    </div>
                                    <h4 className="font-bold text-xs sm:text-sm lg:text-base leading-tight text-slate-900 dark:text-white group-hover:text-primary transition-colors line-clamp-1">
                                        {laptop.name}
                                    </h4>
                                    <p className="text-slate-500 dark:text-[#92a4c9] text-[10px] sm:text-xs line-clamp-2 hidden sm:block">
                                        {laptop.description}
                                    </p>
                                    <div className="flex items-center justify-between pt-2 sm:pt-3 lg:pt-4">
                                        <div className="flex flex-col">
                      <span className="text-sm sm:text-base lg:text-xl font-black text-primary">
                        ₨ {laptop.price.toLocaleString()}
                      </span>
                                            {laptop.originalPrice && (
                                                <span className="text-[10px] sm:text-xs text-slate-400 dark:text-[#92a4c9] line-through">
                          ₨ {laptop.originalPrice.toLocaleString()}
                        </span>
                                            )}
                                        </div>
                                        <button className="p-1.5 sm:p-2 bg-primary text-white rounded-lg hover:bg-blue-600 transition-colors">
                                            <span className="material-symbols-outlined text-base sm:text-lg">add_shopping_cart</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* ========== NEWSLETTER ========== */}
                <section className="bg-primary rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-12 text-white flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-10 lg:gap-12 relative overflow-hidden mb-8 sm:mb-10 lg:mb-12">
                    <div className="absolute -right-10 sm:-right-20 -bottom-10 sm:-bottom-20 size-40 sm:size-80 bg-white/10 rounded-full blur-3xl"></div>
                    <div className="max-w-full lg:max-w-xl space-y-3 sm:space-y-4 z-10 text-center lg:text-left">
                        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black leading-tight">
                            Stay updated with the latest tech drops
                        </h3>
                        <p className="text-white/80 text-sm sm:text-base lg:text-lg">
                            Subscribe to our newsletter and get exclusive access to limited edition releases.
                        </p>
                    </div>
                    <div className="w-full lg:w-auto shrink-0 z-10">
                        <form className="flex flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full sm:w-64 lg:w-80 rounded-lg border-none py-3 sm:py-4 px-4 sm:px-6 text-slate-900 focus:ring-2 focus:ring-slate-400 shadow-xl text-sm sm:text-base"
                                placeholder="Enter your email address"
                            />
                            <button
                                type="submit"
                                className="bg-slate-900 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-lg hover:bg-black transition-all shadow-xl whitespace-nowrap text-sm sm:text-base"
                            >
                                Subscribe Now
                            </button>
                        </form>
                    </div>
                </section>

                {/* ========== LATEST TECH DEALS ========== */}
                <section className="mb-8 sm:mb-10 lg:mb-12">
                    <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-4 sm:mb-6 px-1 sm:px-2">
                        Latest Tech Deals
                    </h2>
                    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
                        {products.map((product) => (
                            <div
                                key={product.id}
                                className="bg-white dark:bg-[#192233] rounded-lg sm:rounded-xl p-3 sm:p-4 border border-slate-200 dark:border-[#232f48] hover:shadow-xl hover:shadow-primary/5 transition-all"
                            >
                                <div className="relative rounded-lg overflow-hidden mb-3 sm:mb-4 aspect-square bg-slate-800">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-full object-cover"
                                    />
                                    {product.sale && (
                                        <div className="absolute top-1.5 sm:top-2 right-1.5 sm:right-2 px-1.5 sm:px-2 py-0.5 sm:py-1 bg-red-600 text-[10px] font-bold text-white rounded uppercase">
                                            Save {product.discount}
                                        </div>
                                    )}
                                    {product.badge && (
                                        <div className="absolute top-1.5 sm:top-2 left-1.5 sm:left-2 px-1.5 sm:px-2 py-0.5 sm:py-1 bg-primary text-[10px] font-bold text-white rounded uppercase">
                                            {product.badge}
                                        </div>
                                    )}
                                </div>
                                <p className="text-slate-500 dark:text-[#92a4c9] text-[10px] sm:text-xs font-semibold mb-1 uppercase tracking-wider">
                                    {product.brand}
                                </p>
                                <h3 className="text-slate-900 dark:text-white font-medium text-xs sm:text-sm mb-2 line-clamp-1">
                                    {product.name}
                                </h3>
                                <div className="flex items-center gap-0.5 sm:gap-1 text-yellow-500 mb-2 sm:mb-3">
                                    {[...Array(5)].map((_, i) => (
                                        <span
                                            key={i}
                                            className={`material-symbols-outlined text-xs sm:text-sm ${
                                                i < Math.floor(product.rating) ? "fill-1" : ""
                                            }`}
                                        >
                      {i < Math.floor(product.rating)
                          ? "star"
                          : product.rating % 1 !== 0 && i === Math.floor(product.rating)
                              ? "star_half"
                              : "star_outline"}
                    </span>
                                    ))}
                                    <span className="text-slate-400 dark:text-[#92a4c9] text-[10px] ml-0.5 sm:ml-1">
                    ({product.reviews})
                  </span>
                                </div>
                                <div className="flex items-center justify-between">
                  <span className="text-slate-900 dark:text-white font-bold text-sm sm:text-base lg:text-lg">
                    Rs. {product.price.toLocaleString()}
                  </span>
                                    <button className="bg-slate-100 dark:bg-[#232f48] hover:bg-primary dark:hover:bg-primary transition-colors p-1.5 sm:p-2 rounded-lg text-slate-900 dark:text-white hover:text-white">
                                        <span className="material-symbols-outlined text-base sm:text-xl">shopping_bag</span>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* ========== AUDIO EXCELLENCE ========== */}
                <section className="mb-8 sm:mb-10 lg:mb-12">
                    <div className="flex items-center justify-between mb-4 sm:mb-6">
                        <div>
                            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                                Audio Excellence
                            </h3>
                            <p className="text-slate-500 dark:text-[#92a4c9] text-xs sm:text-sm mt-1">
                                Immerse yourself in pure sound
                            </p>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                        {/* Studio-Grade Wireless */}
                        <div className="group relative rounded-xl overflow-hidden bg-slate-200 aspect-video">
                            <img
                                src="headphone.png"
                                alt="Headphones"
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-4 sm:p-6 lg:p-8 space-y-1 sm:space-y-2">
                <span className="text-primary font-bold text-[10px] sm:text-xs lg:text-sm tracking-widest uppercase">
                  Premium Audio
                </span>
                                <h4 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">
                                    Studio-Grade Wireless
                                </h4>
                                <p className="text-slate-300 text-xs sm:text-sm lg:text-base max-w-sm line-clamp-2">
                                    Experience noise cancellation like never before.
                                </p>
                                <button className="mt-2 sm:mt-3 lg:mt-4 w-fit bg-white text-slate-900 font-bold py-2 px-4 sm:px-6 rounded-lg hover:bg-primary hover:text-white transition-all text-xs sm:text-sm">
                                    Shop Collection
                                </button>
                            </div>
                        </div>

                        {/* Next-Gen Earbuds */}
                        <div className="group relative rounded-xl overflow-hidden bg-slate-200 aspect-video">
                            <img
                                src="earbuds.png"
                                alt="Earbuds"
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-4 sm:p-6 lg:p-8 space-y-1 sm:space-y-2">
                <span className="text-primary font-bold text-[10px] sm:text-xs lg:text-sm tracking-widest uppercase">
                  On-the-go
                </span>
                                <h4 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">
                                    Next-Gen Earbuds
                                </h4>
                                <p className="text-slate-300 text-xs sm:text-sm lg:text-base max-w-sm line-clamp-2">
                                    Compact design, massive performance.
                                </p>
                                <button className="mt-2 sm:mt-3 lg:mt-4 w-fit bg-white text-slate-900 font-bold py-2 px-4 sm:px-6 rounded-lg hover:bg-primary hover:text-white transition-all text-xs sm:text-sm">
                                    Shop Collection
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        </main>
    );
}