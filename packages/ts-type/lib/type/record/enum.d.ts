import { ITSReadonlyRecord } from './readonly';
export type ITSEnumLike<K extends string = string> = ITSReadonlyRecord<K, string | number>;
