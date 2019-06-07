/**
 * Created by user on 2019/6/7.
 */
import { ITSRequireAtLeastOne, ITSRequireOnlyOne } from '../../lib/helper';
interface T1 {
    a?: string;
    b?: number;
    c?: number;
    d?: string;
}
export declare let a: ITSRequireAtLeastOne<T1>;
export declare let b: ITSRequireOnlyOne<T1>;
export {};
