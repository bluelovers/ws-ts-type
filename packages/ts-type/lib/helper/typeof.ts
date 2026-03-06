/**
 * Created by user on 2019/6/11.
 */


/**
 * 迭代器類型
 * Iterator type
 */
export type ITSIteratorLazy<T extends Iterator<any> | IteratorResult<any>> =
//	T
	T extends IteratorResult<infer U> ? IteratorResult<U> :
		T extends Iterator<infer U> ? Iterator<U> :
			T
	;

/**
 * 取得迭代器的值類型
 * Get the value type of an iterator
 * 
 * @see https://stackoverflow.com/questions/49285864/is-there-a-valueof-similar-to-keyof-in-typescript
 */
export type ITSTypeOfIterator<T extends ITSIteratorLazy<any>> =
	T extends Iterator<infer U> ? U :
		T extends IteratorResult<infer U> ? U :
			any
	;
