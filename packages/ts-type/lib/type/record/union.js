"use strict";
/*
 * 聯集 (Union) 型別的鍵選取工具總覽
 * Overview of Union key-selection utilities
 *
 * ITSPartialPick / ITSRequiredPick
 * └─ 一般 Object / 一般物件
 *    └─ keyof T
 *
 * ITSPartialPickUnion / ITSRequiredPickUnion
 * └─ Union 聯集
 *    └─ 保留 A | B 結構 / preserve A | B structure
 *       └─ distributive conditional type / 分配式條件型別
 *
 * ITSPartialPickUnionFlat / ITSRequiredPickUnionFlat
 * └─ UnionFlat 扁平聯集
 *    └─ A | B → 單一 Object / A | B → single object
 *       └─ ITSKeyOfUnion + ITSValueOfUnion
 *
 * PartialWith
 * 	→ 修改 K，保留 Object / modify K, preserve object
 *
 * PartialWithUnion
 * 	→ 修改 K，保留 A | B / modify K, preserve A | B
 *
 * PartialWithUnionFlat
 * 	→ Flatten A | B，再只修改 K / flatten A | B, then modify only K
 */
Object.defineProperty(exports, "__esModule", { value: true });
//# sourceMappingURL=union.js.map