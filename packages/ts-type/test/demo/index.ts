/**
 * Created by user on 2018/11/15/015.
 */

import Bluebird = require('bluebird');
import {
	ITSOverwrite,
	ITSOverwriteReturnType,
	ITSUnpackedReturnType,
	ITSWrapFunctionBluebird,
	ITSWrapFunctionPromise,
} from '../../';
import {
	ITSOverwriteThisFunction,
	ITSUnpackedThisFunction,
	} from '../../index';

export declare function f(a: number): number

export declare let c: ITSOverwriteReturnType<typeof f, string>;
//c(1).toUpperCase()
// c = (a: number) => string

c(1).toUpperCase()

export interface A1
{
	s: string
}

export type A2 = ITSOverwrite<A1, {
	s: number,
}>
export declare let a2: A2;
// a2.s is number

a2.s.toFixed()

export declare function p1(a: number): Promise<number>

export declare let p1_v: ITSUnpackedReturnType<typeof p1>;

p1_v.toFixed()

export declare let p2: ITSWrapFunctionPromise<typeof p1>;
export declare let p3: ITSWrapFunctionBluebird<typeof p2>;
export declare let p4: ITSWrapFunctionBluebird<typeof p1>;

p2(1).then(v => v.toFixed())
p3(1).then(v => v.toFixed())
p4(1).then(v => v.toFixed())

