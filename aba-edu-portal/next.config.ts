import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable React strict mode for better development experience
  reactStrictMode: true,

  // Image optimization configuration
  images: {
    // Disable image optimization for static export compatibility
    unoptimized:
      process.env.NODE_ENV === "production" && process.env.VERCEL !== "1",
    // Define allowed image formats
    formats: ["image/avif", "image/webp"],
    // Remote patterns for external images (if needed in the future)
    remotePatterns: [],
  },

  // Disable x-powered-by header for security
  poweredByHeader: false,

  // Enable trailing slashes for consistent URLs
  trailingSlash: false,

  // Compiler options for production optimization
  compiler: {
    // Remove console.log in production
    removeConsole: process.env.NODE_ENV === "production",
  },

  // TypeScript configuration
  typescript: {
    // Don't fail build on type errors during development
    ignoreBuildErrors: false,
  },

  // Experimental features for performance
  experimental: {
    // Enable optimized package imports
    optimizePackageImports: ["lucide-react", "clsx", "tailwind-merge"],
  },
};

export default nextConfig;
