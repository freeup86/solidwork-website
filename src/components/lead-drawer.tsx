'use client';

import { useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { X, Zap, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/toast';

const leadSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  name: z.string().optional(),
  company: z.string().optional(),
  role: z.enum(['owner', 'estimator', 'ops', 'other']).optional(),
  trade: z.enum(['electrical', 'hvac', 'plumbing', 'general', 'other']).optional(),
  estimate_volume: z.string().optional(),
  pain_point: z.string().max(2000).optional(),
  website: z.string().max(0, 'This field should be empty'), // Honeypot
});

type LeadFormData = z.infer<typeof leadSchema>;

interface LeadDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  sourceProduct?: string;
}

export function LeadDrawer({ isOpen, onClose, sourceProduct }: LeadDrawerProps) {
  const drawerRef = useRef<HTMLDivElement>(null);
  const { showToast } = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<LeadFormData>({
    resolver: zodResolver(leadSchema),
  });

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  // Focus trap
  useEffect(() => {
    if (isOpen && drawerRef.current) {
      const firstInput = drawerRef.current.querySelector('input');
      firstInput?.focus();
    }
  }, [isOpen]);

  const onSubmit = async (data: LeadFormData) => {
    // Check honeypot
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
          source_page: window.location.pathname,
          source_product: sourceProduct,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit');
      }

      showToast("Thanks! We'll be in touch within 24 hours.", 'success');
      reset();
      onClose();
    } catch {
      showToast('Something went wrong. Please try again.', 'error');
    }
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="backdrop-enter fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div
        ref={drawerRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="drawer-title"
        className="drawer-enter fixed inset-y-0 right-0 z-50 w-full max-w-md overflow-y-auto bg-white shadow-2xl"
      >
        <div className="flex h-full flex-col">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-[var(--color-border)] px-6 py-5">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--color-ink)]">
                <Zap className="h-5 w-5 fill-[var(--color-amber)] text-[var(--color-amber)]" />
              </div>
              <div>
                <h2 id="drawer-title" className="font-display text-lg font-bold text-[var(--color-ink)]">
                  Request Pilot Access
                </h2>
                <p className="text-sm text-[var(--color-steel)]">SolidBid</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="flex h-10 w-10 items-center justify-center rounded-lg text-[var(--color-slate)] transition-colors hover:bg-[var(--color-muted)] hover:text-[var(--color-ink)]"
              aria-label="Close drawer"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="flex-1 overflow-y-auto px-6 py-6">
            <div className="space-y-5">
              {/* Honeypot - hidden from users */}
              <input
                type="text"
                {...register('website')}
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
              />

              {/* Email (required) */}
              <div>
                <label htmlFor="drawer-email" className="label">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="drawer-email"
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
                <label htmlFor="drawer-name" className="label">
                  Name
                </label>
                <input
                  type="text"
                  id="drawer-name"
                  {...register('name')}
                  className="input-field"
                  placeholder="John Smith"
                />
              </div>

              {/* Company */}
              <div>
                <label htmlFor="drawer-company" className="label">
                  Company
                </label>
                <input
                  type="text"
                  id="drawer-company"
                  {...register('company')}
                  className="input-field"
                  placeholder="Smith Electric"
                />
              </div>

              {/* Role */}
              <div>
                <label htmlFor="drawer-role" className="label">
                  Role
                </label>
                <select
                  id="drawer-role"
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
                <label htmlFor="drawer-trade" className="label">
                  Trade
                </label>
                <select
                  id="drawer-trade"
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

              {/* Estimate Volume */}
              <div>
                <label htmlFor="drawer-estimate-volume" className="label">
                  How many estimates do you do per week?
                </label>
                <input
                  type="text"
                  id="drawer-estimate-volume"
                  {...register('estimate_volume')}
                  className="input-field"
                  placeholder="e.g., 3-5 per week"
                />
              </div>

              {/* Pain Point */}
              <div>
                <label htmlFor="drawer-pain-point" className="label">
                  What&apos;s your biggest pain with estimating?
                </label>
                <textarea
                  id="drawer-pain-point"
                  {...register('pain_point')}
                  rows={4}
                  maxLength={2000}
                  className="input-field resize-none"
                  placeholder="Tell us what slows you down or causes mistakes..."
                />
                <p className="mt-2 text-xs text-[var(--color-steel)]">
                  Max 2000 characters
                </p>
              </div>
            </div>

            {/* Submit */}
            <div className="mt-8 border-t border-[var(--color-border)] pt-6">
              <Button type="submit" className="w-full" size="lg" isLoading={isSubmitting}>
                Submit Request
                <ArrowRight className="h-5 w-5" />
              </Button>
              <p className="mt-4 text-center text-sm text-[var(--color-steel)]">
                We&apos;ll respond within 24 hours.
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
