(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('assert')) :
	typeof define === 'function' && define.amd ? define(['exports', 'assert'], factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.TsTypeIsArray = {}, global.assert));
})(this, (function (exports, assert) { 'use strict';

	function isArray(arg) {
	  return Array.isArray(arg);
	}
	/**
	 * 斷言值為可變陣列（不包含 readonly 屬性）
	 * Assert value as writable array (without readonly attribute)
	 *
	 * 將唯讀陣列轉換為可變陣列類型，移除 readonly 修飾符
	 * Converts readonly array to writable array type by removing readonly modifier
	 *
	 * 此函數僅用於類型斷言，運行時不執行任何操作，與 typePredicates 概念相同
	 * This function is only for type assertion, no operation at runtime, same concept as typePredicates
	 *
	 * @param value - 要斷言的值 / Value to assert
	 *
	 * @example
	 * ```typescript
	 * import { typePredicatesAsWriteableArray } from '@ts-type/is-array';
	 *
	 * const readonlyArray: readonly string[] = ['a', 'b', 'c'];
	 *
	 * typePredicatesAsWriteableArray(readonlyArray);
	 * // readonlyArray 現在類型為 string[]
	 * // readonlyArray now has type string[]
	 * readonlyArray.push('d'); // 合法 / valid
	 * ```
	 *
	 * @note 此函數使用 assert 語法，需要 TypeScript 3.7+ / This function uses assert syntax, requires TypeScript 3.7+
	 * @note 由於類型條件的復雜性，需要 @ts-ignore 註釋 / Due to complex type conditions, @ts-ignore is required
	 * @note 函數主體為空，因為類型斷言僅在編譯時作用，與 typePredicates 概念相同
	 *       Function body is empty because type assertion only works at compile time, same concept as typePredicates
	 */
	// @ts-ignore - 類型斷言的複雜性導致 TypeScript 無法正確推斷 / Type assertion complexity causes TypeScript inference issue
	function typePredicatesAsWriteableArray(value) {}
	/**
	 * 斷言值為唯讀陣列
	 * Assert value as readonly array
	 *
	 * 將可變陣列轉換為唯讀陣列類型，新增 readonly 修飾符
	 * Converts writable array to readonly array type by adding readonly modifier
	 *
	 * 此函數僅用於類型斷言，運行時不執行任何操作，與 typePredicates 概念相同
	 * This function is only for type assertion, no operation at runtime, same concept as typePredicates
	 *
	 * @param value - 要斷言的值 / Value to assert
	 *
	 * @example
	 * ```typescript
	 * import { typePredicatesAsReadonlyArray } from '@ts-type/is-array';
	 *
	 * const writableArray: string[] = ['a', 'b', 'c'];
	 *
	 * typePredicatesAsReadonlyArray(writableArray);
	 * // writableArray 現在類型為 readonly string[]
	 * // writableArray now has type readonly string[]
	 * ```
	 *
	 * @note 此函數使用 assert 語法，需要 TypeScript 3.7+ / This function uses assert syntax, requires TypeScript 3.7+
	 * @note 由於類型條件的復雜性，需要 @ts-ignore 註釋 / Due to complex type conditions, @ts-ignore is required
	 * @note 函數主體為空，因為類型斷言僅在編譯時作用，與 typePredicates 概念相同
	 *       Function body is empty because type assertion only works at compile time, same concept as typePredicates
	 */
	// @ts-ignore - 類型斷言的複雜性導致 TypeScript 無法正確推斷 / Type assertion complexity causes TypeScript inference issue
	function typePredicatesAsReadonlyArray(value) {}
	/**
	 * 斷言並驗證值為陣列，否則拋出錯誤
	 * Assert and validate that value is an array, otherwise throw error
	 *
	 * 此函數會在運行時驗證值是否為陣列，如果不是則拋出 AssertionError
	 * This function validates whether the value is an array at runtime, throwing AssertionError if not
	 *
	 * @param actual - 要驗證的值 / Value to validate
	 * @param message - 自訂錯誤訊息（可選）/ Custom error message (optional)
	 * @throws 當值不是陣列時拋出 AssertionError / Throws AssertionError when value is not an array
	 *
	 * @example
	 * ```typescript
	 * import { isArrayPredicates } from '@ts-type/is-array';
	 *
	 * function processData(data: unknown) {
	 *   // 這會斷言 data 為陣列，如果失敗則拋出錯誤
	 *   // This asserts data as array, throws error if failed
	 *   isArrayPredicates(data);
	 *
	 *   // data 現在被認為是陣列類型
	 *   // data is now considered as array type
	 *   console.log(data.length);
	 * }
	 *
	 * // 使用自訂錯誤訊息
	 * // Using custom error message
	 * isArrayPredicates(someValue, 'Expected an array but got something else');
	 * ```
	 *
	 * @see https://www.typescriptlang.org/docs/handbook/2/functions.html#assertion-functions
	 */
	function isArrayPredicates(actual, message) {
	  const expression = Array.isArray(actual);
	  if (!expression) {
	    throw new assert.AssertionError({
	      message: message !== null && message !== void 0 ? message : `actual ${actual} not as expected`,
	      actual,
	      expected: expression,
	      operator: 'fail'
	    });
	  }
	  // @ts-ignore
	  return expression;
	}

	exports.default = isArray;
	exports.isArray = isArray;
	exports.isArrayNarrowed = isArray;
	exports.isArrayPredicates = isArrayPredicates;
	exports.typePredicatesAsReadonlyArray = typePredicatesAsReadonlyArray;
	exports.typePredicatesAsWriteableArray = typePredicatesAsWriteableArray;

	Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=index.umd.development.cjs.map
