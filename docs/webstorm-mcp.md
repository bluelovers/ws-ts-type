# WebStorm MCP (Model Context Protocol) 文檔

## 1. 協議概述

| 項目 | 說明 |
|------|------|
| 協議名稱 | MCP (Model Context Protocol) |
| 服務類型 | WebStorm JetBrains IDE |
| 協議前綴 | `webstorm_` / `webstorm-stream_` |

---

## 2. 協議類型與網址

### 協議類型
- **MCP (Model Context Protocol)**: 一個用於 AI 助手與 IDE 之間溝通的標準協議

### 協議配置

#### webstorm (SSE 協議)
| 項目 | 值 |
|------|-----|
| 類型 (type) | `remote` |
| URL | `http://127.0.0.1:64342/sse` |
| Headers | `Accept: application/json, text/event-stream` |
| 啟用狀態 | ✅ enabled |

#### webstorm-stream (Stream 協議)
| 項目 | 值 |
|------|-----|
| 類型 (type) | `remote` |
| URL | `http://127.0.0.1:64342/stream` |
| 啟用狀態 | ✅ enabled |

---

## 3. MCP 設定

### 3.1 設定檔位置

```
C:\Users\User\.config\opencode\opencode.jsonc
```

### 3.2 完整 MCP 配置內容

```jsonc
{
  "mcp": {
    "webstorm": {
      "enabled": true,
      "type": "remote",
      "url": "http://127.0.0.1:64342/sse",
      "headers": {
        "Accept": "application/json, text/event-stream"
      }
    },
    "webstorm-stream": {
      "type": "remote",
      "url": "http://127.0.0.1:64342/stream",
      "enabled": true
    }
  }
}
```

### 3.3 環境變數
| 變數名稱 | 說明 | 預設值 |
|----------|------|--------|
| `IDE_URL` | JetBrains IDE 的 URL | `http://localhost:6332` |
| `IDE_TOKEN` | IDE 認證 Token | - |

---

## 4. MCP 指令列表

### 4.1 檔案操作 (6 個)

#### 4.1.1 webstorm_open_file_in_editor
在編輯器中開啟檔案

| 參數 | 類型 | 必填 | 說明 |
|------|------|------|------|
| `filePath` | string | 是 | 檔案路徑（相對於專案根目錄） |
| `projectPath` | string | 否 | 專案路徑 |

#### 4.1.2 webstorm_create_new_file
建立新檔案

| 參數 | 類型 | 必填 | 說明 |
|------|------|------|------|
| `pathInProject` | string | 是 | 檔案路徑（相對於專案根目錄） |
| `text` | string | 否 | 檔案內容 |
| `overwrite` | boolean | 否 | 是否覆寫已存在的檔案 |
| `projectPath` | string | 否 | 專案路徑 |

#### 4.1.3 webstorm_read_file
讀取檔案內容

| 參數 | 類型 | 必填 | 說明 |
|------|------|------|------|
| `file_path` | string | 是 | 檔案路徑（相對於專案根目錄） |
| `mode` | string | 否 | 讀取模式：`slice` / `lines` / `line_columns` / `offsets` / `indentation` |
| `start_line` | number | 否 | 起始行號（1-indexed） |
| `max_lines` | number | 否 | 最大行數 |
| `end_line` | number | 否 | 結束行號 |
| `start_column` | number | 否 | 起始欄位 |
| `end_column` | number | 否 | 結束欄位 |
| `start_offset` | number | 否 | 起始偏移量（0-indexed） |
| `end_offset` | number | 否 | 結束偏移量 |
| `context_lines` | number | 否 | 上下文行數 |
| `max_levels` | number | 否 | 最大縮排層級 |
| `include_siblings` | boolean | 否 | 包含同層級節點 |
| `include_header` | boolean | 否 | 包含標頭註解 |
| `projectPath` | string | 否 | 專案路徑 |

#### 4.1.4 webstorm_get_file_text_by_path
取得檔案文字內容

| 參數 | 類型 | 必填 | 說明 |
|------|------|------|------|
| `pathInProject` | string | 是 | 檔案路徑（相對於專案根目錄） |
| `truncateMode` | string | 否 | 截斷模式：`START` / `MIDDLE` / `END` / `NONE` |
| `maxLinesCount` | number | 否 | 最大行數 |
| `projectPath` | string | 否 | 專案路徑 |

#### 4.1.5 webstorm_replace_text_in_file
替換檔案中的文字

| 參數 | 類型 | 必填 | 說明 |
|------|------|------|------|
| `pathInProject` | string | 是 | 檔案路徑（相對於專案根目錄） |
| `oldText` | string | 是 | 要替換的文字 |
| `newText` | string | 是 | 替換後的文字 |
| `replaceAll` | boolean | 否 | 是否替換所有匹配項（預設：true） |
| `caseSensitive` | boolean | 否 | 是否區分大小寫（預設：true） |
| `regex` | boolean | 否 | 是否使用正規表達式（預設：false） |
| `projectPath` | string | 否 | 專案路徑 |

#### 4.1.6 webstorm_reformat_file
格式化檔案

| 參數 | 類型 | 必填 | 說明 |
|------|------|------|------|
| `path` | string | 是 | 檔案路徑（相對於專案根目錄） |
| `projectPath` | string | 否 | 專案路徑 |

---

### 4.2 檔案搜尋 (7 個)

#### 4.2.1 webstorm_search_file
使用 glob 模式搜尋檔案

| 參數 | 類型 | 必填 | 說明 |
|------|------|------|------|
| `q` | string | 是 | Glob 模式（如 `*.ts`） |
| `paths` | string[] | 否 | 額外的路徑過濾 |
| `includeExcluded` | boolean | 否 | 包含排除的檔案 |
| `limit` | number | 否 | 結果數量限制 |
| `projectPath` | string | 否 | 專案路徑 |

#### 4.2.2 webstorm_find_files_by_glob
按 glob 模式查找檔案

| 參數 | 類型 | 必填 | 說明 |
|------|------|------|------|
| `globPattern` | string | 是 | Glob 模式 |
| `subDirectoryRelativePath` | string | 否 | 子目錄路徑 |
| `addExcluded` | boolean | 否 | 包含排除的檔案 |
| `fileCountLimit` | number | 否 | 結果數量限制 |
| `timeout` | number | 否 | 逾時時間（毫秒） |
| `projectPath` | string | 否 | 專案路徑 |

#### 4.2.3 webstorm_find_files_by_name_keyword
按檔名關鍵字查找

| 參數 | 類型 | 必填 | 說明 |
|------|------|------|------|
| `nameKeyword` | string | 是 | 檔名關鍵字 |
| `fileCountLimit` | number | 否 | 結果數量限制 |
| `timeout` | number | 否 | 逾時時間（毫秒） |
| `projectPath` | string | 否 | 專案路徑 |

#### 4.2.4 webstorm_search_in_files_by_text
在檔案中搜尋文字

| 參數 | 類型 | 必填 | 說明 |
|------|------|------|------|
| `searchText` | string | 是 | 搜尋文字 |
| `directoryToSearch` | string | 否 | 搜尋目錄 |
| `fileMask` | string | 否 | 檔案遮罩（如 `*.ts`） |
| `caseSensitive` | boolean | 否 | 是否區分大小寫 |
| `maxUsageCount` | number | 否 | 最大結果數 |
| `timeout` | number | 否 | 逾時時間（毫秒） |
| `projectPath` | string | 否 | 專案路徑 |

#### 4.2.5 webstorm_search_in_files_by_regex
在檔案中搜尋正規表達式

| 參數 | 類型 | 必填 | 說明 |
|------|------|------|------|
| `regexPattern` | string | 是 | 正規表達式 |
| `directoryToSearch` | string | 否 | 搜尋目錄 |
| `fileMask` | string | 否 | 檔案遮罩 |
| `caseSensitive` | boolean | 否 | 是否區分大小寫 |
| `maxUsageCount` | number | 否 | 最大結果數 |
| `timeout` | number | 否 | 逾時時間（毫秒） |
| `projectPath` | string | 否 | 專案路徑 |

#### 4.2.6 webstorm_search_text
文字搜尋（返回搜尋結果含代碼片段）

| 參數 | 類型 | 必填 | 說明 |
|------|------|------|------|
| `q` | string | 是 | 搜尋文字 |
| `paths` | string[] | 否 | 路徑過濾 |
| `limit` | number | 否 | 結果數量限制 |
| `projectPath` | string | 否 | 專案路徑 |

#### 4.2.7 webstorm_search_symbol
搜尋符號（類別、方法、欄位）

| 參數 | 類型 | 必填 | 說明 |
|------|------|------|------|
| `q` | string | 是 | 符號查詢文字 |
| `paths` | string[] | 否 | 路徑過濾 |
| `limit` | number | 否 | 結果數量限制 |
| `projectPath` | string | 否 | 專案路徑 |

---

### 4.3 目錄與專案 (5 個)

#### 4.3.1 webstorm_list_directory_tree
列出目錄樹結構

| 參數 | 類型 | 必填 | 說明 |
|------|------|------|------|
| `directoryPath` | string | 是 | 目錄路徑（相對於專案根目錄） |
| `maxDepth` | number | 否 | 最大遞迴深度 |
| `timeout` | number | 否 | 逾時時間（毫秒） |
| `projectPath` | string | 否 | 專案路徑 |

#### 4.3.2 webstorm_get_all_open_file_paths
取得所有已開啟的檔案路徑

| 參數 | 類型 | 必填 | 說明 |
|------|------|------|------|
| `projectPath` | string | 否 | 專案路徑 |

#### 4.3.3 webstorm_get_project_dependencies
取得專案依賴

| 參數 | 類型 | 必填 | 說明 |
|------|------|------|------|
| `projectPath` | string | 否 | 專案路徑 |

#### 4.3.4 webstorm_get_project_modules
取得專案模組

| 參數 | 類型 | 必填 | 說明 |
|------|------|------|------|
| `projectPath` | string | 否 | 專案路徑 |

#### 4.3.5 webstorm_get_repositories
取得 VCS 儲存庫清單

| 參數 | 類型 | 必填 | 說明 |
|------|------|------|------|
| `projectPath` | string | 否 | 專案路徑 |

---

### 4.4 程式碼分析 (3 個)

#### 4.4.1 webstorm_get_file_problems
取得檔案問題（錯誤、警告）

| 參數 | 類型 | 必填 | 說明 |
|------|------|------|------|
| `filePath` | string | 是 | 檔案路徑（相對於專案根目錄） |
| `errorsOnly` | boolean | 否 | 是否只顯示錯誤 |
| `timeout` | number | 否 | 逾時時間（毫秒） |
| `projectPath` | string | 否 | 專案路徑 |

#### 4.4.2 webstorm_get_symbol_info
取得符號資訊

| 參數 | 類型 | 必填 | 說明 |
|------|------|------|------|
| `filePath` | string | 是 | 檔案路徑（相對於專案根目錄） |
| `line` | number | 是 | 行號（1-indexed） |
| `column` | number | 是 | 欄位號（1-indexed） |
| `projectPath` | string | 否 | 專案路徑 |

#### 4.4.3 webstorm_build_project
建置專案

| 參數 | 類型 | 必填 | 說明 |
|------|------|------|------|
| `rebuild` | boolean | 否 | 是否執行完整重建 |
| `filesToRebuild` | string[] | 否 | 要編譯的檔案列表 |
| `timeout` | number | 否 | 逾時時間（毫秒） |
| `projectPath` | string | 否 | 專案路徑 |

---

### 4.5 程式碼重構 (1 個)

#### 4.5.1 webstorm_rename_refactoring
重新命名重構

| 參數 | 類型 | 必填 | 說明 |
|------|------|------|------|
| `pathInProject` | string | 是 | 檔案路徑（相對於專案根目錄） |
| `symbolName` | string | 是 | 現有符號名稱 |
| `newName` | string | 是 | 新名稱 |
| `projectPath` | string | 否 | 專案路徑 |

---

### 4.6 執行與終端 (3 個)

#### 4.6.1 webstorm_execute_run_configuration
執行執行配置

| 參數 | 類型 | 必填 | 說明 |
|------|------|------|------|
| `configurationName` | string | 是 | 運行配置名稱 |
| `timeout` | number | 否 | 逾時時間（毫秒） |
| `maxLinesCount` | number | 否 | 最大行數限制 |
| `truncateMode` | string | 否 | 截斷模式：`START` / `MIDDLE` / `END` / `NONE` |
| `projectPath` | string | 否 | 專案路徑 |

#### 4.6.2 webstorm_get_run_configurations
取得執行配置清單

| 參數 | 類型 | 必填 | 說明 |
|------|------|------|------|
| `projectPath` | string | 否 | 專案路徑 |

#### 4.6.3 webstorm_execute_terminal_command
執行終端機命令

| 參數 | 類型 | 必填 | 說明 |
|------|------|------|------|
| `command` | string | 是 | 要執行的命令 |
| `executeInShell` | boolean | 否 | 是否在 shell 中執行 |
| `reuseExistingTerminalWindow` | boolean | 否 | 是否重用現有終端機視窗 |
| `timeout` | number | 否 | 逾時時間（毫秒） |
| `maxLinesCount` | number | 否 | 最大行數限制 |
| `truncateMode` | string | 否 | 截斷模式 |
| `projectPath` | string | 否 | 專案路徑 |

---

### 4.7 其他 (1 個)

#### 4.7.1 webstorm_permission_prompt
權限提示

| 參數 | 類型 | 必填 | 說明 |
|------|------|------|------|
| `tool_use_id` | string | 是 | 工具使用 ID |
| `tool_name` | string | 是 | 工具名稱 |
| `input` | object | 否 | 輸入物件 |
| `projectPath` | string | 否 | 專案路徑 |

---

## 5. 指令數量統計

| 類別 | 數量 |
|------|------|
| 檔案操作 | 6 |
| 檔案搜尋 | 7 |
| 目錄與專案 | 5 |
| 程式碼分析 | 3 |
| 程式碼重構 | 1 |
| 執行與終端 | 3 |
| 其他 | 1 |
| **總計** | **24** |

---

## 6. 協議別名說明

WebStorm MCP 支援兩種協議前綴命名方式，但**功能並不完全相同**：

| 協議名稱 | URL | 類型 |
|----------|-----|------|
| `webstorm` | `http://127.0.0.1:64342/sse` | SSE |
| `webstorm-stream` | `http://127.0.0.1:64342/stream` | Stream |

### 使用範例

```bash
# ✅ 正常運作
webstorm_get_all_open_file_paths
webstorm_list_directory_tree
webstorm_open_file_in_editor
```

### 狀態說明

- **`webstorm` (SSE)**: 正常運作，建議使用
- **`webstorm-stream` (Stream)**: 存在 session 問題，有時無法正常使用

---

## 7. 重要觀察與使用須知

### 7.1 IDE 必須處於執行狀態

| 狀態 | MCP 指令結果 |
|------|-------------|
| IDE 關閉 | ❌ Unable to connect |
| IDE 開啟中 | ❌ 視專案狀態而定 |

**當 WebStorm IDE 關閉時，MCP 指令將無法執行。**

### 7.2 必須開啟專案

WebStorm MCP 需要 IDE **載入專案**才能正常運作。

| 狀態 | MCP 指令結果 |
|------|-------------|
| IDE 開啟但無專案 | ❌ Streamable HTTP session not found |
| IDE 開啟 + 開啟專案 | ✅ 正常運作 |

### 7.3 正確的啟動方式

**❌ 錯誤的啟動方式**：
```bash
# 只啟動 WebStorm（不開啟專案）
webstorm
```

**✅ 正確的啟動方式**：
```bash
# 使用 CLI 開啟專案目錄
"C:\Users\User\AppData\Local\JetBrains\Toolbox\scripts\webstorm" "D:\Users\WebstormProjects\nodejs-yarn\ws-ts-type"

# 或開啟特定檔案
"C:\Users\User\AppData\Local\JetBrains\Toolbox\scripts\webstorm" "D:\Users\WebstormProjects\nodejs-yarn\ws-ts-type\packages\ts-type\package.json"
```

### 7.3.1 CLI 參數行為觀察

> 詳細 CLI 指令說明，請參閱 [webstorm-cli.md](./webstorm-cli.md)

**快速連結**：
- [檔案開啟與導航](./webstorm-cli.md#11-檔案開啟與導航) - 包含參數行為觀察
- [合併工具](./webstorm-cli.md#13-合併工具-merge)
- [選項](./webstorm-cli.md#2-選項-options)

### 7.4 故障排除

| 錯誤訊息 | 解決方式 |
|----------|----------|
| `Unable to connect` | 確認 WebStorm IDE 正在執行 |
| `Streamable HTTP session not found` | 使用 CLI 重新開啟專案 |

---

## 8. 相關資源

- [JetBrains MCP 伺服器](https://github.com/modelcontextprotocol/server-jetbrains)
- [MCP 官方文檔](https://modelcontextprotocol.io/)
- [OpenCode 官方網站](https://opencode.ai/)

---
