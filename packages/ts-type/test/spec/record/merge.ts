import { ITSMergeBoth, ITSKeyIsPartialOfRecord } from '../../../lib';

type Test1 = { id: number, code: string }
type Test2 = { id: string, code: number }
type Test3 = ITSMergeBoth<Test1, Test2>

// This is not allowed, because x doesn't match Test1 OR Test2
export const x: Test3 = { id: "bob", code: "bob" }

interface Test21 { id: number, code: string }
interface Test22 { id: string, code: number }

type Test23 = ITSMergeBoth<Test21, Test22>

export const x2: Test23 = {
	id: "bob",
	code: "bob"
}

interface Test31 { id: number, code?: string }
interface Test32 { id: string }

type Test33 = ITSMergeBoth<Test31, Test32>

export const x3: Test33 = {
	id: "bob",
	//code: "bob"
}

export function f<T, K extends keyof T>(o: T, k: ITSKeyIsPartialOfRecord<T, K>)
{

}

f(x3, 'code')

