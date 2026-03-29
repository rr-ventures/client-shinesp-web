import type { MetadataRoute } from "next";

const BASE_URL = "https://shineandspeak.com.au";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const essentialPages = [
    { url: "/", priority: 1.0, changeFrequency: "weekly" as const },
    { url: "/about", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/contact", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/how-it-works", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/refer-a-client", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/fees", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/zh", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/ndis-service-guide-support-coordinators", priority: 0.7, changeFrequency: "monthly" as const },
  ];

  const conditionPages = [
    "/speech-therapy-autism-sydney-nsw",
    "/speech-therapy-adhd-sydney-nsw",
    "/speech-therapy-language-delay-sydney-nsw",
    "/speech-therapy-speech-sounds-sydney-nsw",
    "/speech-therapy-stuttering-sydney-nsw",
    "/speech-therapy-literacy-sydney-nsw",
    "/speech-therapy-aphasia-sydney-nsw",
  ];

  const servicePages = [
    "/paediatric-speech-therapy-sydney-nsw",
    "/adult-speech-therapy-sydney-nsw",
    "/mobile-speech-therapy-sydney-nsw",
    "/telehealth-speech-therapy-sydney-nsw",
    "/school-based-speech-therapy-sydney-nsw",
    "/speech-therapy-assessment-sydney-nsw",
    "/speech-therapy-reports-sydney-nsw",
    "/parent-coaching-speech-therapy-sydney-nsw",
  ];

  const fundingPages = [
    "/ndis-speech-therapy-sydney-nsw",
    "/medicare-speech-therapy-sydney-nsw",
    "/private-speech-therapy-sydney-nsw",
    "/home-care-package-speech-therapy-sydney-nsw",
    "/dva-speech-therapy-sydney-nsw",
  ];

  const suburbPages = [
    "/speech-pathologist-arncliffe-nsw",
    "/speech-pathologist-burwood-nsw",
    "/speech-pathologist-hurstville-nsw",
    "/speech-pathologist-strathfield-nsw",
    "/speech-pathologist-canterbury-bankstown-nsw",
    "/speech-pathologist-campsie-nsw",
    "/speech-pathologist-rockdale-nsw",
    "/speech-pathologist-kogarah-nsw",
    "/speech-pathologist-marrickville-nsw",
    "/speech-pathologist-inner-west-sydney-nsw",
    "/speech-pathologist-st-george-nsw",
  ];

  const allPages: MetadataRoute.Sitemap = [
    ...essentialPages.map(({ url, priority, changeFrequency }) => ({
      url: `${BASE_URL}${url}`,
      lastModified: now,
      changeFrequency,
      priority,
    })),
    ...[...conditionPages, ...servicePages].map((url) => ({
      url: `${BASE_URL}${url}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...fundingPages.map((url) => ({
      url: `${BASE_URL}${url}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...suburbPages.map((url) => ({
      url: `${BASE_URL}${url}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];

  return allPages;
}
