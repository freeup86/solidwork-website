import { z } from 'zod';

export const leadSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  name: z.string().optional(),
  company: z.string().optional(),
  role: z.enum(['owner', 'estimator', 'ops', 'other']).optional(),
  phone: z.string().optional(),
  trade: z.enum(['electrical', 'hvac', 'plumbing', 'general', 'other']).optional(),
  estimate_volume: z.string().optional(),
  pain_point: z.string().max(2000, 'Must be under 2000 characters').optional(),
  source_page: z.string().optional(),
  source_product: z.string().optional(),
  hp_field: z.string().max(0, 'This field should be empty').optional(),
});

export const leadFormSchema = leadSchema.pick({
  email: true,
  name: true,
  company: true,
  role: true,
  trade: true,
  estimate_volume: true,
  pain_point: true,
  hp_field: true,
});

export type LeadFormData = z.infer<typeof leadFormSchema>;

export const waitlistSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  product_interest: z.enum(['papertrail', 'cityshield', 'general']),
  source_page: z.string().optional(),
  hp_field: z.string().max(0, 'This field should be empty').optional(),
});

export type WaitlistFormData = z.infer<typeof waitlistSchema>;
