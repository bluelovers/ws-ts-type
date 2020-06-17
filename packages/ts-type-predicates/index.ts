import { AssertionError } from 'assert';

/**
 * use asserts for make type predicates work
 *
 * @see https://www.typescriptlang.org/docs/handbook/advanced-types.html#using-type-predicates
 * @see https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-7.html#assertion-functions
 */
export function typePredicates<T, P = any>(actual: T | P, expression : any | ((actual: T | P) => any) = true, message?: string): asserts actual is T
{
	if (typeof expression === 'function')
	{
		expression = expression(actual);
	}

	if (!expression)
	{
		throw new AssertionError({
			message: message ?? `actual ${actual} not as expected`,
			actual,
			expected: expression,
		})
	}

	return expression
}

export default typePredicates;
