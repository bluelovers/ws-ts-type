"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.packageJsonDependenciesFields = exports.EnumVersionValue2 = exports.EnumVersionValue = void 0;
var EnumVersionValue;
(function (EnumVersionValue) {
    EnumVersionValue["major"] = "major";
    EnumVersionValue["minor"] = "minor";
    EnumVersionValue["latest"] = "latest";
    EnumVersionValue["greatest"] = "greatest";
    EnumVersionValue["newest"] = "newest";
})(EnumVersionValue = exports.EnumVersionValue || (exports.EnumVersionValue = {}));
var EnumVersionValue2;
(function (EnumVersionValue2) {
    EnumVersionValue2["any"] = "*";
    EnumVersionValue2["latest"] = "latest";
    EnumVersionValue2["next"] = "next";
    EnumVersionValue2["beta"] = "beta";
    EnumVersionValue2["canary"] = "canary";
    EnumVersionValue2["stable"] = "stable";
    EnumVersionValue2["dev"] = "dev";
})(EnumVersionValue2 = exports.EnumVersionValue2 || (exports.EnumVersionValue2 = {}));
const packageJsonDependenciesFields = [
    'dependencies',
    'devDependencies',
    'peerDependencies',
    'optionalDependencies',
];
exports.packageJsonDependenciesFields = packageJsonDependenciesFields;
//# sourceMappingURL=types.js.map