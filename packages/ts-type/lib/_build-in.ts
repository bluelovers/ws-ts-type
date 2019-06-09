/**
 * re-export build-in type
 * for some time ide is stupid can't found types
 */

export type ITSParameters<T extends (...args: any[]) => any> = Parameters<T>
export type ITSConstructorParameters<T extends new (...args: any[]) => any> = ConstructorParameters<T>
export type ITSPartial<T> = Partial<T>
export type ITSPick<T, K extends keyof T> = Pick<T, K>
export type ITSInstanceType<T extends new (...args: any[]) => any> = InstanceType<T>


export type ITSClassDecorator = <TFunction extends Function>(target: TFunction) => TFunction | void;
export type ITSPropertyDecorator = (target: object, propertyKey: string | symbol) => void;
export type ITSMethodDecorator = <T>(target: object, propertyKey: string | symbol, descriptor: TypedPropertyDescriptor<T>) => TypedPropertyDescriptor<T> | void;
export type ITSParameterDecorator = (target: object, propertyKey: string | symbol, parameterIndex: number) => void;
