import { PackageExportsEntry, PackageExportsEntryObject, PackageExportsFallback,
	JSONSchemaForNPMPackageJsonFiles2 as CoreProperties } from '../../types/package.json';
import { ITSPartialRecord } from 'ts-type/lib/type/record/partial';

type _IConditions = 'node-addons' | 'node' | 'default' | 'types' | 'import' | 'require';

interface _IPackageExportsEntryObjectExtend extends ITSPartialRecord<_IConditions, PackageExportsEntry | PackageExportsFallback>
{

}

declare module '../../types/package.json'
{
	interface PackageExportsEntryObject extends _IPackageExportsEntryObjectExtend
	{
		[k: string]: PackageExportsEntry | PackageExportsFallback;
	}
}

export interface IPackageExportsEntryObject extends PackageExportsEntryObject, _IPackageExportsEntryObjectExtend
{

}

/**
 * The module path prefix that is resolved when the module specifier starts with "name/", set to "./*" to allow external modules to import any subpath.
 *
 * This interface was referenced by `undefined`'s JSON-Schema definition
 * via the `patternProperty` "^\./.+".
 */
export interface IPackageJsonExportsEntryObjectRoot extends ITSPartialRecord<'default' | './package.json' | `./${string}` | _IConditions, PackageExportsEntry | PackageExportsFallback | IPackageExportsEntryObject>
{
	/**
	 * The module path that is resolved when the module specifier matches "name", shadows the "main" field.
	 */
	"."?: PackageExportsEntry | PackageExportsFallback | IPackageExportsEntryObject;

	/**
	 * The module path prefix that is resolved when the module specifier starts with "name/", set to "./*" to allow external modules to import any subpath.
	 *
	 * This interface was referenced by `undefined`'s JSON-Schema definition
	 * via the `patternProperty` "^\./.+".
	 */
	[k: string]: PackageExportsEntry | PackageExportsFallback | IPackageExportsEntryObject;
}

export interface IPackageJsonExports
{
	exports?: IPackageJsonExportsEntryObjectRoot | CoreProperties["exports"]
}
