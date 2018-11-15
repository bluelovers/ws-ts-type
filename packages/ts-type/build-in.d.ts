/**
 * re-export build-in type
 * for some time ide is stupid can't found types
 */
export declare type ITSParameters<T extends (...args: any[]) => any> = Parameters<T>;
export declare type ITSConstructorParameters<T extends new (...args: any[]) => any> = ConstructorParameters<T>;
export declare type ITSPartial<T> = Partial<T>;
export declare type ITSPick<T, K extends keyof T> = Pick<T, K>;
export declare type ITSInstanceType<T extends new (...args: any[]) => any> = InstanceType<T>;
import * as TSTypeBuildIn from './build-in';
export declare type ITSTypeBuildIn = typeof TSTypeBuildIn;
export default ITSTypeBuildIn;
