import type { Metadata } from "next";
import { Inter, Lora } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-serif",
});

export const metadata: Metadata = {
  title: "Speech Pathologist Sydney NSW | Shine and Speak — Mobile & Telehealth",
  description: "Personalised speech therapy delivered to your home, school, or online. Bilingual English & Mandarin. NDIS, Medicare & private. Serving Inner West Sydney.",
  metadataBase: new URL("https://shineandspeak.com.au"),
  alternates: {
    canonical: "/",
    languages: {
      'en': 'https://shineandspeak.com.au/',
      'zh': 'https://shineandspeak.com.au/zh',
    },
  },
  openGraph: {
    title: "Speech Pathologist Sydney NSW | Shine and Speak",
    description: "Personalised speech therapy delivered to your home, school, or online. Bilingual English & Mandarin.",
    url: "https://shineandspeak.com.au",
    siteName: "Shine and Speak",
    locale: "en_AU",
    type: "website",
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
              "logo": "https://shineandspeak.com.au/logo.png",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+61-400-000-000",
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
      </body>
    </html>
  );
}
