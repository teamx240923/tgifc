import type { NextConfig } from "next";

// For GitHub Pages deployment at teamx240923.github.io/tgifc
// The basePath should match your repository name
const isProduction = process.env.NODE_ENV === 'production';
const basePath = isProduction ? '/tgifc' : '';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: basePath,
  assetPrefix: basePath,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;