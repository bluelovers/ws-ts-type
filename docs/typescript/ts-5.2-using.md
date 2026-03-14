# `using` 宣告 (Explicit Resource Management)

> **版本：** TypeScript 5.2  
> **官方文件：** [Explicit Resource Management](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-5-2.html#explicit-resource-management)

`using` 宣告是 TypeScript 5.2 引入的新功能，用於顯式管理資源的生命週期，類似於 C# 的 `using` 語句。

---

## 1. 解決的核心問題：資源洩漏與手動清理

在 `using` 出現之前，管理資源（如檔案、資料庫連線、記憶體）需要手動清理：

```typescript
// ❌ 問題 1：容易忘記清理
function processFile(path: string) {
    const file = openFile(path);
    // ... 處理邏輯
    // 可能忘記關閉檔案
}

// ❌ 問題 2：try-finally 樣板程式碼過多
function processFile(path: string) {
    const file = openFile(path);
    try {
        // ... 處理邏輯
    } finally {
        file.close(); // 必須記得呼叫
    }
}
```

`using` 宣告讓資源在作用域結束時自動釋放：

```typescript
// ✅ 自動清理
function processFile(path: string) {
    using file = openFile(path);
    // ... 處理邏輯
    // 作用域結束時自動呼叫 file[Symbol.dispose]()
}
```

---

## 2. 應用方式

### A. 基本語法

```typescript
class FileHandle {
    // 實作 Symbol.dispose 方法
    [Symbol.dispose](): void {
        console.log("File closed");
        this.close();
    }

    close(): void {
        // 實際關閉邏輯
    }
}

function openFile(path: string): FileHandle {
    return new FileHandle(path);
}

function processFile() {
    using file = openFile("data.txt");
    // 使用 file
} // 自動呼叫 file[Symbol.dispose]()
```

### B. 多個 using 宣告

```typescript
function process() {
    using a = resourceA();
    using b = resourceB();
    using c = resourceC();

    // 所有資源在作用域結束時依序釋放
} // 順序：c -> b -> a（LIFO）
```

### C. 在控制流程中使用

```typescript
function processData(id: string) {
    using db = connectToDatabase();
    using cache = connectToCache();

    const data = db.query(id);
    return data;
}
```

---

## 3. 實際應用場景

### A. 檔案處理

```typescript
class FileReader implements Disposable {
    private handle: number;

    constructor(path: string) {
        this.handle = openFile(path);
    }

    read(): string {
        return readFromHandle(this.handle);
    }

    [Symbol.dispose](): void {
        closeFile(this.handle);
    }
}

function readFileContent(path: string): string {
    using reader = new FileReader(path);
    return reader.read();
} // 自動關閉檔案
```

### B. 資料庫連線

```typescript
class DatabaseConnection {
    private connection: Connection;

    async query(sql: string) {
        return this.connection.query(sql);
    }

    [Symbol.dispose](): void {
        this.connection.close();
    }
}

async function fetchUser(id: string) {
    using db = new DatabaseConnection();
    return db.query(`SELECT * FROM users WHERE id = ${id}`);
}
```

### C. 計時器與效能追蹤

```typescript
class Timer implements Disposable {
    private start: number;

    constructor(label: string) {
        this.start = performance.now();
        console.log(`[${label}] Started`);
    }

    [Symbol.dispose](): void {
        const duration = performance.now() - this.start;
        console.log(`[Timer] Completed in ${duration}ms`);
    }
}

function measurePerformance() {
    using timer = new Timer("Heavy Operation");
    // ... 執行耗時操作
}
```

### D. 鎖定與同步

```typescript
class Lock implements Disposable {
    private held = false;

    acquire() {
        this.held = true;
    }

    [Symbol.dispose](): void {
        this.held = false;
    }
}

function criticalSection() {
    using lock = globalLock;
    lock.acquire();
    // 臨界區域程式碼
}
```

---

## 4. Disposable 協定

要讓物件可以使用 `using`，必須實作 `Symbol.dispose` 方法：

```typescript
interface Disposable {
    [Symbol.dispose](): void;
}

interface AsyncDisposable {
    [Symbol.asyncDispose](): Promise<void>;
}
```

### 同步版本

```typescript
class Resource implements Disposable {
    [Symbol.dispose](): void {
        // 同步清理邏輯
    }
}
```

### 非同步版本

```typescript
class AsyncResource implements AsyncDisposable {
    [Symbol.asyncDispose](): Promise<void> {
        // 非同步清理邏輯
        return this.cleanup();
    }
}

async function process() {
    await using resource = new AsyncResource();
    // ...
}
```

---

## 5. 與其他語言的比較

| 特性 | C# | Python | JavaScript (傳統) | TypeScript 5.2+ |
|------|-----|--------|-------------------|----------------|
| **語法** | `using var = ...` | `with ... as ...` | try-finally | `using var = ...` |
| **自動呼叫** | Dispose() | `__exit__()` | 手動 | Symbol.dispose() |
| **非同步支援** | await using | async with | 手動 | await using |

---

## 6. 總結

`using` 宣告解決了以下問題：

- ✅ **避免資源洩漏**：確保資源正確釋放
- ✅ **減少樣板程式碼**：消除 try-finally 樣板
- ✅ **提升可讀性**：清理邏輯明確可見
- ✅ **編譯時期檢查**：編譯器確保正確使用

這個功能特別適合：
- 檔案操作
- 資料庫連線
- 網路連線
- 記憶體管理
- 效能追蹤

這是 TypeScript 對 ECMAScript TC39 「Explicit Resource Management」提案的支援。