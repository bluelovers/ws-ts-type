import { ITSArrayListMaybeReadonly } from 'ts-type/lib/type/base';
import { AssertionError } from 'assert';
import { ITSToReadonlyArray, ITSToWriteableAArray } from 'ts-type/lib/helper/array/readonly';

declare global
{
	interface ArrayConstructor
	{
		isArray<T extends ITSArrayListMaybeReadonly<any>>(arg: T | unknown): arg is T
	}
}

export function isArray<T extends ITSArrayListMaybeReadonly<any>>(arg: T | unknown): arg is T
{
	return Array.isArray(arg)
}

// @ts-ignore
export function typePredicatesAsWriteableArray<T extends ITSArrayListMaybeReadonly<any>>(value: T): asserts value is ITSToWriteableAArray<T>
{

}

// @ts-ignore
export function typePredicatesAsReadonlyArray<T extends ITSArrayListMaybeReadonly<any>>(value: T): asserts value is ITSToReadonlyArray<T>
{

}

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
