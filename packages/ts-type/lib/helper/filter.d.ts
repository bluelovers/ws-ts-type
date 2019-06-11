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
export declare type ITSNullable<T> = T extends null | undefined ? T : never;
/**
 * 找出 T 當中 與 U 相同的 key
 */
export declare type ITSKeyofSame<T, U> = Extract<keyof T, keyof U>;
/**
 * 找出 T 當中 與 U 不同的 key
 */
export declare type ITSKeyofDiff<T, U> = Exclude<keyof T, ITSKeyofSame<T, U>>;
/**
 * 找出 T 與 U 當中同時存在的 key
 */
export declare type ITSKeyofBothSame<T, U> = ITSKeyofSame<T, U> | ITSKeyofSame<U, T>;
/**
 * 去除 T 與 U 當中同時存在的 key
 */
export declare type ITSKeyofBothDiff<T, U> = ITSKeyofDiff<T, U> | ITSKeyofDiff<U, T>;
