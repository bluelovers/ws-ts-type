/**
 * Created by user on 2020/6/12.
 */

export interface IDependency
{
	[name: string]: IVersionValue
}

export type { IDependency as IPackageMap }

export type IVersionValue = 'latest' | 'next' | '*' | string | EnumVersionValue | EnumVersionValue2;

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
	any = '*'
}
