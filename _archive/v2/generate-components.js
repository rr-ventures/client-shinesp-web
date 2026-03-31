const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');
const componentsDir = path.join(srcDir, 'components');

if (!fs.existsSync(componentsDir)) {
  fs.mkdirSync(componentsDir, { recursive: true });
}

// 1. Header.tsx
const headerContent = `"use client";

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      {/* Top Bar */}
      <div className="bg-navy-900 text-white text-sm py-2 px-4 md:px-8 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <a href="tel:0400000000" className="flex items-center hover:text-gold-400 transition-colors">
            <Phone className="w-4 h-4 mr-2" />
            <span className="hidden md:inline">Call us: </span> 0400 000 000
          </a>
        </div>
        <div className="flex items-center space-x-4">
          <Link href="/zh" className="hover:text-gold-400 transition-colors">EN/中文</Link>
        </div>
      </div>

      {/* Main Nav */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          {/* REPLACE: Logo */}
          <div className="text-2xl font-bold text-navy-900">Shine & Speak</div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          <div className="relative group">
            <button className="text-navy-900 font-medium hover:text-gold-500 flex items-center">
              Services ▾
            </button>
            <div className="absolute top-full left-0 mt-2 w-64 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 flex flex-col py-2">
              <Link href="/paediatric-speech-therapy-sydney-nsw" className="px-4 py-2 hover:bg-gray-50 text-navy-800">Paediatric Speech Therapy</Link>
              <Link href="/adult-speech-therapy-sydney-nsw" className="px-4 py-2 hover:bg-gray-50 text-navy-800">Adult Speech Therapy</Link>
              <Link href="/mobile-speech-therapy-sydney-nsw" className="px-4 py-2 hover:bg-gray-50 text-navy-800">Mobile Speech Therapy</Link>
              <Link href="/telehealth-speech-therapy-sydney-nsw" className="px-4 py-2 hover:bg-gray-50 text-navy-800">Telehealth Speech Therapy</Link>
            </div>
          </div>
          <Link href="/how-it-works" className="text-navy-900 font-medium hover:text-gold-500">How It Works</Link>
          <div className="relative group">
            <button className="text-navy-900 font-medium hover:text-gold-500 flex items-center">
              Funding & Fees ▾
            </button>
            <div className="absolute top-full left-0 mt-2 w-64 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 flex flex-col py-2">
              <Link href="/ndis-speech-therapy-sydney-nsw" className="px-4 py-2 hover:bg-gray-50 text-navy-800">NDIS Speech Therapy</Link>
              <Link href="/medicare-speech-therapy-sydney-nsw" className="px-4 py-2 hover:bg-gray-50 text-navy-800">Medicare Rebates</Link>
              <Link href="/fees" className="px-4 py-2 hover:bg-gray-50 text-navy-800">Fees & Pricing</Link>
            </div>
          </div>
          <Link href="/about" className="text-navy-900 font-medium hover:text-gold-500">About</Link>
          <div className="relative group">
            <button className="text-navy-900 font-medium hover:text-gold-500 flex items-center">
              Areas ▾
            </button>
            <div className="absolute top-full left-0 mt-2 w-64 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 flex flex-col py-2">
              <Link href="/speech-pathologist-burwood-nsw" className="px-4 py-2 hover:bg-gray-50 text-navy-800">Burwood</Link>
              <Link href="/speech-pathologist-inner-west-sydney-nsw" className="px-4 py-2 hover:bg-gray-50 text-navy-800">Inner West Sydney</Link>
            </div>
          </div>
          <Link href="/contact" className="text-navy-900 font-medium hover:text-gold-500">Contact</Link>
        </nav>

        {/* CTAs */}
        <div className="hidden md:flex items-center space-x-4">
          <Link href="/refer-a-client" className="text-navy-900 font-medium hover:text-gold-500 border border-navy-900 px-4 py-2 rounded-md transition-colors">
            Refer a Client
          </Link>
          <Link href="/contact" className="bg-gold-500 text-navy-900 font-bold px-6 py-2 rounded-md hover:bg-gold-400 transition-colors">
            Book a Free Call
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-navy-900" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 space-y-4 shadow-lg">
          <Link href="/paediatric-speech-therapy-sydney-nsw" className="block text-navy-900 font-medium">Services</Link>
          <Link href="/how-it-works" className="block text-navy-900 font-medium">How It Works</Link>
          <Link href="/fees" className="block text-navy-900 font-medium">Funding & Fees</Link>
          <Link href="/about" className="block text-navy-900 font-medium">About</Link>
          <Link href="/speech-pathologist-inner-west-sydney-nsw" className="block text-navy-900 font-medium">Areas</Link>
          <Link href="/contact" className="block text-navy-900 font-medium">Contact</Link>
          <div className="pt-4 flex flex-col space-y-3">
            <Link href="/refer-a-client" className="text-center text-navy-900 font-medium border border-navy-900 px-4 py-2 rounded-md">
              Refer a Client
            </Link>
            <Link href="/contact" className="text-center bg-gold-500 text-navy-900 font-bold px-6 py-2 rounded-md">
              Book a Free Call
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
`;

fs.writeFileSync(path.join(componentsDir, 'Header.tsx'), headerContent);

// 2. Footer.tsx
const footerContent = `import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="text-2xl font-bold text-gold-500 mb-6">Shine & Speak</div>
            <p className="text-gray-300 mb-6">
              Personalised speech therapy delivered to your home, school, or online. Bilingual English & Mandarin.
            </p>
            <div className="space-y-2 text-gray-300">
              <p>Written by Shine Teoh, Certified Practising Speech Pathologist</p>
              <p>ABN: 12 345 678 900</p>
              <p>NDIS Provider: 4050000000</p>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6 text-gold-400">Quick Links</h3>
            <ul className="space-y-3 text-gray-300">
              <li><Link href="/paediatric-speech-therapy-sydney-nsw" className="hover:text-gold-400">Paediatric Services</Link></li>
              <li><Link href="/adult-speech-therapy-sydney-nsw" className="hover:text-gold-400">Adult Services</Link></li>
              <li><Link href="/how-it-works" className="hover:text-gold-400">How It Works</Link></li>
              <li><Link href="/ndis-speech-therapy-sydney-nsw" className="hover:text-gold-400">NDIS Funding</Link></li>
              <li><Link href="/about" className="hover:text-gold-400">About Shine</Link></li>
              <li><Link href="/contact" className="hover:text-gold-400">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 text-gold-400">Service Areas</h3>
            <ul className="space-y-3 text-gray-300">
              <li><Link href="/speech-pathologist-arncliffe-nsw" className="hover:text-gold-400">Arncliffe</Link></li>
              <li><Link href="/speech-pathologist-burwood-nsw" className="hover:text-gold-400">Burwood</Link></li>
              <li><Link href="/speech-pathologist-hurstville-nsw" className="hover:text-gold-400">Hurstville</Link></li>
              <li><Link href="/speech-pathologist-strathfield-nsw" className="hover:text-gold-400">Strathfield</Link></li>
              <li><Link href="/speech-pathologist-inner-west-sydney-nsw" className="hover:text-gold-400">Inner West Sydney</Link></li>
              <li><Link href="/telehealth-speech-therapy-sydney-nsw" className="hover:text-gold-400">Telehealth Australia-wide</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 text-gold-400">Connect</h3>
            <div className="flex space-x-4 mb-6">
              {/* Social placeholders */}
              <a href="#" className="w-10 h-10 bg-navy-800 rounded-full flex items-center justify-center hover:bg-gold-500 hover:text-navy-900 transition-colors">IN</a>
              <a href="#" className="w-10 h-10 bg-navy-800 rounded-full flex items-center justify-center hover:bg-gold-500 hover:text-navy-900 transition-colors">WA</a>
              <a href="#" className="w-10 h-10 bg-navy-800 rounded-full flex items-center justify-center hover:bg-gold-500 hover:text-navy-900 transition-colors">WC</a>
            </div>
            <div className="flex flex-wrap gap-4">
              <span className="bg-white text-navy-900 text-xs font-bold px-2 py-1 rounded">CPSP</span>
              <span className="bg-white text-navy-900 text-xs font-bold px-2 py-1 rounded">NDIS Registered</span>
              <span className="bg-white text-navy-900 text-xs font-bold px-2 py-1 rounded">Medicare</span>
            </div>
          </div>
        </div>
        
        <div className="border-t border-navy-800 pt-8 mt-8 text-center text-gray-400 text-sm">
          <p>&copy; 2026 Shine and Speak. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
`;

fs.writeFileSync(path.join(componentsDir, 'Footer.tsx'), footerContent);

// 3. Breadcrumbs.tsx
const breadcrumbsContent = `import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href: string;
}

export default function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex items-center space-x-2 text-sm text-gray-500">
        {items.map((item, index) => (
          <li key={item.href} className="flex items-center">
            {index > 0 && <ChevronRight className="w-4 h-4 mx-2 text-gray-400" />}
            {index === items.length - 1 ? (
              <span className="text-navy-900 font-medium" aria-current="page">
                {item.label}
              </span>
            ) : (
              <Link href={item.href} className="hover:text-gold-600 transition-colors">
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
`;

fs.writeFileSync(path.join(componentsDir, 'Breadcrumbs.tsx'), breadcrumbsContent);

// 4. ScrollToTop.tsx
const scrollToTopContent = `"use client";

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
`;

fs.writeFileSync(path.join(componentsDir, 'ScrollToTop.tsx'), scrollToTopContent);

console.log('Components generated successfully.');
