/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Optimize for low bandwidth
  images: {
    formats: ['image/webp'],
    minimumCacheTTL: 86400,
  },
  // Enable compression
  compress: true,
}

module.exports = nextConfig

