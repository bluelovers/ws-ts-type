# ts-type-predicates

使用斷言（assert）讓類型斷言（type predicates）運作的實用工具函式

Use asserts to make type predicates work with better runtime validation

## 功能特點 / Features

- 結合 TypeScript 斷言函式與類型斷言功能
- Combine TypeScript assertion functions with type predicate functionality
- 支援運行時驗證與編譯時類型縮小
- Support runtime validation and compile-time type narrowing
- 可自訂錯誤訊息
- Customizable error messages

## 安裝 / Install

```bash
yarn add ts-type-predicates
yarn-tool add ts-type-predicates
yt add ts-type-predicates
```

## 使用範例 / Usage Example

```typescript
import { typePredicates, typeNarrowed } from 'ts-type-predicates';

// 使用斷言函式 / Using assertion function
function processValue(value: string | number) {
    typePredicates<string>(value, typeof value === 'string');
    // 現在 TypeScript 知道 value 是 string
    console.log(value.toUpperCase());
}

// 使用類型收窄 / Using type narrowing
function checkValue(value: unknown) {
    if (typeNarrowed<string>(value, typeof value === 'string')) {
        console.log(value.length);
    }
}
```

