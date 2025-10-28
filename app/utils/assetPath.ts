// Utility to handle asset paths for GitHub Pages deployment
// When deployed to GitHub Pages at /tgifc, images need to be prefixed with /tgifc
const basePath = process.env.NODE_ENV === 'production' ? '/tgifc' : '';

export function assetPath(path: string): string {
  // Ensure path starts with /
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return `${basePath}${normalizedPath}`;
}
