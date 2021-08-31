import { ITSToStringLiteral } from './string';
export declare type ITSNumberString<N extends number | bigint = number> = ITSToStringLiteral<N>;
export declare type ITSUnpackNumberString<S extends string, R = never> = S extends ITSNumberString<infer N> ? N : R;
export declare type ITSNumberValue = number | string;
export declare type ITSNumberValue2 = number | ITSNumberString;
