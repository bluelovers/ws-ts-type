import { IPackageJsonPublishConfig } from './types';
import { IBooleanString } from '../types';
import ILernaJson from '../../lerna-json';
export interface _IPackageJsonCore {
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
    private?: boolean | IBooleanString;
    gitHead?: string;
    /**
     * https://segmentfault.com/a/1190000016365409
     */
    unpkg?: string;
    browserslist?: string[];
    browser?: string | Record<string, string> | Record<string, boolean>;
    es2015?: string;
    esm?: boolean;
    'react-native'?: string;
    sideEffects?: boolean;
    source?: string;
    'umd:main'?: string;
}
