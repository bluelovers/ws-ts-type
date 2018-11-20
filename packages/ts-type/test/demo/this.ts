/**
 * Created by user on 2018/11/20/020.
 */

import {
	ITSOverwriteThisFunction,
	ITSUnpackedThisFunction,
	ITSWrapFunctionBluebird,
	ITSWrapFunctionPromise,
} from '../../';

export declare function t1(this: string, a: number): Promise<number>

export declare let t1_this: ITSUnpackedThisFunction<typeof t1>;

export declare function t2(this: string, a: number): number

export declare let t3: ITSOverwriteThisFunction<number, typeof t2>;

t3 = function ()
{
	this.toFixed() // => this is number

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
	this.includes('') // => this is string[]

	// @ts-ignore ts should show error when without @ts-ignore
	this.padEnd(1, '0')

	return ''
}

export interface t7 extends Function
{
	(): string
}

export declare let t8: t7

export let t9 = t8.bind([] as string[])

t9 = function ()
{
	this.includes('') // => this is string[]

	// ts didn't show error
	this.padEnd(1, '0')

	return ''
}

export interface t10
{
	(): string
}

export declare let t11: t10

export let t12 = t11.bind([] as string[])

t12 = function ()
{
	this.includes('') // => this is string[]

	// ts didn't show error
	this.padEnd(1, '0')

	return ''
}

export declare function t13()
export let t14 = t13.bind([] as string[])

t14 = function ()
{
	this.includes('') // => this is string[]

	// ts didn't show error
	this.padEnd(1, '0')

	return ''
}
