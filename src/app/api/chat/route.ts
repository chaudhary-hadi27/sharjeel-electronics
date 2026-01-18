import { NextRequest, NextResponse } from "next/server";

// ========== CONSTANTS ==========
const MAX_MESSAGE_LENGTH = 500;
const RATE_LIMIT_WINDOW = 60000; // 1 minute
const RATE_LIMIT_MAX_REQUESTS = 10;

// Simple in-memory rate limiting (use Redis in production)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

// ========== TYPES ==========
interface Product {
    id: number;
    name: string;
    price: number;
    category: string;
    image: string;
    specs: string;
}

// ========== MOCK DATABASE (Later Supabase) ==========
const PRODUCTS: Product[] = [
    {
        id: 1,
        name: "iPhone 15 Pro Max",
        price: 485000,
        category: "Smartphones",
        image: "https://images.unsplash.com/photo-1696446702061-cbd0e76cd43f?w=300",
        specs: "A17 Pro, 6.7\" display, 48MP camera",
    },
    {
        id: 2,
        name: "Samsung Galaxy S24 Ultra",
        price: 385000,
        category: "Smartphones",
        image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=300",
        specs: "Snapdragon 8 Gen 3, S Pen, 200MP camera",
    },
    {
        id: 3,
        name: "AirPods Pro (2nd Gen)",
        price: 89000,
        category: "Accessories",
        image: "https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7?w=300",
        specs: "Active noise cancellation, spatial audio",
    },
    {
        id: 4,
        name: "MacBook Pro M3",
        price: 450000,
        category: "Laptops",
        image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=300",
        specs: "M3 chip, 14\" Liquid Retina, 18hrs battery",
    },
    {
        id: 5,
        name: "Apple Watch Ultra 2",
        price: 220000,
        category: "Wearables",
        image: "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=300",
        specs: "Titanium case, 36hrs battery, GPS",
    },
];

// ========== VALIDATION & SECURITY ==========
function sanitizeMessage(message: string): string {
    return message
        .trim()
        .replace(/<script[^>]*>.*?<\/script>/gi, '')
        .replace(/<[^>]+>/g, '')
        .slice(0, MAX_MESSAGE_LENGTH);
}

function checkRateLimit(ip: string): boolean {
    const now = Date.now();
    const userLimit = rateLimitMap.get(ip);

    if (!userLimit || now > userLimit.resetTime) {
        rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
        return true;
    }

    if (userLimit.count >= RATE_LIMIT_MAX_REQUESTS) {
        return false;
    }

    userLimit.count++;
    return true;
}

// ========== ENHANCED PRODUCT FILTERING ==========
class ProductService {
    static findRelevant(query: string): Product[] {
        const lowerQuery = query.toLowerCase();

        // Enhanced budget extraction
        const budget = this.extractBudget(lowerQuery);

        // Enhanced category matching with synonyms
        const category = this.detectCategory(lowerQuery);

        let relevant = PRODUCTS;

        if (budget) {
            relevant = relevant.filter(p => p.price <= budget);
        }

        if (category) {
            relevant = relevant.filter(p => p.category === category);
        }

        return relevant.slice(0, 3);
    }

    private static extractBudget(query: string): number | null {
        // Match: "100k", "under 100000", "100 tak", "1 lac", "1 lakh"
        const patterns = [
            { regex: /(\d+)\s*k\b/i, multiplier: 1000 },
            { regex: /under\s+(\d+)/i, multiplier: 1 },
            { regex: /(\d+)\s+tak/i, multiplier: 1 },
            { regex: /(\d+)\s*(lac|lakh)/i, multiplier: 100000 },
        ];

        for (const { regex, multiplier } of patterns) {
            const match = query.match(regex);
            if (match) {
                return parseInt(match[1]) * multiplier;
            }
        }

        return null;
    }

    private static detectCategory(query: string): string | null {
        const categoryMap: Record<string, string[]> = {
            Smartphones: ['phone', 'mobile', 'smartphone', 'iphone', 'samsung', 'fone', 'cell'],
            Laptops: ['laptop', 'computer', 'macbook', 'notebook', 'pc'],
            Accessories: ['airpod', 'earphone', 'headphone', 'buds', 'earbuds'],
            Wearables: ['watch', 'smartwatch', 'wearable', 'fitness'],
        };

        for (const [category, keywords] of Object.entries(categoryMap)) {
            if (keywords.some(kw => query.includes(kw))) {
                return category;
            }
        }

        return null;
    }
}

// ========== AI SERVICE WITH TIMEOUT & VALIDATION ==========
class AIService {
    private static async callWithTimeout(
        fn: () => Promise<string>,
        timeout = 10000
    ): Promise<string> {
        return Promise.race([
            fn(),
            new Promise<string>((_, reject) =>
                setTimeout(() => reject(new Error('Timeout')), timeout)
            ),
        ]);
    }

    private static validateRomanUrdu(text: string): boolean {
        // Check if response is not in Urdu script
        const urduRegex = /[\u0600-\u06FF]/;
        return !urduRegex.test(text) && text.length > 0;
    }

    static async getResponse(message: string, products: Product[]): Promise<string> {
        const providers = [
            { name: 'Groq', fn: () => this.callGroq(message, products) },
            { name: 'Gemini', fn: () => this.callGemini(message, products) },
            { name: 'Cohere', fn: () => this.callCohere(message, products) },
        ];

        for (const provider of providers) {
            try {
                console.log(`🚀 Trying ${provider.name}...`);
                const response = await this.callWithTimeout(provider.fn);

                if (!this.validateRomanUrdu(response)) {
                    console.warn(`${provider.name} returned invalid format`);
                    continue;
                }

                console.log(`✅ ${provider.name} succeeded!`);
                return response;
            } catch (error) {
                console.error(`❌ ${provider.name} failed:`, error);
            }
        }

        return "Maaf kijiye, abhi system mein thori issue hai. Thori der baad try karein.";
    }

    private static async callGroq(message: string, products: Product[]): Promise<string> {
        if (!process.env.GROQ_API_KEY) {
            throw new Error("GROQ_API_KEY missing");
        }

        const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${process.env.GROQ_API_KEY}`,
            },
            body: JSON.stringify({
                model: "llama-3.1-70b-versatile",
                messages: [
                    {
                        role: "system",
                        content: `You are a helpful shopping assistant for a Pakistani electronics store.

CRITICAL RULES:
- ALWAYS respond in Roman Urdu (Urdu written in English alphabet)
- NEVER use Urdu script (اردو)
- Be natural, friendly, and conversational
- Keep responses concise (2-3 sentences max)
- Don't oversell - be honest

Available Products:
${JSON.stringify(products, null, 2)}

Example responses:
- "Ye phone gaming k liye bohat acha hai, Snapdragon processor hai"
- "Aapke budget mein ye best option hai"
- "Is ki battery timing bohot achi hai, 2 din asani se chal jati hai"`,
                    },
                    { role: "user", content: message },
                ],
                temperature: 0.7,
                max_tokens: 200,
            }),
        });

        if (!response.ok) {
            throw new Error(`Groq failed: ${response.status}`);
        }

        const data = await response.json();
        return data.choices[0].message.content;
    }

    private static async callGemini(message: string, products: Product[]): Promise<string> {
        if (!process.env.GEMINI_API_KEY) {
            throw new Error("GEMINI_API_KEY missing");
        }

        const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`;

        const response = await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                contents: [{
                    parts: [{
                        text: `You are a helpful shopping assistant for a Pakistani electronics store.

CRITICAL RULES:
- ALWAYS respond in Roman Urdu (Urdu written in English alphabet)
- NEVER use Urdu script
- Be natural and helpful
- Keep responses short (2-3 sentences)

Available Products:
${JSON.stringify(products, null, 2)}

Customer message: ${message}

Respond in Roman Urdu:`,
                    }],
                }],
                generationConfig: {
                    temperature: 0.7,
                    maxOutputTokens: 200,
                },
            }),
        });

        if (!response.ok) {
            throw new Error(`Gemini failed: ${response.status}`);
        }

        const data = await response.json();
        return data.candidates[0].content.parts[0].text;
    }

    private static async callCohere(message: string, products: Product[]): Promise<string> {
        if (!process.env.COHERE_API_KEY) {
            throw new Error("COHERE_API_KEY missing");
        }

        const response = await fetch("https://api.cohere.ai/v1/chat", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${process.env.COHERE_API_KEY}`,
            },
            body: JSON.stringify({
                model: "command-r",
                message: message,
                preamble: `You are a helpful shopping assistant for Pakistani electronics store.
ALWAYS respond in Roman Urdu (Urdu in English).
Available Products: ${JSON.stringify(products)}
Be helpful and natural.`,
                temperature: 0.7,
                max_tokens: 200,
            }),
        });

        if (!response.ok) {
            throw new Error(`Cohere failed: ${response.status}`);
        }

        const data = await response.json();
        return data.text;
    }
}

// ========== MAIN API ROUTE ==========
export async function POST(req: NextRequest) {
    try {
        // Rate limiting
        const ip = req.headers.get('x-forwarded-for') || req.headers.get('x-real-ip') || 'unknown';
        if (!checkRateLimit(ip)) {
            return NextResponse.json(
                {
                    error: "Too many requests",
                    reply: "Thora wait karein. Zyada requests bhej rahe hain."
                },
                { status: 429 }
            );
        }

        const { message } = await req.json();

        // Validation
        if (!message || typeof message !== 'string') {
            return NextResponse.json(
                { error: "Message is required" },
                { status: 400 }
            );
        }

        if (message.length > MAX_MESSAGE_LENGTH) {
            return NextResponse.json(
                { error: "Message too long" },
                { status: 400 }
            );
        }

        // Sanitize input
        const cleanMessage = sanitizeMessage(message);
        console.log("📨 User message:", cleanMessage);

        // Find products
        const relevantProducts = ProductService.findRelevant(cleanMessage);
        console.log(`🔍 Found ${relevantProducts.length} relevant products`);

        // Get AI response
        const aiReply = await AIService.getResponse(cleanMessage, relevantProducts);

        return NextResponse.json({
            reply: aiReply,
            products: relevantProducts,
        });

    } catch (error) {
        console.error("❌ Chat API Error:", error);
        return NextResponse.json(
            {
                error: "Internal server error",
                reply: "Maaf kijiye, kuch technical issue hai. Please try again."
            },
            { status: 500 }
        );
    }
}

// ========== STARTUP VALIDATION ==========
const AVAILABLE_PROVIDERS = {
    groq: !!process.env.GROQ_API_KEY,
    gemini: !!process.env.GEMINI_API_KEY,
    cohere: !!process.env.COHERE_API_KEY,
};

console.log('🔑 Available AI providers:', AVAILABLE_PROVIDERS);

if (!Object.values(AVAILABLE_PROVIDERS).some(Boolean)) {
    console.error('⚠️ WARNING: No AI API keys found! Chat will not work.');
}