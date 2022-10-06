/**
 * Created by user on 2018/11/27/027.
 */
import { ITSBluebirdPromisifyAll } from '@ts-type/bluebird';
import { ITSUnpacked, ITSUnpackedPromiseLike } from '@ts-type/unpacked';
export type Example = Promise<boolean>;
export type ValueTypeOfExample = ITSUnpacked<Example>;
export type ValueTypeOfExample2 = ITSUnpackedPromiseLike<Example>;
export interface I1 {
    a(): Promise<string>;
}
export declare let pa: ITSBluebirdPromisifyAll<I1>;
