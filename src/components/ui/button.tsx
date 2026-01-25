'use client';

import { forwardRef, ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react';
import Link from 'next/link';

type ButtonBaseProps = {
  variant?: 'primary' | 'secondary' | 'ghost' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  glow?: boolean;
};

type ButtonAsButton = ButtonBaseProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof ButtonBaseProps> & {
    href?: never;
  };

type ButtonAsLink = ButtonBaseProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof ButtonBaseProps> & {
    href: string;
  };

type ButtonProps = ButtonAsButton | ButtonAsLink;

const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  ({ className = '', variant = 'primary', size = 'md', isLoading, glow, children, ...props }, ref) => {
    const baseStyles = [
      'group',
      'relative',
      'inline-flex',
      'items-center',
      'justify-center',
      'font-display',
      'font-semibold',
      'transition-all',
      'duration-300',
      'ease-out',
      'focus-visible:outline-none',
      'focus-visible:ring-2',
      'focus-visible:ring-offset-2',
      'disabled:pointer-events-none',
      'disabled:opacity-50',
      'rounded-xl',
      'overflow-hidden',
    ].join(' ');

    const variants = {
      primary: [
        'bg-[var(--color-amber)]',
        'text-[var(--color-ink)]',
        'hover:bg-[var(--color-amber-bright)]',
        'hover:shadow-[0_8px_30px_rgba(245,158,11,0.35)]',
        'hover:-translate-y-0.5',
        'active:translate-y-0',
        'active:shadow-[0_4px_15px_rgba(245,158,11,0.25)]',
        'focus-visible:ring-[var(--color-amber)]',
      ].join(' '),
      secondary: [
        'bg-transparent',
        'border-2',
        'border-[var(--color-ink)]',
        'text-[var(--color-ink)]',
        'hover:bg-[var(--color-ink)]',
        'hover:text-white',
        'hover:-translate-y-0.5',
        'hover:shadow-[0_8px_30px_rgba(13,13,15,0.2)]',
        'active:translate-y-0',
        'focus-visible:ring-[var(--color-ink)]',
      ].join(' '),
      ghost: [
        'text-[var(--color-slate)]',
        'hover:text-[var(--color-ink)]',
        'hover:bg-[var(--color-muted)]',
        'focus-visible:ring-[var(--color-slate)]',
      ].join(' '),
      dark: [
        'bg-[var(--color-ink)]',
        'text-white',
        'hover:bg-[var(--color-charcoal)]',
        'hover:-translate-y-0.5',
        'hover:shadow-[0_8px_30px_rgba(13,13,15,0.3)]',
        'active:translate-y-0',
        'focus-visible:ring-[var(--color-ink)]',
      ].join(' '),
    };

    const sizes = {
      sm: 'h-10 px-5 text-sm gap-2',
      md: 'h-12 px-7 text-base gap-2',
      lg: 'h-14 px-9 text-lg gap-3',
    };

    const glowStyles = glow ? 'animate-pulse-glow' : '';

    const combinedClassName = `${baseStyles} ${variants[variant]} ${sizes[size]} ${glowStyles} ${className}`;

    const content = isLoading ? (
      <>
        <svg className="h-5 w-5 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
        </svg>
        <span>Loading...</span>
      </>
    ) : (
      <>
        {/* Shimmer effect on hover for primary variant */}
        {variant === 'primary' && (
          <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:translate-x-full transition-transform duration-700 ease-out pointer-events-none" />
        )}
        <span className="relative flex items-center gap-2">
          {children}
        </span>
      </>
    );

    // Render as Link if href is provided
    if ('href' in props && props.href) {
      const { href, ...linkProps } = props as ButtonAsLink;
      return (
        <Link
          ref={ref as React.Ref<HTMLAnchorElement>}
          href={href}
          className={combinedClassName}
          {...linkProps}
        >
          {content}
        </Link>
      );
    }

    // Render as button
    const { disabled, ...buttonProps } = props as ButtonAsButton;
    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        className={combinedClassName}
        disabled={disabled || isLoading}
        {...buttonProps}
      >
        {content}
      </button>
    );
  }
);

Button.displayName = 'Button';

export { Button };
