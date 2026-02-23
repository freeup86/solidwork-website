'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useFocusTrap } from '@/hooks/use-focus-trap';
import { SolidBoltIcon } from '@/components/icons/trade-icons';

const navLinks = [
  { href: '/products', label: 'Products' },
  { href: '/products/solidbid', label: 'SolidBid' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/about', label: 'About' },
];

function Logo() {
  return (
    <Link href="/" className="group flex items-center gap-3 transition-all duration-300">
      {/* Hex bolt mark — universal across all trades */}
      <div className="relative flex h-11 w-11 items-center justify-center">
        {/* Background shape */}
        <div className="absolute inset-0 rounded-xl bg-[var(--color-ink)] transition-transform duration-300 group-hover:scale-105" />
        {/* Glow effect on hover */}
        <div className="absolute inset-0 rounded-xl bg-[var(--color-amber)] opacity-0 blur-lg transition-opacity duration-300 group-hover:opacity-40" />
        {/* Logo — hex bolt head, the fastener every trade knows */}
        <SolidBoltIcon size={24} className="relative text-[var(--color-amber)] transition-transform duration-300 group-hover:scale-110" />
      </div>
      {/* Wordmark */}
      <div className="hidden sm:block">
        <div className="font-display text-lg font-bold tracking-tight text-[var(--color-ink)]">
          SolidWork
        </div>
        <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-steel)]">
          Systems
        </div>
      </div>
    </Link>
  );
}

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  useFocusTrap(mobileMenuRef, mobileMenuOpen);

  // Track scroll for header background change
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [mobileMenuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 shadow-[0_1px_0_var(--border),0_4px_20px_rgba(0,0,0,0.05)] backdrop-blur-md'
          : 'bg-white'
      }`}
    >
      <nav
        className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <div className="animate-fade-in">
          <Logo />
        </div>

        {/* Desktop nav */}
        <div className="hidden items-center gap-1 md:flex animate-fade-in delay-100">
          {navLinks.map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              className="link-underline relative rounded-lg px-4 py-2 font-display text-sm font-medium text-[var(--color-slate)] transition-colors hover:text-[var(--color-ink)]"
              style={{ animationDelay: `${(index + 1) * 50}ms` }}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block animate-fade-in delay-300">
          <Button href="/contact" size="sm">
            Talk to Us
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="relative z-50 flex h-10 w-10 items-center justify-center rounded-lg text-[var(--color-ink)] transition-colors hover:bg-[var(--color-muted)] md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
        >
          <span className="sr-only">{mobileMenuOpen ? 'Close menu' : 'Open menu'}</span>
          <div className="relative h-5 w-5">
            <span
              className={`absolute left-0 top-[4px] h-[2px] w-5 bg-current transition-all duration-300 ${
                mobileMenuOpen ? 'top-[9px] rotate-45' : ''
              }`}
            />
            <span
              className={`absolute left-0 top-[9px] h-[2px] w-5 bg-current transition-all duration-300 ${
                mobileMenuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`absolute left-0 top-[14px] h-[2px] w-5 bg-current transition-all duration-300 ${
                mobileMenuOpen ? 'top-[9px] -rotate-45' : ''
              }`}
            />
          </div>
        </button>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          mobileMenuOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={() => setMobileMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile menu panel */}
      <div
        ref={mobileMenuRef}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        className={`fixed inset-y-0 right-0 z-40 w-full max-w-sm bg-white shadow-2xl transition-transform duration-300 ease-out md:hidden ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex h-full flex-col px-6 pb-8 pt-24">
          {/* Nav links */}
          <nav className="flex-1 space-y-1">
            {navLinks.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block rounded-xl px-4 py-4 font-display text-lg font-semibold text-[var(--color-ink)] transition-all hover:bg-[var(--color-muted)] hover:text-[var(--color-amber)] ${
                  mobileMenuOpen ? 'animate-fade-in-up' : ''
                }`}
                style={{ animationDelay: `${(index + 1) * 75}ms` }}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile CTA */}
          <div
            className={`mt-auto pt-6 ${mobileMenuOpen ? 'animate-fade-in-up delay-300' : ''}`}
          >
            <Button
              href="/contact"
              className="w-full"
              size="lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              Talk to Us
            </Button>
            <p className="mt-4 text-center font-mono text-xs text-[var(--color-steel)]">
              Practical software for real-world trades
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
