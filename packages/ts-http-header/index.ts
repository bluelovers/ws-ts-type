/**
 * HTTP 請求與回應標頭類型定義
 * HTTP Request and Response Header type definitions
 *
 * 包含標準 HTTP 請求和回應標頭的類型定義
 * Contains type definitions for standard HTTP request and response headers
 *
 * @package
 */

import IRequestHeaders from './lib/request';
import IResponseHeaders from './lib/response';
import { ITSPartialRecord } from 'ts-type';

/**
 * 請求標頭介面
 * Request headers interface
 */
export { IRequestHeaders, IResponseHeaders };

/**
 * HTTP 標頭值類型
 * HTTP header value types
 *
 * 支援字串、數字、布林值或字串陣列
 * Supports string, number, boolean, or string array
 */
export type IHttpHeaderValues = string | number | boolean | string[];

/**
 * 合併請求與回應標頭的完整標頭介面
 * Combined request and response headers interface
 */
export interface IHeaders extends IRequestHeaders, IResponseHeaders
{

}

/**
 * 延遲載入的標頭類型（可選鍵值）
 * Lazy loaded headers type (optional key-value)
 *
 * @typeParam T - 標頭鍵名類型 / Header key type
 * @typeParam V - 標頭值類型 / Header value type
 */
export type ILazyHeaders<T extends string = string, V = IHttpHeaderValues> = ITSPartialRecord<T, V>;

export default IHeaders;
