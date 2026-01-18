// ============================================
// FILE: src/components/ThemeProvider.tsx (SIMPLIFIED)
// ============================================
"use client";

import { useEffect, useState } from "react";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        // Get saved theme from localStorage, default to "light"
        const savedTheme = localStorage.getItem("theme") || "light";

        // Apply theme to document
        if (savedTheme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }

        setMounted(true);
    }, []);

    // Prevent hydration mismatch - render with light theme initially
    if (!mounted) {
        return <div className="bg-white text-slate-900">{children}</div>;
    }

    return <>{children}</>;
}