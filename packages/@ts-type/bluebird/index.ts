import Bluebird from 'bluebird';

import { ITSKeyOfRecordExtractToKey } from 'ts-type/lib/helper/record/pick-type';
import { ITSAnyFunction } from 'ts-type/lib/type/base';
import { ITSAwaitedReturnType } from 'ts-type/lib/helper/promise';

/**
 * Bluebird Promise 類型的別名
 * Bluebird Promise type alias
 *
 * @typeParam T - Promise 解決值的類型 / Type of the resolved value
 */
export type IBluebird<T> = Bluebird<T>;

/**
 * Bluebird Promise 類型的別名（較短名稱）
 * Bluebird Promise type alias (shorter name)
 *
 * @typeParam T - Promise 解決值的類型 / Type of the resolved value
 */
export type ITSBluebird<T> = Bluebird<T>;

/**
 * 將函式包裝為回傳 Bluebird Promise 的函式
 * Wrap a function to return Bluebird Promise
 *
 * @typeParam T - 原函式類型 / Original function type
 * @example
 * function add(a: number, b: number): number { return a + b; }
 * const bluebirdAdd = wrapFunctionBluebird(add);
 * // bluebirdAdd(1, 2) returns Bluebird<number>
 */
export type ITSWrapFunctionBluebird<T extends (...args: any[]) => any> =
	(...args: Parameters<T>) => IBluebird<ITSAwaitedReturnType<T>>;

/**
 * 將物件的所有函式屬性轉換為 Bluebird Promise 版本
 * Convert all function properties of an object to Bluebird Promise version
 *
 * @typeParam T - 目標物件類型 / Target object type
 * @typeParam K - 提取的函式鍵名 / Extracted function keys
 */
export type ITSBluebirdPromisifyAll<T extends {
	[p: string | symbol]: ITSAnyFunction
}, K extends ITSKeyOfRecordExtractToKey<T, Function> = ITSKeyOfRecordExtractToKey<T, Function>> = Omit<T, K> & {
	[P in K]: (...argv: Parameters<T[P]>) => IBluebird<ITSAwaitedReturnType<T[P]>>
}

/**
 * 將物件的所有函式屬性轉換為標準 Promise 版本（非 Bluebird）
 * Convert all function properties of an object to standard Promise version (non-Bluebird)
 *
 * @typeParam T - 目標物件類型 / Target object type
 * @typeParam K - 提取的函式鍵名 / Extracted function keys
 */
export type ITSPromisifyAll<T extends {
	[p: string | symbol]: ITSAnyFunction
}, K extends ITSKeyOfRecordExtractToKey<T, Function> = ITSKeyOfRecordExtractToKey<T, Function>> = Omit<T, K> & {
	[P in K]: (...argv: Parameters<T[P]>) => Promise<ITSAwaitedReturnType<T[P]>>
}

/**
 * 將元組類型轉換為 Bluebird Inspection 類型的元組
 * Convert tuple type to tuple of Bluebird Inspection types
 *
 * 用於處理 Promise.allSettled 的結果類型
 * Used for handling Promise.allSettled result types
 *
 * @typeParam T - 輸入的元組類型 / Input tuple type
 */
export type ITSResultArrayToBluebirdInspection<T> = T extends [infer T1, infer T2, infer T3, infer T4, infer T5]
	? [Bluebird.Inspection<T1>, Bluebird.Inspection<T2>, Bluebird.Inspection<T3>, Bluebird.Inspection<T4>, Bluebird.Inspection<T5>]
	: T extends [infer T1, infer T2, infer T3, infer T4]
		? [Bluebird.Inspection<T1>, Bluebird.Inspection<T2>, Bluebird.Inspection<T3>, Bluebird.Inspection<T4>]
		: T extends [infer T1, infer T2, infer T3]
			? [Bluebird.Inspection<T1>, Bluebird.Inspection<T2>, Bluebird.Inspection<T3>]
			: T extends [infer T1, infer T2] ? [Bluebird.Inspection<T1>, Bluebird.Inspection<T2>] : T extends [infer T1]
				? [Bluebird.Inspection<T1>]
				: T extends (infer R)[] ? Bluebird.Inspection<R>[] : never;
