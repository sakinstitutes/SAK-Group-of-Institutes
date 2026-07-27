import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import CourseCarousel from "@/components/CourseCarousel";
import FacilitiesSection from "@/components/FacilitiesSection";
import GallerySection from "@/components/GallerySection";
import AboutHomeSection from "@/components/AboutHomeSection";
import SiteLinksSection from "@/components/SiteLinksSection";

const KEYWORDS = [
  "Nursing College",
  "Best Nursing College",
  "Best Nursing College in Bangalore",
  "Nursing College in Bangalore",
  "Top Nursing College in Bangalore",
  "Top 10 Nursing College in Bangalore",
  "Nursing College near me",
  "GNM",
  "GNM College",
  "GNM College Bangalore",
  "GNM Nursing College in Bangalore",
  "GNM College near me",
  "B.Sc Nursing",
  "B.Sc Nursing College",
  "B.sc nursing fees",
  "B.Sc Nursing College Bangalore",
  "B.Sc Nursing College in Bangalore",
  "Best B.Sc Nursing College in Bangalore",
  "b.sc nursing government college list",
  "B.Sc Nursing near me",
  "Post Basic B.Sc Nursing",
  "M.Sc Nursing",
  "M.Sc Nursing College in Bangalore",
  "M.Sc Nursing near me",
  "Healthcare Education",
  "Nursing Admission",
  "SAK Group of Institutions",
];

export const metadata: Metadata = {
  title: "SAK Group of Institutions | Best Nursing College in Bangalore",
  description:
    "SAK Group of Institutions is a top nursing college in Bangalore offering GNM, B.Sc, Post Basic B.Sc & M.Sc Nursing. INC-recognized, 15+ years of trust, 100% placement assistance.",
  keywords: KEYWORDS,
  alternates: {
    canonical: "https://www.sakinstitutions.com",
  },
  openGraph: {
    title: "SAK Group of Institutions | Best Nursing College in Bangalore",
    description:
      "A top nursing college in Bangalore offering GNM, B.Sc, Post Basic B.Sc & M.Sc Nursing. INC-recognized, 15+ years of trust, 100% placement assistance.",
    url: "https://www.sakinstitutions.com",
    siteName: "SAK Group of Institutions",
    images: [
      {
        url: "/gallery11.jpeg",
        width: 1200,
        height: 630,
        alt: "SAK Group of Institutions campus, Bangalore",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SAK Group of Institutions | Best Nursing College in Bangalore",
    description:
      "A top nursing college in Bangalore offering GNM, B.Sc, Post Basic B.Sc & M.Sc Nursing. INC-recognized, 15+ years of trust, 100% placement assistance.",
    images: ["/gallery11.jpeg"],
  },
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <CourseCarousel />
      <FacilitiesSection />
      <GallerySection />
      <AboutHomeSection />
      <SiteLinksSection />
    </>
  );
}
