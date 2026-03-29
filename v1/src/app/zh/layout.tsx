import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Playfair_Display } from "next/font/google";
import "../globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import FloatingCallButton from "@/components/FloatingCallButton";

const sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const serif = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
});

export const metadata: Metadata = {
  title: "悉尼华人语言治疗师 | Shine and Speak",
  description:
    "提供上门及远程语言治疗服务。精通中英双语（普通话）。支持NDIS及Medicare。服务悉尼内西区及周边地区。欢迎预约免费咨询通话。",
  metadataBase: new URL("https://shineandspeak.com.au"),
  alternates: {
    canonical: "/zh",
    languages: {
      en: "https://shineandspeak.com.au/",
      zh: "https://shineandspeak.com.au/zh",
    },
  },
  openGraph: {
    title: "悉尼华人语言治疗师 | Shine and Speak",
    description:
      "提供上门及远程语言治疗服务。精通中英双语（普通话）。支持NDIS及Medicare。服务悉尼内西区及周边地区。",
    url: "https://shineandspeak.com.au/zh",
    siteName: "Shine and Speak",
    locale: "zh_CN",
    type: "website",
    images: [
      {
        url: "https://shineandspeak.com.au/og-image.png",
        width: 1200,
        height: 630,
        alt: "Shine and Speak — 悉尼华人语言治疗师",
      },
    ],
  },
};

export default function ZhLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh" className={`${sans.variable} ${serif.variable} scroll-smooth`}>
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
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+61-400-000-000",
                "email": "admin@shineandspeak.com.au",
                "contactType": "customer service",
              },
            }),
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
