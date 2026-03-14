# `asserts` 斷言函式 (Assertion Functions)

> **版本：** TypeScript 3.7  
> **官方文件：** [Assertion Functions](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-7.html#assertion-functions)

`asserts` 是 TypeScript 3.7 引入的關鍵字，用於定義「斷言函式」（Assertion Functions）。這種函式可以明確告訴 TypeScript 執行某個檢查後，類型將被縮小到特定範圍。

---

## 1. 解決的核心問題：類型斷言的雙重角色

在 `asserts` 出現之前，類型斷言（Type Predicates）只能回傳 `boolean`：

```typescript
// ❌ 問題：只能回傳 boolean，無法在失敗時拋出錯誤
function isString(value: unknown): boolean {
    return typeof value === "string";
}

function process(value: unknown) {
    if (isString(value)) {
        // TypeScript 知道 value 是 string
        console.log(value.toUpperCase());
    }
    // 但如果檢查失敗，沒有明確的錯誤處理
}
```

`asserts` 允許函式明確聲明類型縮小，並可選擇拋出錯誤：

```typescript
// ✅ 使用 assert 明確聲明類型縮小
function assertString(value: unknown): asserts value is string {
    if (typeof value !== "string") {
        throw new Error("Value is not a string");
    }
}

function process(value: unknown) {
    assertString(value);
    // ✅ TypeScript 明確知道 value 是 string
    console.log(value.toUpperCase());
}
```

---

## 2. 應用方式

### A. 基本斷言函式

```typescript
function isNumber(value: unknown): asserts value is number {
    if (typeof value !== "number") {
        throw new Error("Not a number");
    }
}

function demo(value: unknown) {
    isNumber(value);
    // value 現在是 number 類型
    console.log(value * 2);
}
```

### B. 可選的斷言條件

```typescript
function assertDefined<T>(value: T | undefined | null): asserts value is T {
    if (value === undefined || value === null) {
        throw new Error("Value is undefined or null");
    }
}

function process<T>(value: T | undefined) {
    assertDefined(value);
    // value 不再包含 undefined
    console.log(value);
}
```

### C. 複雜的類型縮小

```typescript
type Fish = { swim: () => void };
type Bird = { fly: () => void };
type Animal = Fish | Bird;

function isFish(animal: Animal): asserts animal is Fish {
    if (!("swim" in animal)) {
        throw new Error("Not a fish");
    }
}

function move(animal: Animal) {
    isFish(animal);
    // animal 現在是 Fish 類型
    animal.swim();
}
```

---

## 3. 實際應用場景

### A. 運行時驗證 + 編譯時類型縮小

```typescript
interface User {
    id: number;
    name: string;
    email: string;
}

function assertUser(value: unknown): asserts value is User {
    if (typeof value !== "object" || value === null) {
        throw new Error("Not an object");
    }

    const obj = value as Record<string, unknown>;

    if (typeof obj.id !== "number" ||
        typeof obj.name !== "string" ||
        typeof obj.email !== "string") {
        throw new Error("Invalid User shape");
    }
}

function processData(data: unknown) {
    assertUser(data);
    // data 現在是 User 類型
    console.log(data.name);
}
```

### B. 條件斷言（使用第三方庫）

[`ts-type-predicates`](packages/ts-type-predicates/src/index.ts) 提供了更實用的斷言函式：

```typescript
import { typePredicates, typeNarrowed } from 'ts-type-predicates';

// 使用斷言函式 - 失敗時拋出錯誤
function processValue(value: string | number) {
    typePredicates<string>(value, typeof value === 'string');
    // 現在 TypeScript 知道 value 是 string
    console.log(value.toUpperCase());
}

// 使用類型收窄 - 失敗時回傳 false
function checkValue(value: unknown) {
    if (typeNarrowed<string>(value, typeof value === 'string')) {
        console.log(value.length);
    }
}
```

### C. 驗證函式參數

```typescript
function validateEmail(email: unknown): asserts email is string {
    if (typeof email !== "string" || !email.includes("@")) {
        throw new Error("Invalid email format");
    }
}

function sendEmail(email: unknown) {
    validateEmail(email);
    // email 是 string 類型
    console.log(`Sending email to ${email}`);
}
```

---

## 4. 與 Narrowing（類型收窄）的比較

### A. Narrowing 的基本方式

```typescript
function process(value: string | number) {
    // 使用 typeof 進行 Narrowing
    if (typeof value === "string") {
        // TypeScript 自動縮小為 string
        console.log(value.toUpperCase());
    } else {
        // TypeScript 自動縮小為 number
        console.log(value * 2);
    }
}
```

### B. 兩者比較

| 特性 | Narrowing（內建） | Asserts（自訂斷言） |
|------|-------------------|---------------------|
| **語法** | `if (typeof x === "string")` | `asserts x is string` |
| **彈性** | 有限，基於 TypeScript 內建類型 | 可自訂任意邏輯 |
| **錯誤處理** | 無，需手動處理 | 可拋出自訂錯誤 |
| **可讀性** | 較簡短 | 意圖更明確 |
| **複雜類型** | 需多重檢查 | 可一次完成 |
| **維護性** | 分散在各處 | 集中在函式中 |

### C. 應用時機

**使用 Narrowing：**
- 簡單的類型檢查（如 `typeof`、`instanceof`）
- 需要保留 else 分支的處理
- 程式碼路徑簡單明確

**使用 Asserts：**
- 複雜的類型驗證邏輯
- 需要在失敗時拋出明確錯誤
- 多個位置需要相同的驗證
- 自訂類型的驗證

---

## 5. 使用限制與無法使用的情況

### A. 使用限制

1. **必須有明确的類型參數**
   ```typescript
   // ✅ 正確
   function assert(value: unknown): asserts value is string { ... }

   // ❌ 錯誤：沒有類型參數
   function assert(value: unknown): asserts value { ... }
   ```

2. **只能在函式回傳類型中使用**
   ```typescript
   // ✅ 正確
   function isString(value: unknown): asserts value is string { ... }

   // ❌ 錯誤：不能用於變數
   const asserts: asserts value is string = (v) => true;
   ```

3. **無法在箭頭函式中使用**
   ```typescript
   // ❌ 錯誤
   const assert = (v: unknown): asserts v is string => { ... }

   // ✅ 正確：使用普通函式
   function assert(v: unknown): asserts v is string { ... }
   ```

### B. 無法使用的情況

1. **無法驗證編譯時已確定的類型**
   ```typescript
   const value: string = "hello";
   // 這種情況不需要 assert，TypeScript 已經知道類型
   ```

2. **無法在類別屬性中使用**
   ```typescript
   class MyClass {
       // ❌ 錯誤
       value: asserts this.value is string;
   }
   ```

3. **無法與泛型工廠函式直接組合**
   ```typescript
   // ⚠️ 需要注意：泛型斷言可能不如預期
   function createAssert<T>(): (value: unknown) => asserts value is T {
       return (value): asserts value is T => {
           // 實現
       };
   }
   ```

4. **無法用於執行時期不存在的類型資訊**
   ```typescript
   // ❌ 錯誤：無法根據運行時數據動態創建斷言
   function dynamicAssert(value: unknown, typeName: string) {
       // 這不是 assert 的正確用途
   }
   ```

---

## 6. 總結

`asserts` 解決了以下問題：

- ✅ **結合運行時驗證與編譯時類型縮小**
- ✅ **提供明確的錯誤處理機制**
- ✅ **將複雜的類型驗證邏輯封裝成可重用的函式**
- ✅ **使程式碼意圖更加清晰**

### 選擇指南

| 情況 | 建議 |
|------|------|
| 簡單的 typeof/instanceof 檢查 | 使用 Narrowing |
| 需要自訂驗證邏輯 | 使用 assert |
| 驗證失敗需要拋出錯誤 | 使用 assert |
| 需要條件分支處理 | 使用 Narrowing |
| 多處重複的驗證邏輯 | 使用 assert |

這個功能特別適合：
- API 輸入驗證
- 設定檔案驗證
- 複雜資料結構的類型檢查
- 需要明確錯誤訊息的場景