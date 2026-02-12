---

# 🎨 Customizations for this Fork

This fork includes custom enhancements and examples for Twenty CRM:

## 📦 Custom Features Added

### Frontend
- **Currency Formatter** - Multi-currency formatting utility (USD, EUR, GBP, IDR)
- **Currency Display Component** - React component for displaying formatted currencies

### Backend
- **Currency Converter** - Utility class for currency conversion with exchange rates

## 📚 Documentation

Start with these guides:

1. **[CUSTOMIZATION_QUICK_START.md](./CUSTOMIZATION_QUICK_START.md)** - Quick reference (START HERE!)
2. **[CUSTOMIZATION_SUMMARY.md](./CUSTOMIZATION_SUMMARY.md)** - Complete overview
3. **[CUSTOMIZATION_GUIDE.md](./CUSTOMIZATION_GUIDE.md)** - Detailed step-by-step guide
4. **[CUSTOM_DEMO.md](./CUSTOM_DEMO.md)** - Usage examples and best practices

## 🧪 Testing

All customizations include comprehensive tests:
- ✅ 11 frontend tests (Currency formatter)
- ✅ 9 backend tests (Currency converter)

## 🚀 Quick Example

```typescript
// Frontend - Format currency
import { formatCurrency } from '@/utils/custom/formatCurrency';
const price = formatCurrency(1000000, 'IDR');
// Output: "IDR 1.000.000,00"

// Backend - Convert currency
import { CurrencyConverter } from './modules/custom-demo/currency-converter.util';
const converted = CurrencyConverter.convert(100, 'USD', 'IDR');
// Output: 1575000
```

## 📖 Learn More

This fork demonstrates:
- How to add custom utilities to Twenty CRM
- How to create reusable React components
- How to write comprehensive tests
- How to structure custom code in a monorepo

Perfect as a template for your own customizations!

---
