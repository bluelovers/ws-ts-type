/**
 * Created by user on 2019/5/17.
 */

import _Bluebird = require('bluebird');
import { ITSUnpackedReturnType } from '..';

export type IBluebird<T> = _Bluebird<T>;

export type ITSWrapFunctionBluebird<T extends (...args: any[]) => any> =
	(...args: Parameters<T>) => IBluebird<ITSUnpackedReturnType<T>>;