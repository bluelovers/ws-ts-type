/**
 * any / unknown 型別判斷工具
 *
 * @see https://stackoverflow.com/questions/49927523/disallow-call-with-any/49928360#49928360
 */

import { ITSLogicIsNever } from './never';

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
 * 檢測型別是否為 unknown（以 `unknown extends T` 單向判定並排除 any）
 *
 * `[T] extends [null]` 為排除 any 的守衛 (Guard)：any 可賦值給 null，
 * 而通過 `unknown extends T` 的只有 unknown 與 any，故該守衛實際只會命中 any。
 * 與 ITSLogic_IsUnknown001 的差異即在 any 回傳 false；
 * 判定結果與 ITSLogic_IsStrictlyUnknown 完全一致，差別僅在排除 any 的機制
 * （此以 null 守衛，彼以 `0 extends (1 & T)` 偵測）
 *
 * @example
 * type Test1 = ITSLogic_IsUnknown<unknown>;
 * // type Test1 = true
 *
 * @example
 * type Test2 = ITSLogic_IsUnknown<any>;
 * // type Test2 = false
 */
export type ITSLogic_IsUnknown<T, Y = true, N = false> = unknown extends T
  ? [T] extends [null]
    ? N
    : Y
  : N;

/**
 * 檢測型別是否為 any 或 unknown
 *
 * @example
 * type Test1 = ITSLogic_IsAnyOrUnknown<any>;
 * // type Test1 = true
 *
 * @example
 * type Test2 = ITSLogic_IsAnyOrUnknown<string>;
 * // type Test2 = false
 */
export type ITSLogic_IsAnyOrUnknown<T, Y = true, N = false> = ITSLogicIsAny<T, Y, ITSLogic_IsUnknown<T, Y, N>>

/**
 * 檢測型別是否為 any、unknown 或 never
 *
 * @example
 * type Test1 = ITSLogic_IsAnyOrUnknownOrNever<never>;
 * // type Test1 = true
 *
 * @example
 * type Test2 = ITSLogic_IsAnyOrUnknownOrNever<string>;
 * // type Test2 = false
 */
export type ITSLogic_IsAnyOrUnknownOrNever<T, Y = true, N = false> = ITSLogicIsAny<T, Y, ITSLogic_IsUnknown<T, Y, ITSLogicIsNever<T, Y, N>>>
