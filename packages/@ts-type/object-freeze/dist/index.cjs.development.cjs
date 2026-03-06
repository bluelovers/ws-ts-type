'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function freezeArray(obj) {
  return Object.freeze(obj);
}
/**
 * 凍結物件並回傳唯讀類型（通用實現）
 * Freeze object and return readonly type (generic implementation)
 *
 * 使用 Object.freeze 凍結物件，使其不可變
 * Uses Object.freeze to freeze the object to make it immutable
 *
 * @param obj - 要凍結的物件 / Object to freeze
 * @returns 凍結後的物件 / Frozen object
 */
function freezeObject(obj) {
  return Object.freeze(obj);
}

exports.default = freezeObject;
exports.freezeArray = freezeArray;
exports.freezeObject = freezeObject;
//# sourceMappingURL=index.cjs.development.cjs.map
