/**
 * Created by user on 2018/11/27/027.
 */
import { ITSDiff, ITSPickNot } from 'ts-type';
export declare type Origin = {
    a: string;
    b: string;
    _c: string;
    _d: string;
};
export declare type Result = Pick<Origin, ITSDiff<keyof Origin, '_c' | '_d'>>;
export declare type Result2 = ITSPickNot<Origin, '_c' | '_d'>;
