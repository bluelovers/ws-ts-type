export declare let exportedType: {
    command: {
        [x: string]: Record<string, unknown>;
        publish?: import("ts-type").ITSMergeBoth<{
            [k: string]: unknown;
            ignoreChanges?: string[];
            message?: string;
        }, {
            concurrency?: number;
            bump?: import("semver").ReleaseType;
            conventionalCommits?: boolean;
            conventionalGraduate?: boolean;
            distTag?: string;
        }>;
        version?: import("ts-type").ITSMergeBoth<{
            [k: string]: unknown;
            allowBranch?: string[];
            message?: string;
        }, {
            concurrency?: number;
            bump?: import("semver").ReleaseType;
            conventionalCommits?: boolean;
            changelogPreset?: string;
        }>;
        run?: import("ts-type").ITSMergeBoth<{
            [k: string]: unknown;
            npmClient?: string;
        }, {
            [k: string]: unknown;
            concurrency?: number;
            stream: boolean;
        }>;
        exec?: {
            [k: string]: unknown;
            concurrency?: number;
            stream: boolean;
        };
        bootstrap?: {
            [k: string]: unknown;
            ignore?: string[];
            npmClientArgs?: string[];
        };
        init?: {
            [k: string]: unknown;
            exact?: boolean;
        };
    };
    version?: string;
    npmClient?: string;
    workspaces?: string[];
    packages?: string[];
};