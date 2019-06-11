/**
 * Created by user on 2019/6/11.
 */

/**
 * https://stackoverflow.com/questions/49285864/is-there-a-valueof-similar-to-keyof-in-typescript
 */
import { ITSMapLike } from '../generic';
import { ITSIteratorLazy } from './typeof';

export type ITSValueOf<T> = T[keyof T];
export type ITSKeyOf<T> = keyof T;

export type ITSPickValueOf<T, K extends keyof T> = ITSValueOf<Pick<T, K>>;

export type ITSValueOfIterator<T extends ITSIteratorLazy<any>> =
	(T extends Iterator<infer U> ? U :
		T extends IteratorResult<infer U> ? U :
			any)[]
	;

export type ITSValueOfMap<T extends ITSMapLike<any, any>> =
	T extends ITSMapLike<any, infer U> ? U[] :
		any[]
	;


