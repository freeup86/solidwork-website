'use client';

import { useState, useId } from 'react';
import { Info } from 'lucide-react';

interface FeatureTooltipProps {
  content: string;
}

export function FeatureTooltip({ content }: FeatureTooltipProps) {
  const [visible, setVisible] = useState(false);
  const tooltipId = useId();

  return (
    <span className="relative inline-flex items-center">
      <button
        type="button"
        className="ml-1.5 flex h-5 w-5 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-muted)] text-[var(--color-steel)] transition-colors hover:border-[var(--color-amber)] hover:text-[var(--color-amber)] focus:border-[var(--color-amber)] focus:text-[var(--color-amber)]"
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
        onFocus={() => setVisible(true)}
        onBlur={() => setVisible(false)}
        aria-describedby={tooltipId}
        aria-label="More info"
      >
        <Info size={12} />
      </button>
      <span
        id={tooltipId}
        role="tooltip"
        className={`absolute bottom-full left-1/2 z-20 mb-2 w-56 -translate-x-1/2 rounded-xl bg-[var(--color-ink)] p-3 text-xs leading-relaxed text-white shadow-lg transition-all duration-200 ${
          visible
            ? 'pointer-events-auto translate-y-0 opacity-100'
            : 'pointer-events-none translate-y-1 opacity-0'
        }`}
      >
        {content}
        <span className="absolute left-1/2 top-full -translate-x-1/2 border-4 border-transparent border-t-[var(--color-ink)]" />
      </span>
    </span>
  );
}
