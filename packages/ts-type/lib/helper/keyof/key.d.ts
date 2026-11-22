/**
 * Extracts the keys of a type.
 *
 * For a union type, only keys shared by all union members are returned.
 *
 * @example
 * type A = { name: string; age: number };
 * type B = { name: string; email: string };
 *
 * type Keys = ITSKeyOf<A | B>;
 * // "name"
 */
export type ITSKeyOf<T> = keyof T;
/**
 * Extracts all keys from every member of a union type.
 *
 * Unlike `keyof T`, this distributes over union members and returns
 * the union of their keys.
 *
 * @example
 * type A = { name: string; age: number };
 * type B = { name: string; email: string };
 *
 * type Keys = ITSKeyOfUnion<A | B>;
 * // "name" | "age" | "email"
 */
export type ITSKeyOfUnion<T> = T extends any ? keyof T : never;
/**
 * 找出 T 當中與 U 相同的鍵
 * Find keys that are the same between T and U
 *
 * @example
 * type A = { a: 1; b: 2; };
 * type B = { a: 3; c: 4; };
 * type Result = ITSKeyofSame<A, B>; // 'a'
 */
export type ITSKeyofSame<T, U> = Extract<keyof T, keyof U>;
/**
 * 找出 T 當中與 U 不同的鍵
 * Find keys that are different between T and U
 *
 * @example
 * type A = { a: 1; b: 2; };
 * type B = { a: 3; c: 4; };
 * type Result = ITSKeyofDiff<A, B>; // 'b'
 */
export type ITSKeyofDiff<T, U> = Exclude<keyof T, ITSKeyofSame<T, U>>;
/**
 * 找出 T 與 U 當中同時存在的鍵
 * Find keys that exist in both T and U
 *
 * @example
 * type A = { a: 1; b: 2; };
 * type B = { a: 3; c: 4; };
 * type Result = ITSKeyofBothSame<A, B>; // 'a'
 */
export type ITSKeyofBothSame<T, U> = ITSKeyofSame<T, U>;
/**
 * 去除 T 與 U 當中同時存在的鍵
 * Remove keys that exist in both T and U
 *
 * @example
 * type A = { a: 1; b: 2; };
 * type B = { a: 3; c: 4; };
 * type Result = ITSKeyofBothDiff<A, B>; // 'b' | 'c'
 */
export type ITSKeyofBothDiff<T, U> = ITSKeyofDiff<T, U> | ITSKeyofDiff<U, T>;
