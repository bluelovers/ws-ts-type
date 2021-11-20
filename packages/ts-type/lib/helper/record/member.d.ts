import { ITSExtractRecord } from './pick-type';
import { ITSPropertyKey } from '../../type/base';
import { ITSExtractKeyof } from '../filter';
/**
 * filter all member is function and key type is string or symbol
 */
export declare type ITSMemberMethods<T> = ITSExtractRecord<T, Function, Extract<keyof T, ITSPropertyKey>>;
export declare type ITSKeyofMemberMethods<T> = ITSExtractKeyof<ITSMemberMethods<T>, ITSPropertyKey>;
