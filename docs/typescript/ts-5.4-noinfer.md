`NoInfer<T>` 是在 TypeScript 5.4 引入的一個內建工具類型，它解決了一個長期存在的「過度推論」問題：
**當同一個泛型參數在多個位置出現時，TypeScript 會試圖從所有位置推論類型，這有時會導致意外的結果。**

透過 `NoInfer<T>`，你可以告訴編譯器：「請不要從這個位置推論類型，請以其他位置推論出的結果為準。」

---

## 1. 解決的核心問題：泛型競爭 (Generic Competition)

當函數有多個參數使用同一個泛型 $T$ 時，TS 會對每個參數進行推論並取其「聯集（Union）」。

### 問題範例（未使用 NoInfer）

```typescript
function selectItem<T>(items: T[], defaultItem: T) {
    return items.includes(defaultItem) ? defaultItem : items[0];
}

// 這裡期望報錯，但 TS 推論 T 為 "apple" | "pear" | "orange"
// 因為它同時從兩個參數推論 T
const result = selectItem(["apple", "pear"], "orange");

```

---

## 2. NoInfer<T> 的三種典型應用方式

### A. 強制單一推論源 (Single Source of Truth)

這是最常見的用法。將「次要」位置標記為 `NoInfer`，確保類型只由「主要」位置決定。

**範例：**

```typescript
function createContainer<T>(initialValue: T, options: { validate: (val: NoInfer<T>) => boolean }) {
    // ...
}

createContainer(100, {
    validate: (val) => val > 0 // 這裡的 val 被鎖定為 number
});

createContainer(100, {
    validate: (val: string) => val.length > 0 // ❌ 報錯：string 不符合 number
});

```

* **幫助了什麼：** 避免了 `options.validate` 反向影響 `initialValue` 的類型推論。

### B. 狀態機與動作分發 (State Machines & Actions)

在處理具有「狀態」與「處理函數」的結構時，確保處理函數的輸入必須完全符合當前定義的狀態類型。

**範例：**

```typescript
interface Machine<S> {
    state: S;
    update: (next: NoInfer<S>) => void;
}

function runMachine<S>(config: Machine<S>) { /* ... */ }

runMachine({
    state: { count: 0, name: "Timer" },
    update: (s) => {
        console.log(s.count);
        // s.extra = 1; // ❌ 報錯：'extra' 不存在於 { count: number, name: string }
    }
});

```

* **解決了什麼問題：** 轉向函數 `update` 如果寫錯了屬性，原本可能會導致 `S` 被推論得太寬（包含錯誤屬性），現在則會直接抓出 `update` 的錯誤。

### C. 聯集類型的嚴格匹配 (Strict Union Matching)

當你希望一個參數必須是另一個陣列參數中的「其中一個成員」，而不是擴大範圍。

**範例：**

```typescript
function sendNotification<T extends string>(
    allowedTypes: T[],
    currentType: NoInfer<T>
) {
    // ...
}

sendNotification(["email", "sms"], "email"); // ✅ OK
sendNotification(["email", "sms"], "push");  // ❌ 報錯：'push' 不在 'email' | 'sms' 之中

```

* **幫助了什麼：** 如果沒有 `NoInfer`，`T` 會被推論為 `"email" | "sms" | "push"`，導致第二行程式碼合法，這違反了 `allowedTypes` 的約束意圖。

---

## 4. NoInfer 與 infer 的比較

| 特性 | `NoInfer<T>` | `infer T` |
|------|--------------|-----------|
| **版本** | TypeScript 5.4 | TypeScript 2.8 |
| **目的** | 阻止從某位置推論 | 從類型中提取資訊 |
| **使用場景** | 泛型參數控制 | 條件類型中的類型提取 |
| **位置** | 泛型參數位置 | 條件類型的 true 分支 |

### A. NoInfer 的典型用途

控制泛型推論來源：

```typescript
function process<T>(value: T, validator: (val: NoInfer<T>) => boolean) {
    return validator(value);
}

process("hello", (v) => v.length > 0); // T 推論為 string
```

### B. infer 的典型用途

從複雜類型中提取特定部分：

```typescript
type ReturnType<T> = T extends (...args: any[]) => infer R ? R : never;

type Fn = (x: string, y: number) => boolean;
type Result = ReturnType<Fn>; // Result 為 boolean
```

### C. 兩者結合使用

在某些情況下可以結合使用：

```typescript
type ExtractAndValidate<T> = T extends (input: infer I) => infer O
    ? I extends NoInfer<string> ? O : never
    : never;
```

---

## 5. 總結

| 功能 | 版本 | 解決的核心問題 |
|------|------|---------------|
| `NoInfer<T>` | TS 5.4 | 泛型推論時指定排除特定位置 |
| `infer T` | TS 2.8 | 從條件類型中提取子類型 |

兩者都是 TypeScript 類型系統的重要工具：
- `NoInfer`幫助控制推論行為，避免不預期的寬化
- `infer`幫助從現有類型中建立新的類型結構

根據具體需求選擇使用：需要控制推論來源時使用 `NoInfer`，需要從類型中提取資訊時使用 `infer`。
