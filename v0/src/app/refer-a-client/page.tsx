import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Refer a Client | Shine and Speak",
  description: "Refer a Client at Shine and Speak. Mobile and telehealth speech pathology services.",
};

export default function PlaceholderPage() {
  return (
    <article className="container mx-auto px-4 py-20 max-w-4xl text-center min-h-[60vh] flex flex-col justify-center">
      <h1 className="text-4xl md:text-5xl font-bold text-brand-navy mb-6">Refer a Client</h1>
      <p className="text-xl text-gray-600 mb-8">Content coming soon.</p>
      <Link href="/" className="text-brand-gold font-bold hover:underline">
        ← Return to Homepage
      </Link>
    </article>
  );
}
