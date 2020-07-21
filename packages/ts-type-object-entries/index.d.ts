export declare function ObjectEntries<T, K extends string = string>(obj: {
    [s in K]: T;
} | ArrayLike<T>): [K, T][];
export default ObjectEntries;
