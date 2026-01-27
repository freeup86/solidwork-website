import type { Metadata } from 'next';
import ProductsContent from './products-content';

export const metadata: Metadata = {
  title: 'Products',
  description: 'Software tools built for trade contractors. SolidBid for estimating, PaperTrail for expense tracking, CityShield for compliance.',
  openGraph: {
    title: 'Products | SolidWork Systems',
    description: 'Software tools built for trade contractors.',
  },
};

export default function ProductsPage() {
  return <ProductsContent />;
}
