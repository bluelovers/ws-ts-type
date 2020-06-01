/**
 * Created by user on 2019/5/19.
 */

import fs from "fs-extra"
import http from "http"
import path from "path"
import axios from "axios"
import Bluebird from "bluebird"
import { compile, compileFromFile } from 'json-schema-to-typescript'

export function downloadJsonAndBuild(options: {
	href: string,
	saveName?: string,
	savePath?: string,
	compileName?: string,

	savePathCompile?: string,
	saveNameCompile?: string,

	skipExists?: boolean;
})
{
	if (!options.saveName)
	{
		options.saveName = path.basename(options.href)
	}

	if (!options.saveNameCompile)
	{
		options.saveNameCompile = handleFileName(options.saveName)
	}

	let filePath = path.join(__dirname, '../', options.savePath || 'schema', options.saveName);

	let filePathCompile = path.join(__dirname, '..', options.savePathCompile || 'types', options.saveNameCompile);

	let label = `[${path.basename(options.saveName)}]`;

	console.log(`${options.saveName}\n${options.saveNameCompile}`);

	let { skipExists = true } = options;



	if (skipExists && fs.existsSync(filePathCompile))
	{
		console.warn(label, `skip`);

		return Bluebird.resolve(null)
	}

	return Bluebird.resolve()
		.then(() => axios.get(options.href))
		.then(function (res)
		{
			console.log(label, `downloaded`);

			if (typeof res.data === 'string')
			{
				return JSON.parse(res.data)
			}

			return res.data
		})
		.tap(function (data)
		{
			return fs.writeJSON(filePath, data, {
				spaces: "\t",
			})
		})
		.tap(function ()
		{
			console.log(label, `json saved`);
		})
		.then(function (data)
		{
			console.log(label, `start compile .d.ts`);

			return compile(data, 'IMySchema', {
				enableConstEnums: true,
				unreachableDefinitions: true,
			})
		})
		.tap(function (ts)
		{
			console.log(label, `compiled`);

			return fs.writeFile(filePathCompile, ts)
		})
		.tap(function ()
		{
			console.log(label, `.d.ts saved`);
		})
		.thenReturn(true)
	;
}

export function handleFileName(name: string)
{
	return name + '.d.ts';
}
