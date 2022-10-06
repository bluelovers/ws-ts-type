import { AssertionError } from 'assert';

export function _handleExpression<T, P = any>(actual: T | P, expression: boolean | ((actual: T | P) => any) = true)
{
	expression ??= true;

	if (typeof expression === 'function')
	{
		expression = !!expression(actual);
	}

	return expression
}

/**
 * use asserts for make type predicates work
 *
 * @see https://www.typescriptlang.org/docs/handbook/advanced-types.html#using-type-predicates
 * @see https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-7.html#assertion-functions
 */
export function typePredicates<T, P = any>(actual: T | P, expression : boolean | ((actual: T | P) => any) = true, message?: string, ignoreExpression?: boolean): asserts actual is T
{
	expression = _handleExpression(actual, expression);

	if (expression !== true && ignoreExpression !== true)
	{
		throw new AssertionError({
			message: message ?? `actual ${actual} not as expected`,
			actual,
			expected: expression,
			operator: 'typePredicates',
		})
	}
}

export function typeNarrowed<T, P = any>(actual: T | P, expression : boolean | ((actual: T | P) => any) = true, message?: string): actual is T
{
	expression = _handleExpression(actual, expression);

	if (expression !== true)
	{
		expression = false;
	}

	return expression
}

export default typePredicates;
