/**
 * Created by user on 2019/5/18.
 */

import type { CoreProperties, Dependency } from './types/package.json';
import type { IPackageJsonDependenciesField, IDependency, IPackageJsonPublishConfig } from './lib/package-json/types';
import type { ILernaJson } from './lerna-json';
import type { ITSPartialRecord, ITSOverwrite } from 'ts-type/lib/type/record';

export { EnumVersionValue2 } from './lib/package-json/types';
export * from './lib/package-json/types';

export type ILibPackageJson = typeof import('./types/package.json');

/**
 * @example IPackageJson<unknown>
 */
export interface IPackageJson<T = any> extends  ITSOverwrite<CoreProperties, {

	/**
	 * yarn workspaces
	 */
	workspaces?: ILernaJson["packages"];

	/**
	 * This is a set of config values that will be used at publish-time.
	 * It’s especially handy if you want to set the tag, registry or access,
	 * so that you can ensure that a given package is not tagged with “latest”,
	 * published to the global public registry or that a scoped module is private by default.
	 *
	 * Any config values can be overridden,
	 * but only “tag”, “registry” and “access” probably matter for the purposes of publishing.
	 */
	publishConfig?: IPackageJsonPublishConfig;

	/**
	 * https://github.com/bluelovers/ws-ts-type/pull/1
	 *
	 * If set to true, then npm will refuse to publish it.
	 */
	private?: boolean | "true" | "false";

	gitHead?: string,

	/**
	 * https://segmentfault.com/a/1190000016365409
	 */
	flat?: boolean,
	unpkg?: string,
	browserslist?: string[],
	browser?: string | Record<string, string> | Record<string, boolean>,
	es2015?: string,
	esm?: boolean,
	'react-native'?: string,
	sideEffects?: boolean,
	source?: string,
	'umd:main'?: string,

}>, ITSPartialRecord<IPackageJsonDependenciesField, IDependency>
{
/*
	//[k in Exclude<string, keyof CoreProperties>]: T;
	[k: string]: unknown;
 */
}

export default IPackageJson
