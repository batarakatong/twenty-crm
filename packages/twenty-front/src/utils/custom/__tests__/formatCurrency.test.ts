import { formatCurrency, formatCurrencyCompact } from '../formatCurrency';

describe('formatCurrency', () => {
  it('should format USD currency correctly', () => {
    expect(formatCurrency(1234.56, 'USD')).toBe('$1,234.56');
  });

  it('should format EUR currency correctly', () => {
    expect(formatCurrency(1234.56, 'EUR')).toBe('€1,234.56');
  });

  it('should format GBP currency correctly', () => {
    expect(formatCurrency(1234.56, 'GBP')).toBe('£1,234.56');
  });

  it('should format IDR currency correctly', () => {
    const result = formatCurrency(1234567, 'IDR');
    expect(result).toContain('1.234.567');
    expect(result).toContain('IDR');
  });

  it('should default to USD when no currency is specified', () => {
    expect(formatCurrency(100)).toBe('$100.00');
  });

  it('should handle zero amount', () => {
    expect(formatCurrency(0, 'USD')).toBe('$0.00');
  });

  it('should handle negative amounts', () => {
    expect(formatCurrency(-100, 'USD')).toBe('-$100.00');
  });
});

describe('formatCurrencyCompact', () => {
  it('should format large amounts in compact form (USD)', () => {
    expect(formatCurrencyCompact(1000, 'USD')).toBe('$1K');
  });

  it('should format millions in compact form (USD)', () => {
    expect(formatCurrencyCompact(1000000, 'USD')).toBe('$1M');
  });

  it('should format small amounts without compacting', () => {
    expect(formatCurrencyCompact(999, 'USD')).toBe('$999');
  });

  it('should handle different currencies in compact form', () => {
    const result = formatCurrencyCompact(1000000, 'EUR');
    expect(result).toContain('1');
    expect(result).toContain('M');
  });
});
