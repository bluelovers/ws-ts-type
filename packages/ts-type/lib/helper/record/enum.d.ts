import { ITSEnumLike } from '../../type/record/enum';
import { ITSValueOfRecord } from '../../helper';
export type ITSExcludeEnumValue<Enum extends ITSEnumLike, U extends ITSValueOfRecord<Enum>> = Exclude<ITSValueOfRecord<Enum>, U>;
export type ITSExtractEnumValue<Enum extends ITSEnumLike, U extends ITSValueOfRecord<Enum>> = Extract<ITSValueOfRecord<Enum>, U>;
