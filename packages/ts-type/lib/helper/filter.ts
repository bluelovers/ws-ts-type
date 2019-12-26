/**
 * Created by user on 2019/6/8.
 */

import { ITSPropertyKey } from '..';

/**
 * Exclude from T those types that are assignable to U, and replace to R
 */
export type ITSExclude2<T, U, R = T> = T extends U ? never : R;

/**
 * Extract from T those types that are assignable to U, and replace to R
 */
export type ITSExtract2<T, U, R = T> = T extends U ? R : never;

export type ITSExtractRecord<M, T, K extends keyof M = keyof M> = {
	[P in K]: Extract<M[P], T>;
};

export type ITSExtractRecordNoNull<M, T, K extends keyof M = keyof M> = {
	[P in K]: NonNullable<M[P]>;
};

export type ITSExtractKeyofRecord<M, T> = keyof ITSExtractRecord<M, T>;

export type ITSExcludeRecord<M, T, K extends keyof M = keyof M> = {
	[P in K]: Exclude<M[P], T>;
};

export type ITSExcludeRecordNoNull<M, T, K extends keyof M = keyof M> = {
	[P in K]: NonNullable<M[P]>;
};

export type ITSExcludeKeyofRecord<M, T> = keyof ITSExcludeRecord<M, T>;

/**
 * filter all member is function and key type is string or symbol
 */
export type ITSMemberMethods<T> = ITSExtractRecord<T, Function, Extract<keyof T, ITSPropertyKey>>;

export type ITSKeyofMemberMethods<T> = ITSExtractKeyof<ITSMemberMethods<T>, ITSPropertyKey>;

export type ITSExtractKeyof<T, U> = Extract<keyof T, U>;

export type ITSExtractArrayLike<A, K extends Extract<keyof A, number> = Extract<keyof A, number>> = {
	[Index in K]: A[Index];
};

export type ITSKeyofArrayLike<A> = keyof ITSExtractArrayLike<A>;

export type ITSNullable<T> = T extends null | undefined ? T : never;

/**
 * 找出 T 當中 與 U 相同的 key
 */
export type ITSKeyofSame<T, U> = Extract<keyof T, keyof U>;
/**
 * 找出 T 當中 與 U 不同的 key
 */
export type ITSKeyofDiff<T, U> = Exclude<keyof T, ITSKeyofSame<T, U>>;

/**
 * 找出 T 與 U 當中同時存在的 key
 */
export type ITSKeyofBothSame<T, U> = ITSKeyofSame<T, U> | ITSKeyofSame<U, T>;

/**
 * 去除 T 與 U 當中同時存在的 key
 */
export type ITSKeyofBothDiff<T, U> = ITSKeyofDiff<T, U> | ITSKeyofDiff<U, T>;


