/**
 * Created by user on 2019/5/30.
 */
import {
	ITSPartialPick,
	ITSPartialWith,
	ITSPickExtra, ITSReadonlyToWriteableArray,
	ITSRequiredPick,
	ITSRequiredWith,

} from '../../lib/helper';

export interface I1
{
	a: string,
	b?: string,
	c: string,
}

export let a: ITSRequiredPick<I1, 'b'> = {
	b: '',
}

export let b: ITSPartialPick<I1, 'a'> = {

};

export let c: ITSPickExtra<I1, 'b', 'a'> = {

	b: '',

};

export let d: ITSPartialWith<I1, 'a'> = {

	c: '',

};

export let f: ITSRequiredWith<I1, 'a'> = {

	a: '',
	c: '',

};

export let arr1: readonly string[];

// @ts-ignore
arr1.push('');

export let arr2: ITSReadonlyToWriteableArray<typeof arr1>;

arr2.push('');

[].push('');
