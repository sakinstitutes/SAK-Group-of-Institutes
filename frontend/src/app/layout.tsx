import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SplashScreen from "@/components/SplashScreen";
import QuickConnect from "@/components/QuickConnect";
import NoticeTicker from "@/components/NoticeTicker";
import { Toaster } from "react-hot-toast";
import { SITE_SETTINGS } from "@/data/staticData";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.sakinstitutions.com"),
  title: {
    template: "%s | SAK Group of Institutions",
    default: "SAK Group of Institutions | Best Nursing College in Bangalore",
  },
  description: "Welcome to SAK Group of Institutions, a premier institution for higher education in nursing. Explore our GNM, B.Sc, and M.Sc programs.",
  alternates: {
    // "./" resolves against the current route's pathname + metadataBase,
    // giving every page a self-referencing canonical from this one entry.
    canonical: "./",
  },
  openGraph: {
    title: "SAK Group of Institutions",
    description: "Empowering Future Healthcare Leaders through excellence in nursing education.",
    url: "./",
    siteName: "SAK Group of Institutions",
    images: [
      {
        url: "/gallery11.jpeg",
        width: 1200,
        height: 630,
        alt: "SAK Group of Institutions Campus",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SAK Group of Institutions",
    description: "Empowering Future Healthcare Leaders through excellence in nursing education.",
    images: ["/gallery11.jpeg"],
  }
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollegeOrUniversity",
      "@id": "https://www.sakinstitutions.com/#organization",
      name: "SAK Group of Institutions",
      alternateName: "SAK College of Nursing",
      url: "https://www.sakinstitutions.com",
      logo: "https://www.sakinstitutions.com/sak-logo.png",
      telephone: "+918884330808",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Bengaluru",
        addressRegion: "Karnataka",
        addressCountry: "IN",
      },
      sameAs: [SITE_SETTINGS.instagramUrl],
    },
    {
      "@type": "WebSite",
      name: "SAK Group of Institutions",
      alternateName: "SAK College of Nursing",
      url: "https://www.sakinstitutions.com",
      publisher: { "@id": "https://www.sakinstitutions.com/#organization" },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <Toaster position="top-right" />
        <SplashScreen />
        <NoticeTicker />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <QuickConnect />
      </body>
    </html>
  );
}
