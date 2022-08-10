export declare type ITSToStringLiteralAllowedType = string | number | boolean | bigint;
/**
 * `${T}`
 */
export declare type ITSToStringLiteral<T extends ITSToStringLiteralAllowedType> = `${T}`;
/**
 * T & `${T}`
 */
export declare type ITSTypeAndStringLiteral<T extends ITSToStringLiteralAllowedType> = T | ITSToStringLiteral<T>;
/**
 * S & `${T}`
 */
export declare type ITSAndStringLiteral<T extends ITSToStringLiteralAllowedType, S = string> = S | ITSToStringLiteral<T>;
/**
 * S & T & `${T}`
 */
export declare type ITSAndTypeAndStringLiteral<T extends ITSToStringLiteralAllowedType, S = string> = S | ITSTypeAndStringLiteral<T>;
