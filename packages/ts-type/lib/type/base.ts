/**
 * Created by user on 2019/5/17.
 */

import { ITSTypeFunction } from '../generic';

export type ITSArrayListMaybeReadonly<T> = T[] | readonly T[];

export type ITSKeys = symbol | string | number;

export type ITSConstructorLike<T extends any = any> = new(...args: any) => T;

export type ITSValueOrArray<T> = T | T[];

export type ITSPropertyKey = string | symbol;

export type ITSAnyFunction = ITSTypeFunction<any>;

