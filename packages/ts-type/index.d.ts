import { ITSTypeBuildIn } from './build-in';
import Bluebird = require('bluebird');
export declare type ITSPickMember<T, K extends keyof T> = T[K];
/**
 * @see https://stackoverflow.com/questions/49198713/override-the-properties-of-an-interface-in-typescript
 */
export declare type ITSDiff<T extends keyof any, U extends keyof any> = ({
    [P in T]: P;
} & {
    [P in U]: never;
} & {
    [x: string]: never;
})[T];
/**
 * @see https://stackoverflow.com/questions/49198713/override-the-properties-of-an-interface-in-typescript
 *
 * @example
 * export interface A1 { s: string;}
 * export declare type A2 = ITSOverwrite<A1, { s: number; }>;
 * export declare let a2: A2;
 */
export declare type ITSOverwrite<T, U> = Pick<T, ITSDiff<keyof T, keyof U>> & U;
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
export declare type ITSWrapFunctionBluebird<T extends (...args: any[]) => any> = (...args: Parameters<T>) => Bluebird<ITSUnpackedReturnType<T>>;
export declare type ITSUnpackedReturnType<T extends (...args: any[]) => any> = T extends (...args: any[]) => infer R ? ITSUnpacked<R> : unknown;
/**
 * @see https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-8.html
 */
export declare type ITSUnpacked<T> = T extends (infer U)[] ? U : T extends (...args: any[]) => infer U ? U : T extends ITSResolvable<infer U> ? U : T;
export declare type ITSAnyFunction = (...args: any[]) => any;
/**
 * @see https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-8.html
 */
export declare type ITSReadonlyPartial<T> = {
    readonly [P in keyof T]?: T[P];
};
/**
 * @see bluebird
 */
export declare type ITSResolvable<R> = R | PromiseLike<R>;
import * as TSType from './index';
export declare type ITSType = typeof TSType;
export { ITSTypeBuildIn };
export default ITSType;
