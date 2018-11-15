# README

    add some typescript type and re-export some build-in typescript type

see [index.d.ts](index.d.ts)

## install

```nodemon
npm install ts-type
```

## demo

- [demo.ts](test/demo.ts) ／ [demo.d.ts](test/demo.d.ts)
- 

### ITSOverwrite

```ts
export interface A1
{
	s: string
}

export type A2 = ITSOverwrite<A1, {
	s: number,
}>
export declare let a2: A2;
// a2.s is number
```

### ITSOverwriteReturnType

```ts
import { ITSOverwriteReturnType } from '..';

declare function f(a: number): number

declare let c: ITSOverwriteReturnType<typeof f, string>;
// c is (a: number) => string
// c(1).toUpperCase()
```

### Promise / Bluebird / PromiseLike

```nodemon
npm install @types/bluebird ts-type
```

```ts
export declare function p1(a: number): Promise<number>

export declare let p1_v: ITSUnpackedReturnType<typeof p1>;

p1_v.toFixed()

export declare let p2: ITSWrapFunctionPromise<typeof p1>;
export declare let p3: ITSWrapFunctionBluebird<typeof p2>;
export declare let p4: ITSWrapFunctionBluebird<typeof p1>;

p2(1).then(v => v.toFixed())
p3(1).then(v => v.toFixed())
p4(1).then(v => v.toFixed())
```

## other

- [callable-instance2](https://www.npmjs.com/package/callable-instance2) - create an ES6 class that is callable as a function
- 

## docs

- http://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-1.html
- https://www.tslang.cn/docs/release-notes/typescript-3.1.html#toc-whats-new
