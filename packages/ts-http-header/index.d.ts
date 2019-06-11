/**
 * Created by user on 2019/6/9.
 */
import IRequestHeaders from './lib/request';
import IResponseHeaders from './lib/response';
import { ITSPartialRecord } from 'ts-type';
export { IRequestHeaders, IResponseHeaders };
export declare type IHttpHeaderValues = string | number | boolean | string[];
export interface IHeaders extends IRequestHeaders, IResponseHeaders {
}
export declare type ILazyHeaders<T extends string = string, V = IHttpHeaderValues> = ITSPartialRecord<T, V>;
export default IHeaders;
