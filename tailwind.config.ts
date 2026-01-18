import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: "class", // ✅ This is CRITICAL
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#135bec",
                "background-light": "#f6f6f8",
                "background-dark": "#101622",
            },
        },
    },
    plugins: [],
};

export default config;