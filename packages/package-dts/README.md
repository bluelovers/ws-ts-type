# README

    A Typescript type definition for NPM package json

![image](../../image.png)

## install

```
npm install @ts-type/package-dts
```

## use

```
import IPackageJson from '../package-json';
import pkg = require('../package.json');

// eslint-disable-next-line
let a: IPackageJson = require('../package.json');
let b: IPackageJson = pkg as any;

let k = a.keywords.slice();

console.log(k);
```
