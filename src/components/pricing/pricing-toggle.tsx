'use client';

interface PricingToggleProps {
  isYearly: boolean;
  onToggle: (yearly: boolean) => void;
}

export function PricingToggle({ isYearly, onToggle }: PricingToggleProps) {
  return (
    <div className="flex flex-col items-center gap-3">
      <div
        role="radiogroup"
        aria-label="Billing period"
        className="inline-flex items-center rounded-full border border-[var(--color-border)] bg-[var(--color-muted)] p-1"
      >
        <button
          type="button"
          role="radio"
          aria-checked={!isYearly}
          className={`rounded-full px-5 py-2 font-display text-sm font-semibold transition-all duration-200 ${
            !isYearly
              ? 'bg-white text-[var(--color-ink)] shadow-sm'
              : 'text-[var(--color-steel)] hover:text-[var(--color-slate)]'
          }`}
          onClick={() => onToggle(false)}
        >
          Monthly
        </button>
        <button
          type="button"
          role="radio"
          aria-checked={isYearly}
          className={`flex items-center gap-2 rounded-full px-5 py-2 font-display text-sm font-semibold transition-all duration-200 ${
            isYearly
              ? 'bg-white text-[var(--color-ink)] shadow-sm'
              : 'text-[var(--color-steel)] hover:text-[var(--color-slate)]'
          }`}
          onClick={() => onToggle(true)}
        >
          Yearly
          <span className="badge badge-amber text-xs">Save 20%</span>
        </button>
      </div>
    </div>
  );
}
