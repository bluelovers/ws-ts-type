export declare type ITSToStringLiteralAllowedType = string | number | boolean | bigint;
export declare type ITSToStringLiteral<T extends ITSToStringLiteralAllowedType> = `${T}`;
export declare type ITSTypeAndStringLiteral<T extends ITSToStringLiteralAllowedType> = T | ITSToStringLiteral<T>;
export declare type ITAndStringLiteral<T extends ITSToStringLiteralAllowedType, S = string> = S | ITSToStringLiteral<T>;
export declare type ITAndTypeAndStringLiteral<T extends ITSToStringLiteralAllowedType, S = string> = S | ITSTypeAndStringLiteral<T>;
