/**
 * @see https://juejin.cn/post/7116327095118069773
 */
export declare type ITSEmptyRecordByKeys<K extends PropertyKey> = Record<K, never>;
/**
 * @see https://juejin.cn/post/7116327095118069773
 */
export declare type ITSEmptyRecord = ITSEmptyRecordByKeys<PropertyKey>;
