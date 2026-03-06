(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('assert')) :
	typeof define === 'function' && define.amd ? define(['exports', 'assert'], factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.TsTypeIsArray = {}, global.assert));
})(this, (function (exports, assert) { 'use strict';

	/**
	 * 檢查值是否為陣列（類型斷言版本）
	 * Check if value is an array (type predicate version)
	 *
	 * @param arg - 要檢查的值 / Value to check
	 * @returns 是否為輸入類型的類型斷言 / Type predicate of input type
	 */
	function isArray(arg) {
	  return Array.isArray(arg);
	}
	/**
	 * 斷言值為可變陣列（不包含 readonly 屬性）
	 * Assert value as writable array (without readonly attribute)
	 *
	 * @param value - 要斷言的值 / Value to assert
	 * @throws 當值不是陣列時拋出錯誤 / Throws error when value is not an array
	 */
	// @ts-ignore
	function typePredicatesAsWriteableArray(value) {}
	/**
	 * 斷言值為唯讀陣列
	 * Assert value as readonly array
	 *
	 * @param value - 要斷言的值 / Value to assert
	 * @throws 當值不是陣列時拋出錯誤 / Throws error when value is not an array
	 */
	// @ts-ignore
	function typePredicatesAsReadonlyArray(value) {}
	/**
	 * 斷言並驗證值為陣列，否則拋出錯誤
	 * Assert and validate that value is an array, otherwise throw error
	 *
	 * @param actual - 要驗證的值 / Value to validate
	 * @param message - 自訂錯誤訊息（可選）/ Custom error message (optional)
	 * @throws 當值不是陣列時拋出 AssertionError / Throws AssertionError when value is not an array
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
