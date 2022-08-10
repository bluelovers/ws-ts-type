/**
 * Created by user on 2020/6/12.
 */
import type { ReleaseType as IReleaseType } from 'semver';
import { EnumPublishConfigRegistry } from './publishConfig';
import { ITSArrayListMaybeReadonly } from 'ts-type/lib/type/base';
import { ITSValueOfArray, ITSValueOfRecord } from 'ts-type/lib/helper';
import { ITSTypeAndStringLiteral } from 'ts-type/lib/helper/string';
export declare type IDependency<T extends ITSArrayListMaybeReadonly<string> = string[]> = Record<ITSValueOfArray<T>, IVersionValue>;
export type { IDependency as IPackageMap };
export type { IDependency as IDependencies };
export declare type IVersionValue = ITSTypeAndStringLiteral<EnumVersionValue.latest> | ITSTypeAndStringLiteral<EnumVersionValue2> | string;
export declare enum EnumVersionValue {
    'major' = "major",
    'minor' = "minor",
    'latest' = "latest",
    'greatest' = "greatest",
    'newest' = "newest"
}
export declare const enum EnumVersionValue2 {
    any = "*",
    latest = "latest",
    next = "next",
    beta = "beta",
    canary = "canary",
    stable = "stable",
    dev = "dev"
}
export declare type IPackageJsonDependenciesField = 'dependencies' | 'devDependencies' | 'peerDependencies' | 'optionalDependencies';
declare const packageJsonDependenciesFields: readonly ["dependencies", "devDependencies", "peerDependencies", "optionalDependencies"];
export { packageJsonDependenciesFields };
/**
 * This is a set of config values that will be used at publish-time.
 * It’s especially handy if you want to set the tag, registry or access,
 * so that you can ensure that a given package is not tagged with “latest”,
 * published to the global public registry or that a scoped module is private by default.
 *
 * Any config values can be overridden,
 * but only “tag”, “registry” and “access” probably matter for the purposes of publishing.
 */
export interface IPackageJsonPublishConfig {
    registry?: string | EnumPublishConfigRegistry;
    access?: string | "public" | "restricted";
    tag?: IPackageJsonTag;
    [k: string]: any;
}
export declare type IPackageJsonTag = string | ITSTypeAndStringLiteral<Exclude<ITSValueOfRecord<typeof EnumVersionValue2>, EnumVersionValue2.any>>;
export type { IReleaseType };
