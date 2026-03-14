"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
});

var r = require("assert");

function isArray(r) {
  return Array.isArray(r);
}

exports.default = isArray, exports.isArray = isArray, exports.isArrayNarrowed = isArray, 
exports.isArrayPredicates = function isArrayPredicates(e, t) {
  const a = Array.isArray(e);
  if (!a) throw new r.AssertionError({
    message: null != t ? t : `actual ${e} not as expected`,
    actual: e,
    expected: a,
    operator: "fail"
  });
  return a;
}, exports.typePredicatesAsReadonlyArray = function typePredicatesAsReadonlyArray(r) {}, 
exports.typePredicatesAsWriteableArray = function typePredicatesAsWriteableArray(r) {};
//# sourceMappingURL=index.cjs.production.min.cjs.map
