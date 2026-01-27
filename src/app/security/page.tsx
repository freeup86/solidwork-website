import { Metadata } from 'next';
import SecurityContent from './security-content';

export const metadata: Metadata = {
  title: 'Security',
  description: 'SolidWork Systems security practices. How we protect your data and maintain system integrity.',
};

export default function SecurityPage() {
  return <SecurityContent />;
}
