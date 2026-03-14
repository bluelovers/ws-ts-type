# ts-type-object-entries

為 Object.entries 提供更好的 TypeScript 類型推論

Better TypeScript types for Object.entries

---

## 問題：Object.entries 的類型寬化

標準的 JavaScript `Object.entries()` 在 TypeScript 中的回傳類型是 `[string, any][]`，導致類型資訊丢失：

```typescript
const obj = { a: 1, b: 2 };

// ❌ 標準 Object.entries - 類型丢失
Object.entries(obj);
// 回傳: [string, number][]
// 鍵名從 "a" | "b" 變成了 string
```

---

## 解決方案

`ts-type-object-entries` 提供更精確的鍵值對回傳類型：

```typescript
import { tsObjectEntries } from 'ts-type-object-entries';

const obj = { a: 1, b: 2 } as const;
const entries = tsObjectEntries(obj);
// ✅ 回傳: readonly ["a", 1][] | readonly ["b", 2][]
```

---

## 功能特點

- 支援物件類型的精確鍵值對回傳
- Support precise key-value pair return for object types
- 保留 readonly 陣列類型
- Preserve readonly array types
- 完整的 TypeScript 類型安全
- Complete TypeScript type safety

---

## 安裝

```bash
yarn add ts-type-object-entries
yarn-tool add ts-type-object-entries
yt add ts-type-object-entries
```

---

## 使用範例

### 基本使用

```typescript
import { tsObjectEntries } from 'ts-type-object-entries';

const obj = { a: 1, b: 2 } as const;
const entries = tsObjectEntries(obj);
// type: readonly ("a" | "b")[][]
// [['a', 1], ['b', 2]]
```

### 介面類型

```typescript
import { tsObjectEntries } from 'ts-type-object-entries';

interface IUser {
    name: string;
    age: number;
}

const user: IUser = { name: 'John', age: 30 };
const userEntries = tsObjectEntries(user);
// [key: string, value: string | number][]
```

### 在迴圈中使用

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

## 比較

| 特性 | 標準 `Object.entries` | `tsObjectEntries` |
|------|----------------------|-------------------|
| 鍵名類型 | `string` | `"key1" \| "key2" \| ...` |
| 值類型 | `any` | 具體類型 |
| readonly 支援 | 部分 | 完整 |
| as const 支援 | 有限 | 完整 |

---

## 核心概念

**在類型系統中，保留越多精確資訊，類型安全性就越高。**

這個套件體現了這個概念：
- 保留鍵名資訊：不將鍵名寬化為 `string`
- 保留值類型：使用具體類型而非 `any`
- 完整 readonly 支援：正確處理 `as const`