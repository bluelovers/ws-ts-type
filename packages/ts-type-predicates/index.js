"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typePredicates = void 0;
const assert_1 = require("assert");
/**
 * use asserts for make type predicates work
 *
 * @see https://www.typescriptlang.org/docs/handbook/advanced-types.html#using-type-predicates
 * @see https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-7.html#assertion-functions
 */
function typePredicates(actual, expression = true, message) {
    if (typeof expression === 'function') {
        expression = !!expression(actual);
    }
    if (expression !== true) {
        throw new assert_1.AssertionError({
            message: message !== null && message !== void 0 ? message : `actual ${actual} not as expected`,
            actual,
            expected: expression,
        });
    }
}
exports.typePredicates = typePredicates;
exports.default = typePredicates;
//# sourceMappingURL=index.js.map