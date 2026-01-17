"use client";

import { useState } from "react";

export default function AIChatButton() {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <button
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="fixed bottom-6 right-6 z-[100] bg-primary text-white p-4 rounded-full shadow-2xl shadow-primary/40 hover:scale-110 transition-all group flex items-center gap-3"
        >
            <span className="material-symbols-outlined animate-pulse">auto_awesome</span>
            <span
                className={`max-w-0 overflow-hidden ${
                    isHovered ? "max-w-xs" : ""
                } transition-all duration-300 font-bold whitespace-nowrap`}
            >
        Chat with AI
      </span>
        </button>
    );
}