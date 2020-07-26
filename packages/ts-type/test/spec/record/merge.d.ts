import { ITSMergeBoth, ITSKeyIsPartialOfRecord } from '../../../lib';
declare type Test1 = {
    id: number;
    code: string;
};
declare type Test2 = {
    id: string;
    code: number;
};
declare type Test3 = ITSMergeBoth<Test1, Test2>;
export declare const x: Test3;
interface Test21 {
    id: number;
    code: string;
}
interface Test22 {
    id: string;
    code: number;
}
declare type Test23 = ITSMergeBoth<Test21, Test22>;
export declare const x2: Test23;
interface Test31 {
    id: number;
    code?: string;
}
interface Test32 {
    id: string;
}
declare type Test33 = ITSMergeBoth<Test31, Test32>;
export declare const x3: Test33;
export declare function f<T, K extends keyof T>(o: T, k: ITSKeyIsPartialOfRecord<T, K>): void;
export {};
