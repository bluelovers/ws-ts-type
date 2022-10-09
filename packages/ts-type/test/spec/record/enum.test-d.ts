import { expectAssignable, expectType, printType } from 'tsd';
import {
	ITSEnumLike, ITSNumberEnumAndNumber,
	ITSNumberEnumLike, ITSNumberEnumToNumber,
	ITSPartialPick,
	ITSPropertyKey,
	ITSReadonlyPick,
	ITSReadonlyRecord,
	ITSStringEnumLike,
} from '../../../lib/index';
import { ITSPick } from '../../../lib/_build-in';

enum EnumNumber
{
	v = 1,
	vv = 2,
}

enum EnumString
{
	a = 'a'
}

let u: unknown;

expectAssignable<ITSEnumLike>(u as typeof EnumNumber);
expectAssignable<ITSEnumLike<keyof typeof EnumNumber, EnumNumber>>(EnumNumber);

expectAssignable<ITSReadonlyPick<typeof EnumNumber>>(EnumNumber);

expectAssignable<ITSPick<typeof EnumNumber>>(EnumNumber);

expectAssignable<ITSNumberEnumLike>(EnumNumber);
expectAssignable<ITSNumberEnumLike<keyof typeof EnumNumber, EnumNumber>>(EnumNumber);

expectAssignable<ITSPartialPick<typeof EnumNumber>>({
	v: 1
});

expectAssignable<ITSReadonlyRecord<keyof typeof EnumNumber, number>>(EnumNumber);

type IFakeEnum01 = {
	[P: string]: number;
}

type IFakeEnum02 = {
	[P: string]: string;
}

type IFakeEnum03 = {
	[P: string]: number | string;
}

type IFakeEnum04 = {
	[P: string]: number;
} | {
	[P: number]: void;
}

function f01<T extends IFakeEnum01>(v: T)
{

}

function f02<T extends IFakeEnum02>(v: T)
{

}

function f03<T extends IFakeEnum03>(v: T)
{

}

function f04<T extends IFakeEnum04>(v: T)
{

}

// @ts-ignore
f01(EnumNumber)
// @ts-expect-error
f02(EnumNumber)
f03(EnumNumber)
// @ts-expect-error
f04(EnumNumber)

// @ts-expect-error
f01(EnumString)
f02(EnumString)
f03(EnumString)
f04(EnumString)

let n: ITSNumberEnumToNumber<EnumNumber>

expectAssignable<EnumNumber>(n);

expectAssignable<ITSNumberEnumToNumber<EnumNumber>>(n as any as EnumNumber);

expectAssignable<ITSNumberEnumAndNumber<EnumNumber>>(n as any as EnumNumber);
