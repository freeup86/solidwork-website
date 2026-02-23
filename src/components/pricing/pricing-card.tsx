'use client';

import Link from 'next/link';
import { Check, Clock } from 'lucide-react';
import { FeatureTooltip } from './feature-tooltip';
import type { PricingTier } from '@/lib/pricing';

interface PricingCardProps {
  tier: PricingTier;
  isYearly: boolean;
}

export function PricingCard({ tier, isYearly }: PricingCardProps) {
  const price = isYearly ? tier.yearlyPrice : tier.monthlyPrice;
  const contactHref = `/contact?product=solidbid&plan=${tier.slug}`;

  return (
    <div
      className={`relative flex flex-col rounded-2xl border bg-white p-8 transition-shadow duration-300 hover:shadow-lg ${
        tier.popular
          ? 'border-2 border-[var(--color-amber)] shadow-md'
          : 'border-[var(--color-border)]'
      }`}
    >
      {/* Popular badge */}
      {tier.badge && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
          <span className="badge badge-amber whitespace-nowrap text-xs">
            {tier.badge}
          </span>
        </div>
      )}

      {/* Header */}
      <div className="mb-6">
        <h3 className="font-display text-lg font-bold text-[var(--color-ink)]">
          {tier.name}
        </h3>
        <p className="mt-1 text-sm text-[var(--color-slate)]">
          {tier.audience}
        </p>
      </div>

      {/* Price */}
      <div className="mb-6">
        <div className="flex items-baseline gap-1">
          <span className="font-display text-5xl font-bold tracking-tight text-[var(--color-ink)]">
            ${price}
          </span>
          <span className="text-sm text-[var(--color-steel)]">/mo</span>
        </div>
        {isYearly && (
          <div className="mt-1 flex items-center gap-2">
            <span className="text-sm text-[var(--color-steel)] line-through">
              ${tier.monthlyPrice}/mo
            </span>
            <span className="text-sm font-medium text-[var(--color-amber-deep)]">
              Billed ${tier.yearlyBilledTotal.toLocaleString()}/year
            </span>
          </div>
        )}
        {!isYearly && (
          <p className="mt-1 text-sm text-[var(--color-steel)]">
            Billed monthly
          </p>
        )}
      </div>

      {/* CTA */}
      <Link
        href={contactHref}
        className={`mb-2 flex h-12 items-center justify-center rounded-xl font-display text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5 ${
          tier.popular
            ? 'bg-[var(--color-amber)] text-white hover:bg-[var(--color-amber-deep)] shadow-sm'
            : 'bg-[var(--color-ink)] text-white hover:bg-[var(--color-charcoal)]'
        }`}
      >
        {tier.cta}
      </Link>
      <p className="mb-8 text-center text-xs text-[var(--color-steel)]">
        Switch plans or cancel anytime
      </p>

      {/* Features */}
      <div className="border-t border-[var(--color-border-subtle)] pt-6">
        <ul className="space-y-3">
          {tier.features.map((feature) => (
            <li
              key={feature.label}
              className="flex items-start gap-3 text-sm"
            >
              {feature.comingSoon ? (
                <Clock
                  size={16}
                  className="mt-0.5 shrink-0 text-[var(--color-steel)]"
                />
              ) : (
                <Check
                  size={16}
                  className="mt-0.5 shrink-0 text-[var(--success)]"
                />
              )}
              <span
                className={
                  feature.comingSoon
                    ? 'text-[var(--color-steel)]'
                    : 'text-[var(--color-slate)]'
                }
              >
                {feature.label}
                {feature.comingSoon && (
                  <span className="ml-2 inline-flex items-center rounded-full bg-[var(--color-muted)] px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-[var(--color-steel)]">
                    Coming Soon
                  </span>
                )}
                {feature.tooltip && (
                  <FeatureTooltip content={feature.tooltip} />
                )}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
