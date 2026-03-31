export const SITE_URL = 'https://shineandspeak.com.au';
export const BUSINESS_NAME = 'Shine and Speak';
export const PHONE_E164 = '+61421608819';
export const PHONE_DISPLAY = '0421 608 819';
export const EMAIL = 'admin@shineandspeak.com.au';
export const OG_IMAGE_URL = `${SITE_URL}/shine-and-speak-logo-horizontal-transparent.png`; // REPLACE: swap for a proper 1200×630 Open Graph card image

const AREA_SERVED = [
  'Inner West Sydney', 'Burwood', 'Hurstville', 'Strathfield',
  'Canterbury-Bankstown', 'Campsie', 'Rockdale', 'Kogarah',
  'Marrickville', 'Arncliffe', 'St George', 'Sydney NSW', 'Australia',
];

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: BUSINESS_NAME,
  url: SITE_URL,
  logo: OG_IMAGE_URL,
  email: EMAIL,
  telephone: PHONE_E164,
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: PHONE_E164,
    contactType: 'customer service',
    availableLanguage: ['English', 'Chinese'],
  },
  areaServed: AREA_SERVED,
  sameAs: [
    'https://www.linkedin.com/company/shineandspeak', // REPLACE: real LinkedIn URL
    'https://www.facebook.com/shineandspeak',          // REPLACE: real Facebook URL
    'https://www.instagram.com/shineandspeak',          // REPLACE: real Instagram URL
  ],
};

export const medicalBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'MedicalBusiness',
  name: BUSINESS_NAME,
  url: SITE_URL,
  telephone: PHONE_E164,
  email: EMAIL,
  image: OG_IMAGE_URL,
  priceRange: '$$',
  areaServed: AREA_SERVED,
  geo: {
    '@type': 'GeoCoordinates',
    latitude: -33.9369,
    longitude: 151.1539,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00',
    },
  ],
  paymentAccepted: 'NDIS, Medicare, Private Pay, Home Care Package, DVA',
  availableLanguage: ['English', 'Chinese'],
  knowsAbout: [
    'Speech Therapy', 'Speech Pathology', 'Autism Spectrum Disorder',
    'ADHD', 'Language Delay', 'Stuttering', 'Literacy', 'AAC',
  ],
};

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `${SITE_URL}${item.url}`,
    })),
  };
}

export function serviceSchema(params: {
  name: string;
  description: string;
  url: string;
  serviceType?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: params.name,
    description: params.description,
    url: `${SITE_URL}${params.url}`,
    provider: {
      '@type': 'MedicalBusiness',
      name: BUSINESS_NAME,
      url: SITE_URL,
    },
    areaServed: AREA_SERVED,
    serviceType: params.serviceType ?? 'Speech Pathology',
    availableLanguage: ['English', 'Chinese'],
  };
}

export function faqPageSchema(items: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}
