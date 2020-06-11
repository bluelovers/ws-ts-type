/**
 * @see https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-8.html
 *
 * Add readonly and ?
 */
import { ITSUnpackedArrayLike } from './unpacked';

export type ITSReadonlyPartial<T> = {
	readonly [P in keyof T]?: T[P]
};

export type ITSWriteable<T> = ITSWriteablePick<T, keyof T>;

export type ITSWriteablePick<T, K extends keyof T> = {
	-readonly [P in K]: T[P];
};

export type ITSWriteableWith<T, K extends keyof T> = Omit<T, K> & ITSWriteablePick<T, K>;

export type ITSReadonlyToWriteableArray<T extends readonly any[]> = Omit<T, keyof any[]> & ITSUnpackedArrayLike<T>[] & {
	-readonly [P in number | 'length']: T[P]
};

export type ITSWriteableDeep<T, K extends keyof T> = {
	-readonly [P in K]: T[P] extends Record<any, any> ? ITSWriteableDeep<T[P], keyof T[P]> : T[P];
};

export type ITSReadonlyDeep<T, K extends keyof T> = {
	readonly [P in K]: T[P] extends Record<any, any> ? ITSReadonlyDeep<T[P], keyof T[P]> : T[P];
};
