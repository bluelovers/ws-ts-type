/**
 * Created by user on 2019/5/30.
 */
import { ITSReadonlyToWriteableArray } from '../../lib/helper/readonly';
import { ITSPartialPick, ITSPartialWith, ITSPickExtra, ITSRequiredPick, ITSRequiredWith } from '../../lib';

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
