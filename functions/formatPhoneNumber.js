import _ from 'lodash'
import reg from '../regex'

/** @module formatPhoneNumber */

/**
 * 格式化手机号码
 * @param {string|number} num 手机号码
 * @return {string}
 */
export default function formatPhoneNumber (num) {
  if (_.isInteger(num)) num = '' + num;
  if (!reg.PHONE.test(num)) return num;
  if (!_.isString(num)) return '';
  return num.substring(0, 3) + ' ' + num.substring(3, 7) + ' ' + num.substring(7);
}
