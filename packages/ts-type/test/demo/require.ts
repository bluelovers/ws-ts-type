/**
 * Created by user on 2019/6/7.
 */

import { ITSReadonlyToWriteableArray } from '../../lib/helper/readonly';
import {
	ITSPartialPick,
	ITSPartialWith,
	ITSPickExtra,
	ITSRequireAtLeastOne, ITSRequiredPick,
	ITSRequiredWith,
	ITSRequireOnlyOne,
} from '../../lib';

interface T1 {
	a?: string;
	b?: number;
	c?: number;
	d?: string;
}

export let a: ITSRequireAtLeastOne<T1>;

a = {
	a: '',
	b: 1
};

a = {

	b: 1,
	c: 1
};

a = {
	a: '',
	c: 1
};

a = {
	a: '',
	d: '1'
};

export let b: ITSRequireOnlyOne<T1>;

b = {
	a: '',
};

b = {
	b: 1
};

b = {
	c: 1
};

b = {
	d: '1'
};
