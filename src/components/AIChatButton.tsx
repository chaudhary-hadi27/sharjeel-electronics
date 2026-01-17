"use client";

import { useState } from "react";
import AIChat from "./AIChat";

export default function AIChatButton() {
    const [isHovered, setIsHovered] = useState(false);
    const [isChatOpen, setIsChatOpen] = useState(false);

    return (
        <>
            <button
                onClick={() => setIsChatOpen(!isChatOpen)}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="fixed bottom-6 right-6 z-[100] bg-primary text-white p-4 rounded-full shadow-2xl shadow-primary/40 hover:scale-110 transition-all group flex items-center gap-3"
            >
                <span className="material-symbols-outlined animate-pulse">
                    {isChatOpen ? "close" : "auto_awesome"}
                </span>
                <span
                    className={`max-w-0 overflow-hidden ${
                        isHovered && !isChatOpen ? "max-w-xs" : ""
                    } transition-all duration-300 font-bold whitespace-nowrap`}
                >
                    Chat with AI
                </span>
            </button>

            <AIChat isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
        </>
    );
}