import { ITSMapLike, ITSTypeFunction } from './lib';

export * from './lib'
export * from 'typedarray-dts'
export type ITSType = typeof import('./index');
export type ITSTypeBuildIn = typeof import('./lib/_build-in');
export default ITSType

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

export type ITSAnyFunction = ITSTypeFunction<any>;

export type ITSOverwriteThisFunction<T extends any, F extends (...args: any[]) => any> =
	(this: T, ...args: Parameters<F>) => ReturnType<F>

export type ITSUnpackedThisFunction<T extends (...args: any[]) => any> =
	T extends (this: infer R, ...args: any[]) => any
		? R
		: unknown;

/**
 * https://stackoverflow.com/questions/49285864/is-there-a-valueof-similar-to-keyof-in-typescript
 */
export type ITSValueOf<T> = T[keyof T];
export type ITSKeyOf<T> = keyof T;

export type ITSPickValueOf<T, K extends keyof T> = ITSValueOf<Pick<T, K>>;

export type ITSValueOfIterator<T extends ITSIteratorLazy<any>> =
	(T extends Iterator<infer U> ? U :
		T extends IteratorResult<infer U> ? U :
			any)[]
	;

export type ITSValueOfMap<T extends ITSMapLike<any, any>> =
	T extends ITSMapLike<any, infer U> ? U[] :
		any[]
	;

export type ITSIteratorLazy<T extends Iterator<any> | IteratorResult<any>> =
//	T
	T extends IteratorResult<infer U> ? IteratorResult<U> :
		T extends Iterator<infer U> ? Iterator<U> :
			T
	;

export type ITSTypeOfArrayLike<T extends any[]> =
	T extends (infer U)[] ? U :
		T extends ArrayLike<infer U> ? U :
			any
	;

export type ITSTypeOfIterator<T extends ITSIteratorLazy<any>> =
	T extends Iterator<infer U> ? U :
		T extends IteratorResult<infer U> ? U :
			any
	;
