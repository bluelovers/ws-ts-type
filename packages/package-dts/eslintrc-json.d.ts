/**
 * Created by user on 2019/5/19.
 */
import { JSONSchemaForESLintConfigurationFiles, Rule } from './types/eslintrc.json';
export type ILibEslint = typeof import('./types/eslintrc.json');
export declare const enum EnumRule {
    off = "off",
    warn = "warn",
    error = "error"
}
export type IRule = Rule | EnumRule;
export type IEslintrcJson = JSONSchemaForESLintConfigurationFiles & {
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
