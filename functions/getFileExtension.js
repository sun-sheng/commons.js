/** @module getFileExtensions */

/**
 * 获取文件名后缀
 * @param file { string } 文件名
 * @return {string} 返回值
 */

export default function (filename) {
  let ext = '';
  if(!filename) return ext;

  filename = filename.trim();

  let dotIndex = filename.lastIndexOf('.');

  if(dotIndex === -1) return ext;

  return filename.substring(dotIndex + 1).toLowerCase();
}