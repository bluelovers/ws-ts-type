import { AssertionError as e } from "assert";

function _handleExpression(e, t = !0) {
  var r;
  return null !== (r = t) && void 0 !== r || (t = !0), "function" == typeof t && (t = !!t(e)), 
  t;
}

function typePredicates(t, r = !0, n, a) {
  if (!0 !== (r = _handleExpression(t, r)) && !0 !== a) throw new e({
    message: null != n ? n : `actual ${t} not as expected`,
    actual: t,
    expected: r,
    operator: "typePredicates"
  });
}

function typeNarrowed(e, t = !0, r) {
  return !0 !== (t = _handleExpression(e, t)) && (t = !1), t;
}

export { _handleExpression, typePredicates as default, typeNarrowed, typePredicates };
//# sourceMappingURL=index.esm.mjs.map
