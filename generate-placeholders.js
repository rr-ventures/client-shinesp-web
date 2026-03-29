const fs = require('fs');
const path = require('path');

const pages = [
  // Category Pages
  { url: 'paediatric-speech-therapy-sydney-nsw', title: 'Paediatric Speech Therapy Sydney NSW | Shine and Speak', desc: 'Expert paediatric speech therapy in Sydney. Mobile and telehealth services for children. NDIS & Medicare registered. Bilingual English & Mandarin.', h1: 'Paediatric Speech Therapy in Sydney', schema: 'Service', parent: 'Services' },
  { url: 'adult-speech-therapy-sydney-nsw', title: 'Adult Speech Therapy Sydney NSW | Shine and Speak', desc: 'Specialised adult speech therapy in Sydney. Mobile and telehealth services. NDIS & Medicare registered. Bilingual English & Mandarin.', h1: 'Adult Speech Therapy in Sydney', schema: 'Service', parent: 'Services' },
  { url: 'mobile-speech-therapy-sydney-nsw', title: 'Mobile Speech Therapy Sydney NSW | Shine and Speak', desc: 'Mobile speech therapy delivered to your home or school in Sydney. NDIS & Medicare registered. Bilingual English & Mandarin.', h1: 'Mobile Speech Therapy in Sydney', schema: 'Service', parent: 'Services' },
  { url: 'telehealth-speech-therapy-sydney-nsw', title: 'Telehealth Speech Therapy Australia | Shine and Speak', desc: 'Online telehealth speech therapy available Australia-wide. NDIS & Medicare registered. Bilingual English & Mandarin.', h1: 'Telehealth Speech Therapy', schema: 'Service', parent: 'Services' },
  { url: 'school-based-speech-therapy-sydney-nsw', title: 'School-Based Speech Therapy Sydney | Shine and Speak', desc: 'Speech therapy delivered at your child\'s school or kindergarten in Sydney. NDIS & Medicare registered. Bilingual English & Mandarin.', h1: 'School-Based Speech Therapy in Sydney', schema: 'Service', parent: 'Services' },
  { url: 'speech-therapy-assessment-sydney-nsw', title: 'Speech Therapy Assessments Sydney | Shine and Speak', desc: 'Comprehensive speech and language assessments in Sydney. Mobile and telehealth. NDIS & Medicare registered. Bilingual English & Mandarin.', h1: 'Speech Therapy Assessments', schema: 'Service', parent: 'Services' },
  { url: 'speech-therapy-reports-sydney-nsw', title: 'Speech Therapy Reports Sydney | Shine and Speak', desc: 'Detailed speech therapy reports for NDIS, schools, and medical professionals in Sydney. Bilingual English & Mandarin.', h1: 'Speech Therapy Reports', schema: 'Service', parent: 'Services' },
  { url: 'parent-coaching-speech-therapy-sydney-nsw', title: 'Parent Coaching Speech Therapy Sydney | Shine and Speak', desc: 'Empowering parents with speech therapy coaching and strategies in Sydney. Mobile and telehealth. Bilingual English & Mandarin.', h1: 'Parent & Support Worker Coaching', schema: 'Service', parent: 'Services' },

  // Condition Pages (Paediatric)
  { url: 'speech-therapy-adhd-sydney-nsw', title: 'Speech Therapy for ADHD Sydney NSW | Shine and Speak', desc: 'Specialised speech therapy for children with ADHD in Sydney. Mobile, telehealth & school-based. NDIS & Medicare. Bilingual English & Mandarin.', h1: 'Speech Therapy for ADHD in Sydney', schema: 'Service', parent: 'Services' },
  { url: 'speech-therapy-language-delay-sydney-nsw', title: 'Speech Therapy for Language Delay Sydney | Shine and Speak', desc: 'Expert speech therapy for language delay in Sydney. Mobile, telehealth & school-based. NDIS & Medicare. Bilingual English & Mandarin.', h1: 'Speech Therapy for Language Delay', schema: 'Service', parent: 'Services' },
  { url: 'speech-therapy-speech-sounds-sydney-nsw', title: 'Speech Sounds Therapy Sydney NSW | Shine and Speak', desc: 'Speech therapy for articulation and speech sound disorders in Sydney. Mobile, telehealth & school-based. NDIS & Medicare.', h1: 'Speech Therapy for Speech Sounds', schema: 'Service', parent: 'Services' },
  { url: 'speech-therapy-stuttering-sydney-nsw', title: 'Stuttering Speech Therapy Sydney NSW | Shine and Speak', desc: 'Evidence-based stuttering and fluency therapy in Sydney. Mobile, telehealth & school-based. NDIS & Medicare. Bilingual English & Mandarin.', h1: 'Speech Therapy for Stuttering', schema: 'Service', parent: 'Services' },
  { url: 'speech-therapy-literacy-sydney-nsw', title: 'Literacy Speech Therapy Sydney NSW | Shine and Speak', desc: 'Speech therapy for reading, writing, and literacy difficulties in Sydney. Mobile, telehealth & school-based. NDIS & Medicare.', h1: 'Speech Therapy for Literacy', schema: 'Service', parent: 'Services' },
  { url: 'speech-therapy-aac-sydney-nsw', title: 'AAC Speech Therapy Sydney NSW | Shine and Speak', desc: 'Specialised AAC and multimodal communication therapy in Sydney. Mobile, telehealth & school-based. NDIS & Medicare.', h1: 'AAC & Multimodal Communication', schema: 'Service', parent: 'Services' },
  { url: 'speech-therapy-social-communication-sydney-nsw', title: 'Social Communication Therapy Sydney | Shine and Speak', desc: 'Speech therapy for social communication difficulties in Sydney. Mobile, telehealth & school-based. NDIS & Medicare.', h1: 'Social Communication Therapy', schema: 'Service', parent: 'Services' },
  { url: 'speech-therapy-intellectual-disability-sydney-nsw', title: 'Speech Therapy Intellectual Disability Sydney | Shine and Speak', desc: 'Speech therapy for intellectual disability and developmental delay in Sydney. Mobile, telehealth & school-based. NDIS & Medicare.', h1: 'Speech Therapy for Intellectual Disability', schema: 'Service', parent: 'Services' },

  // Condition Pages (Adult)
  { url: 'speech-therapy-aphasia-sydney-nsw', title: 'Aphasia Speech Therapy Sydney NSW | Shine and Speak', desc: 'Specialised speech therapy for aphasia in Sydney. Mobile and telehealth services. NDIS & Medicare registered. Bilingual English & Mandarin.', h1: 'Speech Therapy for Aphasia', schema: 'Service', parent: 'Services' },

  // Funding Pages
  { url: 'ndis-speech-therapy-sydney-nsw', title: 'NDIS Speech Therapy Sydney NSW | Shine and Speak', desc: 'NDIS registered speech pathologist in Sydney. Accepting self, plan, and NDIA managed participants. Mobile and telehealth services.', h1: 'NDIS Speech Therapy in Sydney', schema: 'WebPage', parent: 'Funding & Fees' },
  { url: 'medicare-speech-therapy-sydney-nsw', title: 'Medicare Speech Therapy Sydney NSW | Shine and Speak', desc: 'Medicare registered speech pathologist in Sydney. Information on EPC/CDA plans and rebates. Mobile and telehealth services.', h1: 'Medicare Speech Therapy', schema: 'WebPage', parent: 'Funding & Fees' },
  { url: 'private-speech-therapy-sydney-nsw', title: 'Private Speech Therapy Sydney NSW | Shine and Speak', desc: 'Private speech therapy services in Sydney. Health fund rebates available. Mobile and telehealth services. Bilingual English & Mandarin.', h1: 'Private Speech Therapy', schema: 'WebPage', parent: 'Funding & Fees' },
  { url: 'home-care-package-speech-therapy-sydney-nsw', title: 'Home Care Package Speech Therapy Sydney | Shine and Speak', desc: 'Speech therapy for Home Care Package (HCP) recipients in Sydney. Mobile services delivered to your home.', h1: 'Home Care Package Speech Therapy', schema: 'WebPage', parent: 'Funding & Fees' },
  { url: 'dva-speech-therapy-sydney-nsw', title: 'DVA Speech Therapy Sydney NSW | Shine and Speak', desc: 'DVA registered speech pathologist in Sydney. Mobile and telehealth services for veterans. Bilingual English & Mandarin.', h1: 'DVA Speech Therapy', schema: 'WebPage', parent: 'Funding & Fees' },
  { url: 'fees', title: 'Speech Therapy Fees & Pricing Sydney | Shine and Speak', desc: 'Transparent fees and pricing for speech therapy in Sydney. Information on NDIS, Medicare, and private rates. Mobile and telehealth.', h1: 'Fees & Pricing', schema: 'WebPage', parent: 'Funding & Fees' },

  // Suburb Pages
  { url: 'speech-pathologist-hurstville-nsw', title: 'Speech Pathologist Hurstville NSW | Shine and Speak', desc: 'Mobile speech therapy in Hurstville, Sydney. Home, school & telehealth. NDIS, Medicare & private. Bilingual English & Mandarin. Book a free call.', h1: 'Speech Pathologist in Hurstville', schema: 'Service', parent: 'Areas' },
  { url: 'speech-pathologist-strathfield-nsw', title: 'Speech Pathologist Strathfield NSW | Shine and Speak', desc: 'Mobile speech therapy in Strathfield, Sydney. Home, school & telehealth. NDIS, Medicare & private. Bilingual English & Mandarin. Book a free call.', h1: 'Speech Pathologist in Strathfield', schema: 'Service', parent: 'Areas' },
  { url: 'speech-pathologist-canterbury-bankstown-nsw', title: 'Speech Pathologist Canterbury-Bankstown | Shine and Speak', desc: 'Mobile speech therapy in Canterbury-Bankstown. Home, school & telehealth. NDIS, Medicare & private. Bilingual English & Mandarin.', h1: 'Speech Pathologist in Canterbury-Bankstown', schema: 'Service', parent: 'Areas' },
  { url: 'speech-pathologist-campsie-nsw', title: 'Speech Pathologist Campsie NSW | Shine and Speak', desc: 'Mobile speech therapy in Campsie, Sydney. Home, school & telehealth. NDIS, Medicare & private. Bilingual English & Mandarin. Book a free call.', h1: 'Speech Pathologist in Campsie', schema: 'Service', parent: 'Areas' },
  { url: 'speech-pathologist-rockdale-nsw', title: 'Speech Pathologist Rockdale NSW | Shine and Speak', desc: 'Mobile speech therapy in Rockdale, Sydney. Home, school & telehealth. NDIS, Medicare & private. Bilingual English & Mandarin. Book a free call.', h1: 'Speech Pathologist in Rockdale', schema: 'Service', parent: 'Areas' },
  { url: 'speech-pathologist-kogarah-nsw', title: 'Speech Pathologist Kogarah NSW | Shine and Speak', desc: 'Mobile speech therapy in Kogarah, Sydney. Home, school & telehealth. NDIS, Medicare & private. Bilingual English & Mandarin. Book a free call.', h1: 'Speech Pathologist in Kogarah', schema: 'Service', parent: 'Areas' },
  { url: 'speech-pathologist-marrickville-nsw', title: 'Speech Pathologist Marrickville NSW | Shine and Speak', desc: 'Mobile speech therapy in Marrickville, Sydney. Home, school & telehealth. NDIS, Medicare & private. Bilingual English & Mandarin. Book a free call.', h1: 'Speech Pathologist in Marrickville', schema: 'Service', parent: 'Areas' },
  { url: 'speech-pathologist-arncliffe-nsw', title: 'Speech Pathologist Arncliffe NSW | Shine and Speak', desc: 'Mobile speech therapy in Arncliffe, Sydney. Home, school & telehealth. NDIS, Medicare & private. Bilingual English & Mandarin. Book a free call.', h1: 'Speech Pathologist in Arncliffe', schema: 'Service', parent: 'Areas' },
  { url: 'speech-pathologist-inner-west-sydney-nsw', title: 'Speech Pathologist Inner West Sydney | Shine and Speak', desc: 'Mobile speech therapy in Inner West Sydney. Home, school & telehealth. NDIS, Medicare & private. Bilingual English & Mandarin. Book a free call.', h1: 'Speech Pathologist in Inner West Sydney', schema: 'Service', parent: 'Areas' },
  { url: 'speech-pathologist-st-george-nsw', title: 'Speech Pathologist St George Sydney | Shine and Speak', desc: 'Mobile speech therapy in St George area, Sydney. Home, school & telehealth. NDIS, Medicare & private. Bilingual English & Mandarin.', h1: 'Speech Pathologist in St George', schema: 'Service', parent: 'Areas' },

  // Essential Pages
  { url: 'contact', title: 'Contact Shine and Speak | Speech Pathologist Sydney', desc: 'Get in touch with Shine and Speak. Book a free discovery call or submit an enquiry for mobile and telehealth speech therapy in Sydney.', h1: 'Contact Us', schema: 'ContactPage', parent: 'Home' },
  { url: 'how-it-works', title: 'How It Works | Shine and Speak Speech Pathology', desc: 'Learn how our mobile and telehealth speech therapy services work. From initial consultation to assessment and ongoing therapy.', h1: 'How It Works', schema: 'WebPage', parent: 'Home' },
  { url: 'refer-a-client', title: 'Refer a Client | Shine and Speak Speech Pathology', desc: 'Refer a client for speech therapy. Online referral form for NDIS Support Coordinators, GPs, educators, and allied health professionals.', h1: 'Refer a Client', schema: 'WebPage', parent: 'Home' },
  { url: 'ndis-service-guide-support-coordinators', title: 'NDIS Service Guide for Support Coordinators | Shine and Speak', desc: 'Information for NDIS Support Coordinators. Fast response times, detailed reporting, and flexible mobile/telehealth speech therapy.', h1: 'For Support Coordinators', schema: 'WebPage', parent: 'Home' },
  { url: 'thank-you', title: 'Thank You | Shine and Speak', desc: 'Thank you for your enquiry. We will be in touch shortly to discuss your speech therapy needs.', h1: 'Thank You', schema: 'WebPage', parent: 'Home' },
  { url: 'book', title: 'Book a Free Discovery Call | Shine and Speak', desc: 'Book a free 15-minute discovery call to discuss your speech therapy needs and find out how we can help.', h1: 'Book a Free Discovery Call', schema: 'WebPage', parent: 'Home' },
  
  // Chinese Pages
  { url: 'zh', title: '悉尼华人语言治疗师 | Shine and Speak', desc: '提供上门及远程语言治疗服务。精通中英双语（普通话）。支持NDIS及Medicare。服务悉尼内西区及周边。', h1: '悉尼华人语言治疗师', schema: 'MedicalBusiness', parent: 'Home' }
];

pages.forEach(page => {
  const dirPath = path.join(__dirname, 'v1', 'src', 'app', page.url);
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }

  const content = `import Link from 'next/link';

export const metadata = {
  title: '${page.title.replace(/'/g, "\\'")}',
  description: '${page.desc.replace(/'/g, "\\'")}',
  alternates: {
    canonical: 'https://shineandspeak.com.au/${page.url === 'zh' ? 'zh' : page.url}',
  },
  openGraph: {
    title: '${page.title.replace(/'/g, "\\'")}',
    description: '${page.desc.replace(/'/g, "\\'")}',
    url: 'https://shineandspeak.com.au/${page.url === 'zh' ? 'zh' : page.url}',
    type: 'website',
  },
};

export default function PlaceholderPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "${page.schema}",
            "name": "${page.h1}",
            "url": "https://shineandspeak.com.au/${page.url === 'zh' ? 'zh' : page.url}"
          })
        }}
      />

      <div className="bg-accent py-4 border-b border-gray-200">
        <div className="container-custom">
          <nav className="text-sm text-gray-600 flex items-center gap-2">
            <Link href="/" className="hover:text-primary">Home</Link>
            <span>&gt;</span>
            <span className="hover:text-primary cursor-pointer">${page.parent}</span>
            <span>&gt;</span>
            <span className="text-primary font-medium">${page.h1}</span>
          </nav>
        </div>
      </div>

      <section className="bg-accent pt-12 pb-16">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              ${page.h1}
            </h1>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white min-h-[40vh]">
        <div className="container-custom">
          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-12 text-center max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-400 mb-4">Content coming soon</h2>
            <p className="text-gray-500 mb-8">This page is currently under development.</p>
            <Link href="/" className="inline-block bg-primary text-white px-8 py-3 rounded-full font-bold hover:bg-opacity-90 transition-all">
              Return to Homepage
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
`;

  fs.writeFileSync(path.join(dirPath, 'page.tsx'), content);
});

console.log('Placeholder pages created successfully.');
