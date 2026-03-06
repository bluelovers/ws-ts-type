import { ITSOverwriteThisFunction } from '../../../lib/helper/overwrite';

// 測試覆寫函數的 this 類型 / Test overwriting function's this type
declare function originalFunction(this: string, a: number): boolean;

declare let overwrittenFunction: ITSOverwriteThisFunction<number, typeof originalFunction>;

// overwrittenFunction 的 this 應該是 number 類型 / overwrittenFunction's this should be number type
overwrittenFunction = function(this: number, a: number): boolean {
    // this 應該是 number / this should be number
    this.toFixed(); 
    return true;
};

export {};
