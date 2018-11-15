
import { ITSTypeBuildIn } from './build-in'

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
export type ITSOverwriteReturnType<T extends (...args: any[]) => any, R extends unknown> = (...args: Parameters<T>) => R

import * as TSType from './index'
export type ITSType = typeof TSType

export { ITSTypeBuildIn }
export default ITSType
