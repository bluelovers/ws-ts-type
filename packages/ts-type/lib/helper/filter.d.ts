/**
 * Created by user on 2019/6/8.
 */
import { ITSPropertyKey } from '..';
export declare type ITSExtractRecord<M, T, K extends keyof M = keyof M> = {
    [P in K]: Extract<M[P], T>;
};
export declare type ITSExtractRecordNoNull<M, T, K extends keyof M = keyof M> = {
    [P in K]: NonNullable<M[P]>;
};
export declare type ITSExtractKeyofRecord<M, T> = keyof ITSExtractRecord<M, T>;
/**
 * filter all member is function and key type is string or symbol
 */
export declare type ITSMemberMethods<T> = ITSExtractRecord<T, Function, Extract<keyof T, ITSPropertyKey>>;
export declare type ITSKeyofMemberMethods<T> = ITSExtractKeyof<ITSMemberMethods<T>, ITSPropertyKey>;
export declare type ITSExtractKeyof<T, U> = Extract<keyof T, U>;
export declare type ITSExtractArrayLike<A, K extends Extract<keyof A, number> = Extract<keyof A, number>> = {
    [Index in K]: A[Index];
};
export declare type ITSKeyofArrayLike<A> = keyof ITSExtractArrayLike<A>;
