
export type ITSReadonlyRecord<K extends keyof any, T> = {
	readonly [P in K]: T;
};
