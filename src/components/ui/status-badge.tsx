import { LaborClockIcon } from '@/components/icons/trade-icons';

export type ProductStatus = 'live' | 'pilot' | 'coming';

const styles: Record<ProductStatus, string> = {
  live: 'badge-success',
  pilot: 'badge-amber',
  coming: 'badge-muted',
};

const labels: Record<ProductStatus, string> = {
  live: 'Live',
  pilot: 'Pilot',
  coming: 'Coming Soon',
};

const icons: Record<ProductStatus, React.ReactNode> = {
  live: <span className="h-1.5 w-1.5 rounded-full bg-green-500" />,
  pilot: <span className="h-1.5 w-1.5 rounded-full bg-amber-500 animate-pulse" />,
  coming: <LaborClockIcon size={12} />,
};

export function StatusBadge({ status }: { status: ProductStatus }) {
  return (
    <span className={`badge ${styles[status]}`}>
      {icons[status]}
      {labels[status]}
    </span>
  );
}
