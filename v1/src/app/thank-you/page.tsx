import Link from 'next/link';
import { CheckCircle2, ArrowRight, FileText } from 'lucide-react';

export const metadata = {
  title: 'Thank You | Shine and Speak',
  description: 'Thank you for your enquiry. We will be in touch shortly to discuss your speech therapy needs.',
  alternates: {
    canonical: 'https://shineandspeak.com.au/thank-you',
  },
};

export default function ThankYouPage() {
  return (
    <section className="section-padding bg-accent min-h-[70vh] flex items-center">
      <div className="container-custom">
        <div className="bg-white border border-gray-200 rounded-3xl p-12 md:p-16 max-w-3xl mx-auto shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          
          <div className="relative z-10">
            <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-8">
              <CheckCircle2 size={40} />
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Thank you — we'll be in touch within 24 hours
            </h1>
            
            <p className="text-xl text-gray-700 mb-10 leading-relaxed">
              Your enquiry has been received. I'm looking forward to speaking with you about how we can support your speech therapy goals.
            </p>
            
            <div className="bg-accent p-8 rounded-2xl border border-gray-100 mb-10">
              <h2 className="text-2xl font-bold text-primary mb-4">What happens next?</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold shrink-0 mt-0.5">1</div>
                  <div>
                    <strong className="block text-gray-900 text-lg">Free Discovery Call</strong>
                    <span className="text-gray-600">We'll have a brief chat to discuss your needs and see if we're the right fit.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold shrink-0 mt-0.5">2</div>
                  <div>
                    <strong className="block text-gray-900 text-lg">Initial Assessment</strong>
                    <span className="text-gray-600">If you decide to proceed, we'll schedule a comprehensive assessment at your home, school, or online.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold shrink-0 mt-0.5">3</div>
                  <div>
                    <strong className="block text-gray-900 text-lg">Therapy Plan</strong>
                    <span className="text-gray-600">You'll receive a detailed report and a personalised therapy plan focused on practical goals.</span>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/" className="bg-primary text-white px-8 py-4 rounded-full font-bold text-center hover:bg-opacity-90 transition-all shadow-md flex items-center justify-center gap-2">
                Return to Homepage <ArrowRight size={20} />
              </Link>
              <Link href="/" className="border-2 border-primary text-primary px-8 py-4 rounded-full font-bold text-center hover:bg-primary hover:text-white transition-all flex items-center justify-center gap-2">
                <FileText size={20} /> Download Free Checklist
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
