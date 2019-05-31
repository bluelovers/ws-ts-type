/**
 * Created by user on 2018/11/27/027.
 */

import { ITSDiff, ITSPickMember, ITSPickNot } from 'ts-type';

export type Origin = {
	a: string,
	b: string,
	_c: string,
	_d: string,
}

export type Result = Omit<Origin, '_c' | '_d'>

let a: Result;

a.a.padEnd(1)

// @ts-ignore err when without @ts-ignore
a._c;

export type Result2 = ITSPickNot<Origin, '_c' | '_d'>

let a2: Result2;

a2.a.padEnd(1)

// @ts-ignore err when without @ts-ignore
a2._c;

export type OriginOnlyHasPrefix = {
	_c: string,
	_d: string,
}

export type Result3 = Omit<Origin, keyof OriginOnlyHasPrefix>

let a3: Result3;

a3.a.padEnd(1)

// @ts-ignore err when without @ts-ignore
a3._c;
