import { ITSToWriteableArray, ITSToReadonlyArray } from '../../../../lib/helper/array/readonly';
import { expectType, printType } from 'tsd';

export let result = (() =>
{
	type A1 = readonly [1, 2, 3]
	type A2 = [1, 2, 3]

	let a11: ITSToReadonlyArray<A1>
	let a12: ITSToWriteableArray<A1>

	let a21: ITSToReadonlyArray<A2>
	let a22: ITSToWriteableArray<A2>

	expectType<A1>(a11);
	expectType<A2>(a12);

	expectType<A1>(a21);
	expectType<A2>(a22);

	return {
		a11,
		a12,
		a21,
		a22,
	}

})();
