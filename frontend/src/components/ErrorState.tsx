import type { ReactNode } from 'react';
import styles from './ErrorState.module.css';

export default function ErrorState({
  code,
  title,
  message,
  children,
}: {
  code: string;
  title: string;
  message: string;
  children?: ReactNode;
}) {
  return (
    <section className={styles.errorSection}>
      <div className={styles.errorCode}>{code}</div>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.message}>{message}</p>
      <div className={styles.actions}>{children}</div>
    </section>
  );
}
