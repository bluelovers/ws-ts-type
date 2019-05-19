/**
 * Created by user on 2019/5/18.
 */
import IPackageJson from './package-json';
export { IEslintrcJson } from './eslintrc-json';
export { IPackageJson, ILibPackageJson } from './package-json';
export { ITsconfig } from './tsconfig-json';
export { ITravisCI } from './travis-json';
export declare function readPackageJson(file: string): IPackageJson;
export default IPackageJson;
