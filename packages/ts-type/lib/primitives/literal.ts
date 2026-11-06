/**
 * 用於防止 TypeScript 聯集型別被自動簡化（Widening）
 */

/**
 * 保留字面值，同時允許任意字串
 * @example type Theme = 'light' | 'dark' | (string & {});
 */
export type IPreserveString<T extends string = string> = T & {};

/**
 * 保留數字字面值，同時允許任意數字
 * @example type StatusCode = 200 | 404 | (number & {});
 */
export type IPreserveNumber<T extends number = number> = T & {};

/**
 * 通用的字面值保留器
 *
 * @example
 * type IResult = IPreserveLiteral<'small' | 'medium' | 'large' | string>;
 * // type IResult = "small" | "medium" | "large" | string
 */
export type IPreserveLiteral<T> = T & {};
