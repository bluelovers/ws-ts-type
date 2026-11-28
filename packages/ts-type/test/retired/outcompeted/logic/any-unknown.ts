/**
 * 檢測型別是否為 unknown
 *
 * 需 `[unknown] extends [T]` 與 `[T] extends [unknown]` 同時成立；
 * 以 tuple 包覆使 union 以整體判定、不分佈 (Distributive)。
 * any 與 unknown 在雙向皆可賦值 (Assignable)，故 any 亦判定為 true——
 * 需排除 any 時改用 ITSLogic_IsStrictlyUnknown
 *
 * @example
 * type Test1 = ITSLogic_IsUnknown001<unknown>;
 * // type Test1 = true
 *
 * @example
 * type Test2 = ITSLogic_IsUnknown001<any>;
 * // type Test2 = true
 */
export type ITSLogic_IsUnknown001<T, Y = true, N = false> = [unknown] extends [T]
	? [T] extends [unknown]
		? Y
		: N
	: N;

/**
 * 檢測型別是否為 unknown（嚴格版，排除 any）
 *
 * 先以 `0 extends (1 & T)`——與 ITSLogicIsAny 相同的 any 偵測——成立時直接回傳 N，
 * 故 any 不會被判定為 unknown；never 不符合 any 偵測，
 * 但因 `unknown extends never` 不成立而回傳 N，最終僅 unknown 成立；
 * 判定結果與 ITSLogic_IsUnknown 一致，差別僅在排除 any 的機制
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
