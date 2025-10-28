import type { NextConfig } from "next";

// For GitHub Pages deployment at teamx240923.github.io/tgifc
// The basePath should match your repository name

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;