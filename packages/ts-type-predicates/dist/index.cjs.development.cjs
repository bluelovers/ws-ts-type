'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var assert = require('assert');

function _handleExpression(actual, expression = true) {
  var _expression;

  (_expression = expression) !== null && _expression !== void 0 ? _expression : expression = true;

  if (typeof expression === 'function') {
    expression = !!expression(actual);
  }

  return expression;
}
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
function typeNarrowed(actual, expression = true, message) {
  expression = _handleExpression(actual, expression);

  if (expression !== true) {
    expression = false;
  }

  return expression;
}

exports._handleExpression = _handleExpression;
exports["default"] = typePredicates;
exports.typeNarrowed = typeNarrowed;
exports.typePredicates = typePredicates;
//# sourceMappingURL=index.cjs.development.cjs.map
