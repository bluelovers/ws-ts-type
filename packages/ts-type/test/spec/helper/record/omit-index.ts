import { ITSKnownKeys, ITSOmitIndexSignatures } from '../../../../lib/helper/record/omit-index';
import { JSONSchemaForNPMPackageJsonFiles as CoreProperties } from '@ts-type/package-dts/types/package.json';
import { ITSOverwrite } from 'ts-type/lib/type/record';
import { expectAssignable, expectType, printType, expectNotAssignable } from 'tsd';

interface FancyIndices {
  [x: symbol]: number;
  [x: `data-${string}`]: string
	bar(): void;
}

interface Foo {
  [key: string]: any;
  bar(): void;
}

type Result1 = ITSOmitIndexSignatures<FancyIndices>
type Result2 = ITSOmitIndexSignatures<Foo>

let r1: Result1;

let r2: Result2;

// @ts-expect-error
r2.data = '1';

export let k1: ITSKnownKeys<FancyIndices>
export let k2: ITSKnownKeys<Foo>
