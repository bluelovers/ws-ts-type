import { printType, expectType, expectAssignable, expectNotAssignable, expectNever } from 'tsd';
import { ITSRefineOverrideLooseTypeWithAllKey, ITSRefineOverrideLooseTypeWithSameKeyOnly, ITSRefineOverrideNarrowTypeWithAllKey, ITSRefineOverrideNarrowTypeWithSameKeyOnly, ITSRefineOverrideTypeWithAllKey, ITSRefineOverrideTypeWithSameKeyOnly } from '../../../../lib/helper/record/merge-refine';
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

type H1 = {
    name: string;
    count: number;
    readonly id: number;
    active?: boolean;
};

type H2 = {
    name: 'Alice';
    count: 1;
    id: 2;
    active: false;
};

type Narrow1 = ITSRefineOverrideNarrowTypeWithSameKeyOnly<H1, H2>;

expectAssignable<Narrow1['name']>('Alice');
expectNotAssignable<Narrow1['name']>('Bob');

// 不限 string：number 常量同樣收窄
expectAssignable<Narrow1['count']>(1);
expectNotAssignable<Narrow1['count']>(2);

expectAssignable<Narrow1['id']>(2);
expectNotAssignable<Narrow1['id']>(3);

expectAssignable<Pick<Narrow1, 'active'>>(null as { active?: false });

expectAssignable<H1>(null as Narrow1);
expectNotAssignable<Narrow1>(null as H1);

// T2 比 T1 寬鬆時維持 T1 原值
type I1 = { mode: 'on' | 'off' };
type I2 = { mode: string };

type Narrow2 = ITSRefineOverrideNarrowTypeWithSameKeyOnly<I1, I2>;

expectAssignable<Narrow2['mode']>('on');
expectNotAssignable<Narrow2['mode']>('other');

// T2 型別不相干時維持 T1 原值
type J1 = { value: string };
type J2 = { value: number };

type Narrow3 = ITSRefineOverrideNarrowTypeWithSameKeyOnly<J1, J2>;

expectAssignable<Narrow3['value']>('Alice');
expectNotAssignable<Narrow3['value']>(1);

type Narrow4 = ITSRefineOverrideNarrowTypeWithSameKeyOnly<H1, H2, 'name'>;

expectAssignable<Narrow4['name']>('Alice');
expectAssignable<Narrow4['count']>(1);

// @ts-expect-error
type Narrow5 = ITSRefineOverrideNarrowTypeWithSameKeyOnly<H1, C1>;

type Narrow6 = ITSRefineOverrideNarrowTypeWithAllKey<H1, H2>;

expectAssignable<Narrow6['count']>(1);
expectNotAssignable<Narrow6['count']>(2);
expectNotAssignable<keyof Narrow6>('extra');

// @ts-expect-error
type Narrow7 = ITSRefineOverrideNarrowTypeWithAllKey<H1, H2 & { extra: string }>;

type Over1 = ITSRefineOverrideTypeWithSameKeyOnly<H1, H2>;

expectAssignable<Over1['name']>('Alice');
expectNotAssignable<Over1['name']>('Bob');

// 不限 string：number 常量同樣替換
expectAssignable<Over1['count']>(1);
expectNotAssignable<Over1['count']>(2);

expectAssignable<Pick<Over1, 'active'>>(null as { active?: false });

// T2 比 T1 寬鬆：無條件替換（與 Narrow 版差異點）
type Over2 = ITSRefineOverrideTypeWithSameKeyOnly<I1, I2>;

expectAssignable<Over2['mode']>('other');

// T2 型別不相干（string ↔ number）：不通則維持 T1 原值
type Over3 = ITSRefineOverrideTypeWithSameKeyOnly<J1, J2>;

expectAssignable<Over3['value']>('Alice');
expectNotAssignable<Over3['value']>(1);

expectAssignable<J1>(null as Over3);

type Over4 = ITSRefineOverrideTypeWithSameKeyOnly<H1, H2, 'name'>;

expectAssignable<Over4['name']>('Alice');
expectAssignable<Over4['count']>(1);

// @ts-expect-error
type Over5 = ITSRefineOverrideTypeWithSameKeyOnly<H1, C1>;

type Over6 = ITSRefineOverrideTypeWithAllKey<H1, H2>;

expectAssignable<Over6['count']>(1);
expectNotAssignable<Over6['count']>(2);

// @ts-expect-error
type Over7 = ITSRefineOverrideTypeWithAllKey<H1, H2 & { extra: string }>;

// E 排除特定鍵：被排除的鍵不參與覆寫
type Excl1 = ITSRefineOverrideNarrowTypeWithSameKeyOnly<H1, H2, keyof H2, 'name'>;

expectType<string>(null as Excl1['name']);
expectType<1>(null as Excl1['count']);

type Excl2 = ITSRefineOverrideLooseTypeWithSameKeyOnly<A1, B1, keyof B1, 'name'>;

expectType<string>(null as Excl2['name']);
expectType<'foo' | 'bar'>(null as Excl2['readonlyName']);

type Excl3 = ITSRefineOverrideTypeWithSameKeyOnly<I1, I2, 'mode', 'mode'>;

expectType<'on' | 'off'>(null as Excl3['mode']);

// 被排除的鍵不要求存在於 T1
type Excl4 = ITSRefineOverrideNarrowTypeWithSameKeyOnly<{ count: number }, { name: string; count: 1 }, 'name' | 'count', 'name'>;

expectType<1>(null as Excl4['count']);

// @ts-expect-error
type Excl5 = ITSRefineOverrideNarrowTypeWithSameKeyOnly<{ other: number }, { name: string; count: 1 }, 'name'>;

