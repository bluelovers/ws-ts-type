import { ITSMergeBoth } from '../../../lib';

type Test1 = { id: number, code: string }
type Test2 = { id: string, code: number }
type Test3 = ITSMergeBoth<Test1, Test2>

// This is not allowed, because x doesn't match Test1 OR Test2
export const x: Test3 = { id: "bob", code: "bob" }

interface Test21 { id: number, code: string }
interface Test22 { id: string, code: number }

type Test23 = ITSMergeBoth<Test1, Test2>

export const x2: Test23 = {
	id: "bob",
	code: "bob"
}

