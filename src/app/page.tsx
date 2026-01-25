'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  ArrowRight,
  FileText,
  Receipt,
  Shield,
  Zap,
  Target,
  Users,
  Wrench,
  Clock,
} from 'lucide-react';

const products = [
  {
    name: 'SolidBid',
    tagline: 'Upload plans. Get a solid bid.',
    description:
      'Turn electrical PDFs into material counts, wire lists, and baseline labor estimates. Stop counting symbols by hand.',
    href: '/products/solidbid',
    status: 'pilot' as const,
    icon: FileText,
    gradient: 'from-amber-500/20 to-orange-500/20',
  },
  {
    name: 'PaperTrail',
    tagline: 'Receipts that actually get done.',
    description:
      'Employees snap receipts. Owners see who spent what. No more paper folders or chasing people down.',
    href: '/products',
    status: 'coming' as const,
    icon: Receipt,
    gradient: 'from-blue-500/20 to-cyan-500/20',
  },
  {
    name: 'CityShield',
    tagline: 'Know before you get fined.',
    description:
      'Automatic compliance checks for local labor laws. Upload schedules, catch violations before payroll.',
    href: '/products',
    status: 'coming' as const,
    icon: Shield,
    gradient: 'from-emerald-500/20 to-teal-500/20',
  },
];

const valueProps = [
  {
    icon: Wrench,
    title: 'Built for the field',
    description: 'Mobile-first, PDF-first. Works the way you already work.',
  },
  {
    icon: Target,
    title: 'Honest about limits',
    description: 'We give you a solid starting point, not false promises. You stay in control.',
  },
  {
    icon: Zap,
    title: 'No enterprise bloat',
    description: 'Simple tools that do one thing well. No 6-month implementations.',
  },
  {
    icon: Users,
    title: 'Trade-tested',
    description: 'Built with real contractors, estimators, and ops leads. Not in a lab.',
  },
];

function StatusBadge({ status }: { status: 'live' | 'pilot' | 'coming' }) {
  const styles = {
    live: 'badge-success',
    pilot: 'badge-amber',
    coming: 'badge-muted',
  };

  const labels = {
    live: 'Live',
    pilot: 'Pilot',
    coming: 'Coming Soon',
  };

  const icons = {
    live: <span className="h-1.5 w-1.5 rounded-full bg-green-500" />,
    pilot: <span className="h-1.5 w-1.5 rounded-full bg-amber-500 animate-pulse" />,
    coming: <Clock className="h-3 w-3" />,
  };

  return (
    <span className={`badge ${styles[status]}`}>
      {icons[status]}
      {labels[status]}
    </span>
  );
}

// Scroll reveal hook inline
function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const elements = ref.current?.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return ref;
}

export default function HomePage() {
  const scrollRef = useScrollReveal();

  return (
    <div ref={scrollRef}>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[var(--background-warm)]">
        {/* Grid pattern background */}
        <div className="absolute inset-0 texture-grid opacity-50" />

        {/* Gradient orbs for visual interest */}
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-[var(--color-amber)] opacity-10 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-[var(--color-blueprint)] opacity-10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-40">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left column - Text content */}
            <div className="max-w-2xl">
              {/* Badge */}
              <div className="animate-fade-in-up">
                <span className="badge badge-amber">
                  <Zap className="h-3.5 w-3.5" />
                  Now accepting pilot partners
                </span>
              </div>

              {/* Headline */}
              <h1 className="mt-8 animate-fade-in-up delay-100">
                <span className="block font-display text-4xl font-bold tracking-tight text-[var(--color-ink)] sm:text-5xl lg:text-6xl">
                  Practical software
                </span>
                <span className="mt-2 block font-display text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                  <span className="text-[var(--color-amber)]">for real-world</span>{' '}
                  <span className="text-[var(--color-ink)]">trades</span>
                </span>
              </h1>

              {/* Subheadline */}
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-[var(--color-slate)] animate-fade-in-up delay-200">
                Tools that help you estimate faster, track spending clearer, and stay compliant longer.{' '}
                <span className="font-semibold text-[var(--color-ink)]">No AI hype. No enterprise bloat.</span>{' '}
                Just software that works.
              </p>

              {/* CTA buttons */}
              <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row animate-fade-in-up delay-300">
                <Button href="/products/solidbid" size="lg" glow>
                  See SolidBid
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button href="/contact" variant="secondary" size="lg">
                  Talk to Us
                </Button>
              </div>

              {/* Social proof snippet */}
              <div className="mt-12 flex items-center gap-4 animate-fade-in-up delay-400">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-[var(--color-muted)] font-display text-xs font-bold text-[var(--color-slate)]"
                    >
                      {['JM', 'KR', 'DW'][i - 1]}
                    </div>
                  ))}
                </div>
                <div className="text-sm">
                  <p className="font-semibold text-[var(--color-ink)]">Trusted by estimators</p>
                  <p className="text-[var(--color-steel)]">at 12+ electrical contractors</p>
                </div>
              </div>
            </div>

            {/* Right column - Visual element */}
            <div className="relative hidden lg:block animate-fade-in delay-200">
              {/* Mock interface card */}
              <div className="relative rounded-2xl border border-[var(--color-border)] bg-white p-6 shadow-2xl">
                {/* Window dots */}
                <div className="mb-4 flex gap-2">
                  <div className="h-3 w-3 rounded-full bg-red-400" />
                  <div className="h-3 w-3 rounded-full bg-amber-400" />
                  <div className="h-3 w-3 rounded-full bg-green-400" />
                </div>

                {/* Mock content */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="font-display text-lg font-bold text-[var(--color-ink)]">
                      Material Takeoff
                    </div>
                    <span className="badge badge-success">
                      <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
                      Complete
                    </span>
                  </div>

                  <div className="h-px bg-[var(--color-border)]" />

                  {/* Mock data rows */}
                  {[
                    { label: 'Duplex Receptacles', count: '147', wire: '14 AWG' },
                    { label: 'Single Pole Switches', count: '89', wire: '12 AWG' },
                    { label: '4" Square Boxes', count: '236', wire: '—' },
                    { label: 'LED Troffer 2x4', count: '64', wire: '12 AWG' },
                  ].map((row, i) => (
                    <div
                      key={row.label}
                      className="flex items-center justify-between rounded-lg bg-[var(--color-muted)]/50 px-4 py-3"
                      style={{ animationDelay: `${400 + i * 100}ms` }}
                    >
                      <span className="text-sm text-[var(--color-slate)]">{row.label}</span>
                      <div className="flex items-center gap-4">
                        <span className="font-mono text-sm font-semibold text-[var(--color-ink)]">
                          {row.count}
                        </span>
                        <span className="font-mono text-xs text-[var(--color-steel)]">
                          {row.wire}
                        </span>
                      </div>
                    </div>
                  ))}

                  {/* Summary row */}
                  <div className="mt-4 flex items-center justify-between rounded-xl bg-[var(--color-ink)] px-4 py-3">
                    <span className="font-display font-semibold text-white">Est. Labor Hours</span>
                    <span className="font-mono text-xl font-bold text-[var(--color-amber)]">142h</span>
                  </div>
                </div>
              </div>

              {/* Floating accent elements */}
              <div className="absolute -right-4 -top-4 h-24 w-24 rounded-2xl bg-[var(--color-amber)] opacity-20 blur-2xl animate-float" />
              <div className="absolute -bottom-4 -left-4 h-32 w-32 rounded-full bg-[var(--color-blueprint)] opacity-20 blur-2xl animate-float delay-200" />
            </div>
          </div>
        </div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Products Section */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          {/* Section header */}
          <div className="reveal">
            <div className="flex items-end justify-between">
              <div>
                <h2 className="font-display text-3xl font-bold text-[var(--color-ink)] sm:text-4xl">
                  Products
                </h2>
                <p className="mt-3 text-lg text-[var(--color-slate)]">
                  Each tool solves one problem well
                </p>
              </div>
              <Link
                href="/products"
                className="hidden font-display text-sm font-semibold text-[var(--color-slate)] transition-colors hover:text-[var(--color-amber)] sm:flex sm:items-center sm:gap-2"
              >
                View all products
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="section-divider-amber mt-8" />
          </div>

          {/* Products grid */}
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {products.map((product, index) => (
              <Link
                key={product.name}
                href={product.href}
                className={`reveal group glow-card card-hover relative rounded-2xl border border-[var(--color-border)] bg-white p-8`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Gradient background on hover */}
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${product.gradient} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
                />

                <div className="relative">
                  {/* Header with icon and status */}
                  <div className="flex items-start justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[var(--color-ink)]">
                      <product.icon className="h-7 w-7 text-[var(--color-amber)]" />
                    </div>
                    <StatusBadge status={product.status} />
                  </div>

                  {/* Content */}
                  <h3 className="mt-6 font-display text-2xl font-bold text-[var(--color-ink)]">
                    {product.name}
                  </h3>
                  <p className="mt-1 font-display text-sm font-semibold text-[var(--color-amber)]">
                    {product.tagline}
                  </p>
                  <p className="mt-4 leading-relaxed text-[var(--color-slate)]">
                    {product.description}
                  </p>

                  {/* Link indicator */}
                  <div className="mt-6 flex items-center gap-2 font-display text-sm font-semibold text-[var(--color-ink)] transition-colors group-hover:text-[var(--color-amber)]">
                    {product.status === 'coming' ? 'Join waitlist' : 'Learn more'}
                    <ArrowRight className="h-4 w-4 icon-hover transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Value Props Section */}
      <section className="relative overflow-hidden bg-[var(--color-ink)] py-24 lg:py-32">
        {/* Blueprint grid pattern */}
        <div className="absolute inset-0 blueprint-grid" />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          {/* Section header */}
          <div className="reveal text-center">
            <h2 className="font-display text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              Why{' '}
              <span className="text-[var(--color-amber)]">SolidWork</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-[var(--color-silver)]">
              We build tools for people who build things
            </p>
          </div>

          {/* Value props grid */}
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {valueProps.map((prop, index) => (
              <div
                key={prop.title}
                className="reveal text-center"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Icon */}
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[var(--color-amber)]/10 transition-colors hover:bg-[var(--color-amber)]/20">
                  <prop.icon className="h-8 w-8 text-[var(--color-amber)]" />
                </div>

                {/* Content */}
                <h3 className="mt-6 font-display text-xl font-bold text-white">
                  {prop.title}
                </h3>
                <p className="mt-3 leading-relaxed text-[var(--color-silver)]">
                  {prop.description}
                </p>
              </div>
            ))}
          </div>

          {/* Stats row */}
          <div className="reveal mt-20 grid gap-8 rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm sm:grid-cols-3">
            {[
              { value: '90%+', label: 'Symbol recognition accuracy' },
              { value: '5x', label: 'Faster first-pass takeoff' },
              { value: '<30min', label: 'Time to first estimate' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-display text-4xl font-bold text-[var(--color-amber)]">
                  {stat.value}
                </div>
                <div className="mt-2 text-sm text-[var(--color-silver)]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="reveal relative overflow-hidden rounded-3xl bg-gradient-to-br from-[var(--color-ink)] to-[var(--color-charcoal)]">
            {/* Pattern overlay */}
            <div className="absolute inset-0 texture-dots opacity-20" />

            {/* Glow effects */}
            <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-[var(--color-amber)] opacity-20 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-[var(--color-blueprint)] opacity-20 blur-3xl" />

            <div className="relative px-8 py-16 text-center sm:px-16 lg:py-24">
              <h2 className="font-display text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                Ready to see what{' '}
                <span className="text-[var(--color-amber)]">SolidBid</span>
                {' '}can do?
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-lg text-[var(--color-silver)]">
                We&apos;re running pilots with electrical contractors now. Send us your plans and see real output.
              </p>
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button href="/contact" size="lg" glow>
                  Request a Pilot
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button href="/products/solidbid" variant="ghost" size="lg" className="text-white hover:text-white hover:bg-white/10">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
