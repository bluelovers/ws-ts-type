import fg from '@bluelovers/fast-glob';
import { outputFile } from 'fs-extra';
import { join, parse } from 'upath2';

const root_lib = join(__dirname, '../..', 'lib');

fg
	.async<string>([
		'**/*.ts',
		'!/index.ts',
		'!/build-in.ts',
		'!**/*.d.ts',
		'!**/_*',
		'!test',
	], {
		cwd: root_lib,
	})
	.then(function (ls)
	{
		ls = ls
			.sort()
			.map(function (v)
			{
				let data = parse(v);

				return './' + join(data.dir, data.name)
			})
			.map(function (v)
			{
				return `export * from '${v}';`
			})
		;

		ls.push('');

		const out = ls.join('\n');

		console.log(out);

		return outputFile(join(root_lib, 'index.d.ts'), out)
	})
	.then(function (v)
	{
		console.log(`saved index.d.ts`);

		return v;
	})
