# AGENTS.md - 開發規範

本專案是 TypeScript 類型工具庫 monorepo，使用 Yarn Workspaces 管理多個 packages。

---

## 1. 專案結構

```
ws-ts-type/
├── packages/
│   ├── ts-type/           # 主套件
│   ├── ts-type-predicates/
│   ├── ts-type-object-entries/
│   ├── package-dts/
│   ├── ts-http-header/
│   └── ts-global-type-extra/
└── package.json           # Workspace root
```

---

## 2. 指令

> 注意：請使用 **pnpm** 而非 yarn 或 npm

### 建置

```bash
# Root - 建置所有 packages
pnpm run build:all

# Root - 只建置自上次變更的 packages
pnpm run build:since

# 單一 package
cd packages/ts-type && pnpm run build
```

### 測試

```bash
# Root - 執行所有測試
pnpm run test:all

# Root - 執行自上次變更的 packages
pnpm run test:since

# 單一 package
cd packages/ts-type
pnpm run test
```

### 執行單一測試

```bash
cd packages/ts-type
pnpm run test:tsd -- --files test/spec/record/pick-one.test-d.ts
```

---

## 3. 代碼風格

### 一般規範

- **語言**: 使用中文回覆問題 / Git 提交訊息
- **縮排**: Tab 或 2 spaces (依檔案原有風格)
- **編碼**: UTF-8，每行結尾: LF

### 命名規範

| 類型 | 命名規則 | 範例 |
|------|---------|------|
| 類型 (Type) | `ITS` 前綴 + 描述性名稱 | `ITSPickOne`, `ITSRequireOnlyOne` |
| 介面 (Interface) | `I` 前綴 (ESLint 強制) | `IUser`, `IConfig` |
| 函式 (Function) | camelCase | `handleClick` |
| 常數 | UPPER_SNAKE_CASE | `MAX_RETRIES` |

### JSDoc 註解

- **必須** 使用雙語註解 (繁體中文 + 英文)
- 類型定義必須包含說明和範例與输岀结果

```ts
/**
 * 確保物件只能具有指定的鍵集合中的其中一個（互斥）
 * Ensure the object can only have exactly one of the specified key sets (mutually exclusive)
 *
 * @see https://stackoverflow.com/questions/40510611/typescript-interface-require-one-of-two-properties-to-exist
 * @see {@link ITSPickOne} 另一種實現方式
 *
 * @example
 * interface User { name?: string; age?: number; }
 * type OnlyOne = ITSRequireOnlyOne<User, 'name' | 'age'>;
 * // 輸出結果：
 * // type OnlyOne = { name: string; age?: never; } | { age: number; name?: never; }
 */
export type ITSRequireOnlyOne<T, Keys extends keyof T = keyof T> = ...
```

---

## 4. 測試規範

### 類型測試 (tsd)

測試檔使用 `.test-d.ts` 副檔名，放在 `test/spec/` 目錄：

```ts
import { ITSPickOne } from '../../../lib/helper/record/pick-one';
import { expectNotAssignable, expectAssignable } from 'tsd';

interface ICodingLangRating {
  java: string
  cpp: string
}

type OneLang = ITSPickOne<ICodingLangRating>;

expectAssignable<OneLang>({ java: 'good' });
expectNotAssignable<OneLang>({ python: 'unknown' });

// @ts-expect-error 不允許多個鍵
const lang: OneLang = { java: 'good', go: 'good' }
```

### 執行測試

```bash
cd packages/ts-type && pnpm run test:tsd
pnpm run test:tsd -- --files test/spec/record/pick-one.test-d.ts
```

---

## 6. 工作流程

### 新增類型

1. 撰寫雙語 JSDoc 註解
2. 執行測試時會自動建置: `pnpm run test`

### 修改現有類型

1. 修改對應的 `.ts` 檔案
2. 更新 JSDoc 註解 (如有必要)
3. 執行測試時會自動建置
4. 確認 `*.d.ts` 正確產生

---

## 7. 技術細節

- **編譯器**: TypeScript (`skipLibCheck: true`)
- **類型檢查**: tsd (宣告檔測試)
- **Monorepo**: pnpm Workspaces

