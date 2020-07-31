/**
 * Created by user on 2020/6/19.
 */
import { AJSONSchemaForLernaJsonFiles } from './types/lerna.json';
import { ITSMergeBoth, ITSOverwrite } from 'ts-type/lib/type/record';
import { IPackageJsonTag, IReleaseType } from './lib/package-json/types';
export * from './lib/lerna-json/types';
import { INpmClient } from './lib/lerna-json/types';
import { IBranch } from './lib/types';
export type { IReleaseType };
declare type _Command = AJSONSchemaForLernaJsonFiles["command"];
declare type _MergeCommand<T extends Record<string, Record<string, any>>> = {
    [P in keyof (T & _Command)]?: (P extends keyof _Command ? P extends keyof T ? ITSMergeBoth<_Command[P], T[P]> : _Command[P] : T[P]);
};
export interface ILernaJsonCommand extends _MergeCommand<{
    publish?: {
        concurrency?: number;
        "bump"?: IReleaseType;
        "conventionalCommits"?: boolean;
        "conventionalGraduate"?: boolean;
        distTag?: IPackageJsonTag;
        npmClient?: INpmClient;
        allowBranch?: IBranch[];
        noPrivate?: boolean;
    };
    "version"?: {
        concurrency?: number;
        "bump"?: IReleaseType;
        allowBranch?: IBranch[];
        "conventionalCommits"?: boolean;
        "changelogPreset"?: string | "@bluelovers/conventional-changelog-bluelovers";
        exact?: boolean;
        createRelease?: "gitlab" | "github";
        noPrivate?: boolean;
    };
    run?: {
        concurrency?: number;
        "stream"?: boolean;
        npmClient?: INpmClient;
        [k: string]: unknown;
    };
    exec?: {
        concurrency?: number;
        "stream"?: boolean;
        [k: string]: unknown;
    };
}> {
    [k: string]: Record<string, unknown>;
}
export interface ILernaJson extends ITSOverwrite<AJSONSchemaForLernaJsonFiles, {
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
    command?: ILernaJsonCommand;
}> {
}
export default ILernaJson;
