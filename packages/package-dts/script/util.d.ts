/**
 * Created by user on 2019/5/19.
 */
import Bluebird from "bluebird";
import { JSONSchema4 } from 'json-schema';
export interface IDownloadJsonAndBuildParams {
    href: string;
    saveName?: string;
    savePath?: string;
    compileName?: string;
    savePathCompile?: string;
    saveNameCompile?: string;
    skipExists?: boolean;
    handleSchemaBeforeCompile?<T extends JSONSchema4>(schema: T): T;
}
export declare function downloadJsonAndBuild(options: IDownloadJsonAndBuildParams): Bluebird<any>;
export declare function handleFileName(name: string): string;
