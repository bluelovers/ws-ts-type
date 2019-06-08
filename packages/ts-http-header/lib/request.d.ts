/**
 * Created by user on 2019/6/9.
 */
import ICommonNonStandardRequestFields from './request/non-standard';
import IStandardRequestFields from './request/standard';
export interface IRequestHeaders extends IStandardRequestFields, ICommonNonStandardRequestFields {
}
export default IRequestHeaders;
