import { ITSEmptyRecord } from '../../type/record/empty';


/**
 * 檢查是否為空 Record
 *
 * 對於 Union 類型，會可能同時返回 true 或 false
 *
 * @example
 * ```ts
 * type R5 = ITSLogic_AnyOfIsEmptyRecord<Record<string, never> | { a: 1 }>;
 *
 * expectAssignable<R5>(true);
 * expectAssignable<R5>(false);
 * ```
 */
export type ITSLogic_AnyOfIsEmptyRecord<T, Y = true, N = false> = T extends ITSEmptyRecord ? Y : N

/**
 * 檢查是否為空 Record
 */
export type ITSLogic_IsEmptyRecord<T, Y = true, N = false> = [T] extends [ITSEmptyRecord] ? Y : N

/**
 * 檢查 Union 中的所有成員是否為空 Record
 */
export type ITSLogic_IsEmptyRecordUnionAll<T, Y = true, N = false> = [T] extends [never]
	? N
	: boolean extends ITSLogic_AnyOfIsEmptyRecord<T, Y, N>
		? N
		: ITSLogic_AnyOfIsEmptyRecord<T, Y, N>;

/**
 * 檢查是否為空對象
 *
 * true
 * - {}
 * - Pick<{ a: 1 }, never>
 *
 * false
 * - null
 * - undefined
 * - { a: 1 }
 * - Record<string, never> 需使用 {@link ITSLogic_IsEmptyObjectAndRecord} 來檢查
 *
 * 注意: 對於 `{ a: 1 } | {}` 會返回 true
 */
export type ITSLogic_IsEmptyObject<T, Y = true, N = false, N2 = N> = [T] extends [null | undefined]
	? N
	: [T] extends [object]
		? [keyof T] extends [never]
			? Y
			: N2
		: N;

/**
 * 對於 `{ a: 1 } | {}` 會同時返回 true 或 false => boolean
 */
type I_EachMemberEmptyObject<T, Y = true, N = false> = T extends null | undefined
	? N
	: T extends object
		? [keyof T] extends [never]
			? Y
			: N
		: N;

/**
 * 檢查 Union 所有成員是否為空對象
 *
 * @example
 * ```ts
 * type A = ITSLogic_IsEmptyObjectUnionAll<{ a: 1 } | {}>; // false
 * ```
 */
export type ITSLogic_IsEmptyObjectUnionAll<T, Y = true, N = false> = [T] extends [never]
	? N
	: boolean extends I_EachMemberEmptyObject<T, Y, N>
		? N
		: I_EachMemberEmptyObject<T, Y, N>;

/**
 * 與 ITSLogic_IsEmptyObject 的差異在於，會額外檢查是否為 Record<string, never>
 */
export type ITSLogic_IsEmptyObjectAndRecord<T, Y = true, N = false> = ITSLogic_IsEmptyObject<T, Y, N, ITSLogic_IsEmptyRecord<T, Y, N>>;
