/**
 * Created by user on 2018/11/27/027.
 */

import { ITSUnpackedPromiseLike, ITSUnpacked } from 'ts-type';

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

