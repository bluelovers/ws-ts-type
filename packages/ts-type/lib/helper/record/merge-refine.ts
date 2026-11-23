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
