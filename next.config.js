/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    formats: ['image/avif', 'image/webp'],
    // Optimize images for mobile
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // Reduce image quality slightly for faster loading
    minimumCacheTTL: 60,
  },
  // Enable compression
  compress: true,
  // Enable React strict mode for better development
  reactStrictMode: true,
  // Optimize chunk splitting
  experimental: {
    optimizePackageImports: ['framer-motion', 'lucide-react'],
  },
  // Optimize for mobile
  poweredByHeader: false,
  // Reduce bundle size
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // Performance optimizations
  productionBrowserSourceMaps: false,
}

module.exports = nextConfig

