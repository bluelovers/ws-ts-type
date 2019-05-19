/**
 * Created by user on 2019/5/18.
 */

import fs = require('fs');
import IPackageJson from './package-json';
export { IEslintrcJson } from './eslintrc-json';
export { IPackageJson, ILibPackageJson } from './package-json';
export { ITsconfig } from './tsconfig-json';
export { ITravisCI } from './travis-json';

export function readPackageJson(file: string): IPackageJson
{
	return JSON.parse(fs.readFileSync(file).toString());
}

export default IPackageJson;
