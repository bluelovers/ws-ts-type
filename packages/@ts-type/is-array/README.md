# @ts-type/is-array

增強的陣列類型斷言與驗證工具

Enhanced array type predicates and validation utilities

## 核心問題 / Core Problem

⚠️ **原版 TypeScript 的 `Array.isArray` 無法正確處理唯讀陣列**

Original TypeScript's `Array.isArray` cannot correctly handle readonly arrays

```typescript
let arr: readonly number[] = [1, 2, 3];

if (Array.isArray(arr))
{
	// @ts-expect-error <== 失敗，此處的 arr 應該是 readonly 但是卻變成普通陣列
	// arr.push(4); // 錯誤：TypeScript 認為 arr 是普通陣列，可以修改
}

// @ts-expect-error <== 成功，此處會因為 arr 是 readonly 造成錯誤
arr.push(5); // 錯誤：唯讀陣列不能修改
```

使用此套件可以**正確保留唯讀陣列的類型**！

Using this package correctly preserves readonly array types!

## 功能特點 / Features

- 擴展 Array.isArray 類型斷言，保留原始陣列類型（包括唯讀陣列）
- Extend Array.isArray type predicate while preserving original array type (including readonly arrays)
- 支援唯讀陣列與可變陣列類型轉換
- Support readonly array and writable array type conversion
- 運行時陣列驗證與斷言（失敗時拋出錯誤）
- Runtime array validation and assertion (throws error on failure)
- 支援 TypeScript 3.7+ 的 assert 語法
- Support TypeScript 3.7+ assert syntax

## 安裝 / Install

```bash
yarn add @ts-type/is-array
yarn-tool add @ts-type/is-array
yt add @ts-type/is-array
```

## 使用範例 / Usage Example

### 基本類型斷言 / Basic Type Predicate

```typescript
import { isArray } from '@ts-type/is-array';

// 使用類型斷言進行類型縮小
// Use type predicate for type narrowing
function processValue(value: string | string[]) {
    if (isArray(value)) {
        // TypeScript 知道 value 是 string[]
        // TypeScript knows value is string[]
        console.log(value.join(', '));
    } else {
        // value 是 string
        // value is string
        console.log(value.toUpperCase());
    }
}
```

### 運行時驗證 / Runtime Validation

```typescript
import { isArrayPredicates } from '@ts-type/is-array';

// 使用斷言函式（失敗時拋出 AssertionError）
// Use assertion function (throws AssertionError on failure)
function assertArray(arr: unknown): string[] {
    isArrayPredicates(arr);
    // 如果通過，arr 被斷言為陣列
    // If passed, arr is asserted as array
    return arr;
}

// 使用自訂錯誤訊息
// Using custom error message
try {
    assertArray("not an array");
} catch (e) {
    console.error(e.message);
}
```

### 唯讀與可變陣列轉換 / Readonly and Writable Array Conversion

```typescript
import { typePredicatesAsWriteableArray, typePredicatesAsReadonlyArray } from '@ts-type/is-array';

// 將唯讀陣列轉換為可變陣列
// Convert readonly array to writable array
// 注意：這些函數僅用於類型斷言，運行時不執行任何操作
// Note: These functions are only for type assertion, no operation at runtime
const readonlyArray: readonly string[] = ['a', 'b', 'c'];
typePredicatesAsWriteableArray(readonlyArray);
// readonlyArray 現在類型為 string[]
// readonlyArray now has type string[]
readonlyArray.push('d'); // 合法 / valid

// 將可變陣列轉換為唯讀陣列
// Convert writable array to readonly array
const writableArray: string[] = ['x', 'y', 'z'];
typePredicatesAsReadonlyArray(writableArray);
// writableArray 現在類型為 readonly string[]
// writableArray now has type readonly string[]
```

> **注意 / Note**: `typePredicatesAsWriteableArray` 和 `typePredicatesAsReadonlyArray` 是純類型級別的斷言函數，與 `typePredicates` 概念相同。它們的函數主體為空，因為類型斷言僅在編譯時起作用。
> `typePredicatesAsWriteableArray` and `typePredicatesAsReadonlyArray` are pure type-level assertion functions, same concept as `typePredicates`. Their function bodies are empty because type assertions only work at compile time.

### 擴展 Array.isArray / Extend Array.isArray

```typescript
// 使用 type import 避免運行時引用
// Use type import to avoid runtime import
import type * as _ from '@ts-type/is-array';

// 全域擴展 Array.isArray
// Global extension for Array.isArray
const value: string | string[] = ['hello'];
if (Array.isArray(value)) {
    // value 被正確縮小為 string[]
    // value correctly narrowed to string[]
    console.log(value.join(','));
}
```

## 相關連結 / Related Links

- [TypeScript 官方文檔 - Assertion Functions](https://www.typescriptlang.org/docs/handbook/2/functions.html#assertion-functions)
- [GitHub Issue #17002](https://github.com/microsoft/TypeScript/issues/17002#issuecomment-493400187)
- [GitHub Issue #44976](https://github.com/microsoft/TypeScript/issues/44976)
- [TypeScript 唯讀陣列問題 - 詳細說明](../../docs/typescript-issues/ts-array-isarray-readonly.md)

