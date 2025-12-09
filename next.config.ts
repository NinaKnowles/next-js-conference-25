import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Enable Cache Components to use "use cache" directive
  cacheComponents: true,

  // React Compiler is stable in Next.js 16, but requires babel-plugin-react-compiler
  // Uncomment after installing: npm install babel-plugin-react-compiler
  // reactCompiler: true,

  // Turbopack is now the default bundler (stable in Next.js 16)
  // No configuration needed - it's automatic!
};

export default nextConfig;
