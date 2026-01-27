import type { Metadata } from 'next';
import { Outfit, Inter, JetBrains_Mono } from 'next/font/google';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { ToastProvider } from '@/components/ui/toast';
import './globals.css';

const outfit = Outfit({
  variable: '--font-outfit',
  subsets: ['latin'],
  display: 'swap',
});

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  variable: '--font-jetbrains-mono',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://solidwork.systems'),
  title: {
    default: 'SolidWork Systems | Practical Software for Real-World Trades',
    template: '%s | SolidWork Systems',
  },
  description: 'Software built for the trades. SolidBid for estimating, PaperTrail for expense tracking, and more. No hype, just tools that work.',
  keywords: ['electrical takeoff', 'estimating software', 'trades software', 'construction estimating'],
  authors: [{ name: 'SolidWork Systems' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://solidwork.systems',
    siteName: 'SolidWork Systems',
    title: 'SolidWork Systems | Practical Software for Real-World Trades',
    description: 'Software built for the trades. SolidBid for estimating, PaperTrail for expense tracking, and more.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'SolidWork Systems - Practical Software for Real-World Trades',
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: 'SolidWork Systems',
    description: 'Practical software for real-world trades.',
  },
  alternates: {
    canonical: '/',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${outfit.variable} ${inter.variable} ${jetbrainsMono.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'SolidWork Systems',
              url: 'https://solidwork.systems',
              description: 'Practical software for real-world trades.',
              contactPoint: {
                '@type': 'ContactPoint',
                contactType: 'sales',
                url: 'https://solidwork.systems/contact',
              },
            }),
          }}
        />
        <ToastProvider>
          <a href="#main-content" className="skip-link">
            Skip to main content
          </a>
          <Header />
          <main id="main-content" className="min-h-screen">
            {children}
          </main>
          <Footer />
        </ToastProvider>
      </body>
    </html>
  );
}
