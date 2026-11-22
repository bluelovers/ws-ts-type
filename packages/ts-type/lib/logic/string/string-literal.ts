/**
 * Internal String Literal Logic Utilities
 */

/**
 * 檢測 T 是否為聯合類型
 *
 * @internal
 *
 * @example
 * type Test1 = IsAUnion<'a' | 'b'>;
 * // type Test1 = true
 *
 * @example
 * type Test2 = IsAUnion<'a'>;
 * // type Test2 = false
 */
export type ITSLogic_IsUnion<T, Y = true, N = false, U = T> = U extends any
	? ([T] extends [U] ? N : Y)
	: never;

/**
 * 檢測 T 是否為單一字串字面量
 *
 * @internal
 *
 * @example
 * type Test1 = IsASingleStringLiteral<'hello'>;
 * // type Test1 = true
 *
 * @example
 * type Test2 = IsASingleStringLiteral<'a' | 'b'>;
 * // type Test2 = false
 *
 * @example
 * type Test3 = IsASingleStringLiteral<string>;
 * // type Test3 = false
 */
export type ITSLogic_IsSingleStringLiteral<
	T extends string,
	Y = true,
	N = false
> = string extends T ? N : [T] extends [never] ? N : ITSLogic_IsUnion<T, N, Y>;

export type ITSLogic_IsStringLiteral<T> =
	T extends string
		? string extends T
			? false
			: true
		: false;
