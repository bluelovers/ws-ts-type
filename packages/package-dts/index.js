"use strict";
/**
 * Created by user on 2019/5/18.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
function readPackageJson(file) {
    return JSON.parse(fs.readFileSync(file).toString());
}
exports.readPackageJson = readPackageJson;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7O0dBRUc7O0FBRUgseUJBQTBCO0FBSzFCLFNBQWdCLGVBQWUsQ0FBQyxJQUFZO0lBRTNDLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7QUFDckQsQ0FBQztBQUhELDBDQUdDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDcmVhdGVkIGJ5IHVzZXIgb24gMjAxOS81LzE4LlxuICovXG5cbmltcG9ydCBmcyA9IHJlcXVpcmUoJ2ZzJyk7XG5pbXBvcnQgSVBhY2thZ2VKc29uIGZyb20gJy4vcGFja2FnZS1qc29uJztcbmV4cG9ydCB7IElFc2xpbnRyY0pzb24gfSBmcm9tICcuL2VzbGludHJjLWpzb24nO1xuZXhwb3J0IHsgSVBhY2thZ2VKc29uLCBJTGliUGFja2FnZUpzb24gfSBmcm9tICcuL3BhY2thZ2UtanNvbic7XG5cbmV4cG9ydCBmdW5jdGlvbiByZWFkUGFja2FnZUpzb24oZmlsZTogc3RyaW5nKTogSVBhY2thZ2VKc29uXG57XG5cdHJldHVybiBKU09OLnBhcnNlKGZzLnJlYWRGaWxlU3luYyhmaWxlKS50b1N0cmluZygpKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgSVBhY2thZ2VKc29uO1xuIl19