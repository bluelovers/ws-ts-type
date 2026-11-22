
import { expectAssignable, expectNotAssignable } from 'tsd';
import {
	ITSLogic_IsEmptyObject,
	ITSLogic_IsEmptyObject_UnionAll,
	ITSLogic_IsEmptyObject_UnionAll2,
	ITSLogic_IsEmptyObjectAndRecord_UnionAll,
	ITSLogic_IsEmptyRecord,
	ITSLogic_IsEmptyRecord_UnionAll,
	ITSLogic_IsEmptyRecord_UnionAll2,
} from '../../../lib/logic/record/empty';
import { ITSLogicIsNever } from '../../../lib';

type A1 = ITSLogic_IsEmptyObject_UnionAll<{}>;
type B1 = ITSLogic_IsEmptyObject_UnionAll<{ a: 1 }>;

expectAssignable<A1>(true);
expectNotAssignable<B1>(true);

type A2 = ITSLogic_IsEmptyObject_UnionAll<never>;

expectNotAssignable<A2>(true);

type A3 = ITSLogic_IsEmptyObject_UnionAll<undefined>;

expectNotAssignable<A3>(true);

type A4 = ITSLogic_IsEmptyObject_UnionAll<null>;

expectNotAssignable<A4>(true);

type B2 = ITSLogic_IsEmptyObject_UnionAll<{ a?: number }>;

expectNotAssignable<B2>(true);

type C1 = ITSLogic_IsEmptyObject_UnionAll<{ a: 1 } | {}>;

expectAssignable<C1>(true);
expectNotAssignable<C1>(false);

type C2 = ITSLogic_IsEmptyObject_UnionAll<Pick<{ a: 1 }, never> | {}>;

expectAssignable<C2>(true);
expectNotAssignable<C2>(false);

type C3 = ITSLogic_IsEmptyObject<{} | { a: 1 }>;

expectAssignable<C3>(true);
expectAssignable<C3>(false);

type D1 = ITSLogic_IsEmptyObject_UnionAll2<{ a: 1 } | {}>;

expectAssignable<D1>(false);
expectNotAssignable<D1>(true);

type A5 = ITSLogic_IsEmptyObject_UnionAll<Pick<{ a: 1 }, never>>;

expectAssignable<A5>(true);

type R1 = ITSLogic_IsEmptyRecord_UnionAll2<Record<string, never>>;

expectAssignable<R1>(true);

type R2 = ITSLogic_IsEmptyObject_UnionAll<Record<string, never>, false, ITSLogic_IsEmptyRecord_UnionAll2<Record<string, never>>>;

expectAssignable<R2>(true);

type R3 = ITSLogic_IsEmptyObject_UnionAll<Record<string, never>>;

expectAssignable<R3>(false);

type R4 = ITSLogic_IsEmptyObjectAndRecord_UnionAll<Record<string, never>>;

expectAssignable<R4>(true);

type R5 = ITSLogic_IsEmptyRecord<Record<string, never> | { a: 1 }>;

expectAssignable<R5>(true);
expectAssignable<R5>(false);

type R6 = ITSLogic_IsEmptyRecord_UnionAll<Record<string, never> | { a: 1 } | {}>;

expectAssignable<R6>(false);

type R7 = ITSLogic_IsEmptyRecord_UnionAll<Record<string, never> | {}>;

expectAssignable<R7>(true);
expectNotAssignable<R7>(false);


