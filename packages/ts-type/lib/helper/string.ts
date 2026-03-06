/**
 * 字面量類型工具
 * Literal Type Utilities
 * 
 * 提供字串、數字、布林值轉換為字面量類型的工具
 * Provides utilities for converting strings, numbers, booleans to literal types
 */

/** 允許轉換為字面量類型的基礎類型 / Base types allowed to convert to literal types */
export type ITSToStringLiteralAllowedType = string | number | boolean | bigint;

/**
 * 將類型轉換為字面量類型 `${T}`
 * Convert type to literal type `${T}`
 * 
 * @example
 * type Str = ITSToStringLiteral<'hello'>;
 * // type Str = "hello"
 * 
 * @example
 * type Num = ITSToStringLiteral<42>;
 * // type Num = "42"
 */
export type ITSToStringLiteral<T extends ITSToStringLiteralAllowedType> = `${T}`

/**
 * 原始類型與其字面量類型的聯合
 * Union of original type and its literal type
 * 
 * T & `${T}`
 * 
 * @example
 * type Str = ITSTypeAndStringLiteral<'hello'>;
 * // type Str = "hello" | string
 */
export type ITSTypeAndStringLiteral<T extends ITSToStringLiteralAllowedType> = T | ITSToStringLiteral<T>

/**
 * 原始類型 S 與 T 的字面量類型的聯合
 * Union of original type S and literal type of T
 * 
 * S & `${T}`
 * 
 * @example
 * type Str = ITSAndStringLiteral<'hello', string>;
 * // type Str = string | "hello"
 */
export type ITSAndStringLiteral<T extends ITSToStringLiteralAllowedType, S = string> = S | ITSToStringLiteral<T>

/**
 * 原始類型 S、T 與 T 的字面量類型的聯合
 * Union of original types S, T and literal type of T
 * 
 * S & T & `${T}`
 * 
 * @example
 * type Str = ITSAndTypeAndStringLiteral<'hello', string>;
 * // type Str = string | "hello"
 */
export type ITSAndTypeAndStringLiteral<T extends ITSToStringLiteralAllowedType, S = string> = S | ITSTypeAndStringLiteral<T>
