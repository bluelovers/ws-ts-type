# `satisfies` 運算子

> **版本：** TypeScript 4.9  
> **官方文件：** [The satisfies Operator](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-9.html#the-satisfies-operator)

`satisfies` 是 TypeScript 4.9 引入的運算子，它允許開發者在「保持類型窄化」與「完整類型推論」之間取得平衡。

---

## 1. 解決的核心問題：寬鬆推論 vs 過度窄化

在 `satisfies` 出現之前，我們有兩種主要方式處理變數類型：

| 方式 | 範例 | 結果 |
|------|------|------|
| 賦值推論 | `const colors = ["red", "green"]` | 推論為 `string[]` |
| 型別註記 | `const colors: string[] = [...]` | 精確為 `string[]` |

然而這兩種方式都有問題：
- **賦值推論**可能導致類型過於寬鬆（如 `string[]`）
- **型別註記**可能過度限制，導致無法使用更精確的推論結果

`satisfies` 提供了第三種選擇：**驗證類型相容性，同時保留推論結果**。

---

## 2. 應用方式

### A. 物件常數的精確類型推論

**範例：**

```typescript
type Color = "red" | "green" | "blue";
type Palette = Record<Color, string>;

const palette = {
    red: "#ff0000",
    green: "#00ff00",
    blue: "#0000ff",
} satisfies Palette;

// ✅ palette 的類型是 { red: "#ff0000"; green: "#00ff00"; blue: "#0000ff" }
// 而非寬鬆的 Palette (Record<Color, string>)

const redValue = palette.red; // 類型為 "#ff0000"（字面量類型）
```

* **幫助了什麼：** 保留了字面量類型的精確性，同時確保符合 `Palette` 介面。

### B. 函式返回類型的窄化

**範例：**

```typescript
function getConfig() {
    return {
        port: 3000,
        host: "localhost",
        ssl: false,
    } satisfies { port: number; host: string; ssl?: boolean };
}

const config = getConfig();
// config.port 的類型為 3000（字面量），而非 number
```

* **解決了什麼問題：** 避免返回類型被寬化為 `number`，保留了精確的字面量類型。

### C. 陣列與元組類型

**範例：**

```typescript
const point = [10, 20] satisfies [number, number];
// point 的類型為 [10, 20]，而非 number[]

const mixed = ["a", 1, true] satisfies [string, number, boolean];
// mixed 的類型為 ["a", 1, true]
```

* **幫助了什麼：** 讓元組類型保持精確的同時驗證類型相容性。

### D. 深層巢狀物件驗證

**範例：**

```typescript
type Config = {
    server: {
        port: number;
        host: string;
    };
    database: {
        enabled: boolean;
    };
};

const config = {
    server: {
        port: 8080,
        host: "0.0.0.0",
    },
    database: {
        enabled: true,
    },
} satisfies Config;

// ✅ 每一層都保持精確類型
config.server.port;      // 類型為 8080
config.database.enabled; // 類型為 true
```

---

## 3. satisfies vs 其他方式的比較

| 特性 | 直接賦值 | 型別註記 | `satisfies` |
|------|----------|----------|-------------|
| **類型推論** | 寬鬆 | 固定 | 精確保留 |
| **類型驗證** | 無 | 有 | 有 |
| **字面量保留** | ❌ | ❌ | ✅ |
| **範例** | `const x = { a: 1 }` → `{ a: number }` | `const x: { a: number } = { a: 1 }` → `{ a: number }` | `const x = { a: 1 } satisfies { a: number }` → `{ a: 1 }` |

---

## 4. 常見應用場景

### 設定檔案（Configuration Objects）

```typescript
const config = {
    apiUrl: "https://api.example.com",
    timeout: 5000,
    retries: 3,
} satisfies Partial<ApiConfig>;

if (config.timeout) {
    // config.timeout 為 5000，不是 number | undefined
}
```

### 型別安全的映射表

```typescript
const colorMap = {
    primary: "#007bff",
    secondary: "#6c757d",
    success: "#28a745",
    danger: "#dc3545",
} satisfies Record<string, string>;

// 使用時仍然有類型安全
colorMap.primary; // ✅ "#007bff"
colorMap.unknown; // ❌ 編譯錯誤
```

### 函式參數預設值

```typescript
function setup(options: { debug?: boolean; level?: "info" | "warn" | "error" }) {
    // ...
}

setup({
    debug: true,
    level: "info",
} satisfies { debug?: boolean; level?: "info" | "warn" | "error" });
```

---

## 5. 總結

`satisfies` 運算子解決了長期以來 TypeScript 在「類型寬鬆推論」與「過度限制性註記」之間的矛盾。它允許開發者：

- ✅ 驗證變數符合預期的類型約束
- ✅ 保留推論出的精確類型（包括字面量類型）
- ✅ 在不改變原有類型註記的情況下獲得更精確的推論結果

這對於需要嚴格類型安全但又不希望犧牲推論精確性的場景特別有用。