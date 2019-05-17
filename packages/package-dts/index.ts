/**
 * Created by user on 2019/5/18.
 */

import fs = require('fs');
import IPackageJson from './package-json';
export { IPackageJson, ILibPackageJson } from './package-json';

export function readPackageJson(file: string): IPackageJson
{
	return JSON.parse(fs.readFileSync(file).toString());
}

export default IPackageJson;
