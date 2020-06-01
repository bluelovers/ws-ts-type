/**
 * Created by user on 2019/5/18.
 */

import { downloadJsonAndBuild } from './util';

let skipExists: boolean;
skipExists = false;

downloadJsonAndBuild({
	href: 'https://github.com/SchemaStore/schemastore/raw/master/src/schemas/json/package.json',
	skipExists,
});

downloadJsonAndBuild({
	href: 'https://github.com/SchemaStore/schemastore/raw/master/src/schemas/json/eslintrc.json',
	skipExists,
});

downloadJsonAndBuild({
	href: 'https://github.com/SchemaStore/schemastore/raw/master/src/schemas/json/travis.json',
	skipExists,
});

downloadJsonAndBuild({
	href: 'https://github.com/SchemaStore/schemastore/raw/master/src/schemas/json/tsconfig.json',
	skipExists,
});

/*
Bluebird.resolve(axios.get('https://github.com/SchemaStore/schemastore/raw/master/src/schemas/json/package.json'))
	.then(function (res)
	{
		console.log(`downloaded`);

		if (typeof res.data === 'string')
		{
			return JSON.parse(res.data)
		}

		return res.data
	})
	.tap(function (data)
	{
		return fs.writeJSON(path.join(__dirname, '../schema/package.json'), data, {
			spaces: "\t",
		})
	})
	.tap(function (data)
	{
		console.log(`json saved`);
	})
	.then(function (data)
	{
		console.log(`start compile .d.ts`);

		return compile(data, 'IPackageJson', {
			enableConstEnums: true,
			unreachableDefinitions: true,
		})
	})
	.then(function (ts)
	{
		console.log(`compiled`);

		return fs.writeFile(path.join(__dirname, '../types', 'package.json.d.ts'), ts)
	})
	.tap(function (data)
	{
		console.log(`.d.ts saved`);
	})
;
*/

