import { ITSMergeBoth } from '../../../lib';
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
declare type Test23 = ITSMergeBoth<Test1, Test2>;
export declare const x2: Test23;
export {};
