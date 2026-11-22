import { ITSLogic_IsStringLiteral } from '../../logic/string/string-literal';
export type ITSRefineOverrideLooseType<T1, T2> = {
    [K in keyof T1]: K extends keyof T2 ? string extends T1[K] ? ITSLogic_IsStringLiteral<T2[K]> extends true ? T2[K] : T1[K] : T1[K] : T1[K];
};
