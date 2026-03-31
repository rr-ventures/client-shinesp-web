import { MetadataRoute } from 'next';

const BASE = 'https://www.shineandspeak.com.au';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE, lastModified: now, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${BASE}/about`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/contact`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/how-it-works`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/refer-a-client`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/fees`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/zh`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/for-support-coordinators`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE}/ndis-service-guide-support-coordinators`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
  ];

  const conditionRoutes = [
    'autism', 'adhd', 'language-delay', 'speech-sounds', 'stuttering', 'literacy',
    'developmental-delay', 'intellectual-disability', 'social-communication', 'aac',
    'aphasia', 'fluency', 'cognitive-communication', 'neuro-rehab',
  ].map((slug) => ({
    url: `${BASE}/speech-therapy-${slug}-sydney-nsw`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const serviceRoutes = [
    'paediatric-speech-therapy', 'adult-speech-therapy', 'mobile-speech-therapy',
    'telehealth-speech-therapy', 'school-based-speech-therapy',
    'speech-therapy-assessment', 'speech-therapy-reports', 'parent-coaching-speech-therapy',
  ].map((slug) => ({
    url: `${BASE}/${slug}-sydney-nsw`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const fundingRoutes = [
    'ndis', 'medicare', 'private', 'home-care-package', 'dva',
  ].map((slug) => ({
    url: `${BASE}/${slug}-speech-therapy-sydney-nsw`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const suburbRoutes = [
    'arncliffe', 'burwood', 'campsie', 'canterbury-bankstown', 'hurstville',
    'inner-west-sydney', 'kogarah', 'marrickville', 'rockdale', 'st-george', 'strathfield',
  ].map((suburb) => ({
    url: `${BASE}/speech-pathologist-${suburb}-nsw`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [
    ...staticRoutes,
    ...conditionRoutes,
    ...serviceRoutes,
    ...fundingRoutes,
    ...suburbRoutes,
  ];
}
