// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // ⚠️ Warning: This will completely ignore ESLint errors during builds
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
