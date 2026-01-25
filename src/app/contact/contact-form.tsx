'use client';

import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/toast';
import { CheckCircle, ArrowRight, Zap } from 'lucide-react';

const leadSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  name: z.string().optional(),
  company: z.string().optional(),
  role: z.enum(['owner', 'estimator', 'ops', 'other']).optional(),
  trade: z.enum(['electrical', 'hvac', 'plumbing', 'general', 'other']).optional(),
  estimate_volume: z.string().optional(),
  pain_point: z.string().max(2000).optional(),
  website: z.string().max(0, 'This field should be empty'),
});

type LeadFormData = z.infer<typeof leadSchema>;

export default function ContactForm() {
  const searchParams = useSearchParams();
  const sourceProduct = searchParams.get('product');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { showToast } = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LeadFormData>({
    resolver: zodResolver(leadSchema),
  });

  const onSubmit = async (data: LeadFormData) => {
    if (data.website) {
      showToast('Something went wrong. Please try again.', 'error');
      return;
    }

    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...data,
          source_page: '/contact',
          source_product: sourceProduct,
        }),
      });

      if (!response.ok) throw new Error('Failed to submit');

      setIsSubmitted(true);
    } catch {
      showToast('Something went wrong. Please try again.', 'error');
    }
  };

  if (isSubmitted) {
    return (
      <div className="py-24 lg:py-32">
        <div className="mx-auto max-w-xl px-5 text-center">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-green-100">
            <CheckCircle className="h-10 w-10 text-green-600" />
          </div>
          <h1 className="mt-8 font-display text-3xl font-bold text-[var(--color-ink)] sm:text-4xl">
            Thanks for reaching out!
          </h1>
          <p className="mt-4 text-lg text-[var(--color-slate)]">
            We&apos;ll get back to you within 24 hours. Keep an eye on your inbox.
          </p>
          <div className="mt-10 rounded-xl border border-[var(--color-border)] bg-[var(--background-warm)] p-6">
            <p className="font-display font-semibold text-[var(--color-ink)]">
              Want to schedule a call now?
            </p>
            <p className="mt-2 text-sm text-[var(--color-slate)]">
              Skip the wait and book a time directly.
            </p>
            <Button href="https://calendly.com" className="mt-4" variant="secondary">
              Book a Time
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[var(--background-warm)] py-16 lg:py-20">
        <div className="absolute inset-0 texture-grid opacity-50" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="inline-flex">
              <span className="badge badge-amber">
                <Zap className="h-3.5 w-3.5" />
                {sourceProduct === 'solidbid' ? 'Pilot Request' : 'Get in Touch'}
              </span>
            </div>
            <h1 className="mt-6 font-display text-4xl font-bold tracking-tight text-[var(--color-ink)] sm:text-5xl">
              {sourceProduct === 'solidbid' ? 'Request SolidBid Pilot' : "Let's talk"}
            </h1>
            <p className="mt-4 text-lg text-[var(--color-slate)]">
              {sourceProduct === 'solidbid'
                ? "Tell us about your workflow and we'll set you up with a pilot."
                : "Whether you're interested in a pilot or just want to chat, we'd love to hear from you."}
            </p>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-xl px-5 sm:px-6 lg:px-8">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Honeypot */}
            <input
              type="text"
              {...register('website')}
              className="hidden"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
            />

            {/* Email */}
            <div>
              <label htmlFor="email" className="label">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                {...register('email')}
                className="input-field"
                placeholder="you@company.com"
              />
              {errors.email && (
                <p className="mt-2 text-sm text-red-500" role="alert">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Name */}
            <div>
              <label htmlFor="name" className="label">
                Name
              </label>
              <input
                type="text"
                id="name"
                {...register('name')}
                className="input-field"
                placeholder="John Smith"
              />
            </div>

            {/* Company */}
            <div>
              <label htmlFor="company" className="label">
                Company
              </label>
              <input
                type="text"
                id="company"
                {...register('company')}
                className="input-field"
                placeholder="Smith Electric"
              />
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              {/* Role */}
              <div>
                <label htmlFor="role" className="label">
                  Role
                </label>
                <select
                  id="role"
                  {...register('role')}
                  className="input-field select-field"
                >
                  <option value="">Select a role</option>
                  <option value="owner">Owner</option>
                  <option value="estimator">Estimator</option>
                  <option value="ops">Operations</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Trade */}
              <div>
                <label htmlFor="trade" className="label">
                  Trade
                </label>
                <select
                  id="trade"
                  {...register('trade')}
                  className="input-field select-field"
                >
                  <option value="">Select a trade</option>
                  <option value="electrical">Electrical</option>
                  <option value="hvac">HVAC</option>
                  <option value="plumbing">Plumbing</option>
                  <option value="general">General Contractor</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            {/* Estimate Volume */}
            <div>
              <label htmlFor="estimate_volume" className="label">
                How many estimates do you do per week?
              </label>
              <input
                type="text"
                id="estimate_volume"
                {...register('estimate_volume')}
                className="input-field"
                placeholder="e.g., 3-5 per week"
              />
            </div>

            {/* Pain Point */}
            <div>
              <label htmlFor="pain_point" className="label">
                What&apos;s your biggest pain?
              </label>
              <textarea
                id="pain_point"
                {...register('pain_point')}
                rows={4}
                maxLength={2000}
                className="input-field resize-none"
                placeholder="Tell us what slows you down or causes mistakes..."
              />
              <p className="mt-2 text-xs text-[var(--color-steel)]">Max 2000 characters</p>
            </div>

            {/* Submit */}
            <Button type="submit" className="w-full" size="lg" isLoading={isSubmitting}>
              Submit
              <ArrowRight className="h-5 w-5" />
            </Button>

            <p className="text-center text-sm text-[var(--color-steel)]">
              We typically respond within 24 hours.
            </p>
          </form>
        </div>
      </section>
    </div>
  );
}
