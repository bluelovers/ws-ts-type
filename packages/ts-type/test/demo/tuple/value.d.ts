import { ITSValueOfArray, ITSValueOfArrayLike } from '../../../lib/index';
export declare let a01: number[];
export declare let a02: readonly [1, 2];
export declare let a03: ArrayLike<3 | 4>;
export declare let a04: (5 | 6)[];
export declare let v01: ITSValueOfArray<typeof a01>;
export declare let v02: ITSValueOfArray<typeof a02>;
export declare let v03: ITSValueOfArray<typeof a03>;
export declare let v04: ITSValueOfArray<typeof a04>;
export declare let v011: ITSValueOfArrayLike<typeof a01>;
export declare let v021: ITSValueOfArrayLike<typeof a02>;
export declare let v031: ITSValueOfArrayLike<typeof a03>;
export declare let v041: ITSValueOfArrayLike<typeof a04>;
export declare let _: 1;
declare const _default: {
    v01: number;
    v02: 2 | 1;
    v03: never;
    v04: 5 | 6;
    v011: number;
    v021: 2 | 1;
    v031: 3 | 4;
    v041: 5 | 6;
};
export default _default;
