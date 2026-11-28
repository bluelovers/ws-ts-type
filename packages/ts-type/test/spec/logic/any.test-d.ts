import { expectType } from 'tsd';
import { ITSLogicIsAny, ITSLogicNotAny, ITSLogic_IsUnknown, ITSLogic_IsAnyOrUnknown, ITSLogic_IsAnyOrUnknownOrNever } from '../../../lib/logic/any';
import { ITSLogic_IsStrictlyUnknown, ITSLogic_IsUnknown001 } from '../../retired/outcompeted/logic/any-unknown';

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

/** --- ITSLogic_IsUnknown001：雙向互指 unknown --- */

expectType<true>(null as ITSLogic_IsUnknown001<unknown>);
/** any 與 unknown 雙向皆可賦值，故亦為 true（與 StrictlyUnknown 的差異點） */
expectType<true>(null as ITSLogic_IsUnknown001<any>);
expectType<false>(null as ITSLogic_IsUnknown001<string>);
expectType<false>(null as ITSLogic_IsUnknown001<never>);
expectType<false>(null as ITSLogic_IsUnknown001<null>);
expectType<false>(null as ITSLogic_IsUnknown001<object>);

/** --- ITSLogic_IsUnknown0012：unknown extends T 判定（null 與 any 例外） --- */

expectType<true>(null as ITSLogic_IsUnknown<unknown>);
/** any：unknown extends any 成立，但 [any] extends [null] 亦成立 → false */
expectType<false>(null as ITSLogic_IsUnknown<any>);
expectType<false>(null as ITSLogic_IsUnknown<string>);
expectType<false>(null as ITSLogic_IsUnknown<never>);
expectType<false>(null as ITSLogic_IsUnknown<null>);

/** --- ITSLogic_IsStrictlyUnknown：排除 any 與 never 的 unknown --- */

expectType<true>(null as ITSLogic_IsStrictlyUnknown<unknown>);
expectType<true>(null as ITSLogic_IsStrictlyUnknown<unknown | string>);
expectType<false>(null as ITSLogic_IsStrictlyUnknown<any>);
expectType<false>(null as ITSLogic_IsStrictlyUnknown<never>);
expectType<false>(null as ITSLogic_IsStrictlyUnknown<string>);
expectType<false>(null as ITSLogic_IsStrictlyUnknown<null>);

/** --- union 輸入 --- */

/** 普通 union（不含 any / unknown）：三者皆 false */
expectType<false>(null as ITSLogicIsAny<string | number>);
expectType<true>(null as ITSLogicNotAny<string | number>);
expectType<false>(null as ITSLogic_IsUnknown001<string | number>);
expectType<false>(null as ITSLogic_IsUnknown<string | number>);
expectType<false>(null as ITSLogic_IsStrictlyUnknown<string | number>);

/** unknown 吸收整個 union，判定同 unknown */
expectType<true>(null as ITSLogic_IsUnknown001<unknown | null>);
expectType<true>(null as ITSLogic_IsUnknown<unknown | null>);
expectType<true>(null as ITSLogic_IsStrictlyUnknown<unknown | null>);

/** any 吸收整個 union，判定同 any（IsUnknown 為 true，其餘為 false） */
expectType<true>(null as ITSLogicIsAny<string | number | any>);
expectType<true>(null as ITSLogic_IsUnknown001<any | string>);
expectType<false>(null as ITSLogic_IsUnknown<any | string>);
expectType<false>(null as ITSLogic_IsStrictlyUnknown<any | string>);

/** never 與 union 合併後消失，判定同剩餘成員 */
expectType<false>(null as ITSLogic_IsUnknown001<never | string>);
expectType<false>(null as ITSLogic_IsStrictlyUnknown<never | string>);
expectType<true>(null as ITSLogicNotAny<never | string>);

/** --- ITSLogic_IsAnyOrUnknown：any 或 unknown --- */

expectType<true>(null as ITSLogic_IsAnyOrUnknown<any>);
expectType<true>(null as ITSLogic_IsAnyOrUnknown<unknown>);
expectType<false>(null as ITSLogic_IsAnyOrUnknown<string>);
expectType<false>(null as ITSLogic_IsAnyOrUnknown<never>);
expectType<false>(null as ITSLogic_IsAnyOrUnknown<null>);

/** 自訂 Y / N */
expectType<'Y'>(null as ITSLogic_IsAnyOrUnknown<any, 'Y', 'N'>);
expectType<'N'>(null as ITSLogic_IsAnyOrUnknown<string, 'Y', 'N'>);

/** --- ITSLogic_IsAnyOrUnknownOrNever：any、unknown 或 never --- */

expectType<true>(null as ITSLogic_IsAnyOrUnknownOrNever<any>);
expectType<true>(null as ITSLogic_IsAnyOrUnknownOrNever<unknown>);
expectType<true>(null as ITSLogic_IsAnyOrUnknownOrNever<never>);
expectType<false>(null as ITSLogic_IsAnyOrUnknownOrNever<string>);
expectType<false>(null as ITSLogic_IsAnyOrUnknownOrNever<null>);

/** 自訂 Y / N */
expectType<'Y'>(null as ITSLogic_IsAnyOrUnknownOrNever<never, 'Y', 'N'>);
expectType<'N'>(null as ITSLogic_IsAnyOrUnknownOrNever<string, 'Y', 'N'>);

/** --- union 輸入（兩系列）--- */

/** any / unknown 吸收 union，判定同該成員 */
expectType<true>(null as ITSLogic_IsAnyOrUnknown<any | string>);
expectType<true>(null as ITSLogic_IsAnyOrUnknown<unknown | string>);
expectType<true>(null as ITSLogic_IsAnyOrUnknownOrNever<never | any>);
expectType<true>(null as ITSLogic_IsAnyOrUnknownOrNever<never | unknown>);

/** 普通 union 不含 any / unknown / never：皆 false */
expectType<false>(null as ITSLogic_IsAnyOrUnknown<string | number>);
expectType<false>(null as ITSLogic_IsAnyOrUnknownOrNever<string | number>);

/** never 於 union 中消失，OrNever 判定同剩餘成員（never 單獨才成立） */
expectType<true>(null as ITSLogic_IsAnyOrUnknownOrNever<never>);
expectType<false>(null as ITSLogic_IsAnyOrUnknownOrNever<never | string>);
