'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/**
 * 取得物件的鍵值對陣列，提供更好的 TypeScript 類型推論
 * Get key-value pairs of an object with better TypeScript type inference
 *
 * 標準 Object.entries 回傳 [string, any][]，此函式則根據輸入物件結構
 * 回傳具體類型的鍵值對陣列
 *
 * @param obj - 目標物件 / Target object
 * @returns 鍵值對陣列 / Key-value pair array
 * @example
 * const obj = { a: 1, b: 2 } as const;
 * const entries = tsObjectEntries(obj);
 * // type: readonly ["a", 1][] | readonly ["b", 2][]
 */
function tsObjectEntries(obj) {
  return Object.entries(obj);
}

exports.default = tsObjectEntries;
exports.tsObjectEntries = tsObjectEntries;
//# sourceMappingURL=index.cjs.development.cjs.map
