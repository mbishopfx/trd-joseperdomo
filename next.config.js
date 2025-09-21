/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/webp', 'image/avif'],
    domains: ['localhost'],
    unoptimized: false,
  },
  experimental: {
    optimizeCss: false,
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
  trailingSlash: false,
}

module.exports = nextConfig
