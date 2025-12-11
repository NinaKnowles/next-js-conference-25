import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1 className={styles.title}>
          Next.js Conference 2025
          <span className={styles.highlight}>Demo</span>
        </h1>

        <p className={styles.description}>
          Explore the latest features from Next.js 16 and React 19
        </p>

        <div className={styles.grid}>
          <Link href="/use-cache" className={styles.card}>
            <h2>"use cache" Directive →</h2>
            <p>
              New opt-in caching model with explicit control over what gets cached
            </p>
          </Link>

          <Link href="/proxy-example" className={styles.card}>
            <h2>proxy.ts →</h2>
            <p>
              Replaces middleware.ts with clearer network boundary handling
            </p>
          </Link>

          <Link href="/turbopack" className={styles.card}>
            <h2>Turbopack (Stable!) →</h2>
            <p>
              Now the default bundler! 2-5x faster builds, up to 10x faster HMR
            </p>
          </Link>

          <Link href="/react19-features" className={styles.card}>
            <h2>React 19 Features →</h2>
            <p>
              New hooks like <code>use()</code>, Actions, <code>useActionState</code>,
              and <code>useOptimistic</code>
            </p>
          </Link>

          <Link href="/form-actions" className={styles.card}>
            <h2>Server Actions →</h2>
            <p>
              Enhanced form handling with progressive enhancement and optimistic updates
            </p>
          </Link>

          <Link href="/streaming" className={styles.card}>
            <h2>Streaming & Suspense →</h2>
            <p>
              Advanced streaming patterns with React Suspense and PPR
            </p>
          </Link>
        </div>

        <div className={styles.footer}>
          <p>Built with Next.js 16 + React 19 + Turbopack</p>
        </div>
      </div>
    </main>
  );
}
