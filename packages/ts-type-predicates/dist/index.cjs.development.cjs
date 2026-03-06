'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var assert = require('assert');

/**
 * 處理錶達式，回傳布林值結果
 * Handle expression and return boolean result
 *
 * @param actual - 實際值 / Actual value
 * @param expression - 錶達式，可為布林值或函式 / Expression, can be boolean or function
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
 * @param actual - 實際值 / Actual value
 * @param expression - 斷言條件，可為布林值或函式 / Assertion condition, can be boolean or function
 * @param message - 自訂錯誤訊息（可選）/ Custom error message (optional)
 * @param ignoreExpression - 是否忽略錶達式結果（可選）/ Whether to ignore expression result (optional)
 * @throws 當錶達式結果為 false 時拋出 AssertionError / Throws AssertionError when expression is false
 * @see https://www.typescriptlang.org/docs/handbook/advanced-types.html#using-type-predicates
 * @see https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-7.html#assertion-functions
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
}
/**
 * 類型收窄函式，回傳類型斷言結果
 * Type narrowing function, returns type predicate result
 *
 * 此函式不會拋出錯誤，而是回傳布林值表示是否符合預期類型
 * 可用於需要條件邏輯而非斷言的場景
 *
 * @param actual - 實際值 / Actual value
 * @param expression - 驗證條件，可為布林值或函式 / Validation condition, can be boolean or function
 * @param message - 自訂錯誤訊息（可選）/ Custom error message (optional)
 * @returns 是否符合預期類型 / Whether it matches the expected type
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
