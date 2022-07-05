import { AssertionError as e } from "assert";

function typePredicates(t, a = !0, r, o) {
  var n;
  if (null !== (n = a) && void 0 !== n || (a = !0), "function" == typeof a && (a = !!a(t)), 
  !0 !== a && !0 !== o) throw new e({
    message: null != r ? r : `actual ${t} not as expected`,
    actual: t,
    expected: a
  });
}

function typeNarrowed(e, t = !0, a) {
  var r;
  return null !== (r = t) && void 0 !== r || (t = !0), "function" == typeof t && (t = !!t(e)), 
  !0 !== t && (t = !1), t;
}

export { typePredicates as default, typeNarrowed, typePredicates };
//# sourceMappingURL=index.esm.mjs.map
