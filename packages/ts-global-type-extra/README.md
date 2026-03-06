# ts-global-type-extra

全域擴展 TypeScript 內建類型，提供更好的 Object.entries 類型推論

Global extension of TypeScript built-in types with better Object.entries type inference

## 功能特點 / Features

- 為 Object.entries 提供精確的鍵值對類型
- Provide precise key-value pair types for Object.entries
- 全域類型擴展，無需匯入即可使用
- Global type extension, no import required
- 支援物件字面值與 ArrayLike 類型
- Support object literals and ArrayLike types

## 安裝 / Install

```bash
yarn add ts-global-type-extra
yarn-tool add ts-global-type-extra
yt add ts-global-type-extra
```

## 使用範例 / Usage Example

```typescript
// 無需匯入，全域可用
const obj = { name: 'John', age: 30 } as const;

const entries = Object.entries(obj);
// type: ["name", "John"][] | ["age", 30][]

// 對於非 const 宣告
const obj2 = { a: 1, b: 2 };
const entries2 = Object.entries(obj2);
// type: [string, number | string][]
```

