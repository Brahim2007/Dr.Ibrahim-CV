/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'almojaded.com',
      'rowwad.net',
      'encrypted-tbn0.gstatic.com',
      'cdnjs.cloudflare.com',
      'cdn.jsdelivr.net',
      'ms.hsoubcdn.com'
    ],
    unoptimized: process.env.NODE_ENV === 'development',
  },
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig