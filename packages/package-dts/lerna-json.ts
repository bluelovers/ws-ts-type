/**
 * Created by user on 2020/6/19.
 */

import { AJSONSchemaForLernaJsonFiles } from './types/lerna.json';
import { ITSPartialPick } from 'ts-type/lib/type/record';

import { IPackageJsonTag, IReleaseType } from './lib/package-json/types';

export * from './lib/lerna-json/types';
import { INpmClient } from './lib/lerna-json/types';

export type { IReleaseType }

export interface ILernaJsonCommand extends ITSPartialPick<AJSONSchemaForLernaJsonFiles["command"], keyof AJSONSchemaForLernaJsonFiles["command"]>
{
	publish?: AJSONSchemaForLernaJsonFiles["command"]["publish"] & {
		"bump"?: IReleaseType,
		"conventionalCommits"?: boolean,
		"conventionalGraduate"?: boolean
		distTag?: IPackageJsonTag,
	},

	"version"?: AJSONSchemaForLernaJsonFiles["command"]["version"] & {
		"bump"?: IReleaseType,
		"conventionalCommits"?: boolean,
		"changelogPreset"?: string | "@bluelovers/conventional-changelog-bluelovers"
	},

	run?: AJSONSchemaForLernaJsonFiles["command"]["run"] & {
		"stream": boolean
	},

	exec?: AJSONSchemaForLernaJsonFiles["command"]["exec"] & {
		"stream": boolean
	},

	[k: string]: Record<string, any>;
}

export interface ILernaJson extends AJSONSchemaForLernaJsonFiles
{

	/**
	 * The current version of the repository (or independent).
	 */
	version?: string | "independent";

	/**
	 * Specify which client to run commands with (change to "yarn" to run commands with yarn. Defaults to "npm".
	 */
	npmClient?: INpmClient;

	workspaces?: (string | "packages/*")[];
	packages?: (string | "packages/*")[];

	command?: ILernaJsonCommand,
}

export default ILernaJson
