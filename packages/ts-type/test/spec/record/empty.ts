import { expectAssignable, expectType } from 'tsd';
import { ITSEmptyTuple } from '../../../lib/type/tuple/empty';
import { freezeArray } from '@ts-type/object-freeze';

const a = Object.freeze([])

expectAssignable<ITSEmptyTuple>([]);
expectAssignable<ITSEmptyTuple>(freezeArray([]));
expectAssignable<ITSEmptyTuple>([undefined]);
expectAssignable<ITSEmptyTuple>(freezeArray([undefined]));

// @ts-expect-error
expectAssignable<ITSEmptyTuple>([1]);

// @ts-expect-error
expectAssignable<ITSEmptyTuple>([void 0, 2]);
