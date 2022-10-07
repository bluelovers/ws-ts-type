import { expectAssignable, expectNotType, expectType } from 'tsd';
import { ITSStringInferToNumber } from '../../../../lib/helper/string/infer';

let n1: ITSStringInferToNumber<`1`>

expectType<1>(n1);
expectAssignable<number>(n1);

expectNotType<number>(n1);
expectNotType<2>(n1);

let n2: ITSStringInferToNumber<`true`, 1>

expectType<1>(n2);
expectAssignable<number>(n2);

expectNotType<number>(n2);
expectNotType<2>(n2);
