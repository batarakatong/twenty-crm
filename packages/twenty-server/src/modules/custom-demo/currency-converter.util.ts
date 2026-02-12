// Custom utility for currency conversion
// This demonstrates backend customization

export type CurrencyRate = {
  from: string;
  to: string;
  rate: number;
};

// Sample exchange rates (in production, this would come from an API)
const EXCHANGE_RATES: CurrencyRate[] = [
  { from: 'USD', to: 'IDR', rate: 15750 },
  { from: 'EUR', to: 'IDR', rate: 17200 },
  { from: 'GBP', to: 'IDR', rate: 19800 },
  { from: 'USD', to: 'EUR', rate: 0.92 },
  { from: 'USD', to: 'GBP', rate: 0.79 },
];

export class CurrencyConverter {
  static convert(amount: number, from: string, to: string): number {
    if (from === to) {
      return amount;
    }

    // Try direct conversion
    const directRate = EXCHANGE_RATES.find(
      (r) => r.from === from && r.to === to,
    );
    if (directRate) {
      return amount * directRate.rate;
    }

    // Try reverse conversion
    const reverseRate = EXCHANGE_RATES.find(
      (r) => r.from === to && r.to === from,
    );
    if (reverseRate) {
      return amount / reverseRate.rate;
    }

    // If no direct or reverse rate found, throw error
    throw new Error(`No exchange rate found for ${from} to ${to}`);
  }

  static getRate(from: string, to: string): number {
    if (from === to) {
      return 1;
    }

    const directRate = EXCHANGE_RATES.find(
      (r) => r.from === from && r.to === to,
    );
    if (directRate) {
      return directRate.rate;
    }

    const reverseRate = EXCHANGE_RATES.find(
      (r) => r.from === to && r.to === from,
    );
    if (reverseRate) {
      return 1 / reverseRate.rate;
    }

    throw new Error(`No exchange rate found for ${from} to ${to}`);
  }
}
