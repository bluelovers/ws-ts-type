/**
 * https://stackoverflow.com/a/55479659/4563339
 */
import { ITSExclude2, ITSExtract2 } from './filter';
import { ITSValueOf } from './key-value';
export declare type ITSRecordExcludeToKey<Base, Type> = {
    [Key in keyof Base]: ITSExclude2<Base[Key], Type, Key>;
};
export declare type ITSRecordExtractToKey<Base, Type> = {
    [Key in keyof Base]: ITSExtract2<Base[Key], Type, Key>;
};
export declare type ITSKeyOfRecordExcludeToKey<Base, Type> = ITSValueOf<ITSRecordExcludeToKey<Base, Type>>;
export declare type ITSKeyOfRecordExtractToKey<Base, Type> = ITSValueOf<ITSRecordExtractToKey<Base, Type>>;
