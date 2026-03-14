# Subpath Imports (`#/` 前綴)

> **版本：** TypeScript 4.5  
> **官方文件：** [Subpath Imports and Exports](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-5.html#subpath-imports-and-exports)

Subpath Imports 允許使用 `#/` 前綴在 `package.json` 中定義模組別名，實現更直觀的匯入語法。

---

## 1. 解決的核心問題：路徑複雜性與匯入語法

在 Subpath Imports 出現之前，匯入路徑經常面臨以下問題：

```typescript
// ❌ 問題 1：相對路徑過深
import { Button } from "../../../components/Button";

// ❌ 問題 2：套件內部路徑不直觀
import { Button } from "@my-org/ui/components/Button";

// ❌ 問題 3：路徑別名需要額外設定
import { Button } from "@/components/Button"; // 需要 tsconfig path mapping
```

Subpath Imports 允許在 `package.json` 中直接定義清晰的別名：

```typescript
// ✅ 使用 # 前綴的匯入
import { Button } from "#components/Button";
```

---

## 2. 設定方式

### package.json 配置

```json
{
    "name": "my-package",
    "exports": {
        ".": "./dist/index.js",
        "#components/*": "./dist/components/*",
        "#utils/*": "./dist/utils/*",
        "#types": "./dist/types.d.ts"
    }
}
```

### tsconfig.json 配置

```json
{
    "compilerOptions": {
        "paths": {
            "#components/*": ["./src/components/*"],
            "#utils/*": ["./src/utils/*"],
            "#types": ["./src/types.ts"]
        }
    }
}
```

---

## 3. 應用方式

### A. 組織內部模組

```typescript
// 使用 # 前綴直接匯入
import { Button } from "#components/Button";
import { useLogger } from "#utils/logger";
import type { User } from "#types/user";

// 也可以使用子路徑
import { PrimaryButton } from "#components/buttons/PrimaryButton";
```

### B. 區分內部與外部 API

```typescript
// 外部公開 API（透過 exports）
import { createApp } from "my-framework";

// 內部私有 API（使用 # 前綴）
import { internalCache } from "#framework/internal/cache";
import { privateUtils } from "#internal/utils";
```

### C. 類型匯入

```typescript
// 匯入類型定義
import type { Config, Options } from "#types/config";

// 這在類型檔案中特別有用
import type { DeepPartial } from "#types/utils";
```

---

## 4. 實際應用場景

### A. 大型函式庫的模組組織

```json
// package.json
{
    "name": "design-system",
    "exports": {
        ".": "./dist/index.js",
        "#components/*": "./dist/components/*",
        "#hooks/*": "./dist/hooks/*",
        "#utils/*": "./dist/utils/*",
        "#styles/*": "./dist/styles/*"
    }
}
```

```typescript
// 使用時
import { Button, Card } from "#components";
import { useTheme } from "#hooks/useTheme";
import { cn } from "#utils/cn";
```

### B. 單一倉庫（Monorepo）中的套件

```json
// packages/ui/package.json
{
    "name": "@my-org/ui",
    "exports": {
        ".": "./dist/index.js",
        "#internal/*": "./src/internal/*"
    }
}
```

```typescript
// 内部使用
import { getInternalConfig } from "#internal/config";
```

### C. 類型定義集中管理

```json
// package.json
{
    "name": "shared-types",
    "exports": {
        "#types": "./dist/types.d.ts",
        "#types/*": "./dist/types/*.d.ts"
    }
}
```

```typescript
import type { User, Order } from "#types";
import type { ApiResponse } from "#types/api";
```

---

## 5. 與傳統路徑別名的比較

| 特性 | 傳統 path mapping (`@/`) | Subpath Imports (`#/`) |
|------|---------------------------|------------------------|
| **配置位置** | tsconfig.json | package.json + tsconfig.json |
| **執行時期** | 需要 bundler 支援 | 原生 Node.js 支援 |
| **語法** | `@/components/Button` | `#components/Button` |
| **類型安全** | 需要額外設定 | 自動繼承 |
| **發布相容** | 需配合 bundler | 與 Node.js 原生相容 |

---

## 6. 注意事项

### 需要同時在 package.json 和 tsconfig.json 中配置

```json
// package.json - 用於執行時期
{
    "exports": {
        "#utils/*": "./dist/utils/*"
    }
}
```

```json
// tsconfig.json - 用於類型檢查
{
    "compilerOptions": {
        "paths": {
            "#utils/*": ["./src/utils/*"]
        }
    }
}
```

### 執行時期路徑

- `package.json` 的 `exports` 欄位決定執行時期的实际路徑
- `tsconfig.json` 的 `paths` 欄位只用於類型檢查

### 避免與現有套件衝突

避免使用可能與 npm 上現有套件衝突的名稱。

---

## 7. 總結

Subpath Imports (`#/`) 解決了以下問題：

- ✅ **簡化匯入路徑**：消除深層相對路徑
- ✅ **明確表達意圖**：`#` 前綴表明這是內部模組
- ✅ **執行時期支援**：Node.js 原生支援（需要 Node 16+）
- ✅ **類型安全**：類型檢查與執行時期路徑一致

這個功能特別適合：
- 大型函式庫的模組組織
- Monorepo 中的內部套件
- 需要明確區分公開/私有 API 的專案