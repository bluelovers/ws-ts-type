/**
 * Created by user on 2019/5/17.
 */

import _Bluebird from 'bluebird';
import { ITSUnpackedReturnType, ITSKeyOfRecordExtractToKey, ITSUnpackedPromiseLike } from '..';

export type IBluebird<T> = _Bluebird<T>;
export type ITSBluebird<T> = _Bluebird<T>;

export type ITSWrapFunctionBluebird<T extends (...args: any[]) => any> =
	(...args: Parameters<T>) => IBluebird<ITSUnpackedReturnType<T>>;

export type ITSBluebirdPromisifyAll<T, K extends ITSKeyOfRecordExtractToKey<T, Function> = ITSKeyOfRecordExtractToKey<T, Function>> = Omit<T, K> & {
	[P in K]: (...argv: Parameters<T[P]>) => IBluebird<ITSUnpackedPromiseLike<ReturnType<T[P]>>>
}

export type ITSPromisifyAll<T, K extends ITSKeyOfRecordExtractToKey<T, Function> = ITSKeyOfRecordExtractToKey<T, Function>> = Omit<T, K> & {
	[P in K]: (...argv: Parameters<T[P]>) => Promise<ITSUnpackedPromiseLike<ReturnType<T[P]>>>
}
