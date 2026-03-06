/**
 * Created by user on 2019/6/11.
 *
 * 重新導出內建類型
 * Re-export built-in types
 *
 * 在某些情況下 IDE 無法正確識別類型，此文件提供統一的類別導出
 * In some cases IDE cannot correctly identify types, this file provides unified type exports
 */
/**
 * 取得函數的參數類型
 * Get the parameter types of a function
 *
 * @see Parameters
 */
export type ITSParameters<T extends (...args: any[]) => any> = Parameters<T>;
/**
 * 取得建構函數的參數類型
 * Get the constructor parameter types
 *
 * @see ConstructorParameters
 */
export type ITSConstructorParameters<T extends new (...args: any[]) => any> = ConstructorParameters<T>;
/**
 * 將類型的所有屬性設為可選
 * Make all properties of T optional
 *
 * @see Partial
 */
export type ITSPartial<T> = Partial<T>;
/**
 * 從類型 T 中選取指定的屬性 K
 * Pick a set of properties K from T
 *
 * @see Pick
 */
export type ITSPick<T, K extends keyof T = keyof T> = Pick<T, K>;
/**
 * 取得建構函數實例的類型
 * Get the instance type created by a constructor
 *
 * @see InstanceType
 */
export type ITSInstanceType<T extends new (...args: any[]) => any> = InstanceType<T>;
/**
 * 類別裝飾器類型
 * Class decorator type
 */
export type ITSClassDecorator = <TFunction extends Function>(target: TFunction) => TFunction | void;
/**
 * 屬性裝飾器類型
 * Property decorator type
 */
export type ITSPropertyDecorator = (target: object, propertyKey: string | symbol) => void;
/**
 * 方法裝飾器類型
 * Method decorator type
 */
export type ITSMethodDecorator = <T>(target: object, propertyKey: string | symbol, descriptor: TypedPropertyDescriptor<T>) => TypedPropertyDescriptor<T> | void;
/**
 * 參數裝飾器類型
 * Parameter decorator type
 */
export type ITSParameterDecorator = (target: object, propertyKey: string | symbol, parameterIndex: number) => void;
/**
 * 從 T 中排除 null 和 undefined
 * Exclude null and undefined from T
 *
 * @see NonNullable
 * @see https://devblogs.microsoft.com/typescript/announcing-typescript-4-8/#improved-intersection-reduction-union-compatibility-and-narrowing
 */
export type ITSNonNullable<T> = NonNullable<T>;
