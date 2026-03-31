import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/schema';

const now = new Date();

const conditionPages = [
  '/speech-therapy-autism-sydney-nsw',
  '/speech-therapy-adhd-sydney-nsw',
  '/speech-therapy-language-delay-sydney-nsw',
  '/speech-therapy-speech-sounds-sydney-nsw',
  '/speech-therapy-stuttering-sydney-nsw',
  '/speech-therapy-literacy-sydney-nsw',
  '/speech-therapy-developmental-delay-sydney-nsw',
  '/speech-therapy-intellectual-disability-sydney-nsw',
  '/social-communication-speech-therapy-sydney-nsw',
  '/aac-speech-therapy-sydney-nsw',
  '/speech-therapy-aphasia-sydney-nsw',
  '/speech-therapy-fluency-sydney-nsw',
  '/speech-therapy-cognitive-communication-sydney-nsw',
  '/speech-therapy-neuro-rehab-sydney-nsw',
];

const servicePages = [
  '/paediatric-speech-therapy-sydney-nsw',
  '/adult-speech-therapy-sydney-nsw',
  '/mobile-speech-therapy-sydney-nsw',
  '/telehealth-speech-therapy-sydney-nsw',
  '/school-based-speech-therapy-sydney-nsw',
  '/speech-therapy-assessment-sydney-nsw',
  '/speech-therapy-reports-sydney-nsw',
  '/parent-coaching-speech-therapy-sydney-nsw',
];

const fundingPages = [
  '/ndis-speech-therapy-sydney-nsw',
  '/medicare-speech-therapy-sydney-nsw',
  '/private-speech-therapy-sydney-nsw',
  '/home-care-package-speech-therapy-sydney-nsw',
  '/dva-speech-therapy-sydney-nsw',
  '/fees',
];

const suburbPages = [
  '/speech-pathologist-arncliffe-nsw',
  '/speech-pathologist-burwood-nsw',
  '/speech-pathologist-hurstville-nsw',
  '/speech-pathologist-strathfield-nsw',
  '/speech-pathologist-canterbury-bankstown-nsw',
  '/speech-pathologist-campsie-nsw',
  '/speech-pathologist-rockdale-nsw',
  '/speech-pathologist-kogarah-nsw',
  '/speech-pathologist-marrickville-nsw',
  '/speech-pathologist-inner-west-sydney-nsw',
  '/speech-pathologist-st-george-nsw',
];

const essentialPages = [
  '/', '/about', '/contact', '/how-it-works',
  '/refer-a-client', '/book', '/thank-you',
  '/ndis-service-guide-support-coordinators',
  '/zh',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const allPaths = [
    ...essentialPages,
    ...servicePages,
    ...conditionPages,
    ...fundingPages,
    ...suburbPages,
  ];

  return allPaths.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency: path === '/' ? 'weekly' : 'monthly',
    priority: path === '/' ? 1 : path.includes('autism') || path.includes('about') ? 0.9 : 0.7,
  }));
}
