import Link from 'next/link';
import ReferForm from './ReferForm';

export const metadata = {
  title: 'Refer a Client | Shine and Speak Speech Pathology',
  description: 'Refer a client for speech therapy. Online referral form for NDIS Support Coordinators, GPs, educators, and allied health professionals.',
  alternates: {
    canonical: 'https://shineandspeak.com.au/refer-a-client',
  },
};

export default function ReferAClientPage() {
  return (
    <>
      <div className="bg-accent py-4 border-b border-gray-200">
        <div className="container-custom">
          <nav className="text-sm text-gray-600 flex items-center gap-2">
            <Link href="/" className="hover:text-primary">Home</Link>
            <span>&gt;</span>
            <span className="text-primary font-medium">Refer a Client</span>
          </nav>
        </div>
      </div>

      <section className="bg-accent pt-12 pb-16">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Refer a Client
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              I work closely with NDIS support coordinators, GPs, and allied health professionals to provide timely, high-quality speech therapy. Please complete the form below to initiate a referral.
            </p>
          </div>
        </div>
      </section>

      <ReferForm />
    </>
  );
}
