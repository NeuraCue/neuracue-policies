/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export for Vercel deployment
  output: 'export',

  // Disable image optimization for static export
  images: {
    unoptimized: true,
  },

  // Strict mode for better development experience
  reactStrictMode: true,

  // Trailing slash configuration
  trailingSlash: false,

  // TypeScript type checking during build
  typescript: {
    ignoreBuildErrors: false,
  },

  // ESLint during build
  eslint: {
    ignoreDuringBuilds: false,
  },
};

export default nextConfig;