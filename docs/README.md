# TypeScript 說明文件

本目錄包含 TypeScript 相關的說明文件，分為兩個主要分類：

---

## 目錄結構

```
docs/
├── typescript/           # TypeScript 官方功能說明
│   ├── ts-3.7-asserts.md
│   ├── ts-4.0-tuple-elements.md
│   ├── ts-4.5-subpath-imports.md
│   ├── ts-4.9-satisfies.md
│   ├── ts-4.9-auto-accessors.md
│   ├── ts-5.2-using.md
│   ├── ts-5.4-noinfer.md
│   └── ts-5.5-import-defer.md
│
└── typescript-issues/    # TypeScript 類型問題與解決方案
    └── ts-object-entries.md
```

---

## docs/typescript/ - TypeScript 官方功能說明

此目錄收錄 TypeScript 各版本引入的新功能說明文件，按版本號分類。

### 檔案清單

| 檔案 | 版本 | 功能說明 |
|------|------|----------|
| [`ts-3.7-asserts.md`](typescript/ts-3.7-asserts.md) | TS 3.7 | `asserts` 斷言函式 |
| [`ts-4.0-tuple-elements.md`](typescript/ts-4.0-tuple-elements.md) | TS 4.0 | Named and Anonymous Tuple Elements |
| [`ts-4.5-subpath-imports.md`](typescript/ts-4.5-subpath-imports.md) | TS 4.5 | Subpath Imports (`#/` 前綴) |
| [`ts-4.9-satisfies.md`](typescript/ts-4.9-satisfies.md) | TS 4.9 | `satisfies` 運算子 |
| [`ts-4.9-auto-accessors.md`](typescript/ts-4.9-auto-accessors.md) | TS 4.9 | Auto-Accessors in Classes |
| [`ts-5.2-using.md`](typescript/ts-5.2-using.md) | TS 5.2 | `using` 宣告 |
| [`ts-5.4-noinfer.md`](typescript/ts-5.4-noinfer.md) | TS 5.4 | `NoInfer<T>` + `infer` |
| [`ts-5.5-import-defer.md`](typescript/ts-5.5-import-defer.md) | TS 5.5 | `import defer` |

### 每個檔案包含的內容

- **解決的核心問題**：說明該功能解決了什麼問題
- **應用方式**：多種使用場景與範例
- **與其他功能的比較**
- **使用限制與注意事項**
- **非官方或非一般常見的特殊應用方式** (如果有)

---

## docs/typescript-issues/ - TypeScript 類型問題與解決方案

此目錄收錄 TypeScript 類型系統的常見問題與解決方案。

### 檔案清單

| 檔案 | 問題說明 |
|------|----------|
| [`ts-object-entries.md`](typescript-issues/ts-object-entries.md) | Object.entries 類型寬化問題 |

### 每個檔案包含的內容

- **問題描述**：具體的類型問題說明
- **概念**：解決方案的核心概念
- **應用方式**：實際使用範例
- **比較**：標準方式 vs 優化方式
- **使用場景**：常見應用情境

---

## 命名規範

- **版本號格式**：`ts-{major}.{minor}-{feature}.md`
  - 例如：`ts-4.9-satisfies.md`
- **問題格式**：`ts-{issue-name}.md`
  - 例如：`ts-object-entries.md`

---

## 相關資源

- [TypeScript 官方網站](https://www.typescriptlang.org/)
- [TypeScript 發行說明](https://www.typescriptlang.org/docs/handbook/release-notes.html)
- [TypeScript 官方手冊](https://www.typescriptlang.org/docs/handbook/)
