/// <reference types="node" />
import { ITSArrayListMaybeReadonly } from 'ts-type/lib/type/base';
import { AssertionError } from 'assert';
import { ITSToReadonlyArray, ITSToWriteableArray } from 'ts-type/lib/helper/array/readonly';

/**
 * 擴展 ArrayConstructor.isArray 方法，支援更精確的類型斷言
 * Extend ArrayConstructor.isArray method for more precise type predicate
 *
 * 允許在運行時檢查值是否為陣列，並在編譯時保留原始陣列類型
 * This extension allows runtime array checking while preserving the original array type at compile time
 *
 * ⚠️ 核心問題 / Core Problem:
 * 原版 TypeScript 的 Array.isArray 無法正確處理唯讀陣列
 * Original TypeScript's Array.isArray cannot correctly handle readonly arrays
 *
 * ```typescript
 * let arr: readonly number[] = [1, 2, 3];
 * if (Array.isArray(arr)) {
 *   // @ts-expect-error <== 失敗，此處的 arr 應該是 readonly 但是卻變成普通陣列
 *   // arr.push(4); // 錯誤：應該不能修改
 * }
 * // arr.push(5); // 錯誤：唯讀陣列不能修改
 * ```
 *
 * 使用此擴展可以正確保留唯讀陣列的類型
 * Using this extension correctly preserves readonly array types
 *
 * @example
 * ```typescript
 * // 使用 type import 避免運行時引用
 * // Use type import to avoid runtime import
 * import type * as _ from '@ts-type/is-array';
 *
 * const value: string | readonly string[] = ["hello"];
 * if (Array.isArray(value)) {
 *   // value 類型正確縮小為 readonly string[]
 *   // value type correctly narrowed to readonly string[]
 *   // value.push("test"); // 正確：編譯器會阻止修改
 * }
 * ```
 */
declare global
{
	interface ArrayConstructor
	{
		/**
		 * 檢查值是否為陣列，並返回類型斷言
		 * Check if value is an array and return type predicate
		 *
		 * @param arg - 要檢查的值 / Value to check
		 * @returns 是否為陣列的類型斷言 / Type predicate indicating if it's an array
		 *
		 * @example
		 * ```typescript
		 * function processData(data: string | string[]) {
		 *   if (Array.isArray(data)) {
		 *     // data is string[] here
		 *     return data.map(x => x.toUpperCase());
		 *   }
		 *   // data is string here
		 *   return [data.toUpperCase()];
		 * }
		 * ```
		 */
		isArray<T extends ITSArrayListMaybeReadonly<unknown>>(arg: T): arg is T;
		isArray<T extends ITSArrayListMaybeReadonly<any>>(arg: T | unknown): arg is T;
	}
}

/**
 * 檢查值是否為陣列（類型斷言版本）
 * Check if value is an array (type predicate version)
 *
 * 此函數是 Array.isArray 的類型安全包裝器，在運行時執行檢查並在編譯時提供類型縮小
 * This function is a type-safe wrapper for Array.isArray that performs runtime check and provides type narrowing at compile time
 *
 * ⚠️ 核心問題 / Core Problem:
 * 原版 TypeScript 的 Array.isArray 無法正確處理唯讀陣列，會將 readonly 陣列縮小為普通陣列
 * Original TypeScript's Array.isArray cannot correctly handle readonly arrays, it narrows readonly arrays to regular arrays
 *
 * @param arg - 要檢查的值 / Value to check
 * @returns 是否為輸入類型的類型斷言 / Type predicate of input type
 *
 * @example
 * ```typescript
 * import { isArray } from '@ts-type/is-array';
 *
 * // 處理唯讀陣列 - 正確保留唯讀類型
 * // Handle readonly array - correctly preserves readonly type
 * function processReadonly(value: string | readonly string[]) {
 *   if (isArray(value)) {
 *     // value 類型正確縮小為 readonly string[]
 *     // value type correctly narrowed to readonly string[]
 *     // value.push("test"); // 正確：編譯器會阻止修改
 *   }
 * }
 *
 * // 處理可變陣列
 * // Handle writable array
 * function processValue(value: string | string[]) {
 *   if (isArray(value)) {
 *     // value 類型縮小為 string[]
 *     // value type narrowed to string[]
 *     console.log(value.join(', '));
 *   } else {
 *     // value 類型為 string
 *     // value type is string
 *     console.log(value.toUpperCase());
 *   }
 * }
 * ```
 *
 * @see https://github.com/microsoft/TypeScript/issues/17002#issuecomment-493400187
 */
export function isArray<T extends ITSArrayListMaybeReadonly<unknown>>(arg: T): arg is T
export function isArray<T extends ITSArrayListMaybeReadonly<any>>(arg: T | unknown): arg is T;
export function isArray<T extends ITSArrayListMaybeReadonly<any>>(arg: T | unknown): arg is T
{
	return Array.isArray(arg);
}

/**
 * 斷言值為可變陣列（不包含 readonly 屬性）
 * Assert value as writable array (without readonly attribute)
 *
 * 將唯讀陣列轉換為可變陣列類型，移除 readonly 修飾符
 * Converts readonly array to writable array type by removing readonly modifier
 *
 * 此函數僅用於類型斷言，運行時不執行任何操作，與 typePredicates 概念相同
 * This function is only for type assertion, no operation at runtime, same concept as typePredicates
 *
 * @param value - 要斷言的值 / Value to assert
 *
 * @example
 * ```typescript
 * import { typePredicatesAsWriteableArray } from '@ts-type/is-array';
 *
 * const readonlyArray: readonly string[] = ['a', 'b', 'c'];
 *
 * typePredicatesAsWriteableArray(readonlyArray);
 * // readonlyArray 現在類型為 string[]
 * // readonlyArray now has type string[]
 * readonlyArray.push('d'); // 合法 / valid
 * ```
 *
 * @note 此函數使用 assert 語法，需要 TypeScript 3.7+ / This function uses assert syntax, requires TypeScript 3.7+
 * @note 由於類型條件的復雜性，需要 @ts-ignore 註釋 / Due to complex type conditions, @ts-ignore is required
 * @note 函數主體為空，因為類型斷言僅在編譯時作用，與 typePredicates 概念相同
 *       Function body is empty because type assertion only works at compile time, same concept as typePredicates
 */
// @ts-ignore - 類型斷言的複雜性導致 TypeScript 無法正確推斷 / Type assertion complexity causes TypeScript inference issue
export function typePredicatesAsWriteableArray<T extends ITSArrayListMaybeReadonly<any>>(value: T): asserts value is ITSToWriteableArray<T>
{
	// 函數主體為空，類型斷言僅在編譯時作用，與 typePredicates 概念相同
	// Function body is empty, type assertion only works at compile time, same concept as typePredicates
}

/**
 * 斷言值為唯讀陣列
 * Assert value as readonly array
 *
 * 將可變陣列轉換為唯讀陣列類型，新增 readonly 修飾符
 * Converts writable array to readonly array type by adding readonly modifier
 *
 * 此函數僅用於類型斷言，運行時不執行任何操作，與 typePredicates 概念相同
 * This function is only for type assertion, no operation at runtime, same concept as typePredicates
 *
 * @param value - 要斷言的值 / Value to assert
 *
 * @example
 * ```typescript
 * import { typePredicatesAsReadonlyArray } from '@ts-type/is-array';
 *
 * const writableArray: string[] = ['a', 'b', 'c'];
 *
 * typePredicatesAsReadonlyArray(writableArray);
 * // writableArray 現在類型為 readonly string[]
 * // writableArray now has type readonly string[]
 * ```
 *
 * @note 此函數使用 assert 語法，需要 TypeScript 3.7+ / This function uses assert syntax, requires TypeScript 3.7+
 * @note 由於類型條件的復雜性，需要 @ts-ignore 註釋 / Due to complex type conditions, @ts-ignore is required
 * @note 函數主體為空，因為類型斷言僅在編譯時作用，與 typePredicates 概念相同
 *       Function body is empty because type assertion only works at compile time, same concept as typePredicates
 */
// @ts-ignore - 類型斷言的複雜性導致 TypeScript 無法正確推斷 / Type assertion complexity causes TypeScript inference issue
export function typePredicatesAsReadonlyArray<T extends ITSArrayListMaybeReadonly<any>>(value: T): asserts value is ITSToReadonlyArray<T>
{
	// 函數主體為空，類型斷言僅在編譯時作用，與 typePredicates 概念相同
	// Function body is empty, type assertion only works at compile time, same concept as typePredicates
}

/**
 * 斷言並驗證值為陣列，否則拋出錯誤
 * Assert and validate that value is an array, otherwise throw error
 *
 * 此函數會在運行時驗證值是否為陣列，如果不是則拋出 AssertionError
 * This function validates whether the value is an array at runtime, throwing AssertionError if not
 *
 * @param actual - 要驗證的值 / Value to validate
 * @param message - 自訂錯誤訊息（可選）/ Custom error message (optional)
 * @throws 當值不是陣列時拋出 AssertionError / Throws AssertionError when value is not an array
 *
 * @example
 * ```typescript
 * import { isArrayPredicates } from '@ts-type/is-array';
 *
 * function processData(data: unknown) {
 *   // 這會斷言 data 為陣列，如果失敗則拋出錯誤
 *   // This asserts data as array, throws error if failed
 *   isArrayPredicates(data);
 *
 *   // data 現在被認為是陣列類型
 *   // data is now considered as array type
 *   console.log(data.length);
 * }
 *
 * // 使用自訂錯誤訊息
 * // Using custom error message
 * isArrayPredicates(someValue, 'Expected an array but got something else');
 * ```
 *
 * @see https://www.typescriptlang.org/docs/handbook/2/functions.html#assertion-functions
 */
export function isArrayPredicates<T extends ITSArrayListMaybeReadonly<any>>(actual: T | unknown, message?: string): asserts actual is T
{
	const expression = Array.isArray(actual);
	if (!expression)
	{
		throw new AssertionError({
			message: message ?? `actual ${actual} not as expected`,
			actual,
			expected: expression,
			operator: 'fail',
		});
	}
	// @ts-ignore
	return expression
}

/**
 * 檢查值是否為陣列（類型縮小版本）
 * Check if value is an array (type narrowing version)
 *
 * isArray 的別名，提供類型縮小功能
 * Alias for isArray that provides type narrowing functionality
 *
 * @see isArray
 */
export { isArray as isArrayNarrowed }

/**
 * 預設導出：檢查值是否為陣列
 * Default export: Check if value is an array
 *
 * @see isArray
 */
export default isArray
