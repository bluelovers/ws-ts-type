import { ITSMergeBoth, ITSKeyIsPartialOfRecord, ITSRecordExcludeToKey, ITSKeyOfRecordExcludeToKey } from '../../../lib';

interface Test31 { id: number, code?: string }
interface Test32 { id: string, code?: string }

type Test33 = ITSMergeBoth<Test31, Test32>

export const x3: Test33 = {
	id: "bob",
	//code: "bob"
}

export function f<T, K extends keyof T>(o: T, k: ITSKeyIsPartialOfRecord<T, K>)
{

}

f(x3, 'code');

f(x3, 'id')// => should  error

type IP<T> = ITSKeyOfRecordExcludeToKey<{
	[P in keyof T]: ITSKeyIsPartialOfRecord<T, P>;
}, never>

let k: IP<Test33> = 'code'
