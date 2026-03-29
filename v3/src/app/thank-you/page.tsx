import Link from "next/link";

export const metadata = {
  title: "Thank You | Shine and Speak",
  description: "Thank you for your enquiry. We will be in touch shortly.",
};

export default function ThankYouPage() {
  return (
    <main className="flex flex-col min-h-screen items-center justify-center bg-blue-50 py-20">
      <div className="container mx-auto px-4 max-w-2xl text-center bg-white p-12 rounded-2xl shadow-xl">
        <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-4xl mx-auto mb-6">
          ✓
        </div>
        <h1 className="text-4xl font-bold text-navy-blue mb-6">Thank you — we'll be in touch within 24 hours</h1>
        <p className="text-lg text-gray-700 mb-8">
          We have received your enquiry. Here is what happens next:
        </p>
        
        <div className="text-left bg-gray-50 p-6 rounded-xl mb-8">
          <h2 className="text-xl font-bold text-navy-blue mb-4">What happens in the free discovery call?</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>We'll discuss your child's current communication skills and your main concerns.</li>
            <li>I'll explain how therapy works and answer any questions you have.</li>
            <li>We'll decide together if a full assessment is the right next step.</li>
          </ul>
        </div>

        <div className="text-left bg-gray-50 p-6 rounded-xl mb-8">
          <h2 className="text-xl font-bold text-navy-blue mb-4">What to prepare</h2>
          <p className="text-gray-700">
            If you have any previous reports from paediatricians, teachers, or other allied health professionals, please have them ready. It's also helpful to write down a few specific examples of situations where your child finds communication challenging.
          </p>
        </div>

        <Link href="/" className="inline-block bg-navy-blue text-white px-8 py-3 rounded-md font-bold hover:bg-blue-900 transition">
          Return to Homepage
        </Link>
      </div>
    </main>
  );
}
