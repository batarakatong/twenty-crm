// Custom Demo Component
// This demonstrates how to create a custom component in Twenty CRM

import { formatCurrency } from '@/utils/custom/formatCurrency';

type CurrencyDisplayProps = {
  amount: number;
  currency?: 'USD' | 'EUR' | 'GBP' | 'IDR';
  compact?: boolean;
};

export const CurrencyDisplay = ({
  amount,
  currency = 'USD',
  compact = false,
}: CurrencyDisplayProps) => {
  const formattedAmount = compact
    ? formatCurrency(amount, currency)
    : formatCurrency(amount, currency);

  return (
    <div style={{ fontFamily: 'monospace', fontSize: '16px' }}>
      {formattedAmount}
    </div>
  );
};
