# Named and Anonymous Tuple Elements

> **版本：** TypeScript 4.0（部分功能在 4.2 優化）  
> **官方文件：** [Variadic Tuple Types](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-0.html#variadic-tuple-types)

Named Tuple Elements 允許為元組（Tuple）的每個元素提供名稱，提升類型的可讀性與可維護性。

---

## 1. 解決的核心問題：元組元素缺乏語義

在 Named Tuple Elements 出現之前，元組的元素是匿名的：

```typescript
// ❌ 問題：難以理解每個位置的意義
function getUser(): [string, number, boolean] {
    return ["Alice", 30, true];
}

const [name, age, active] = getUser();
// 需要靠記憶或猜測哪個位置代表什麼
```

Named Tuple Elements 允許為每個元素命名：

```typescript
// ✅ 可讀性提升
function getUser(): [name: string, age: number, active: boolean] {
    return ["Alice", 30, true];
}

const [name, age, active] = getUser();
// 現在每個位置的意義一目了然
```

---

## 2. 應用方式

### A. 基本語法

```typescript
// 為元組元素命名
type Coordinate = [x: number, y: number];

// 命名後可以透過名稱存取（可選）
const point: Coordinate = [10, 20];
const x = point[0]; // 10
const y = point[1]; // 20
```

### B. 混合命名與匿名元素

```typescript
// 混合使用
type Mixed = [first: string, number, last: string];

const data: Mixed = ["start", 123, "end"];
```

### C. 可選元素與命名

```typescript
// 可選元素也可以命名
type OptionalPoint = [x: number, y?: number];

const p1: OptionalPoint = [10];       // ✅
const p2: OptionalPoint = [10, 20];  // ✅
```

### D. 剩餘參數與命名

```typescript
type RestArgs = [first: string, ...rest: string[]];

const args: RestArgs = ["a", "b", "c", "d"];
// first = "a", rest = ["b", "c", "d"]
```

---

## 3. 實際應用場景

### A. 函式返回類型

```typescript
function getStats(): [count: number, sum: number, avg: number] {
    const numbers = [1, 2, 3, 4, 5];
    const count = numbers.length;
    const sum = numbers.reduce((a, b) => a + b, 0);
    const avg = sum / count;
    return [count, sum, avg];
}

const [total, totalSum, average] = getStats();
// 一眼就能看出每個值的意思
```

### B. 選項與參數

```typescript
function createUser(
    name: string,
    options: [age: number, role: string, active?: boolean]
): { name: string; age: number; role: string; active: boolean } {
    const [age, role, active = true] = options;
    return { name, age, role, active };
}

const user = createUser("Bob", [25, "admin", false]);
```

### C. API 回應類型

```typescript
type ApiResponse<T> = [
    status: number,
    data: T | null,
    error: string | null,
    timestamp: number
];

function parseResponse<T>(response: ApiResponse<T>): T {
    const [status, data, error] = response;
    if (status >= 400) {
        throw new Error(error ?? "Unknown error");
    }
    return data as T;
}
```

### D. 事件監聽器

```typescript
type EventHandler = [
    eventName: string,
    handler: (...args: any[]) => void,
    priority: number
];

const handlers: EventHandler[] = [
    ["click", () => console.log("clicked"), 1],
    ["focus", () => console.log("focused"), 2],
];
```

---

## 4. 與工具類型的結合

### A. 參數展開

```typescript
function concatenate<T extends string[], U extends string[]>(
    first: [...T],
    second: [...U]
): [...T, ...U] {
    return [...first, ...second];
}

type Result = [a: string, b: string, c: string];
const result: Result = concatenate(["a", "b"], ["c"]);
```

### B. 解構賦值

```typescript
type Point = [x: number, y: number];

function translate([x, y]: Point, delta: Point): Point {
    return [x + delta[0], y + delta[1]];
}
```

---

## 5. 與物件的比較

| 特性 | 匿名元組 | 命名元組 | 物件 |
|------|----------|----------|------|
| **元素數量** | 固定 | 固定 | 動態 |
| **元素順序** | 有意義 | 有意義 | 無所謂 |
| **存取方式** | 索引 | 索引或解構 | 鍵名 |
| **效能** | 較高 | 較高 | 較低 |
| **語義表達** | ❌ | ✅ | ✅ |

---

## 6. 總結

Named Tuple Elements 解決了以下問題：

- ✅ **提升可讀性**：每個元素的名稱一目了然
- ✅ **改善開發體驗**：IDE 自動完成顯示元素名稱
- ✅ **類型安全**：明確指定每個位置的類型
- ✅ **文件效果**：程式碼本身就是文件

這個功能特別適合：
- 函式返回多個值的場景
- 需要明確順序的資料結構
- 選項與參數的封裝
- API 回應類型的定義