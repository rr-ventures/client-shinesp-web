#!/usr/bin/env node
/**
 * Updates all placeholder pages with proper metadata, canonical, OG, BreadcrumbList schema,
 * and author attribution. Run once with: node update-placeholders.js
 */

const fs = require('fs');
const path = require('path');

const SITE_URL = 'https://shineandspeak.com.au';

// Pages to update: [route, title (without " | Shine and Speak"), description, breadcrumb label, parent breadcrumb, parentHref, serviceType]
const pages = [
  // Service pages
  {
    route: 'paediatric-speech-therapy-sydney-nsw',
    title: 'Paediatric Speech Therapy Sydney NSW',
    desc: 'Paediatric speech therapy for children in Sydney. Mobile, school-based and telehealth. Autism, language delay, speech sounds, literacy and more. NDIS & Medicare registered.',
    label: 'Paediatric Speech Therapy',
    parentLabel: 'Services',
    parentHref: '/paediatric-speech-therapy-sydney-nsw',
    isService: true,
    serviceType: 'Paediatric Speech Pathology',
  },
  {
    route: 'adult-speech-therapy-sydney-nsw',
    title: 'Adult Speech Therapy Sydney NSW',
    desc: 'Adult speech therapy in Sydney. Mobile and telehealth for aphasia, stuttering, cognitive-communication, and neurological rehabilitation. NDIS, Medicare and private pay.',
    label: 'Adult Speech Therapy',
    parentLabel: 'Services',
    parentHref: '/adult-speech-therapy-sydney-nsw',
    isService: true,
    serviceType: 'Adult Speech Pathology',
  },
  {
    route: 'mobile-speech-therapy-sydney-nsw',
    title: 'Mobile Speech Therapy Sydney NSW',
    desc: 'Mobile speech therapy delivered to your home or school in Sydney. No clinic visits needed. NDIS, Medicare and private pay. Inner West Sydney and surrounds.',
    label: 'Mobile Speech Therapy',
    parentLabel: 'Services',
    parentHref: '/mobile-speech-therapy-sydney-nsw',
    isService: true,
    serviceType: 'Mobile Speech Pathology',
  },
  {
    route: 'telehealth-speech-therapy-sydney-nsw',
    title: 'Telehealth Speech Therapy Sydney & Australia-wide',
    desc: 'Online speech therapy via telehealth, available across Sydney and Australia-wide. Flexible, evidence-based sessions from home. NDIS, Medicare and private pay accepted.',
    label: 'Telehealth Speech Therapy',
    parentLabel: 'Services',
    parentHref: '/telehealth-speech-therapy-sydney-nsw',
    isService: true,
    serviceType: 'Telehealth Speech Pathology',
  },
  {
    route: 'school-based-speech-therapy-sydney-nsw',
    title: 'School-Based Speech Therapy Sydney NSW',
    desc: 'Speech therapy delivered at your child\'s school or kindergarten in Sydney. Coordinated with teachers and educators. NDIS, Medicare and private pay accepted.',
    label: 'School-Based Speech Therapy',
    parentLabel: 'Services',
    parentHref: '/school-based-speech-therapy-sydney-nsw',
    isService: true,
    serviceType: 'School-Based Speech Pathology',
  },
  {
    route: 'speech-therapy-assessment-sydney-nsw',
    title: 'Speech Therapy Assessment Sydney NSW',
    desc: 'Comprehensive speech and language assessments for children and adults in Sydney. Mobile, school-based and telehealth. Detailed reports provided. NDIS & Medicare.',
    label: 'Speech Therapy Assessments',
    parentLabel: 'Services',
    parentHref: '/speech-therapy-assessment-sydney-nsw',
    isService: true,
    serviceType: 'Speech Therapy Assessment',
  },
  {
    route: 'speech-therapy-reports-sydney-nsw',
    title: 'Speech Therapy Reports Sydney NSW',
    desc: 'Professional speech therapy reports for NDIS plan reviews, schools, and funding applications in Sydney. Detailed, evidence-based and written by a CPSP-certified therapist.',
    label: 'Speech Therapy Reports',
    parentLabel: 'Services',
    parentHref: '/speech-therapy-reports-sydney-nsw',
    isService: true,
    serviceType: 'Speech Therapy Reporting',
  },
  {
    route: 'parent-coaching-speech-therapy-sydney-nsw',
    title: 'Parent & Support Worker Coaching Sydney NSW',
    desc: 'Parent and support worker coaching for speech therapy in Sydney. Learn practical strategies to support communication development at home and school. NDIS registered.',
    label: 'Parent & Support Worker Coaching',
    parentLabel: 'Services',
    parentHref: '/parent-coaching-speech-therapy-sydney-nsw',
    isService: true,
    serviceType: 'Parent Coaching Speech Pathology',
  },
  // Condition pages
  {
    route: 'speech-therapy-adhd-sydney-nsw',
    title: 'Speech Therapy for ADHD Sydney NSW',
    desc: 'Speech therapy for children with ADHD in Sydney. Building focus, listening, and social communication skills. Mobile, school-based and telehealth. NDIS & Medicare registered.',
    label: 'Speech Therapy for ADHD',
    parentLabel: 'Paediatric Services',
    parentHref: '/paediatric-speech-therapy-sydney-nsw',
    isService: true,
    serviceType: 'ADHD Speech Pathology',
  },
  {
    route: 'speech-therapy-language-delay-sydney-nsw',
    title: 'Language Delay Speech Therapy Sydney NSW',
    desc: 'Speech therapy for language delay in children across Sydney. Building vocabulary, comprehension and sentence skills. Mobile, school-based and telehealth. NDIS & Medicare.',
    label: 'Language Delay Speech Therapy',
    parentLabel: 'Paediatric Services',
    parentHref: '/paediatric-speech-therapy-sydney-nsw',
    isService: true,
    serviceType: 'Language Delay Speech Pathology',
  },
  {
    route: 'speech-therapy-speech-sounds-sydney-nsw',
    title: 'Speech Sounds Therapy Sydney NSW',
    desc: 'Speech therapy for speech sound difficulties in children across Sydney. Clear pronunciation, phonological awareness. Mobile, school-based and telehealth. NDIS & Medicare.',
    label: 'Speech Sounds Therapy',
    parentLabel: 'Paediatric Services',
    parentHref: '/paediatric-speech-therapy-sydney-nsw',
    isService: true,
    serviceType: 'Speech Sounds Speech Pathology',
  },
  {
    route: 'speech-therapy-stuttering-sydney-nsw',
    title: 'Stuttering & Fluency Therapy Sydney NSW',
    desc: 'Evidence-based stuttering and fluency therapy for children and adults in Sydney. Lidcombe Program and other approaches. Mobile and telehealth. NDIS & Medicare registered.',
    label: 'Stuttering & Fluency Therapy',
    parentLabel: 'Services',
    parentHref: '/paediatric-speech-therapy-sydney-nsw',
    isService: true,
    serviceType: 'Stuttering Speech Pathology',
  },
  {
    route: 'speech-therapy-literacy-sydney-nsw',
    title: 'Literacy & Reading Speech Therapy Sydney NSW',
    desc: 'Speech therapy for literacy and reading difficulties in children across Sydney. Phonological awareness, reading and spelling support. Mobile, school-based. NDIS & Medicare.',
    label: 'Literacy & Reading Therapy',
    parentLabel: 'Paediatric Services',
    parentHref: '/paediatric-speech-therapy-sydney-nsw',
    isService: true,
    serviceType: 'Literacy Speech Pathology',
  },
  // Funding pages
  {
    route: 'ndis-speech-therapy-sydney-nsw',
    title: 'NDIS Speech Therapy Sydney NSW',
    desc: 'NDIS speech therapy in Sydney. Registered NDIS provider accepting self-managed, plan-managed and NDIA-managed plans. Mobile and telehealth. Inner West and surrounds.',
    label: 'NDIS Speech Therapy',
    parentLabel: 'Funding & Fees',
    parentHref: '/ndis-speech-therapy-sydney-nsw',
    isService: true,
    serviceType: 'NDIS Speech Pathology',
  },
  {
    route: 'medicare-speech-therapy-sydney-nsw',
    title: 'Medicare Speech Therapy Sydney NSW',
    desc: 'Medicare rebates for speech therapy in Sydney. Access up to 5 sessions per year with a GP referral under a Chronic Disease Management plan. Mobile and telehealth.',
    label: 'Medicare Speech Therapy',
    parentLabel: 'Funding & Fees',
    parentHref: '/fees',
    isService: false,
  },
  {
    route: 'private-speech-therapy-sydney-nsw',
    title: 'Private Speech Therapy Sydney NSW',
    desc: 'Private speech therapy for children and adults in Sydney. No referral needed. Flexible scheduling, mobile home visits and telehealth. Receipts provided for health insurance.',
    label: 'Private Speech Therapy',
    parentLabel: 'Funding & Fees',
    parentHref: '/fees',
    isService: false,
  },
  {
    route: 'home-care-package-speech-therapy-sydney-nsw',
    title: 'Home Care Package Speech Therapy Sydney NSW',
    desc: 'Speech therapy funded through Home Care Packages (HCP) in Sydney. Mobile and telehealth for older adults. Allied health services under Level 1–4 packages.',
    label: 'Home Care Package Speech Therapy',
    parentLabel: 'Funding & Fees',
    parentHref: '/fees',
    isService: false,
  },
  {
    route: 'dva-speech-therapy-sydney-nsw',
    title: 'DVA Speech Therapy Sydney NSW',
    desc: 'DVA-funded speech therapy for veterans and their families in Sydney. Mobile and telehealth sessions available. Registered allied health provider for DVA clients.',
    label: 'DVA Speech Therapy',
    parentLabel: 'Funding & Fees',
    parentHref: '/fees',
    isService: false,
  },
  {
    route: 'fees',
    title: 'Fees & Pricing',
    desc: 'Speech therapy fees and pricing at Shine and Speak. NDIS, Medicare, private pay and Home Care Package rates. Transparent pricing with no hidden costs. Sydney and telehealth.',
    label: 'Fees & Pricing',
    parentLabel: 'Funding & Fees',
    parentHref: '/fees',
    isService: false,
  },
  // Suburb pages
  {
    route: 'speech-pathologist-arncliffe-nsw',
    title: 'Speech Pathologist Arncliffe NSW',
    desc: 'Mobile speech pathologist in Arncliffe NSW. Home visits, school sessions and telehealth available. NDIS, Medicare and private pay accepted. Bilingual English & Mandarin.',
    label: 'Speech Pathologist Arncliffe',
    parentLabel: 'Areas',
    parentHref: '/speech-pathologist-arncliffe-nsw',
    isService: true,
    serviceType: 'Mobile Speech Pathology',
  },
  {
    route: 'speech-pathologist-hurstville-nsw',
    title: 'Speech Pathologist Hurstville NSW',
    desc: 'Mobile speech pathologist in Hurstville NSW. Home visits, school sessions and telehealth. NDIS, Medicare and private pay accepted. Bilingual English & Mandarin.',
    label: 'Speech Pathologist Hurstville',
    parentLabel: 'Areas',
    parentHref: '/speech-pathologist-hurstville-nsw',
    isService: true,
    serviceType: 'Mobile Speech Pathology',
  },
  {
    route: 'speech-pathologist-strathfield-nsw',
    title: 'Speech Pathologist Strathfield NSW',
    desc: 'Mobile speech pathologist in Strathfield NSW. Home visits, school sessions and telehealth. NDIS, Medicare and private pay accepted. Bilingual English & Mandarin.',
    label: 'Speech Pathologist Strathfield',
    parentLabel: 'Areas',
    parentHref: '/speech-pathologist-strathfield-nsw',
    isService: true,
    serviceType: 'Mobile Speech Pathology',
  },
  {
    route: 'speech-pathologist-canterbury-bankstown-nsw',
    title: 'Speech Pathologist Canterbury-Bankstown NSW',
    desc: 'Mobile speech pathologist in Canterbury-Bankstown NSW. Home visits, school sessions and telehealth. NDIS, Medicare and private pay accepted. Bilingual English & Mandarin.',
    label: 'Speech Pathologist Canterbury-Bankstown',
    parentLabel: 'Areas',
    parentHref: '/speech-pathologist-canterbury-bankstown-nsw',
    isService: true,
    serviceType: 'Mobile Speech Pathology',
  },
  {
    route: 'speech-pathologist-campsie-nsw',
    title: 'Speech Pathologist Campsie NSW',
    desc: 'Mobile speech pathologist in Campsie NSW. Home visits, school sessions and telehealth available. NDIS, Medicare and private pay accepted. Bilingual English & Mandarin.',
    label: 'Speech Pathologist Campsie',
    parentLabel: 'Areas',
    parentHref: '/speech-pathologist-campsie-nsw',
    isService: true,
    serviceType: 'Mobile Speech Pathology',
  },
  {
    route: 'speech-pathologist-rockdale-nsw',
    title: 'Speech Pathologist Rockdale NSW',
    desc: 'Mobile speech pathologist in Rockdale NSW. Home visits, school sessions and telehealth available. NDIS, Medicare and private pay accepted. Bilingual English & Mandarin.',
    label: 'Speech Pathologist Rockdale',
    parentLabel: 'Areas',
    parentHref: '/speech-pathologist-rockdale-nsw',
    isService: true,
    serviceType: 'Mobile Speech Pathology',
  },
  {
    route: 'speech-pathologist-kogarah-nsw',
    title: 'Speech Pathologist Kogarah NSW',
    desc: 'Mobile speech pathologist in Kogarah NSW. Home visits, school sessions and telehealth available. NDIS, Medicare and private pay accepted. Bilingual English & Mandarin.',
    label: 'Speech Pathologist Kogarah',
    parentLabel: 'Areas',
    parentHref: '/speech-pathologist-kogarah-nsw',
    isService: true,
    serviceType: 'Mobile Speech Pathology',
  },
  {
    route: 'speech-pathologist-marrickville-nsw',
    title: 'Speech Pathologist Marrickville NSW',
    desc: 'Mobile speech pathologist in Marrickville NSW. Home visits, school sessions and telehealth available. NDIS, Medicare and private pay accepted. Bilingual English & Mandarin.',
    label: 'Speech Pathologist Marrickville',
    parentLabel: 'Areas',
    parentHref: '/speech-pathologist-marrickville-nsw',
    isService: true,
    serviceType: 'Mobile Speech Pathology',
  },
  {
    route: 'speech-pathologist-inner-west-sydney-nsw',
    title: 'Speech Pathologist Inner West Sydney NSW',
    desc: 'Mobile speech pathologist serving Inner West Sydney. Home visits, school sessions and telehealth. NDIS, Medicare and private pay accepted. Bilingual English & Mandarin.',
    label: 'Speech Pathologist Inner West Sydney',
    parentLabel: 'Areas',
    parentHref: '/speech-pathologist-inner-west-sydney-nsw',
    isService: true,
    serviceType: 'Mobile Speech Pathology',
  },
  {
    route: 'speech-pathologist-st-george-nsw',
    title: 'Speech Pathologist St George NSW',
    desc: 'Mobile speech pathologist in the St George area, NSW. Home visits, school sessions and telehealth. NDIS, Medicare and private pay accepted. Bilingual English & Mandarin.',
    label: 'Speech Pathologist St George',
    parentLabel: 'Areas',
    parentHref: '/speech-pathologist-st-george-nsw',
    isService: true,
    serviceType: 'Mobile Speech Pathology',
  },
  // Other pages
  {
    route: 'how-it-works',
    title: 'How It Works — Speech Therapy Process',
    desc: 'How Shine and Speak speech therapy works — from your first discovery call through assessment, goal-setting, and ongoing therapy. Mobile and telehealth in Sydney.',
    label: 'How It Works',
    parentLabel: null,
    parentHref: null,
    isService: false,
  },
  {
    route: 'contact',
    title: 'Contact Shine and Speak',
    desc: 'Contact Shine and Speak speech pathology in Sydney. Call, email or WhatsApp us. We respond within 24 hours. Mobile and telehealth speech therapy Inner West Sydney.',
    label: 'Contact',
    parentLabel: null,
    parentHref: null,
    isService: false,
  },
];

const AREA_SERVED = [
  'Inner West Sydney', 'Burwood', 'Hurstville', 'Strathfield',
  'Canterbury-Bankstown', 'Campsie', 'Rockdale', 'Kogarah',
  'Marrickville', 'Arncliffe', 'St George', 'Sydney NSW', 'Australia',
];

function generatePageContent(page) {
  const { route, title, desc, label, parentLabel, parentHref, isService, serviceType } = page;
  const fullTitle = `${title} | Shine and Speak`;
  const url = `/${route}`;
  const fullUrl = `${SITE_URL}${url}`;

  const breadcrumbItems = [
    { name: 'Home', url: SITE_URL },
    ...(parentLabel && parentHref ? [{ name: parentLabel, url: `${SITE_URL}${parentHref}` }] : []),
    { name: label, url: fullUrl },
  ];

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbItems.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  const serviceSchemaObj = isService ? {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: title,
    description: desc,
    url: fullUrl,
    provider: {
      '@type': 'MedicalBusiness',
      name: 'Shine and Speak',
      url: SITE_URL,
    },
    areaServed: AREA_SERVED,
    serviceType: serviceType || 'Speech Pathology',
    availableLanguage: ['English', 'Chinese'],
  } : null;

  const breadcrumbNav = parentLabel
    ? `
      <nav className="bg-gray-50 py-3 border-b border-gray-200 text-sm" aria-label="Breadcrumb">
        <div className="container mx-auto px-4 text-gray-500">
          <Link href="/" className="hover:text-[#1B365D]">Home</Link>
          <span className="mx-2">›</span>
          <Link href="${parentHref}" className="hover:text-[#1B365D]">${parentLabel}</Link>
          <span className="mx-2">›</span>
          <span className="text-[#1B365D]">${label}</span>
        </div>
      </nav>`
    : `
      <nav className="bg-gray-50 py-3 border-b border-gray-200 text-sm" aria-label="Breadcrumb">
        <div className="container mx-auto px-4 text-gray-500">
          <Link href="/" className="hover:text-[#1B365D]">Home</Link>
          <span className="mx-2">›</span>
          <span className="text-[#1B365D]">${label}</span>
        </div>
      </nav>`;

  return `import type { Metadata } from 'next';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: '${title}',
  description: '${desc.replace(/'/g, "\\'")}',
  alternates: { canonical: '${url}' },
  openGraph: {
    title: '${fullTitle.replace(/'/g, "\\'")}',
    description: '${desc.replace(/'/g, "\\'")}',
    url: '${url}',
  },
};

const breadcrumbSchema = ${JSON.stringify(breadcrumbSchema, null, 2)};
${serviceSchemaObj ? `\nconst serviceSchemaData = ${JSON.stringify(serviceSchemaObj, null, 2)};` : ''}

export default function Page() {
  return (
    <article>
      <JsonLd data={breadcrumbSchema} />${serviceSchemaObj ? '\n      <JsonLd data={serviceSchemaData} />' : ''}
      ${breadcrumbNav}
      <div className="container mx-auto px-4 py-12 md:py-20 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold text-[#1B365D] mb-6">${title}</h1>
        <div className="flex flex-wrap gap-6 text-sm font-bold text-[#1B365D] mb-12 pb-8 border-b border-gray-200">
          <span>✓ CPSP Certified</span>
          <span>✓ NDIS Registered</span>
          <span>✓ Medicare Provider</span>
        </div>
        <div className="prose prose-lg max-w-none text-gray-700 mb-16">
          {/* PLACEHOLDER: Full page content coming soon */}
          <p>Content for this page is being developed. In the meantime, please <Link href="/contact" className="text-[#1B365D] underline">contact us</Link> with your questions or <Link href="/book" className="text-[#1B365D] underline">book a free discovery call</Link>.</p>
        </div>
        <div className="border-t border-gray-200 pt-8">
          <p className="text-gray-500 text-sm italic">
            <Link href="/about" className="underline hover:text-[#1B365D]">Written by a Certified Practising Speech Pathologist</Link>.
            Last reviewed March 2026.
          </p>
        </div>
      </div>
      <section className="py-16 bg-[#E8A84C] text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Book a free discovery call</h2>
          <p className="text-lg mb-8 max-w-xl mx-auto">Talk to our speech pathologist about your needs — no obligation.</p>
          <Link href="/book" className="inline-block bg-[#1B365D] text-white px-10 py-4 rounded-md font-bold text-lg hover:bg-blue-900 transition shadow-lg">
            Book a Free Discovery Call →
          </Link>
        </div>
      </section>
    </article>
  );
}
`;
}

const appDir = path.join(__dirname, 'src', 'app');
let updated = 0;
let skipped = 0;

for (const page of pages) {
  const pageDir = path.join(appDir, page.route);
  const pagePath = path.join(pageDir, 'page.tsx');

  // Skip pages that have already been fully built
  const fullyBuilt = [
    'speech-therapy-autism-sydney-nsw',
    'speech-pathologist-burwood-nsw',
    'about',
    'ndis-service-guide-support-coordinators',
    'social-communication-speech-therapy-sydney-nsw',
    'aac-speech-therapy-sydney-nsw',
    'book',
    'refer-a-client',
    'thank-you',
    'zh',
  ];
  if (fullyBuilt.includes(page.route)) {
    console.log(`⏭  Skipping (already built): ${page.route}`);
    skipped++;
    continue;
  }

  if (!fs.existsSync(pageDir)) {
    fs.mkdirSync(pageDir, { recursive: true });
  }

  const content = generatePageContent(page);
  fs.writeFileSync(pagePath, content, 'utf8');
  console.log(`✅ Updated: ${page.route}`);
  updated++;
}

console.log(`\n🎉 Done: ${updated} updated, ${skipped} skipped.`);
