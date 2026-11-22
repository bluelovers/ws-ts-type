import { I_TypeNever } from '../../internal/token';
import { ITSLogicIsNever } from '../../logic/never';
import { ITSLogic_IsStringLiteral } from '../../logic/string/string-literal';
import { ITSKeyofBothSame } from '../filter';

type _ITSRefineOverrideLooseTypeWithSameKeyOnly<T1 extends object, T2 extends object> = {
	[K in keyof T1]: K extends keyof T2
		? string extends T1[K]
			? ITSLogic_IsStringLiteral<T2[K]> extends true
				? T2[K]
				: T1[K]
			: T1[K]
		: T1[K]
};

export type ITSRecordWithKeysFrom<T1 extends object, V = unknown> = {
	[K in keyof T1]: V;
};

export type ITSRefineOverrideLooseTypeWithSameKeyOnly<T1 extends ITSLogicIsNever<K, I_TypeNever<'no same key found'>, Partial<ITSRecordWithKeysFrom<Pick<T2, K>, unknown>>>, T2 extends object, K extends keyof T2 = ITSKeyofBothSame<T1, T2>> = _ITSRefineOverrideLooseTypeWithSameKeyOnly<T1, Pick<T2, K>>;

export type ITSRefineOverrideLooseTypeWithAllKey<T1 extends Partial<ITSRecordWithKeysFrom<T2, unknown>>, T2 extends object> = _ITSRefineOverrideLooseTypeWithSameKeyOnly<T1, T2>;
