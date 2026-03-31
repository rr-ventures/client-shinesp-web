import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: '悉尼語言治療師 | Shine and Speak — 上門與視像治療',
  description: '為您的孩子提供個人化的語言治療。上門、到校或視像服務。英文及中文（普通話）雙語。接受 NDIS、Medicare 及私人付費。服務悉尼內西區及周邊。',
  alternates: {
    canonical: 'https://www.shineandspeak.com.au/zh',
    languages: {
      en: 'https://www.shineandspeak.com.au/',
      zh: 'https://www.shineandspeak.com.au/zh',
    },
  },
  openGraph: {
    title: '悉尼語言治療師 | Shine and Speak — 上門與視像治療',
    description: '為您的孩子提供個人化的語言治療。上門、到校或視像服務。英文及中文（普通話）雙語。接受 NDIS、Medicare 及私人付費。服務悉尼內西區及周邊。',
    url: 'https://www.shineandspeak.com.au/zh',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

export default function ZhHomepage() {
  return (
    <main lang="zh">
      <section className="bg-[#F0F4F8] py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1B365D] leading-tight mb-6">
            幫助您的孩子自信地溝通
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            個人化的語言治療 — 提供上門、到校或視像服務。提供英文及中文（普通話）雙語服務。服務範圍包括悉尼內西區及周邊地區。
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            <Link href="/zh/contact" className="bg-[#E8A84C] text-[#1B365D] font-bold px-8 py-4 rounded-md hover:bg-gold-400 transition-colors text-lg">
              預約免費諮詢
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl font-bold text-[#1B365D] mb-6">中文服務內容即將推出</h2>
          <p className="text-lg text-gray-700 mb-8">
            我們正在建構完整的中文網站。如果您有任何疑問或希望預約，請隨時與我們聯絡。
          </p>
          <Link href="/" className="inline-flex items-center text-[#1B365D] font-bold hover:text-[#E8A84C] transition-colors">
            <ArrowRight className="w-5 h-5 mr-2 rotate-180" /> 返回英文首頁
          </Link>
        </div>
      </section>
    </main>
  );
}
