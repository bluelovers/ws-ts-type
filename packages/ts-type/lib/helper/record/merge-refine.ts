import { I_TypeNever } from '../../internal/token';
import { ITSLogicIsNever } from '../../logic/never';
import { ITSLogic_IsStringLiteral } from '../../logic/string/string-literal';
import { ITSRecordWithKeysFrom } from '../../type/record';
import { ITSKeyofBothSame } from '../keyof/key';

/**
 * 合併核心：以映射型別 (Mapped Type) 逐鍵重建 T1，保留其鍵集合與修飾子 (Modifier，readonly／optional)。
 * 僅當 T1、T2 同鍵，且 T1 值為寬鬆 `string`（`string extends T1[K]`）而 T2 值為字串常量 (String Literal) 時，
 * 以 T2 的常量收窄該鍵；其餘情況維持 T1 原值——選取性屬性的值含 `undefined`，不滿足寬鬆 `string` 判斷，因此不會被收窄。
 * 結果鍵集合恆為 `keyof T1`，T2 獨有的鍵不會引入。
 */
type _ITSRefineOverrideLooseTypeWithSameKeyOnly<T1 extends object, T2 extends object> = {
	[K in keyof T1]: K extends keyof T2
		? string extends T1[K]
			? ITSLogic_IsStringLiteral<T2[K]> extends true
				? T2[K]
				: T1[K]
			: T1[K]
		: T1[K]
};

/**
 * 以 T2 收窄 T1 中同鍵且為寬鬆 `string` 的屬性，僅限兩者共有的鍵 (Shared Key) 參與覆寫。
 *
 * - K 預設取 `ITSKeyofBothSame<T1, T2>`；兩者無共有鍵時 K 為 `never`，
 *   約束隨之替換為 `no same key found` 錯誤型別，於宣告處即報錯。
 * - 指定 K 可將收窄範圍限制到特定鍵；結果始終只含 T1 的鍵。
 */
export type ITSRefineOverrideLooseTypeWithSameKeyOnly<T1 extends ITSLogicIsNever<K, I_TypeNever<'no same key found'>, Partial<ITSRecordWithKeysFrom<Pick<T2, K>, unknown>>>, T2 extends object, K extends keyof T2 = ITSKeyofBothSame<T1, T2>> = _ITSRefineOverrideLooseTypeWithSameKeyOnly<T1, Pick<T2, K>>;

/**
 * 與 `ITSRefineOverrideLooseTypeWithSameKeyOnly` 同規則的全鍵 (All Key) 版本：以 T2 的全部鍵參與收窄，無 K 參數。
 * 約束要求 T2 的所有鍵都必須存在於 T1，否則於宣告處報錯。
 */
export type ITSRefineOverrideLooseTypeWithAllKey<T1 extends (keyof T2 extends keyof T1 ? Partial<ITSRecordWithKeysFrom<T2, unknown>> : I_TypeNever<'missing keys of T2 in T1'>), T2 extends object> = _ITSRefineOverrideLooseTypeWithSameKeyOnly<T1, T2>;

/**
 * 合併核心：以映射型別 (Mapped Type) 逐鍵重建 T1，保留其鍵集合與修飾子 (Modifier，readonly／optional)。
 * 僅當 T1、T2 同鍵，且 T2 值可賦值 (Assignable) 給 T1 值（T2 為 T1 的子型別）時，以 T2 替換 T1；
 * 其餘情況（含 T2 比 T1 寬鬆）維持 T1 原值。
 * 結果鍵集合恆為 `keyof T1`，T2 獨有的鍵不會引入，且結果仍可指派回 T1。
 */
type _ITSRefineOverrideNarrowTypeWithSameKeyOnly<T1 extends object, T2 extends object> = {
	[K in keyof T1]: K extends keyof T2
		? T2[K] extends T1[K]
			? T2[K]
			: T1[K]
		: T1[K]
};

/**
 * 以 T2 替換 T1 中同鍵且 T2 可賦值給 T1 的屬性（不限型別種類），僅限兩者共有的鍵 (Shared Key) 參與覆寫。
 *
 * - K 預設取 `ITSKeyofBothSame<T1, T2>`；兩者無共有鍵時 K 為 `never`，
 *   約束隨之替換為 `no same key found` 錯誤型別，於宣告處即報錯。
 * - 指定 K 可將替換範圍限制到特定鍵；結果始終只含 T1 的鍵。
 */
export type ITSRefineOverrideNarrowTypeWithSameKeyOnly<T1 extends ITSLogicIsNever<K, I_TypeNever<'no same key found'>, Partial<ITSRecordWithKeysFrom<Pick<T2, K>, unknown>>>, T2 extends object, K extends keyof T2 = ITSKeyofBothSame<T1, T2>> = _ITSRefineOverrideNarrowTypeWithSameKeyOnly<T1, Pick<T2, K>>;

/**
 * 與 `ITSRefineOverrideNarrowTypeWithSameKeyOnly` 同規則的全鍵 (All Key) 版本：以 T2 的全部鍵參與替換，無 K 參數。
 * 約束要求 T2 的所有鍵都必須存在於 T1，否則於宣告處報錯。
 */
export type ITSRefineOverrideNarrowTypeWithAllKey<T1 extends (keyof T2 extends keyof T1 ? Partial<ITSRecordWithKeysFrom<T2, unknown>> : I_TypeNever<'missing keys of T2 in T1'>), T2 extends object> = _ITSRefineOverrideNarrowTypeWithSameKeyOnly<T1, T2>;

/**
 * 合併核心：以映射型別 (Mapped Type) 逐鍵重建 T1，保留其鍵集合與修飾子 (Modifier，readonly／optional)。
 * 僅當 T1、T2 同鍵且兩者型別相通（任一方向可賦值 (Assignable)）時以 T2 替換——
 * 故 T2 較寬鬆（`'on' | 'off'` → `string`）仍會替換，但不相干型別（`string` ↔ `number`）維持 T1 原值。
 * 結果鍵集合恆為 `keyof T1`，T2 獨有的鍵不會引入。
 */
type _ITSRefineOverrideTypeWithSameKeyOnly<T1 extends object, T2 extends object> = {
	[K in keyof T1]: K extends keyof T2
		? T2[K] extends T1[K]
			? T2[K]
			: T1[K] extends T2[K]
				? T2[K]
				: T1[K]
		: T1[K]
};

/**
 * 以 T2 替換 T1 中同鍵且兩者型別相通的屬性（T2 較寬鬆亦可替換），僅限兩者共有的鍵 (Shared Key) 參與覆寫。
 *
 * - K 預設取 `ITSKeyofBothSame<T1, T2>`；兩者無共有鍵時 K 為 `never`，
 *   約束隨之替換為 `no same key found` 錯誤型別，於宣告處即報錯。
 * - 指定 K 可將替換範圍限制到特定鍵；結果始終只含 T1 的鍵。
 * - 型別不相通（如 `string` ↔ `number`）的鍵維持 T1 原值。
 */
export type ITSRefineOverrideTypeWithSameKeyOnly<T1 extends ITSLogicIsNever<K, I_TypeNever<'no same key found'>, Partial<ITSRecordWithKeysFrom<Pick<T2, K>, unknown>>>, T2 extends object, K extends keyof T2 = ITSKeyofBothSame<T1, T2>> = _ITSRefineOverrideTypeWithSameKeyOnly<T1, Pick<T2, K>>;

/**
 * 與 `ITSRefineOverrideTypeWithSameKeyOnly` 同規則的全鍵 (All Key) 版本：以 T2 的全部鍵參與替換，無 K 參數。
 * 約束要求 T2 的所有鍵都必須存在於 T1，否則於宣告處報錯。
 */
export type ITSRefineOverrideTypeWithAllKey<T1 extends (keyof T2 extends keyof T1 ? Partial<ITSRecordWithKeysFrom<T2, unknown>> : I_TypeNever<'missing keys of T2 in T1'>), T2 extends object> = _ITSRefineOverrideTypeWithSameKeyOnly<T1, T2>;
