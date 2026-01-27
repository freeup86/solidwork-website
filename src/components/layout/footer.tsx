import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { SolidBoltIcon, BlueprintIcon } from '@/components/icons/trade-icons';

const footerLinks = {
  products: [
    { href: '/products/solidbid', label: 'SolidBid' },
    { href: '/products', label: 'All Products' },
  ],
  company: [
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ],
  legal: [
    { href: '/privacy', label: 'Privacy Policy' },
    { href: '/terms', label: 'Terms of Service' },
    { href: '/security', label: 'Security' },
  ],
};

function Logo() {
  return (
    <Link href="/" className="group flex items-center gap-3">
      <div className="relative flex h-10 w-10 items-center justify-center">
        <div className="absolute inset-0 rounded-xl bg-[var(--color-ink)]" />
        <SolidBoltIcon size={20} className="relative text-[var(--color-amber)]" />
      </div>
      <div>
        <div className="font-display text-base font-bold text-[var(--color-ink)]">
          SolidWork
        </div>
        <div className="font-mono text-[9px] uppercase tracking-[0.15em] text-[var(--color-steel)]">
          Systems
        </div>
      </div>
    </Link>
  );
}

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-[var(--color-border)] bg-[var(--background-warm)]">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 texture-grid opacity-30" />

      <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Brand column - takes more space */}
          <div className="lg:col-span-5">
            <Logo />
            <p className="mt-6 max-w-sm text-[var(--color-slate)]">
              Practical software for real-world trades. Built by people who understand the work.
            </p>

            {/* Newsletter signup teaser */}
            <div className="mt-8 flex items-center gap-3 rounded-xl border border-[var(--color-border)] bg-white p-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--color-amber)]/10">
                <BlueprintIcon size={20} className="text-[var(--color-amber)]" />
              </div>
              <div className="flex-1">
                <p className="font-display text-sm font-semibold text-[var(--color-ink)]">
                  Product updates
                </p>
                <p className="text-xs text-[var(--color-steel)]">
                  No spam. Just launches and features.
                </p>
              </div>
              <Link
                href="/contact"
                aria-label="Sign up for product updates"
                className="flex h-11 w-11 items-center justify-center rounded-lg bg-[var(--color-ink)] text-white transition-transform hover:scale-105"
              >
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Links columns */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-7">
            {/* Products */}
            <div>
              <h3 className="font-display text-sm font-bold text-[var(--color-ink)]">
                Products
              </h3>
              <ul className="mt-4 space-y-3">
                {footerLinks.products.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="group flex items-center gap-1 text-sm text-[var(--color-slate)] transition-colors hover:text-[var(--color-ink)]"
                    >
                      {link.label}
                      <ArrowUpRight className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="font-display text-sm font-bold text-[var(--color-ink)]">
                Company
              </h3>
              <ul className="mt-4 space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="group flex items-center gap-1 text-sm text-[var(--color-slate)] transition-colors hover:text-[var(--color-ink)]"
                    >
                      {link.label}
                      <ArrowUpRight className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="font-display text-sm font-bold text-[var(--color-ink)]">
                Legal
              </h3>
              <ul className="mt-4 space-y-3">
                {footerLinks.legal.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="group flex items-center gap-1 text-sm text-[var(--color-slate)] transition-colors hover:text-[var(--color-ink)]"
                    >
                      {link.label}
                      <ArrowUpRight className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-[var(--color-border)] pt-8 sm:flex-row">
          <p className="font-mono text-xs text-[var(--color-steel)]">
            &copy; {currentYear} SolidWork Systems. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-green-500" />
            <span className="font-mono text-xs text-[var(--color-steel)]">
              All systems operational
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
