(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('assert')) :
	typeof define === 'function' && define.amd ? define(['exports', 'assert'], factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.index = {}, global.assert));
})(this, (function (exports, assert) { 'use strict';

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

	Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=index.umd.development.cjs.map
