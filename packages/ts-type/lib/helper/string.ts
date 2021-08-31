
export type ITSToStringLiteralAllowedType = string | number | boolean | bigint;

export type ITSToStringLiteral<T extends ITSToStringLiteralAllowedType> = `${T}`
