import { ITSValueOfArray, ITSValueOfArrayLike } from '../../../lib/index';

export let a01 = [1, 2];
export let a02 = [1, 2] as const;
export let a03: ArrayLike<3|4>;
export let a04 = [5 as const, 6 as const];

export let v01: ITSValueOfArray<typeof a01>;
export let v02: ITSValueOfArray<typeof a02>;
// @ts-expect-error
export let v03: ITSValueOfArray<typeof a03>;
export let v04: ITSValueOfArray<typeof a04>;

export let v011: ITSValueOfArrayLike<typeof a01>;
export let v021: ITSValueOfArrayLike<typeof a02>;
export let v031: ITSValueOfArrayLike<typeof a03>;
export let v041: ITSValueOfArrayLike<typeof a04>;

export let _ = 1 as const;

export default (() => {

	let v01: ITSValueOfArray<typeof a01>;
	let v02: ITSValueOfArray<typeof a02>;
// @ts-expect-error
	let v03: ITSValueOfArray<typeof a03>;
	let v04: ITSValueOfArray<typeof a04>;

	let v011: ITSValueOfArrayLike<typeof a01>;
	let v021: ITSValueOfArrayLike<typeof a02>;
	let v031: ITSValueOfArrayLike<typeof a03>;
	let v041: ITSValueOfArrayLike<typeof a04>;

	return {
		v01,
		v02,
		v03,
		v04,

		v011,
		v021,
		v031,
		v041,
	}
})();
