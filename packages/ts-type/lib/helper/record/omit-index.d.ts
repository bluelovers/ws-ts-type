/**
 * remove index signature using mapped types
 *
 * @see https://stackoverflow.com/a/51956054/4563339
 */
export declare type ITSOmitIndexSignatures<T> = {
    [K in keyof T as string extends K ? never : number extends K ? never : K]: T[K];
};
export declare type ITSKnownKeys<T> = keyof ITSOmitIndexSignatures<T>;
