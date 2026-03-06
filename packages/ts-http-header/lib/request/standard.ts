/**
 * 標準 HTTP 請求標頭欄位定義
 * Standard HTTP Request Header Fields Definition
 *
 * 參考 RFC 7231 定義的 HTTP 請求標頭
 * Reference RFC 7231 for HTTP request header definitions
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers
 */

export interface IStandardRequestFields
{
	'A-IM'?: string,
	'Accept'?: string,
	'Accept-Charset'?: string,
	'Accept-Encoding'?: string,
	'Accept-Language'?: string,
	'Accept-Datetime'?: string,
	'Access-Control-Request-Method'?: string,
	'Access-Control-Request-Headers'?: string,
	'Authorization'?: string,
	'Cache-Control'?: string,
	'Connection'?: string,
	'Content-Length'?: string,
	'Content-MD5'?: string,
	'Content-Type'?: string,
	'Cookie'?: string,
	'Date'?: string,
	'Expect'?: string,
	'Forwarded'?: string,
	'From'?: string,
	'Host'?: string,
	'HTTP2-Settings'?: string,
	'If-Match'?: string,
	'If-Modified-Since'?: string,
	'If-None-Match'?: string,
	'If-Range'?: string,
	'If-Unmodified-Since'?: string,
	'Max-Forwards'?: string,
	'Origin'?: string,
	'Pragma'?: string,
	'Proxy-Authorization'?: string,
	'Range'?: string,
	'Referer'?: string,
	'TE'?: string,
	'User-Agent'?: string,
	'Upgrade'?: string,
	'Via'?: string,
	'Warning'?: string,
}

export default IStandardRequestFields;
