import type { Metadata } from 'next';
import Link from 'next/link';
import { breadcrumbSchema, SITE_URL, PHONE_DISPLAY, EMAIL } from '@/lib/schema';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: {
    absolute: '言語治療服務 | Shine and Speak 言語治療',
  },
  description:
    'Shine and Speak 提供中英文雙語言語治療服務，服務悉尼內西區及全澳洲遠程視像服務。NDIS、Medicare 及私人付費。歡迎聯絡預約免費諮詢。',
  alternates: {
    canonical: '/zh',
    languages: {
      en: '/',
      zh: '/zh',
    },
  },
  openGraph: {
    title: '言語治療服務 | Shine and Speak',
    description:
      'Shine and Speak 提供中英文雙語言語治療服務，服務悉尼內西區及全澳洲。NDIS、Medicare 及私人付費。',
    url: '/zh',
    locale: 'zh_CN',
  },
};

export default function ZhHomePage() {
  return (
    <article>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', url: SITE_URL },
          { name: '中文頁面', url: `${SITE_URL}/zh` },
        ])}
      />

      {/* Hero */}
      <section className="bg-[#FAFAF8] py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-medium text-[#112A46] mb-6 leading-tight">
            幫助您的孩子自信地溝通
          </h1>
          <p className="text-lg text-gray-700 mb-8">
            Shine and Speak 提供個性化言語治療服務，可上門、到學校或網上進行。
            提供中英文雙語服務，服務悉尼內西區及全澳洲。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/book"
              className="bg-[#C89B66] text-[#112A46] text-center px-8 py-4 rounded-full font-bold text-lg hover:bg-[#b58956] transition"
            >
              {/* REPLACE: swap with Calendly URL */}
              預約免費諮詢
            </Link>
            <Link
              href="/"
              className="border-2 border-[#112A46] text-[#112A46] text-center px-8 py-4 rounded-full font-bold text-lg hover:bg-[#112A46] hover:text-white transition"
            >
              查看英文頁面 (English)
            </Link>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm font-semibold text-[#112A46]">
            <span>✓ 認証言語治療師 (CPSP)</span>
            <span>✓ NDIS 註冊服務提供商</span>
            <span>✓ Medicare 服務提供商</span>
          </div>
        </div>
      </section>

      {/* Why bilingual */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-serif font-medium text-[#112A46] mb-6 text-center">為什麼選擇雙語言語治療？</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            如果只以單一語言評估孩子，可能會低估其真實語言能力。使用雙語治療師進行評估，確保評估結果更準確，並且治療更適合您家庭的文化和語言背景。
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            我們提供英文及普通話（普通話）的言語治療及評估服務，適合家中說普通話但需要在英語環境學校接受治療的兒童。
          </p>
          <div className="text-center">
            <a
              href={`tel:0421608819`}
              className="inline-block bg-[#C89B66] text-[#112A46] px-8 py-4 rounded-full font-bold text-lg hover:bg-[#b58956] transition"
            >
              致電 {PHONE_DISPLAY} 查詢
            </a>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-serif font-medium text-[#112A46] text-center mb-12">我們的服務</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { zh: '自閉症及ASD', en: 'Autism & ASD', href: '/speech-therapy-autism-sydney-nsw' },
              { zh: '注意力障礙 (ADHD)', en: 'ADHD', href: '/speech-therapy-adhd-sydney-nsw' },
              { zh: '語言發展遲緩', en: 'Language Delay', href: '/speech-therapy-language-delay-sydney-nsw' },
              { zh: '發音問題', en: 'Speech Sounds', href: '/speech-therapy-speech-sounds-sydney-nsw' },
              { zh: '口吃及流利度', en: 'Stuttering', href: '/speech-therapy-stuttering-sydney-nsw' },
              { zh: '讀寫障礙', en: 'Literacy', href: '/speech-therapy-literacy-sydney-nsw' },
            ].map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="block p-6 border border-gray-200 rounded-[24px] hover:shadow-md transition bg-white"
              >
                <h3 className="text-lg font-serif font-medium text-[#112A46] mb-1">{s.zh}</h3>
                <p className="text-gray-500 text-sm">{s.en}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 bg-[#112A46] text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">聯絡我們</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-6 mb-8">
            <a href="tel:0421608819" className="text-xl font-bold hover:underline">📞 {PHONE_DISPLAY}</a>
            <a href={`mailto:${EMAIL}`} className="text-xl font-bold hover:underline">✉️ {EMAIL}</a>
          </div>
          <a
            href="https://wa.me/61421608819"
            className="inline-block bg-green-500 text-white px-8 py-3 rounded-full font-bold hover:bg-green-600 transition mb-4"
          >
            💬 WhatsApp 聯絡
          </a>
          <p className="text-sm text-gray-300 mt-4">掃描 WeChat QR 碼 — 見頁面底部</p>
        </div>
      </section>

      <div className="bg-gray-50 py-4 border-t border-gray-100">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-gray-500">
            <Link href="/about" className="underline hover:text-[#112A46]">由認証執業言語治療師撰寫</Link>
          </p>
        </div>
      </div>
    </article>
  );
}
