import { ITSEmptyRecord } from '../../type/record/empty';
export declare type ITSLogicIsEmptyRecord<T, Y = true, N = false> = T extends ITSEmptyRecord ? Y : N;
