import { Metadata } from 'next';
import { Shield, Lock, Eye, Server } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Security',
  description: 'SolidWork Systems security practices. How we protect your data and maintain system integrity.',
};

const securityFeatures = [
  {
    icon: Lock,
    title: 'Encryption',
    description: 'All data is encrypted in transit using TLS 1.3 and at rest using AES-256 encryption.',
  },
  {
    icon: Shield,
    title: 'Access Control',
    description: 'Role-based access control ensures users only see data they are authorized to access.',
  },
  {
    icon: Eye,
    title: 'Monitoring',
    description: 'Continuous monitoring and logging of all system access and data operations.',
  },
  {
    icon: Server,
    title: 'Infrastructure',
    description: 'Hosted on SOC 2 compliant cloud infrastructure with regular security audits.',
  },
];

export default function SecurityPage() {
  return (
    <div className="py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-[var(--color-charcoal)]">Security</h1>
        <p className="mt-4 text-lg text-[var(--color-slate)]">
          We take the security of your data seriously. Here&apos;s how we protect your information.
        </p>

        {/* Security Features Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {securityFeatures.map((feature) => (
            <div key={feature.title} className="rounded-xl border border-[var(--color-border)] bg-white p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--color-muted)]">
                <feature.icon className="h-5 w-5 text-[var(--color-charcoal)]" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-[var(--color-charcoal)]">{feature.title}</h3>
              <p className="mt-2 text-[var(--color-slate)]">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 space-y-8 text-[var(--color-slate)]">
          <section>
            <h2 className="text-2xl font-semibold text-[var(--color-charcoal)]">Data Protection</h2>
            <p className="mt-4">
              Your uploaded documents and business data are processed securely and never shared with third parties
              without your explicit consent. We retain data only as long as necessary to provide our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[var(--color-charcoal)]">Vulnerability Disclosure</h2>
            <p className="mt-4">
              If you discover a security vulnerability in our systems, please report it responsibly to{' '}
              <a href="mailto:security@solidwork.systems" className="text-[var(--color-accent)] hover:underline">
                security@solidwork.systems
              </a>
              . We appreciate your help in keeping our systems secure and will respond promptly to all reports.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[var(--color-charcoal)]">Compliance</h2>
            <p className="mt-4">
              We are committed to maintaining compliance with applicable data protection regulations and industry
              best practices. Our security practices are regularly reviewed and updated.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[var(--color-charcoal)]">Questions</h2>
            <p className="mt-4">
              For security-related questions or concerns, please contact our security team at{' '}
              <a href="mailto:security@solidwork.systems" className="text-[var(--color-accent)] hover:underline">
                security@solidwork.systems
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
