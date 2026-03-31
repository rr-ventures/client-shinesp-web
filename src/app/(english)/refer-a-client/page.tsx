import type { Metadata } from "next";
import Link from "next/link";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import ReferralForm from "./ReferralForm";

export const metadata: Metadata = {
  title: "Refer a Client | NDIS Support Coordinators | Shine and Speak",
  description:
    "Refer a client for speech therapy in Sydney. 24-hour response, all NDIS management types, detailed reporting. Mobile & telehealth. Inner West Sydney.",
  alternates: {
    canonical: "https://shineandspeak.com.au/refer-a-client",
  },
  openGraph: {
    title: "Refer a Client | NDIS Support Coordinators | Shine and Speak",
    description:
      "Refer a client for speech therapy in Sydney. 24-hour response, all NDIS management types, detailed reporting. Mobile & telehealth. Inner West Sydney.",
    url: "https://shineandspeak.com.au/refer-a-client",
  },
};

export default function ReferClientPage() {
  return (
    <main className="flex flex-col min-h-screen bg-gray-50 py-12">
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Refer a Client", href: "/refer-a-client" },
        ]}
      />

      <div className="container mx-auto px-4 max-w-3xl">
        <nav aria-label="Breadcrumb" className="text-sm text-gray-500 mb-8">
          <Link href="/">Home</Link> &rsaquo; Refer a Client
        </nav>

        <h1 className="text-4xl font-bold text-navy-blue mb-4">Refer a Client</h1>
        <p className="text-lg text-gray-700 mb-8">
          Thank you for referring your client to Shine and Speak. Please complete the form below and I will be in touch within 24 hours to arrange an initial consultation. You can also call me directly on <a href="tel:+61421608819" className="text-navy-blue font-semibold hover:underline">0421 608 819</a>.
        </p>

        <ReferralForm />

        <p className="text-sm text-gray-500 mt-6 text-center">
          Are you a parent or carer?{" "}
          <Link href="/contact" className="text-navy-blue font-semibold hover:underline">
            Use the parent enquiry form instead
          </Link>.
        </p>
      </div>
    </main>
  );
}
