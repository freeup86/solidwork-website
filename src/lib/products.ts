import {
  BlueprintIcon,
  ReceiptIcon,
  ComplianceIcon,
} from '@/components/icons/trade-icons';
import type { ProductStatus } from '@/components/ui/status-badge';

export interface Product {
  name: string;
  tagline: string;
  description: string;
  href: string;
  status: ProductStatus;
  Icon: typeof BlueprintIcon;
  category: string;
  hoverBg: string;
  waitlistId?: string;
}

export const products: Product[] = [
  {
    name: 'SolidBid',
    tagline: 'Upload plans. Get a solid bid.',
    description:
      'Turn electrical PDFs into material counts, wire lists, and baseline labor estimates. Stop counting symbols by hand.',
    href: '/products/solidbid',
    status: 'pilot',
    Icon: BlueprintIcon,
    category: 'estimating',
    hoverBg: 'bg-amber-500/10',
  },
  {
    name: 'PaperTrail',
    tagline: 'Receipts that actually get done.',
    description:
      'Employees snap receipts. Owners see who spent what. No more paper folders or chasing people down.',
    href: '/products',
    status: 'coming',
    Icon: ReceiptIcon,
    category: 'spending',
    hoverBg: 'bg-blue-500/10',
    waitlistId: 'papertrail',
  },
  {
    name: 'CityShield',
    tagline: 'Know before you get fined.',
    description:
      'Automatic compliance checks for local labor laws. Upload schedules, catch violations before payroll.',
    href: '/products',
    status: 'coming',
    Icon: ComplianceIcon,
    category: 'compliance',
    hoverBg: 'bg-emerald-500/10',
    waitlistId: 'cityshield',
  },
];
