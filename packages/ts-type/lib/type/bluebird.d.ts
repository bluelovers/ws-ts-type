/**
 * Created by user on 2019/5/17.
 */
import _Bluebird from 'bluebird';
import { ITSUnpackedReturnType, ITSKeyOfRecordExtractToKey, ITSUnpackedPromiseLike } from '..';
export declare type IBluebird<T> = _Bluebird<T>;
export declare type ITSBluebird<T> = _Bluebird<T>;
export declare type ITSWrapFunctionBluebird<T extends (...args: any[]) => any> = (...args: Parameters<T>) => IBluebird<ITSUnpackedReturnType<T>>;
export declare type ITSBluebirdPromisifyAll<T, K extends ITSKeyOfRecordExtractToKey<T, Function> = ITSKeyOfRecordExtractToKey<T, Function>> = Omit<T, K> & {
    [P in K]: (...argv: Parameters<T[P]>) => IBluebird<ITSUnpackedPromiseLike<ReturnType<T[P]>>>;
};
export declare type ITSPromisifyAll<T, K extends ITSKeyOfRecordExtractToKey<T, Function> = ITSKeyOfRecordExtractToKey<T, Function>> = Omit<T, K> & {
    [P in K]: (...argv: Parameters<T[P]>) => Promise<ITSUnpackedPromiseLike<ReturnType<T[P]>>>;
};
