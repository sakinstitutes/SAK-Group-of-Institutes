import Link from 'next/link';
import ErrorState from '@/components/ErrorState';
import errorStyles from '@/components/ErrorState.module.css';

export default function NotFound() {
  return (
    <ErrorState
      code="404"
      title="Page Not Found"
      message="The page you're looking for might have been moved, renamed, or doesn't exist. Let's get you back on track."
    >
      <Link href="/" className="btn-primary">Return Home</Link>
      <Link href="/courses" className={errorStyles.secondaryLink}>Explore Courses</Link>
      <Link href="/contact" className={errorStyles.secondaryLink}>Contact Us</Link>
    </ErrorState>
  );
}
