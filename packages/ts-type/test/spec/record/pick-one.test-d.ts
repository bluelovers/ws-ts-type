import { ITSPickOne } from '../../../lib/helper/record/pick-one';
import { expectNotAssignable, expectAssignable, printType } from 'tsd';

interface ICodingLangRating
{
	java: string
	cpp: string
	go: string
	js: string
}

type Engineer<K extends keyof ICodingLangRating = keyof ICodingLangRating> = {
	name: string
	gender: 'male' | 'female'
	age: number
} & ITSPickOne<ICodingLangRating, K>

type OneLang = ITSPickOne<ICodingLangRating>

// 正确
const lang: OneLang = {
	java: 'good'
}

expectAssignable<OneLang>({
	java: 'good'
})

const lang2: OneLang = {
	// @ts-expect-error
	python: 'unknown'
}

expectNotAssignable<OneLang>({
	python: 'unknown'
});

// @ts-expect-error
const lang3: OneLang = {
	java: 'good',
	go: 'good'
}

expectNotAssignable<OneLang>({
	java: 'good',
	go: 'good'
});

// 错误
const lang4: OneLang = {
	// @ts-expect-error
	java: 123
}

expectNotAssignable<OneLang>({
	java: 123
});

const lang5: OneLang = {
	java: 'good',
	go: null as null,
	js: undefined as undefined,
	cpp: void 0 as void,
}

expectAssignable<OneLang>({
	java: 'good',
	go: null as null,
	js: undefined as undefined,
	cpp: void 0 as void,
});

//printType(lang5);

const candidate_1: Engineer<'java' | 'go'> = {
	name: 'Jack',
	gender: 'male',
	age: 22,
	java: 'fabulous',
}

expectAssignable<Engineer<'java' | 'go'>>({
	name: 'Jack',
	gender: 'male',
	age: 22,
	java: 'fabulous',
});

expectAssignable<Engineer>({
	name: 'Jack',
	gender: 'male',
	age: 22,
	java: 'fabulous',
});

//printType(candidate_1);
