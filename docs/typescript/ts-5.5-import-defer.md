# `import defer` (Deferred Type Import)

> **版本：** TypeScript 5.5  
> **官方文件：** [Deferred Type Import](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-5-5.html#deferred-type-import)

`import defer` 是 TypeScript 5.5 引入的新語法，允許推遲類型的載入，直到實際需要時才進行類型檢查。

---

## 1. 解決的核心問題：大型專案的類型效能瓶頸

在 `import defer` 出現之前，所有類型在編譯時都會被立即載入和檢查：

```typescript
// ❌ 問題：所有 import 的類型都會立即載入
import { SomeLargeType, AnotherType } from "./big-module";
import { YetAnotherType } from "./another-big-module";
import { TypeX, TypeY, TypeZ } from "./more-types";

function process(data: SomeLargeType) {
    // 只使用 SomeLargeType，但其他類型也會被載入
}
```

這導致：
- 大型專案的類型檢查時間過長
- 記憶體佔用過高
- IDE 回應變慢

`import defer` 允許延遲載入類型：

```typescript
// ✅ 只在需要時載入類型
import defer { SomeLargeType } from "./big-module";

function process(data: SomeLargeType) {
    // SomeLargeType 在這裡才會被完整檢查
}
```

---

## 2. 應用方式

### A. 基本語法

```typescript
// 使用 defer 關鍵字
import defer { MyType } from "./module";

// 可以混合一般 import 和 defer import
import { Value } from "./module";
import defer { Type } from "./module";
```

### B. 延遲類型的使用時機

```typescript
// 延遲的類型只在使用時才會被完整檢查
import defer { ComplexType } from "./heavy-module";

function example(value: ComplexType) {
    // ComplexType 在這裡才會被完整驗證
}

// 如果沒有使用，不會觸發完整類型檢查
function unused() {
    // 這裡不使用 ComplexType
}
```

### C. 在類型註記中使用

```typescript
import defer { TypeA, TypeB } from "./types";

function process(a: TypeA, b: TypeB): TypeB {
    return b;
}

type MyType = {
    field: TypeA;
};
```

### D. 在泛型中使用

```typescript
import defer { DeepNestedType } from "./deep-module";

function genericFn<T extends DeepNestedType>(value: T): T {
    return value;
}
```

---

## 3. 實際應用場景

### A. 大型模組的部分載入

```typescript
// types.ts - 包含很多類型的大型模組
export interface HugeType1 { /* ... */ }
export interface HugeType2 { /* ... */ }
export interface HugeType3 { /* ... */ }
// ... 更多類型

// 使用時
import defer { HugeType1 } from "./types";

// 只在需要 HugeType1 時載入
function process(data: HugeType1) { /* ... */ }
```

### B. 條件類型

```typescript
import defer { ConditionalType } from "./complex-types";

type Result<T> = T extends ConditionalType ? string : number;
```

### C. 工具類型包裝

```typescript
import defer { HeavyType } from "./heavy";

type Wrapper<T> = {
    value: T;
    metadata: HeavyType;
};

function createWrapper<T extends HeavyType>(val: T): Wrapper<T> {
    return { value: val, metadata: val.metadata };
}
```

### D. 函式返回類型

```typescript
import defer { ComplexResult } from "./api";

function fetchData(): ComplexResult {
    return { /* ... */ };
}

// ComplexResult 只在返回時被檢查
```

---

## 4. 與其他延遲技術的比較

| 特性 | 直接 import | `import defer` | 動態 import |
|------|-------------|----------------|-------------|
| **載入時機** | 編譯時立即 | 使用時才載入 | 執行時期 |
| **類型檢查** | 完整檢查 | 延遲檢查 | 無 |
| **類型可用性** | 靜態 | 靜態 | 動態 |
| **執行時期** | 有程式碼 | 有程式碼 | 有程式碼 |
| **IDE 支援** | 完整 | 有限 | 有限 |

---

## 5. 使用限制

### 需要 `.d.ts` 檔案

`import defer` 需要模組有明確的類型定義：

```typescript
// ✅ 有 .d.ts 檔案
import defer { Type } from "./module-with-dts";

// ❌ 沒有 .d.ts 檔案 - 無法使用 defer
import defer { Type } from "./module-without-dts";
```

### 不能用於執行時期的值

```typescript
import defer { Type } from "./module";

// ❌ 錯誤：不能在值的位置使用
const value = Type;

// ✅ 正確：在類型位置使用
const value: Type = /* ... */;
```

### 不能與常數一起使用

```typescript
import defer { Type, value } from "./module";

// ❌ 錯誤：不能 defer 值
import defer value from "./module";

// ✅ 正確：分別處理
import { value } from "./module";
import defer { Type } from "./module";
```

---

## 6. 總結

`import defer` 解決了以下問題：

- ✅ **提升大型專案的類型檢查效能**
- ✅ **減少記憶體佔用**
- ✅ **改善 IDE 回應速度**
- ✅ **維持靜態類型檢查**

這個功能特別適合：
- 大型函式庫或框架
- 擁有大量類型的專案
- 需要分段類型檢查的大型程式碼庫

這是 TypeScript 對 ECMAScript TC39 「Deferred Import Evaluation」提案的支援。