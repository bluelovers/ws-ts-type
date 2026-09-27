import { ITSTemplateLiteralAllowedType, ITSToStringLiteral } from "../string";
/**
 * 將字串字面量加上前綴，組合成新的字串字面量
 * Combines a prefix with a name into a new string literal.
 *
 * 當 Name 為聯集時，結果會對應展開為聯集
 * When Name is a union, the result expands to a union accordingly.
 *
 * @example
 * type A = ITSStringLiteralPrefixed<"STR", "Up">;
 * // type A = "UpSTR"
 *
 * @example
 * type B = ITSStringLiteralPrefixed<"STR" | "INT", "Up">;
 * // type B = "UpSTR" | "UpINT"
 */
export type ITSStringLiteralPrefixed<Name extends ITSTemplateLiteralAllowedType, Prefix extends ITSTemplateLiteralAllowedType> = `${Prefix}${Name}`;
/**
 * 將字串字面量加上後綴，組合成新的字串字面量
 * Combines a name with a suffix into a new string literal.
 *
 * 當 Name 為聯集時，結果會對應展開為聯集
 * When Name is a union, the result expands to a union accordingly.
 *
 * @example
 * type A = ITSStringLiteralSuffixed<"STR", "Status">;
 * // type A = "STRStatus"
 *
 * @example
 * type B = ITSStringLiteralSuffixed<"STR" | "INT", "Status">;
 * // type B = "STRStatus" | "INTStatus"
 */
export type ITSStringLiteralSuffixed<Name extends ITSTemplateLiteralAllowedType, Suffix extends ITSTemplateLiteralAllowedType> = `${Name}${Suffix}`;
/**
 * 以 Name 聯集的每個成員為鍵，建立其值為「前綴 + 鍵名」的對應記錄型別
 * Builds a record whose keys are the members of the Name union and
 * whose values are the prefixed string literal of each key.
 *
 * @example
 * type T = ITSStringLiteralPrefixedRecord<"STR" | "INT" | "DEX", "Up">;
 * // type T = {
 * //   STR: "UpSTR";
 * //   INT: "UpINT";
 * //   DEX: "UpDEX";
 * // }
 */
export type ITSStringLiteralPrefixedRecord<Name extends string, Prefix extends ITSTemplateLiteralAllowedType> = {
    [K in Name]: ITSStringLiteralPrefixed<K, Prefix>;
};
/**
 * 以 Name 聯集的每個成員為鍵，建立其值為「鍵名 + 後綴」的對應記錄型別
 * Builds a record whose keys are the members of the Name union and
 * whose values are the suffixed string literal of each key.
 *
 * @example
 * type T = ITSStringLiteralSuffixedRecord<"STR" | "INT", "Status">;
 * // type T = {
 * //   STR: "STRStatus";
 * //   INT: "INTStatus";
 * // }
 */
export type ITSStringLiteralSuffixedRecord<Name extends string, Suffix extends ITSTemplateLiteralAllowedType> = {
    [K in Name]: ITSStringLiteralSuffixed<K, Suffix>;
};
/**
 * 以 Name 聯集為基礎，透過 KeyMap 重新映射鍵名、並以 ValueMap 指定
 * 對應的值型別，建立一組自訂的對應記錄型別
 * Builds a custom mapped record from the Name union, remapping each
 * key via KeyMap and assigning the value type from ValueMap.
 *
 * @example
 * type Name = "STR" | "INT" | "DEX";
 * type KeyMap = { STR: "str"; INT: "int"; DEX: "dex" };
 * type ValueMap = { STR: number; INT: number; DEX: number };
 *
 * type T = ITSRecordMap<Name, KeyMap, ValueMap>;
 * // type T = {
 * //   str: number;
 * //   int: number;
 * //   dex: number;
 * // }
 *
 * @example
 * 當 ValueMap 的值型別為 string 時:
 * type Name = "STR" | "INT" | "DEX";
 * type KeyMap = { STR: "str"; INT: "int"; DEX: "dex" };
 * type ValueMap = { STR: string; INT: string; DEX: string };
 *
 * type T = ITSRecordMap<Name, KeyMap, ValueMap>;
 * // type T = {
 * //   str: string;
 * //   int: string;
 * //   dex: string;
 * // }
 *
 * @example
 * 當 ValueMap 的值型別為物件型別時:
 * type Name = "STR" | "INT" | "DEX";
 * type KeyMap = { STR: "str"; INT: "int"; DEX: "dex" };
 * type ValueMap = {
 *   STR: { label: string; value: number };
 *   INT: { label: string; value: number };
 *   DEX: { label: string; value: number };
 * };
 *
 * type T = ITSRecordMap<Name, KeyMap, ValueMap>;
 * // type T = {
 * //   str: { label: string; value: number };
 * //   int: { label: string; value: number };
 * //   dex: { label: string; value: number };
 * // }
 */
export type ITSRecordMap<Name extends ITSTemplateLiteralAllowedType, KeyMap extends Record<ITSToStringLiteral<Name>, PropertyKey>, ValueMap extends Record<ITSToStringLiteral<Name>, unknown>> = {
    [K in ITSToStringLiteral<Name> as KeyMap[K]]: ValueMap[K];
};
