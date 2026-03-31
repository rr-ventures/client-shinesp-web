import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "../globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import ScrollToTop from "@/components/ScrollToTop";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  metadataBase: new URL("https://shineandspeak.com.au"),
  title: {
    default: "Speech Pathologist Sydney NSW | Shine and Speak",
    template: "%s | Shine and Speak",
  },
  description:
    "Personalised speech therapy delivered to your home, school, or online. Bilingual English & Mandarin. NDIS, Medicare & private. Serving Inner West Sydney.",
  openGraph: {
    siteName: "Shine and Speak",
    type: "website",
    locale: "en_AU",
    images: [
      {
        url: "/shine-and-speak-logo-horizontal-transparent.png",
        width: 1200,
        height: 630,
        alt: "Shine and Speak — Mobile Speech Pathology Sydney",
        // REPLACE: Swap this for a proper 1200×630 Open Graph card image
      },
    ],
  },
  alternates: {
    languages: {
      en: "https://shineandspeak.com.au/",
      zh: "https://shineandspeak.com.au/zh",
    },
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Shine and Speak",
  url: "https://shineandspeak.com.au",
  logo: "https://shineandspeak.com.au/shine-and-speak-logo-horizontal-transparent.png",
  email: "admin@shineandspeak.com.au",
  telephone: "+61421608819",
  sameAs: [
    "https://www.linkedin.com/company/shine-and-speak",
    "https://www.facebook.com/shineandspeak",
    "https://www.instagram.com/shineandspeak",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+61421608819",
    email: "admin@shineandspeak.com.au",
    contactType: "customer service",
    areaServed: "AU",
    availableLanguage: ["English", "Chinese"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        <ScrollToTop />
        <Header />
        {children}
        <Footer />
        <FloatingButtons />
      </body>
    </html>
  );
}
