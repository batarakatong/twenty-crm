// Custom utility function for formatting currency
// This demonstrates how to add custom utilities to the Twenty CRM

export type CurrencyCode = 'USD' | 'EUR' | 'GBP' | 'IDR';

export const formatCurrency = (
  amount: number,
  currency: CurrencyCode = 'USD',
): string => {
  const locale = currency === 'IDR' ? 'id-ID' : 'en-US';
  
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount);
};

export const formatCurrencyCompact = (
  amount: number,
  currency: CurrencyCode = 'USD',
): string => {
  const locale = currency === 'IDR' ? 'id-ID' : 'en-US';
  
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
    notation: 'compact',
    compactDisplay: 'short',
  }).format(amount);
};
