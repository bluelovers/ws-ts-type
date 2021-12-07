'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var assert = require('assert');

function typePredicates(actual, expression = true, message, ignoreExpression) {
  var _expression;

  (_expression = expression) !== null && _expression !== void 0 ? _expression : expression = true;

  if (typeof expression === 'function') {
    expression = !!expression(actual);
  }

  if (expression !== true && ignoreExpression !== true) {
    throw new assert.AssertionError({
      message: message !== null && message !== void 0 ? message : `actual ${actual} not as expected`,
      actual,
      expected: expression
    });
  }
}
function typeNarrowed(actual, expression = true, message) {
  var _expression2;

  (_expression2 = expression) !== null && _expression2 !== void 0 ? _expression2 : expression = true;

  if (typeof expression === 'function') {
    expression = !!expression(actual);
  }

  if (expression !== true) {
    expression = false;
  }

  return expression;
}

exports["default"] = typePredicates;
exports.typeNarrowed = typeNarrowed;
exports.typePredicates = typePredicates;
//# sourceMappingURL=index.cjs.development.cjs.map
