import Link from 'next/link';
import styles from './page.module.css';

export default function TurbopackPage() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <Link href="/" className={styles.back}>← Back to Home</Link>

        <h1 className={styles.title}>Turbopack - Now Stable!</h1>

        <p className={styles.intro}>
          Turbopack is Next.js's Rust-powered bundler and is now <strong>stable and the default</strong>
          in Next.js 16! It delivers significantly faster builds and Hot Module Replacement (HMR).
        </p>

        <div className={styles.features}>
          <div className={styles.feature}>
            <h3>🎉 Turbopack is Now the Default in Next.js 16!</h3>
            <p>
              As of Next.js 16, Turbopack is stable and the default bundler for all projects.
              No configuration needed - it just works!
            </p>
            <div className={styles.highlight}>
              <p><strong>✅ Stable for Development</strong></p>
              <p><strong>✅ Default Bundler</strong></p>
              <p><strong>✅ 2-5x Faster Production Builds</strong></p>
              <p><strong>✅ Up to 10x Faster Fast Refresh</strong></p>
            </div>
          </div>

          <div className={styles.feature}>
            <h3>Performance Improvements</h3>
            <p>Turbopack provides massive speed improvements over Webpack:</p>
            <ul>
              <li><strong>Up to 10x faster</strong> Fast Refresh (HMR)</li>
              <li><strong>2-5x faster</strong> production builds</li>
              <li><strong>Instant updates</strong> with incremental compilation</li>
              <li><strong>50%+ adoption rate</strong> already in the community</li>
            </ul>
          </div>

          <div className={styles.feature}>
            <h3>How to Use Turbopack</h3>
            <p>
              In Next.js 16, Turbopack is enabled by default. No configuration needed!
            </p>
            <pre><code>{`# Just run dev as normal - Turbopack is automatic
npm run dev

# Turbopack is the default bundler
# No --turbopack flag needed anymore!`}</code></pre>
            <p className={styles.note}>
              The <code>--turbopack</code> flag is still supported for compatibility,
              but it's no longer necessary.
            </p>
          </div>

          <div className={styles.feature}>
            <h3>Key Features</h3>
            <div className={styles.grid}>
              <div className={styles.card}>
                <h4>🚀 Incremental Compilation</h4>
                <p>Only compiles what changed, making updates nearly instant</p>
              </div>
              <div className={styles.card}>
                <h4>⚡ Fast Refresh</h4>
                <p>See your changes in milliseconds without losing component state</p>
              </div>
              <div className={styles.card}>
                <h4>🔧 Rust-Powered</h4>
                <p>Built with Rust for maximum performance and memory efficiency</p>
              </div>
              <div className={styles.card}>
                <h4>📦 Smart Bundling</h4>
                <p>Optimized code splitting and lazy loading out of the box</p>
              </div>
            </div>
          </div>

          <div className={styles.feature}>
            <h3>Architecture</h3>
            <p>
              Turbopack uses a function-level caching system that remembers previous work:
            </p>
            <ul>
              <li>Granular function-level caching</li>
              <li>Persistent caching across restarts</li>
              <li>Parallel processing of independent tasks</li>
              <li>Lazy compilation - only builds what's needed</li>
            </ul>
          </div>

          <div className={styles.feature}>
            <h3>Production Builds</h3>
            <p>
              Turbopack for production builds is coming soon. Currently available for:
            </p>
            <ul>
              <li>✅ Development server</li>
              <li>✅ Fast Refresh / HMR</li>
              <li>🚧 Production builds (in progress)</li>
            </ul>
            <p className={styles.note}>
              Production builds currently use Webpack, but will migrate to Turbopack
              in a future release.
            </p>
          </div>

          <div className={styles.feature}>
            <h3>Compatibility</h3>
            <p>
              Turbopack is designed to be a drop-in replacement with minimal configuration:
            </p>
            <pre><code>{`// next.config.ts
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Turbopack-specific options
  experimental: {
    turbo: {
      // Custom loader rules (if needed)
      rules: {
        '*.svg': {
          loaders: ['@svgr/webpack'],
          as: '*.js',
        },
      },
    },
  },
};

export default nextConfig;`}</code></pre>
          </div>

          <div className={styles.feature}>
            <h3>Migration Tips</h3>
            <ul>
              <li>Start with <code>next dev --turbopack</code></li>
              <li>Most apps work without any configuration changes</li>
              <li>Check webpack-specific plugins for Turbopack alternatives</li>
              <li>Report issues on GitHub for ecosystem improvements</li>
            </ul>
          </div>

          <div className={styles.feature}>
            <h3>This Demo Uses Turbopack!</h3>
            <p>
              This demo project is configured to use Turbopack in development.
              Try making changes to any file and notice the instant updates!
            </p>
            <div className={styles.highlight}>
              <p>🎉 You're experiencing Turbopack's speed right now!</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
