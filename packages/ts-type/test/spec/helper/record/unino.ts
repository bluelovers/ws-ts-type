import { ITSPartialWith, ITSRequiredWith } from "../../../../lib";
import {
	ITSPartialWithUnion,
	ITSRequiredWithUnion,
	ITSPartialWithUnionFlat,
	ITSRequiredWithUnionFlat,
  ITSUnionFlat,
} from "../../../../lib/type/record/union";

type A = {
	type: "a";
	value?: number;
	common?: string;
};

type B = {
	type: "b";
	text?: string;
	common?: string;
};

type T = A | B;

type TestPartialWith =
	ITSPartialWith<A, "value">;

// 預期：
// {
//   type: "a";
//   value?: number;
//   common?: string;
// }

type TestRequiredWith =
	ITSRequiredWith<A, "value">;

// 預期：
// {
//   type: "a";
//   value: number;
//   common?: string;
// }

type TestPartialWithUnion =
	ITSPartialWithUnion<T, "value">;

// 預期：
// | {
//     type: "a";
//     value?: number;
//     common?: string;
//   }
// | {
//     type: "b";
//     text?: string;
//     common?: string;
//   }

type TestRequiredWithUnion =
	ITSRequiredWithUnion<T, "value">;

// 預期：
// | {
//     type: "a";
//     value: number;
//     common?: string;
//   }
// | {
//     type: "b";
//     text?: string;
//     common?: string;
//   }

type TestPartialWithUnionFlat =
	ITSPartialWithUnionFlat<T, "type">;

// 預期：
// {
//   type?: "a" | "b";
//   value: number;
//   text: string;
//   common?: string;
// }

type TestRequiredWithUnionFlat =
	ITSRequiredWithUnionFlat<T, "type">;

// 預期：
// {
//   type: "a" | "b";
//   value: number;
//   text: string;
//   common?: string;
// }

type TestPartialWithUnionFlatValue =
	ITSPartialWithUnionFlat<T, "value">;

// 預期：
// {
//   type: "a" | "b";
//   value?: number;
//   text: string;
//   common?: string;
// }

type TestRequiredWithUnionFlatText =
	ITSRequiredWithUnionFlat<T, "text">;

// 預期：
// {
//   type: "a" | "b";
//   value: number;
//   text: string;
//   common?: string;
// }

const partialWithUnion: ITSPartialWithUnion<T, "value"> = {
	type: "a",
	common: "test",
};

const requiredWithUnion: ITSRequiredWithUnion<T, "value"> = {
	type: "a",
	value: 123,
};

const partialWithUnionFlat: ITSPartialWithUnionFlat<T, "type"> = {
	value: 123,
	text: "hello",
	common: "test",
};

const requiredWithUnionFlat: ITSRequiredWithUnionFlat<T, "type"> = {
	type: "a",
	value: 123,
	text: "hello",
};

const unionFlat: ITSUnionFlat<T> = {
	type: "a",
	value: 123,
	text: "hello",
	common: "test",
};

