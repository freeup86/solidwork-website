export interface PricingFeature {
  label: string;
  tooltip?: string;
  comingSoon?: boolean;
}

export interface PricingTier {
  slug: string;
  name: string;
  audience: string;
  monthlyPrice: number;
  yearlyPrice: number;
  yearlySavings: string;
  yearlyBilledTotal: number;
  badge?: string;
  popular?: boolean;
  features: PricingFeature[];
  cta: string;
}

export const tiers: PricingTier[] = [
  {
    slug: 'solo',
    name: 'Solo Contractor',
    audience: 'Owner-operators estimating their own work',
    monthlyPrice: 99,
    yearlyPrice: 79,
    yearlySavings: '20%',
    yearlyBilledTotal: 948,
    features: [
      { label: 'SolidBid: 10 estimates per month' },
      { label: 'Up to 50 pages per plan set' },
      { label: 'Material takeoff' },
      { label: 'Wire list generation' },
      { label: 'Labor estimates' },
      { label: 'Excel + PDF export' },
      { label: 'Email support (48h response)' },
    ],
    cta: 'Get Started',
  },
  {
    slug: 'growing',
    name: 'Growing Crew',
    audience: 'Shops with a dedicated estimator or small team',
    monthlyPrice: 249,
    yearlyPrice: 199,
    yearlySavings: '20%',
    yearlyBilledTotal: 2388,
    badge: 'Most Popular',
    popular: true,
    features: [
      { label: 'Everything in Solo, plus:' },
      { label: 'SolidBid: 30 estimates per month' },
      { label: 'Up to 200 pages per plan set' },
      {
        label: 'Classified spec notes',
        tooltip:
          'AI identifies and organizes specification notes from your plan sets, flagging materials, codes, and requirements automatically.',
      },
      {
        label: 'PaperTrail receipt attribution for 10 crew',
        tooltip:
          'Snap a photo of any receipt and PaperTrail attributes the expense to the right job, crew member, and cost code.',
        comingSoon: true,
      },
      { label: 'Priority support (24h response)' },
    ],
    cta: 'Get Started',
  },
  {
    slug: 'gc',
    name: 'General Contractor',
    audience: 'Firms running multiple projects with large plan sets',
    monthlyPrice: 499,
    yearlyPrice: 399,
    yearlySavings: '20%',
    yearlyBilledTotal: 4788,
    features: [
      { label: 'Everything in Growing Crew, plus:' },
      { label: 'SolidBid: unlimited estimates' },
      { label: 'Unlimited pages per plan set' },
      {
        label: 'CityShield labor compliance',
        tooltip:
          'Automated prevailing wage verification, certified payroll generation, and DIR compliance monitoring for public works projects.',
        comingSoon: true,
      },
      { label: 'Dedicated onboarding session' },
      { label: 'Phone + email support (same-day)' },
      { label: 'Volume discounts available' },
    ],
    cta: 'Talk to Us',
  },
];

export interface FAQItem {
  question: string;
  answer: string;
}

export const faqItems: FAQItem[] = [
  {
    question: 'Do I need a credit card to start?',
    answer:
      'No. You can schedule a demo or start a trial without entering payment info. We\u2019ll set you up with a plan once you\u2019re ready to commit.',
  },
  {
    question: 'Can I switch plans later?',
    answer:
      'Absolutely. You can upgrade or downgrade at any time. When you upgrade, you\u2019ll get immediate access to the new features. When you downgrade, the change takes effect at the start of your next billing cycle.',
  },
  {
    question: 'What happens if I hit my estimate limit?',
    answer:
      'You\u2019ll get a heads-up when you\u2019re approaching your limit. If you go over, you can upgrade to the next tier or purchase additional estimates as a one-time add-on. We\u2019ll never cut you off mid-project.',
  },
  {
    question: 'How does yearly billing work?',
    answer:
      'Yearly plans are billed once per year at the discounted rate (20% off monthly pricing). You lock in that rate for the full year. Cancel anytime\u2014we\u2019ll prorate the remaining balance.',
  },
  {
    question: 'What\u2019s your refund policy?',
    answer:
      'If you\u2019re not satisfied within the first 30 days, we\u2019ll refund you in full\u2014no questions asked. After 30 days, you can cancel anytime and your plan stays active through the end of the billing period.',
  },
  {
    question: 'When will "Coming Soon" features be available?',
    answer:
      'PaperTrail and CityShield are in active development and currently in private pilot. Growing Crew and General Contractor subscribers get early access as these features roll out. We\u2019ll notify you as soon as they\u2019re ready.',
  },
];
