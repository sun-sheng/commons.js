/** @module eqWith */

function eqWith(obj1, obj2, keys) {
  return keys.every((key) => obj1[key] === obj2[key]);
}

/**
 * 判断两个对象是否相等
 * @param {object} obj1 对象1
 * @param {object} obj2 对象1
 * @param {Array<string>} keys 比较的属性列表
 * @return {boolean} 比较结果
 */
export default eqWith;