import type { Metadata } from "next";
import Link from "next/link";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "悉尼中文言语治疗师 | Shine and Speak — 上门与远程治疗",
  description:
    "提供悉尼上门、学校及远程的个性化言语治疗服务。中英双语。支持NDIS、Medicare和私人付费。服务悉尼内西区。欢迎预约免费咨询。",
  alternates: {
    canonical: "https://shineandspeak.com.au/zh",
    languages: {
      en: "https://shineandspeak.com.au/",
      zh: "https://shineandspeak.com.au/zh",
    },
  },
  openGraph: {
    title: "悉尼中文言语治疗师 | Shine and Speak",
    description:
      "提供悉尼上门、学校及远程的个性化言语治疗服务。中英双语。支持NDIS、Medicare和私人付费。服务悉尼内西区。",
    url: "https://shineandspeak.com.au/zh",
    locale: "zh_CN",
  },
};

export default function ChineseHomepage() {
  return (
    <main className="flex flex-col min-h-screen">
      <BreadcrumbSchema
        items={[
          { name: "首页", href: "/zh" },
        ]}
      />

      {/* Hero */}
      <section className="bg-blue-50 py-20">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-navy-blue mb-6 leading-tight">
              帮助您的孩子自信沟通
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              个性化言语治疗 — 提供上门、学校或远程服务。提供中英双语服务。服务悉尼内西区及周边地区。
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <Link href="/contact" className="bg-golden-amber text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-yellow-600 transition shadow-lg">
                预约免费咨询
              </Link>
            </div>
            <div className="flex flex-wrap gap-4 text-sm font-semibold text-navy-blue">
              <span>✓ 澳洲认证言语治疗师 (CPSP)</span>
              <span>✓ NDIS 注册服务提供商</span>
              <span>✓ Medicare 医疗保险提供商</span>
            </div>
          </div>
          <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl bg-gray-200 flex items-center justify-center text-gray-500 text-center p-8">
            {/* REPLACE: Professional photo of Shine Teoh working with a child */}
            <span className="text-sm text-gray-400">[图片：治疗师与儿童工作的专业照片]</span>
          </div>
        </div>
      </section>

      {/* Services overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-blue mb-6">中文言语治疗服务</h2>
          <p className="text-xl text-gray-700 mb-8">
            我们提供中英双语的言语病理学服务。这意味着我们能够更准确地评估您孩子真实的语言能力，与您的家庭进行更清晰的沟通，并提供尊重您文化和语言背景的治疗。
          </p>
          <p className="text-gray-700 mb-8">
            对孩子进行单语言评估可能会低估其真实能力。与双语治疗师合作确保不遗漏任何问题。
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="bg-golden-amber text-white px-8 py-3 rounded-md font-bold hover:bg-yellow-600 transition">
              预约免费咨询
            </Link>
            <Link href="/" className="border-2 border-navy-blue text-navy-blue px-8 py-3 rounded-md font-bold hover:bg-navy-blue hover:text-white transition">
              查看英文版网站 →
            </Link>
          </div>
        </div>
      </section>

      {/* Contact info */}
      <section className="py-12 bg-navy-blue text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">联系我们</h2>
          <div className="flex flex-wrap justify-center gap-8 text-lg">
            <a href="tel:+61421608819" className="hover:text-golden-amber transition">📞 0421 608 819</a>
            <a href="mailto:admin@shineandspeak.com.au" className="hover:text-golden-amber transition">✉️ admin@shineandspeak.com.au</a>
            <a href="https://wa.me/61421608819" target="_blank" rel="noopener noreferrer" className="hover:text-golden-amber transition">💬 WhatsApp</a>
          </div>
        </div>
      </section>
    </main>
  );
}
