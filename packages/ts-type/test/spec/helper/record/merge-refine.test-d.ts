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

