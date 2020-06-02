/**
 * Created by user on 2019/5/18.
 */
import { CoreProperties } from './types/package.json';
import { ITSOverwrite } from 'ts-type';
export declare type ILibPackageJson = typeof import('./types/package.json');
/**
 * @example IPackageJson<unknown>
 */
export declare type IPackageJson<T = any> = ITSOverwrite<CoreProperties, {
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
     *
     * If set to true, then npm will refuse to publish it.
     */
    private?: boolean | "true" | "false";
    gitHead?: string;
    /**
     * https://segmentfault.com/a/1190000016365409
     */
    flat?: boolean;
    unpkg?: string;
    browserslist?: string[];
    browser?: string;
    es2015?: string;
    esm?: boolean;
    'react-native'?: string;
    sideEffects?: boolean;
    source?: string;
    'umd:main'?: string;
}> & {
    [k: string]: T;
};
export default IPackageJson;
