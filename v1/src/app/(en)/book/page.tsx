import Link from 'next/link';
import BookForm from './BookForm';

export const metadata = {
  title: 'Book a Free Discovery Call | Shine and Speak',
  description: 'Book a free 15-minute discovery call to discuss your speech therapy needs and find out how we can help.',
  alternates: {
    canonical: 'https://shineandspeak.com.au/book',
  },
};

export default function BookPage() {
  return (
    <>
      <div className="bg-accent py-4 border-b border-gray-200">
        <div className="container-custom">
          <nav className="text-sm text-gray-600 flex items-center gap-2">
            <Link href="/" className="hover:text-primary">Home</Link>
            <span>&gt;</span>
            <span className="text-primary font-medium">Book a Free Call</span>
          </nav>
        </div>
      </div>

      <section className="section-padding bg-accent min-h-[80vh]">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-10">
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                Book a Free Discovery Call
              </h1>
              <p className="text-xl text-gray-700">
                Let's chat about your child's needs and see if we're the right fit. No obligation, no pressure.
              </p>
            </div>

            <BookForm />
          </div>
        </div>
      </section>
    </>
  );
}
