import Bluebird = require('bluebird');
import { ITSUnpackedReturnType } from './index';

/**
 * @see https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-8.html
 *
 * Add readonly and ?
 */
export type ITSReadonlyPartial<T> = {
	readonly [P in keyof T]?: T[P]
};

/**
 * @see https://stackoverflow.com/questions/49198713/override-the-properties-of-an-interface-in-typescript
 */
export type ITSPickMember<T, K extends keyof T> = T[K];

export type ITSDiff<T extends keyof any, U extends keyof any> = (
	{ [P in T]: P }
	&
	{ [P in U]: never }
	&
	{ [x: string]: never }
	)[T];

/**
 * exclude all key in K at T
 */
export type ITSPickNot<T, K extends keyof any> = Pick<T, ITSDiff<keyof T, K>>;

/**
 * @see https://stackoverflow.com/questions/49198713/override-the-properties-of-an-interface-in-typescript
 *
 * @example
 * export interface A1 { s: string;}
 * export declare type A2 = ITSOverwrite<A1, { s: number; }>;
 * export declare let a2: A2;
 */
export type ITSOverwrite<T, U> = Pick<T, ITSDiff<keyof T, keyof U>> & U;

/**
 * copy current function with Parameters and return to new value
 *
 * not support overload
 *
 * @example
 * declare function f(a: number): number
 * declare let c: ITSOverwriteReturnType<typeof f, string>;
 * // c = (a: number) => string
 */
export type ITSOverwriteReturnType<T extends (...args: any[]) => any, R extends unknown> =
	(...args: Parameters<T>) => R;

export type ITSWrapFunctionPromiseLike<T extends (...args: any[]) => any> =
	(...args: Parameters<T>) => PromiseLike<ITSUnpackedReturnType<T>>;
export type ITSWrapFunctionPromise<T extends (...args: any[]) => any> =
	(...args: Parameters<T>) => Promise<ITSUnpackedReturnType<T>>;
export type ITSWrapFunctionBluebird<T extends (...args: any[]) => any> =
	(...args: Parameters<T>) => Bluebird<ITSUnpackedReturnType<T>>;

