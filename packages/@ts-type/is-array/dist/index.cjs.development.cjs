'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var assert = require('assert');

function isArray(arg) {
  return Array.isArray(arg);
}
function typePredicatesAsWriteableArray(value) {}
function typePredicatesAsReadonlyArray(value) {}
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

exports["default"] = isArray;
exports.isArray = isArray;
exports.isArrayNarrowed = isArray;
exports.isArrayPredicates = isArrayPredicates;
exports.typePredicatesAsReadonlyArray = typePredicatesAsReadonlyArray;
exports.typePredicatesAsWriteableArray = typePredicatesAsWriteableArray;
//# sourceMappingURL=index.cjs.development.cjs.map
