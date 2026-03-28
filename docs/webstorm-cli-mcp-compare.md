# WebStorm CLI 與 MCP 指令比較

## 1. 概述

本文檔比較 WebStorm CLI 指令與 MCP 指令之間的對應關係與差異。

---

## 2. 對應關係總覽

### 2.1 檔案操作對應

| CLI 指令 | MCP 指令 | 功能描述 | 差異說明 |
|----------|----------|----------|----------|
| `webstorm <file>` | `webstorm_open_file_in_editor` | 開啟檔案 | CLI 可開啟專案/目錄，MCP 僅限檔案 |
| `webstorm --line N <file>` | `webstorm_open_file_in_editor` | 開啟檔案並跳至行號 | CLI 內建支援，MCP 需另搭配 |
| `webstorm format <file>` | `webstorm_reformat_file` | 格式化檔案 | 功能相同 |
| - | `webstorm_create_new_file` | 建立新檔案 | CLI 無直接對應 |
| - | `webstorm_read_file` | 讀取檔案 | CLI 無直接對應 |
| - | `webstorm_get_file_text_by_path` | 取得檔案內容 | CLI 無直接對應 |
| - | `webstorm_replace_text_in_file` | 替換檔案文字 | CLI 無直接對應 |

### 2.2 程式碼分析對應

| CLI 指令 | MCP 指令 | 功能描述 | 差異說明 |
|----------|----------|----------|----------|
| `webstorm inspect <project>` | `webstorm_get_file_problems` | 程式碼檢查 | CLI 可檢查整個專案，MCP 限單檔 |
| `webstorm inspect <project>` | `webstorm_build_project` | 建置專案 | CLI 執行檢查，MCP 執行編譯 |
| - | `webstorm_get_symbol_info` | 取得符號資訊 | CLI 無直接對應 |

### 2.3 差異查看器對應

| CLI 指令 | MCP 指令 | 功能描述 | 差異說明 |
|----------|----------|----------|----------|
| `webstorm diff <file1> <file2>` | - | 開啟差異查看器 | **MCP 無直接對應** |

### 2.4 合併工具對應

| CLI 指令 | MCP 指令 | 功能描述 | 差異說明 |
|----------|----------|----------|----------|
| `webstorm merge <local> <remote> [base] <merged>` | - | 合併檔案 | **MCP 無直接對應** |

### 2.5 執行配置對應

| CLI 指令 | MCP 指令 | 功能描述 | 差異說明 |
|----------|----------|----------|----------|
| (透過 IDE UI) | `webstorm_execute_run_configuration` | 執行運行配置 | CLI 需透過 IDE UI 操作 |
| (透過 IDE UI) | `webstorm_get_run_configurations` | 取得運行配置清單 | CLI 需透過 IDE UI 查看 |

### 2.6 檔案搜尋對應

| CLI 指令 | MCP 指令 | 功能描述 | 差異說明 |
|----------|----------|----------|----------|
| - | `webstorm_search_file` | glob 搜尋 | CLI 無直接對應 |
| - | `webstorm_find_files_by_glob` | glob 查找 | CLI 無直接對應 |
| - | `webstorm_find_files_by_name_keyword` | 檔名關鍵字查找 | CLI 無直接對應 |
| - | `webstorm_search_in_files_by_text` | 文字搜尋 | CLI 無直接對應 |
| - | `webstorm_search_in_files_by_regex` | 正規表達式搜尋 | CLI 無直接對應 |
| - | `webstorm_search_text` | 搜尋並返回片段 | CLI 無直接對應 |
| - | `webstorm_search_symbol` | 符號搜尋 | CLI 無直接對應 |

### 2.7 目錄與專案對應

| CLI 指令 | MCP 指令 | 功能描述 | 差異說明 |
|----------|----------|----------|----------|
| - | `webstorm_list_directory_tree` | 目錄樹結構 | CLI 無直接對應 |
| - | `webstorm_get_all_open_file_paths` | 已開啟檔案 | CLI 無直接對應 |
| - | `webstorm_get_project_dependencies` | 專案依賴 | CLI 無直接對應 |
| - | `webstorm_get_project_modules` | 專案模組 | CLI 無直接對應 |
| - | `webstorm_get_repositories` | VCS 儲存庫 | CLI 無直接對應 |

### 2.8 程式碼重構對應

| CLI 指令 | MCP 指令 | 功能描述 | 差異說明 |
|----------|----------|----------|----------|
| - | `webstorm_rename_refactoring` | 重新命名重構 | CLI 無直接對應 |

---

## 3. 差異分析

### 3.1 CLI 專有功能

| CLI 指令 | 說明 | MCP 替代方案 |
|----------|------|---------------|
| `webstorm diff <file1> <file2>` | 開啟差異查看器 | 無 |
| `webstorm merge <local> <remote> [base] <merged>` | 合併工具 | 無 |
| `webstorm installPlugins <pluginId>` | 安裝插件 | 無 |

### 3.2 MCP 專有功能

| MCP 指令 | 說明 | CLI 替代方案 |
|----------|------|--------------|
| `webstorm_create_new_file` | 建立新檔案 | 無 |
| `webstorm_read_file` | 讀取檔案內容 | 外部工具 `cat` |
| `webstorm_get_file_text_by_path` | 取得檔案文字 | 外部工具 `cat` |
| `webstorm_replace_text_in_file` | 替換文字 | 外部工具 `sed` |
| `webstorm_search_file` | 檔案搜尋 | 外部工具 `find` |
| `webstorm_search_text` | 文字搜尋 | 外部工具 `grep` |
| `webstorm_search_symbol` | 符號搜尋 | 無 |
| `webstorm_list_directory_tree` | 目錄樹 | 外部工具 `tree` |
| `webstorm_rename_refactoring` | 重構 | 無 |

### 3.3 功能相似但實現不同

| 功能 | CLI 實現 | MCP 實現 | 優劣勢 |
|------|----------|----------|--------|
| 開啟檔案 | 內建行號跳轉 | 僅開啟 | CLI 較方便 |
| 格式化 | 內建 format 指令 | 需透過 MCP | CLI 較直觀 |
| 程式碼檢查 | inspect 專案 | get_file_problems 單檔 | CLI 適合全面檢查 |

---

## 4. CLI 輔助 MCP 指令場景

### 4.1 開啟檔案並定位

**場景**：需要開啟檔案並跳至指定行號

| 方式 | 指令 | 說明 |
|------|------|------|
| MCP | `webstorm_open_file_in_editor` | 僅開啟檔案 |
| **CLI 輔助** | `webstorm --line N <file>` | 直接跳至行號 |

**推薦**：
- 簡單開啟 → MCP `open_file_in_editor`
- 需要定位 → 使用 CLI `webstorm --line N`

### 4.2 差異查看

**場景**：需要比較兩個檔案差異

| 方式 | 指令 | 說明 |
|------|------|------|
| **CLI 專有** | `webstorm diff <file1> <file2>` | ✅ 開啟 IDE 差異查看器 |

**說明**：MCP 無法直接開啟差異查看器，必須使用 CLI。

### 4.3 合併衝突

**場景**：需要合併檔案（Git 衝突處理）

| 方式 | 指令 | 說明 |
|------|------|------|
| **CLI 專有** | `webstorm merge <local> <remote> <output>` | ✅ 開啟 IDE 合併工具 |

**說明**：MCP 無法直接開啟合併工具，必須使用 CLI。

### 4.4 格式化檔案

**場景**：需要格式化程式碼

| 方式 | 指令 | 說明 |
|------|------|------|
| MCP | `webstorm_reformat_file` | 格式化檔案 |
| CLI | `webstorm format <file>` | 格式化檔案 |

**說明**：兩者功能相同，可任選。

### 4.5 專案程式碼檢查

**場景**：需要對整個專案執行程式碼檢查

| 方式 | 指令 | 說明 |
|------|------|------|
| **CLI 專有** | `webstorm inspect <project> <profile>` | ✅ 執行全面檢查 |
| MCP | `webstorm_get_file_problems` | 僅限單一檔案 |

**推薦**：
- 全面檢查 → CLI `inspect`
- 單檔檢查 → MCP `get_file_problems`

### 4.6 批量開啟多個檔案

**場景**：需要一次開啟多個檔案

| 方式 | 說明 |
|------|------|
| MCP 迴圈 | 多次呼叫 `open_file_in_editor` |
| CLI | 依序使用 `webstorm <file1> <file2> ...` |

**說明**：CLI 支援一次性開啟多個檔案。

### 4.7 插件安裝

**場景**：需要安裝 JetBrains 插件

| 方式 | 指令 | 說明 |
|------|------|------|
| **CLI 專有** | `webstorm installPlugins <pluginId>` | ✅ 從 Marketplace 安裝 |

**說明**：MCP 無法安裝插件。

---

## 5. 決策矩陣

### 5.1 選擇使用 CLI 或 MCP

| 需求 | 推薦使用 | 原因 |
|------|----------|------|
| 開啟檔案（無需定位） | MCP | 可直接整合至工作流程 |
| 開啟檔案並跳至行號 | CLI | 內建支援 |
| 格式化檔案 | 兩者皆可 | 功能相同 |
| 程式碼檢查（單檔） | MCP | 可整合至自動化 |
| 程式碼檢查（專案） | CLI | 全面檢查 |
| 差異查看 | CLI | MCP 無對應 |
| 合併工具 | CLI | MCP 無對應 |
| 檔案搜尋 | MCP | 可整合至自動化 |
| 重新命名重構 | MCP | 可整合至自動化 |
| 安裝插件 | CLI | MCP 無對應 |

---

## 6. 整合建議

### 6.1 自動化工作流程

**適合使用 MCP**：
- 檔案搜尋與分析
- 程式碼重構
- 取得專案資訊
- 執行運行配置

**適合使用 CLI**：
- 開啟檔案並定位
- 差異查看
- 合併工具
- 專案全面檢查
- 插件管理

### 6.2 混合使用策略

1. **MCP 為主**：日常搜尋、重構、資訊取得
2. **CLI 輔助**：特定場景（如開啟差異查看器、合併衝突）
3. **外部工具**：基本檔案操作（cat, grep, find）

---

## 7. 對應表摘要

### 7.1 完整對應表

| 功能類別 | CLI 有 | MCP 有 | 對等 | CLI 專有 | MCP 專有 |
|----------|--------|--------|------|----------|----------|
| 開啟檔案 | ✅ | ✅ | 部分 | - | - |
| 格式化 | ✅ | ✅ | ✅ | - | - |
| 程式碼檢查 | ✅ | ✅ | 部分 | - | - |
| 差異查看 | ✅ | ❌ | - | ✅ | - |
| 合併工具 | ✅ | ❌ | - | ✅ | - |
| 檔案搜尋 | ❌ | ✅ | - | - | ✅ |
| 目錄操作 | ❌ | ✅ | - | - | ✅ |
| 重構 | ❌ | ✅ | - | - | ✅ |
| 執行配置 | ❌ | ✅ | - | - | ✅ |
| 插件安裝 | ✅ | ❌ | - | ✅ | - |

---

## 8. 相關資源

- [WebStorm CLI 文檔](./webstorm-cli.md)
- [WebStorm MCP 文檔](./webstorm-mcp.md)
