# @ts-type/object-freeze

Object.freeze 的類型安全包裝，提供精確的唯讀類型

Type-safe wrapper for Object.freeze with precise readonly types

## 功能特點 / Features

- 凍結陣列並回傳唯讀類型
- Freeze array and return readonly type
- 凍結物件並回傳唯讀類型
- Freeze object and return readonly type
- 支援函式、陣列、元組等多種類型
- Support function, array, tuple and more types

## 安裝 / Install

```bash
yarn add @ts-type/object-freeze
yarn-tool add @ts-type/object-freeze
yt add @ts-type/object-freeze
```

## 使用範例 / Usage Example

```typescript
import { freezeArray, freezeObject } from '@ts-type/object-freeze';

// 凍結陣列
const arr = [1, 2, 3];
const frozenArr = freezeArray(arr);
// TypeScript 知道 frozenArr 是唯讀陣列

// 凍結物件
const obj = { name: 'John', age: 30 };
const frozenObj = freezeObject(obj);
// TypeScript 知道 frozenObj 是 Readonly<{name: string, age: number}>
```

