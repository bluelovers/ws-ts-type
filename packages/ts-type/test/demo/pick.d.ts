/**
 * Created by user on 2019/5/30.
 */
import { ITSPartialPick, ITSPartialWith, ITSPickExtra, ITSReadonlyToWriteableArray, ITSRequiredPick, ITSRequiredWith } from '../../lib/helper';
export interface I1 {
    a: string;
    b?: string;
    c: string;
}
export declare let a: ITSRequiredPick<I1, 'b'>;
export declare let b: ITSPartialPick<I1, 'a'>;
export declare let c: ITSPickExtra<I1, 'b', 'a'>;
export declare let d: ITSPartialWith<I1, 'a'>;
export declare let f: ITSRequiredWith<I1, 'a'>;
export declare let arr1: readonly string[];
export declare let arr2: ITSReadonlyToWriteableArray<typeof arr1>;
