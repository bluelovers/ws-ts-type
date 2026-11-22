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

#### 邏輯判斷型別語意命名

邏輯判斷（`ITSLogic_`）型別依「極性 × 量化範圍」命名，公式為 `Is<P>` / `IsNot_<P>` 加量詞後綴，`<P>` 為受檢主詞（如 `EmptyRecord`、`EmptyObject`、`String`、`Array`）：

| 語意 | 命名公式 | 範例 |
| --- | --- | --- |
| 其中之一是 | `ITSLogic_Is<P>` | `ITSLogic_IsEmptyRecord` |
| 其中之一不是 | `ITSLogic_IsNot_<P>` | `ITSLogic_IsNot_EmptyRecord` |
| 全部都是 | `ITSLogic_Is<P>_UnionAll` | `ITSLogic_IsEmptyRecord_UnionAll` |
| 全部不是 | `ITSLogic_IsNot_<P>_UnionAll` | `ITSLogic_IsNot_EmptyRecord_UnionAll` |

- bare 型別為分佈式 (Distributive) 存在量化：對 Union 逐成員求值，混合成員時回傳 `boolean`，對齊 TypeScript 生態慣例。
- `_UnionAll` 統一表示分佈式的全稱量化（guard 版：`never` 與混合成員一律回 `false`）；非分佈式的整體判定版一律以 `_Whole` 結尾（如 `ITSLogic_IsEmptyObject_Whole`），禁止使用序號（`_2`）區分。
- `IsNot` 與主詞之間必須加底線（`IsNot_EmptyRecord`），避免被誤讀為「非空」語意（`IsNotEmptyRecord`）。
- 主詞一律留在 `Is<P>` 內；`_UnionAll` 限定 union 成員量化，日後若新增 array 元素量化，使用 `_Element` 系列後綴（如 `ElementAll`）區隔。

##### 名詞定義

- **分佈式 (Distributive)**：條件型別的被檢查型別為裸型別參數時（`T extends X ? Y : N`），TypeScript 自動將 union 拆開、逐成員求值再合併結果：全滿足回 `true`、全不滿足回 `false`、混合成員回 `boolean`；`never` 分佈的結果為 `never`。
- **非分佈式的整體判定**：以 tuple 包住被檢查型別來關閉分佈（`[T] extends [X]`），將整個 union 視為單一型別判斷，只回 `true`/`false`、永不回 `boolean`；`never` 因可賦值給任何型別而恆為 `true`；判斷取的是 union 的整體性質（如 `keyof` 交集），可能與逐成員判定得出不同結果。
- **bare**：不加任何量詞後綴的最簡型別名（如 `ITSLogic_IsEmptyRecord`）；本規範約定 bare = 分佈式存在量化。
- **guard 版**：`_UnionAll` 的實作模式——以 bare 為基礎、外層套 guard，把分佈式結果收斂為全稱量化（`[T] extends [never] ? N : boolean extends bare ? N : bare`），`never` 與混合成員一律回 `false`。

| | 求值方式 | 混合成員 | `never` |
| --- | --- | --- | --- |
| bare（分佈式） | 逐成員 | `boolean` | `never` |
| guard 版（`_UnionAll`） | 逐成員 + guard 收斂 | `false` | `false` |
| 整體判定（`_Whole`） | 整體一次判斷 | `true` / `false`（以整體性質判定） | `true`（object 版因 null/undefined 檢查為 `false`） |

## 注意事項

- 既有註解與文件說明 不一定正確，請以實際邏輯為準
- 新增或修改註解與文件時，請按照實際邏輯來撰寫
- 所有型別的命名都必須符合命名規範

## 術語

新增或修改時請遵守以下術語規範，不得因既存文件或註解而改變術語使用

### TypeScript 術語

| 英文術語 | 繁體 |
| --- | --- |
| Type | 型別 |
| Type Inference | 型別推論 |
| Type Annotation | 型別註記 |
| Type Alias | 型別別名 |
