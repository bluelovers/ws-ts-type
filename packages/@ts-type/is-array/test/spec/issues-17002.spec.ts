import { isArray } from '../../src/index';
import { ITSLogicIsAny } from 'ts-type/lib/index';

/**
 * @see https://github.com/microsoft/TypeScript/issues/17002
 */
declare interface T
{
	foo: string;
}

const immutable: T | ReadonlyArray<T> = [];

if (isArray(immutable))
{
	const x = immutable; // Any[]  - Should be ReadonlyArray<T>

	// @ts-expect-error
	const yes: ITSLogicIsAny<typeof x> = true;
	const no: ITSLogicIsAny<typeof x> = false;
}
