"use strict";
/**
 * Created by user on 2019/5/18.
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.readPackageJson = void 0;
const fs_1 = require("fs");
const package_json_1 = __importDefault(require("./package-json"));
function readPackageJson(file) {
    return JSON.parse(fs_1.readFileSync(file).toString());
}
exports.readPackageJson = readPackageJson;
//# sourceMappingURL=index.js.map