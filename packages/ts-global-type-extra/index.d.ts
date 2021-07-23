declare global
{

	interface ObjectConstructor
	{
		entries<V, K extends string>(o: { [key in K]: V } | ArrayLike<V> | readonly V[]): [K, V][];
	}

}
