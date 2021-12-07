import { AssertionError } from 'assert';

function typePredicates(actual, expression = true, message, ignoreExpression) {
  var _expression;

  (_expression = expression) !== null && _expression !== void 0 ? _expression : expression = true;

  if (typeof expression === 'function') {
    expression = !!expression(actual);
  }

  if (expression !== true && ignoreExpression !== true) {
    throw new AssertionError({
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

export { typePredicates as default, typeNarrowed, typePredicates };
//# sourceMappingURL=index.esm.mjs.map
