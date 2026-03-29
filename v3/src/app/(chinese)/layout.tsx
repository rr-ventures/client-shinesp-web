import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "../globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import ScrollToTop from "@/components/ScrollToTop";

const nunito = Nunito({ subsets: ["latin", "latin-ext"], variable: "--font-nunito" });

export const metadata: Metadata = {
  metadataBase: new URL("https://shineandspeak.com.au"),
  openGraph: {
    siteName: "Shine and Speak",
    type: "website",
    locale: "zh_CN",
    images: [
      {
        url: "/shine-and-speak-logo-horizontal-transparent.png",
        width: 1200,
        height: 630,
        alt: "Shine and Speak — 悉尼言语治疗",
        // REPLACE: Swap this for a proper 1200×630 Open Graph card image
      },
    ],
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
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+61421608819",
    email: "admin@shineandspeak.com.au",
    contactType: "customer service",
    areaServed: "AU",
    availableLanguage: ["English", "Chinese"],
  },
};

export default function ChineseLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className={`${nunito.variable} font-sans antialiased`}>
        <ScrollToTop />
        <Header />
        {children}
        <Footer />
        <FloatingButtons />
      </body>
    </html>
  );
}
