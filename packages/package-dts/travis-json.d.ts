/**
 * Created by user on 2019/5/19.
 */
import { JSONSchemaForTravisCIConfigurationFiles } from './types/travis.json';
export type ILibCore = typeof import('./types/travis.json');
export type ITravisCI = JSONSchemaForTravisCIConfigurationFiles & {};
export default ITravisCI;
