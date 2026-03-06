# ts-type-object-entries

為 Object.entries 提供更好的 TypeScript 類型推論

Better TypeScript types for Object.entries

## 功能特點 / Features

- 支援物件類型的精確鍵值對回傳
- Support precise key-value pair return for object types
- 保留 readonly 陣列類型
- Preserve readonly array types
- 完整的 TypeScript 類型安全
- Complete TypeScript type safety

## 安裝 / Install

```bash
yarn add ts-type-object-entries
yarn-tool add ts-type-object-entries
yt add ts-type-object-entries
```

## 使用範例 / Usage Example

```typescript
import { tsObjectEntries } from 'ts-type-object-entries';

const obj = { a: 1, b: 2 } as const;
const entries = tsObjectEntries(obj);
// type: readonly ("a" | "b")[][]
// [['a', 1], ['b', 2]]

interface IUser {
    name: string;
    age: number;
}

const user: IUser = { name: 'John', age: 30 };
const userEntries = tsObjectEntries(user);
// [key: string, value: string | number][]
```

