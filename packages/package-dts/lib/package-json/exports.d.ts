import { PackageExportsEntryObject, PackageExportsFallback, PackageExportsEntryPath } from '../../types/package.json';
import { ITSPartialRecord } from 'ts-type/lib/type/record/partial';
type _IConditions = 'node-addons' | 'node' | 'default' | 'types' | 'import' | 'require';
interface _IPackageExportsEntryObjectExtend extends ITSPartialRecord<_IConditions, IPackageExportsValue> {
}
declare module '../../types/package.json' {
    interface PackageExportsEntryObject extends _IPackageExportsEntryObjectExtend {
        [k: string]: IPackageExportsValue;
    }
}
export interface IPackageExportsEntryObject extends PackageExportsEntryObject, _IPackageExportsEntryObjectExtend {
}
export type IPackageExportsValueFallback = PackageExportsEntryPath | PackageExportsFallback;
export type IPackageExportsValue = IPackageExportsValueFallback | IPackageExportsEntryObject;
/**
 * The module path prefix that is resolved when the module specifier starts with "name/", set to "./*" to allow external modules to import any subpath.
 *
 * This interface was referenced by `undefined`'s JSON-Schema definition
 * via the `patternProperty` "^\./.+".
 */
export interface IPackageJsonExportsEntryObjectRoot extends ITSPartialRecord<'default' | './package.json' | `./${string}` | _IConditions, IPackageExportsValue> {
    /**
     * The module path that is resolved when the module specifier matches "name", shadows the "main" field.
     */
    "."?: IPackageExportsValue;
    /**
     * The module path prefix that is resolved when the module specifier starts with "name/", set to "./*" to allow external modules to import any subpath.
     *
     * This interface was referenced by `undefined`'s JSON-Schema definition
     * via the `patternProperty` "^\./.+".
     */
    [k: string]: IPackageExportsValue;
}
export interface IPackageJsonExports {
    exports?: IPackageExportsValueFallback | IPackageJsonExportsEntryObjectRoot;
}
export {};
