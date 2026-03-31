import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import FloatingButtons from "@/components/FloatingButtons";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.shineandspeak.com.au"),
  alternates: {
    canonical: "https://www.shineandspeak.com.au/zh",
    languages: {
      en: "https://www.shineandspeak.com.au/",
      zh: "https://www.shineandspeak.com.au/zh",
    },
  },
};

export default function ZhLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh" className={`${inter.variable} h-full`}>
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
