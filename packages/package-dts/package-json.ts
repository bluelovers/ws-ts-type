/**
 * Created by user on 2019/5/18.
 */

import type { JSONSchemaForNPMPackageJsonFiles as CoreProperties, Dependency } from './types/package.json';
import type { IPackageJsonDependenciesField, IDependency, IPackageJsonPublishConfig } from './lib/package-json/types';
import type { ILernaJson } from './lerna-json';
import type { ITSOverwrite } from 'ts-type/lib/type/record';
import { IPackageJsonExtendYarn } from './lib/package-json/yarn';
import { IBooleanString } from './lib/types';
import { ITSPartialRecord } from 'ts-type/lib/type/record/partial';
import { ITSOmitIndexSignatures } from 'ts-type/lib/helper/record/omit-index';
import { _IPackageJsonCore } from './lib/package-json/extend';

export { EnumVersionValue2 } from './lib/package-json/types';
export * from './lib/package-json/types';

export type ILibPackageJson = typeof import('./types/package.json');

/**
 * @example IPackageJson<unknown>
 */
export interface IPackageJson<T = any> extends  ITSOverwrite<ITSOmitIndexSignatures<CoreProperties>, _IPackageJsonCore & ITSPartialRecord<IPackageJsonDependenciesField, IDependency> & IPackageJsonExtendYarn>
{
/*
	//[k in Exclude<string, keyof CoreProperties>]: T;
	[k: string]: unknown;
 */
	// @ts-ignore
	[k: string]: T;
}

export default IPackageJson
