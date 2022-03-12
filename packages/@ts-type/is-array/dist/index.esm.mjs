import { AssertionError } from 'assert';

function isArray(arg) {
  return Array.isArray(arg);
}
function typePredicatesAsWriteableArray(value) {}
function typePredicatesAsReadonlyArray(value) {}
function isArrayPredicates(actual, message) {
  const expression = Array.isArray(actual);

  if (!expression) {
    throw new AssertionError({
      message: message !== null && message !== void 0 ? message : `actual ${actual} not as expected`,
      actual,
      expected: expression,
      operator: 'fail'
    });
  }
}

export { isArray as default, isArray, isArray as isArrayNarrowed, isArrayPredicates, typePredicatesAsReadonlyArray, typePredicatesAsWriteableArray };
//# sourceMappingURL=index.esm.mjs.map
