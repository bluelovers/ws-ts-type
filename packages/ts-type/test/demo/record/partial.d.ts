import { ITSMergeBoth, ITSKeyIsPartialOfRecord } from '../../../lib';
interface Test31 {
    id: number;
    code?: string;
}
interface Test32 {
    id: string;
    code?: string;
}
declare type Test33 = ITSMergeBoth<Test31, Test32>;
export declare const x3: Test33;
export declare function f<T, K extends keyof T>(o: T, k: ITSKeyIsPartialOfRecord<T, K>): void;
export {};
