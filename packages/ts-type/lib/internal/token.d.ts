declare const __neverPlaceholderSymbol: unique symbol;
declare const __errorPlaceholderSymbol: unique symbol;
export type I_TypeNever<Msg = never> = {
    readonly [__neverPlaceholderSymbol]: Msg;
};
export type I_TypeError<Msg = never> = {
    readonly [__errorPlaceholderSymbol]: Msg;
};
export {};
