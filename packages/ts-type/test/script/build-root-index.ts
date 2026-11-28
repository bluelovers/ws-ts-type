import { outputFile } from 'fs-extra';
import { join } from 'upath2';
import { __ROOT } from '../__root';

const indexDts = join(__ROOT, 'index.d.ts');

/**
 * 防止根目錄的 index.d.ts 在 IDE 自動操作中被修改
 *
 * 例如 jetbrains 系列 IDE 會在移動邏輯時自動修改此檔案
 */
outputFile(indexDts, `export * from './lib';
export * from 'typedarray-dts';
export declare type ITSType = typeof import('./index');
export declare type ITSTypeBuildIn = typeof import('./lib/_build-in');
export default ITSType;
`, 'utf8');
