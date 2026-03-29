import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import { headers } from 'next/headers';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import FloatingButtons from '@/components/FloatingButtons';
import JsonLd from '@/components/JsonLd';
import { organizationSchema, SITE_URL } from '@/lib/schema';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Speech Pathologist Sydney NSW | Shine and Speak',
    template: '%s | Shine and Speak',
  },
  description:
    'Personalised speech therapy delivered to your home, school, or online. Bilingual English & Mandarin. NDIS, Medicare & private. Serving Inner West Sydney.',
  openGraph: {
    siteName: 'Shine and Speak',
    locale: 'en_AU',
    type: 'website',
    images: [
      {
        url: '/shine-and-speak-logo-horizontal-transparent.png',
        width: 1200,
        height: 630,
        alt: 'Shine and Speak — Mobile Speech Pathologist Sydney',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const headersList = await headers();
  const pathname = headersList.get('x-pathname') ?? '';
  const lang = pathname.startsWith('/zh') ? 'zh' : 'en';

  return (
    <html lang={lang}>
      <body className={`${inter.variable} ${playfair.variable} font-sans min-h-screen flex flex-col antialiased bg-[#ffffff] text-slate-800`}>
        <JsonLd data={organizationSchema} />
        <ScrollToTop />
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <FloatingButtons />
      </body>
    </html>
  );
}
