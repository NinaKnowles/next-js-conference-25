import Link from 'next/link';
import styles from './page.module.css';

export default function CachingPage() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <Link href="/" className={styles.back}>← Back to Home</Link>

        <h1 className={styles.title}>Caching Updates</h1>

        <p className={styles.intro}>
          Next.js 15 introduces significant changes to caching behavior, making it more
          predictable and easier to understand.
        </p>

        <div className={styles.features}>
          <div className={styles.feature}>
            <h3>Breaking Change: fetch() No Longer Cached by Default</h3>
            <p>
              In Next.js 14 and earlier, <code>fetch()</code> requests were cached by default.
              In Next.js 15, they are <strong>not cached by default</strong>.
            </p>
            <div className={styles.comparison}>
              <div className={styles.before}>
                <h4>Next.js 14 (Old)</h4>
                <pre><code>{`// Cached by default
const res = await fetch('https://api.example.com/data');

// Opt out of caching
const res = await fetch('https://api.example.com/data', {
  cache: 'no-store'
});`}</code></pre>
              </div>
              <div className={styles.after}>
                <h4>Next.js 15 (New)</h4>
                <pre><code>{`// NOT cached by default
const res = await fetch('https://api.example.com/data');

// Opt into caching
const res = await fetch('https://api.example.com/data', {
  cache: 'force-cache'
});`}</code></pre>
              </div>
            </div>
          </div>

          <div className={styles.feature}>
            <h3>Route Segment Config</h3>
            <p>
              Configure caching behavior for entire routes using route segment config:
            </p>
            <pre><code>{`// app/page.tsx
export const dynamic = 'force-dynamic'; // No caching
export const revalidate = 60; // Revalidate every 60 seconds
export const fetchCache = 'force-cache'; // Cache all fetches

export default async function Page() {
  const data = await fetch('https://api.example.com/data');
  return <div>{/* ... */}</div>;
}`}</code></pre>
          </div>

          <div className={styles.feature}>
            <h3>Cache Options</h3>
            <p>Fine-grained control over fetch caching:</p>
            <div className={styles.grid}>
              <div className={styles.card}>
                <h4>force-cache</h4>
                <p>Cache the response (previous default behavior)</p>
                <pre><code>{`fetch(url, { cache: 'force-cache' })`}</code></pre>
              </div>
              <div className={styles.card}>
                <h4>no-store</h4>
                <p>Never cache, always fetch fresh data</p>
                <pre><code>{`fetch(url, { cache: 'no-store' })`}</code></pre>
              </div>
              <div className={styles.card}>
                <h4>revalidate</h4>
                <p>Cache with time-based revalidation</p>
                <pre><code>{`fetch(url, {
  next: { revalidate: 3600 }
})`}</code></pre>
              </div>
              <div className={styles.card}>
                <h4>tags</h4>
                <p>Cache with on-demand revalidation</p>
                <pre><code>{`fetch(url, {
  next: { tags: ['posts'] }
})`}</code></pre>
              </div>
            </div>
          </div>

          <div className={styles.feature}>
            <h3>On-Demand Revalidation</h3>
            <p>
              Invalidate cached data programmatically using Server Actions or API Routes:
            </p>
            <pre><code>{`'use server'

import { revalidatePath, revalidateTag } from 'next/cache';

export async function updatePost(id: string) {
  await updatePostInDatabase(id);

  // Revalidate specific path
  revalidatePath(\`/posts/\${id}\`);

  // Or revalidate by tag
  revalidateTag('posts');
}`}</code></pre>
          </div>

          <div className={styles.feature}>
            <h3>Data Cache vs Router Cache</h3>
            <p>Next.js has two separate cache layers:</p>
            <ul>
              <li>
                <strong>Data Cache:</strong> Server-side cache for fetch responses
                and React Server Component payloads
              </li>
              <li>
                <strong>Router Cache:</strong> Client-side cache that stores the
                RSC payload of route segments
              </li>
            </ul>
          </div>

          <div className={styles.feature}>
            <h3>Static vs Dynamic Routes</h3>
            <p>Routes are automatically optimized based on data requirements:</p>
            <pre><code>{`// Static route (default if no dynamic functions used)
export default async function StaticPage() {
  const data = await fetch('https://api.example.com/data', {
    cache: 'force-cache'
  });
  return <div>{/* Rendered at build time */}</div>;
}

// Dynamic route (uses headers, cookies, etc.)
export default async function DynamicPage() {
  const headersList = await headers();
  return <div>{/* Rendered per request */}</div>;
}`}</code></pre>
          </div>

          <div className={styles.feature}>
            <h3>Migration Guide</h3>
            <p>To maintain Next.js 14 behavior, you have several options:</p>
            <div className={styles.migration}>
              <h4>Option 1: Per-fetch configuration</h4>
              <pre><code>{`const res = await fetch(url, { cache: 'force-cache' });`}</code></pre>

              <h4>Option 2: Route segment config</h4>
              <pre><code>{`export const fetchCache = 'default-cache';`}</code></pre>

              <h4>Option 3: Next.js config (all routes)</h4>
              <pre><code>{`// next.config.ts
const nextConfig = {
  experimental: {
    staleTimes: {
      dynamic: 30,
      static: 180,
    },
  },
};`}</code></pre>
            </div>
          </div>

          <div className={styles.feature}>
            <h3>Best Practices</h3>
            <ul>
              <li>Explicitly specify caching behavior for clarity</li>
              <li>Use <code>revalidate</code> for time-based updates</li>
              <li>Use <code>tags</code> for on-demand revalidation</li>
              <li>Prefer <code>no-store</code> for user-specific data</li>
              <li>Monitor cache hit rates in production</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
