/** @module chooseFile */

import _ from 'lodash';
import checkFileAccept from './checkFileAccept';

function chooseFile(options) {
  return new Promise(function (resolve, reject) {
    options = options || {};
    let element = document.createElement('input');
    element.type = 'file';
    element.style.display = 'none';

    if (_.isString(options.accept)) {
      element.accept = options.accept;
    }

    document.body.appendChild(element);
    element.click();
    element.onchange = function () {
      const originFile = element.files[0];
      const file = originFile;

      //const file = _.pick(originFile, ['name', 'type', 'size']);
      let checkAcceptResult = true;
      if (_.isString(options.accept)) {
        checkAcceptResult = checkFileAccept(file, options.accept);
      } else if (_.isFunction(options.accept)) {
        checkAcceptResult = options.accept(file);
      }

      if (!checkAcceptResult) {
        return reject({ message: options.acceptMessage || '文件类型错误' });
      }

      if (options.maxsize && file.size > options.maxsize) {
        return reject({ message: options.maxsizeMessage || '文件太大' });
      }

      //file.blob = originFile;
      file.url = URL.createObjectURL(originFile);
      resolve(file);
      document.body.removeChild(element);
    }
  });
}

/**
 * 选择文件
 * @param options 文件选项: accept,acceptMessage,maxsize,maxsizeMessage
 * @return {Promise}
 */
export default chooseFile;
