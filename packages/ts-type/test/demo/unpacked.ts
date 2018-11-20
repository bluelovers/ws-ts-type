/**
 * Created by user on 2018/11/20/020.
 */

import {
	ITSUnpacked,
	ITSUnpackedIteratorLike,
} from '../../';

export type i1 = Iterator<string>

export declare let u1: ITSUnpackedIteratorLike<i1>

u1.toUpperCase() // u1 is string

export type i2 = IteratorResult<string>
export declare let u2: ITSUnpackedIteratorLike<i2>

u2.toUpperCase() // u2 is string


