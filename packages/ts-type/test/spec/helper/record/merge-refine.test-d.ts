import { printType, expectType, expectAssignable, expectNotAssignable, expectNever } from 'tsd';
import { ITSRefineOverrideLooseTypeWithAllKey, ITSRefineOverrideLooseTypeWithSameKeyOnly } from '../../../../lib/helper/record/merge-refine';
import { ITSKeyofBothSame } from '../../../../lib/helper/keyof/key';

enum EnumStatus
{
	A = 'a',
	B = 'b',
}

type A1 = {
	name: string;
	optional?: string;
	readonly readonlyName: string;
	readonly readonlyOptional?: string;
};

type B1 = {
	name: 'Alice' | 'Bob';
	optional: EnumStatus;
	readonlyName: 'foo' | 'bar';
	readonlyOptional: EnumStatus;
};

type B2 = B1 & {
	notExistsInA?: string;
};

type C1 = {
	name2: 'Alice' | 'Bob';
};

type Result1 = ITSRefineOverrideLooseTypeWithSameKeyOnly<A1, B1>;

expectAssignable<A1['name']>('Alice');
expectAssignable<A1['name']>('Alice2');

expectAssignable<Result1['name']>('Alice');
expectNotAssignable<Result1['name']>('Alice2');

expectAssignable<A1>(null as Result1);
expectNotAssignable<Result1>(null as A1);

expectAssignable<Pick<Result1, 'optional' | 'readonlyName'>>(null as {
	optional?: EnumStatus;
	readonly readonlyName: 'foo' | 'bar';
});

expectNotAssignable<Pick<Result1, 'name'>>(null as {
	name?: 'Alice' | 'Bob';
});

type K3 = ITSKeyofBothSame<A1, C1>;

expectNever(null as K3);

type Result2 = ITSRefineOverrideLooseTypeWithSameKeyOnly<A1, B1, 'name'>;

// @ts-expect-error
type Result3 = ITSRefineOverrideLooseTypeWithSameKeyOnly<A1, C1>;

type Result4 = ITSRefineOverrideLooseTypeWithSameKeyOnly<A1, B2>;

expectAssignable<Result4['name']>('Alice');
expectNotAssignable<Result4['name']>('Alice2');

expectNotAssignable<keyof Result4>('notExistsInA');

printType(null as keyof Result4);

type Result5 = ITSRefineOverrideLooseTypeWithAllKey<A1, B1>;

expectAssignable<Result5['name']>('Alice');
expectNotAssignable<Result5['name']>('Alice2');

expectAssignable<A1>(null as Result5);
expectNotAssignable<Result5>(null as A1);

expectAssignable<Pick<Result5, 'optional' | 'readonlyName'>>(null as {
    optional?: EnumStatus;
    readonly readonlyName: 'foo' | 'bar';
});

type Result6 = ITSRefineOverrideLooseTypeWithAllKey<A1 & { extra: string }, B1>;

expectAssignable<Result6['extra']>('extra');
expectAssignable<A1 & { extra: string }>(null as Result6);

type Result7 = ITSRefineOverrideLooseTypeWithAllKey<A1 & { notExistsInA?: string }, B2>;

expectAssignable<keyof Result7>('notExistsInA');
expectAssignable<Result7['name']>('Alice');

// @ts-expect-error
type Result8 = ITSRefineOverrideLooseTypeWithAllKey<A1, B2>;

type D1 = { name: string };
type E1 = { name: number };
type Result9 = ITSRefineOverrideLooseTypeWithAllKey<D1, E1>;

expectAssignable<Result9['name']>('Alice2');

// @ts-expect-error
type Result10 = ITSRefineOverrideLooseTypeWithAllKey<A1, C1>;

type F1 = { name: string };
type G1 = { name: string; extra: string };

// @ts-expect-error
type Result11 = ITSRefineOverrideLooseTypeWithAllKey<F1, G1>;

