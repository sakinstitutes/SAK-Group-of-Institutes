import React from 'react';
import Link from 'next/link';
import styles from './NoticeTicker.module.css';
import { NOTICES } from '@/data/staticData';

export default function NoticeTicker() {
  const notices = NOTICES.filter(n => n.isActive);

  if (notices.length === 0) return null;

  const renderNotices = () => (
    <>
      {notices.map((notice, index) => (
        <React.Fragment key={notice.id + index}>
          <div className={styles.tickerItem}>
            <span dangerouslySetInnerHTML={{ __html: notice.content }} />{' '}
            {notice.link && (
              <Link href={notice.link} target="_blank" rel="noopener noreferrer" className={styles.tickerLink}>
                Learn More
              </Link>
            )}
          </div>
          <span className={styles.separator}>|</span>
        </React.Fragment>
      ))}
    </>
  );

  return (
    <div className={styles.tickerWrapper}>
      <div className={styles.tickerLabel}>LATEST UPDATES</div>
      <div className={styles.tickerContainer}>
        <div className={styles.tickerContent}>
          {renderNotices()}
          {/* Duplicate for seamless looping */}
          {renderNotices()}
        </div>
      </div>
    </div>
  );
}
