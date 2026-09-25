"use strict";
/*
ITSPartialPick / ITSRequiredPick
└─ 一般 Object
   └─ keyof T

ITSPartialPickUnion / ITSRequiredPickUnion
└─ Union
   └─ 保留 A | B 結構
      └─ distributive conditional type

ITSPartialPickUnionFlat / ITSRequiredPickUnionFlat
└─ UnionFlat
   └─ A | B → 單一 Object
      └─ ITSKeyOfUnion + ITSValueOfUnion

PartialWith
    → 修改 K，保留 Object

PartialWithUnion
    → 修改 K，保留 A | B

PartialWithUnionFlat
    → Flatten A | B，再只修改 K
*/
Object.defineProperty(exports, "__esModule", { value: true });
//# sourceMappingURL=union.js.map