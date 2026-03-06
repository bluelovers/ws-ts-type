# package-dts

NPM 配置文件（package.json、.eslintrc.json、tsconfig.json、.travis.yml）的 TypeScript 類型定義

TypeScript type definitions for NPM configuration files (package.json, .eslintrc.json, tsconfig.json, .travis.yml)

## 功能特點 / Features

- 完整的 package.json 類型定義
- Complete package.json type definitions
- .eslintrc.json 類型定義
- .eslintrc.json type definitions
- tsconfig.json 類型定義
- tsconfig.json type definitions
- .travis.yml 類型定義
- .travis.yml type definitions
- 支援讀取並解析配置檔案
- Support reading and parsing configuration files

## 安裝 / Install

```bash
npm install @ts-type/package-dts
# or
yarn add @ts-type/package-dts
```

## 使用範例 / Usage Example

```typescript
import IPackageJson from '@ts-type/package-dts/package-json';
import { readPackageJson } from '@ts-type/package-dts';

// 讀取 package.json
const pkg = readPackageJson('./package.json');

// 使用類型
const name: string = pkg.name;
const version: string = pkg.version;
const keywords: string[] = pkg.keywords ?? [];

// 驗證類型
const devDeps = pkg.devDependencies;
if (devDeps) {
    Object.keys(devDeps).forEach(dep => {
        console.log(`${dep}@${devDeps[dep]}`);
    });
}
```

![image](https://github.com/bluelovers/ws-ts-type/raw/master/packages/package-dts/readme/image.png)
