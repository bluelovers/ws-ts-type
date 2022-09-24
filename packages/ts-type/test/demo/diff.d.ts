/**
 * Created by user on 2018/11/27/027.
 */
import { ITSPickNot } from 'ts-type';
export type Origin = {
    a: string;
    b: string;
    _c: string;
    _d: string;
};
export type Result = Omit<Origin, '_c' | '_d'>;
export type Result2 = ITSPickNot<Origin, '_c' | '_d'>;
export type OriginOnlyHasPrefix = {
    _c: string;
    _d: string;
};
export type Result3 = Omit<Origin, keyof OriginOnlyHasPrefix>;
