import type { Metadata } from 'next';
import { PricingContent } from './pricing-content';

export const metadata: Metadata = {
  title: 'Pricing | SolidWork Systems',
  description:
    'Simple, transparent pricing for trade contractors. Plans for solo estimators, growing crews, and general contractors.',
  openGraph: {
    title: 'Pricing | SolidWork Systems',
    description:
      'Simple, transparent pricing for trade contractors. Plans for solo estimators, growing crews, and general contractors.',
  },
};

export default function PricingPage() {
  return <PricingContent />;
}
