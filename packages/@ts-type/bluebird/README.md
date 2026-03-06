# @ts-type/bluebird

Bluebird Promise 類型的增強類型定義

Enhanced type definitions for Bluebird Promise

## 功能特點 / Features

- Bluebird Promise 類型別名
- Bluebird Promise type aliases
- 函式包裝為 Bluebird Promise
- Wrap functions to return Bluebird Promise
- 支援 promisifyAll 類型
- Support promisifyAll types
- 元組轉換為 Inspection 類型
- Tuple to Inspection type conversion

## 安裝 / Install

```bash
yarn add @ts-type/bluebird
yarn-tool add @ts-type/bluebird
yt add @ts-type/bluebird
```

## 使用範例 / Usage Example

```typescript
import type { IBluebird, ITSBluebirdPromisifyAll, ITSResultArrayToBluebirdInspection } from '@ts-type/bluebird';
import Bluebird from 'bluebird';

// 使用 Bluebird 類型別名
type MyPromise = IBluebird<string>;

// 將物件方法轉換為 Bluebird Promise
interface IOriginal {
    fetchData(): Promise<string>;
}

type IPromisified = ITSBluebirdPromisifyAll<IOriginal>;
```

