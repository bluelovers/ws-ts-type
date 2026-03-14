# Auto-Accessors in Classes

> **版本：** TypeScript 4.9  
> **官方文件：** [Auto-Accessors in Classes](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-9.html#auto-accessors-in-classes)

Auto-Accessors 是 TypeScript 4.9 引入的新功能，它簡化了在類別中實現 getter/setter 模式的程式碼。

---

## 1. 解決的核心問題：重複的 Getter/Setter 程式碼

在 Auto-Accessors 出現之前，若要為類別屬性提供 getter 和 setter，你需要：

```typescript
class Person {
    private _name: string;

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }
}
```

這導致了：
- 大量重複的程式碼
- 難以維護
- 容易遺漏封裝邏輯

---

## 2. Auto-Accessors 的應用方式

### 基本語法

使用 `accessor` 關鍵字自動生成 getter 和 setter：

```typescript
class Person {
    accessor name: string;

    constructor(name: string) {
        this.name = name;
    }
}

const person = new Person("Alice");
console.log(person.name); // 呼叫 getter
person.name = "Bob";      // 呼叫 setter
```

* **幫助了什麼：** 將 8 行程式碼簡化為 1 行，同時自動生成 getter 和 setter。

### 初始化 + 存取修飾詞

Auto-Accessors 支援各種修飾詞：

```typescript
class Counter {
    accessor count: number = 0;
    accessor readonly id: string = "counter-1";
}

const counter = new Counter();
counter.count = 10; // ✅ 可寫
// counter.id = "x"; // ❌ 錯誤：id 是 readonly
```

* **解決了什麼問題：** 可以輕鬆將屬性設為 readonly，無需額外實現 getter。

### 與 private 修飾詞結合

```typescript
class BankAccount {
    accessor #balance: number = 0; // 私有 auto-accessor

    deposit(amount: number) {
        this.#balance += amount;
    }

    getBalance() {
        return this.#balance;
    }
}
```

### 抽象類別中的應用

```typescript
abstract class Animal {
    abstract accessor name: string;

    abstract makeSound(): void;
}

class Dog extends Animal {
    accessor name: string = "Buddy";

    makeSound() {
        console.log("Woof!");
    }
}
```

---

## 3. 實際應用場景

### A. 資料驗證

```typescript
class User {
    accessor username: string = "";

    set username(value: string) {
        if (value.length < 3) {
            throw new Error("Username must be at least 3 characters");
        }
        this._username = value; // 需要額外處理
    }
}

// 改進版本：使用存取修飾詞驗證
class User {
    accessor #_username: string = "";

    get username(): string {
        return this.#_username;
    }

    set username(value: string) {
        if (value.length < 3) {
            throw new Error("Username must be at least 3 characters");
        }
        this.#_username = value;
    }
}
```

### B. 變更追蹤（Change Tracking）

```typescript
class Observable {
    accessor value: any;
    private _isDirty = false;

    set value(v: any) {
        this._isDirty = true;
        this._value = v;
    }

    get value() {
        return this._value;
    }

    isDirty() {
        return this._isDirty;
    }

    markClean() {
        this._isDirty = false;
    }
}
```

### C. 計算屬性快取

```typescript
class MathUtil {
    accessor #input: number;
    #cachedResult?: number;

    constructor(input: number) {
        this.#input = input;
    }

    get result() {
        if (!this.#cachedResult) {
            this.#cachedResult = this.#input * 2 + 1;
        }
        return this.#cachedResult;
    }
}
```

---

## 4. Auto-Accessors vs 傳統 Getter/Setter

| 特性 | 傳統寫法 | Auto-Accessors |
|------|----------|----------------|
| **程式碼量** | 多行 | 單行 |
| **維護性** | 需手動同步 | 自動保持一致 |
| **私有支援** | `#field` + getter/setter | `accessor #field` |
| **readonly** | 需額外實現 | 直接支援 |
| **抽象類別** | 需手動實現 | 自動推斷 |

---

## 5. 編譯後的程式碼

Auto-Accessors 會被編譯為傳統的 getter/setter：

```typescript
// TypeScript
class Person {
    accessor name: string;
}

// 編譯為 JavaScript
class Person {
    #name;

    get name() {
        return this.#name;
    }

    set name(value) {
        this.#name = value;
    }
}
```

這確保了向後相容性和效能。

---

## 6. 總結

Auto-Accessors 解決了以下問題：

- ✅ **減少樣板程式碼**：無需手動編寫 getter/setter
- ✅ **提升可維護性**：自動生成的存取子保持一致
- ✅ **支援修飾詞**：可以結合 `readonly`、`private` 等
- ✅ **標準相容性**：與 ECMAScript 裝飾器提案相容

這個功能特別適合需要大量封裝屬性的類別，如：
- 表單驗證類別
- 狀態管理類別
- 資料模型的 Entity 類別