import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'SolidWork Systems privacy policy. How we collect, use, and protect your data.',
};

export default function PrivacyPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[var(--background-warm)] py-24 lg:py-32">
        <div className="absolute inset-0 texture-grid opacity-50" />
        <div className="relative mx-auto max-w-3xl px-5 sm:px-6 lg:px-8">
          <h1 className="font-display text-4xl font-bold text-[var(--color-ink)]">Privacy Policy</h1>
          <p className="mt-4 font-mono text-sm text-[var(--color-steel)]">Last updated: January 2025</p>
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-3xl px-5 sm:px-6 lg:px-8">
          <div className="space-y-10 text-[var(--color-slate)]">
            <section>
              <h2 className="font-display text-2xl font-bold text-[var(--color-ink)]">Overview</h2>
              <p className="mt-4 leading-relaxed">
                SolidWork Systems (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting your privacy.
                This Privacy Policy explains how we collect, use, and safeguard your information when you use our website
                and services.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-[var(--color-ink)]">Information We Collect</h2>
              <p className="mt-4 leading-relaxed">We collect information you provide directly to us, including:</p>
              <ul className="mt-4 list-disc space-y-2 pl-6 leading-relaxed">
                <li>Contact information (name, email address, phone number, company name)</li>
                <li>Business information (trade, role, estimate volume)</li>
                <li>Communications you send to us</li>
                <li>Any other information you choose to provide</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-[var(--color-ink)]">How We Use Your Information</h2>
              <p className="mt-4 leading-relaxed">We use the information we collect to:</p>
              <ul className="mt-4 list-disc space-y-2 pl-6 leading-relaxed">
                <li>Respond to your inquiries and provide customer support</li>
                <li>Send you updates about our products and services</li>
                <li>Improve our website and services</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-[var(--color-ink)]">Data Security</h2>
              <p className="mt-4 leading-relaxed">
                We implement appropriate technical and organizational measures to protect your personal information
                against unauthorized access, alteration, disclosure, or destruction.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-[var(--color-ink)]">Your Rights</h2>
              <p className="mt-4 leading-relaxed">
                You have the right to access, correct, or delete your personal information. You can also opt out of
                marketing communications at any time by contacting us.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-[var(--color-ink)]">Contact Us</h2>
              <p className="mt-4 leading-relaxed">
                If you have questions about this Privacy Policy, please contact us at{' '}
                <a href="mailto:privacy@solidwork.systems" className="font-semibold text-[var(--color-amber)] hover:underline">
                  privacy@solidwork.systems
                </a>
              </p>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
}
