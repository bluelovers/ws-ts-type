/**
 * Created by user on 2019/6/8.
 */

import { ITSPropertyKey } from '..';

export type ITSExtractRecord<M, T, K extends keyof M = keyof M> = {
	[P in K]: Extract<M[P], T>;
};

export type ITSExtractRecordNoNull<M, T, K extends keyof M = keyof M> = {
	[P in K]: NonNullable<M[P]>;
};

export type ITSExtractKeyofRecord<M, T> = keyof ITSExtractRecord<M, T>;

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
