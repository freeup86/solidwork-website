'use client';

import { Button } from '@/components/ui/button';
import { useScrollRevealContainer } from '@/hooks/use-scroll-reveal';
import { ArrowRight } from 'lucide-react';
import {
  PrecisionIcon,
  ClarityIcon,
  HardHatIcon,
  TechCheckIcon,
} from '@/components/icons/trade-icons';

const values = [
  {
    Icon: PrecisionIcon,
    title: 'Reliability over flash',
    description: 'We build tools that work every time, not features that impress in demos.',
  },
  {
    Icon: ClarityIcon,
    title: 'Clarity over complexity',
    description: 'If you need a manual to use it, we built it wrong.',
  },
  {
    Icon: HardHatIcon,
    title: 'Respect for the craft',
    description: 'We learn from the people who do the work, not just the ones who manage it.',
  },
  {
    Icon: TechCheckIcon,
    title: 'Honest about limits',
    description: "We tell you what our tools can't do, not just what they can.",
  },
];

export default function AboutContent() {
  const scrollRef = useScrollRevealContainer();

  return (
    <div ref={scrollRef}>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[var(--background-warm)] py-24 lg:py-32">
        <div className="absolute inset-0 texture-grid opacity-50" />
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-[var(--color-blueprint)] opacity-10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-display text-4xl font-bold tracking-tight text-[var(--color-ink)] sm:text-5xl animate-fade-in-up">
              Confidence infrastructure for trades
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-[var(--color-slate)] animate-fade-in-up delay-100">
              We build software that helps trade businesses trust their numbers, catch what they&apos;d otherwise miss,
              and spend less time on admin.
            </p>
          </div>
        </div>
      </section>

      {/* Why we built this */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="reveal font-display text-3xl font-bold text-[var(--color-ink)]">Why we built this</h2>
            <div className="reveal mt-8 space-y-6 text-lg leading-relaxed text-[var(--color-slate)]" style={{ transitionDelay: '100ms' }}>
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
                <strong className="text-[var(--color-ink)]">
                  We&apos;re not trying to replace judgment. We&apos;re trying to give you better starting points.
                </strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="relative overflow-hidden bg-[var(--background-warm)] py-24 lg:py-32">
        <div className="absolute inset-0 texture-dots opacity-30" />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <h2 className="reveal text-center font-display text-3xl font-bold text-[var(--color-ink)]">What we believe</h2>
          <div className="section-divider-amber mx-auto mt-6 max-w-xs reveal" />
          <div className="mt-16 grid gap-8 sm:grid-cols-2">
            {values.map((value, index) => (
              <div key={value.title} className="reveal flex gap-4" style={{ transitionDelay: `${index * 100}ms` }}>
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-[var(--color-ink)]">
                  <value.Icon size={24} className="text-[var(--color-amber)]" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-[var(--color-ink)]">{value.title}</h3>
                  <p className="mt-2 leading-relaxed text-[var(--color-slate)]">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="reveal mx-auto max-w-3xl text-center">
            <h2 className="font-display text-3xl font-bold text-[var(--color-ink)]">Small team, big focus</h2>
            <p className="mt-6 text-lg leading-relaxed text-[var(--color-slate)]">
              We&apos;re a small team that talks to customers every week. We&apos;re not building in a vacuum&mdash;
              we&apos;re building alongside the people who will actually use this.
            </p>
            <p className="mt-4 text-[var(--color-slate)]">
              If you want to help shape what we build next, we&apos;d love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[var(--background-warm)] py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="reveal relative overflow-hidden rounded-3xl bg-gradient-to-br from-[var(--color-ink)] to-[var(--color-charcoal)]">
            <div className="absolute inset-0 texture-dots opacity-20" />
            <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-[var(--color-blueprint)] opacity-20 blur-3xl" />

            <div className="relative px-8 py-16 text-center sm:px-16 lg:py-20">
              <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">Want to work with us?</h2>
              <p className="mx-auto mt-4 max-w-2xl text-[var(--color-silver)]">
                Whether you want to pilot a product or just share your workflow pain, we want to hear from you.
              </p>
              <div className="mt-10">
                <Button href="/contact" size="lg" glow>
                  Get in Touch
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
