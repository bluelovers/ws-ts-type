import { ITSArrayListMaybeReadonly } from '../../type/base';
export declare type ITSToReadonlyArray<T extends ITSArrayListMaybeReadonly<any>> = T extends [...infer R] | readonly [...infer R] ? readonly [...R] : never;
export declare type ITSToWriteableAArray<T extends ITSArrayListMaybeReadonly<any>> = T extends [...infer R] | readonly [...infer R] ? [...R] : never;
