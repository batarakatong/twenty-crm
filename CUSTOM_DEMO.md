# Custom Demo Module - Contoh Kustomisasi / Customization Examples

## 📚 Ringkasan / Overview

Repository ini telah dikustomisasi dengan contoh-contoh berikut:
This repository has been customized with the following examples:

### Frontend Customizations

1. **Custom Currency Formatter** (`packages/twenty-front/src/utils/custom/`)
   - Utility function untuk format mata uang
   - Support untuk USD, EUR, GBP, dan IDR (Rupiah)
   - Format normal dan compact

2. **Currency Display Component** (`packages/twenty-front/src/modules/custom-demo/`)
   - React component untuk menampilkan nilai mata uang
   - Dapat digunakan di berbagai tempat dalam aplikasi

### Backend Customizations

1. **Currency Converter Utility** (`packages/twenty-server/src/modules/custom-demo/`)
   - Utility class untuk konversi mata uang
   - Support multiple currency pairs
   - Dengan comprehensive tests

## 🎯 Contoh Penggunaan / Usage Examples

### Frontend - Currency Formatter

```typescript
import { formatCurrency, formatCurrencyCompact } from '@/utils/custom/formatCurrency';

// Format normal
const price = formatCurrency(1234567.89, 'IDR');
console.log(price); // "IDR 1.234.567,89"

// Format compact untuk angka besar
const revenue = formatCurrencyCompact(1000000, 'USD');
console.log(revenue); // "$1M"
```

### Frontend - Currency Display Component

```tsx
import { CurrencyDisplay } from '@/modules/custom-demo';

function ProductPrice() {
  return (
    <div>
      <h3>Price:</h3>
      <CurrencyDisplay amount={1234567} currency="IDR" />
    </div>
  );
}
```

### Backend - Currency Converter

```typescript
import { CurrencyConverter } from './modules/custom-demo/currency-converter.util';

// Convert amount from one currency to another
const amountInIDR = CurrencyConverter.convert(100, 'USD', 'IDR');
console.log(amountInIDR); // 1575000

// Get exchange rate
const rate = CurrencyConverter.getRate('USD', 'EUR');
console.log(rate); // 0.92
```

## 🧪 Testing

### Menjalankan Test / Running Tests

```bash
# Test frontend currency formatter
npx jest packages/twenty-front/src/utils/custom/__tests__/formatCurrency.test.ts --config=packages/twenty-front/jest.config.mjs

# Test backend currency converter
npx jest packages/twenty-server/src/modules/custom-demo/__tests__/currency-converter.util.spec.ts --config=packages/twenty-server/jest.config.mjs
```

### Test Coverage

**Frontend (formatCurrency.ts)**
- ✅ Format USD, EUR, GBP, IDR currencies
- ✅ Default to USD
- ✅ Handle zero and negative amounts
- ✅ Compact formatting for large numbers

**Backend (currency-converter.util.ts)**
- ✅ Same currency conversion (returns same amount)
- ✅ Direct currency conversion
- ✅ Reverse currency conversion
- ✅ Error handling for unsupported pairs
- ✅ Exchange rate retrieval

## 📁 File Structure

```
packages/
├── twenty-front/
│   └── src/
│       ├── utils/
│       │   └── custom/
│       │       ├── formatCurrency.ts
│       │       └── __tests__/
│       │           └── formatCurrency.test.ts
│       └── modules/
│           └── custom-demo/
│               ├── components/
│               │   └── CurrencyDisplay.tsx
│               └── index.ts
│
└── twenty-server/
    └── src/
        └── modules/
            └── custom-demo/
                ├── currency-converter.util.ts
                └── __tests__/
                    └── currency-converter.util.spec.ts
```

## 🚀 Cara Membuat Kustomisasi Sendiri / How to Create Your Own Customizations

### 1. Frontend Utility Function

1. Buat file di `packages/twenty-front/src/utils/custom/[nama-fungsi].ts`
2. Export fungsi dengan TypeScript types
3. Buat test file di `__tests__/[nama-fungsi].test.ts`
4. Run test untuk verify

### 2. Frontend Component

1. Buat folder di `packages/twenty-front/src/modules/[nama-module]/`
2. Buat component di `components/[NamaComponent].tsx`
3. Export dari `index.ts`
4. Import dan gunakan di aplikasi

### 3. Backend Utility/Service

1. Buat folder di `packages/twenty-server/src/modules/[nama-module]/`
2. Buat service/util file dengan extension `.ts`
3. Buat test file di `__tests__/` dengan extension `.spec.ts`
4. Run test untuk verify

## 💡 Best Practices

1. **Always write tests** - Setiap kustomisasi harus punya test
2. **Follow naming conventions** - Lihat CUSTOMIZATION_GUIDE.md
3. **Use TypeScript** - Define semua types dengan jelas
4. **Keep it simple** - Mulai dengan kustomisasi sederhana
5. **Document your code** - Tulis komentar untuk logika kompleks

## 🔗 Referensi

- [CUSTOMIZATION_GUIDE.md](./CUSTOMIZATION_GUIDE.md) - Panduan lengkap kustomisasi
- [SETUP.md](./SETUP.md) - Setup repository
- [Twenty Documentation](https://docs.twenty.com) - Dokumentasi official

## ✅ Checklist Kustomisasi

Gunakan checklist ini untuk memastikan kustomisasi Anda lengkap:

- [ ] Kode ditulis dengan TypeScript
- [ ] Semua types didefinisikan dengan jelas
- [ ] Test dibuat dan passing
- [ ] Kode mengikuti naming conventions
- [ ] File diletakkan di struktur folder yang benar
- [ ] Kode didokumentasikan dengan komentar
- [ ] Test coverage mencakup edge cases
- [ ] Linting passed

## 🆘 Troubleshooting

### Test tidak bisa dijalankan
```bash
# Install dependencies dulu
yarn install

# Clear jest cache
yarn jest --clearCache
```

### Import error
```bash
# Pastikan path alias (@/) sudah terkonfigurasi di tsconfig.json
# Check tsconfig.base.json untuk path mappings
```

---

**Selamat mengkustomisasi! / Happy customizing! 🎨**
