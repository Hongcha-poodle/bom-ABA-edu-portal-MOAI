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
          50: "#FDF6FF",
          100: "#FAE8FF",
          200: "#F5D0FE",
          300: "#F0ABFC",
          400: "#E879F9",
          500: "#D946EF",
          600: "#C026D3",
          700: "#A21CAF",
          DEFAULT: "#E879F9",
        },
        secondary: {
          50: "#F0FDF8",
          100: "#CCFBEA",
          200: "#99F6D4",
          300: "#5EEAD4",
          400: "#2DD4BF",
          500: "#14B8A6",
          600: "#0D9488",
          700: "#0F766E",
          DEFAULT: "#5EEAD4",
        },
        accent: {
          50: "#FEFCE8",
          100: "#FEF9C3",
          200: "#FEF08A",
          300: "#FDE047",
          400: "#FACC15",
          500: "#EAB308",
          DEFAULT: "#FEF08A",
        },
        tertiary: {
          50: "#F0F9FF",
          100: "#E0F2FE",
          200: "#BAE6FD",
          300: "#7DD3FC",
          400: "#38BDF8",
          500: "#0EA5E9",
          DEFAULT: "#BAE6FD",
        },
        neutral: {
          50: "#F9FAFB",
          100: "#F3F4F6",
          200: "#E5E7EB",
          300: "#D1D5DB",
          400: "#9CA3AF",
          500: "#6B7280",
          600: "#4B5563",
          700: "#374151",
          800: "#1F2937",
          900: "#111827",
        },
        info: "#7DD3FC",
        success: "#5EEAD4",
        warning: "#FDE047",
        error: "#FB7185",
      },
      fontFamily: {
        display: ["Fredoka", "Pretendard", "ui-sans-serif", "system-ui"],
        body: ["Inter", "Pretendard", "ui-sans-serif", "system-ui"],
        sans: ["Inter", "Pretendard", "ui-sans-serif", "system-ui"],
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      boxShadow: {
        soft: "0 4px 20px -2px rgba(217, 70, 239, 0.15), 0 2px 10px -2px rgba(94, 234, 212, 0.1)",
        "soft-lg": "0 10px 40px -5px rgba(217, 70, 239, 0.2), 0 4px 20px -2px rgba(94, 234, 212, 0.15)",
        colored: "0 8px 30px -5px rgba(232, 121, 249, 0.3)",
      },
    },
  },
  plugins: [],
};

export default config;
