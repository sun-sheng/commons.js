/** @module isVideo */

/**
 * 根据文件名判断是否是音频文件
 * @param {string} filename 文件名
 * @return {boolean}
 */


const VIDEO_TYPES = ["avi", "rm", "rmvb", "flv", "mov", "mp4", "3gp", "wmv", "mpg", "mkv"];

import getFileExtension from './getFileExtension';

export default function (filename) {
  let ext = getFileExtension(filename);
  if(!ext) return false;

  return VIDEO_TYPES.includes(ext);
}