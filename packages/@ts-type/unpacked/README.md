# @ts-type/unpacked

類型解包裝工具，從複雜類型中提取內部類型

Type unpacking utilities to extract inner types from complex types

## 功能特點 / Features

- 從 Promise、Map、Set 等包裝類型中提取內部類型
- Extract inner types from Promise, Map, Set and other wrapper types
- 支援函式回傳類型、Iterator、ArrayLike 等
- Support function return types, Iterator, ArrayLike, etc.
- 完整的 TypeScript 類型推論
- Complete TypeScript type inference

## 安裝 / Install

```bash
yarn add @ts-type/unpacked
yarn-tool add @ts-type/unpacked
yt add @ts-type/unpacked
```

## 使用範例 / Usage Example

```typescript
import type { ITSUnpacked, ITSUnpackedPromiseLike, ITSUnpackedArrayLike } from '@ts-type/unpacked';

// 解包裝 Promise 類型
type PromiseValue = ITSUnpacked<Promise<string>>;
// type: string

// 解包裝陣列類型
type ArrayElement = ITSUnpackedArrayLike<string[]>;
// type: string

// 解包裝 Iterator
type IteratorValue = ITSUnpacked<Iterator<number>>;
// type: number
```

