import type { NextConfig } from 'next';
import WithBundleAnalyzer from '@next/bundle-analyzer';

const nextConfig: NextConfig = {
  images: {
    formats: ['image/webp', 'image/avif'],
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  experimental: {
    optimizePackageImports: ['swiper', '@tailwindcss/postcss', 'react-hook-form'],
  },
  transpilePackages: ['swiper', '@tailwindcss/postcss', 'react-hook-form'],
};

export default WithBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
})(nextConfig);
