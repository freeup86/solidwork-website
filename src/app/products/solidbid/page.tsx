import { Metadata } from 'next';
import { SolidBidContent } from './content';

export const metadata: Metadata = {
  title: 'SolidBid | Electrical Estimating from PDFs',
  description: 'Upload electrical plans and get material counts, wire lists, and baseline labor estimates. Stop counting symbols by hand.',
  keywords: ['electrical takeoff', 'estimating software', 'material list from PDF', 'wire takeoff', 'electrical estimating'],
};

export default function SolidBidPage() {
  return <SolidBidContent />;
}
