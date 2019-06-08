/**
 * Created by user on 2019/6/9.
 */
import ICommonNonStandardResponseFields from './response/non-standard';
import IStandardResponseFields from './response/standard';
export interface IResponseHeaders extends IStandardResponseFields, ICommonNonStandardResponseFields {
}
export default IResponseHeaders;
