/** @type {import('next').NextConfig} */
const nextConfig = {
  // Removed 'output: export' — now runs as a proper server on Vercel
  // This enables server-side RSS fetching, caching, and dynamic content
  images: { unoptimized: true }
}
module.exports = nextConfig
