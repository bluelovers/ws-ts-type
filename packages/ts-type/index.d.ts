import { ITSMapLike, ITSResolvable, ITSTypeFunction } from './lib';
export * from './lib';
export * from 'typedarray-dts';
export declare type ITSType = typeof import('./index');
export declare type ITSTypeBuildIn = typeof import('./lib/_build-in');
export default ITSType;
export declare type ITSUnpackedReturnType<T extends (...args: any[]) => any> = ITSUnpacked<ReturnType<T>>;
/**
 * @see https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-8.html
 */
export declare type ITSUnpacked<T> = T extends ITSMapLike<any, infer U> ? U : T extends (infer U)[] ? U : T extends ArrayLike<infer U> ? U : T extends Iterator<infer U> ? U : T extends IteratorResult<infer U> ? U : T extends ITSTypeFunction<infer U> ? U : T extends ITSResolvable<infer U> ? U : T;
export declare type ITSUnpackedPromiseLike<T> = T extends ITSResolvable<infer U> ? U : T;
/**
 * for Iterator IteratorResult
 */
export declare type ITSUnpackedIteratorLike<T extends Iterator<any> | IteratorResult<any>> = T extends Iterator<infer U> ? ITSUnpacked<U> : T extends IteratorResult<infer U> ? ITSUnpacked<U> : T;
export declare type ITSUnpackedArrayLike<T extends ArrayLike<any> | any[]> = T extends (infer U)[] ? ITSUnpacked<U> : T extends ArrayLike<infer U> ? ITSUnpacked<U> : T;
/**
 * Same property names, but make the value a promise instead of a concrete one
 * @see https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-1.html
 */
export declare type ITSDeferred<T> = {
    [P in keyof T]: Promise<T[P]>;
};
/**
 * Wrap proxies around properties of T
 * @see https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-1.html
 */
export declare type ITSProxify<T> = {
    [P in keyof T]: {
        get(): T[P];
        set(v: T[P]): void;
    };
};
export declare type ITSAnyFunction = ITSTypeFunction<any>;
export declare type ITSOverwriteThisFunction<T extends any, F extends (...args: any[]) => any> = (this: T, ...args: Parameters<F>) => ReturnType<F>;
export declare type ITSUnpackedThisFunction<T extends (...args: any[]) => any> = T extends (this: infer R, ...args: any[]) => any ? R : unknown;
/**
 * https://stackoverflow.com/questions/49285864/is-there-a-valueof-similar-to-keyof-in-typescript
 */
export declare type ITSValueOf<T> = T[keyof T];
export declare type ITSKeyOf<T> = keyof T;
export declare type ITSPickValueOf<T, K extends keyof T> = ITSValueOf<Pick<T, K>>;
export declare type ITSValueOfIterator<T extends ITSIteratorLazy<any>> = (T extends Iterator<infer U> ? U : T extends IteratorResult<infer U> ? U : any)[];
export declare type ITSValueOfMap<T extends ITSMapLike<any, any>> = T extends ITSMapLike<any, infer U> ? U[] : any[];
export declare type ITSIteratorLazy<T extends Iterator<any> | IteratorResult<any>> = T extends IteratorResult<infer U> ? IteratorResult<U> : T extends Iterator<infer U> ? Iterator<U> : T;
export declare type ITSTypeOfArrayLike<T extends any[]> = T extends (infer U)[] ? U : T extends ArrayLike<infer U> ? U : any;
export declare type ITSTypeOfIterator<T extends ITSIteratorLazy<any>> = T extends Iterator<infer U> ? U : T extends IteratorResult<infer U> ? U : any;
