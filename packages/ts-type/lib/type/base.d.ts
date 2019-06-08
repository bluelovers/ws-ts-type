/**
 * Created by user on 2019/5/17.
 */
export declare type ITSArrayListMaybeReadonly<T> = T[] | readonly T[];
export declare type ITSKeys = symbol | string | number;
export declare type ITSConstructorLike<T extends any = any> = new (...args: any) => T;
