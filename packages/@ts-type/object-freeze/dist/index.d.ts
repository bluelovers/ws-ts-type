import { ITSEmptyTuple } from 'ts-type/lib/type/tuple/empty';
import { ITSToReadonlyArray } from 'ts-type/lib/helper/array/readonly';
import { ITSArrayListMaybeReadonly } from 'ts-type/lib/type/base';
/**
 * 凍結陣列並回傳唯讀類型
 * Freeze array and return readonly type
 *
 * @param obj - 要凍結的陣列 / Array to freeze
 * @returns 唯讀陣列類型 / Readonly array type
 */
export declare function freezeArray<T extends ITSEmptyTuple>(obj: T): ITSToReadonlyArray<T>;
export declare function freezeArray<T extends ITSArrayListMaybeReadonly<unknown>>(obj: T): ITSToReadonlyArray<T>;
/**
 * 凍結物件並回傳唯讀類型（空元組版本）
 * Freeze object and return readonly type (empty tuple version)
 *
 * @param obj - 要凍結的物件 / Object to freeze
 * @returns 唯讀物件類型 / Readonly object type
 */
export declare function freezeObject<T extends ITSEmptyTuple>(obj: T): ITSToReadonlyArray<T>;
/**
 * 凍結物件並回傳唯讀類型（陣列版本）
 * Freeze object and return readonly type (array version)
 *
 * @param obj - 要凍結的物件 / Object to freeze
 * @returns 唯讀陣列類型 / Readonly array type
 */
export declare function freezeObject<T extends ITSArrayListMaybeReadonly<unknown>>(obj: T): ITSToReadonlyArray<T>;
/**
 * 凍結函式並保持原類型
 * Freeze function and preserve original type
 *
 * @param f - 要凍結的函式 / Function to freeze
 * @returns 凍結後的函式 / Frozen function
 */
export declare function freezeObject<T extends Function>(f: T): T;
/**
 * 凍結物件並回傳唯讀類型（鍵值物件版本）
 * Freeze object and return readonly type (key-value object version)
 *
 * @param o - 要凍結的物件 / Object to freeze
 * @returns 唯讀物件類型 / Readonly object type
 */
export declare function freezeObject<T extends {
    [idx: string]: U | null | undefined | object;
}, U extends string | bigint | number | boolean | symbol>(o: T): Readonly<T>;
/**
 * 凍結物件並回傳唯讀類型（通用版本）
 * Freeze object and return readonly type (generic version)
 *
 * @param o - 要凍結的物件 / Object to freeze
 * @returns 唯讀物件類型 / Readonly object type
 */
export declare function freezeObject<T>(o: T): Readonly<T>;
export default freezeObject;
