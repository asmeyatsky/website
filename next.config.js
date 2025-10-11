/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/webp", "image/avif"],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
        pathname: '/u/**',
      },
    ],
  },
  output: 'standalone',
  staticPageGenerationTimeout: 300, // Increased timeout for news page build
};

module.exports = nextConfig;