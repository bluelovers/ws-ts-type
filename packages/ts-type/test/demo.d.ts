/**
 * Created by user on 2018/11/15/015.
 */
import { ITSOverwrite, ITSOverwriteReturnType, ITSUnpackedReturnType } from '..';
import { ITSWrapFunctionBluebird, ITSWrapFunctionPromise } from '../index';
export declare function f(a: number): number;
export declare let c: ITSOverwriteReturnType<typeof f, string>;
export interface A1 {
    s: string;
}
export declare type A2 = ITSOverwrite<A1, {
    s: number;
}>;
export declare let a2: A2;
export declare function p1(a: number): Promise<number>;
export declare let p1_v: ITSUnpackedReturnType<typeof p1>;
export declare let p2: ITSWrapFunctionPromise<typeof p1>;
export declare let p3: ITSWrapFunctionBluebird<typeof p2>;
export declare let p4: ITSWrapFunctionBluebird<typeof p1>;
