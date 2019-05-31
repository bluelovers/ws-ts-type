import { ITSArrayListMaybeReadonly } from './type/base';
import { ITSUnpackedArrayLike, ITSUnpackedReturnType } from './helper/unpacked';
/**
 * @see https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-8.html
 *
 * Add readonly and ?
 */
export declare type ITSReadonlyPartial<T> = {
    readonly [P in keyof T]?: T[P];
};
/**
 * @see https://stackoverflow.com/questions/49198713/override-the-properties-of-an-interface-in-typescript
 */
export declare type ITSPickMember<T, K extends keyof T> = T[K];
/**
 * @deprecated
 */
export declare type ITSDiff<T extends keyof any, U extends keyof any> = ({
    [P in T]: P;
} & {
    [P in U]: never;
} & {
    [x: string]: never;
})[T];
/**
 * exclude all key in K at T
 */
export declare type ITSPickNot<T, K extends keyof T> = Omit<T, K>;
/**
 * @see https://stackoverflow.com/questions/49198713/override-the-properties-of-an-interface-in-typescript
 *
 * @example
 * export interface A1 { s: string;}
 * export declare type A2 = ITSOverwrite<A1, { s: number; }>;
 * export declare let a2: A2;
 */
export declare type ITSOverwrite<T, U> = Omit<T, keyof U> & U;
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
export declare type ITSOverwriteReturnType<T extends (...args: any[]) => any, R extends unknown> = (...args: Parameters<T>) => R;
export declare type ITSWrapFunctionPromiseLike<T extends (...args: any[]) => any> = (...args: Parameters<T>) => PromiseLike<ITSUnpackedReturnType<T>>;
export declare type ITSWrapFunctionPromise<T extends (...args: any[]) => any> = (...args: Parameters<T>) => Promise<ITSUnpackedReturnType<T>>;
export declare type ITSExtendsOf<T, P> = T extends P ? T : never;
export declare type ITSKeyOfArray<T extends ITSArrayListMaybeReadonly<any>> = Exclude<keyof T, symbol | string>;
export declare type ITSValueOfArray<T extends ITSArrayListMaybeReadonly<any>> = T[ITSKeyOfArray<T>];
/**
 * pick K and mark as Required
 */
export declare type ITSRequiredPick<T, K extends keyof T> = {
    [P in K]-?: T[P];
};
/**
 * pick K and mark as Partial
 */
export declare type ITSPartialPick<T, K extends keyof T> = {
    [P in K]?: T[P];
};
/**
 * clone a type and mark all RK is Required, PK is Partial
 */
export declare type ITSPickExtra<T, RK extends keyof T, PK extends Exclude<keyof T, RK> = Exclude<keyof T, RK>> = ITSRequiredPick<T, RK> & ITSPartialPick<T, PK>;
export declare type ITSRequiredWith<T, K extends keyof T> = Omit<T, K> & ITSRequiredPick<T, K>;
export declare type ITSPartialWith<T, K extends keyof T> = Omit<T, K> & ITSPartialPick<T, K>;
export declare type ITSWriteable<T> = ITSWriteablePick<T, keyof T>;
export declare type ITSWriteablePick<T, K extends keyof T> = {
    -readonly [P in K]: T[P];
};
export declare type ITSWriteableWith<T, K extends keyof T> = Omit<T, K> & ITSWriteablePick<T, K>;
export declare type ITSReadonlyToWriteableArray<T extends readonly any[]> = Omit<T, keyof any[]> & ITSUnpackedArrayLike<T>[] & {
    -readonly [P in number | 'length']: T[P];
};
