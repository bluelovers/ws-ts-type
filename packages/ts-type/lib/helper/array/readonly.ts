import { ITSArrayListMaybeReadonly } from '../../type/base';

export type ITSToReadonlyArray<T extends ITSArrayListMaybeReadonly<any>> = T extends [...infer R] | readonly [...infer R]
	? readonly [...R]
	: never
	;

export type ITSToArray<T extends ITSArrayListMaybeReadonly<any>> = T extends [...infer R] | readonly [...infer R]
	? [...R]
	: never
	;
