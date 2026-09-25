import { ITSKeyOfUnion, ITSValueOfUnion } from "../../helper/key-value";
import { ITSPartialPick, ITSPartialWith, ITSRequiredPick, ITSRequiredWith } from "../record";
/**
 * Makes the selected properties optional while preserving
 * the structure of each union member.
 *
 * This is the distributive Union version.
 *
 * @example
 * type T =
 *   | { type: "a"; value: number }
 *   | { type: "b"; text: string };
 *
 * type Result = ITSPartialPickUnion<T>;
 * // {
 * //   type?: "a";
 * //   value?: number;
 * // } | {
 * //   type?: "b";
 * //   text?: string;
 * // }
 */
export type ITSPartialPickUnion<T, K extends ITSKeyOfUnion<T> = ITSKeyOfUnion<T>> = T extends any ? {
    [P in K & keyof T]?: T[P];
} : never;
/**
 * Makes the selected properties required while preserving
 * the structure of each union member.
 *
 * This is the distributive Union version.
 *
 * @example
 * type T =
 *   | { type: "a"; value?: number }
 *   | { type: "b"; text?: string };
 *
 * type Result = ITSRequiredPickUnion<T>;
 * // {
 * //   type: "a";
 * //   value: number;
 * // } | {
 * //   type: "b";
 * //   text: string;
 * // }
 */
export type ITSRequiredPickUnion<T, K extends ITSKeyOfUnion<T> = ITSKeyOfUnion<T>> = T extends any ? {
    [P in K & keyof T]-?: T[P];
} : never;
/**
 * Makes the selected properties optional and flattens
 * all properties from every union member into a single object type.
 *
 * Unlike ITSPartialPickUnion, this does not preserve the
 * individual union-member structure.
 *
 * @example
 * type T =
 *   | { type: "a"; value: number }
 *   | { type: "b"; text: string };
 *
 * type Result = ITSPartialPickUnionFlat<T>;
 * // {
 * //   type?: "a" | "b";
 * //   value?: number;
 * //   text?: string;
 * // }
 */
export type ITSPartialPickUnionFlat<T, K extends ITSKeyOfUnion<T> = ITSKeyOfUnion<T>> = {
    [P in K]?: ITSValueOfUnion<T, P>;
};
/**
 * Makes the selected properties required and flattens
 * all members of a union into a single object type.
 *
 * Note: this utility intentionally makes every selected property
 * required. For a natural flattened representation that preserves
 * whether a property exists in every member, use a dedicated
 * flat-base utility.
 */
export type ITSRequiredPickUnionFlat<T, K extends ITSKeyOfUnion<T> = ITSKeyOfUnion<T>> = {
    [P in K]-?: ITSValueOfUnion<T, P>;
};
/**
 * Makes the specified properties required for each member
 * of a union while preserving the union-member structure.
 *
 * Other properties are preserved unchanged.
 */
export type ITSRequiredWithUnion<T, K extends ITSKeyOfUnion<T>> = T extends any ? K extends keyof T ? Omit<T, K> & ITSRequiredPick<T, K> : T : never;
/**
 * Makes the specified properties optional for each member
 * of a union while preserving the union-member structure.
 *
 * Other properties are preserved unchanged.
 */
export type ITSPartialWithUnion<T, K extends ITSKeyOfUnion<T>> = T extends any ? K extends keyof T ? Omit<T, K> & ITSPartialPick<T, K> : T : never;
export type ITSUnionFlat<T> = {
    [P in ITSKeyOfUnionRequired<T>]-?: ITSValueOfUnion<T, P>;
} & {
    [P in ITSKeyOfUnionOptional<T>]?: ITSValueOfUnion<T, P>;
};
/**
 * Checks whether K is required in every member of T.
 */
export type ITSIsRequiredInUnion<T, K extends ITSKeyOfUnion<T>> = false extends (T extends unknown ? K extends keyof T ? {} extends Pick<T, K> ? false : true : false : never) ? false : true;
/**
 * Gets keys that are required in every member of T.
 */
export type ITSKeyOfUnionRequired<T> = {
    [K in ITSKeyOfUnion<T>]: ITSIsRequiredInUnion<T, K> extends true ? K : never;
}[ITSKeyOfUnion<T>];
/**
 * Gets keys that are not required in every member of T.
 */
export type ITSKeyOfUnionOptional<T> = Exclude<ITSKeyOfUnion<T>, ITSKeyOfUnionRequired<T>>;
/**
 * Makes the specified properties required and flattens
 * all members of a union into a single object type.
 *
 * Other properties from all union members are preserved as
 * optional properties because they may not exist in every member.
 */
export type ITSPartialWithUnionFlat<T, K extends ITSKeyOfUnion<T>> = ITSPartialWith<ITSUnionFlat<T>, K>;
/**
 * Makes the specified properties optional and flattens
 * all members of a union into a single object type.
 *
 * Other properties from all union members are preserved as
 * optional properties because they may not exist in every member.
 */
export type ITSRequiredWithUnionFlat<T, K extends ITSKeyOfUnion<T>> = ITSRequiredWith<ITSUnionFlat<T>, K>;
