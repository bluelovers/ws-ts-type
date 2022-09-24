import { ITSMergeBoth, ITSKeyIsPartialOfRecord } from '../../../lib';
type Test1 = {
    id: number;
    code: string;
};
type Test2 = {
    id: string;
    code: number;
};
type Test3 = ITSMergeBoth<Test1, Test2>;
export declare const x: Test3;
interface Test21 {
    id: number;
    code: string;
}
interface Test22 {
    id: string;
    code: number;
}
type Test23 = ITSMergeBoth<Test21, Test22>;
export declare const x2: Test23;
export declare let y2: {
    id: string | number;
    code: string | number;
};
interface Test31 {
    id: number;
    code?: string;
}
interface Test32 {
    id: string;
    code2?: number;
}
type Test33 = ITSMergeBoth<Test31, Test32>;
export declare const x3: Test33;
export declare let y3: {
    code?: string;
    code2?: number;
    id: string | number;
};
export declare function f<T, K extends keyof T>(o: T, k: ITSKeyIsPartialOfRecord<T, K>): void;
interface Test41 {
    id: number;
    code?: string;
}
interface Test42 {
    id: string;
    code: number;
    code2?: number;
}
type Test43 = ITSMergeBoth<Test41, Test42>;
export declare const x4: Test43;
export declare let y4: {
    code2?: number;
    id: string | number;
    code?: string | number;
};
export {};
