
import IPackageJson from '../../package-json';

export function isPackageJsonLike<T extends Record<any, any>>(pkg: Extract<T, IPackageJson>)
{
	return {
		...pkg,
	}
}

export function notPackageJsonLike<T extends Record<any, any>>(pkg: Exclude<T, IPackageJson>)
{
	return {
		// @ts-ignore
		...pkg,
	}
}

function exportCurrentType()
{
	let pkg = {} as IPackageJson;

	return {
		...pkg
	}
}

export let exportedType = exportCurrentType();

isPackageJsonLike({});

isPackageJsonLike({
	name: '',
	keywords: []
});

isPackageJsonLike({
	private: 'false'
});

isPackageJsonLike({
	private: 'true'
});

/*
notPackageJsonLike({
	name: '',
	keywords: 1
});
 */

isPackageJsonLike({
	name: '',
	// allow un-exists key
	private2: 'true'
});

isPackageJsonLike({
	scripts: {
		test2: '',
	}
});

let p: IPackageJson = {
	typings: '',
	// allow un-exists key
	typings2: '',
}
