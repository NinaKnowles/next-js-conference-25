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
          Explore the latest features from Next.js 15 and React 19
        </p>

        <div className={styles.grid}>
          <Link href="/react19-features" className={styles.card}>
            <h2>React 19 Features →</h2>
            <p>
              New hooks like <code>use()</code>, Actions, <code>useActionState</code>,
              and <code>useOptimistic</code>
            </p>
          </Link>

          <Link href="/async-request" className={styles.card}>
            <h2>Async Request APIs →</h2>
            <p>
              Access params, searchParams, headers, and cookies asynchronously
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

          <Link href="/turbopack" className={styles.card}>
            <h2>Turbopack →</h2>
            <p>
              Lightning-fast dev server with improved HMR and build times
            </p>
          </Link>

          <Link href="/caching" className={styles.card}>
            <h2>Caching Updates →</h2>
            <p>
              New caching defaults and fetch behavior in Next.js 15
            </p>
          </Link>
        </div>

        <div className={styles.footer}>
          <p>Built with Next.js 15.1 + React 19 + Turbopack</p>
        </div>
      </div>
    </main>
  );
}
