import { printType, expectType, expectAssignable, expectNotAssignable, expectNever } from 'tsd';
import { ITSRefineOverrideLooseTypeWithAllKey, ITSRefineOverrideLooseTypeWithSameKeyOnly } from '../../../../lib/helper/record/merge-refine';
import { ITSKeyofBothSame } from '../../../../lib/helper/filter';

enum EnumStatus {
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

type K3 = ITSKeyofBothSame<A1, C1>;

expectNever(null as K3);

type Result2 = ITSRefineOverrideLooseTypeWithSameKeyOnly<A1, B1, 'name'>;

// type Result3 = ITSRefineOverrideLooseTypeWithSameKeyOnly<A1, C1>;

// expectNotAssignable<Result3['name']>('Alice');

// let r3: Result3;

// expectNever(r3);
