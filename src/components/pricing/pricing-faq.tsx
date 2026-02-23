'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import type { FAQItem } from '@/lib/pricing';

function FAQAccordionItem({
  item,
  index,
}: {
  item: FAQItem;
  index: number;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const panelId = `pricing-faq-panel-${index}`;
  const buttonId = `pricing-faq-button-${index}`;

  return (
    <div className="border-b border-[var(--color-border)]">
      <button
        id={buttonId}
        type="button"
        className="group flex w-full items-center justify-between py-6 text-left"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls={panelId}
      >
        <span className="font-display text-lg font-semibold text-[var(--color-ink)] transition-colors group-hover:text-[var(--color-amber)]">
          {item.question}
        </span>
        <div
          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg transition-all ${
            isOpen ? 'bg-[var(--color-ink)]' : 'bg-[var(--color-muted)]'
          }`}
        >
          <ChevronDown
            className={`h-5 w-5 transition-all duration-300 ${
              isOpen
                ? 'rotate-180 text-[var(--color-amber)]'
                : 'text-[var(--color-slate)]'
            }`}
          />
        </div>
      </button>
      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        className={`grid transition-all duration-300 ${
          isOpen ? 'grid-rows-[1fr] pb-6' : 'grid-rows-[0fr]'
        }`}
      >
        <div className="overflow-hidden">
          <p className="leading-relaxed text-[var(--color-slate)]">
            {item.answer}
          </p>
        </div>
      </div>
    </div>
  );
}

interface PricingFAQProps {
  items: FAQItem[];
}

export function PricingFAQ({ items }: PricingFAQProps) {
  return (
    <div className="mx-auto max-w-3xl">
      {items.map((item, index) => (
        <FAQAccordionItem key={item.question} item={item} index={index} />
      ))}
    </div>
  );
}
