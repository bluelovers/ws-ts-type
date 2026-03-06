"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
});

var e = require("assert");

function _handleExpression(e, t = !0) {
  return null != t || (t = !0), "function" == typeof t && (t = !!t(e)), t;
}

function typePredicates(t, r = !0, s, n) {
  if (!0 !== (r = _handleExpression(t, r)) && !0 !== n) throw new e.AssertionError({
    message: null != s ? s : `actual ${t} not as expected`,
    actual: t,
    expected: r,
    operator: "typePredicates"
  });
}

exports._handleExpression = _handleExpression, exports.default = typePredicates, 
exports.typeNarrowed = function typeNarrowed(e, t = !0, r) {
  return !0 !== (t = _handleExpression(e, t)) && (t = !1), t;
}, exports.typePredicates = typePredicates;
//# sourceMappingURL=index.cjs.production.min.cjs.map
