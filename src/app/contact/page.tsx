import { Suspense } from 'react';
import { Metadata } from 'next';
import ContactForm from './contact-form';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with SolidWork Systems. Request a pilot or share your workflow challenges.',
};

function ContactFormSkeleton() {
  return (
    <div>
      {/* Hero skeleton */}
      <section className="bg-gradient-to-b from-[var(--color-muted)] to-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="mx-auto h-10 w-64 animate-pulse rounded bg-gray-200" />
            <div className="mx-auto mt-4 h-6 w-96 animate-pulse rounded bg-gray-200" />
          </div>
        </div>
      </section>

      {/* Form skeleton */}
      <section className="py-16">
        <div className="mx-auto max-w-xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i}>
                <div className="h-4 w-20 animate-pulse rounded bg-gray-200" />
                <div className="mt-1 h-12 w-full animate-pulse rounded-lg bg-gray-200" />
              </div>
            ))}
            <div className="h-12 w-full animate-pulse rounded-lg bg-gray-300" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default function ContactPage() {
  return (
    <Suspense fallback={<ContactFormSkeleton />}>
      <ContactForm />
    </Suspense>
  );
}
