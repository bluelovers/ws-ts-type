export type ITSArrayListMaybeReadonly<T> = T[] | readonly T[];
export declare type ITSArrayListMaybeReadonly<T> = T[] | readonly T[];
export type ITSToReadonlyArray<T extends ITSArrayListMaybeReadonly<any>> = T extends [
	...infer R
] | readonly [
	...infer R
] ? readonly [
	...R
] : never;
export type ITSToWriteableAArray<T extends ITSArrayListMaybeReadonly<any>> = T extends [
	...infer R
] | readonly [
	...infer R
] ? [
	...R
] : never;
declare global {
	interface ArrayConstructor {
		isArray<T extends ITSArrayListMaybeReadonly<any>>(arg: T | unknown): arg is T;
	}
}
export declare function isArray<T extends ITSArrayListMaybeReadonly<any>>(arg: T | unknown): arg is T;
export declare function typePredicatesAsWriteableArray<T extends ITSArrayListMaybeReadonly<any>>(value: T): asserts value is ITSToWriteableAArray<T>;
export declare function typePredicatesAsReadonlyArray<T extends ITSArrayListMaybeReadonly<any>>(value: T): asserts value is ITSToReadonlyArray<T>;
export declare function isArrayPredicates<T extends ITSArrayListMaybeReadonly<any>>(actual: T | unknown, message?: string): asserts actual is T;
export default isArray;

export {
	isArray as isArrayNarrowed,
};

export {};
