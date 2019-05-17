# README

    A Typescript type definition for NPM package json

![image](https://github.com/bluelovers/ws-ts-type/raw/master/packages/package-dts/readme/image.png)

## install

```
npm install @ts-type/package-dts
```

## use

```ts
import IPackageJson from '../package-json';
import pkg = require('../package.json');

// eslint-disable-next-line
let a: IPackageJson = require('../package.json');
let b: IPackageJson = pkg as any;

let k = a.keywords.slice();

console.log(k);
```
