import Link from "next/link";

export const metadata = {
  title: "悉尼中文言语治疗师 | Shine and Speak — 上门与远程治疗",
  description: "提供悉尼上门、学校及远程的个性化言语治疗服务。中英双语。支持NDIS、Medicare和私人付费。服务悉尼内西区。",
};

export default function ChineseHomepage() {
  return (
    <main className="flex flex-col min-h-screen" lang="zh">
      <section className="bg-blue-50 py-20">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-bold text-navy-blue mb-6 leading-tight">
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
          <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-gray-300 flex items-center justify-center text-gray-500 text-center p-8">
              [Placeholder: Professional photo of Shine Teoh working with a child]
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-navy-blue mb-6">中文言语治疗服务</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-12">
            我们提供中英双语的言语病理学服务。这意味着我们能够更准确地评估您孩子真实的语言能力，与您的家庭进行更清晰的沟通，并提供尊重您文化和语言背景的治疗。
          </p>
          <Link href="/" className="inline-block border-2 border-navy-blue text-navy-blue px-8 py-3 rounded-md font-bold hover:bg-navy-blue hover:text-white transition">
            Back to English Homepage →
          </Link>
        </div>
      </section>
    </main>
  );
}
