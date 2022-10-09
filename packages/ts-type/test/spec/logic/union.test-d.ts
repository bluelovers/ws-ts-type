
import { ITSLogicIsSingleNonUnion01 } from '../../../lib/logic/union/index';
import { expectType } from 'tsd';

let a: ITSLogicIsSingleNonUnion01<'' | '4' | any, string>
let b: ITSLogicIsSingleNonUnion01<'' & '4' & any, string>
let c: ITSLogicIsSingleNonUnion01<'', string>

expectType<false>(a);
expectType<false>(b);
expectType<true>(c);
