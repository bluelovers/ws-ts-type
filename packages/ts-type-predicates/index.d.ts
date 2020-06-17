/**
 * use asserts for make type predicates work
 *
 * @see https://www.typescriptlang.org/docs/handbook/advanced-types.html#using-type-predicates
 * @see https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-7.html#assertion-functions
 */
export declare function typePredicates<T>(obj: any): asserts obj is T;
export default typePredicates;
