"use strict";
/**
 * 配置文件類型定義匯入模組
 * Configuration file type definitions import module
 *
 * 匯入各類配置文件的類型定義：
 * - package.json
 * - .eslintrc.json
 * - tsconfig.json
 * - .travis.yml
 *
 * @package
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.readPackageJson = readPackageJson;
const fs_1 = require("fs");
/**
 * 讀取並解析 package.json 檔案
 * Read and parse package.json file
 *
 * @param file - package.json 檔案路徑 / package.json file path
 * @returns 解析後的 package.json 物件 / Parsed package.json object
 */
function readPackageJson(file) {
    return JSON.parse((0, fs_1.readFileSync)(file).toString());
}
//# sourceMappingURL=index.js.map