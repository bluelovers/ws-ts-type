export declare type ITSToStringLiteralAllowedType = string | number | boolean | bigint;
export declare type ITSToStringLiteral<T extends ITSToStringLiteralAllowedType> = `${T}`;
