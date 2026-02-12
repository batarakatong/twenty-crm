# Twenty CRM - Panduan Kustomisasi dan Testing
# Twenty CRM - Customization and Testing Guide

Dokumen ini menjelaskan cara melakukan kustomisasi dan testing pada Twenty CRM.
This document explains how to customize and test the Twenty CRM.

## 📋 Daftar Isi / Table of Contents

1. [Persiapan Lingkungan / Environment Setup](#persiapan-lingkungan)
2. [Contoh Kustomisasi / Customization Examples](#contoh-kustomisasi)
3. [Menjalankan Test / Running Tests](#menjalankan-test)
4. [Membuat Test Baru / Creating New Tests](#membuat-test-baru)

## 🚀 Persiapan Lingkungan / Environment Setup

### Prerequisites
- Node.js versi 24.5.0 (sesuai .nvmrc)
- Yarn 4.0.2 atau lebih tinggi

### Instalasi Dependencies

```bash
# Install semua dependencies
yarn install

# Verifikasi instalasi
yarn --version
node --version
```

## 🎨 Contoh Kustomisasi / Customization Examples

### 1. Menambah Utility Function Baru

Contoh: Kami telah menambahkan fungsi `formatCurrency` untuk formatting mata uang.

**File:** `packages/twenty-front/src/utils/custom/formatCurrency.ts`

```typescript
import { formatCurrency } from '@/utils/custom/formatCurrency';

// Format mata uang USD
const usd = formatCurrency(1234.56, 'USD'); // "$1,234.56"

// Format mata uang IDR (Rupiah)
const idr = formatCurrency(1000000, 'IDR'); // "IDR 1.000.000,00"

// Format compact untuk jumlah besar
const compact = formatCurrencyCompact(1000000, 'USD'); // "$1M"
```

### 2. Kustomisasi Frontend Component

Untuk mengkustomisasi komponen React:

1. **Buat komponen baru** di `packages/twenty-front/src/modules/[module-name]/components/`
2. **Gunakan Twenty UI components** dari `@/ui/`
3. **Ikuti naming convention**: PascalCase untuk komponen, camelCase untuk functions

### 3. Kustomisasi Backend Module

Untuk menambah modul backend:

1. **Buat folder baru** di `packages/twenty-server/src/modules/[module-name]/`
2. **Buat service**: `[module-name].service.ts`
3. **Buat controller** (jika perlu): `[module-name].controller.ts`
4. **Register di module**: Update `modules.module.ts`

### 4. Menambah Custom Field ke Entity

```typescript
// Di packages/twenty-server/src/modules/[entity]/[entity].entity.ts
@Column({ type: 'varchar', nullable: true })
customField: string;
```

Jangan lupa membuat migration setelah mengubah entity!

## 🧪 Menjalankan Test / Running Tests

### Test Frontend

```bash
# Test semua frontend
npx nx test twenty-front

# Test file tertentu
npx jest packages/twenty-front/src/utils/custom/__tests__/formatCurrency.test.ts --config=packages/twenty-front/jest.config.mjs

# Test dengan watch mode
npx nx test twenty-front --watch
```

### Test Backend

```bash
# Test semua backend
npx nx test twenty-server

# Test file tertentu
npx jest packages/twenty-server/src/[path]/[file].spec.ts --config=packages/twenty-server/jest.config.mjs

# Test dengan coverage
npx nx test twenty-server --coverage
```

### Test Integration

```bash
# Test integration dengan database reset
npx nx run twenty-server:test:integration:with-db-reset
```

## ✍️ Membuat Test Baru / Creating New Tests

### Struktur Test File

```typescript
import { functionToTest } from '../functionToTest';

describe('functionToTest', () => {
  it('should do something specific', () => {
    // Arrange
    const input = 'test';
    
    // Act
    const result = functionToTest(input);
    
    // Assert
    expect(result).toBe('expected');
  });

  it('should handle edge cases', () => {
    expect(functionToTest(null)).toBeUndefined();
  });
});
```

### Best Practices untuk Testing

1. **Test behavior, not implementation** - Test apa yang dilakukan fungsi, bukan bagaimana cara kerjanya
2. **Use descriptive test names** - Nama test harus jelas menjelaskan apa yang ditest
3. **Follow AAA pattern** - Arrange, Act, Assert
4. **Test edge cases** - Test nilai null, undefined, empty, dan boundary values
5. **Keep tests isolated** - Setiap test harus independen

### Contoh Test untuk Custom Utility

Lihat file: `packages/twenty-front/src/utils/custom/__tests__/formatCurrency.test.ts`

Test ini mencakup:
- ✅ Test formatting untuk berbagai mata uang (USD, EUR, GBP, IDR)
- ✅ Test default values
- ✅ Test edge cases (zero, negative)
- ✅ Test compact formatting

## 🔍 Linting dan Type Checking

```bash
# Lint frontend
npx nx lint:diff-with-main twenty-front

# Lint backend
npx nx lint:diff-with-main twenty-server

# Type check
npx nx typecheck twenty-front
npx nx typecheck twenty-server

# Auto-fix lint issues
npx nx lint:diff-with-main twenty-front --configuration=fix
```

## 📊 Running Development Server

```bash
# Start full development environment (frontend + backend + worker)
yarn start

# Start hanya frontend
npx nx start twenty-front

# Start hanya backend
npx nx start twenty-server
```

## 🎯 Tips Kustomisasi

1. **Ikuti struktur folder yang ada** - Ini memudahkan maintenance
2. **Gunakan TypeScript** - Selalu define types untuk keamanan type
3. **Tulis test** - Setiap kustomisasi harus punya test
4. **Document your code** - Tulis komentar untuk logika yang kompleks
5. **Follow naming conventions**:
   - Files: kebab-case (e.g., `format-currency.ts`)
   - Variables/Functions: camelCase (e.g., `formatCurrency`)
   - Types/Classes: PascalCase (e.g., `CurrencyCode`)
   - Constants: SCREAMING_SNAKE_CASE (e.g., `MAX_AMOUNT`)

## 📚 Referensi Tambahan

- [Twenty Documentation](https://docs.twenty.com)
- [Twenty GitHub](https://github.com/twentyhq/twenty)
- [NestJS Documentation](https://docs.nestjs.com) - Backend framework
- [React Documentation](https://react.dev) - Frontend framework
- [Jest Documentation](https://jestjs.io) - Testing framework

## 🆘 Troubleshooting

### Dependency Issues
```bash
# Clear cache dan reinstall
rm -rf node_modules yarn.lock
yarn install
```

### Test Failures
```bash
# Clear test cache
yarn jest --clearCache

# Run tests with verbose output
npx nx test twenty-front --verbose
```

### Build Issues
```bash
# Clean build artifacts
rm -rf dist packages/*/dist

# Rebuild
npx nx build twenty-shared
npx nx build twenty-front
npx nx build twenty-server
```

---

**Happy Coding! 🚀**

Untuk pertanyaan atau issue, silakan buat issue di repository ini.
