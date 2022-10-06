import Bluebird from 'bluebird';
import { ITSKeyOfRecordExtractToKey } from 'ts-type/lib/helper/record/pick-type';
import { ITSAnyFunction } from 'ts-type/lib/type/base';
import { ITSAwaitedReturnType } from 'ts-type/lib/helper/promise';
export type IBluebird<T> = Bluebird<T>;
export type ITSBluebird<T> = Bluebird<T>;
export type ITSWrapFunctionBluebird<T extends (...args: any[]) => any> = (...args: Parameters<T>) => IBluebird<ITSAwaitedReturnType<T>>;
export type ITSBluebirdPromisifyAll<T extends {
    [p: string | symbol]: ITSAnyFunction;
}, K extends ITSKeyOfRecordExtractToKey<T, Function> = ITSKeyOfRecordExtractToKey<T, Function>> = Omit<T, K> & {
    [P in K]: (...argv: Parameters<T[P]>) => IBluebird<ITSAwaitedReturnType<T[P]>>;
};
export type ITSPromisifyAll<T extends {
    [p: string | symbol]: ITSAnyFunction;
}, K extends ITSKeyOfRecordExtractToKey<T, Function> = ITSKeyOfRecordExtractToKey<T, Function>> = Omit<T, K> & {
    [P in K]: (...argv: Parameters<T[P]>) => Promise<ITSAwaitedReturnType<T[P]>>;
};
export type ITSResultArrayToBluebirdInspection<T> = T extends [infer T1, infer T2, infer T3, infer T4, infer T5] ? [Bluebird.Inspection<T1>, Bluebird.Inspection<T2>, Bluebird.Inspection<T3>, Bluebird.Inspection<T4>, Bluebird.Inspection<T5>] : T extends [infer T1, infer T2, infer T3, infer T4] ? [Bluebird.Inspection<T1>, Bluebird.Inspection<T2>, Bluebird.Inspection<T3>, Bluebird.Inspection<T4>] : T extends [infer T1, infer T2, infer T3] ? [Bluebird.Inspection<T1>, Bluebird.Inspection<T2>, Bluebird.Inspection<T3>] : T extends [infer T1, infer T2] ? [Bluebird.Inspection<T1>, Bluebird.Inspection<T2>] : T extends [infer T1] ? [Bluebird.Inspection<T1>] : T extends (infer R)[] ? Bluebird.Inspection<R>[] : never;
