/**
 * Created by user on 2019/5/17.
 */

export type ITSArrayListMaybeReadonly<T> = T[] | readonly T[];

export type ITSKeys = symbol | string | number;

export type ITSConstructorLike<T extends any = any> = new(...args: any) => T;
