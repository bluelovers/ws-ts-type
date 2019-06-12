/**
 * Created by user on 2019/6/12.
 */
import { ITSLengthOf, ITSValueOfMember } from '../../lib/helper/infer';
export declare let arr: readonly [1, 2, 3];
export declare let len: ITSLengthOf<typeof arr>;
export declare let len2: ITSValueOfMember<typeof arr, 'length'>;
export declare let a0: ITSValueOfMember<typeof arr, 0>;
export declare let a1: ITSValueOfMember<typeof arr, 1>;
export declare let a3: ITSValueOfMember<typeof arr, 2>;
