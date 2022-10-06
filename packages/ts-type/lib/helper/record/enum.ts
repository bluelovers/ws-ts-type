import { ITSEnumLike } from '../../type/record/enum';
import { ITSValueOf } from '../key-value';

export type ITSExcludeEnumValue<Enum extends ITSEnumLike, U extends ITSValueOf<Enum>> = Exclude<ITSValueOf<Enum>, U>;

export type ITSExtractEnumValue<Enum extends ITSEnumLike, U extends ITSValueOf<Enum>> = Extract<ITSValueOf<Enum>, U>;
