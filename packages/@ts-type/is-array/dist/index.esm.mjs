import { AssertionError as r } from "assert";

function isArray(r) {
  return Array.isArray(r);
}

function typePredicatesAsWriteableArray(r) {}

function typePredicatesAsReadonlyArray(r) {}

function isArrayPredicates(a, e) {
  const t = Array.isArray(a);
  if (!t) throw new r({
    message: null != e ? e : `actual ${a} not as expected`,
    actual: a,
    expected: t,
    operator: "fail"
  });
}

export { isArray as default, isArray, isArray as isArrayNarrowed, isArrayPredicates, typePredicatesAsReadonlyArray, typePredicatesAsWriteableArray };
//# sourceMappingURL=index.esm.mjs.map
