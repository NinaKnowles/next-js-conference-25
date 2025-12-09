import Link from 'next/link';
import { Suspense } from 'react';
import styles from './page.module.css';

async function SlowComponent({ delay }: { delay: number }) {
  await new Promise(resolve => setTimeout(resolve, delay));
  return (
    <div className={styles.loaded}>
      Loaded after {delay}ms
    </div>
  );
}

export default function StreamingPage() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <Link href="/" className={styles.back}>← Back to Home</Link>

        <h1 className={styles.title}>Streaming & Suspense</h1>

        <p className={styles.intro}>
          Next.js 15 enhances streaming with improved Suspense support and
          Partial Prerendering (PPR) for instant page loads.
        </p>

        <div className={styles.features}>
          <div className={styles.feature}>
            <h3>Live Streaming Demo</h3>
            <p>Watch different components load at different speeds:</p>

            <div className={styles.streamingDemo}>
              <Suspense fallback={<div className={styles.loading}>Loading component 1...</div>}>
                <SlowComponent delay={500} />
              </Suspense>

              <Suspense fallback={<div className={styles.loading}>Loading component 2...</div>}>
                <SlowComponent delay={1500} />
              </Suspense>

              <Suspense fallback={<div className={styles.loading}>Loading component 3...</div>}>
                <SlowComponent delay={2500} />
              </Suspense>
            </div>
          </div>

          <div className={styles.feature}>
            <h3>How Streaming Works</h3>
            <p>
              Next.js sends HTML to the browser progressively as components finish rendering.
              This means users see content faster, improving perceived performance.
            </p>
            <pre><code>{`import { Suspense } from 'react';

export default function Page() {
  return (
    <>
      <FastComponent />
      <Suspense fallback={<Skeleton />}>
        <SlowComponent />
      </Suspense>
    </>
  );
}`}</code></pre>
          </div>

          <div className={styles.feature}>
            <h3>Partial Prerendering (PPR)</h3>
            <p>
              PPR combines static and dynamic rendering in the same route. Static content
              is served instantly, while dynamic parts stream in.
            </p>
            <ul>
              <li>Instant initial page load with static shell</li>
              <li>Dynamic content streams in without blocking</li>
              <li>Best of both static and dynamic rendering</li>
              <li>Automatic optimization by Next.js</li>
            </ul>
            <pre><code>{`// next.config.ts
export const experimental = {
  ppr: 'incremental',
};

// app/page.tsx
export const experimental_ppr = true;`}</code></pre>
          </div>

          <div className={styles.feature}>
            <h3>Loading States</h3>
            <p>
              Create sophisticated loading states with nested Suspense boundaries:
            </p>
            <pre><code>{`<Suspense fallback={<PageSkeleton />}>
  <Header />

  <Suspense fallback={<SidebarSkeleton />}>
    <Sidebar />
  </Suspense>

  <Suspense fallback={<ContentSkeleton />}>
    <MainContent />
  </Suspense>
</Suspense>`}</code></pre>
          </div>

          <div className={styles.feature}>
            <h3>Benefits of Streaming</h3>
            <ul>
              <li><strong>Faster TTFB:</strong> Time to First Byte is reduced</li>
              <li><strong>Progressive Rendering:</strong> Content appears as it's ready</li>
              <li><strong>Better UX:</strong> Users see something immediately</li>
              <li><strong>SEO Friendly:</strong> Search engines can crawl streamed content</li>
              <li><strong>Error Boundaries:</strong> Failed components don't break the page</li>
            </ul>
          </div>

          <div className={styles.feature}>
            <h3>Streaming with Server Actions</h3>
            <p>
              Combine streaming with Server Actions for real-time updates:
            </p>
            <pre><code>{`'use server'

export async function getStreamingData() {
  const stream = new ReadableStream({
    async start(controller) {
      for (let i = 0; i < 10; i++) {
        await delay(100);
        controller.enqueue(\`Chunk \${i}\`);
      }
      controller.close();
    }
  });

  return stream;
}`}</code></pre>
          </div>
        </div>
      </div>
    </main>
  );
}
