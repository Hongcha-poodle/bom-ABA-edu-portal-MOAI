import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    50: "#e0e7ff", // indigo-50
                    500: "#6366f1", // indigo-500
                    DEFAULT: "#6366f1",
                },
                secondary: {
                    500: "#ec4899", // pink-500
                    DEFAULT: "#ec4899",
                },
                info: "#3b82f6", // blue-500
                success: "#22c55e", // green-500
                neutral: {
                    50: "#f8fafc", // slate-50
                    800: "#1e293b", // slate-800
                }
            },
            fontFamily: {
                sans: ['var(--font-geist-sans)', 'ui-sans-serif', 'system-ui'],
            },
        },
    },
    plugins: [],
};

export default config;
