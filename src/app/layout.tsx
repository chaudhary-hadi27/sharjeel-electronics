import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AIChatButton from "@/components/AIChatButton";

const inter = Inter({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700", "800", "900"],
    variable: "--font-inter",
    display: "swap",
});

export const metadata: Metadata = {
    title: "Sharjeel Electronics | Premium Tech Store",
    description: "Pakistan's leading destination for high-end electronics",
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" suppressHydrationWarning className={inter.variable}>
        <head>
            <link
                href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
                rel="stylesheet"
            />
            {/* Add this script to prevent flash */}
            <script
                dangerouslySetInnerHTML={{
                    __html: `
                        (function() {
                            const theme = localStorage.getItem('theme') || 'light';
                            if (theme === 'dark') {
                                document.documentElement.classList.add('dark');
                            }
                        })();
                    `,
                }}
            />
        </head>
        <body className={`${inter.className} antialiased overflow-x-hidden bg-white dark:bg-[#101622]`}>
        <ThemeProvider>
            <div className="bg-white dark:bg-[#101622] text-slate-900 dark:text-slate-100 min-h-screen">
                <Header />
                {children}
                <Footer />
                <AIChatButton />
            </div>
        </ThemeProvider>
        </body>
        </html>
    );
}
