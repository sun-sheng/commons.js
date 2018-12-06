import _ from 'lodash'

/** @module getLink */

/**
 * 格式化链接
 * @param url { string } 链接
 * @return {string} 返回值
 */
export default function getLink (url) {
  if (!_.isString(url)) return '';
  url = url.trim();
  if (url.indexOf('://') !== -1) return url;
  return 'http://' + url;
}