import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'SolidWork Systems privacy policy. How we collect, use, and protect your data.',
};

export default function PrivacyPage() {
  return (
    <div className="py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-[var(--color-charcoal)]">Privacy Policy</h1>
        <p className="mt-4 text-[var(--color-slate)]">Last updated: January 2025</p>

        <div className="mt-12 space-y-8 text-[var(--color-slate)]">
          <section>
            <h2 className="text-2xl font-semibold text-[var(--color-charcoal)]">Overview</h2>
            <p className="mt-4">
              SolidWork Systems (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting your privacy.
              This Privacy Policy explains how we collect, use, and safeguard your information when you use our website
              and services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[var(--color-charcoal)]">Information We Collect</h2>
            <p className="mt-4">We collect information you provide directly to us, including:</p>
            <ul className="mt-4 list-disc space-y-2 pl-6">
              <li>Contact information (name, email address, phone number, company name)</li>
              <li>Business information (trade, role, estimate volume)</li>
              <li>Communications you send to us</li>
              <li>Any other information you choose to provide</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[var(--color-charcoal)]">How We Use Your Information</h2>
            <p className="mt-4">We use the information we collect to:</p>
            <ul className="mt-4 list-disc space-y-2 pl-6">
              <li>Respond to your inquiries and provide customer support</li>
              <li>Send you updates about our products and services</li>
              <li>Improve our website and services</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[var(--color-charcoal)]">Data Security</h2>
            <p className="mt-4">
              We implement appropriate technical and organizational measures to protect your personal information
              against unauthorized access, alteration, disclosure, or destruction.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[var(--color-charcoal)]">Your Rights</h2>
            <p className="mt-4">
              You have the right to access, correct, or delete your personal information. You can also opt out of
              marketing communications at any time by contacting us.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[var(--color-charcoal)]">Contact Us</h2>
            <p className="mt-4">
              If you have questions about this Privacy Policy, please contact us at{' '}
              <a href="mailto:privacy@solidwork.systems" className="text-[var(--color-accent)] hover:underline">
                privacy@solidwork.systems
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
