'use client';

import { useState } from 'react';
import { useScrollRevealContainer } from '@/hooks/use-scroll-reveal';
import { Button } from '@/components/ui/button';
import { LeadDrawer } from '@/components/lead-drawer';
import { ArrowRight, ChevronDown } from 'lucide-react';
import {
  TakeoffIcon,
  WireSpoolIcon,
  LaborClockIcon,
  SpecFlagIcon,
  TechCheckIcon,
  TechXIcon,
  ExportIcon,
  PilotBadgeIcon,
} from '@/components/icons/trade-icons';

const outcomes = [
  {
    Icon: TakeoffIcon,
    title: 'Combined Materials List',
    description: 'Device counts across all sheets, using the legend as ground truth.',
  },
  {
    Icon: WireSpoolIcon,
    title: 'Wire List by Gauge',
    description: 'Rough footage estimates broken down by wire type (14, 12, 10 AWG, etc.).',
  },
  {
    Icon: LaborClockIcon,
    title: 'Baseline Labor Estimate',
    description: 'Starting man-hours based on device counts. Fully editable.',
  },
  {
    Icon: SpecFlagIcon,
    title: 'Classified Notes',
    description: 'Spec flags like night work, KAIC requirements, trenching—with page references.',
  },
];

const steps = [
  {
    number: '1',
    title: 'Upload your plans',
    description: 'Drop in electrical PDFs (drawings + specs). We handle multi-page sets.',
  },
  {
    number: '2',
    title: 'Confirm the legend',
    description: 'We read the legend and map symbols. You verify or adjust.',
  },
  {
    number: '3',
    title: 'Review the output',
    description: 'See material counts, wire list, labor estimate, and flagged notes.',
  },
  {
    number: '4',
    title: 'Export and adjust',
    description: 'Download Excel or PDF. Tweak numbers based on job conditions.',
  },
];

const isItems = [
  'A solid first-pass takeoff',
  'Material counts you can verify',
  'Spec flags so nothing gets missed',
  'A starting point for your bid',
];

const isntItems = [
  'A replacement for estimator judgment',
  'Perfectly accurate every time',
  'A quoting or pricing tool',
  'Routing or scheduling software',
];

const faqs = [
  {
    question: 'How accurate is the material count?',
    answer: 'SolidBid uses the legend on your drawings to identify and count symbols. Accuracy depends on drawing quality and legend clarity. We recommend reviewing the output as a starting point, not a final takeoff.',
  },
  {
    question: 'What file formats do you accept?',
    answer: 'PDF files. Most electrical drawings are already in PDF format.',
  },
  {
    question: 'How does wire estimation work?',
    answer: 'We estimate wire footage based on square footage, device counts, and breaker requirements. This is a rough starting point—you should adjust based on actual routing and job conditions.',
  },
  {
    question: 'What are "classified notes"?',
    answer: 'These are spec notes that could affect your estimate: overtime/night work, KAIC requirements, trenching responsibility, trade sequencing. We flag them with page references so you don\'t miss them.',
  },
  {
    question: 'How much does it cost?',
    answer: 'We\'re currently running pilots with select electrical contractors. Contact us to discuss pricing and see if you\'re a fit.',
  },
  {
    question: 'Can I try it with my own plans?',
    answer: 'Yes! Request a pilot and we\'ll run your actual drawings through the system so you can see real output.',
  },
];

function FAQItem({ question, answer, index }: { question: string; answer: string; index: number }) {
  const [isOpen, setIsOpen] = useState(false);
  const panelId = `faq-panel-${index}`;
  const buttonId = `faq-button-${index}`;

  return (
    <div className="border-b border-[var(--color-border)]">
      <button
        id={buttonId}
        className="flex w-full items-center justify-between py-6 text-left group"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls={panelId}
      >
        <span className="font-display text-lg font-semibold text-[var(--color-ink)] group-hover:text-[var(--color-amber)] transition-colors">
          {question}
        </span>
        <div className={`flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--color-muted)] transition-all ${isOpen ? 'bg-[var(--color-ink)]' : ''}`}>
          <ChevronDown
            className={`h-5 w-5 transition-all duration-300 ${isOpen ? 'rotate-180 text-[var(--color-amber)]' : 'text-[var(--color-slate)]'}`}
          />
        </div>
      </button>
      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        className={`grid transition-all duration-300 ${isOpen ? 'grid-rows-[1fr] pb-6' : 'grid-rows-[0fr]'}`}
      >
        <div className="overflow-hidden">
          <p className="text-[var(--color-slate)] leading-relaxed">{answer}</p>
        </div>
      </div>
    </div>
  );
}

export function SolidBidContent() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const scrollRef = useScrollRevealContainer();

  return (
    <div ref={scrollRef}>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[var(--background-warm)] py-24 lg:py-32">
        <div className="absolute inset-0 texture-grid opacity-50" />
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-[var(--color-amber)] opacity-10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="animate-fade-in-up">
              <span className="badge badge-amber">
                <PilotBadgeIcon size={14} />
                Now in Pilot
              </span>
            </div>
            <h1 className="mt-8 font-display text-4xl font-bold tracking-tight text-[var(--color-ink)] sm:text-5xl lg:text-6xl animate-fade-in-up delay-100">
              Upload plans.{' '}
              <span className="text-[var(--color-amber)]">Get a solid bid.</span>
            </h1>
            <p className="mt-6 text-lg text-[var(--color-slate)] sm:text-xl leading-relaxed animate-fade-in-up delay-200">
              Turn electrical PDFs into material counts, wire lists, and baseline labor estimates.
              Stop counting symbols by hand. Stop missing spec notes that kill your margins.
            </p>
            <div className="mt-10 animate-fade-in-up delay-300">
              <Button size="lg" onClick={() => setDrawerOpen(true)} glow>
                Request Pilot Access
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="reveal text-center">
            <h2 className="font-display text-3xl font-bold text-[var(--color-ink)] sm:text-4xl">
              What you get
            </h2>
            <div className="section-divider-amber mx-auto mt-6 max-w-xs" />
          </div>
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {outcomes.map((outcome, index) => (
              <div
                key={outcome.title}
                className="reveal text-center"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[var(--color-ink)]">
                  <outcome.Icon size={32} className="text-[var(--color-amber)]" />
                </div>
                <h3 className="mt-6 font-display text-xl font-bold text-[var(--color-ink)]">
                  {outcome.title}
                </h3>
                <p className="mt-3 text-[var(--color-slate)] leading-relaxed">{outcome.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="relative overflow-hidden bg-[var(--background-warm)] py-24 lg:py-32">
        <div className="absolute inset-0 texture-dots opacity-30" />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="reveal text-center">
            <h2 className="font-display text-3xl font-bold text-[var(--color-ink)] sm:text-4xl">
              How it works
            </h2>
          </div>
          <div className="mt-16 grid gap-8 md:grid-cols-4">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="reveal relative"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="absolute right-0 top-7 hidden h-0.5 w-full bg-[var(--color-border)] md:block" style={{ left: '50%' }} />
                )}
                <div className="relative flex flex-col items-center text-center md:items-start md:text-left">
                  <div className="step-number">
                    {step.number}
                  </div>
                  <h3 className="mt-6 font-display text-lg font-bold text-[var(--color-ink)]">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-[var(--color-slate)]">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What it is / isn't */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="reveal text-center">
            <h2 className="font-display text-3xl font-bold text-[var(--color-ink)] sm:text-4xl">
              What SolidBid is and isn&apos;t
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-[var(--color-slate)]">
              We&apos;re honest about what this tool does. It&apos;s a starting point, not a magic button.
            </p>
          </div>
          <div className="mt-16 grid gap-8 md:grid-cols-2">
            <div className="reveal rounded-2xl border-2 border-green-200 bg-green-50/50 p-8" style={{ transitionDelay: '100ms' }}>
              <h3 className="flex items-center gap-3 font-display text-xl font-bold text-green-800">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-100">
                  <TechCheckIcon size={24} className="text-green-600" />
                </div>
                SolidBid IS
              </h3>
              <ul className="mt-6 space-y-4">
                {isItems.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <TechCheckIcon size={20} className="mt-0.5 flex-shrink-0 text-green-600" />
                    <span className="text-[var(--color-slate)]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="reveal rounded-2xl border-2 border-red-200 bg-red-50/50 p-8" style={{ transitionDelay: '200ms' }}>
              <h3 className="flex items-center gap-3 font-display text-xl font-bold text-red-800">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-100">
                  <TechXIcon size={24} className="text-red-600" />
                </div>
                SolidBid IS NOT
              </h3>
              <ul className="mt-6 space-y-4">
                {isntItems.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <TechXIcon size={20} className="mt-0.5 flex-shrink-0 text-red-500" />
                    <span className="text-[var(--color-slate)]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Export formats */}
      <section className="relative overflow-hidden bg-[var(--color-ink)] py-24 lg:py-32">
        <div className="absolute inset-0 blueprint-grid" />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="reveal text-center">
            <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
              Export your way
            </h2>
            <p className="mt-4 text-[var(--color-silver)]">
              Get your estimate in a format that works for your workflow.
            </p>
          </div>
          <div className="mt-12 flex flex-col items-center justify-center gap-6 sm:flex-row">
            <div className="reveal flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 px-8 py-5 backdrop-blur-sm" style={{ transitionDelay: '100ms' }}>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--color-amber)]/10">
                <ExportIcon size={24} className="text-[var(--color-amber)]" />
              </div>
              <div>
                <p className="font-display font-bold text-white">Excel</p>
                <p className="text-sm text-[var(--color-silver)]">.xlsx format</p>
              </div>
            </div>
            <div className="reveal flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 px-8 py-5 backdrop-blur-sm" style={{ transitionDelay: '200ms' }}>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--color-amber)]/10">
                <ExportIcon size={24} className="text-[var(--color-amber)]" />
              </div>
              <div>
                <p className="font-display font-bold text-white">PDF Summary</p>
                <p className="text-sm text-[var(--color-silver)]">Print-ready report</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-3xl px-5 sm:px-6 lg:px-8">
          <div className="reveal text-center">
            <h2 className="font-display text-3xl font-bold text-[var(--color-ink)] sm:text-4xl">
              Frequently asked questions
            </h2>
          </div>
          <div className="reveal mt-12" style={{ transitionDelay: '100ms' }}>
            {faqs.map((faq, index) => (
              <FAQItem key={faq.question} question={faq.question} answer={faq.answer} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[var(--background-warm)] py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="reveal relative overflow-hidden rounded-3xl bg-[var(--color-ink)]">
            <div className="absolute inset-0 texture-dots opacity-20" />
            <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-[var(--color-amber)] opacity-20 blur-3xl" />

            <div className="relative px-8 py-16 text-center sm:px-16 lg:py-20">
              <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
                Ready to try it with your plans?
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-[var(--color-silver)]">
                We&apos;ll run your actual drawings through SolidBid so you can see real output before committing.
              </p>
              <div className="mt-10">
                <Button size="lg" onClick={() => setDrawerOpen(true)} glow>
                  Request Pilot Access
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lead Drawer */}
      <LeadDrawer
        isOpen={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        sourceProduct="solidbid"
      />
    </div>
  );
}
