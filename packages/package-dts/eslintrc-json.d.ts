/**
 * Created by user on 2019/5/19.
 */
import { JSONSchemaForESLintConfigurationFiles } from './types/eslintrc.json';
export declare type ILibEslint = typeof import('./types/eslintrc.json');
export declare type IEslintrcJson = JSONSchemaForESLintConfigurationFiles & {
    parser?: string | '@typescript-eslint/parser';
    extends?: (string | 'plugin:@typescript-eslint/recommended' | 'bluelovers')[];
    parserOptions?: JSONSchemaForESLintConfigurationFiles["parserOptions"] & {
        /**
         * path for tsconfig.json
         */
        project?: string;
    };
};
export default IEslintrcJson;
