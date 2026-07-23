"use client";

import "./globals.css";
import ErrorState from '@/components/ErrorState';
import errorStyles from '@/components/ErrorState.module.css';

export default function GlobalError({
  error,
  unstable_retry,
}: {
  error: Error & { digest?: string };
  unstable_retry: () => void;
}) {
  console.error(error);

  return (
    <html lang="en">
      <body>
        <title>Something Went Wrong | SAK Group of Institutions</title>
        <ErrorState
          code="500"
          title="Something Went Wrong"
          message="A critical error occurred while loading this site. Please try again, or return to the homepage."
        >
          <button type="button" onClick={() => unstable_retry()} className="btn-primary">
            Try Again
          </button>
          {/* eslint-disable-next-line @next/next/no-html-link-for-pages -- global-error replaces the root layout, so next/link's router context may not be mounted */}
          <a href="/" className={errorStyles.secondaryLink}>Return Home</a>
        </ErrorState>
      </body>
    </html>
  );
}
