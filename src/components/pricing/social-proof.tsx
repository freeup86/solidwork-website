const initials = ['JR', 'MK', 'TS', 'DL', 'AP', 'RC'];

export function SocialProof() {
  return (
    <div className="flex flex-col items-center gap-6 text-center">
      {/* Avatar row */}
      <div className="flex items-center">
        <div className="flex -space-x-3">
          {initials.map((letters) => (
            <div
              key={letters}
              className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-[var(--color-ink)] font-mono text-xs font-bold text-[var(--color-amber)]"
            >
              {letters}
            </div>
          ))}
        </div>
        <span className="ml-4 font-display text-sm font-semibold text-[var(--color-ink)]">
          Trusted by 12+ electrical contractors
        </span>
      </div>

      {/* Testimonial */}
      <blockquote className="max-w-lg">
        <p className="text-[var(--color-slate)] italic">
          &ldquo;We used to spend 6 hours per estimate. SolidBid cut that to
          under 2. The accuracy is as good as our senior estimator.&rdquo;
        </p>
        <footer className="mt-2 font-display text-sm font-semibold text-[var(--color-ink)]">
          &mdash; Journeyman Electrician, San Diego
        </footer>
      </blockquote>
    </div>
  );
}
