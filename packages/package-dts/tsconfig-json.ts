/**
 * Created by user on 2019/5/19.
 */

import { JSONSchemaForTheTypeScriptCompilerSConfigurationFile } from './types/tsconfig.json';

export type ILibCore = typeof import('./types/tsconfig.json');

export type ITsconfig = JSONSchemaForTheTypeScriptCompilerSConfigurationFile & {

};

export default ITsconfig
