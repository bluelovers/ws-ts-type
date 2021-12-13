
export function tsObjectEntries<T, K extends string = string>(obj: { [s in K]: T } | ArrayLike<T>): [K, T][]
{
	return Object.entries(obj) as [K, T][]
}

export default tsObjectEntries
