/**
 * Created by user on 2019/6/11.
 */
import { ITSPickBothSame, ITSPickBothDiff, ITSPickBoth } from '../../lib';
interface A1 {
    a: number;
    b: number;
    d: number;
    g: number;
}
interface A2 {
    b: number;
    c: number;
    f: number;
    g: number;
}
interface AA1 extends ITSPickBothSame<A1, A2> {
}
interface AA2 extends ITSPickBothDiff<A1, A2> {
}
interface AA3 extends ITSPickBoth<A1, A2, 'b'> {
}
interface AA4 extends ITSPickBoth<A1, A2, 'g'> {
}
export declare let a1: AA1;
export declare let b1: {
    b: number;
    g: number;
};
export declare let a2: AA2;
export declare let b2: {
    a: number;
    c: number;
    d: number;
    f: number;
};
export declare let a3: AA3;
export declare let b3: {
    b: number;
};
export declare let a4: AA4;
export declare let b4: {
    g: number;
};
export {};
