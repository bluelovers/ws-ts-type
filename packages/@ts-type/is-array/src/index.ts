import { ITSArrayListMaybeReadonly } from 'ts-type/lib/type/base';
import { AssertionError } from 'assert';
import { ITSToReadonlyArray, ITSToWriteableArray } from 'ts-type/lib/helper/array/readonly';

/**
 * 擴展 ArrayConstructor.isArray 方法，支援更精確的類型斷言
 * Extend ArrayConstructor.isArray method for more precise type predicate
 *
 * 允許在運行時檢查值是否為陣列，並在編譯時保留原始陣列類型
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
		 */
		isArray<T extends ITSArrayListMaybeReadonly<any>>(arg: T | unknown): arg is T
	}
}

/**
 * 檢查值是否為陣列（類型斷言版本）
 * Check if value is an array (type predicate version)
 *
 * @param arg - 要檢查的值 / Value to check
 * @returns 是否為輸入類型的類型斷言 / Type predicate of input type
 */
export function isArray<T extends ITSArrayListMaybeReadonly<any>>(arg: T | unknown): arg is T
{
	return Array.isArray(arg)
}

/**
 * 斷言值為可變陣列（不包含 readonly 屬性）
 * Assert value as writable array (without readonly attribute)
 *
 * @param value - 要斷言的值 / Value to assert
 * @throws 當值不是陣列時拋出錯誤 / Throws error when value is not an array
 */
// @ts-ignore
export function typePredicatesAsWriteableArray<T extends ITSArrayListMaybeReadonly<any>>(value: T): asserts value is ITSToWriteableArray<T>
{

}

/**
 * 斷言值為唯讀陣列
 * Assert value as readonly array
 *
 * @param value - 要斷言的值 / Value to assert
 * @throws 當值不是陣列時拋出錯誤 / Throws error when value is not an array
 */
// @ts-ignore
export function typePredicatesAsReadonlyArray<T extends ITSArrayListMaybeReadonly<any>>(value: T): asserts value is ITSToReadonlyArray<T>
{

}

/**
 * 斷言並驗證值為陣列，否則拋出錯誤
 * Assert and validate that value is an array, otherwise throw error
 *
 * @param actual - 要驗證的值 / Value to validate
 * @param message - 自訂錯誤訊息（可選）/ Custom error message (optional)
 * @throws 當值不是陣列時拋出 AssertionError / Throws AssertionError when value is not an array
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
		})
	}
}

export { isArray as isArrayNarrowed }

export default isArray
