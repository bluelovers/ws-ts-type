/**
 * Created by user on 2019/6/11.
 */

import { ITSMapLike } from '../generic';
import { ITSIteratorLazy } from './typeof';
import { ITSArrayListMaybeReadonly } from '../type/base';

/**
 * 取得介面所有值的聯集類型
 * Get the union type of all values in an interface
 * 
 * @see https://stackoverflow.com/questions/49285864/is-there-a-valueof-similar-to-keyof-in-typescript
 */
export type ITSValueOf<T extends Record<any, any>> = T[keyof T];

export type { ITSValueOf as ITSValueOfRecord };

export type ITSKeyOf<T> = keyof T;

export type ITSPickValueOf<T, K extends keyof T> = ITSValueOf<Pick<T, K>>;

/**
 * 迭代器值的類型
 * Iterator value type
 */
export type ITSValueOfIterator<T extends ITSIteratorLazy<any>> =
	(T extends Iterator<infer U> ? U :
		T extends IteratorResult<infer U> ? U :
			any)[]
	;

/**
 * Map 類型的所有值類型
 * All value types of Map type
 */
export type ITSValueOfMap<T extends ITSMapLike<any, any>> =
	T extends ITSMapLike<any, infer U> ? U[] :
		any[]
	;

/**
 * 陣列的元素類型
 * Array element type
 */
export type ITSValueOfArray<T extends ITSArrayListMaybeReadonly<any>> =
	T extends readonly (infer U)[]
		? U : T extends (infer U)[]
				? U : never
	;

/**
 * 類陣列的元素類型
 * Array-like element type
 */
export type ITSValueOfArrayLike<T extends ITSArrayListMaybeReadonly<any> | ArrayLike<any>> =
	T extends ITSArrayListMaybeReadonly<T>
		? ITSValueOfArray<T> : T extends ArrayLike<infer U>
			? U : never
	;
