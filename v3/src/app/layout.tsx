import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Speech Pathologist Sydney NSW | Shine and Speak — Mobile & Telehealth",
  description: "Personalised speech therapy delivered to your home, school, or online. Bilingual English & Mandarin. NDIS, Medicare & private. Serving Inner West Sydney.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Shine and Speak",
              "url": "https://shineandspeak.com.au",
              "logo": "https://shineandspeak.com.au/shine-and-speak-logo-horizontal-transparent.png",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+61-000-000-000",
                "contactType": "customer service"
              }
            })
          }}
        />
      </head>
      <body className={inter.className}>
        <header className="sticky top-0 z-50 bg-white shadow-md">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold text-navy-blue">
              <img src="/shine-and-speak-logo-horizontal-transparent.png" alt="Shine and Speak Logo" className="h-12" />
            </Link>
            <div className="hidden md:flex space-x-6 items-center">
              <a href="tel:+61000000000" className="text-navy-blue font-semibold">📞 0400 000 000</a>
              <Link href="/contact" className="bg-golden-amber text-white px-6 py-2 rounded-md font-bold hover:bg-yellow-600 transition">Book a Free Call</Link>
              <Link href="/refer-a-client" className="border-2 border-navy-blue text-navy-blue px-6 py-2 rounded-md font-bold hover:bg-navy-blue hover:text-white transition">Refer a Client</Link>
              <Link href="/zh" className="text-navy-blue font-semibold">EN/中文</Link>
            </div>
          </div>
          <nav className="bg-navy-blue text-white">
            <div className="container mx-auto px-4 py-2 flex space-x-6">
              <Link href="/paediatric-speech-therapy-sydney-nsw" className="hover:text-golden-amber transition">Services</Link>
              <Link href="/how-it-works" className="hover:text-golden-amber transition">How It Works</Link>
              <Link href="/ndis-speech-therapy-sydney-nsw" className="hover:text-golden-amber transition">Funding & Fees</Link>
              <Link href="/about" className="hover:text-golden-amber transition">About</Link>
              <Link href="/speech-pathologist-burwood-nsw" className="hover:text-golden-amber transition">Areas</Link>
              <Link href="/contact" className="hover:text-golden-amber transition">Contact</Link>
            </div>
          </nav>
        </header>

        {children}

        <footer className="bg-navy-blue text-white py-12">
          <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <img src="/shine-and-speak-logo-stacked-transparent.png" alt="Shine and Speak Logo" className="h-16 mb-4" />
              <p className="mb-4">Personalised speech therapy delivered to your home, school, or online.</p>
              <p>Written by Shine Teoh, Certified Practising Speech Pathologist</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-golden-amber">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link href="/about" className="hover:text-golden-amber transition">About Shine</Link></li>
                <li><Link href="/how-it-works" className="hover:text-golden-amber transition">How It Works</Link></li>
                <li><Link href="/fees" className="hover:text-golden-amber transition">Fees & Pricing</Link></li>
                <li><Link href="/contact" className="hover:text-golden-amber transition">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-golden-amber">Service Areas</h3>
              <ul className="space-y-2">
                <li><Link href="/speech-pathologist-burwood-nsw" className="hover:text-golden-amber transition">Burwood</Link></li>
                <li><Link href="/speech-pathologist-hurstville-nsw" className="hover:text-golden-amber transition">Hurstville</Link></li>
                <li><Link href="/speech-pathologist-strathfield-nsw" className="hover:text-golden-amber transition">Strathfield</Link></li>
                <li><Link href="/speech-pathologist-inner-west-sydney-nsw" className="hover:text-golden-amber transition">Inner West Sydney</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-golden-amber">Connect</h3>
              <div className="flex space-x-4 mb-4">
                <a href="#" className="text-white hover:text-golden-amber transition">LinkedIn</a>
                <a href="#" className="text-white hover:text-golden-amber transition">WhatsApp</a>
              </div>
              <div className="bg-white p-2 inline-block rounded">
                {/* WeChat QR Placeholder */}
                <div className="w-24 h-24 bg-gray-200 flex items-center justify-center text-navy-blue text-xs text-center">WeChat QR</div>
              </div>
            </div>
          </div>
          <div className="container mx-auto px-4 mt-8 pt-8 border-t border-blue-800 text-center text-sm">
            <p>&copy; 2026 Shine and Speak. All rights reserved. ABN: [PLACEHOLDER]</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
