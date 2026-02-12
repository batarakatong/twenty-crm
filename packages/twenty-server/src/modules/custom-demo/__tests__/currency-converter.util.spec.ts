import { CurrencyConverter } from '../currency-converter.util';

describe('CurrencyConverter', () => {
  describe('convert', () => {
    it('should return same amount when converting to same currency', () => {
      const result = CurrencyConverter.convert(100, 'USD', 'USD');
      expect(result).toBe(100);
    });

    it('should convert USD to IDR correctly', () => {
      const result = CurrencyConverter.convert(100, 'USD', 'IDR');
      expect(result).toBe(1575000); // 100 * 15750
    });

    it('should convert USD to EUR correctly', () => {
      const result = CurrencyConverter.convert(100, 'USD', 'EUR');
      expect(result).toBe(92); // 100 * 0.92
    });

    it('should handle reverse conversion (IDR to USD)', () => {
      const result = CurrencyConverter.convert(15750, 'IDR', 'USD');
      expect(result).toBeCloseTo(1, 2); // 15750 / 15750 ≈ 1
    });

    it('should throw error for unsupported currency pair', () => {
      expect(() => {
        CurrencyConverter.convert(100, 'JPY', 'CNY');
      }).toThrow('No exchange rate found');
    });
  });

  describe('getRate', () => {
    it('should return 1 for same currency', () => {
      const rate = CurrencyConverter.getRate('USD', 'USD');
      expect(rate).toBe(1);
    });

    it('should return correct rate for USD to IDR', () => {
      const rate = CurrencyConverter.getRate('USD', 'IDR');
      expect(rate).toBe(15750);
    });

    it('should return correct reverse rate', () => {
      const rate = CurrencyConverter.getRate('IDR', 'USD');
      expect(rate).toBeCloseTo(1 / 15750, 10);
    });

    it('should throw error for unsupported pair', () => {
      expect(() => {
        CurrencyConverter.getRate('JPY', 'CNY');
      }).toThrow('No exchange rate found');
    });
  });
});
