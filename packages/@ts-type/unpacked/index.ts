import { ITSMapLike, ITSResolvable, ITSTypeFunction } from 'ts-type/lib/generic';

export type ITSUnpackedReturnType<T extends (...args: any[]) => any> =
	ITSUnpacked<ReturnType<T>>
//	T extends ITSTypeFunction<infer R>
//		? ITSUnpacked<R>
//		: T
	;

/**
 * @see https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-8.html
 */
export type ITSUnpacked<T> =
	T extends ITSMapLike<any, infer U> ? U :
		T extends (infer U)[] ? U :
			T extends ArrayLike<infer U> ? U :
				T extends Iterator<infer U> ? U :
					T extends IteratorResult<infer U> ? U :
						T extends ITSTypeFunction<infer U> ? U :
							T extends ITSResolvable<infer U> ? U :
								//T extends Promise<infer U> ? U :
								T
	;

export type ITSUnpackedPromiseLike<T> =
	T extends ITSResolvable<infer U> ? U :
		T
	;

export type ITSUnpackedIteratorLike<T extends Iterator<any> | IteratorResult<any>> =
	T extends Iterator<infer U> ? U :
		T extends IteratorYieldResult<infer U> ? U :
				never
	;

export type ITSUnpackedArrayLike<T extends ArrayLike<any> | any[]> =
	T extends (infer U)[] ? ITSUnpacked<U> :
		T extends readonly (infer U)[] ? ITSUnpacked<U> :
			T extends ArrayLike<infer U> ? ITSUnpacked<U> :
				T
	;

export type ITSUnpackedThisFunction<T extends (...args: any[]) => any> =
	T extends (this: infer R, ...args: any[]) => any
		? R
		: unknown;
