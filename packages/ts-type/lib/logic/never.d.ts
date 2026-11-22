/**
 * 檢測類型是否為 never
 * Detect if a type is never
 *
 * 利用 never 是所有類型的子類型特性來檢測
 * Uses the fact that never is a subtype of all types
 *
 * @example
 * type Test1 = ITSLogicIsNever<never>;
 * // type Test1 = true
 *
 * @example
 * type Test2 = ITSLogicIsNever<string>;
 * // type Test2 = false
 */
export type ITSLogicIsNever<T, Y = true, N = false> = [T] extends [never] ? Y : N;
