'use client';

import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { StatusBadge } from '@/components/ui/status-badge';
import { useToast } from '@/components/ui/toast';
import { useFocusTrap } from '@/hooks/use-focus-trap';
import { useScrollRevealContainer } from '@/hooks/use-scroll-reveal';
import { ArrowRight, X } from 'lucide-react';
import { products } from '@/lib/products';

function WaitlistModal({
  isOpen,
  onClose,
  productName,
  productId,
}: {
  isOpen: boolean;
  onClose: () => void;
  productName: string;
  productId: string;
}) {
  const [email, setEmail] = useState('');
  const [honeypot, setHoneypot] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { showToast } = useToast();
  const modalRef = useRef<HTMLDivElement>(null);
  const emailInputRef = useRef<HTMLInputElement>(null);
  useFocusTrap(modalRef, isOpen);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen && emailInputRef.current) {
      emailInputRef.current.focus();
    }
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (honeypot) {
      showToast('Something went wrong. Please try again.', 'error');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          product_interest: productId,
          source_page: '/products',
        }),
      });

      if (!response.ok) throw new Error('Failed to submit');

      showToast("You're on the list! We'll notify you when it's ready.", 'success');
      setEmail('');
      onClose();
    } catch {
      showToast('Something went wrong. Please try again.', 'error');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 z-40 bg-black/50" onClick={onClose} aria-hidden="true" />
      <div
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="waitlist-title"
        className="fixed left-1/2 top-1/2 z-50 w-full max-w-md -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-white p-8 shadow-xl"
      >
        <div className="flex items-center justify-between">
          <h3 id="waitlist-title" className="text-xl font-semibold text-[var(--color-charcoal)]">
            Get notified about {productName}
          </h3>
          <button onClick={onClose} aria-label="Close" className="text-[var(--color-slate)] hover:text-[var(--color-charcoal)]">
            <X className="h-5 w-5" />
          </button>
        </div>
        <p className="mt-2 text-[var(--color-slate)]">
          We&apos;ll email you when {productName} is ready for pilots.
        </p>
        <form onSubmit={handleSubmit} className="mt-6">
          <input
            type="text"
            name="hp_field"
            value={honeypot}
            onChange={(e) => setHoneypot(e.target.value)}
            className="hidden"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
          />
          <label htmlFor="waitlist-email" className="label">Email</label>
          <input
            type="email"
            id="waitlist-email"
            ref={emailInputRef}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@company.com"
            required
            className="w-full rounded-lg border border-[var(--color-border)] px-4 py-3 focus:border-[var(--color-accent)] focus:outline-none focus:ring-1 focus:ring-[var(--color-accent)]"
          />
          <Button type="submit" className="mt-4 w-full" isLoading={isSubmitting}>
            Join Waitlist
          </Button>
        </form>
      </div>
    </>
  );
}

export default function ProductsContent() {
  const scrollRef = useScrollRevealContainer();
  const [waitlistModal, setWaitlistModal] = useState<{ isOpen: boolean; productName: string; productId: string }>({
    isOpen: false,
    productName: '',
    productId: '',
  });

  return (
    <div ref={scrollRef}>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[var(--background-warm)] py-24 lg:py-32">
        <div className="absolute inset-0 texture-grid opacity-50" />
        <div className="absolute -top-40 -left-40 h-80 w-80 rounded-full bg-[var(--color-amber)] opacity-10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-display text-4xl font-bold tracking-tight text-[var(--color-ink)] sm:text-5xl animate-fade-in-up">
              Products
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-[var(--color-slate)] animate-fade-in-up delay-100">
              Each tool solves one problem well. No bloat, no feature creep.
            </p>
          </div>
        </div>
      </section>

      {/* Product selector */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="reveal flex flex-wrap justify-center gap-4">
            <div className="rounded-xl border border-[var(--color-border)] bg-white px-5 py-3 text-sm">
              <strong className="font-display text-[var(--color-ink)]">Estimating?</strong>
              <span className="text-[var(--color-amber)]"> → SolidBid</span>
            </div>
            <div className="rounded-xl border border-[var(--color-border)] bg-white px-5 py-3 text-sm">
              <strong className="font-display text-[var(--color-ink)]">Expense tracking?</strong>
              <span className="text-[var(--color-slate)]"> → PaperTrail (coming)</span>
            </div>
            <div className="rounded-xl border border-[var(--color-border)] bg-white px-5 py-3 text-sm">
              <strong className="font-display text-[var(--color-ink)]">Compliance?</strong>
              <span className="text-[var(--color-slate)]"> → CityShield (coming)</span>
            </div>
          </div>
        </div>
      </section>

      {/* Products grid */}
      <section className="py-12 pb-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-3">
            {products.map((product, index) => (
              <div
                key={product.name}
                className="reveal group glow-card relative rounded-2xl border border-[var(--color-border)] bg-white p-8 transition-all"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--color-ink)]">
                    <product.Icon size={24} className="text-[var(--color-amber)]" />
                  </div>
                  <StatusBadge status={product.status} />
                </div>
                <h3 className="mt-6 font-display text-xl font-bold text-[var(--color-ink)]">
                  {product.name}
                </h3>
                <p className="mt-1 font-display text-sm font-semibold text-[var(--color-amber)]">
                  {product.tagline}
                </p>
                <p className="mt-4 leading-relaxed text-[var(--color-slate)]">
                  {product.description}
                </p>
                <div className="mt-6">
                  {product.status === 'coming' && product.waitlistId ? (
                    <Button
                      variant="secondary"
                      onClick={() =>
                        setWaitlistModal({
                          isOpen: true,
                          productName: product.name,
                          productId: product.waitlistId!,
                        })
                      }
                    >
                      Join Waitlist
                    </Button>
                  ) : (
                    <Button href={product.href}>
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[var(--background-warm)] py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="reveal relative overflow-hidden rounded-3xl bg-gradient-to-br from-[var(--color-ink)] to-[var(--color-charcoal)]">
            <div className="absolute inset-0 texture-dots opacity-20" />
            <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-[var(--color-amber)] opacity-20 blur-3xl" />

            <div className="relative px-8 py-16 text-center sm:px-16 lg:py-20">
              <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">Not sure which product fits?</h2>
              <p className="mx-auto mt-4 max-w-2xl text-[var(--color-silver)]">
                Tell us what you&apos;re struggling with and we&apos;ll point you in the right direction.
              </p>
              <div className="mt-10">
                <Button href="/contact" size="lg" glow>
                  Talk to Us
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Waitlist Modal */}
      <WaitlistModal
        isOpen={waitlistModal.isOpen}
        onClose={() => setWaitlistModal({ ...waitlistModal, isOpen: false })}
        productName={waitlistModal.productName}
        productId={waitlistModal.productId}
      />
    </div>
  );
}
