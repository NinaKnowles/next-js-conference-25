import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  experimental: {
    // Enable React 19 features
    reactCompiler: true,
  },
};

export default nextConfig;
