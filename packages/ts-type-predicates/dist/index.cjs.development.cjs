'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var assert = require('assert');

/// <reference types="node" />
/**
 * 處理表達式，回傳布林值結果
 * Handle expression and return boolean result
 *
 * @param actual - 實際值 / Actual value
 * @param expression - 表達式，可為布林值或函式 / Expression, can be boolean or function
 * @returns 布林值結果 / Boolean result
 */
function _handleExpression(actual, expression = true) {
  expression !== null && expression !== void 0 ? expression : expression = true;
  if (typeof expression === 'function') {
    expression = !!expression(actual);
  }
  return expression;
}
/**
 * 使用斷言（assert）讓類型斷言（type predicates）運作
 * Use asserts for make type predicates work
 *
 * 此函式結合了 TypeScript 的斷言函式與類型斷言功能，
 * 允許在運行時驗證類型並在編譯時縮小類型範圍
 *
 * @param T - 預期的類型 / Expected type
 * @param actual - 實際值 / Actual value
 * @param expression - 斷言條件，可為布林值或函式（可選）/ Assertion condition, can be boolean or function (optional)
 * @param message - 自訂錯誤訊息（可選）/ Custom error message (optional)
 * @param ignoreExpression - 是否忽略表達式結果，設為 true 時只做類型收窄不拋出錯誤（可選）/ Whether to ignore expression result (optional)
 * @throws 當表達式結果為 false 時拋出 AssertionError / Throws AssertionError when expression is false
 *
 * @see https://www.typescriptlang.org/docs/handbook/advanced-types.html#using-type-predicates
 * @see https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-7.html#assertion-functions
 *
 * @example
 * // 基本用法：失敗時拋出錯誤
 * typePredicates<string>(value, typeof value === 'string');
 *
 * @example
 * // 參數除了第一個以外都能省略
 * typePredicates<string>(value);
 *
 * @example
 * // 使用於 if 條件中 - 強制類型收窄 (需要配合使用 @ts-ignore 註釋)
 * if (typePredicates<string>(data.value, data.type === 'a')) {
 *     // data.value 現在正確收窄為 string
 *     console.log(data.value.toUpperCase());
 * }
 *
 * @example
 * // 忽略表達式結果，只做類型收窄，不拋出錯誤
 * typePredicates<string>(value, typeof value === 'string', undefined, true);
 */
function typePredicates(actual, expression = true, message, ignoreExpression) {
  expression = _handleExpression(actual, expression);
  if (expression !== true && ignoreExpression !== true) {
    throw new assert.AssertionError({
      message: message !== null && message !== void 0 ? message : `actual ${actual} not as expected`,
      actual,
      expected: expression,
      operator: 'typePredicates'
    });
  }
  // @ts-ignore
  return expression;
}
/**
 * 類型收窄函式，回傳類型斷言結果
 * Type narrowing function, returns type predicate result
 *
 * 此函式不會拋出錯誤，而是回傳布林值表示是否符合預期類型
 * 可用於需要條件邏輯而非斷言的場景
 *
 * @param T - 預期的類型 / Expected type
 * @param actual - 實際值 / Actual value
 * @param expression - 驗證條件，可為布林值或函式（可選）/ Validation condition, can be boolean or function (optional)
 * @param message - 自訂錯誤訊息（可選）/ Custom error message (optional)
 * @returns 是否符合預期類型 / Whether it matches the expected type
 *
 * @example
 * // 使用 typeNarrowed - 回傳布林值
 * if (typeNarrowed<string>(value, typeof value === 'string')) {
 *     console.log(value.length);
 * }
 */
function typeNarrowed(actual, expression = true, message) {
  expression = _handleExpression(actual, expression);
  if (expression !== true) {
    expression = false;
  }
  return expression;
}

exports._handleExpression = _handleExpression;
exports.default = typePredicates;
exports.typeNarrowed = typeNarrowed;
exports.typePredicates = typePredicates;
//# sourceMappingURL=index.cjs.development.cjs.map
