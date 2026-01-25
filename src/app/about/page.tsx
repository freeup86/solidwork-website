import { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import { ArrowRight, Target, Eye, Heart, Shield } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About',
  description: 'SolidWork Systems builds practical software for real-world trades. Learn about our mission and values.',
};

const values = [
  {
    icon: Target,
    title: 'Reliability over flash',
    description: 'We build tools that work every time, not features that impress in demos.',
  },
  {
    icon: Eye,
    title: 'Clarity over complexity',
    description: 'If you need a manual to use it, we built it wrong.',
  },
  {
    icon: Heart,
    title: 'Respect for the craft',
    description: 'We learn from the people who do the work, not just the ones who manage it.',
  },
  {
    icon: Shield,
    title: 'Honest about limits',
    description: "We tell you what our tools can't do, not just what they can.",
  },
];

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-b from-[var(--color-muted)] to-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-[var(--color-charcoal)] sm:text-5xl">
              Confidence infrastructure for trades
            </h1>
            <p className="mt-6 text-lg text-[var(--color-slate)]">
              We build software that helps trade businesses trust their numbers, catch what they&apos;d otherwise miss,
              and spend less time on admin.
            </p>
          </div>
        </div>
      </section>

      {/* Why we built this */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold text-[var(--color-charcoal)]">Why we built this</h2>
            <div className="mt-8 space-y-6 text-lg text-[var(--color-slate)]">
              <p>
                We watched electrical contractors spend entire evenings counting symbols on PDFs.
                We saw business owners printing receipts into paper folders because their software
                couldn&apos;t tell them who spent what.
              </p>
              <p>
                The tools that exist are either built for enterprise (too expensive, too complex)
                or built for consumers (too simple, missing what matters). The middle gets ignored.
              </p>
              <p>
                So we&apos;re building for the middle. For the 10-person crew that doesn&apos;t need
                a 6-month implementation. For the estimator who does 5 bids a week and can&apos;t
                afford to miss a spec note. For the owner who just wants to know the numbers are right.
              </p>
              <p>
                <strong className="text-[var(--color-charcoal)]">
                  We&apos;re not trying to replace judgment. We&apos;re trying to give you better starting points.
                </strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-[var(--color-muted)] py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-[var(--color-charcoal)]">What we believe</h2>
          <div className="mt-16 grid gap-8 sm:grid-cols-2">
            {values.map((value) => (
              <div key={value.title} className="flex gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-[var(--color-charcoal)]">
                  <value.icon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[var(--color-charcoal)]">{value.title}</h3>
                  <p className="mt-2 text-[var(--color-slate)]">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team placeholder */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-[var(--color-charcoal)]">Small team, big focus</h2>
            <p className="mt-6 text-lg text-[var(--color-slate)]">
              We&apos;re a small team that talks to customers every week. We&apos;re not building in a vacuum—
              we&apos;re building alongside the people who will actually use this.
            </p>
            <p className="mt-4 text-[var(--color-slate)]">
              If you want to help shape what we build next, we&apos;d love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[var(--color-charcoal)] py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white">Want to work with us?</h2>
            <p className="mx-auto mt-4 max-w-2xl text-[var(--color-steel)]">
              Whether you want to pilot a product or just share your workflow pain, we want to hear from you.
            </p>
            <div className="mt-10">
              <Button href="/contact" size="lg" className="bg-white text-[var(--color-charcoal)] hover:bg-gray-100">
                Get in Touch
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
