/**
 * 標準 HTTP 回應標頭欄位定義
 * Standard HTTP Response Header Fields Definition
 *
 * 參考 RFC 7231 定義的 HTTP 回應標頭
 * Reference RFC 7231 for HTTP response header definitions
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers
 */
export interface IStandardResponseFields {
    'Access-Control-Allow-Origin'?: string;
    'Access-Control-Allow-Credentials'?: string;
    'Access-Control-Expose-Headers'?: string;
    'Access-Control-Max-Age'?: string;
    'Access-Control-Allow-Methods'?: string;
    'Access-Control-Allow-Headers'?: string;
    'Accept-Patch'?: string;
    'Accept-Ranges'?: string;
    'Age'?: string;
    'Allow'?: string;
    'Alt-Svc'?: string;
    'Cache-Control'?: string;
    'Connection'?: string;
    'Content-Disposition'?: string;
    'Content-Encoding'?: string;
    'Content-Language'?: string;
    'Content-Length'?: string;
    'Content-Location'?: string;
    'Content-MD5'?: string;
    'Content-Range'?: string;
    'Content-Type'?: string;
    'Date'?: string;
    'Delta-Base'?: string;
    'ETag'?: string;
    'Expires'?: string;
    'IM'?: string;
    'Last-Modified'?: string;
    'Link'?: string;
    'Location'?: string;
    'P3P'?: string;
    'Pragma'?: string;
    'Proxy-Authenticate'?: string;
    'Public-Key-Pins'?: string;
    'Retry-After'?: string;
    'Server'?: string;
    'Set-Cookie'?: string;
    'Strict-Transport-Security'?: string;
    'Trailer'?: string;
    'Transfer-Encoding'?: string;
    'Tk'?: string;
    'Upgrade'?: string;
    'Vary'?: string;
    'Via'?: string;
    'Warning'?: string;
    'WWW-Authenticate'?: string;
    'X-Frame-Options'?: string;
}
export default IStandardResponseFields;
