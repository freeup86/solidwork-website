import { Metadata } from 'next';
import AboutContent from './about-content';

export const metadata: Metadata = {
  title: 'About',
  description: 'SolidWork Systems builds practical software for real-world trades. Learn about our mission and values.',
};

export default function AboutPage() {
  return <AboutContent />;
}
