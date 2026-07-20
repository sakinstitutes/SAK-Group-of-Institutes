"use client";

import { useState } from 'react';
import type { FaqItem } from '@/data/faqData';
import styles from './FaqAccordion.module.css';

export default function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className={styles.accordion}>
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={item.question} className={`${styles.item} ${isOpen ? styles.itemOpen : ''}`}>
            <button
              type="button"
              className={styles.question}
              onClick={() => toggle(index)}
              aria-expanded={isOpen}
            >
              <span>{item.question}</span>
              <svg
                className={styles.chevron}
                width="18" height="18" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>
            <div className={styles.answer}>
              <p>{item.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
