import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import FloatingButtons from "@/components/FloatingButtons";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const SITE_URL = "https://www.shineandspeak.com.au";
const OG_IMAGE = `${SITE_URL}/og-image.png`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Speech Pathologist Sydney NSW | Shine and Speak — Mobile & Telehealth",
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
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Shine and Speak — Speech Pathology Sydney",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Shine and Speak",
  url: SITE_URL,
  logo: `${SITE_URL}/og-image.png`,
  email: "admin@shineandspeak.com.au",
  telephone: "+61421608819",
  sameAs: [
    "https://www.linkedin.com/company/shine-and-speak", // <!-- REPLACE: real LinkedIn URL -->
    "https://www.facebook.com/shineandspeak", // <!-- REPLACE: real Facebook URL -->
    "https://www.instagram.com/shineandspeak", // <!-- REPLACE: real Instagram URL -->
  ],
  areaServed: [
    "Burwood", "Hurstville", "Strathfield", "Canterbury-Bankstown",
    "Campsie", "Rockdale", "Kogarah", "Marrickville", "Arncliffe",
    "Inner West Sydney", "St George", "Sydney",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} h-full`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-inter antialiased">
        <ScrollToTop />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingButtons />
      </body>
    </html>
  );
}
