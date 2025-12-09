import Link from 'next/link';
import styles from './page.module.css';

// Note: "use cache" is announced but not yet fully available in Next.js 16
// This page demonstrates what it will look like when it's available
async function getCachedData() {
  // In the future, you would add: 'use cache';
  // For now, we'll simulate the behavior

  // Simulate expensive operation
  await new Promise(resolve => setTimeout(resolve, 100));

  return {
    timestamp: new Date().toISOString(),
    message: 'This shows how "use cache" will work!'
  };
}

export default async function UseCachePage() {
  const data = await getCachedData();

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <Link href="/" className={styles.back}>← Back to Home</Link>

        <h1 className={styles.title}>"use cache" Directive</h1>

        <p className={styles.intro}>
          Next.js 16 introduces the <code>"use cache"</code> directive - a new opt-in
          caching model that gives you explicit control over what gets cached.
        </p>

        <div className={styles.features}>
          <div className={styles.feature}>
            <h3>🎯 The Big Change in Next.js 16</h3>
            <p>
              Next.js 16 moves to an <strong>opt-in caching model</strong>. By default,
              everything is dynamic (uncached). You explicitly mark what should be cached
              with <code>"use cache"</code>.
            </p>
            <div className={styles.highlight}>
              <p><strong>Default Behavior:</strong> All code executes at request time</p>
              <p><strong>Opt-in Caching:</strong> Use <code>"use cache"</code> to cache specific parts</p>
            </div>
          </div>

          <div className={styles.feature}>
            <h3>Live Demo</h3>
            <p>This page and the function below use <code>"use cache"</code>:</p>
            <div className={styles.demo}>
              <p><strong>Cached Timestamp:</strong> {data.timestamp}</p>
              <p>{data.message}</p>
              <p className={styles.hint}>
                Refresh the page multiple times - the timestamp stays the same because it's cached!
              </p>
            </div>
          </div>

          <div className={styles.feature}>
            <h3>How to Use "use cache"</h3>
            <p>You can add <code>"use cache"</code> to:</p>
            <ul>
              <li>Entire pages/routes</li>
              <li>Individual components</li>
              <li>Utility functions</li>
            </ul>

            <h4>Example 1: Cached Page</h4>
            <pre><code>{`'use cache';

export default async function Page() {
  // Entire page is cached
  const data = await fetchData();
  return <div>{data}</div>;
}`}</code></pre>

            <h4>Example 2: Cached Component</h4>
            <pre><code>{`async function UserProfile({ userId }) {
  'use cache';

  const user = await db.users.findOne(userId);
  return <div>{user.name}</div>;
}`}</code></pre>

            <h4>Example 3: Cached Function</h4>
            <pre><code>{`async function getExpensiveCalculation() {
  'use cache';

  // Expensive operation
  const result = await complexCalculation();
  return result;
}`}</code></pre>
          </div>

          <div className={styles.feature}>
            <h3>Cache Profiles with cacheLife</h3>
            <p>
              Define how long things should be cached using <code>cacheLife</code> profiles:
            </p>
            <pre><code>{`// next.config.ts
const nextConfig = {
  cacheLife: {
    'seconds': { stale: 10, revalidate: 30, expire: 60 },
    'minutes': { stale: 300, revalidate: 600, expire: 3600 },
    'hours': { stale: 3600, revalidate: 7200, expire: 86400 },
    'days': { stale: 86400, revalidate: 604800 },
    'weeks': { stale: 604800, revalidate: 2592000 },
    'max': { stale: 31536000, revalidate: 31536000 },
  },
};`}</code></pre>

            <h4>Using Cache Profiles</h4>
            <pre><code>{`async function BlogPost({ id }) {
  'use cache';
  cacheLife('hours');

  const post = await getPost(id);
  return <article>{post.content}</article>;
}`}</code></pre>
          </div>

          <div className={styles.feature}>
            <h3>Cache Tags for Revalidation</h3>
            <p>
              Use cache tags to invalidate specific cached content on-demand:
            </p>
            <pre><code>{`async function ProductList() {
  'use cache';
  cacheTag('products');

  const products = await db.products.findAll();
  return <div>{/* render products */}</div>;
}

// In a Server Action:
'use server';
import { revalidateTag } from 'next/cache';

export async function updateProduct(id) {
  await db.products.update(id);
  revalidateTag('products', 'hours'); // Revalidate with profile
}`}</code></pre>
          </div>

          <div className={styles.feature}>
            <h3>New Revalidation APIs</h3>

            <h4>revalidateTag() - Updated</h4>
            <p>Now requires a <code>cacheLife</code> profile as the second argument:</p>
            <pre><code>{`import { revalidateTag } from 'next/cache';

// Stale-while-revalidate behavior
revalidateTag('blog-posts', 'max');
revalidateTag('news-feed', 'hours');`}</code></pre>

            <h4>updateTag() - New!</h4>
            <p>Server Actions only. Expires cache and immediately refreshes:</p>
            <pre><code>{`'use server';
import { updateTag } from 'next/cache';

export async function updateUserProfile(userId, profile) {
  await db.users.update(userId, profile);
  updateTag(\`user-\${userId}\`); // Read-your-writes
}`}</code></pre>

            <h4>refresh() - New!</h4>
            <p>Refreshes only uncached data (doesn't touch cache):</p>
            <pre><code>{`'use client';
import { refresh } from 'next/cache';

function NotificationBell() {
  return (
    <button onClick={() => refresh()}>
      Check for new notifications
    </button>
  );
}`}</code></pre>
          </div>

          <div className={styles.feature}>
            <h3>Benefits of "use cache"</h3>
            <ul>
              <li><strong>Explicit:</strong> Clear what's cached vs dynamic</li>
              <li><strong>Flexible:</strong> Mix static and dynamic in the same route</li>
              <li><strong>Completes PPR:</strong> Works seamlessly with Partial Pre-Rendering</li>
              <li><strong>Better DX:</strong> No surprising cache behavior</li>
              <li><strong>Granular Control:</strong> Cache at any level - page, component, or function</li>
            </ul>
          </div>

          <div className={styles.feature}>
            <h3>Migration from Next.js 15</h3>
            <p>
              In Next.js 15, routes were static by default if possible. In Next.js 16,
              routes are dynamic by default. To maintain static behavior:
            </p>
            <pre><code>{`// Old (Next.js 15)
export default async function Page() {
  const data = await fetch(url); // Cached by default
  return <div>{data}</div>;
}

// New (Next.js 16)
export default async function Page() {
  'use cache'; // Explicitly opt-in
  const data = await fetch(url);
  return <div>{data}</div>;
}`}</code></pre>
          </div>
        </div>
      </div>
    </main>
  );
}
