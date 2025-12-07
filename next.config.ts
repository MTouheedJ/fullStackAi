import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Fast Refresh is enabled by default in Next.js 9.4+
  // reactStrictMode enables additional checks and helps with Fast Refresh
  reactStrictMode: true,
  
  // Optimize package imports for better dev experience
  experimental: {
    optimizePackageImports: ['framer-motion'],
  },
};

export default nextConfig;
