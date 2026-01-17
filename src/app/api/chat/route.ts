import { NextRequest, NextResponse } from "next/server";

// Mock product database (Later Supabase se replace hoga)
const PRODUCTS = [
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

// Simple keyword matching for product filtering
function findRelevantProducts(query: string) {
    const lowerQuery = query.toLowerCase();

    // Extract budget from query
    const budgetMatch = lowerQuery.match(/(\d+)k|under (\d+)|(\d+) tak/);
    const budget = budgetMatch ? parseInt(budgetMatch[1] || budgetMatch[2] || budgetMatch[3]) * 1000 : null;

    let relevant = PRODUCTS;

    // Filter by budget
    if (budget) {
        relevant = relevant.filter((p) => p.price <= budget);
    }

    // Filter by category keywords
    if (lowerQuery.includes("phone") || lowerQuery.includes("mobile")) {
        relevant = relevant.filter((p) => p.category === "Smartphones");
    } else if (lowerQuery.includes("laptop") || lowerQuery.includes("computer")) {
        relevant = relevant.filter((p) => p.category === "Laptops");
    } else if (lowerQuery.includes("airpod") || lowerQuery.includes("earphone") || lowerQuery.includes("headphone")) {
        relevant = relevant.filter((p) => p.category === "Accessories");
    } else if (lowerQuery.includes("watch") || lowerQuery.includes("smartwatch")) {
        relevant = relevant.filter((p) => p.category === "Wearables");
    }

    return relevant.slice(0, 3); // Top 3 products
}

// ========== AI API CALLS ==========

// 1. Groq API (Primary - Fastest)
async function callGroq(message: string, products: typeof PRODUCTS) {
    try {
        // Check if API key exists
        if (!process.env.GROQ_API_KEY) {
            throw new Error("GROQ_API_KEY not found in environment variables");
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
                        content: `You are a helpful shopping assistant for a Pakistani mobile and electronics store.

CRITICAL RULES:
- ALWAYS respond in Roman Urdu (Urdu written in English alphabet)
- Be natural, friendly, and conversational
- Don't oversell - be honest and helpful
- Keep responses concise (2-3 sentences max)

Available Products:
${JSON.stringify(products, null, 2)}

Example responses:
- "Ye phone gaming k liye bohat acha hai, Snapdragon processor hai"
- "Aapke budget mein ye best option hai"
- "Is ki battery timing bohot achi hai, 2 din asani se chal jati hai"

Customer's location: Lahore, Pakistan
Currency: Pakistani Rupees (Rs.)`,
                    },
                    {
                        role: "user",
                        content: message,
                    },
                ],
                temperature: 0.7,
                max_tokens: 200,
            }),
        });

        if (!response.ok) {
            const errorData = await response.json().catch(() => ({}));
            console.error("Groq Error Details:", errorData);
            throw new Error(`Groq API failed: ${response.status} - ${JSON.stringify(errorData)}`);
        }

        const data = await response.json();
        return data.choices[0].message.content;
    } catch (error) {
        console.error("Groq API Error:", error);
        throw error;
    }
}

// 2. Gemini API (Backup)
async function callGemini(message: string, products: typeof PRODUCTS) {
    try {
        // Check if API key exists
        if (!process.env.GEMINI_API_KEY) {
            throw new Error("GEMINI_API_KEY not found in environment variables");
        }

        const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`;

        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                contents: [
                    {
                        parts: [
                            {
                                text: `You are a helpful shopping assistant for a Pakistani electronics store.

CRITICAL RULES:
- ALWAYS respond in Roman Urdu (Urdu written in English alphabet)
- Be natural, friendly, and conversational
- Don't oversell - be honest
- Keep responses short (2-3 sentences)

Available Products:
${JSON.stringify(products, null, 2)}

Customer message: ${message}

Respond in Roman Urdu:`,
                            },
                        ],
                    },
                ],
                generationConfig: {
                    temperature: 0.7,
                    maxOutputTokens: 200,
                },
            }),
        });

        if (!response.ok) {
            const errorData = await response.json().catch(() => ({}));
            console.error("Gemini Error Details:", errorData);
            throw new Error(`Gemini API failed: ${response.status} - ${JSON.stringify(errorData)}`);
        }

        const data = await response.json();
        return data.candidates[0].content.parts[0].text;
    } catch (error) {
        console.error("Gemini API Error:", error);
        throw error;
    }
}

// 3. Cohere API (Final Fallback)
async function callCohere(message: string, products: typeof PRODUCTS) {
    try {
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
            throw new Error(`Cohere API failed: ${response.status}`);
        }

        const data = await response.json();
        return data.text;
    } catch (error) {
        console.error("Cohere API Error:", error);
        throw error;
    }
}

// ========== MULTI-AI FALLBACK SYSTEM ==========
async function getAIResponse(message: string, products: typeof PRODUCTS): Promise<string> {
    // Try 1: Groq (Fastest)
    try {
        console.log("🚀 Trying Groq API...");
        const response = await callGroq(message, products);
        console.log("✅ Groq succeeded!");
        return response;
    } catch (error) {
        console.log("❌ Groq failed, trying Gemini...");
    }

    // Try 2: Gemini (Backup)
    try {
        console.log("🚀 Trying Gemini API...");
        const response = await callGemini(message, products);
        console.log("✅ Gemini succeeded!");
        return response;
    } catch (error) {
        console.log("❌ Gemini failed, trying Cohere...");
    }

    // Try 3: Cohere (Final Fallback)
    try {
        console.log("🚀 Trying Cohere API...");
        const response = await callCohere(message, products);
        console.log("✅ Cohere succeeded!");
        return response;
    } catch (error) {
        console.log("❌ All AI APIs failed!");
    }

    // Fallback: Manual response if all APIs fail
    return "Maaf kijiye, abhi system mein thori issue hai. Please thori der baad try karein.";
}

// ========== MAIN API ROUTE ==========
export async function POST(req: NextRequest) {
    try {
        const { message } = await req.json();

        if (!message || message.trim().length === 0) {
            return NextResponse.json(
                { error: "Message is required" },
                { status: 400 }
            );
        }

        console.log("📨 User message:", message);

        // Find relevant products based on query
        const relevantProducts = findRelevantProducts(message);
        console.log(`🔍 Found ${relevantProducts.length} relevant products`);

        // Get AI response with multi-fallback
        const aiReply = await getAIResponse(message, relevantProducts);

        // Return response with products
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