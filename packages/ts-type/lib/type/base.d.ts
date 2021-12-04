/**
 * Created by user on 2019/5/17.
 */
import { ITSTypeFunction } from '../generic';
export declare type ITSArrayListMaybeReadonly<T> = T[] | readonly T[];
export declare type ITSKeys = symbol | string | number;
export declare type ITSConstructorLike<T extends any = any> = new (...args: any) => T;
export declare type ITSValueOrArray<T> = T | T[];
export declare type ITSValueOrArrayMaybeReadonly<T> = T | ITSArrayListMaybeReadonly<T>;
export declare type ITSPropertyKey = string | symbol;
export declare type ITSAnyFunction = ITSTypeFunction<any>;
export declare type ITSBasicPrimitive = number | string | boolean;
export declare type ITSNullPrimitive = null | undefined;
