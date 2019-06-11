/**
 * Created by user on 2019/6/11.
 */
/**
 * Same property names, but make the value a promise instead of a concrete one
 * @see https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-1.html
 */
export declare type ITSDeferred<T> = {
    [P in keyof T]: Promise<T[P]>;
};
