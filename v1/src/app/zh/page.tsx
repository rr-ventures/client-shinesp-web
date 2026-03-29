import Link from 'next/link';

export default function ZhPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "悉尼中文语言治疗服务",
            "provider": {
              "@type": "Organization",
              "name": "Shine and Speak"
            },
            "description": "提供英文及普通话双语语言治疗服务，悉尼上门、学校及远程服务",
            "areaServed": {
              "@type": "GeoCircle",
              "geoMidpoint": {
                "@type": "GeoCoordinates",
                "latitude": -33.9369,
                "longitude": 151.1539
              },
              "geoRadius": "30000"
            },
            "availableLanguage": ["Chinese", "English"]
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [{
              "@type": "ListItem",
              "position": 1,
              "name": "首页",
              "item": "https://shineandspeak.com.au/zh"
            }]
          })
        }}
      />

      {/* Breadcrumb */}
      <div className="bg-accent py-4 border-b border-gray-200">
        <div className="container-custom">
          <nav className="text-sm text-gray-600 flex items-center gap-2">
            <Link href="/" className="hover:text-primary">English</Link>
            <span>&gt;</span>
            <span className="text-primary font-medium">中文</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-accent pt-12 pb-16">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              悉尼华人语言治疗师
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              我们提供专业的儿童及成人言语治疗服务，可以上门、到校或通过网络进行治疗。我们用普通话和英语提供服务，确保评估准确、沟通顺畅。支持NDIS、Medicare及自费。
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/book" className="btn-secondary text-lg px-8 py-4">
                预约免费咨询通话
              </Link>
              <a href="tel:+61421608819" className="btn-outline text-lg px-8 py-4">
                📞 0421 608 819
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto space-y-10">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-4">我们能帮助哪些人？</h2>
              <p className="text-lg text-gray-700 mb-6">
                我们为有以下需求的儿童和成人提供言语治疗服务：
              </p>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>• 自闭症（ASD）</li>
                <li>• 语言发育迟缓</li>
                <li>• 注意力缺陷多动障碍（ADHD）</li>
                <li>• 发音困难</li>
                <li>• 口吃</li>
                <li>• 读写困难</li>
                <li>• 成人言语及沟通障碍</li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-primary mb-4">服务方式</h2>
              <p className="text-lg text-gray-700">
                我们提供上门服务（到您家）、学校/幼儿园上门，以及远程视频治疗。我们还可以协调学校和其他支持团队，确保治疗全面一致。
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-primary mb-4">费用与资助</h2>
              <p className="text-lg text-gray-700">
                我们接受NDIS（所有管理类型）、Medicare（CDPProgram）及私人自费。
                如需了解更多，请查看我们的<Link href="/fees" className="text-primary font-bold underline hover:text-secondary">收费说明页面</Link>。
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-primary mb-4">联系我们</h2>
              <p className="text-lg text-gray-700 mb-6">
                如有任何问题，欢迎致电或发送电子邮件。我们会在24小时内回复。
              </p>
              <div className="space-y-3 text-lg">
                <p>📞 <a href="tel:+61421608819" className="text-primary font-bold hover:text-secondary">0421 608 819</a></p>
                <p>✉️ <a href="mailto:admin@shineandspeak.com.au" className="text-primary font-bold hover:text-secondary">admin@shineandspeak.com.au</a></p>
              </div>
            </div>

            <div className="bg-primary text-white p-12 rounded-[2rem] text-center shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-[60px] -translate-y-1/2 translate-x-1/3"></div>
              <div className="relative z-10">
                <p className="text-2xl mb-8 font-light">准备好开始了吗？预约一个免费的电话咨询，了解我们如何帮助您的孩子。</p>
                <Link href="/book" className="btn-secondary text-lg px-10 py-4">
                  预约免费咨询通话 →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
