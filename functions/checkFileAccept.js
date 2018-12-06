/** @module checkFileAccept */

const regImageTypePostfix = /^(jpg|jpeg|png|gif)$/i;
const regAudioTypePostfix = /^(mp3|wav|ogg|wma|aac|ape|m4a)$/i;
import getFilePostfix from './getFilePostfix'

function checkFileAccept(file, accept) {
  if (!accept) return true;

  if (!file) return false;

  let typeFile = typeof file;
  if(typeFile !== 'string' && !(file instanceof File)){
    throw new Error('参数file必须string类型或者File类型');
  }

  let postfix = getFilePostfix(file);
  let index = accept.lastIndexOf('/');
  let acceptPostfix = accept.substring(index + 1);

  if (acceptPostfix !== '*') {
    return acceptPostfix === postfix;
  }

  let acceptPrefix = accept.substring(0, index);
  if (acceptPrefix === 'image') {
    return regImageTypePostfix.test(postfix)
  }

  if (acceptPrefix === 'audio') {
    return regAudioTypePostfix.test(postfix);
  }

  //todo 添加更多类型检测
  return true;
}

/**
 * 判断是否是接收的文件类型
 *
 * @param file { File|string } 文件或者文件名
 * @param accept {string} 接受的文件类型，多个文件类型以逗号(,)分隔，
 * @return {boolean} 判断结果
 */
export default checkFileAccept;