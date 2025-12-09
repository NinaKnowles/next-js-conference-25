'use client';

import { useActionState } from 'react';
import styles from './form-demo.module.css';

async function submitFeedback(
  prevState: { message: string; success: boolean } | null,
  formData: FormData
) {
  const message = formData.get('message') as string;

  // Simulate server processing
  await new Promise(resolve => setTimeout(resolve, 1000));

  if (!message || message.length < 3) {
    return {
      success: false,
      message: 'Message must be at least 3 characters',
    };
  }

  return {
    success: true,
    message: `Thanks for your feedback: "${message}"`,
  };
}

export function FormDemo() {
  const [state, formAction, isPending] = useActionState(submitFeedback, null);

  return (
    <div className={styles.demo}>
      <form action={formAction} className={styles.form}>
        <div className={styles.field}>
          <label htmlFor="message">Your Feedback:</label>
          <textarea
            id="message"
            name="message"
            rows={4}
            placeholder="Enter your feedback here..."
            disabled={isPending}
            className={styles.textarea}
          />
        </div>

        <button type="submit" disabled={isPending} className={styles.button}>
          {isPending ? 'Submitting...' : 'Submit Feedback'}
        </button>

        {state && (
          <div className={state.success ? styles.success : styles.error}>
            {state.message}
          </div>
        )}
      </form>

      <div className={styles.info}>
        <p>
          <strong>Try it out!</strong> This form uses <code>useActionState</code> to handle
          submission. Notice how the button shows a loading state automatically.
        </p>
      </div>
    </div>
  );
}
