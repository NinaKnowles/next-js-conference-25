import Link from 'next/link';
import { Suspense } from 'react';
import styles from './page.module.css';

// Simulate async data fetching
async function fetchUserData() {
  await new Promise(resolve => setTimeout(resolve, 1000));
  return { name: 'John Doe', email: 'john@example.com' };
}

// Component using React 19 'use' hook pattern
async function UserProfile() {
  const userData = await fetchUserData();

  return (
    <div className={styles.feature}>
      <h3>User Profile (using async/await in components)</h3>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
    </div>
  );
}

export default function React19Features() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <Link href="/" className={styles.back}>← Back to Home</Link>

        <h1 className={styles.title}>React 19 Features</h1>

        <p className={styles.intro}>
          React 19 introduces powerful new features that work seamlessly with Next.js 15
        </p>

        <div className={styles.features}>
          <div className={styles.feature}>
            <h3>Actions & useActionState</h3>
            <p>
              Handle form submissions with Server Actions, automatic pending states,
              and optimistic updates without additional client-side code.
            </p>
            <pre><code>{`"use server"

async function submitForm(prevState, formData) {
  const name = formData.get('name');
  // Process form data
  return { success: true };
}`}</code></pre>
          </div>

          <div className={styles.feature}>
            <h3>useOptimistic Hook</h3>
            <p>
              Show optimistic UI updates immediately while the server processes
              the actual changes.
            </p>
            <pre><code>{`const [optimisticState, addOptimistic] = useOptimistic(
  state,
  (currentState, optimisticValue) => {
    // Merge and return optimistic state
    return [...currentState, optimisticValue];
  }
);`}</code></pre>
          </div>

          <Suspense fallback={<div className={styles.loading}>Loading user data...</div>}>
            <UserProfile />
          </Suspense>

          <div className={styles.feature}>
            <h3>Enhanced Suspense</h3>
            <p>
              Better streaming and fallback handling with improved error boundaries
              and automatic batching of suspense boundaries.
            </p>
          </div>

          <div className={styles.feature}>
            <h3>use() Hook</h3>
            <p>
              Read resources like Promises and Context in a more flexible way,
              including conditionally.
            </p>
            <pre><code>{`import { use } from 'react';

function Component({ dataPromise }) {
  const data = use(dataPromise);
  return <div>{data.value}</div>;
}`}</code></pre>
          </div>

          <div className={styles.feature}>
            <h3>Document Metadata</h3>
            <p>
              Render title, meta tags, and links directly in components without
              needing special wrappers.
            </p>
            <pre><code>{`function Page() {
  return (
    <>
      <title>My Page</title>
      <meta name="description" content="Page description" />
      {/* Component content */}
    </>
  );
}`}</code></pre>
          </div>
        </div>
      </div>
    </main>
  );
}
