type FunctionUnion = (() => void) | ((p: string) => void);
type FunctionIntersection = (() => void) & ((p: string) => void);
export declare const r1: {
    s: FunctionUnion;
    a: (() => void) & ((p: string) => void);
    b: FunctionIntersection;
    b2: () => void;
    c: {
        a: 1;
    } & {
        b?: 2;
    };
};
export {};
