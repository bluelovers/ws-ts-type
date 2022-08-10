/**
 * Created by user on 2020/6/12.
 */
import type { ReleaseType as IReleaseType } from 'semver';
import { EnumPublishConfigRegistry } from './publishConfig';
import { ITSArrayListMaybeReadonly } from 'ts-type/lib/type/base';
import { ITSValueOfArray, ITSValueOfRecord } from 'ts-type/lib/helper';
import { ITSTypeAndStringLiteral } from 'ts-type/lib/helper/string';

export type IDependency<T extends ITSArrayListMaybeReadonly<string> = string[]> = Record<ITSValueOfArray<T>, IVersionValue>;

export type { IDependency as IPackageMap }

export type IVersionValue = ITSTypeAndStringLiteral<EnumVersionValue.latest> | ITSTypeAndStringLiteral<EnumVersionValue2> | string;

export enum EnumVersionValue
{
	'major' = 'major',
	'minor' = 'minor',
	'latest' = 'latest',
	'greatest' = 'greatest',
	'newest' = 'newest'
}

export const enum EnumVersionValue2
{
	any = '*',

	latest = 'latest',
	next = 'next',
	beta = 'beta',
	canary = 'canary',
	stable = 'stable',
	dev = 'dev',
}

export type IPackageJsonDependenciesField =
	'dependencies'
	| 'devDependencies'
	| 'peerDependencies'
	| 'optionalDependencies'
;

const packageJsonDependenciesFields = [
	'dependencies' as const,
	'devDependencies' as const,
	'peerDependencies' as const,
	'optionalDependencies' as const,
] as const

export { packageJsonDependenciesFields }

/**
 * This is a set of config values that will be used at publish-time.
 * It’s especially handy if you want to set the tag, registry or access,
 * so that you can ensure that a given package is not tagged with “latest”,
 * published to the global public registry or that a scoped module is private by default.
 *
 * Any config values can be overridden,
 * but only “tag”, “registry” and “access” probably matter for the purposes of publishing.
 */
export interface IPackageJsonPublishConfig
{
	registry?: string | EnumPublishConfigRegistry;
	access?: string | "public" | "restricted";
	tag?: IPackageJsonTag;

	[k: string]: any;
}

export type IPackageJsonTag = string | ITSTypeAndStringLiteral<Exclude<ITSValueOfRecord<typeof EnumVersionValue2>, EnumVersionValue2.any>>;

export type { IReleaseType }
