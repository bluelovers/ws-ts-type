/**
 * 允許 null 或 undefined (經典的 Nullable)
 * @example type IName = ITSNullable<string>; // string | null | undefined
 */
export type ITSNullable<T> = T | null | undefined;
/**
 * 允許 null
 */
export type ITSNullish<T> = T | null;
/**
 * 允許 undefined
 */
export type ITSOptinal<T> = T | undefined;
/**
 * 提取非 null 和非 undefined 的類型
 * Extract non-null and non-undefined types
 */
export type ITSUnpackedNullable<T> = T extends null | undefined ? never : T;
export type ITSExtractNullable<T> = Extract<T, null | undefined>;
