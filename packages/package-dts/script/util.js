"use strict";
/**
 * Created by user on 2019/5/19.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.downloadJsonAndBuild = downloadJsonAndBuild;
exports.handleFileName = handleFileName;
const tslib_1 = require("tslib");
const fs_extra_1 = tslib_1.__importDefault(require("fs-extra"));
const path_1 = tslib_1.__importDefault(require("path"));
const axios_1 = tslib_1.__importDefault(require("axios"));
const bluebird_1 = tslib_1.__importDefault(require("bluebird"));
const json_schema_to_typescript_1 = require("json-schema-to-typescript");
function downloadJsonAndBuild(options) {
    if (!options.saveName) {
        options.saveName = path_1.default.basename(options.href);
    }
    if (!options.saveNameCompile) {
        options.saveNameCompile = handleFileName(options.saveName);
    }
    let filePath = path_1.default.join(__dirname, '../', options.savePath || 'schema', options.saveName);
    let filePathCompile = path_1.default.join(__dirname, '..', options.savePathCompile || 'types', options.saveNameCompile);
    let label = `[${path_1.default.basename(options.saveName)}]`;
    console.log(`${options.saveName}\n${options.saveNameCompile}`);
    let { skipExists = true } = options;
    if (skipExists && fs_extra_1.default.existsSync(filePathCompile)) {
        console.warn(label, `skip`);
        return bluebird_1.default.resolve(null);
    }
    return bluebird_1.default.resolve()
        .then(() => axios_1.default.get(options.href, {
        timeout: 10 * 1000,
    }))
        .then(function (res) {
        console.log(label, `downloaded`);
        if (typeof res.data === 'string') {
            return JSON.parse(res.data);
        }
        return res.data;
    })
        .tap(function (data) {
        return fs_extra_1.default.writeJSON(filePath, data, {
            spaces: "\t",
        });
    })
        .tap(function () {
        console.log(label, `json saved`);
    })
        .then(function (data) {
        var _a, _b;
        console.log(label, `start compile .d.ts`);
        return (0, json_schema_to_typescript_1.compile)((_b = (_a = options.handleSchemaBeforeCompile) === null || _a === void 0 ? void 0 : _a.call(options, data)) !== null && _b !== void 0 ? _b : data, 'IMySchema', {
            enableConstEnums: true,
            unreachableDefinitions: true,
        });
    })
        .tap(function (ts) {
        console.log(label, `compiled`);
        return fs_extra_1.default.writeFile(filePathCompile, ts);
    })
        .tap(function () {
        console.log(label, `.d.ts saved`);
    })
        .thenReturn(true);
}
function handleFileName(name) {
    return name + '.d.ts';
}
//# sourceMappingURL=util.js.map