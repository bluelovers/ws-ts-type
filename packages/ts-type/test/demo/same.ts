/**
 * Created by user on 2019/6/11.
 */
import {
	ITSKeyofSame,
	ITSKeyofBothSame,
	ITSKeyofBothDiff,
	ITSPickBothSame,
	ITSPickBothDiff,
	ITSPickBoth,
} from '../../lib';

interface A1
{
	a: number,
	b: number,

	d: number,

	g: number,
}

interface A2
{
	b: number,
	c: number,

	f: number,

	g: number,
}

interface AA1 extends ITSPickBothSame<A1, A2>
{

}

interface AA2 extends ITSPickBothDiff<A1, A2>
{

}

interface AA3 extends ITSPickBoth<A1, A2, 'b'>
{

}

interface AA4 extends ITSPickBoth<A1, A2, 'g'>
{

}

export let a1: AA1 = {
	b: 1,

	g: 1,
};

export let b1 = {
	...a1,
};

export let a2: AA2 = {

	a: 1,
	d: 1,
	c: 1,
	f: 1,

};

export let b2 = {
	...a2,
};

export let a3: AA3 = {

	b: 1,

};

export let b3 = {
	...a3,
};

export let a4: AA4 = {

	g: 1,

};

export let b4 = {
	...a4,
};
