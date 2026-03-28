# WebStorm CLI 指令文檔

## 指令總覽表

| 用途 | 指令用法 | 不建議使用 |
|------|----------|-----------|
| 開啟檔案 | `webstorm <file>` | - |
| 開啟專案 | `webstorm <directory>` | - |
| 開啟檔案並跳至行/欄 | `webstorm --line <N> --column <M> <file>` | - |
| 差異查看器 | `webstorm diff <file1> <file2>` | - |
| 合併工具（雙方） | `webstorm merge <local> <remote> <output>` | - |
| 合併工具（三方） | `webstorm merge <local> <remote> <base> <output>` | - |
| 格式化檔案 | `webstorm format <file>` | ❌ 會產生臨時專案 |
| 代碼檢查 | `webstorm inspect <project> <profile>` | ❌ 會產生臨時專案 |
| 安裝插件 | `webstorm installPlugins <pluginId>` | ❌ 會產生臨時專案 |

---

## 1. 指令列表

### 1.1 檔案開啟與導航

| 指令 | 說明 |
|------|------|
| `webstorm <file>` | 開啟指定檔案 |
| `webstorm <directory>` | 開啟指定目錄（專案） |
| `webstorm --line <N> --column <M> <file>` | 開啟檔案並跳至指定行/欄 |

**參數行為**：
| 參數組合 | 行為 |
|----------|------|
| 只有 `--column` | ❌ 無效，column 需要與 line 同時指定才會作用 |
| `--line N` | ✅ 跳至第 N 行，若 N 超過檔案總行數，則跳至最後一行 |
| `--line N --column M` | ✅ 跳至第 N 行第 M 欄 |
| 對已開啟檔案使用 CLI | ✅ 可移動游標位置 |

---

### 1.2 差異查看器 (diff)

| 指令 | 說明 |
|------|------|
| `webstorm diff <file1> <file2>` | 打開差異查看器，比較兩個檔案 |

**測試結果**：✅ 正常運作，會打開差異查看器視窗

---

### 1.3 合併工具 (merge)

| 指令 | 說明 |
|------|------|
| `webstorm merge <local> <remote> [base] <merged>` | 打開合併對話框，合併檔案 |

**參數說明**：
| 參數 | 說明 |
|------|------|
| `local` | 本地檔案（雙方合併時為左側檔案） |
| `remote` | 遠端檔案（雙方合併時為右側檔案） |
| `base` | 共同祖先檔案（三方合併時使用） |
| `merged` | 合併後的輸出檔案 |

**用法分類**：

#### 雙方合併（2-way merge）
```
webstorm merge <local> <remote> <output>
```
- 會直接修改 `<output>` 檔案
- 範例：
  ```bash
  webstorm merge "helper.ts" "helper.d.ts" "helper.ts"
  # 合併結果會寫入 helper.ts
  
  webstorm merge "helper.ts" "helper.d.ts" "helper.d.ts"
  # 合併結果會寫入 helper.d.ts
  ```

#### 三方合併（3-way merge）
```
webstorm merge <local> <remote> <base> <output>
```
- 需要提供共同祖先檔案 `<base>`
- 會直接修改 `<output>` 檔案
- 範例：
  ```bash
  webstorm merge "helper.ts" "helper.d.ts" "base.ts" "output.ts"
  ```

**測試結果**：✅ 正常運作

**注意事項**：
- `<output>` 檔案必須在執行前存在
- 合併結果會直接寫入 `<output>` 檔案

---

### 1.4 格式化 (format)

| 指令 | 說明 |
|------|------|
| `webstorm format <file>` | 將程式碼格式化套用至指定檔案 |

**可用參數**：
| 參數 | 說明 |
|------|------|
| `-allowDefaults` | 使用預設代碼樣式進行格式化 |

**完整範例**：
```bash
webstorm format -allowDefaults "D:\path\to\file.ts"
```

**⚠️ 不建議使用**
- 會產生臨時專案
- 目前已知只能手動刪除臨時專案

**限制**：
- ❌ 不支援在 IDE 已經開啟的狀態下執行
- 命令列格式化工具會在背景啟動 WebStorm 實例並應用格式
- 如果另一個 WebStorm 實例已在運行，則無法運作

**測試結果**：⚠️ 需要在 IDE 關閉狀態下執行

---

### 1.5 代碼檢查 (inspect)

| 指令 | 說明 |
|------|------|
| `webstorm inspect <project> <profile>` | 在指定專案上執行代碼檢查 |

**⚠️ 不建議使用**
- 會產生臨時專案
- 目前已知只能手動刪除臨時專案

**限制**：
- ❌ 不支援在 IDE 已經開啟的狀態下執行
- 會在背景啟動獨立的 WebStorm 實例執行檢查

---

### 1.6 安裝插件 (installPlugins)

| 指令 | 說明 |
|------|------|
| `webstorm installPlugins <pluginId>` | 透過插件 ID 從 JetBrains Marketplace 或自定義插件庫安裝插件 |

**⚠️ 不建議使用**
- 會產生臨時專案
- 目前已知只能手動刪除臨時專案

**限制**：
- ❌ 不支援在 IDE 已經開啟的狀態下執行

---

## 2. 選項 (Options)

| 選項 | 說明 |
|------|------|
| `--nosplash` | 載入 WebStorm 時不顯示啟動畫面 |
| `--dontReopenProjects` | 不重新打開專案並顯示歡迎螢幕 |
| `--disableNonBundledPlugins` | 不載入手動安裝的插件（可幫助解決插件崩潰問題） |
| `--wait` | 等待檔案關閉後再返回命令提示符 |
| `-a` | 指定應用程式（macOS） |
| `-n` | 強制打開新應用程式執行個體（macOS） |
| `--args` | 指定要傳遞給應用程式的其他參數（macOS） |

---

## 3. 使用範例

### 開啟專案
```bash
webstorm "D:\Users\WebstormProjects\nodejs-yarn\ws-ts-type"
```

### 開啟檔案並指定行號
```bash
webstorm --line 10 --column 5 "D:\path\to\file.ts"
```

### 比較兩個檔案
```bash
webstorm diff "D:\old\file.ts" "D:\new\file.ts"
```

---

## 4. 相關資源

### 官方文檔
| 標題 | 網址 |
|------|------|
| 命令列介面 (Command Line Interface) | https://www.jetbrains.com/zh-cn/help/webstorm/working-with-the-ide-features-from-command-line.html |
| 命令列參數 (Command Line Arguments) | https://www.jetbrains.com/zh-cn/help/webstorm/working-with-the-ide-features-from-command-line.html#arguments |
| 從命令行打開文件 | https://www.jetbrains.com/zh-cn/help/webstorm/opening-files-from-command-line.html |
| 命令行比較文件 | https://www.jetbrains.com/zh-cn/help/webstorm/command-line-differences-viewer.html |
| 命令行合併工具 | https://www.jetbrains.com/zh-cn/help/webstorm/command-line-merge-tool.html |
| 命令行格式化文件 | https://www.jetbrains.com/zh-cn/help/webstorm/command-line-formatter.html |
| 命令行代碼檢查 | https://www.jetbrains.com/zh-cn/help/webstorm/command-line-code-inspector.html |
| 命令行安裝插件 | https://www.jetbrains.com/zh-cn/help/webstorm/install-plugins-from-the-command-line.html |
