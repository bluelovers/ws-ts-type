/**
 * Created by user on 2019/5/18.
 */

import { CoreProperties, Dependency } from './types/package.json';
import { ITSOverwrite } from 'ts-type';

export type ILibPackageJson = typeof import('./types/package.json');

/**
 * @example IPackageJson<unknown>
 */
export type IPackageJson<T = any> = CoreProperties & {

	/**
	 * yarn workspaces
	 */
	workspaces?: string[] | any;

	/**
	 * This is a set of config values that will be used at publish-time.
	 * It’s especially handy if you want to set the tag, registry or access,
	 * so that you can ensure that a given package is not tagged with “latest”,
	 * published to the global public registry or that a scoped module is private by default.
	 *
	 * Any config values can be overridden,
	 * but only “tag”, “registry” and “access” probably matter for the purposes of publishing.
	 */
	publishConfig?: {
		registry?: string | "https://registry.npmjs.org/";
		access?: string | "public";
		tag?: string | "next";

		[k: string]: any;
	};

	/**
	 * https://github.com/bluelovers/ws-ts-type/pull/1
	 */
	private?: boolean | "true" | "false";

	gitHead?: string,

} & {
	//[k in Exclude<string, keyof CoreProperties>]: T;
	[k: string]: T;
};

export default IPackageJson
