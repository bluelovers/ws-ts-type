import { ITSEmptyTuple } from 'ts-type/lib/type/tuple/empty';
import { ITSToReadonlyArray } from 'ts-type/lib/helper/array/readonly';
import { ITSArrayListMaybeReadonly } from 'ts-type/lib/type/base';
export declare function freezeArray<T extends ITSEmptyTuple>(obj: T): ITSToReadonlyArray<T>;
export declare function freezeArray<T extends ITSArrayListMaybeReadonly<unknown>>(obj: T): ITSToReadonlyArray<T>;
export declare function freezeObject<T extends ITSEmptyTuple>(obj: T): ITSToReadonlyArray<T>;
export declare function freezeObject<T extends ITSArrayListMaybeReadonly<unknown>>(obj: T): ITSToReadonlyArray<T>;
export declare function freezeObject<T extends Function>(f: T): T;
export declare function freezeObject<T extends {
    [idx: string]: U | null | undefined | object;
}, U extends string | bigint | number | boolean | symbol>(o: T): Readonly<T>;
export declare function freezeObject<T>(o: T): Readonly<T>;
export default freezeObject;
