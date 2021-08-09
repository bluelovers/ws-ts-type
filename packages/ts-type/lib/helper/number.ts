
export type ITSNumberString<N extends number = number> = `${N}`;
export type ITSUnpackNumberString<S extends string, R = never> = S extends ITSNumberString<infer N> ? N : R;

export type ITSNumberValue = number | string;

export type ITSNumberValue2 = number | ITSNumberString;
