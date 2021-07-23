declare global
{

	interface ObjectConstructor
	{
		entries<V, K extends string>(o: { [key in K]: V } | ArrayLike<V> | readonly V[]): [K, V][];
	}

	interface ArrayConstructor
	{
		isArray(arg: any): arg is readonly any[] | any[];
	}

}
