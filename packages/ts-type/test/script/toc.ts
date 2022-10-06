import fg from '@bluelovers/fast-glob';
import { outputFile } from 'fs-extra';
import { join, parse } from 'upath2';
import { array_unique } from 'array-hyper-unique';
import { __ROOT } from '../__root';

const root_lib = join(__ROOT, 'lib');

fg
	.async<string>([
		'**/*.ts',
		'!./index.ts',
		'!./index.d.ts',
		'!/build-in.*',
//		'!**/*.d.ts',
		'!**/_*',
		'!test',
	], {
		cwd: root_lib,
	})
	.then(function (ls)
	{
		ls = array_unique(ls
			.sort()
			.map(function (v)
			{
				let data = parse(v);

				return './' + join(data.dir, data.name.replace(/\.d$/, ''))
			}))
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
