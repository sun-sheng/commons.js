import regex from '../regex'
import _ from 'lodash'

/** @module formatPrice */

/**
 * 格式化金额
 * @param {string|number} number 金额
 * @return {string}
 */
export default function formatPrice(number) {
  // 保留两位有效小数
  if (!regex.NUMBER.test(number)) return '';
  number = number.toString();
  let result = '';
  const arr = number.split('.');
  let str = arr[0];
  let l = str.length;
  let times = l % 3;
  if (times !== 0) times = 3 - times;
  _.times(times, () => { str = ` ${str}`; });
  l = str.length;
  const count = l / 3;
  let i = 0;
  for (i; i < count;) {
    result += `,${str.substring(i * 3, ++i * 3)}`;
  }
  result = result.substring(times + 1);
  if (arr[1]) {
    result += (`.${arr[1]}`);
  } else {
    result += ('.00');
  }
  return result;
}