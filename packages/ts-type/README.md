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

## docs

- http://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-1.html
- https://www.tslang.cn/docs/release-notes/typescript-3.1.html#toc-whats-new
