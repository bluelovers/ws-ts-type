import { ITSTypeBuildIn } from './build-in'
import Bluebird = require('bluebird');

export type ITSPickMember<T, K extends keyof T> = T[K]

/**
 * @see https://stackoverflow.com/questions/49198713/override-the-properties-of-an-interface-in-typescript
 */
export type ITSDiff<T extends keyof any, U extends keyof any> =
	({ [P in T]: P } & { [P in U]: never } & { [x: string]: never })[T];
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

export type ITSUnpackedReturnType<T extends (...args: any[]) => any> =
	T extends (...args: any[]) => infer R
		? ITSUnpacked<R>
		: unknown;

/**
 * @see https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-8.html
 */
export type ITSUnpacked<T> =
	T extends (infer U)[] ? U :
		T extends (...args: any[]) => infer U ? U :
			T extends ITSResolvable<infer U> ? U :
				//T extends Promise<infer U> ? U :
					T;

/**
 * @see bluebird
 */
export type ITSResolvable<R> = R | PromiseLike<R>;

/**
 * Same property names, but make the value a promise instead of a concrete one
 * @see https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-1.html
 */
export type ITSDeferred<T> = {
	[P in keyof T]: Promise<T[P]>;
};

/**
 * Wrap proxies around properties of T
 * @see https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-1.html
 */
export type ITSProxify<T> = {
	[P in keyof T]: { get(): T[P]; set(v: T[P]): void }
};

export type ITSAnyFunction = (...args: any[]) => any;

/**
 * https://stackoverflow.com/questions/49285864/is-there-a-valueof-similar-to-keyof-in-typescript
 */
export type ITSValueOf<T> = T[keyof T];
export type ITSKeyOf<T> = keyof T;

/**
 * @see https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-8.html
 */
export type ITSReadonlyPartial<T> = { readonly [P in keyof T]?: T[P] };  // Add readonly and ?

import * as TSType from './index'

export type ITSType = typeof TSType

export { ITSTypeBuildIn }
export default ITSType
