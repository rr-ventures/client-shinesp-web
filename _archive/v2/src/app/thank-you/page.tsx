import { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle2, FileText, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Thank You | Shine and Speak',
  description: 'Thank you for your enquiry. We will be in touch shortly.',
  alternates: {
    canonical: '/thank-you',
  },
  robots: {
    index: false,
  }
};

export default function ThankYouPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-3xl mx-auto px-4 md:px-8 text-center">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
          <CheckCircle2 className="w-10 h-10 text-green-600" />
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold text-[#1B365D] mb-6">
          Thank you — we'll be in touch within 24 hours
        </h1>
        
        <p className="text-xl text-gray-700 mb-12">
          Your details have been received. I look forward to speaking with you soon.
        </p>

        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-left mb-12">
          <h2 className="text-2xl font-bold text-[#1B365D] mb-6">What happens next?</h2>
          
          <div className="space-y-6">
            <div className="flex">
              <div className="flex-shrink-0 w-8 h-8 bg-gold-100 text-[#E8A84C] rounded-full flex items-center justify-center font-bold mr-4">1</div>
              <div>
                <h3 className="text-lg font-bold text-[#1B365D] mb-2">The Discovery Call</h3>
                <p className="text-gray-600">We'll have a brief, no-obligation chat about your child's needs. This is a chance for you to ask questions and for us to decide if I'm the right fit for your family.</p>
              </div>
            </div>
            
            <div className="flex">
              <div className="flex-shrink-0 w-8 h-8 bg-gold-100 text-[#E8A84C] rounded-full flex items-center justify-center font-bold mr-4">2</div>
              <div>
                <h3 className="text-lg font-bold text-[#1B365D] mb-2">What to prepare</h3>
                <p className="text-gray-600">If you have any previous reports from paediatricians, teachers, or other therapists, please have them ready. Think about the main goals you have for your child.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#F0F4F8] p-8 rounded-2xl border border-gray-200 text-left flex flex-col sm:flex-row items-center justify-between mb-12">
          <div className="mb-6 sm:mb-0 sm:mr-6">
            <h3 className="text-xl font-bold text-[#1B365D] mb-2">Free Resource</h3>
            <p className="text-gray-700">Download our checklist: "Is My Child's Speech on Track?"</p>
          </div>
          <button className="flex-shrink-0 flex items-center bg-white border border-gray-300 text-[#1B365D] font-bold px-6 py-3 rounded-md hover:bg-gray-50 transition-colors">
            <FileText className="w-5 h-5 mr-2" /> Download PDF
          </button>
        </div>

        <Link href="/" className="inline-flex items-center text-[#1B365D] font-bold hover:text-[#E8A84C] transition-colors">
          <ArrowRight className="w-5 h-5 mr-2 rotate-180" /> Return to Homepage
        </Link>
      </div>
    </main>
  );
}
