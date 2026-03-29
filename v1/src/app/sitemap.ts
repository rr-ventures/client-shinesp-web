import { MetadataRoute } from 'next';

const baseUrl = 'https://shineandspeak.com.au';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/about',
    '/contact',
    '/how-it-works',
    '/refer-a-client',
    '/ndis-service-guide-support-coordinators',
    '/book',
    '/zh',
    '/paediatric-speech-therapy-sydney-nsw',
    '/adult-speech-therapy-sydney-nsw',
    '/speech-therapy-autism-sydney-nsw',
    '/speech-pathologist-burwood-nsw',
    '/fees',
    '/ndis-speech-therapy-sydney-nsw',
    '/medicare-speech-therapy-sydney-nsw',
    '/private-speech-therapy-sydney-nsw',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: route === '' ? 1 : 0.8,
  }));
}
