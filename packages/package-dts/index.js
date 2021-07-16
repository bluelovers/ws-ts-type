"use strict";
/**
 * Created by user on 2019/5/18.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.readPackageJson = void 0;
const fs_1 = require("fs");
function readPackageJson(file) {
    return JSON.parse((0, fs_1.readFileSync)(file).toString());
}
exports.readPackageJson = readPackageJson;
//# sourceMappingURL=index.js.map