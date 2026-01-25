import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'SolidWork Systems terms of service. Rules and guidelines for using our products.',
};

export default function TermsPage() {
  return (
    <div className="py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-[var(--color-charcoal)]">Terms of Service</h1>
        <p className="mt-4 text-[var(--color-slate)]">Last updated: January 2025</p>

        <div className="mt-12 space-y-8 text-[var(--color-slate)]">
          <section>
            <h2 className="text-2xl font-semibold text-[var(--color-charcoal)]">Agreement to Terms</h2>
            <p className="mt-4">
              By accessing or using SolidWork Systems products and services, you agree to be bound by these Terms
              of Service. If you do not agree to these terms, please do not use our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[var(--color-charcoal)]">Use of Services</h2>
            <p className="mt-4">Our services are designed to assist with estimating and business operations. You agree to:</p>
            <ul className="mt-4 list-disc space-y-2 pl-6">
              <li>Use our services only for lawful purposes</li>
              <li>Provide accurate information when creating an account or submitting data</li>
              <li>Maintain the security of your account credentials</li>
              <li>Not attempt to reverse engineer or interfere with our services</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[var(--color-charcoal)]">Service Limitations</h2>
            <p className="mt-4">
              Our tools provide estimates and analysis to assist your decision-making. They are not a substitute
              for professional judgment. You acknowledge that:
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-6">
              <li>Estimates are starting points, not guarantees</li>
              <li>You are responsible for reviewing and validating all outputs</li>
              <li>Final decisions and bids remain your responsibility</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[var(--color-charcoal)]">Intellectual Property</h2>
            <p className="mt-4">
              All content, features, and functionality of our services are owned by SolidWork Systems and are
              protected by copyright, trademark, and other intellectual property laws.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[var(--color-charcoal)]">Limitation of Liability</h2>
            <p className="mt-4">
              To the maximum extent permitted by law, SolidWork Systems shall not be liable for any indirect,
              incidental, special, consequential, or punitive damages resulting from your use of our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[var(--color-charcoal)]">Changes to Terms</h2>
            <p className="mt-4">
              We may update these terms from time to time. We will notify you of any material changes by posting
              the new terms on this page with an updated revision date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[var(--color-charcoal)]">Contact Us</h2>
            <p className="mt-4">
              If you have questions about these Terms of Service, please contact us at{' '}
              <a href="mailto:legal@solidwork.systems" className="text-[var(--color-accent)] hover:underline">
                legal@solidwork.systems
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
