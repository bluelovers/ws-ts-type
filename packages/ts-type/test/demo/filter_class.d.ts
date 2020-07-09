/**
 * https://stackoverflow.com/a/55479659/4563339
 */
import { ITSOmitRecordType, ITSPickRecordType } from '../../lib';
export declare let C1: {
    a: number;
    b(): void;
};
export declare let t1: ITSOmitRecordType<typeof C1, Function>;
export declare let t2: ITSPickRecordType<typeof C1, Function>;
