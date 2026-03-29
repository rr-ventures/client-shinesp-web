import type { Metadata } from "next";
import { Inter, Lora } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import FloatingCallButton from "@/components/FloatingCallButton";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-serif",
});

export const metadata: Metadata = {
  title: "Speech Pathologist Sydney | Shine and Speak",
  description: "Personalised speech therapy delivered to your home, school, or online. Bilingual English & Mandarin. NDIS, Medicare & private. Serving Inner West Sydney, NSW.",
  metadataBase: new URL("https://shineandspeak.com.au"),
  alternates: {
    canonical: "/",
    languages: {
      'en': 'https://shineandspeak.com.au/',
      'zh': 'https://shineandspeak.com.au/zh',
    },
  },
  openGraph: {
    title: "Speech Pathologist Sydney | Shine and Speak",
    description: "Personalised speech therapy delivered to your home, school, or online. Bilingual English & Mandarin. NDIS, Medicare & private.",
    url: "https://shineandspeak.com.au",
    siteName: "Shine and Speak",
    locale: "en_AU",
    type: "website",
    images: [
      {
        // REPLACE: Swap og-image.png for a proper 1200x630 social sharing card
        url: "https://shineandspeak.com.au/og-image.png",
        width: 1200,
        height: 630,
        alt: "Shine and Speak — Mobile Speech Pathology Sydney",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${lora.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Shine and Speak",
              "url": "https://shineandspeak.com.au",
              "logo": "https://shineandspeak.com.au/logo-horizontal.png",
              "sameAs": [
                // REPLACE: Add LinkedIn profile URL — e.g. "https://www.linkedin.com/in/shine-teoh/"
                "https://www.linkedin.com/in/shine-teoh/",
                // REPLACE: Add Facebook page URL — e.g. "https://www.facebook.com/shineandspeak"
                "https://www.facebook.com/shineandspeak",
                // REPLACE: Add Instagram URL — e.g. "https://www.instagram.com/shineandspeak"
                "https://www.instagram.com/shineandspeak"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+61-400-000-000",
                "email": "admin@shineandspeak.com.au",
                "contactType": "customer service"
              }
            })
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col font-sans text-foreground bg-background">
        <ScrollToTop />
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <FloatingWhatsApp />
        <FloatingCallButton />
      </body>
    </html>
  );
}
