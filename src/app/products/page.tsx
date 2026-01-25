'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/toast';
import { ArrowRight, FileText, Receipt, Shield, X } from 'lucide-react';

const products = [
  {
    name: 'SolidBid',
    tagline: 'Upload plans. Get a solid bid.',
    description: 'Turn electrical PDFs into material counts, wire lists, and baseline labor estimates. Stop counting symbols by hand.',
    href: '/products/solidbid',
    status: 'pilot' as const,
    icon: FileText,
    category: 'estimating',
  },
  {
    name: 'PaperTrail',
    tagline: 'Receipts that actually get done.',
    description: 'Employees snap receipts. Owners see who spent what. No more paper folders or chasing people down.',
    href: '#',
    status: 'coming' as const,
    icon: Receipt,
    category: 'spending',
    waitlistId: 'papertrail',
  },
  {
    name: 'CityShield',
    tagline: 'Know before you get fined.',
    description: 'Automatic compliance checks for local labor laws. Upload schedules, catch violations before payroll.',
    href: '#',
    status: 'coming' as const,
    icon: Shield,
    category: 'compliance',
    waitlistId: 'cityshield',
  },
];

function StatusBadge({ status }: { status: 'live' | 'pilot' | 'coming' }) {
  const styles = {
    live: 'bg-green-100 text-green-800',
    pilot: 'bg-amber-100 text-amber-800',
    coming: 'bg-gray-100 text-gray-600',
  };

  const labels = {
    live: 'Live',
    pilot: 'Pilot',
    coming: 'Coming Soon',
  };

  return (
    <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${styles[status]}`}>
      {labels[status]}
    </span>
  );
}

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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { showToast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
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
      <div className="fixed inset-0 z-40 bg-black/50" onClick={onClose} />
      <div className="fixed left-1/2 top-1/2 z-50 w-full max-w-md -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-white p-8 shadow-xl">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold text-[var(--color-charcoal)]">
            Get notified about {productName}
          </h3>
          <button onClick={onClose} className="text-[var(--color-slate)] hover:text-[var(--color-charcoal)]">
            <X className="h-5 w-5" />
          </button>
        </div>
        <p className="mt-2 text-[var(--color-slate)]">
          We&apos;ll email you when {productName} is ready for pilots.
        </p>
        <form onSubmit={handleSubmit} className="mt-6">
          <input
            type="email"
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

export default function ProductsPage() {
  const [waitlistModal, setWaitlistModal] = useState<{ isOpen: boolean; productName: string; productId: string }>({
    isOpen: false,
    productName: '',
    productId: '',
  });

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-b from-[var(--color-muted)] to-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-[var(--color-charcoal)] sm:text-5xl">
              Products
            </h1>
            <p className="mt-6 text-lg text-[var(--color-slate)]">
              Each tool solves one problem well. No bloat, no feature creep.
            </p>
          </div>
        </div>
      </section>

      {/* Product selector */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            <div className="rounded-lg bg-[var(--color-muted)] px-4 py-2 text-sm">
              <strong>Estimating?</strong> → SolidBid
            </div>
            <div className="rounded-lg bg-[var(--color-muted)] px-4 py-2 text-sm">
              <strong>Expense tracking?</strong> → PaperTrail (coming soon)
            </div>
            <div className="rounded-lg bg-[var(--color-muted)] px-4 py-2 text-sm">
              <strong>Compliance?</strong> → CityShield (coming soon)
            </div>
          </div>
        </div>
      </section>

      {/* Products grid */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-3">
            {products.map((product) => (
              <div
                key={product.name}
                className="group relative rounded-2xl border border-[var(--color-border)] bg-white p-8"
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[var(--color-muted)]">
                    <product.icon className="h-6 w-6 text-[var(--color-charcoal)]" />
                  </div>
                  <StatusBadge status={product.status} />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-[var(--color-charcoal)]">
                  {product.name}
                </h3>
                <p className="mt-1 text-sm font-medium text-[var(--color-accent)]">
                  {product.tagline}
                </p>
                <p className="mt-4 text-[var(--color-slate)]">
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
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-[var(--color-charcoal)] px-8 py-16 text-center">
            <h2 className="text-3xl font-bold text-white">Not sure which product fits?</h2>
            <p className="mx-auto mt-4 max-w-2xl text-[var(--color-steel)]">
              Tell us what you&apos;re struggling with and we&apos;ll point you in the right direction.
            </p>
            <div className="mt-10">
              <Button href="/contact" size="lg" className="bg-white text-[var(--color-charcoal)] hover:bg-gray-100">
                Talk to Us
              </Button>
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
