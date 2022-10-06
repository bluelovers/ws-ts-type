/**
 * Created by user on 2018/11/24/024.
 */
import {
	ITSIteratorLazy,
	ITSTypeOfIterator,
	ITSValueOf, ITSValueOfIterator,
	ITSValueOfMap,
} from '../../index';

import ITSType from '../../index';
import { ITSUnpacked, ITSUnpackedArrayLike, ITSUnpackedReturnType } from '@ts-type/unpacked';

let m1 = new Map<any, number>();

let v1: ITSValueOfMap<typeof m1>;
let v2: ITSUnpacked<typeof m1>;

v1.entries()
v2.toFixed()

let f1: () => Promise<Map<any, number>>

let v3: ITSUnpacked<ITSUnpackedReturnType<typeof f1>>;

v3.toFixed()

let ir1: Iterator<number>
let ir2: IteratorResult<number>

let v4: ITSValueOfIterator<typeof ir1>

v4.entries()

let v5: ITSUnpacked<ITSValueOfIterator<typeof ir1>>
let v6: ITSUnpacked<typeof ir1>
let v7: ITSTypeOfIterator<typeof ir1>

v5.toFixed()

v6.toFixed()

v7.toFixed()

let v8: ITSIteratorLazy<typeof ir1>
let v9: ITSIteratorLazy<typeof ir2>
let v10: ITSIteratorLazy<any>

v8.next().value.toFixed()
v9.value.toFixed()
