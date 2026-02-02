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
          50: "#FFF8F5",
          100: "#FFEEE6",
          200: "#FFD9C7",
          300: "#FFB899",
          400: "#FF9B6B",
          500: "#F2845C",
          600: "#E06A3D",
          700: "#C65432",
          DEFAULT: "#F2845C",
        },
        secondary: {
          50: "#F4F9F6",
          100: "#E8F3EC",
          200: "#D1E7D9",
          300: "#A8D5B7",
          400: "#7EC494",
          500: "#5AAF76",
          600: "#449660",
          700: "#337A4C",
          DEFAULT: "#5AAF76",
        },
        accent: {
          50: "#F9F7FC",
          100: "#F2ECFA",
          200: "#E5D9F5",
          300: "#D1BEE8",
          400: "#B99AD8",
          500: "#9B7BC5",
          DEFAULT: "#9B7BC5",
        },
        neutral: {
          50: "#FFFDF9",
          100: "#FBF8F3",
          200: "#F5F0E6",
          300: "#E8E0D0",
          400: "#D5CAB8",
          500: "#B5A893",
          600: "#8A7D6B",
          700: "#5E5347",
          800: "#3D352C",
          900: "#2A231C",
        },
        info: "#6BA8D6",
        success: "#6BB89C",
        warning: "#E5B567",
        error: "#E08080",
      },
      fontFamily: {
        display: ["Outfit", "ui-sans-serif", "system-ui"],
        body: ["DM Sans", "ui-sans-serif", "system-ui"],
        sans: ["DM Sans", "ui-sans-serif", "system-ui"],
      },
      borderRadius: {
        "4xl": "2rem",
      },
      boxShadow: {
        soft: "0 2px 15px -3px rgba(61, 53, 44, 0.07), 0 10px 20px -2px rgba(61, 53, 44, 0.04)",
        "soft-lg":
          "0 4px 25px -5px rgba(61, 53, 44, 0.1), 0 10px 30px -5px rgba(61, 53, 44, 0.05)",
      },
    },
  },
  plugins: [],
};

export default config;
