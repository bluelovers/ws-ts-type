# @ts-type/is-array

增強的陣列類型斷言與驗證工具

Enhanced array type predicates and validation utilities

## 功能特點 / Features

- 擴展 Array.isArray 類型斷言
- Extend Array.isArray type predicate
- 支援唯讀陣列與可變陣列類型轉換
- Support readonly array and writable array type conversion
- 運行時陣列驗證與斷言
- Runtime array validation and assertion

## 安裝 / Install

```bash
yarn add @ts-type/is-array
yarn-tool add @ts-type/is-array
yt add @ts-type/is-array
```

## 使用範例 / Usage Example

```typescript
import { isArray, isArrayPredicates, typePredicatesAsWriteableArray, typePredicatesAsReadonlyArray } from '@ts-type/is-array';

// 使用類型斷言
function processValue(value: string | string[]) {
    if (isArray(value)) {
        // TypeScript 知道 value 是 string[]
        console.log(value.join(', '));
    }
}

// 使用斷言函式（會拋出錯誤）
function assertArray(arr: unknown) {
    isArrayPredicates(arr);
    // 如果通過，arr 被斷言為陣列
}
```

