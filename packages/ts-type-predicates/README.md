# ts-type-predicates

使用斷言（assert）讓類型斷言（type predicates）運作的實用工具函式

Use asserts to make type predicates work with better runtime validation

---

## 功能特點 / Features

- 結合 TypeScript 斷言函式與類型斷言功能
- Combine TypeScript assertion functions with type predicate functionality
- 支援運行時驗證與編譯時類型縮小
- Support runtime validation and compile-time type narrowing
- 可自訂錯誤訊息
- Customizable error messages
- 可選擇只做類型收窄不拋出錯誤
- Optional type narrowing without throwing errors
- 可用於強化替代 Narrowing
- Can be used to enhance or replace Narrowing

---

## 安裝 / Install

```bash
yarn add ts-type-predicates
yarn-tool add ts-type-predicates
yt add ts-type-predicates
```

---

## 使用範例 / Usage Examples

### 基本用法

```typescript
import { typePredicates, typeNarrowed } from 'ts-type-predicates';

// 使用斷言函式 - 失敗時拋出錯誤
function processValue(value: string | number) {
    typePredicates<string>(value, typeof value === 'string');
    // 現在 TypeScript 知道 value 是 string
    console.log(value.toUpperCase());
}

// 使用類型收窄 - 回傳布林值
function checkValue(value: unknown) {
    if (typeNarrowed<string>(value, typeof value === 'string')) {
        console.log(value.length);
    }
}
```

### 參數省略

參數除了第一個以外都能省略：

```typescript
import { typePredicates } from 'ts-type-predicates';

// 只有第一個參數是必需的
typePredicates<string>(value);
```

### 強化替代 Narrowing

當標準的 Narrowing 無法正確收窄類型時，可以使用 `typePredicates` 強制收窄：

```typescript
import { typePredicates } from 'ts-type-predicates';

// Narrowing 無法處理的情況
type Mixed = { type: 'a'; value: string } | { type: 'b'; value: number };

function process(data: Mixed) {
    // ❌ Narrowing 無法正確收窄 value 的類型
    if (data.type === 'a') {
        // data.value 仍然是 string | number
        console.log(data.value.toUpperCase()); // 錯誤
    }

    // ✅ 使用 typePredicates 強制收窄 - 更精簡的寫法 (需要配合使用 @ts-ignore 註釋)
    if (typePredicates<string>(data.value, data.type === 'a')) {
        // data.value 現在正確收窄為 string
        console.log(data.value.toUpperCase()); // 正確
    }
}
```

### 忽略表達式結果

當只需要類型收窄，不需要運行時驗證時：

```typescript
import { typePredicates } from 'ts-type-predicates';

// 只做類型收窄，不拋出錯誤
function narrowValue(value: unknown) {
    typePredicates<string>(value, typeof value === 'string', undefined, true);
    // value 現在被收窄為 string（但運行時不驗證）
    console.log(value.toUpperCase());
}
```

---

## 與標準 Narrowing 的比較

| 特性 | Narrowing（內建） | typePredicates |
|------|-------------------|----------------|
| 語法 | `if (typeof x === "string")` | `typePredicates<string>(x)` |
| 彈性 | 有限 | 可自訂任意邏輯 |
| 錯誤處理 | 無 | 可拋出自訂錯誤 |
| 強制收窄 | 無法 | 可以 |
| 複雜類型 | 需多重檢查 | 可一次完成 |

---

## 相關資源

- [TypeScript 官方文件 - Type Predicates](https://www.typescriptlang.org/docs/handbook/advanced-types.html#using-type-predicates)
- [TypeScript 官方文件 - Assertion Functions](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-7.html#assertion-functions)
