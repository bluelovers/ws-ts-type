import * as fg from 'fast-glob';
import * as fs from 'fs-extra';
import path = require('upath2');

let root_lib = path.join(__dirname, '../..', 'lib');

fg
	.async<string>([
		'**/*.ts',
		'!index.ts',
		'!build-in.ts',
		'!**/*.d.ts',
		'!**/_*',
		'!test',
	], {
		cwd: root_lib,
	})
	.then(function (ls)
	{
		ls = ls
			.map(function (v)
			{
				let data = path.parse(v);

				return './' + path.join(data.dir, data.name)
			})
			.map(function (v)
			{
				return `export * from '${v}';`
			})
		;

		ls.push('');

		let out = ls.join('\n');

		console.log(out);

		return fs.outputFile(path.join(root_lib, 'index.ts'), out)
	})
	.then(function (v)
	{
		console.log(`saved index.ts`);

		return v;
	})
