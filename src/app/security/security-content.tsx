'use client';

import { useScrollRevealContainer } from '@/hooks/use-scroll-reveal';
import {
  SecureLockIcon,
  ComplianceIcon,
  ClarityIcon,
  InfrastructureIcon,
} from '@/components/icons/trade-icons';

const securityFeatures = [
  {
    Icon: SecureLockIcon,
    title: 'Encryption',
    description: 'All data is encrypted in transit using TLS 1.3 and at rest using AES-256 encryption.',
  },
  {
    Icon: ComplianceIcon,
    title: 'Access Control',
    description: 'Role-based access control ensures users only see data they are authorized to access.',
  },
  {
    Icon: ClarityIcon,
    title: 'Monitoring',
    description: 'Continuous monitoring and logging of all system access and data operations.',
  },
  {
    Icon: InfrastructureIcon,
    title: 'Infrastructure',
    description: 'Hosted on SOC 2 compliant cloud infrastructure with regular security audits.',
  },
];

export default function SecurityContent() {
  const scrollRef = useScrollRevealContainer();

  return (
    <div ref={scrollRef}>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[var(--background-warm)] py-24 lg:py-32">
        <div className="absolute inset-0 texture-grid opacity-50" />
        <div className="absolute -bottom-40 -right-40 h-80 w-80 rounded-full bg-[var(--color-blueprint)] opacity-10 blur-3xl" />

        <div className="relative mx-auto max-w-3xl px-5 sm:px-6 lg:px-8">
          <h1 className="font-display text-4xl font-bold text-[var(--color-ink)] animate-fade-in-up">Security</h1>
          <p className="mt-4 text-lg leading-relaxed text-[var(--color-slate)] animate-fade-in-up delay-100">
            We take the security of your data seriously. Here&apos;s how we protect your information.
          </p>
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-3xl px-5 sm:px-6 lg:px-8">
          {/* Security Features Grid */}
          <div className="grid gap-6 sm:grid-cols-2">
            {securityFeatures.map((feature, index) => (
              <div
                key={feature.title}
                className="reveal glow-card rounded-2xl border border-[var(--color-border)] bg-white p-6"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--color-ink)]">
                  <feature.Icon size={20} className="text-[var(--color-amber)]" />
                </div>
                <h3 className="mt-4 font-display text-lg font-bold text-[var(--color-ink)]">{feature.title}</h3>
                <p className="mt-2 leading-relaxed text-[var(--color-slate)]">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="reveal mt-16 space-y-8 text-[var(--color-slate)]" style={{ transitionDelay: '200ms' }}>
            <section>
              <h2 className="font-display text-2xl font-bold text-[var(--color-ink)]">Data Protection</h2>
              <p className="mt-4 leading-relaxed">
                Your uploaded documents and business data are processed securely and never shared with third parties
                without your explicit consent. We retain data only as long as necessary to provide our services.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-[var(--color-ink)]">Vulnerability Disclosure</h2>
              <p className="mt-4 leading-relaxed">
                If you discover a security vulnerability in our systems, please report it responsibly to{' '}
                <a href="mailto:security@solidwork.systems" className="font-semibold text-[var(--color-amber)] hover:underline">
                  security@solidwork.systems
                </a>
                . We appreciate your help in keeping our systems secure and will respond promptly to all reports.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-[var(--color-ink)]">Compliance</h2>
              <p className="mt-4 leading-relaxed">
                We are committed to maintaining compliance with applicable data protection regulations and industry
                best practices. Our security practices are regularly reviewed and updated.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-[var(--color-ink)]">Questions</h2>
              <p className="mt-4 leading-relaxed">
                For security-related questions or concerns, please contact our security team at{' '}
                <a href="mailto:security@solidwork.systems" className="font-semibold text-[var(--color-amber)] hover:underline">
                  security@solidwork.systems
                </a>
              </p>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
}
