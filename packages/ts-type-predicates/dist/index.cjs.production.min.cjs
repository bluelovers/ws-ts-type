"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
});

var e = require("assert");

function _handleExpression(e, r = !0) {
  return null != r || (r = !0), "function" == typeof r && (r = !!r(e)), r;
}

function typePredicates(r, t = !0, s, n) {
  if (!0 !== (t = _handleExpression(r, t)) && !0 !== n) throw new e.AssertionError({
    message: null != s ? s : `actual ${r} not as expected`,
    actual: r,
    expected: t,
    operator: "typePredicates"
  });
  return t;
}

exports._handleExpression = _handleExpression, exports.default = typePredicates, 
exports.typeNarrowed = function typeNarrowed(e, r = !0, t) {
  return !0 !== (r = _handleExpression(e, r)) && (r = !1), r;
}, exports.typePredicates = typePredicates;
//# sourceMappingURL=index.cjs.production.min.cjs.map
