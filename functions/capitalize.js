/** @module capitalize */

/**
 * 首字母大写
 * @param {string} string 字符串
 * @return string
 */

export default function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}