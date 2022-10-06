/**
 * Created by user on 2018/11/27/027.
 */

import { ITSBluebirdPromisifyAll } from '@ts-type/bluebird';
import { ITSUnpacked, ITSUnpackedPromiseLike } from '@ts-type/unpacked';

export type Example = Promise<boolean>;

export type ValueTypeOfExample = ITSUnpacked<Example>;

let a: ValueTypeOfExample;

a = true;

// @ts-ignore err when without @ts-ignore
a = 0;
// @ts-ignore err when without @ts-ignore
a = '';

export type ValueTypeOfExample2 = ITSUnpackedPromiseLike<Example>;

let a2: ValueTypeOfExample2;

a2 = true;

// @ts-ignore err when without @ts-ignore
a2 = 0;
// @ts-ignore err when without @ts-ignore
a2 = '';

export interface I1
{
	a(): Promise<string>
}

export let pa: ITSBluebirdPromisifyAll<I1> = null;

pa.a().tap(v => v)
