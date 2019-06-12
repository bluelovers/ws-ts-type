/**
 * Created by user on 2019/6/12.
 */
import { ITSLengthOf, ITSValueOfMember } from '../../lib/helper/infer';

export let arr = [1, 2, 3] as const;

export let len: ITSLengthOf<typeof arr> = 3;

export let len2: ITSValueOfMember<typeof arr, 'length'> = 3;

export let a0: ITSValueOfMember<typeof arr, 0> = 1;
export let a1: ITSValueOfMember<typeof arr, 1> = 2;
export let a3: ITSValueOfMember<typeof arr, 2> = 3;

