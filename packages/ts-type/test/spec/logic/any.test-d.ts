import { expectType } from 'tsd';
import { ITSLogicIsAny, ITSLogicNotAny, ITSLogic_IsUnknown, ITSLogic_IsUnknown2, ITSLogic_IsStrictlyUnknown } from '../../../lib/logic/any';

/** --- ITSLogicIsAny：any 檢測 --- */

expectType<true>(null as ITSLogicIsAny<any>);
expectType<false>(null as ITSLogicIsAny<string>);
expectType<false>(null as ITSLogicIsAny<unknown>);
expectType<false>(null as ITSLogicIsAny<never>);
expectType<false>(null as ITSLogicIsAny<null>);
expectType<false>(null as ITSLogicIsAny<Record<string, unknown>>);

/** union 含 any 會坍縮為 any */
expectType<true>(null as ITSLogicIsAny<string | any>);

/** --- ITSLogicNotAny：非 any 檢測（ITSLogicIsAny 的反轉） --- */

expectType<false>(null as ITSLogicNotAny<any>);
expectType<true>(null as ITSLogicNotAny<string>);
expectType<true>(null as ITSLogicNotAny<unknown>);
expectType<true>(null as ITSLogicNotAny<never>);
expectType<true>(null as ITSLogicNotAny<null>);

/** --- ITSLogic_IsUnknown：雙向互指 unknown --- */

expectType<true>(null as ITSLogic_IsUnknown<unknown>);
/** any 與 unknown 雙向皆可賦值，故亦為 true（與 StrictlyUnknown 的差異點） */
expectType<true>(null as ITSLogic_IsUnknown<any>);
expectType<false>(null as ITSLogic_IsUnknown<string>);
expectType<false>(null as ITSLogic_IsUnknown<never>);
expectType<false>(null as ITSLogic_IsUnknown<null>);
expectType<false>(null as ITSLogic_IsUnknown<object>);

/** --- ITSLogic_IsUnknown2：unknown extends T 判定（null 與 any 例外） --- */

expectType<true>(null as ITSLogic_IsUnknown2<unknown>);
/** any：unknown extends any 成立，但 [any] extends [null] 亦成立 → false */
expectType<false>(null as ITSLogic_IsUnknown2<any>);
expectType<false>(null as ITSLogic_IsUnknown2<string>);
expectType<false>(null as ITSLogic_IsUnknown2<never>);
expectType<false>(null as ITSLogic_IsUnknown2<null>);

/** --- ITSLogic_IsStrictlyUnknown：排除 any 與 never 的 unknown --- */

expectType<true>(null as ITSLogic_IsStrictlyUnknown<unknown>);
expectType<true>(null as ITSLogic_IsStrictlyUnknown<unknown | string>);
expectType<false>(null as ITSLogic_IsStrictlyUnknown<any>);
expectType<false>(null as ITSLogic_IsStrictlyUnknown<never>);
expectType<false>(null as ITSLogic_IsStrictlyUnknown<string>);
expectType<false>(null as ITSLogic_IsStrictlyUnknown<null>);

