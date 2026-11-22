# AGENTS.md - 開發規範

本專案是 TypeScript 類型工具庫

## ts-type 套件 packages/ts-type

packages/ts-type 為純 TypeScript 型別工具庫
所有 .js 皆為空檔案，僅用於支援 .d.ts 檔案的引入

### 命名規範

packages/ts-type

| prefix | 說明 | 範例 |
| --- | --- | --- |
| `ITS` | 一般型別 | `ITSPickOne`, `ITSRequireOnlyOne` |
| `ITSLogic` , `ITSLogic_` (新建立時使用此) | 用於邏輯判斷的型別 | `ITSLogic_IsStringLiteral`, `ITSLogicIsAny` |
| `I_` | internal 內部使用的型別 | `I_RecordOfMatchKey` |

## 注意事項

- 既有註解與文件說明 不一定正確，請以實際邏輯為準
- 新增或修改註解與文件時，請按照實際邏輯來撰寫
- 所有型別的命名都必須符合命名規範

## 術語

新增或修改時請遵守以下術語規範，不得因既存文件或註解而改變術語使用

### TypeScript 術語

| 英文術語 | 台灣常用（繁體） |
| --- | --- |
| Type | 型別 |
| Type Inference | 型別推論 |
| Type Annotation | 型別註記 |
| Type Alias | 型別別名 |
