const fs = require('fs');
const path = require('path');

const pages = [
  { path: 'paediatric-speech-therapy-sydney-nsw', title: 'Paediatric Speech Therapy Sydney NSW | Shine and Speak', keyword: 'Paediatric Speech Therapy in Sydney' },
  { path: 'adult-speech-therapy-sydney-nsw', title: 'Adult Speech Therapy Sydney NSW | Shine and Speak', keyword: 'Adult Speech Therapy in Sydney' },
  { path: 'mobile-speech-therapy-sydney-nsw', title: 'Mobile Speech Therapy Sydney NSW | Shine and Speak', keyword: 'Mobile Speech Therapy in Sydney' },
  { path: 'telehealth-speech-therapy-sydney-nsw', title: 'Telehealth Speech Therapy Australia | Shine and Speak', keyword: 'Telehealth Speech Therapy' },
  { path: 'school-based-speech-therapy-sydney-nsw', title: 'School-Based Speech Therapy Sydney NSW | Shine and Speak', keyword: 'School-Based Speech Therapy in Sydney' },
  { path: 'speech-therapy-assessment-sydney-nsw', title: 'Speech Therapy Assessment Sydney NSW | Shine and Speak', keyword: 'Speech Therapy Assessment in Sydney' },
  { path: 'speech-therapy-reports-sydney-nsw', title: 'Speech Therapy Reports Sydney NSW | Shine and Speak', keyword: 'Speech Therapy Reports in Sydney' },
  { path: 'parent-coaching-speech-therapy-sydney-nsw', title: 'Parent Coaching Speech Therapy Sydney NSW | Shine and Speak', keyword: 'Parent Coaching for Speech Therapy in Sydney' },
  { path: 'speech-therapy-adhd-sydney-nsw', title: 'Speech Therapy for ADHD Sydney NSW | Shine and Speak', keyword: 'Speech Therapy for ADHD in Sydney' },
  { path: 'speech-therapy-developmental-delay-sydney-nsw', title: 'Speech Therapy for Developmental Delay Sydney NSW | Shine and Speak', keyword: 'Speech Therapy for Developmental Delay in Sydney' },
  { path: 'speech-therapy-language-delay-sydney-nsw', title: 'Speech Therapy for Language Delay Sydney NSW | Shine and Speak', keyword: 'Speech Therapy for Language Delay in Sydney' },
  { path: 'speech-therapy-speech-sounds-sydney-nsw', title: 'Speech Therapy for Speech Sounds Sydney NSW | Shine and Speak', keyword: 'Speech Therapy for Speech Sounds in Sydney' },
  { path: 'speech-therapy-stuttering-sydney-nsw', title: 'Speech Therapy for Stuttering Sydney NSW | Shine and Speak', keyword: 'Speech Therapy for Stuttering in Sydney' },
  { path: 'speech-therapy-literacy-sydney-nsw', title: 'Speech Therapy for Literacy Sydney NSW | Shine and Speak', keyword: 'Speech Therapy for Literacy in Sydney' },
  { path: 'speech-therapy-aac-sydney-nsw', title: 'AAC Speech Therapy Sydney NSW | Shine and Speak', keyword: 'AAC Speech Therapy in Sydney' },
  { path: 'speech-therapy-social-communication-sydney-nsw', title: 'Social Communication Speech Therapy Sydney NSW | Shine and Speak', keyword: 'Social Communication Speech Therapy in Sydney' },
  { path: 'speech-therapy-intellectual-disability-sydney-nsw', title: 'Speech Therapy for Intellectual Disability Sydney NSW | Shine and Speak', keyword: 'Speech Therapy for Intellectual Disability in Sydney' },
  { path: 'speech-therapy-aphasia-sydney-nsw', title: 'Speech Therapy for Aphasia Sydney NSW | Shine and Speak', keyword: 'Speech Therapy for Aphasia in Sydney' },
  { path: 'speech-therapy-fluency-sydney-nsw', title: 'Speech Therapy for Fluency Sydney NSW | Shine and Speak', keyword: 'Speech Therapy for Fluency in Sydney' },
  { path: 'speech-therapy-cognitive-communication-sydney-nsw', title: 'Cognitive-Communication Speech Therapy Sydney NSW | Shine and Speak', keyword: 'Cognitive-Communication Speech Therapy in Sydney' },
  { path: 'speech-therapy-neuro-rehab-sydney-nsw', title: 'Neurological Rehab Speech Therapy Sydney NSW | Shine and Speak', keyword: 'Neurological Rehab Speech Therapy in Sydney' },
  { path: 'ndis-speech-therapy-sydney-nsw', title: 'NDIS Speech Therapy Sydney NSW | Shine and Speak', keyword: 'NDIS Speech Therapy in Sydney' },
  { path: 'medicare-speech-therapy-sydney-nsw', title: 'Medicare Speech Therapy Sydney NSW | Shine and Speak', keyword: 'Medicare Speech Therapy in Sydney' },
  { path: 'private-speech-therapy-sydney-nsw', title: 'Private Speech Therapy Sydney NSW | Shine and Speak', keyword: 'Private Speech Therapy in Sydney' },
  { path: 'home-care-package-speech-therapy-sydney-nsw', title: 'Home Care Package Speech Therapy Sydney NSW | Shine and Speak', keyword: 'Home Care Package Speech Therapy in Sydney' },
  { path: 'dva-speech-therapy-sydney-nsw', title: 'DVA Speech Therapy Sydney NSW | Shine and Speak', keyword: 'DVA Speech Therapy in Sydney' },
  { path: 'fees', title: 'Fees & Pricing | Shine and Speak', keyword: 'Speech Therapy Fees and Pricing' },
  { path: 'speech-pathologist-hurstville-nsw', title: 'Speech Pathologist Hurstville NSW | Shine and Speak', keyword: 'Speech Pathologist in Hurstville' },
  { path: 'speech-pathologist-strathfield-nsw', title: 'Speech Pathologist Strathfield NSW | Shine and Speak', keyword: 'Speech Pathologist in Strathfield' },
  { path: 'speech-pathologist-canterbury-bankstown-nsw', title: 'Speech Pathologist Canterbury-Bankstown NSW | Shine and Speak', keyword: 'Speech Pathologist in Canterbury-Bankstown' },
  { path: 'speech-pathologist-campsie-nsw', title: 'Speech Pathologist Campsie NSW | Shine and Speak', keyword: 'Speech Pathologist in Campsie' },
  { path: 'speech-pathologist-rockdale-nsw', title: 'Speech Pathologist Rockdale NSW | Shine and Speak', keyword: 'Speech Pathologist in Rockdale' },
  { path: 'speech-pathologist-kogarah-nsw', title: 'Speech Pathologist Kogarah NSW | Shine and Speak', keyword: 'Speech Pathologist in Kogarah' },
  { path: 'speech-pathologist-marrickville-nsw', title: 'Speech Pathologist Marrickville NSW | Shine and Speak', keyword: 'Speech Pathologist in Marrickville' },
  { path: 'speech-pathologist-arncliffe-nsw', title: 'Speech Pathologist Arncliffe NSW | Shine and Speak', keyword: 'Speech Pathologist in Arncliffe' },
  { path: 'speech-pathologist-inner-west-sydney-nsw', title: 'Speech Pathologist Inner West Sydney NSW | Shine and Speak', keyword: 'Speech Pathologist in Inner West Sydney' },
  { path: 'speech-pathologist-st-george-sydney-nsw', title: 'Speech Pathologist St George Sydney NSW | Shine and Speak', keyword: 'Speech Pathologist in St George Sydney' },
  { path: 'how-it-works', title: 'How It Works | Shine and Speak', keyword: 'How Speech Therapy Works' },
  { path: 'for-support-coordinators', title: 'For Support Coordinators | Shine and Speak', keyword: 'Speech Therapy for Support Coordinators' },
  { path: 'contact', title: 'Contact Us | Shine and Speak', keyword: 'Contact Shine and Speak' },
  { path: 'zh/services', title: '我們的服務 | Shine and Speak', keyword: '我們的服務' },
  { path: 'zh/ndis', title: 'NDIS 語言治療 | Shine and Speak', keyword: 'NDIS 語言治療' },
  { path: 'zh/contact', title: '聯絡我們 | Shine and Speak', keyword: '聯絡我們' },
];

const srcDir = path.join(__dirname, 'src', 'app');

pages.forEach(page => {
  const dirPath = path.join(srcDir, page.path);
  fs.mkdirSync(dirPath, { recursive: true });
  
  const content = `import { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: '${page.title}',
  description: 'Content coming soon for ${page.title}. Mobile and telehealth speech therapy in Sydney.',
  alternates: {
    canonical: '/${page.path}',
  },
};

export default function Page() {
  return (
    <main className="min-h-screen py-20 px-4 md:px-8 max-w-7xl mx-auto">
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: '${page.keyword}', href: '/${page.path}' }]} />
      <h1 className="text-4xl font-bold text-navy-900 mt-8 mb-4">${page.keyword}</h1>
      <p className="text-lg text-gray-700">Content coming soon.</p>
    </main>
  );
}
`;
  
  fs.writeFileSync(path.join(dirPath, 'page.tsx'), content);
});

console.log('Placeholder pages generated successfully.');