import Link from 'next/link';
import { cookies, headers } from 'next/headers';
import styles from './page.module.css';

// Next.js 16: params and searchParams are now async
// Note: This page is automatically dynamic because it uses headers() and cookies()
export default async function AsyncRequestPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  // Await the searchParams
  const resolvedSearchParams = await searchParams;
  const demo = resolvedSearchParams.demo || 'none';

  // Await cookies and headers (now async in Next.js 16)
  const cookieStore = await cookies();
  const headersList = await headers();

  const userAgent = headersList.get('user-agent') || 'Unknown';
  const demoCookie = cookieStore.get('demo-cookie')?.value || 'Not set';

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <Link href="/" className={styles.back}>← Back to Home</Link>

        <h1 className={styles.title}>Async Request APIs</h1>

        <p className={styles.intro}>
          Next.js 16 uses async versions of request APIs for better compatibility
          with React's async rendering model.
        </p>

        <div className={styles.features}>
          <div className={styles.feature}>
            <h3>Async searchParams</h3>
            <p>
              The <code>searchParams</code> prop is now a Promise that must be awaited.
            </p>
            <div className={styles.demo}>
              <p><strong>Current demo param:</strong> {demo}</p>
              <p className={styles.hint}>
                Try: <Link href="/async-request?demo=example">?demo=example</Link>
              </p>
            </div>
            <pre><code>{`export default async function Page({ searchParams }) {
  const params = await searchParams;
  const demo = params.demo;
  // Use demo value
}`}</code></pre>
          </div>

          <div className={styles.feature}>
            <h3>Async params</h3>
            <p>
              Dynamic route params are also async and must be awaited.
            </p>
            <pre><code>{`export default async function Page({ params }) {
  const { id } = await params;
  // Use id value
}`}</code></pre>
          </div>

          <div className={styles.feature}>
            <h3>Async headers()</h3>
            <p>
              The <code>headers()</code> function now returns a Promise.
            </p>
            <div className={styles.demo}>
              <p><strong>Your User-Agent:</strong></p>
              <p className={styles.userAgent}>{userAgent}</p>
            </div>
            <pre><code>{`import { headers } from 'next/headers';

const headersList = await headers();
const userAgent = headersList.get('user-agent');`}</code></pre>
          </div>

          <div className={styles.feature}>
            <h3>Async cookies()</h3>
            <p>
              The <code>cookies()</code> function now returns a Promise.
            </p>
            <div className={styles.demo}>
              <p><strong>Demo cookie value:</strong> {demoCookie}</p>
            </div>
            <pre><code>{`import { cookies } from 'next/headers';

const cookieStore = await cookies();
const value = cookieStore.get('my-cookie')?.value;`}</code></pre>
          </div>

          <div className={styles.feature}>
            <h3>Why This Change?</h3>
            <p>
              Making these APIs async allows Next.js to better optimize rendering
              and aligns with React's async component model. It also enables:
            </p>
            <ul>
              <li>Better static optimization</li>
              <li>Improved Partial Prerendering (PPR)</li>
              <li>More efficient streaming</li>
              <li>Better caching strategies</li>
            </ul>
          </div>

          <div className={styles.feature}>
            <h3>Migration Path</h3>
            <p>
              Next.js provides a codemod to automatically update your code:
            </p>
            <pre><code>{`npx @next/codemod@latest next-async-request-api .`}</code></pre>
          </div>
        </div>
      </div>
    </main>
  );
}
