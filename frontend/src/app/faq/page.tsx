import type { Metadata } from "next";
import PageHeader from '@/components/PageHeader';
import FaqAccordion from '@/components/FaqAccordion';
import { FAQ_DATA } from '@/data/faqData';

export const metadata: Metadata = {
  title: "FAQ | Nursing Admission, GNM, B.Sc & M.Sc Nursing Questions Answered",
  description:
    "Answers to common questions about GNM, B.Sc Nursing, Post Basic B.Sc, and M.Sc Nursing admission, eligibility, and fees at SAK College of Nursing, Bangalore.",
  keywords: [
    "Nursing College",
    "Nursing College near me",
    "GNM",
    "GNM College Bangalore",
    "B.Sc Nursing",
    "B.Sc Nursing College Bangalore",
    "M.Sc Nursing",
    "Post Basic B.Sc Nursing",
    "Nursing Admission",
    "SAK College",
  ],
  alternates: {
    canonical: "https://www.sakinstitutes.com/faq",
  },
};

export default function FaqPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_DATA.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <main>
      <PageHeader title="Frequently Asked Questions" breadcrumb="FAQ" />
      <section style={{ padding: '4rem 0' }}>
        <div className="container">
          <FaqAccordion items={FAQ_DATA} />
        </div>
      </section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </main>
  );
}
