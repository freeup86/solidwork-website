import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'SolidWork Systems terms of service. Rules and guidelines for using our products.',
};

export default function TermsPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[var(--background-warm)] py-24 lg:py-32">
        <div className="absolute inset-0 texture-grid opacity-50" />
        <div className="relative mx-auto max-w-3xl px-5 sm:px-6 lg:px-8">
          <h1 className="font-display text-4xl font-bold text-[var(--color-ink)]">Terms of Service</h1>
          <p className="mt-4 font-mono text-sm text-[var(--color-steel)]">Last updated: January 2025</p>
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-3xl px-5 sm:px-6 lg:px-8">
          <div className="space-y-10 text-[var(--color-slate)]">
            <section>
              <h2 className="font-display text-2xl font-bold text-[var(--color-ink)]">Agreement to Terms</h2>
              <p className="mt-4 leading-relaxed">
                By accessing or using SolidWork Systems products and services, you agree to be bound by these Terms
                of Service. If you do not agree to these terms, please do not use our services.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-[var(--color-ink)]">Use of Services</h2>
              <p className="mt-4 leading-relaxed">Our services are designed to assist with estimating and business operations. You agree to:</p>
              <ul className="mt-4 list-disc space-y-2 pl-6 leading-relaxed">
                <li>Use our services only for lawful purposes</li>
                <li>Provide accurate information when creating an account or submitting data</li>
                <li>Maintain the security of your account credentials</li>
                <li>Not attempt to reverse engineer or interfere with our services</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-[var(--color-ink)]">Service Limitations</h2>
              <p className="mt-4 leading-relaxed">
                Our tools provide estimates and analysis to assist your decision-making. They are not a substitute
                for professional judgment. You acknowledge that:
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-6 leading-relaxed">
                <li>Estimates are starting points, not guarantees</li>
                <li>You are responsible for reviewing and validating all outputs</li>
                <li>Final decisions and bids remain your responsibility</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-[var(--color-ink)]">Intellectual Property</h2>
              <p className="mt-4 leading-relaxed">
                All content, features, and functionality of our services are owned by SolidWork Systems and are
                protected by copyright, trademark, and other intellectual property laws.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-[var(--color-ink)]">Limitation of Liability</h2>
              <p className="mt-4 leading-relaxed">
                To the maximum extent permitted by law, SolidWork Systems shall not be liable for any indirect,
                incidental, special, consequential, or punitive damages resulting from your use of our services.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-[var(--color-ink)]">Changes to Terms</h2>
              <p className="mt-4 leading-relaxed">
                We may update these terms from time to time. We will notify you of any material changes by posting
                the new terms on this page with an updated revision date.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-[var(--color-ink)]">Contact Us</h2>
              <p className="mt-4 leading-relaxed">
                If you have questions about these Terms of Service, please contact us at{' '}
                <a href="mailto:legal@solidwork.systems" className="font-semibold text-[var(--color-amber)] hover:underline">
                  legal@solidwork.systems
                </a>
              </p>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
}
