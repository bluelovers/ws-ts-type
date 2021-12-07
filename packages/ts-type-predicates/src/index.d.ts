/**
 * use asserts for make type predicates work
 *
 * @see https://www.typescriptlang.org/docs/handbook/advanced-types.html#using-type-predicates
 * @see https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-7.html#assertion-functions
 */
export declare function typePredicates<T, P = any>(actual: T | P, expression?: boolean | ((actual: T | P) => any), message?: string, ignoreExpression?: boolean): asserts actual is T;
export declare function typeNarrowed<T, P = any>(actual: T | P, expression?: boolean | ((actual: T | P) => any), message?: string): actual is T;
export default typePredicates;
