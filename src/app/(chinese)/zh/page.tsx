import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import { Car, Globe, Handshake, BookOpen, Puzzle, Zap, MessageCircle, Mic, Waves, BookText, Home as HomeIcon, School, Monitor, MapPin, Phone, Mail } from "lucide-react";

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

      {/* Section 1: HERO */}
      <section className="relative min-h-[65vh] md:min-h-[70vh] flex items-center py-20 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/shine_with_schoolkids.png"
            alt="Shine Yin Teoh, speech pathologist, working with children in a school setting"
            fill
            className="object-cover saturate-[0.9] brightness-[0.95]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A3F5C]/60 via-[#1A3F5C]/35 to-[#1A3F5C]/10"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold text-white mb-6 leading-[1.15] text-balance">
              悉尼言语治疗师
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-10 leading-relaxed font-light drop-shadow-md">
              帮助您或您的孩子自信沟通。个性化言语治疗 — 提供上门、学校或远程服务。提供中英双语服务。服务悉尼内西区及周边地区。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link href="/contact" className="btn-primary text-center text-lg py-4 shadow-lg hover:-translate-y-1 transition-all duration-300">
                预约免费咨询
              </Link>
              <Link href="/refer-a-client" className="text-center text-lg py-4 px-8 rounded-full font-semibold border-2 border-white text-white bg-white/15 backdrop-blur-sm hover:bg-white hover:text-navy-blue shadow-lg hover:-translate-y-1 transition-all duration-300">
                推荐客户
              </Link>
            </div>
            <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium text-white/90">
              <span className="flex items-center gap-2"><span className="w-5 h-5 rounded-full bg-sage-green flex items-center justify-center text-navy-blue text-xs">✓</span> 澳洲认证言语治疗师 (CPSP)</span>
              <span className="flex items-center gap-2"><span className="w-5 h-5 rounded-full bg-sage-green flex items-center justify-center text-navy-blue text-xs">✓</span> NDIS 注册服务提供商</span>
              <span className="flex items-center gap-2"><span className="w-5 h-5 rounded-full bg-sage-green flex items-center justify-center text-navy-blue text-xs">✓</span> Medicare 医疗保险提供商</span>
            </div>
          </div>
        </div>
      </section>

      {/* OUR SPEECH THERAPY SERVICES */}
      <section className="py-24 bg-warm-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <p className="text-trust-teal font-bold text-sm tracking-widest uppercase mb-3">我们的服务</p>
            <p className="text-3xl md:text-4xl font-bold text-navy-blue mb-4">全面服务</p>
            <p className="text-stone text-lg max-w-2xl mx-auto">为悉尼内西区及周边地区的儿童和成人提供全面的言语病理学服务。</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: '悉尼儿童言语治疗', text: '我为患有自闭症、多动症、发育迟缓、语言障碍和发音困难的儿童提供个性化的言语治疗。治疗根据您孩子的个人优势和目标量身定制，在熟悉的环境中进行——家庭、学校或幼儿园。', href: '/paediatric-speech-therapy-sydney-nsw', linkText: '探索儿童言语治疗服务' },
              { title: '悉尼成人言语治疗', text: 'Shine and Speak 的成人言语治疗支持患有失语症、认知沟通困难、流畅性障碍以及中风、脑损伤或神经事件后遇到挑战的人群。可提供上门服务或全澳范围内的远程治疗。', href: '/adult-speech-therapy-sydney-nsw', linkText: '了解悉尼成人言语治疗' },
              { title: '上门言语治疗', text: '上门治疗意味着我来到您身边——您的家、您孩子的学校、幼儿园或日托中心。研究表明，在熟悉的环境中学习沟通技巧更有效。无需前往诊所。我直接与家庭和教育工作者协调。', href: '/mobile-speech-therapy-sydney-nsw', linkText: '探索上门言语治疗的运作方式' },
              { title: '远程言语治疗', text: '远程言语治疗适用于新南威尔士州和全澳各地的客户。在线课程对许多情况都有效，并为日程繁忙的家庭或偏远地区的家庭提供灵活性。在家连接即可进行完整的治疗课程。', href: '/telehealth-speech-therapy-sydney-nsw', linkText: '了解远程言语治疗选项' },
              { title: '学校言语治疗', text: '我访问悉尼内西区的学校、幼儿园和早期教育中心，在您孩子的学习环境中提供治疗。在现场工作允许与教师和支持人员直接协调，确保策略全天一致应用。', href: '/school-based-speech-therapy-sydney-nsw', linkText: '了解学校言语治疗服务' },
              { title: 'NDIS 言语治疗', text: null, href: '/ndis-speech-therapy-sydney-nsw', linkText: '获取 NDIS 资助的言语治疗', isNdis: true },
            ].map(({ title, text, href, linkText, isNdis }, i) => (
              <div key={href} className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100/50 flex flex-col group hover:-translate-y-1">
                <div className="w-12 h-1 bg-trust-teal rounded-full mb-6 opacity-60 group-hover:opacity-100 transition-opacity"></div>
                <h2 className="text-xl font-bold text-navy-blue mb-4 group-hover:text-trust-teal transition-colors duration-200">{title}</h2>
                {isNdis ? (
                  <p className="text-stone leading-relaxed mb-6 text-sm flex-grow">
                    作为注册的 NDIS 提供商，我接受所有计划管理类型——自我管理、计划管理和 NDIA 管理。针对语言迟缓、自闭症、AAC 和沟通困难的言语治疗可以通过 <a href="https://www.ndis.gov.au" target="_blank" rel="noopener noreferrer" className="text-navy-blue font-semibold underline underline-offset-4 hover:text-trust-teal transition-colors">国家残疾保险计划</a> 获得资助。我会在 24 小时内回复。
                  </p>
                ) : (
                  <p className="text-stone leading-relaxed mb-6 text-sm flex-grow">{text}</p>
                )}
                <Link href={href} className="text-trust-teal font-semibold hover:underline underline-offset-4 inline-flex items-center gap-1 text-sm mt-auto group-hover:translate-x-1 transition-transform">
                  {linkText} <span className="text-lg">→</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF */}
      <section className="py-24 bg-warm-white">
        <div className="container mx-auto px-4 text-center max-w-6xl">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy-blue mb-4">家庭评价</h2>
            <div className="w-24 h-1 bg-trust-teal mx-auto rounded-full"></div>
          </div>
          <div className="max-w-4xl mx-auto premium-card p-12 shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <p className="text-xl text-stone italic mb-10 leading-relaxed font-serif">&ldquo;评价即将推出 — Shine and Speak 是一家新诊所。在此期间，以下是支持我们工作的资质和培训。&rdquo;</p>
            <div className="flex flex-wrap justify-center gap-4 text-sm font-medium text-navy-blue">
              <span className="bg-sage-green/50 border border-sage-green px-5 py-2.5 rounded-full flex items-center gap-2 hover:-translate-y-1 transition-transform duration-300"><span className="text-trust-teal">✦</span> 认证执业言语治疗师</span>
              <span className="bg-sage-green/50 border border-sage-green px-5 py-2.5 rounded-full flex items-center gap-2 hover:-translate-y-1 transition-transform duration-300"><span className="text-trust-teal">✦</span> NDIS 注册提供商</span>
              <span className="bg-sage-green/50 border border-sage-green px-5 py-2.5 rounded-full flex items-center gap-2 hover:-translate-y-1 transition-transform duration-300"><span className="text-trust-teal">✦</span> Medicare 提供商</span>
              <span className="bg-sage-green/50 border border-sage-green px-5 py-2.5 rounded-full flex items-center gap-2 hover:-translate-y-1 transition-transform duration-300"><span className="text-trust-teal">✦</span> 中英双语</span>
            </div>
          </div>
        </div>
      </section>

      {/* DIFFERENTIATORS */}
      <section className="py-24 bg-white relative">
        <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none"></div>
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy-blue mb-4">为什么家庭选择 Shine and Speak</h2>
            <div className="w-24 h-1 bg-trust-teal mx-auto rounded-full"></div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-2xl p-10 text-center group shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100/50 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-soft-blue to-sage-green transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              <div className="w-20 h-20 mx-auto bg-soft-blue/50 rounded-full flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 shadow-sm border border-soft-blue">
                <Car className="w-8 h-8 text-navy-blue" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-navy-blue mb-4">我们来到您身边</h3>
              <p className="text-stone text-sm leading-relaxed">无需前往诊所。我前往您的家、学校或日托中心——无论您的孩子在哪里最舒适、最有可能茁壮成长。</p>
            </div>
            <div className="bg-white rounded-2xl p-10 text-center group shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100/50 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-soft-blue to-sage-green transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              <div className="w-20 h-20 mx-auto bg-soft-blue/50 rounded-full flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 shadow-sm border border-soft-blue">
                <Globe className="w-8 h-8 text-navy-blue" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-navy-blue mb-4">双语 — 英语和普通话</h3>
              <p className="text-stone text-sm leading-relaxed">我提供英语和普通话的言语治疗和评估，确保准确评估您孩子真实的语言能力。</p>
            </div>
            <div className="bg-white rounded-2xl p-10 text-center group shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100/50 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-soft-blue to-sage-green transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              <div className="w-20 h-20 mx-auto bg-soft-blue/50 rounded-full flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 shadow-sm border border-soft-blue">
                <Handshake className="w-8 h-8 text-navy-blue" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-navy-blue mb-4">NDIS, Medicare & 私人</h3>
              <p className="text-stone text-sm leading-relaxed">注册 NDIS 提供商（所有管理类型）、Medicare 提供商和私人客户。 <Link href="/ndis-speech-therapy-sydney-nsw" className="text-trust-teal font-semibold hover:underline underline-offset-2">了解更多关于言语治疗资金选项的信息</Link>。</p>
            </div>
            <div className="bg-white rounded-2xl p-10 text-center group shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100/50 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-soft-blue to-sage-green transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              <div className="w-20 h-20 mx-auto bg-soft-blue/50 rounded-full flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 shadow-sm border border-soft-blue">
                <BookOpen className="w-8 h-8 text-navy-blue" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-navy-blue mb-4">基于证据，以目标为导向</h3>
              <p className="text-stone text-sm leading-relaxed">每个治疗计划都立足于当前的证据，并专注于在您孩子的日常生活中产生真正影响的实际目标。</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: MOBILE ADVANTAGE */}
      <section className="py-24 bg-navy-blue text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">在您孩子最舒适的地方进行治疗</h2>
            <p className="text-lg md:text-xl max-w-3xl mx-auto text-blue-100/90 leading-relaxed font-light">
              研究表明，儿童在日常环境中学习沟通技巧效果最好。这就是为什么我来到您身边——无论是您的家、您孩子的学校、幼儿园还是日托中心。治疗发生在您孩子自然沟通的地方，这意味着技能更容易转移到日常生活中。
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/5 border border-white/10 backdrop-blur-sm p-10 rounded-2xl hover:bg-white/10 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1">
              <h3 className="text-xl font-bold mb-4 text-white flex items-center gap-4">
                <div className="bg-white/10 p-3 rounded-xl"><HomeIcon className="w-6 h-6 text-white" strokeWidth={1.5} /></div> 家庭课程
              </h3>
              <p className="text-blue-50/80 leading-relaxed">在您舒适的家中进行治疗。我带上所需的一切。您的家庭无需承受旅行压力。</p>
            </div>
            <div className="bg-white/5 border border-white/10 backdrop-blur-sm p-10 rounded-2xl hover:bg-white/10 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1">
              <h3 className="text-xl font-bold mb-4 text-white flex items-center gap-4">
                <div className="bg-white/10 p-3 rounded-xl"><School className="w-6 h-6 text-white" strokeWidth={1.5} /></div> 学校和幼儿园访问
              </h3>
              <p className="text-blue-50/80 leading-relaxed">在您孩子的学习环境中与他们一起工作，并可选择直接与他们的老师协调。</p>
            </div>
            <div className="bg-white/5 border border-white/10 backdrop-blur-sm p-10 rounded-2xl hover:bg-white/10 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1">
              <h3 className="text-xl font-bold mb-4 text-white flex items-center gap-4">
                <div className="bg-white/10 p-3 rounded-xl"><Monitor className="w-6 h-6 text-white" strokeWidth={1.5} /></div> 覆盖全澳的远程医疗
              </h3>
              <p className="text-blue-50/80 leading-relaxed">从任何地方进行 <Link href="/telehealth-speech-therapy-sydney-nsw" className="underline underline-offset-4 hover:text-white transition-colors">灵活的在线课程</Link>。非常适合偏远地区的家庭、日程繁忙的家庭，或者无法亲自见面的情况。</p>
            </div>
            <div className="bg-white/5 border border-white/10 backdrop-blur-sm p-10 rounded-2xl hover:bg-white/10 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1">
              <h3 className="text-xl font-bold mb-4 text-white flex items-center gap-4">
                <div className="bg-white/10 p-3 rounded-xl"><MapPin className="w-6 h-6 text-white" strokeWidth={1.5} /></div> 悉尼内西区及周边
              </h3>
              <p className="text-blue-50/80 leading-relaxed">我在 Arncliffe 周边 30 分钟车程内出诊，包括 <Link href="/speech-pathologist-burwood-nsw" className="underline underline-offset-4 hover:text-white transition-colors">Burwood 及附近郊区</Link>。也提供大悉尼地区的一次性评估服务。</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: CONDITION CARDS */}
      <section className="py-24 bg-white relative">
        <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none"></div>
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy-blue mb-4">我能如何提供帮助</h2>
            <div className="w-24 h-1 bg-trust-teal mx-auto rounded-full"></div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <Link href="/speech-therapy-autism-sydney-nsw" className="bg-white border border-gray-100 rounded-2xl p-10 group flex flex-col h-full shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-sage-green transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              <div className="w-16 h-16 bg-sage-green/20 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 text-navy-blue">
                <Puzzle className="w-8 h-8" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-navy-blue mb-4 group-hover:text-trust-teal transition-colors">自闭症 & ASD</h3>
              <p className="text-stone text-sm leading-relaxed flex-grow">支持自闭症谱系儿童的沟通、社交技能和语言发展。</p>
              <span className="text-trust-teal font-semibold text-sm mt-8 flex items-center gap-2 group-hover:translate-x-2 transition-transform uppercase tracking-wide">了解更多 <span className="text-lg">→</span></span>
            </Link>
            <Link href="/speech-therapy-adhd-sydney-nsw" className="bg-white border border-gray-100 rounded-2xl p-10 group flex flex-col h-full shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-sage-green transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              <div className="w-16 h-16 bg-sage-green/20 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 text-navy-blue">
                <Zap className="w-8 h-8" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-navy-blue mb-4 group-hover:text-trust-teal transition-colors">多动症 & 注意力</h3>
              <p className="text-stone text-sm leading-relaxed flex-grow">帮助患有多动症的儿童发展注意力、倾听技巧和社交沟通策略。</p>
              <span className="text-trust-teal font-semibold text-sm mt-8 flex items-center gap-2 group-hover:translate-x-2 transition-transform uppercase tracking-wide">了解更多 <span className="text-lg">→</span></span>
            </Link>
            <Link href="/speech-therapy-language-delay-sydney-nsw" className="bg-white border border-gray-100 rounded-2xl p-10 group flex flex-col h-full shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-sage-green transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              <div className="w-16 h-16 bg-sage-green/20 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 text-navy-blue">
                <MessageCircle className="w-8 h-8" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-navy-blue mb-4 group-hover:text-trust-teal transition-colors">语言迟缓</h3>
              <p className="text-stone text-sm leading-relaxed flex-grow">培养接受和表达语言能力，让您的孩子能够理解并被理解。</p>
              <span className="text-trust-teal font-semibold text-sm mt-8 flex items-center gap-2 group-hover:translate-x-2 transition-transform uppercase tracking-wide">了解更多 <span className="text-lg">→</span></span>
            </Link>
            <Link href="/speech-therapy-speech-sounds-sydney-nsw" className="bg-white border border-gray-100 rounded-2xl p-10 group flex flex-col h-full shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-sage-green transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              <div className="w-16 h-16 bg-sage-green/20 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 text-navy-blue">
                <Mic className="w-8 h-8" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-navy-blue mb-4 group-hover:text-trust-teal transition-colors">发音问题</h3>
              <p className="text-stone text-sm leading-relaxed flex-grow">帮助儿童清晰发音，以便家人、朋友和老师能够理解他们。</p>
              <span className="text-trust-teal font-semibold text-sm mt-8 flex items-center gap-2 group-hover:translate-x-2 transition-transform uppercase tracking-wide">了解更多 <span className="text-lg">→</span></span>
            </Link>
            <Link href="/speech-therapy-stuttering-sydney-nsw" className="bg-white border border-gray-100 rounded-2xl p-10 group flex flex-col h-full shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-sage-green transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              <div className="w-16 h-16 bg-sage-green/20 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 text-navy-blue">
                <Waves className="w-8 h-8" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-navy-blue mb-4 group-hover:text-trust-teal transition-colors">口吃 & 流畅性</h3>
              <p className="text-stone text-sm leading-relaxed flex-grow">为经历口吃或其他流畅性困难的儿童和成人提供基于证据的支持。</p>
              <span className="text-trust-teal font-semibold text-sm mt-8 flex items-center gap-2 group-hover:translate-x-2 transition-transform uppercase tracking-wide">了解更多 <span className="text-lg">→</span></span>
            </Link>
            <Link href="/speech-therapy-literacy-sydney-nsw" className="bg-white border border-gray-100 rounded-2xl p-10 group flex flex-col h-full shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-sage-green transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              <div className="w-16 h-16 bg-sage-green/20 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 text-navy-blue">
                <BookText className="w-8 h-8" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-navy-blue mb-4 group-hover:text-trust-teal transition-colors">读写能力</h3>
              <p className="text-stone text-sm leading-relaxed flex-grow">为在读写方面遇到困难的儿童提供阅读、写作和拼写发展支持。</p>
              <span className="text-trust-teal font-semibold text-sm mt-8 flex items-center gap-2 group-hover:translate-x-2 transition-transform uppercase tracking-wide">了解更多 <span className="text-lg">→</span></span>
            </Link>
          </div>
          <div className="bg-soft-blue rounded-2xl p-8 md:p-10 text-center max-w-4xl mx-auto border border-blue-100">
            <p className="text-stone leading-relaxed text-lg">
              我还支持患有发育迟缓、智力障碍、社交沟通困难、AAC 和多模式沟通的儿童和成人，以及从中风、脑损伤和神经系统疾病中恢复的成人。{" "}
              <Link href="/paediatric-speech-therapy-sydney-nsw" className="text-navy-blue font-bold hover:text-trust-teal transition-colors underline underline-offset-4">探索所有儿科服务</Link>{" "}
              或了解{" "}
              <Link href="/adult-speech-therapy-sydney-nsw" className="text-navy-blue font-bold hover:text-trust-teal transition-colors underline underline-offset-4">成人言语治疗选项</Link>。
            </p>
          </div>
        </div>
      </section>

      {/* LEAD CAPTURE FORM */}
      <section className="py-24 bg-navy-blue">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">预约免费咨询</h2>
          <p className="text-blue-100/80 text-lg mb-10 leading-relaxed">告诉我们关于客户的情况，我们将在 24 小时内与您联系。</p>
          <form action="/thank-you" method="GET" className="bg-white rounded-[2rem] p-10 shadow-2xl text-left space-y-6">
            <div>
              <label htmlFor="hp-name" className="block text-sm font-bold text-navy-blue mb-2">您的姓名</label>
              <input type="text" id="hp-name" name="name" required className="w-full border border-gray-200 rounded-xl px-4 py-3 text-charcoal focus:outline-none focus:ring-2 focus:ring-golden-amber focus:border-transparent" placeholder="Jane Smith" />
            </div>
            <div>
              <label htmlFor="hp-phone" className="block text-sm font-bold text-navy-blue mb-2">电话号码</label>
              <input type="tel" id="hp-phone" name="phone" required className="w-full border border-gray-200 rounded-xl px-4 py-3 text-charcoal focus:outline-none focus:ring-2 focus:ring-golden-amber focus:border-transparent" placeholder="04XX XXX XXX" />
            </div>
            <div>
              <label htmlFor="hp-email" className="block text-sm font-bold text-navy-blue mb-2">电子邮件</label>
              <input type="email" id="hp-email" name="email" required className="w-full border border-gray-200 rounded-xl px-4 py-3 text-charcoal focus:outline-none focus:ring-2 focus:ring-golden-amber focus:border-transparent" placeholder="you@example.com" />
            </div>
            <div>
              <label htmlFor="hp-age" className="block text-sm font-bold text-navy-blue mb-2">客户年龄</label>
              <input type="text" id="hp-age" name="clientAge" required className="w-full border border-gray-200 rounded-xl px-4 py-3 text-charcoal focus:outline-none focus:ring-2 focus:ring-golden-amber focus:border-transparent" placeholder="例如：4岁，或成人" />
            </div>
            <div>
              <label htmlFor="hp-help" className="block text-sm font-bold text-navy-blue mb-2">您希望在哪些方面获得帮助？</label>
              <select id="hp-help" name="helpWith" required className="w-full border border-gray-200 rounded-xl px-4 py-3 text-charcoal focus:outline-none focus:ring-2 focus:ring-golden-amber focus:border-transparent">
                <option value="">请选择一个领域...</option>
                <option value="Speech Sounds">发音</option>
                <option value="Language">语言</option>
                <option value="Stuttering">口吃</option>
                <option value="Literacy">读写能力</option>
                <option value="Autism">自闭症</option>
                <option value="ADHD">多动症</option>
                <option value="Developmental Delay">发育迟缓</option>
                <option value="Intellectual Disability">智力障碍</option>
                <option value="Social Communication">社交沟通</option>
                <option value="AAC">AAC (辅助沟通)</option>
                <option value="Adult Speech">成人言语</option>
                <option value="Not sure">不确定</option>
                <option value="Other">其他</option>
              </select>
            </div>
            <button type="submit" className="w-full bg-golden-amber text-white font-bold py-4 rounded-xl text-lg hover:bg-[#7A5800] transition-all duration-300 shadow-lg hover:-translate-y-1">
              预约免费咨询 →
            </button>
          </form>
          <p className="text-blue-100/90 text-sm mt-6">无任何义务。我们将在 24 小时内回复。</p>
        </div>
      </section>

      {/* Section 6: HOW IT WORKS */}
      <section className="py-24 bg-warm-white">
        <div className="container mx-auto px-4 text-center max-w-6xl">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy-blue mb-4">开始很简单</h2>
            <div className="w-24 h-1 bg-trust-teal mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto mb-16 relative">
            <div className="hidden md:block absolute top-10 left-[20%] right-[20%] h-0.5 bg-gray-200 -z-10"></div>
            <div className="relative z-10 group hover:-translate-y-2 transition-transform duration-300">
              <div className="w-20 h-20 bg-white border-4 border-sage-green text-navy-blue rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-8 shadow-md group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">1</div>
              <h3 className="text-xl font-bold text-navy-blue mb-4">预约免费通话</h3>
              <p className="text-stone text-sm leading-relaxed">我们将简短地讨论您的需求，回答您的问题，并确定我是否合适。没有义务，没有压力。</p>
            </div>
            <div className="relative z-10 group hover:-translate-y-2 transition-transform duration-300">
              <div className="w-20 h-20 bg-white border-4 border-sage-green text-navy-blue rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-8 shadow-md group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">2</div>
              <h3 className="text-xl font-bold text-navy-blue mb-4">评估</h3>
              <p className="text-stone text-sm leading-relaxed">我将完成一项彻底的评估——在您的家、学校或在线——以了解优势、挑战和目标。</p>
            </div>
            <div className="relative z-10 group hover:-translate-y-2 transition-transform duration-300">
              <div className="w-20 h-20 bg-white border-4 border-sage-green text-navy-blue rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-8 shadow-md group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">3</div>
              <h3 className="text-xl font-bold text-navy-blue mb-4">您的治疗计划</h3>
              <p className="text-stone text-sm leading-relaxed">您将收到一份专注于实际、现实生活进展的个性化治疗计划。我将与您、老师和其他专业人士密切合作。</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact" className="btn-primary text-lg py-4 px-10 inline-flex items-center justify-center gap-2 shadow-lg hover:-translate-y-1 transition-all duration-300">
              预约免费咨询 <span>→</span>
            </Link>
            <Link href="/refer-a-client" className="btn-secondary text-lg py-4 px-10 inline-flex items-center justify-center gap-2 border-navy-blue text-navy-blue hover:bg-navy-blue hover:text-white shadow-lg hover:-translate-y-1 transition-all duration-300">
              推荐客户 <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Section 8: MEET THE THERAPIST */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center max-w-7xl">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy-blue mb-8">认识 Shine Yin Teoh</h2>
            <p className="text-lg text-stone mb-6 leading-relaxed">
              您好，我是 Shine Yin Teoh — 一名认证执业言语治疗师。我热衷于提供高质量、个性化的言语治疗，在日常生活中产生真正的影响。
            </p>
            <p className="text-lg text-stone mb-8 leading-relaxed">
              我专门与有各种沟通需求的儿童和成人合作。我会说英语和普通话，并致力于为多元化家庭提供具有文化响应性的服务。
            </p>
            <div className="bg-warm-white p-8 rounded-2xl mb-10 border border-gray-100">
              <ul className="space-y-4 text-charcoal font-medium">
                <li className="flex items-start gap-3">
                  <span className="text-trust-teal mt-0.5">✦</span>
                  <span>言语病理学学士</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-trust-teal mt-0.5">✦</span>
                  <span><a href="https://www.speechpathologyaustralia.org.au" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-trust-teal transition-colors">澳大利亚言语病理学协会认证执业会员</a> (CPSP)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-trust-teal mt-0.5">✦</span>
                  <span>NDIS 注册提供商</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-trust-teal mt-0.5">✦</span>
                  <span>Medicare 注册提供商</span>
                </li>
              </ul>
            </div>
            <Link href="/about" className="text-navy-blue font-bold hover:text-trust-teal transition-colors text-lg inline-flex items-center gap-2 group">
              阅读更多关于我的方法和资质 <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>
          <div className="order-1 lg:order-2">
            <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden premium-shadow group">
              <div className="absolute inset-0 bg-navy-blue/5 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
              <Image
                src="/shine-headshot-1200x1200.webp"
                alt="Shine Yin Teoh 的专业头像"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 10: FOR SUPPORT COORDINATORS */}
      <section className="py-24 bg-navy-blue text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-900/20 blur-3xl -z-10 rounded-full"></div>
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center max-w-7xl">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">您是支持协调员吗？</h2>
            <p className="text-lg text-blue-100/90 mb-8 leading-relaxed font-light">
              我与 NDIS 支持协调员密切合作，提供及时、高质量的言语治疗，并提供清晰的沟通和详细的报告。我了解转介流程，并为您提供便利。
            </p>
            <ul className="space-y-4 mb-10 text-white/90 font-medium">
              <li className="flex items-start gap-3">
                <span className="text-trust-teal mt-1">✓</span>
                <span>快速响应转介 — 我的目标是在 24 小时内回复</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-trust-teal mt-1">✓</span>
                <span>详细的 <Link href="/speech-therapy-reports-sydney-nsw" className="underline underline-offset-4 hover:text-trust-teal transition-colors">进度报告和会议摘要</Link></span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-trust-teal mt-1">✓</span>
                <span>灵活的日程安排 — 上门和远程医疗</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-trust-teal mt-1">✓</span>
                <span>支持计划审查，提供清晰、具体的建议</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-trust-teal mt-1">✓</span>
                <span>接受所有 NDIS 管理类型（自我管理、计划管理、NDIA 管理）</span>
              </li>
            </ul>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/refer-a-client" className="btn-primary text-center shadow-lg hover:-translate-y-1 transition-all duration-300">
                推荐客户
              </Link>
              <Link href="/ndis-service-guide-support-coordinators" className="btn-secondary text-center border-white text-white hover:bg-white hover:text-navy-blue shadow-lg hover:-translate-y-1 transition-all duration-300">
                下载 NDIS 服务指南
              </Link>
            </div>
          </div>
          <div className="bg-white/5 border border-white/10 backdrop-blur-md p-10 rounded-[2rem] shadow-2xl relative hover:-translate-y-1 transition-transform duration-300">
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-trust-teal rounded-full blur-2xl opacity-20"></div>
            <h3 className="text-2xl font-bold mb-4 text-white font-serif">快速推荐</h3>
            <p className="mb-8 text-blue-100/80 leading-relaxed">在 2 分钟内提交推荐。我将直接联系家庭安排初步咨询。</p>
            <Link href="/refer-a-client" className="block w-full text-center bg-white text-navy-blue px-6 py-4 rounded-full font-bold hover:bg-golden-amber hover:text-white transition-all duration-300 shadow-lg hover:-translate-y-1">
              打开推荐表 →
            </Link>
          </div>
        </div>
      </section>

      {/* Section 12: SERVICE AREA */}
      <section className="py-16 bg-soft-blue border-t border-blue-100">
        <div className="container mx-auto px-4 text-center max-w-5xl">
          <h2 className="text-2xl font-bold text-navy-blue mb-8 font-serif">我在悉尼的服务区域</h2>
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-3 text-stone font-medium">
            <Link href="/speech-pathologist-arncliffe-nsw" className="hover:text-trust-teal transition-colors">Arncliffe</Link><span className="text-blue-200">·</span>
            <Link href="/speech-pathologist-burwood-nsw" className="hover:text-trust-teal transition-colors">Burwood</Link><span className="text-blue-200">·</span>
            <Link href="/speech-pathologist-hurstville-nsw" className="hover:text-trust-teal transition-colors">Hurstville</Link><span className="text-blue-200">·</span>
            <Link href="/speech-pathologist-strathfield-nsw" className="hover:text-trust-teal transition-colors">Strathfield</Link><span className="text-blue-200">·</span>
            <Link href="/speech-pathologist-canterbury-bankstown-nsw" className="hover:text-trust-teal transition-colors">Canterbury-Bankstown</Link><span className="text-blue-200">·</span>
            <Link href="/speech-pathologist-campsie-nsw" className="hover:text-trust-teal transition-colors">Campsie</Link><span className="text-blue-200">·</span>
            <Link href="/speech-pathologist-rockdale-nsw" className="hover:text-trust-teal transition-colors">Rockdale</Link><span className="text-blue-200">·</span>
            <Link href="/speech-pathologist-kogarah-nsw" className="hover:text-trust-teal transition-colors">Kogarah</Link><span className="text-blue-200">·</span>
            <Link href="/speech-pathologist-marrickville-nsw" className="hover:text-trust-teal transition-colors">Marrickville</Link><span className="text-blue-200">·</span>
            <Link href="/speech-pathologist-inner-west-sydney-nsw" className="hover:text-trust-teal transition-colors">悉尼内西区</Link><span className="text-blue-200">·</span>
            <Link href="/speech-pathologist-st-george-nsw" className="hover:text-trust-teal transition-colors">St George</Link><span className="text-blue-200">·</span>
            <Link href="/telehealth-speech-therapy-sydney-nsw" className="hover:text-trust-teal transition-colors">全澳远程医疗</Link>
          </div>
        </div>
      </section>

      {/* Section 13: FINAL CTA BAND */}
      <section className="py-24 bg-golden-amber text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIi8+PC9zdmc+')] opacity-30"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-navy-blue">准备好帮助您或您的孩子茁壮成长了吗？</h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto text-navy-blue/80 font-medium">
            预约免费咨询以讨论您的需求 — 无义务，无压力。
          </p>
          <div className="text-xl font-bold mb-10 flex flex-wrap justify-center gap-8 text-navy-blue">
            <a href="tel:+61421608819" className="hover:text-white transition-colors flex items-center gap-3">
              <div className="bg-navy-blue/10 p-2.5 rounded-full flex items-center justify-center"><Phone className="w-5 h-5" /></div> 0421 608 819
            </a>
            <a href="mailto:admin@shineandspeak.com.au" className="hover:text-white transition-colors flex items-center gap-3">
              <div className="bg-navy-blue/10 p-2.5 rounded-full flex items-center justify-center"><Mail className="w-5 h-5" /></div> admin@shineandspeak.com.au
            </a>
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-navy-blue text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-charcoal transition-all shadow-xl hover:-translate-y-1">
              预约免费咨询 <span>→</span>
            </Link>
            <Link href="/refer-a-client" className="inline-flex items-center justify-center gap-2 bg-white text-navy-blue px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all shadow-xl hover:-translate-y-1">
              推荐客户 <span>→</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
