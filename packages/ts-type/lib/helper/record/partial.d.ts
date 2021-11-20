/**
 * try check key is partial of record
 */
export declare type ITSKeyIsPartialOfRecord<T, K extends keyof T> = Omit<T, K> extends T ? K : never;
