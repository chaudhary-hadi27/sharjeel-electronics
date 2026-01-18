# 🚀 Next Steps - E-commerce AI Integration

## ✅ MVP Complete! Ab Ye Steps Follow Karo:

---

## 📁 **STEP 1: Files Update Karo**

### **Updated Files (Replace karo):**
1. **src/components/ThemeProvider.tsx** ✅
    - Default theme ab light hai
    - Toggle properly working

2. **src/components/AIChatButton.tsx** ✅
    - Chat open/close functionality added

### **New Files (Create karo):**

3. **src/components/AIChat.tsx** 🆕
   ```bash
   # File location: src/components/AIChat.tsx
   ```
    - Complete chat interface
    - Message history
    - Product recommendations inline

4. **src/app/products/[id]/page.tsx** 🆕
   ```bash
   # Folder structure:
   src/
   └── app/
       └── products/
           └── [id]/
               └── page.tsx
   ```
    - Product detail page
    - AI insights
    - Related products

5. **src/app/api/chat/route.ts** 🆕
   ```bash
   # Folder structure:
   src/
   └── app/
       └── api/
           └── chat/
               └── route.ts
   ```
    - AI chat API endpoint
    - Product filtering logic

6. **.env.local** 🆕
   ```bash
   # Root folder mein (project ka root)
   # .gitignore mein already included hoga
   ```

---

## 🔧 **STEP 2: Dependencies Install Karo**

```bash
npm install @supabase/supabase-js
```

*(Baqi dependencies already installed hain)*

---

## 🗄️ **STEP 3: Supabase Setup**

### A) Account Banao:
1. https://supabase.com par jao
2. Sign up karo (GitHub se)
3. New Project banao

### B) Database Schema:
Supabase dashboard mein **SQL Editor** kholo aur ye run karo:

```sql
-- Enable Vector extension for RAG
CREATE EXTENSION IF NOT EXISTS vector;

-- Products Table
CREATE TABLE products (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  description TEXT,
  price INTEGER NOT NULL,
  category TEXT,
  brand TEXT,
  specs JSONB,
  images TEXT[], -- Array of Cloudinary URLs
  in_stock BOOLEAN DEFAULT true,
  rating DECIMAL(2,1),
  reviews INTEGER DEFAULT 0,
  created_at TIMESTAMP DEFAULT NOW(),
  embedding VECTOR(1536) -- For RAG search
);

-- Sample data insert karo (testing k liye)
INSERT INTO products (name, description, price, category, brand, specs, images, rating, reviews)
VALUES 
(
  'iPhone 15 Pro Max',
  'Latest flagship with A17 Pro chip',
  485000,
  'Smartphones',
  'Apple',
  '{"processor": "A17 Pro", "display": "6.7 inch", "camera": "48MP"}'::jsonb,
  ARRAY['https://images.unsplash.com/photo-1696446702061-cbd0e76cd43f?w=800'],
  4.8,
  234
);
```

### C) API Keys Copy Karo:
**Settings → API** se ye copy karo aur `.env.local` mein paste karo:
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`

---

## 🖼️ **STEP 4: Cloudinary Setup**

1. https://cloudinary.com par signup karo
2. Dashboard se **Cloud Name** copy karo
3. **Settings → Access Keys** se API key/secret copy karo
4. `.env.local` mein paste karo

---

## 🤖 **STEP 5: AI API Keys Setup**

### **Groq (Recommended - Fastest)**
1. https://console.groq.com
2. Sign up → API Keys → Create
3. Copy key → `.env.local` mein paste

### **Google Gemini (Backup)**
1. https://makersuite.google.com/app/apikey
2. Create API Key
3. Copy → `.env.local` mein paste

---

## 🏃 **STEP 6: Test Karo**

```bash
# Development server start karo
npm run dev

# Browser mein kholo
http://localhost:3000
```

### Test Checklist:
- [ ] Theme toggle working (light ↔ dark)
- [ ] AI chat button click karne pe chat window khule
- [ ] Chat mein message bhejo (currently mock response aayega)
- [ ] Homepage properly load ho
- [ ] Product detail page: `/products/1` kholo

---

## 📝 **STEP 7: Next Phase - AI Integration**

### **Phase 1: Basic AI Chat (1-2 hours)**

**File:** `src/app/api/chat/route.ts`

Uncomment karo aur implement karo:

```typescript
// Groq API call
const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${process.env.GROQ_API_KEY}`
  },
  body: JSON.stringify({
    model: "llama-3.1-70b-versatile",
    messages: [
      {
        role: "system",
        content: `You are a helpful shopping assistant for Pakistani mobile store.
        ALWAYS respond in Roman Urdu (Urdu written in English).
        
        Available Products:
        ${JSON.stringify(relevantProducts)}
        
        Be natural and friendly. Don't oversell.
        Example: "Ye phone bohat acha hai gaming k liye"`
      },
      { 
        role: "user", 
        content: message 
      }
    ]
  })
});

const data = await response.json();
const aiReply = data.choices[0].message.content;
```

---

### **Phase 2: Supabase Integration (2-3 hours)**

**File:** `src/lib/supabase.ts` (NEW)

```typescript
import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

// Fetch products
export async function getProducts(category?: string) {
  let query = supabase.from('products').select('*');
  
  if (category) {
    query = query.eq('category', category);
  }
  
  const { data, error } = await query;
  return data;
}

// Search products
export async function searchProducts(searchQuery: string) {
  const { data } = await supabase
    .from('products')
    .select('*')
    .ilike('name', `%${searchQuery}%`);
  
  return data;
}
```

**Update:** `src/app/page.tsx`
```typescript
import { getProducts } from '@/lib/supabase';

// Replace mock data with:
const products = await getProducts();
```

---

### **Phase 3: RAG System (Advanced - 4-5 hours)**

**File:** `src/lib/embeddings.ts` (NEW)

```typescript
// Generate embeddings using Gemini
export async function generateEmbedding(text: string) {
  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/embedding-001:embedContent?key=${process.env.GEMINI_API_KEY}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        content: { parts: [{ text }] }
      })
    }
  );
  
  const data = await response.json();
  return data.embedding.values; // Returns array of numbers
}

// Vector search in Supabase
export async function vectorSearch(queryEmbedding: number[]) {
  const { data } = await supabase.rpc('match_products', {
    query_embedding: queryEmbedding,
    match_threshold: 0.7,
    match_count: 5
  });
  
  return data;
}
```

**Supabase Function (SQL):**
```sql
CREATE OR REPLACE FUNCTION match_products(
  query_embedding VECTOR(1536),
  match_threshold FLOAT,
  match_count INT
)
RETURNS TABLE (
  id UUID,
  name TEXT,
  price INTEGER,
  similarity FLOAT
)
LANGUAGE SQL
AS $$
  SELECT
    id,
    name,
    price,
    1 - (embedding <=> query_embedding) AS similarity
  FROM products
  WHERE 1 - (embedding <=> query_embedding) > match_threshold
  ORDER BY similarity DESC
  LIMIT match_count;
$$;
```

---

## 🎯 **Priority Order**

### **Week 1: MVP Polish**
- [ ] AI chat working with Groq
- [ ] Supabase mein 10-20 products add karo
- [ ] Basic search working

### **Week 2: Features**
- [ ] Product detail pages
- [ ] Cart functionality
- [ ] User authentication (Supabase Auth)

### **Week 3: AI Enhancement**
- [ ] RAG system implement karo
- [ ] Embeddings generate karo
- [ ] Smart recommendations

### **Week 4: Polish & Deploy**
- [ ] UI refinements
- [ ] Performance optimization
- [ ] Deploy on Vercel

---

## 🐛 **Common Issues & Solutions**

### Issue 1: Theme not changing
```typescript
// Check localStorage in browser console:
localStorage.getItem('theme')

// Clear and refresh:
localStorage.clear()
```

### Issue 2: API not working
```bash
# Check .env.local file exists
# Restart dev server after changing .env
npm run dev
```

### Issue 3: Supabase connection error
```typescript
// Test connection:
const { data, error } = await supabase.from('products').select('count');
console.log(data, error);
```

---

## 📚 **Useful Resources**

- Supabase Docs: https://supabase.com/docs
- Groq API: https://console.groq.com/docs
- Gemini API: https://ai.google.dev/docs
- Vector Search: https://supabase.com/docs/guides/ai/vector-columns

---

## 💬 **Support**

Agar koi problem aaye to:
1. Error message carefully padho
2. Console check karo (F12)
3. .env.local keys verify karo
4. Mujhse pucho! 😊

---

## ✅ **Completion Checklist**

Current MVP Status:
- [x] Theme system (light/dark)
- [x] Basic UI components
- [x] Chat interface
- [x] Product detail page
- [x] Mock AI responses
- [ ] **Real AI integration** ← Next step
- [ ] **Supabase setup** ← Next step
- [ ] **RAG system** ← Advanced

---

**Great work! MVP ready hai. Ab AI APIs integrate karo! 🚀**