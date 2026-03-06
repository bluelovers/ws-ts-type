import { ITSAwaitedLazy, ITSAwaitedReturnType } from '../../../lib/helper/promise';

// 測試解析類型 / Test awaited type
type TestPromise1 = Promise<string>;
type TestPromise2 = PromiseLike<number>;
type TestNested = Promise<Promise<boolean>>;

declare function func1(): Promise<string>;
declare function func2(): PromiseLike<number>;
declare function func3(): Promise<Promise<boolean>>;

// 測試 ITSAwaitedLazy / Test ITSAwaitedLazy
type Result1 = ITSAwaitedLazy<TestPromise1>; // 應該是 string / should be string
type Result2 = ITSAwaitedLazy<TestPromise2>; // 應該是 number / should be number  
type Result3 = ITSAwaitedLazy<TestNested>; // 應該是 boolean / should be boolean
type Result4 = ITSAwaitedLazy<string>; // 應該是 string / should be string

// 測試 ITSAwaitedReturnType / Test ITSAwaitedReturnType
type Return1 = ITSAwaitedReturnType<typeof func1>; // 應該是 string / should be string
type Return2 = ITSAwaitedReturnType<typeof func2>; // 應該是 number / should be number
type Return3 = ITSAwaitedReturnType<typeof func3>; // 應該是 boolean / should be boolean

export {};
