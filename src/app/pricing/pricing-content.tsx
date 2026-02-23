'use client';

import { useState } from 'react';
import Link from 'next/link';
import { SolidBoltIcon } from '@/components/icons/trade-icons';
import { Button } from '@/components/ui/button';
import { PricingToggle } from '@/components/pricing/pricing-toggle';
import { PricingCard } from '@/components/pricing/pricing-card';
import { PricingFAQ } from '@/components/pricing/pricing-faq';
import { SocialProof } from '@/components/pricing/social-proof';
import { useScrollRevealContainer } from '@/hooks/use-scroll-reveal';
import { tiers, faqItems } from '@/lib/pricing';

export function PricingContent() {
  const [isYearly, setIsYearly] = useState(false);
  const scrollRef = useScrollRevealContainer();

  return (
    <div ref={scrollRef}>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[var(--background-warm)]">
        <div className="absolute inset-0 texture-grid opacity-40" />
        <div className="relative mx-auto max-w-7xl px-5 py-20 text-center sm:px-6 sm:py-28 lg:px-8">
          <div className="animate-fade-in">
            <span className="badge badge-amber">
              <SolidBoltIcon size={14} />
              Simple, transparent pricing
            </span>
          </div>
          <h1 className="animate-fade-in-up delay-100 mx-auto mt-6 max-w-2xl font-display text-4xl font-bold tracking-tight text-[var(--color-ink)] sm:text-5xl">
            Plans that grow with your crew
          </h1>
          <p className="animate-fade-in-up delay-200 mx-auto mt-5 max-w-xl text-lg text-[var(--color-slate)]">
            From solo estimators to multi-project firms. Pick the plan that fits
            your shop.
          </p>
        </div>
      </section>

      {/* Toggle + Pricing Cards */}
      <section className="relative bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          {/* Toggle */}
          <div className="reveal mb-12 flex justify-center">
            <PricingToggle isYearly={isYearly} onToggle={setIsYearly} />
          </div>

          {/* Cards */}
          <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-3">
            {tiers.map((tier, index) => (
              <div
                key={tier.slug}
                className="reveal"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <PricingCard tier={tier} isYearly={isYearly} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="relative bg-[var(--background-warm)] py-16 sm:py-20">
        <div className="absolute inset-0 texture-grid opacity-30" />
        <div className="reveal relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <SocialProof />
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="reveal mb-12 text-center">
            <h2 className="font-display text-3xl font-bold text-[var(--color-ink)]">
              Frequently asked questions
            </h2>
            <div className="section-divider-amber mx-auto mt-4 max-w-xs" />
          </div>
          <div className="reveal" style={{ transitionDelay: '100ms' }}>
            <PricingFAQ items={faqItems} />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative bg-[var(--background-warm)] py-16 sm:py-20">
        <div className="absolute inset-0 texture-grid opacity-30" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="reveal relative overflow-hidden rounded-3xl bg-[var(--color-ink)] px-8 py-16 text-center sm:px-16">
            {/* Texture overlay */}
            <div className="pointer-events-none absolute inset-0 texture-dots opacity-20" />
            {/* Glow orbs */}
            <div className="pointer-events-none absolute -left-20 -top-20 h-60 w-60 rounded-full bg-[var(--color-amber)] opacity-10 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-20 -right-20 h-60 w-60 rounded-full bg-[var(--color-blueprint)] opacity-10 blur-3xl" />

            <div className="relative">
              <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
                Not sure which plan fits?
              </h2>
              <p className="mx-auto mt-4 max-w-md text-[var(--color-silver)]">
                Tell us about your shop and we&rsquo;ll recommend the right
                setup. No pressure, no sales pitch.
              </p>
              <div className="mt-8">
                <Button href="/contact" size="lg" glow>
                  Talk to Us
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
