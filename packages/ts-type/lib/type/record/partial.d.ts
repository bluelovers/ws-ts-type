export declare type ITSPartialRecord<K extends keyof any, T> = {
    [P in K]?: T;
};
export declare type ITSRequireRecord<K extends keyof any, T> = {
    [P in K]-?: T;
};
