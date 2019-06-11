/**
 * Created by user on 2019/6/9.
 */
export interface ICommonNonStandardResponseFields {
    'Content-Security-Policy,'?: string;
    'X-Content-Security-Policy,'?: string;
    'X-WebKit-CSP'?: string;
    'Refresh'?: string;
    'Status'?: string;
    'Timing-Allow-Origin'?: string;
    'X-Content-Duration'?: string;
    'X-Content-Type-Options'?: string;
    'X-Powered-By'?: string;
    'X-Request-ID,'?: string;
    'X-Correlation-ID'?: string;
    'X-UA-Compatible'?: string;
    'X-XSS-Protection'?: string;
}
export default ICommonNonStandardResponseFields;
