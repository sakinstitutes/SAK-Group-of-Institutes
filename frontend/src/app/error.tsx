"use client";

import { useEffect } from 'react';
import Link from 'next/link';
import ErrorState from '@/components/ErrorState';
import errorStyles from '@/components/ErrorState.module.css';

export default function Error({
  error,
  unstable_retry,
}: {
  error: Error & { digest?: string };
  unstable_retry: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <ErrorState
      code="500"
      title="Something Went Wrong"
      message="We hit an unexpected error while loading this page. Please try again, or head back to the homepage."
    >
      <button type="button" onClick={() => unstable_retry()} className="btn-primary">
        Try Again
      </button>
      <Link href="/" className={errorStyles.secondaryLink}>Return Home</Link>
    </ErrorState>
  );
}
