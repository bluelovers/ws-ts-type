/**
 * 配置文件類型定義匯入模組
 * Configuration file type definitions import module
 *
 * 匯入各類配置文件的類型定義：
 * - package.json
 * - .eslintrc.json
 * - tsconfig.json
 * - .travis.yml
 *
 * @package
 */

import { readFileSync } from 'fs';
import IPackageJson from './package-json';
export { IEslintrcJson } from './eslintrc-json';
export { IPackageJson, ILibPackageJson } from './package-json';
export { ITsconfig } from './tsconfig-json';
export { ITravisCI } from './travis-json';

/**
 * 讀取並解析 package.json 檔案
 * Read and parse package.json file
 *
 * @param file - package.json 檔案路徑 / package.json file path
 * @returns 解析後的 package.json 物件 / Parsed package.json object
 */
export function readPackageJson(file: string): IPackageJson
{
	return JSON.parse(readFileSync(file).toString());
}

export default IPackageJson;
