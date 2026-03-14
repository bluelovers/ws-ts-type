# TypeScript Array.isArray 唯讀陣列問題

# TypeScript Array.isArray Readonly Array Issue

## 問題描述 / Problem Description

原版 TypeScript 的 `Array.isArray` 無法正確處理唯讀陣列（`readonly array`）。

Original TypeScript's `Array.isArray` cannot correctly handle readonly arrays.

當使用 `Array.isArray` 檢查唯讀陣列時，TypeScript 會將類型縮小為普通陣列，**錯誤地移除了 `readonly` 修飾符**。

When using `Array.isArray` to check a readonly array, TypeScript narrows the type to a regular array, **incorrectly removing the `readonly` modifier**.

## 問題範例 / Problem Example

```typescript
let arr: readonly number[] = [1, 2, 3];

if (Array.isArray(arr))
{
	// @ts-expect-error <== 失敗，此處的 arr 應該是 readonly 但是卻變成普通陣列
	// arr.push(4); // 錯誤：TypeScript 認為 arr 是普通陣列，可以修改（但這是錯的！）
}

// @ts-expect-error <== 成功，此處會因為 arr 是 readonly 造成錯誤
arr.push(5); // 錯誤：唯讀陣列不能修改
```

### 問題分析 / Problem Analysis

| 位置 | 預期類型 | 實際類型 | 結果 |
|------|----------|----------|------|
| `if (Array.isArray(arr))` 內 | `readonly number[]` | `number[]` | ❌ 錯誤 |
| `if` 外部 | `readonly number[]` | `readonly number[]` | ✅ 正確 |

在 `if` 區塊內，TypeScript 正確地識別了它是陣列，但**錯誤地移除了 `readonly`**。

Inside the `if` block, TypeScript correctly identifies it as an array, but **incorrectly removes `readonly`**.

## 解決方案 / Solution

使用 `@ts-type/is-array` 套件來正確處理唯讀陣列：

Use `@ts-type/is-array` package to correctly handle readonly arrays:

```typescript
import { isArray } from '@ts-type/is-array';

let arr: readonly number[] = [1, 2, 3];

if (isArray(arr))
{
	// ✅ 正確：arr 類型保持為 readonly number[]
	// arr.push(4); // 正確：編譯器會阻止修改
}

// @ts-expect-error <== 成功
arr.push(5); // 錯誤：唯讀陣列不能修改
```

或者使用全域擴展：

Or use global extension:

```typescript
// 使用 type import 避免運行時引用
// Use type import to avoid runtime import
import type * as _ from '@ts-type/is-array';

let arr: readonly number[] = [1, 2, 3];

if (Array.isArray(arr))
{
	// ✅ 正確：arr 類型保持為 readonly number[]
	// arr.push(4); // 正確：編譯器會阻止修改
}
```

## 相關套件 / Related Package

- [@ts-type/is-array](../packages/@ts-type/is-array/README.md) - 解決此問題的套件

## 官方 Issue / Official Issue

- [TypeScript GitHub Issue #17002](https://github.com/microsoft/TypeScript/issues/17002)
- [Discussion: Array.isArray should preserve readonly modifier](https://github.com/microsoft/TypeScript/issues/17002#issuecomment-493400187)

## 參考 / References

- [TypeScript Handbook - Narrowing](https://www.typescriptlang.org/docs/handbook/2/narrowing.html)
- [TypeScript Handbook - readonly Arrays](https://www.typescriptlang.org/docs/handbook/2/arrays.html#readonly-arrays)
