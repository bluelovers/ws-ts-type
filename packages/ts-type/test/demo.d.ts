/**
 * Created by user on 2018/11/15/015.
 */
import { ITSOverwriteReturnType } from '..';
declare function f(a: number): number;
declare let c: ITSOverwriteReturnType<typeof f, string>;
export { c };
