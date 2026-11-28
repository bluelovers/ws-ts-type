/**
 * any / unknown 型別判斷工具
 *
 * @see https://stackoverflow.com/questions/49927523/disallow-call-with-any/49928360#49928360
 */

/**
 * 檢測型別是否為 any
 *
 * 利用 any 與任何型別交叉 (Intersected) 都會得到 any 的特性來檢測
 *
 * @example
 * type Test1 = ITSLogicIsAny<any>;
 * // type Test1 = true
 *
 * @example
 * type Test2 = ITSLogicIsAny<string>;
 * // type Test2 = false
 */
export type ITSLogicIsAny<T, Y = true, N = false> = 0 extends (1 & T) ? Y : N

/**
 * 檢測型別是否不為 any
 *
 * 為 ITSLogicIsAny 的反轉判定：成立與不成立的回傳型別（Y / N）互換
 *
 * @example
 * type Test1 = ITSLogicNotAny<any>;
 * // type Test1 = false
 *
 * @example
 * type Test2 = ITSLogicNotAny<string>;
 * // type Test2 = true
 */
export type ITSLogicNotAny<T, Y = true, N = false> = ITSLogicIsAny<T, N, Y>

/**
 * 檢測型別是否為 unknown
 *
 * 需 `[unknown] extends [T]` 與 `[T] extends [unknown]` 同時成立；
 * 以 tuple 包覆使 union 以整體判定、不分佈 (Distributive)。
 * any 與 unknown 在雙向皆可賦值 (Assignable)，故 any 亦判定為 true——
 * 需排除 any 時改用 ITSLogic_IsStrictlyUnknown
 *
 * @example
 * type Test1 = ITSLogic_IsUnknown<unknown>;
 * // type Test1 = true
 *
 * @example
 * type Test2 = ITSLogic_IsUnknown<any>;
 * // type Test2 = true
 */
export type ITSLogic_IsUnknown<T, Y = true, N = false> = [unknown] extends [T]
	? [T] extends [unknown]
		? Y
		: N
	: N;

/**
 * 檢測型別是否為 unknown（以 `unknown extends T` 單向判定並排除 any）
 *
 * `[T] extends [null]` 為排除 any 的守衛 (Guard)：any 可賦值給 null，
 * 而通過 `unknown extends T` 的只有 unknown 與 any，故該守衛實際只會命中 any。
 * 與 ITSLogic_IsUnknown 的差異即在 any 回傳 false
 *
 * @example
 * type Test1 = ITSLogic_IsUnknown2<unknown>;
 * // type Test1 = true
 *
 * @example
 * type Test2 = ITSLogic_IsUnknown2<any>;
 * // type Test2 = false
 */
export type ITSLogic_IsUnknown2<T, Y = true, N = false> = unknown extends T
  ? [T] extends [null]
    ? N
    : Y
  : N;

/**
 * 檢測型別是否為 unknown（嚴格版，排除 any）
 *
 * 先以 `0 extends (1 & T)`——與 ITSLogicIsAny 相同的 any 偵測——成立時直接回傳 N，
 * 故 any 不會被判定為 unknown；never 不符合 any 偵測，
 * 但因 `unknown extends never` 不成立而回傳 N，最終僅 unknown 成立
 *
 * @example
 * type Test1 = ITSLogic_IsStrictlyUnknown<unknown>;
 * // type Test1 = true
 *
 * @example
 * type Test2 = ITSLogic_IsStrictlyUnknown<any>;
 * // type Test2 = false
 */
export type ITSLogic_IsStrictlyUnknown<T, Y = true, N = false> = 0 extends (1 & T)
	? N
	: unknown extends T
		? Y
		: N;
