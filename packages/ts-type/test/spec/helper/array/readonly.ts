import { ITSToWriteableAArray, ITSToReadonlyArray } from '../../../../lib/helper/array/readonly';

export let result = (() =>
{
	type A1 = readonly [1, 2, 3]
	type A2 = [1, 2, 3]

	let a11: ITSToReadonlyArray<A1>
	let a12: ITSToWriteableAArray<A1>

	let a21: ITSToReadonlyArray<A2>
	let a22: ITSToWriteableAArray<A2>

	return {
		a11,
		a12,
		a21,
		a22,
	}

})();
