
export type ITSToStringLiteralAllowedType = string | number | boolean | bigint;

export type ITSToStringLiteral<T extends ITSToStringLiteralAllowedType> = `${T}`

export type ITSTypeAndStringLiteral<T extends ITSToStringLiteralAllowedType> = T | ITSToStringLiteral<T>

export type ITSAndStringLiteral<T extends ITSToStringLiteralAllowedType, S = string> = S | ITSToStringLiteral<T>

export type ITSAndTypeAndStringLiteral<T extends ITSToStringLiteralAllowedType, S = string> = S | ITSTypeAndStringLiteral<T>
