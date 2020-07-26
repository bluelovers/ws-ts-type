import IPackageJson from '../../package-json';
import ILernaJson from '../../lerna-json';

function isCurrentTypeLike<T extends Record<any, any>>(pkg: Extract<T, ILernaJson>)
{
	return {
		...pkg,
	}
}

function notCurrentTypeLike<T extends Record<any, any>>(pkg: Exclude<T, ILernaJson>)
{
	return {
		// @ts-ignore
		...pkg,
	}
}

function exportCurrentType()
{
	let pkg = {} as ILernaJson;

	return {
		...pkg,
		command: {
			...pkg.command,
		}
	}
}

export let exportedType = exportCurrentType();

isCurrentTypeLike({
		"packages": [
			"packages/*"
		],
		"command": {
			"publish": {
				"concurrency": 1,
				"ignoreChanges": [
					"**/node_modules/**",
					"**/__snapshots__/**",
					"**/__fixtures__/**",
					"**/test/**",
					"**/__tests__/**",
					"*.map",
					"*.spec.*",
					"*.test.*",
					".gitrepo"
				],
				"message": "chore(release): publish",
				"bump": "patch",
				"conventionalCommits": true,
				"conventionalGraduate": false
			},
			"version": {
				"conventionalCommits": true,
				"changelogPreset": "@bluelovers/conventional-changelog-bluelovers"
			},
			"run": {
				"stream": true
			},
			"exec": {
				"stream": true
			}
		},
		"npmClient": "yarn",
		"useWorkspaces": true,
		"version": "independent"
	}
)
