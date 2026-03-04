# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What This Is

Marketing website for SolidWork Systems — a construction technology company serving electrical contractors. Built with Next.js 16, React 19, Tailwind CSS 4, and TypeScript. Deployed to AWS Amplify at solidwork.systems.

## Development Commands

```bash
npm run dev       # Start dev server on :3000
npm run build     # Production build (use to verify before deploy)
npm run lint      # ESLint
```

No test runner is configured. No Docker required for the website itself.

## Environment Setup

Copy `.env.example` to `.env.local`. Required vars:
- `DATABASE_URL` — PostgreSQL connection string (for leads/waitlist API)
- `RESEND_API_KEY` — Transactional email via Resend
- `TEAM_NOTIFICATION_EMAILS` — Comma-separated emails for lead notifications

Optional: `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY` (planned), `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` (analytics).

## Tech Stack Details

- **Next.js 16** with App Router — route handler `params` are async (always `await params`)
- **Tailwind CSS 4** — CSS-based config via `@theme inline` in `globals.css`, no `tailwind.config.js`
- **Zod 4** — import as `import { z } from 'zod'` (this project uses zod@4 but imports without `/v4` suffix)
- **react-hook-form** with `@hookform/resolvers` for form validation
- **pg** (node-postgres) for direct PostgreSQL queries — no ORM
- **Resend** for transactional email
- **lucide-react** for icons (plus custom trade-themed SVGs)

## Architecture

```
src/
├── app/                  # Next.js App Router pages and API routes
│   ├── api/leads/        # POST: lead capture (contact form, lead drawer)
│   ├── api/waitlist/     # POST: waitlist signups (coming-soon products)
│   ├── contact/          # Contact page with lead drawer
│   ├── pricing/          # Pricing tiers with monthly/yearly toggle
│   ├── products/         # Product listing + /products/solidbid detail page
│   ├── about/, privacy/, security/, terms/
│   ├── sitemap.ts        # Dynamic sitemap generation
│   └── opengraph-image.tsx  # OG image generation
├── components/
│   ├── ui/               # Primitives: Button (link-or-button dual mode), Toast, StatusBadge
│   ├── layout/           # Header (desktop nav + mobile menu), Footer
│   ├── pricing/          # PricingCard, PricingToggle, PricingFAQ, FeatureTooltip, SocialProof
│   ├── icons/            # 40+ custom SVG trade icons (electrical/blueprint aesthetic)
│   └── lead-drawer.tsx   # Slide-out lead capture form
├── hooks/
│   ├── use-scroll-reveal.ts   # Intersection Observer for scroll animations
│   └── use-focus-trap.ts      # Keyboard focus trap for modals/drawers
├── lib/
│   ├── db.ts             # PostgreSQL pool (pg), query helper with slow-query logging
│   ├── schemas.ts        # Zod schemas: leadSchema, waitlistSchema (with honeypot field)
│   ├── pricing.ts        # Pricing tier definitions and FAQ data
│   ├── products.ts       # Product catalog (SolidBid, PaperTrail, CityShield)
│   └── rate-limit.ts     # In-memory IP rate limiter (10 req/hour)
└── types/                # TypeScript type definitions
```

## Key Patterns

**API Routes**: All POST endpoints use honeypot field (`hp_field`) for spam detection, IP-based rate limiting (10/hour), Zod validation, and parameterized SQL queries. Database failures are logged but don't error to the user (lead email still sends).

**Button component** (`src/components/ui/button.tsx`): Renders as `<Link>` when `href` is provided, `<button>` otherwise. Variants: `primary` (amber), `secondary`, `ghost`, `dark`. Supports loading state with spinner.

**Toast system** (`src/components/ui/toast.tsx`): React context provider in root layout. Types: success/error/info. Auto-dismisses after 5s. Max 3 visible.

**Scroll reveal**: Two hooks — `useScrollReveal` returns `[ref, isVisible]` for individual elements; `useScrollRevealContainer` batch-observes children with `.reveal` / `.reveal-left` / `.reveal-right` / `.reveal-scale` classes.

**Database**: Direct `pg` pool queries via `query(text, params)` from `src/lib/db.ts`. No ORM. Schema defined in `scripts/migrate.sql` (leads + waitlist tables).

## Design System

Defined in `src/app/globals.css` via CSS custom properties:

- **Brand palette**: ink → charcoal → graphite → slate → steel → silver (dark-to-light grays)
- **Accent**: amber/amber-bright/amber-deep/amber-glow (primary CTA color)
- **Secondary**: blueprint/blueprint-dim (blue accents)
- **Fonts**: Outfit (headings), Inter (body), JetBrains Mono (code) — loaded via `next/font/google`
- **Custom CSS utilities**: `.texture-grid`, `.blueprint-grid`, `.card-hover`, `.glow-card`, `.input-field`, `.badge`, animation classes (`.animate-fade-in-up`, `.animate-float`, etc.)

## Deployment

- **Hosting**: AWS Amplify (domain: solidwork.systems via Cloudflare)
- **Database**: AWS RDS PostgreSQL (auto-stopped to save costs; use `../../scripts/production-startup.sh` to start)
- **Email**: AWS SES + Resend
- **AWS region**: us-east-1, CLI profile: `solidwork`

## Path Alias

`@/` maps to `src/` in all imports.
