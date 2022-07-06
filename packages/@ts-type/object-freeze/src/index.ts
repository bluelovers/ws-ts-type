import { ITSEmptyTuple } from 'ts-type/lib/type/tuple/empty';
import { ITSToReadonlyArray } from 'ts-type/lib/helper/array/readonly';
import { ITSArrayListMaybeReadonly } from 'ts-type/lib/type/base';

export function freezeArray<T extends ITSEmptyTuple>(obj: T): ITSToReadonlyArray<T>
export function freezeArray<T extends ITSArrayListMaybeReadonly<unknown>>(obj: T): ITSToReadonlyArray<T>
export function freezeArray<T extends ITSArrayListMaybeReadonly<unknown>>(obj: T)
{
	return Object.freeze(obj)
}

export function freezeObject<T extends ITSEmptyTuple>(obj: T): ITSToReadonlyArray<T>
export function freezeObject<T extends ITSArrayListMaybeReadonly<unknown>>(obj: T): ITSToReadonlyArray<T>

export function freezeObject<T extends Function>(f: T): T
export function freezeObject<T extends { [idx: string]: U | null | undefined | object }, U extends string | bigint | number | boolean | symbol>(o: T): Readonly<T>
export function freezeObject<T>(o: T): Readonly<T>

export function freezeObject<T extends ITSArrayListMaybeReadonly<unknown>>(obj: T)
{
	return Object.freeze(obj)
}

export default freezeObject
