import Link from 'next/link';

export const metadata = {
  title: 'Page Not Found | Shine and Speak',
  description: 'The page you are looking for could not be found.',
};

export default function NotFound() {
  return (
    <section className="section-padding bg-accent min-h-[60vh] flex items-center">
      <div className="container-custom">
        <div className="bg-white border border-gray-200 rounded-3xl p-12 md:p-20 text-center max-w-3xl mx-auto shadow-xl">
          <h1 className="text-6xl md:text-8xl font-bold text-primary mb-6">404</h1>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Page not found</h2>
          <p className="text-gray-600 text-lg mb-10">
            Sorry, we couldn't find the page you're looking for. It might have been moved or deleted.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/" className="btn-primary px-8 py-4 shadow-md">
              Return to Homepage
            </Link>
            <Link href="/contact" className="btn-outline px-8 py-4">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
