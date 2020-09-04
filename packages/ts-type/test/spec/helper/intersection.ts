import { ITSUnionToIntersection } from '../../../lib/helper/intersection';

type FunctionUnion = (() => void) | ((p: string) => void);
type FunctionIntersection = (() => void) & ((p: string) => void);

export const r1 = (() => {

	type SynthesizedFunctionIntersection = ITSUnionToIntersection<FunctionUnion>

	type Result = Extract<FunctionIntersection, SynthesizedFunctionIntersection>


	let s: FunctionUnion;

	let a: SynthesizedFunctionIntersection;
	let b: Result;
	let b2: Extract<FunctionUnion, SynthesizedFunctionIntersection>;

	let c: ITSUnionToIntersection<{a: 1} | {b?: 2}>


	return {
		s,
		a,
		b,
		b2,
		c,
	}
})();
