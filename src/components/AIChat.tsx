"use client";

import { useState, useRef, useEffect } from "react";

interface Message {
    role: "user" | "assistant";
    content: string;
    products?: any[];
}

export default function AIChat({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
    const [messages, setMessages] = useState<Message[]>([
        {
            role: "assistant",
            content: "Assalam o Alaikum! Main aapki shopping mein madad karne k liye hazir hoon. Aap kya dhund rahe hain?",
        },
    ]);
    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSend = async () => {
        if (!input.trim() || loading) return;

        const userMessage = input.trim();
        setInput("");
        setMessages((prev) => [...prev, { role: "user", content: userMessage }]);
        setLoading(true);

        try {
            // TODO: API call to AI endpoint
            const response = await fetch("/api/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ message: userMessage }),
            });

            const data = await response.json();

            setMessages((prev) => [
                ...prev,
                {
                    role: "assistant",
                    content: data.reply || "Maaf kijiye, kuch error aa gaya hai.",
                    products: data.products || [],
                },
            ]);
        } catch (error) {
            setMessages((prev) => [
                ...prev,
                {
                    role: "assistant",
                    content: "Network error! Please try again.",
                },
            ]);
        } finally {
            setLoading(false);
        }
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed bottom-24 right-6 z-[200] w-full max-w-md">
            <div className="bg-white dark:bg-[#192233] rounded-2xl shadow-2xl border border-slate-200 dark:border-[#232f48] overflow-hidden flex flex-col h-[600px]">
                {/* Header */}
                <div className="bg-primary p-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="size-10 rounded-full bg-white/20 flex items-center justify-center">
                            <span className="material-symbols-outlined text-white">auto_awesome</span>
                        </div>
                        <div>
                            <h3 className="text-white font-bold text-sm">AI Shopping Assistant</h3>
                            <p className="text-white/80 text-xs">Online • Ready to help</p>
                        </div>
                    </div>
                    <button
                        onClick={onClose}
                        className="text-white/80 hover:text-white transition-colors"
                    >
                        <span className="material-symbols-outlined">close</span>
                    </button>
                </div>

                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50 dark:bg-[#101622]">
                    {messages.map((msg, idx) => (
                        <div
                            key={idx}
                            className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                        >
                            <div
                                className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                                    msg.role === "user"
                                        ? "bg-primary text-white"
                                        : "bg-white dark:bg-[#192233] text-slate-900 dark:text-white border border-slate-200 dark:border-[#232f48]"
                                }`}
                            >
                                <p className="text-sm leading-relaxed">{msg.content}</p>

                                {/* Product Cards (if AI suggests products) */}
                                {msg.products && msg.products.length > 0 && (
                                    <div className="mt-3 space-y-2">
                                        {msg.products.map((product) => (
                                            <div
                                                key={product.id}
                                                className="bg-slate-50 dark:bg-[#232f48] rounded-lg p-3 flex gap-3"
                                            >
                                                <img
                                                    src={product.image}
                                                    alt={product.name}
                                                    className="w-16 h-16 rounded object-cover"
                                                />
                                                <div className="flex-1">
                                                    <h4 className="font-bold text-xs text-slate-900 dark:text-white">
                                                        {product.name}
                                                    </h4>
                                                    <p className="text-primary font-bold text-sm">
                                                        Rs. {product.price.toLocaleString()}
                                                    </p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}

                    {loading && (
                        <div className="flex justify-start">
                            <div className="bg-white dark:bg-[#192233] rounded-2xl px-4 py-3 border border-slate-200 dark:border-[#232f48]">
                                <div className="flex gap-2">
                                    <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
                                    <div className="w-2 h-2 bg-primary rounded-full animate-bounce delay-100"></div>
                                    <div className="w-2 h-2 bg-primary rounded-full animate-bounce delay-200"></div>
                                </div>
                            </div>
                        </div>
                    )}

                    <div ref={messagesEndRef} />
                </div>

                {/* Input */}
                <div className="p-4 bg-white dark:bg-[#192233] border-t border-slate-200 dark:border-[#232f48]">
                    <div className="flex gap-2">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyPress={handleKeyPress}
                            placeholder="Type your question..."
                            className="flex-1 bg-slate-100 dark:bg-[#232f48] border-none rounded-lg px-4 py-3 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-[#92a4c9] focus:ring-2 focus:ring-primary outline-none"
                        />
                        <button
                            onClick={handleSend}
                            disabled={loading || !input.trim()}
                            className="bg-primary text-white px-4 py-3 rounded-lg hover:bg-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            <span className="material-symbols-outlined">send</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}