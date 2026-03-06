/**
 * 全域擴展 ObjectConstructor
 * Global extension of ObjectConstructor
 *
 * 為 Object.entries 添加更好的類型推論
 * Provides better type inference for Object.entries
 */
declare global
{

	interface ObjectConstructor
	{
		/**
		 * 取得物件的鍵值對陣列
		 * Get key-value pairs of an object
		 *
		 * @param o - 目標物件，可以是物件字面值或 ArrayLike / Target object, can be object literal or ArrayLike
		 * @returns 鍵值對陣列 / Key-value pair array
		 */
		entries<V, K extends string>(o: { [key in K]: V } | ArrayLike<V> | readonly V[]): [K, V][];
	}

}
