import { ITSExtract2 } from '../helper/filter';

type I_RecordOfMatchKey<M, T, K extends keyof M = keyof M> = {
	[P in K]: ITSExtract2<M[P], T, P>;
};

type I_RecordOfMatchValue<M, T, K extends keyof M = keyof M> = {
	[P in K]: ITSExtract2<M[P], T>;
};
