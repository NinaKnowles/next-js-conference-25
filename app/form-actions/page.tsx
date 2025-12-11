import Link from 'next/link';
import { FormDemo } from './form-demo';
import styles from './page.module.css';

export default function FormActionsPage() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <Link href="/" className={styles.back}>← Back to Home</Link>

        <h1 className={styles.title}>Server Actions & Forms</h1>

        <p className={styles.intro}>
          Next.js 16 + React 19 make form handling incredibly simple with Server Actions,
          automatic pending states, and progressive enhancement.
        </p>

        <div className={styles.features}>
          <div className={styles.feature}>
            <h3>Interactive Demo</h3>
            <FormDemo />
          </div>

          <div className={styles.feature}>
            <h3>Server Actions</h3>
            <p>
              Define server-side logic that can be called directly from client components.
              They work with or without JavaScript enabled.
            </p>
            <pre><code>{`"use server"

export async function submitFeedback(formData: FormData) {
  const message = formData.get('message');

  // Process on server
  await saveToDatabase(message);

  return { success: true, message: 'Saved!' };
}`}</code></pre>
          </div>

          <div className={styles.feature}>
            <h3>useActionState Hook</h3>
            <p>
              Manage form state, pending states, and responses with minimal code.
            </p>
            <pre><code>{`'use client'
import { useActionState } from 'react';

export function Form() {
  const [state, formAction, isPending] = useActionState(
    submitAction,
    initialState
  );

  return (
    <form action={formAction}>
      <input name="message" />
      <button disabled={isPending}>
        {isPending ? 'Submitting...' : 'Submit'}
      </button>
      {state?.message && <p>{state.message}</p>}
    </form>
  );
}`}</code></pre>
          </div>

          <div className={styles.feature}>
            <h3>Progressive Enhancement</h3>
            <p>
              Forms work even without JavaScript! The browser will handle submission
              natively if JS fails to load.
            </p>
            <ul>
              <li>Works without JavaScript enabled</li>
              <li>Automatic loading states with JS</li>
              <li>Error handling built-in</li>
              <li>Type-safe with TypeScript</li>
            </ul>
          </div>

          <div className={styles.feature}>
            <h3>useOptimistic for Instant UI Updates</h3>
            <p>
              Show optimistic updates immediately while the server processes the request.
            </p>
            <pre><code>{`'use client'
import { useOptimistic } from 'react';

export function TodoList({ todos }) {
  const [optimisticTodos, addOptimistic] = useOptimistic(
    todos,
    (state, newTodo) => [...state, newTodo]
  );

  async function addTodo(formData) {
    const todo = { id: Date.now(), text: formData.get('text') };
    addOptimistic(todo);
    await createTodo(todo);
  }

  return (
    <form action={addTodo}>
      {optimisticTodos.map(todo => (
        <div key={todo.id}>{todo.text}</div>
      ))}
    </form>
  );
}`}</code></pre>
          </div>

          <div className={styles.feature}>
            <h3>Form Validation</h3>
            <p>
              Combine with React 19's form validation for comprehensive error handling.
            </p>
            <pre><code>{`export async function submitForm(prevState, formData) {
  const email = formData.get('email');

  if (!email || !email.includes('@')) {
    return {
      error: 'Invalid email address',
      field: 'email'
    };
  }

  await processEmail(email);
  return { success: true };
}`}</code></pre>
          </div>
        </div>
      </div>
    </main>
  );
}
