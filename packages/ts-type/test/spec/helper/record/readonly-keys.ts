import {
	ITSKeyIsNotReadonlyOfRecord,
	ITSKeyIsReadonlyOfRecord,
	ITSKeyOfRecordExcludeReadonly,
	ITSKeyOfRecordExtractReadonly,
} from '../../../../lib/helper/record';

interface Todo {
	readonly title: string
	readonly description: string
	completed: boolean
}

export const r1 = (() => {

	type Keys = ITSKeyOfRecordExtractReadonly<Todo>

	let a: Keys
	let a2: ITSKeyOfRecordExcludeReadonly<Todo>

	// @ts-expect-error
	let b: ITSKeyIsReadonlyOfRecord<Todo, 'completed'>
	let c: ITSKeyIsReadonlyOfRecord<Todo, 'title'>
	let d: ITSKeyIsNotReadonlyOfRecord<Todo, 'completed'>
	// @ts-expect-error
	let d2: ITSKeyIsNotReadonlyOfRecord<Todo, 'title'>

	a = 'title'
	a2 = 'completed'

	// @ts-expect-error
	a = 'completed'
	// @ts-expect-error
	a2 = 'title'

	return {
		a,
		a2,
		b,
		c,
		d,
		d2,
	}
})();
