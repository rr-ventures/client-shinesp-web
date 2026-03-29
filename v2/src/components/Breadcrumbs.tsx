import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href: string;
}

export default function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: `https://www.shineandspeak.com.au${item.href}`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <nav aria-label="Breadcrumb" className="mb-6">
        <ol className="flex items-center flex-wrap gap-1 text-sm text-gray-500">
          {items.map((item, index) => (
            <li key={item.href} className="flex items-center">
              {index > 0 && <ChevronRight className="w-4 h-4 mx-1 text-gray-400" />}
              {index === items.length - 1 ? (
                <span className="text-[#1B365D] font-medium" aria-current="page">
                  {item.label}
                </span>
              ) : (
                <Link href={item.href} className="hover:text-[#E8A84C] transition-colors">
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
