# 🚀 Quick Start - Kustomisasi Twenty CRM

## ⚡ Mulai Cepat / Quick Start

### 1. Install Dependencies
```bash
yarn install
```

### 2. Test Kustomisasi
```bash
# Test frontend
npx jest packages/twenty-front/src/utils/custom/__tests__/formatCurrency.test.ts --config=packages/twenty-front/jest.config.mjs

# Test backend
npx jest packages/twenty-server/src/modules/custom-demo/__tests__/currency-converter.util.spec.ts --config=packages/twenty-server/jest.config.mjs
```

### 3. Gunakan Kustomisasi

#### Frontend - Format Currency
```typescript
import { formatCurrency } from '@/utils/custom/formatCurrency';

const price = formatCurrency(1000000, 'IDR');
// Output: "IDR 1.000.000,00"
```

#### Backend - Convert Currency
```typescript
import { CurrencyConverter } from './modules/custom-demo/currency-converter.util';

const converted = CurrencyConverter.convert(100, 'USD', 'IDR');
// Output: 1575000
```

## 📚 Dokumentasi Lengkap

1. **CUSTOMIZATION_SUMMARY.md** - 📋 Ringkasan lengkap semua yang sudah dibuat
2. **CUSTOMIZATION_GUIDE.md** - 📖 Panduan step-by-step kustomisasi
3. **CUSTOM_DEMO.md** - 💡 Contoh penggunaan dan best practices

## 🎯 Yang Sudah Dibuat

✅ Currency Formatter (Frontend)  
✅ Currency Display Component (Frontend)  
✅ Currency Converter (Backend)  
✅ 20 Test Cases  
✅ Dokumentasi Lengkap (Bilingual ID/EN)

## ⚙️ Development Commands

```bash
# Lint code
npx nx lint:diff-with-main twenty-front
npx nx lint:diff-with-main twenty-server

# Type check
npx nx typecheck twenty-front
npx nx typecheck twenty-server

# Start dev server
yarn start
```

---
**🎉 Selamat! Kustomisasi siap digunakan!**  
**🎉 Congratulations! Customizations are ready to use!**
