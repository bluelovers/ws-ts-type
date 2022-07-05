import { ITSArrayListMaybeReadonly } from 'ts-type/lib/type/base';
import { ITSToReadonlyArray, ITSToWriteableAArray } from 'ts-type/lib/helper/array/readonly';
declare global {
    interface ArrayConstructor {
        isArray<T extends ITSArrayListMaybeReadonly<any>>(arg: T | unknown): arg is T;
    }
}
export declare function isArray<T extends ITSArrayListMaybeReadonly<any>>(arg: T | unknown): arg is T;
export declare function typePredicatesAsWriteableArray<T extends ITSArrayListMaybeReadonly<any>>(value: T): asserts value is ITSToWriteableAArray<T>;
export declare function typePredicatesAsReadonlyArray<T extends ITSArrayListMaybeReadonly<any>>(value: T): asserts value is ITSToReadonlyArray<T>;
export declare function isArrayPredicates<T extends ITSArrayListMaybeReadonly<any>>(actual: T | unknown, message?: string): asserts actual is T;
export { isArray as isArrayNarrowed };
export default isArray;
