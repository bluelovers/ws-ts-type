import { expectType } from 'tsd';
import { ITSEmptyTuple } from '../../../lib/type/tuple/empty';
import { freezeArray } from '@ts-type/object-freeze/src/index';

const a = Object.freeze([])

expectType<ITSEmptyTuple>([]);
expectType<ITSEmptyTuple>(freezeArray([]));
expectType<ITSEmptyTuple>([undefined]);
expectType<ITSEmptyTuple>(freezeArray([undefined]));

// @ts-expect-error
expectType<ITSEmptyTuple>([1]);

// @ts-expect-error
expectType<ITSEmptyTuple>([void 0, 2]);
