import { ITSMapLike, ITSResolvable, ITSTypeFunction } from 'ts-type/lib/generic';
/**
 * 取得函式回傳類型的未包裝類型
 * Get unpacked type of function return type
 *
 * @typeParam T - 函式類型 / Function type
 */
export type ITSUnpackedReturnType<T extends (...args: any[]) => any> = ITSUnpacked<ReturnType<T>>;
/**
 * 解包裝類型 - 從各種包裝類型中提取內部類型
 * Unpack type - Extract inner type from various wrapper types
 *
 * 支援解包裝：
 * - Map, WeakMap, Set, WeakSet 等 MapLike 類型
 * - 陣列 / Array
 * - ArrayLike
 * - Iterator / IteratorResult
 * - 函式
 * - 可解析類型（Promise, Thenable）
 *
 * @see https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-8.html
 * @typeParam T - 要解包裝的類型 / Type to unpack
 */
export type ITSUnpacked<T> = T extends ITSMapLike<any, infer U> ? U : T extends (infer U)[] ? U : T extends ArrayLike<infer U> ? U : T extends Iterator<infer U> ? U : T extends IteratorResult<infer U> ? U : T extends ITSTypeFunction<infer U> ? U : T extends ITSResolvable<infer U> ? U : T;
/**
 * 解包裝可 Promise 或 Thenable 類型
 * Unpack Promise or Thenable type
 *
 * @typeParam T - 要解包裝的類型 / Type to unpack
 */
export type ITSUnpackedPromiseLike<T> = T extends ITSResolvable<infer U> ? U : T;
/**
 * 解包裝 Iterator 或 IteratorResult 類型
 * Unpack Iterator or IteratorResult type
 *
 * @typeParam T - Iterator 相關類型 / Iterator-related type
 */
export type ITSUnpackedIteratorLike<T extends Iterator<any> | IteratorResult<any>> = T extends Iterator<infer U> ? U : T extends IteratorYieldResult<infer U> ? U : never;
/**
 * 解包裝類陣列或陣列類型
 * Unpack array-like or array type
 *
 * @typeParam T - 陣列類型 / Array type
 */
export type ITSUnpackedArrayLike<T extends ArrayLike<any> | any[]> = T extends (infer U)[] ? ITSUnpacked<U> : T extends readonly (infer U)[] ? ITSUnpacked<U> : T extends ArrayLike<infer U> ? ITSUnpacked<U> : T;
/**
 * 取得函式的 this 參數類型
 * Get the this parameter type of a function
 *
 * @typeParam T - 函式類型 / Function type
 */
export type ITSUnpackedThisFunction<T extends (...args: any[]) => any> = T extends (this: infer R, ...args: any[]) => any ? R : unknown;
