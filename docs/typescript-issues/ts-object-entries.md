# `ts-type-object-entries`：為 Object.entries 提供更好的類型推論

> **套件：** [`ts-type-object-entries`](packages/ts-type-object-entries)  
> **問題類型：** 類型推論優化

本文件說明 `ts-type-object-entries` 套件解決的問題及其概念。

---

## 1. 解決的核心問題：Object.entries 的類型寬化

標準的 JavaScript `Object.entries()` 方法在 TypeScript 中的回傳類型是 `[string, any][]`，這導致了類型資訊的丢失：

### 問題範例

```typescript
const obj = { a: 1, b: 2 };

// ❌ 標準 Object.entries 的回傳類型
const entries = Object.entries(obj);
// entries 的類型是 [string, number)[]
// 我們失去了具體的鍵名："a" 和 "b"
```

### 理想 vs 實際

```typescript
const obj = { a: 1, b: 2 } as const;

// ❌ 標準 Object.entries - 類型丢失
Object.entries(obj);
// 回傳: [string, number)[]
// 鍵名從 "a" | "b" 變成了 string

// ✅ 期望的類型
// 回傳: readonly ["a", 1][] | readonly ["b", 2][]
// 或者至少保留鍵名的 union: ("a" | "b", number)[]
```

---

## 2. 概念：精確的鍵值對類型

`ts-type-object-entries` 套件透過自定義類型定義，提供更精確的鍵值對回傳類型。

### 核心概念

1. **保留鍵名資訊**：不將鍵名寬化為 `string`
2. **保留值類型**：保持值的具體類型，而非 `any`
3. **支援 readonly**：正確處理 `as const` 修飾詞

### 類型簽名

```typescript
function tsObjectEntries<T, K extends string = string>(
    obj: { [s in K]: T } | ArrayLike<T>
): [K, T][]
```

這個簽名允許：
- 根據輸入物件推斷具體的鍵類型 `K`
- 根據輸入物件推斷值的類型 `T`
- 預設為 `string` 確保向後相容

---

## 3. 應用方式

### A. 基本使用

```typescript
import { tsObjectEntries } from 'ts-type-object-entries';

const obj = { a: 1, b: 2 } as const;
const entries = tsObjectEntries(obj);
// entries 的類型為：readonly ["a", 1][] | readonly ["b", 2][]
```

### B. 介面類型

```typescript
import { tsObjectEntries } from 'ts-type-object-entries';

interface IUser {
    name: string;
    age: number;
}

const user: IUser = { name: 'John', age: 30 };
const userEntries = tsObjectEntries(user);
// userEntries 的類型為：[key: "name" | "age", value: string | number][]
```

### C. 在迴圈中使用

```typescript
import { tsObjectEntries } from 'ts-type-object-entries';

const config = {
    apiUrl: "https://api.example.com",
    timeout: 5000,
    retries: 3,
} as const;

for (const [key, value] of tsObjectEntries(config)) {
    console.log(`${key}: ${value}`);
    // key 的類型精確為 "apiUrl" | "timeout" | "retries"
}
```

---

## 4. 比較：標準 vs 自定義

| 特性 | 標準 `Object.entries` | `tsObjectEntries` |
|------|----------------------|-------------------|
| **鍵名類型** | `string` | `"key1" \| "key2" \| ...` |
| **值類型** | `any` | 具體類型 |
| **readonly 支援** | 部分 | 完整 |
| **as const 支援** | 有限 | 完整 |
| **IDE 提示** | 寬化後的類型 | 精確的類型 |

---

## 5. 使用場景

### A. 類型安全的物件遍歷

```typescript
function processConfig(config: { debug: boolean; port: number }) {
    for (const [key, value] of tsObjectEntries(config)) {
        // 每個 key 和 value 都有正確的類型
        if (typeof value === "boolean") {
            console.log(`Boolean config: ${key} = ${value}`);
        }
    }
}
```

### B. 產生類型安全的映射

```typescript
import { tsObjectEntries } from 'ts-type-object-entries';

const colors = {
    primary: "#007bff",
    secondary: "#6c757d",
} as const;

const colorMap = new Map(tsObjectEntries(colors));
// Map 的類型為 Map<"primary" | "secondary", string>
```

### C. 驗證物件結構

```typescript
import { tsObjectEntries } from 'ts-type-object-entries';

function validateObject<T extends Record<string, unknown>>(
    obj: T,
    requiredKeys: (keyof T)[]
): boolean {
    const entries = tsObjectEntries(obj);
    return entries.every(([key]) => requiredKeys.includes(key));
}
```

---

## 6. 總結

`ts-type-object-entries` 解決了 TypeScript 中 `Object.entries` 回傳類型過於寬鬆的問題：

- ✅ **保留鍵名**：不將鍵名寬化為 `string`
- ✅ **保留值類型**：使用具體類型而非 `any`
- ✅ **完整 readonly 支援**：正確處理 `as const`
- ✅ **IDE 支援**：提供精確的自動完成和類型提示

這個套件體現了一個重要的概念：**在類型系統中，保留越多精確資訊，類型安全性就越高**。