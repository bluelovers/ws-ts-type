/**
 * Created by user on 2019/6/9.
 */
import IRequestHeaders from './lib/request';
import IResponseHeaders from './lib/response';
export { IRequestHeaders, IResponseHeaders };
export interface IHeaders extends IRequestHeaders, IResponseHeaders {
}
export default IHeaders;
