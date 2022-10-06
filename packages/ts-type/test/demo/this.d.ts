/**
 * Created by user on 2018/11/20/020.
 */
import { ITSOverwriteThisFunction } from '../../';
import { ITSUnpackedThisFunction } from '@ts-type/unpacked';
export declare function t1(this: string, a: number): Promise<number>;
export declare let t1_this: ITSUnpackedThisFunction<typeof t1>;
export declare function t2(this: string, a: number): number;
export declare let t3: ITSOverwriteThisFunction<number, typeof t2>;
interface Function2 extends Function {
    bind<T extends any, F extends (...args: any[]) => any>(this: F, thisArg: T, ...argArray: any[]): ITSOverwriteThisFunction<T, F>;
}
export interface t4 extends Function2 {
    (): string;
}
export declare let t5: t4;
export declare let t6: ITSOverwriteThisFunction<string[], t4>;
export interface t7 extends Function {
    (): string;
}
export declare let t8: t7;
export declare let t9: any;
export interface t10 {
    (): string;
}
export declare let t11: t10;
export declare let t12: t10;
export declare function t13(): any;
export declare let t14: typeof t13;
export {};
