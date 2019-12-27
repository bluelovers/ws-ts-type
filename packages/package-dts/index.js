"use strict";
/**
 * Created by user on 2019/5/18.
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const package_json_1 = __importDefault(require("./package-json"));
function readPackageJson(file) {
    return JSON.parse(fs_1.readFileSync(file).toString());
}
exports.readPackageJson = readPackageJson;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7O0dBRUc7Ozs7O0FBRUgsMkJBQWtDO0FBQ2xDLGtFQUEwQztBQU0xQyxTQUFnQixlQUFlLENBQUMsSUFBWTtJQUUzQyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsaUJBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO0FBQ2xELENBQUM7QUFIRCwwQ0FHQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ3JlYXRlZCBieSB1c2VyIG9uIDIwMTkvNS8xOC5cbiAqL1xuXG5pbXBvcnQgeyByZWFkRmlsZVN5bmMgfSBmcm9tICdmcyc7XG5pbXBvcnQgSVBhY2thZ2VKc29uIGZyb20gJy4vcGFja2FnZS1qc29uJztcbmV4cG9ydCB7IElFc2xpbnRyY0pzb24gfSBmcm9tICcuL2VzbGludHJjLWpzb24nO1xuZXhwb3J0IHsgSVBhY2thZ2VKc29uLCBJTGliUGFja2FnZUpzb24gfSBmcm9tICcuL3BhY2thZ2UtanNvbic7XG5leHBvcnQgeyBJVHNjb25maWcgfSBmcm9tICcuL3RzY29uZmlnLWpzb24nO1xuZXhwb3J0IHsgSVRyYXZpc0NJIH0gZnJvbSAnLi90cmF2aXMtanNvbic7XG5cbmV4cG9ydCBmdW5jdGlvbiByZWFkUGFja2FnZUpzb24oZmlsZTogc3RyaW5nKTogSVBhY2thZ2VKc29uXG57XG5cdHJldHVybiBKU09OLnBhcnNlKHJlYWRGaWxlU3luYyhmaWxlKS50b1N0cmluZygpKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgSVBhY2thZ2VKc29uO1xuIl19