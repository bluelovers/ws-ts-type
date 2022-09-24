import { ITSArrayListMaybeReadonly } from './type/base';
import { ITSUnpackedReturnType } from './helper/unpacked';
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
export type ITSOverwriteReturnType<T extends (...args: any[]) => any, R extends unknown> = (...args: Parameters<T>) => R;
export type ITSWrapFunctionPromiseLike<T extends (...args: any[]) => any> = (...args: Parameters<T>) => PromiseLike<ITSUnpackedReturnType<T>>;
export type ITSWrapFunctionPromise<T extends (...args: any[]) => any> = (...args: Parameters<T>) => Promise<ITSUnpackedReturnType<T>>;
/**
 * @deprecated
 */
export type ITSExtendsOf<T, U> = Extract<T, U>;
export type ITSKeyOfArray<T extends ITSArrayListMaybeReadonly<any>> = Exclude<keyof T, symbol | string>;
export type ITSValueOfArray<T extends ITSArrayListMaybeReadonly<any>> = T extends (infer U)[] ? U : never;
export type ITSValueOfRecord<T extends Record<any, any>> = T[keyof T];
