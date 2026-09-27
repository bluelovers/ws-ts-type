/*
 * 聯集 (Union) 型別的鍵選取工具總覽
 * Overview of Union key-selection utilities
 *
 * ITSPartialPick / ITSRequiredPick
 * └─ 一般 Object / 一般物件
 *    └─ keyof T
 *
 * ITSPartialPickUnion / ITSRequiredPickUnion
 * └─ Union 聯集
 *    └─ 保留 A | B 結構 / preserve A | B structure
 *       └─ distributive conditional type / 分配式條件型別
 *
 * ITSPartialPickUnionFlat / ITSRequiredPickUnionFlat
 * └─ UnionFlat 扁平聯集
 *    └─ A | B → 單一 Object / A | B → single object
 *       └─ ITSKeyOfUnion + ITSValueOfUnion
 *
 * PartialWith
 * 	→ 修改 K，保留 Object / modify K, preserve object
 *
 * PartialWithUnion
 * 	→ 修改 K，保留 A | B / modify K, preserve A | B
 *
 * PartialWithUnionFlat
 * 	→ Flatten A | B，再只修改 K / flatten A | B, then modify only K
 */

import { ITSKeyOfUnion, ITSValueOfUnion } from "../../helper/key-value";
import { ITSPartialPick, ITSPartialWith, ITSRequiredPick, ITSRequiredWith } from "../record";

/**
 * 在保留每個聯集成員結構的前提下，將選取的屬性設為可選
 * Makes the selected properties optional while preserving
 * the structure of each union member.
 *
 * 這是分配式 (distributive) 的 Union 版本，會對聯集的每個成員
 * 分別套用 `Partial<Pick<T, K>>`
 * This is the distributive Union version: it applies
 * `Partial<Pick<T, K>>` to each union member individually.
 *
 * @example
 * type T =
 *   | { type: "a"; value: number }
 *   | { type: "b"; text: string };
 *
 * type Result = ITSPartialPickUnion<T>;
 * // {
 * //   type?: "a";
 * //   value?: number;
 * // } | {
 * //   type?: "b";
 * //   text?: string;
 * // }
 */
export type ITSPartialPickUnion<
	T,
	K extends ITSKeyOfUnion<T> = ITSKeyOfUnion<T>
> = T extends any
	? {
		[P in K & keyof T]?: T[P];
	}
	: never;

/**
 * 在保留每個聯集成員結構的前提下，將選取的屬性設為必填
 * Makes the selected properties required while preserving
 * the structure of each union member.
 *
 * 這是分配式 (distributive) 的 Union 版本，會對聯集的每個成員
 * 分別套用 `Required<Pick<T, K>>`
 * This is the distributive Union version: it applies
 * `Required<Pick<T, K>>` to each union member individually.
 *
 * @example
 * type T =
 *   | { type: "a"; value?: number }
 *   | { type: "b"; text?: string };
 *
 * type Result = ITSRequiredPickUnion<T>;
 * // {
 * //   type: "a";
 * //   value: number;
 * // } | {
 * //   type: "b";
 * //   text: string;
 * // }
 */
export type ITSRequiredPickUnion<
	T,
	K extends ITSKeyOfUnion<T> = ITSKeyOfUnion<T>
> = T extends any
	? {
		[P in K & keyof T]-?: T[P];
	}
	: never;

/**
 * 將選取的屬性設為可選，並把聯集中所有成員的屬性扁平化為單一物件型別
 * Makes the selected properties optional and flattens
 * all properties from every union member into a single object type.
 *
 * 與 ITSPartialPickUnion 不同，此工具不保留各聯集成員的個別結構，
 * 而是將所有鍵合併到同一個物件中
 * Unlike ITSPartialPickUnion, this does not preserve the
 * individual union-member structure; instead it merges all keys
 * into a single object.
 *
 * @example
 * type T =
 *   | { type: "a"; value: number }
 *   | { type: "b"; text: string };
 *
 * type Result = ITSPartialPickUnionFlat<T>;
 * // {
 * //   type?: "a" | "b";
 * //   value?: number;
 * //   text?: string;
 * // }
 */
export type ITSPartialPickUnionFlat<
	T,
	K extends ITSKeyOfUnion<T> = ITSKeyOfUnion<T>
> = {
	[P in K]?: ITSValueOfUnion<T, P>;
};

/**
 * 將選取的屬性設為必填，並把聯集中所有成員扁平化為單一物件型別
 * Makes the selected properties required and flattens
 * all members of a union into a single object type.
 *
 * 注意：此工具會刻意將所有選取的屬性設為必填。若需要更自然地保留
 * 「屬性是否於每個成員中都存在」的語意，請改用 ITSUnionFlat 等
 * 以扁平化為基礎的工具。
 * Note: this utility intentionally makes every selected property
 * required. For a natural flattened representation that preserves
 * whether a property exists in every member, use a dedicated
 * flat-base utility such as ITSUnionFlat.
 *
 * @example
 * type T =
 *   | { type: "a"; value: number }
 *   | { type: "b"; text: string };
 *
 * type Result = ITSRequiredPickUnionFlat<T>;
 * // {
 * //   type: "a" | "b";
 * //   value: number;
 * //   text: string;
 * // }
 */
export type ITSRequiredPickUnionFlat<
	T,
	K extends ITSKeyOfUnion<T> = ITSKeyOfUnion<T>
> = {
	[P in K]-?: ITSValueOfUnion<T, P>;
};

// ---------------

/**
 * 在保留聯集成員結構的前提下，將指定屬性設為必填
 * Makes the specified properties required for each member
 * of a union while preserving the union-member structure.
 *
 * 其餘屬性保持不變（未被選取的屬性原樣保留）
 * Other properties are preserved unchanged.
 *
 * @example
 * type T =
 *   | { type: "a"; value?: number }
 *   | { type: "b"; text?: string };
 *
 * type Result = ITSRequiredWithUnion<T, "value" | "text">;
 * // {
 * //   type: "a";
 * //   value: number;
 * // } | {
 * //   type: "b";
 * //   text: string;
 * // }
 */
export type ITSRequiredWithUnion<
	T,
	K extends ITSKeyOfUnion<T>
> = T extends any
	? K extends keyof T
		? Omit<T, K> & ITSRequiredPick<T, K>
		: T
	: never;

/**
 * 在保留聯集成員結構的前提下，將指定屬性設為可選
 * Makes the specified properties optional for each member
 * of a union while preserving the union-member structure.
 *
 * 其餘屬性保持不變（未被選取的屬性原樣保留）
 * Other properties are preserved unchanged.
 *
 * @example
 * type T =
 *   | { type: "a"; value: number }
 *   | { type: "b"; text: string };
 *
 * type Result = ITSPartialWithUnion<T, "value" | "text">;
 * // {
 * //   type: "a";
 * //   value?: number;
 * // } | {
 * //   type: "b";
 * //   text?: string;
 * // }
 */
export type ITSPartialWithUnion<
	T,
	K extends ITSKeyOfUnion<T>
> = T extends any
	? K extends keyof T
		? Omit<T, K> & ITSPartialPick<T, K>
		: T
	: never;

/**
 * 將聯集扁平化為單一物件型別，並依各屬性在聯集中的存在情況
 * 決定其為必填或可選
 * Flattens a union into a single object type, marking each
 * property as required or optional based on whether it exists
 * in every union member.
 *
 * 在每個成員都必填的鍵會被設為必填；否則設為可選
 * Keys required in every member become required; the rest optional.
 *
 * @example
 * type T =
 *   | { type: "a"; value: number }
 *   | { type: "b"; value?: string };
 *
 * type Result = ITSUnionFlat<T>;
 * // {
 * //   type: "a" | "b";
 * //   value?: number | string;
 * // }
 */
export type ITSUnionFlat<T> = {
	[P in ITSKeyOfUnionRequired<T>]-?: ITSValueOfUnion<T, P>;
} & {
	[P in ITSKeyOfUnionOptional<T>]?: ITSValueOfUnion<T, P>;
};

/**
 * 判斷鍵 K 是否在聯集 T 的每個成員中都為必填
 * Checks whether K is required in every member of T.
 *
 * @example
 * type T =
 *   | { type: "a"; value: number }
 *   | { type: "b"; value?: string };
 *
 * type A = ITSIsRequiredInUnion<T, "type">;  // true
 * type B = ITSIsRequiredInUnion<T, "value">; // false
 */
export type ITSIsRequiredInUnion<
	T,
	K extends ITSKeyOfUnion<T>
> = false extends (
	T extends unknown
		? K extends keyof T
			? {} extends Pick<T, K>
				? false
				: true
			: false
		: never
	)
	? false
	: true;

/**
 * 取得在聯集 T 每個成員中都為必填的鍵集合
 * Gets keys that are required in every member of T.
 *
 * @example
 * type T =
 *   | { type: "a"; value: number }
 *   | { type: "b"; value?: string };
 *
 * type RequiredKeys = ITSKeyOfUnionRequired<T>;
 * // "type"
 */
export type ITSKeyOfUnionRequired<T> = {
	[K in ITSKeyOfUnion<T>]:
	ITSIsRequiredInUnion<T, K> extends true
		? K
		: never;
}[ITSKeyOfUnion<T>];

/**
 * 取得在聯集 T 中並非於每個成員都必填的鍵集合
 * Gets keys that are not required in every member of T.
 *
 * @example
 * type T =
 *   | { type: "a"; value: number }
 *   | { type: "b"; value?: string };
 *
 * type OptionalKeys = ITSKeyOfUnionOptional<T>;
 * // "value"
 */
export type ITSKeyOfUnionOptional<T> =
	Exclude<
		ITSKeyOfUnion<T>,
		ITSKeyOfUnionRequired<T>
	>;

/**
 * 將聯集扁平化為單一物件型別，並將指定屬性設為可選
 * Makes the specified properties optional and flattens
 * all members of a union into a single object type.
 *
 * 其餘來自各聯集成員的屬性會以可選屬性保留，因為它們不一定
 * 存在於每個成員之中
 * Other properties from all union members are preserved as
 * optional properties because they may not exist in every member.
 *
 * @example
 * type T =
 *   | { type: "a"; value: number }
 *   | { type: "b"; value?: string };
 *
 * type Result = ITSPartialWithUnionFlat<T, "value">;
 * // {
 * //   type?: "a" | "b";
 * //   value?: number | string;
 * // }
 */
export type ITSPartialWithUnionFlat<
	T,
	K extends ITSKeyOfUnion<T>
> = Omit<ITSUnionFlat<T>, K>
	& {
	[P in K]?: ITSValueOfUnion<T, P>;
};

/**
 * 將聯集扁平化為單一物件型別，並將指定屬性設為必填
 * Makes the specified properties required and flattens
 * all members of a union into a single object type.
 *
 * 其餘來自各聯集成員的屬性會以可選屬性保留，因為它們不一定
 * 存在於每個成員之中
 * Other properties from all union members are preserved as
 * optional properties because they may not exist in every member.
 *
 * @example
 * type T =
 *   | { type: "a"; value: number }
 *   | { type: "b"; value?: string };
 *
 * type Result = ITSRequiredWithUnionFlat<T, "value">;
 * // {
 * //   type?: "a" | "b";
 * //   value: number | string;
 * // }
 */
export type ITSRequiredWithUnionFlat<
	T,
	K extends ITSKeyOfUnion<T>
> = Omit<ITSUnionFlat<T>, K>
	& {
	[P in K]-?: ITSValueOfUnion<T, P>;
};

// ----------------

/**
 * 將聯集 T 扁平化為單一物件型別，並把所有鍵設為可選
 * Flattens a union T into a single object type and makes
 * all keys optional.
 *
 * 僅保留那些在成員中存在、且型別為該成員對應屬性類型的屬性
 * Only members that actually contain the key contribute their
 * property type.
 *
 * @example
 * type T =
 *   | { type: "a"; value: number }
 *   | { type: "b"; text: string };
 *
 * type Result = ITSUnionToOptional<T>;
 * // {
 * //   type?: "a" | "b";
 * //   value?: number;
 * //   text?: string;
 * // }
 */
export type ITSUnionToOptional<T> = [T] extends [infer U]
	? { [K in ITSKeyOfUnion<U>]?: U extends Record<K, any> ? U[K] : never }
	: never;

/**
 * 取得聯集 T 在「所有鍵皆為可選」版本與原聯集型別的交集
 * Gets the intersection of T with its all-optional flattened form.
 *
 * 可同時接受「完全可選」的物件，也能精確匹配原本的聯集成員
 * Accepts a fully-optional object while still matching the
 * original union members exactly.
 *
 * @example
 * type T =
 *   | { type: "a"; value: number }
 *   | { type: "b"; text: string };
 *
 * type Result = ITSAnyOfUnion<T>;
 * // {
 * //   type?: "a" | "b";
 * //   value?: number;
 * //   text?: string;
 * // } & ({
 * //   type: "a"; value: number;
 * // } | {
 * //   type: "b"; text: string;
 * // })
 */
export type ITSAnyOfUnion<T> = ITSUnionToOptional<T> & T;
