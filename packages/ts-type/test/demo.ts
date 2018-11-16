/**
 * Created by user on 2018/11/15/015.
 */

import Bluebird = require('bluebird');
import { ITSOverwrite, ITSOverwriteReturnType, ITSUnpackedReturnType } from '..';
import {
	ITSOverwriteThisFunction,
	ITSUnpackedThisFunction,
	ITSWrapFunctionBluebird,
	ITSWrapFunctionPromise,
} from '../index';

export declare function f(a: number): number

export declare let c: ITSOverwriteReturnType<typeof f, string>;
//c(1).toUpperCase()
// c = (a: number) => string

export interface A1
{
	s: string
}

export type A2 = ITSOverwrite<A1, {
	s: number,
}>
export declare let a2: A2;
// a2.s is number

export declare function p1(a: number): Promise<number>

export declare let p1_v: ITSUnpackedReturnType<typeof p1>;

p1_v.toFixed()

export declare let p2: ITSWrapFunctionPromise<typeof p1>;
export declare let p3: ITSWrapFunctionBluebird<typeof p2>;
export declare let p4: ITSWrapFunctionBluebird<typeof p1>;

p2(1).then(v => v.toFixed())
p3(1).then(v => v.toFixed())
p4(1).then(v => v.toFixed())

export declare function t1(this: string, a: number): Promise<number>

export declare let t1_this: ITSUnpackedThisFunction<typeof t1>;

export declare function t2(this: string, a: number): number

export declare let t3: ITSOverwriteThisFunction<number, typeof t2>;

t3 = function ()
{
	this.toFixed()

	return 1
}

interface Function2 extends Function
{
	bind<T extends any, F extends (...args: any[]) => any>(this: F, thisArg: T, ...argArray: any[]): ITSOverwriteThisFunction<T, F>;
}

export interface t4 extends Function2
{
	(): string
}

export declare let t5: t4

export let t6 = t5.bind([] as string[])

t6 = function ()
{
	this.includes('')

	return ''
}

