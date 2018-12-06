import reg from '../regex'

/** @module getFormattedDescription */

/**
 * 格式化描述中的链接
 * @param desc { string } 文件或者文件名
 * @return {string} 返回值
 */
export default function getFormattedDescription(desc){
  if (!desc && typeof desc !== 'string') {
    return desc;
  }

  if(desc){
    return desc.replace(reg.URL,function (match) {
      let beforeMath = match;
      if(!reg.HTTP.test(match)){
        match = 'http://' + match;
      }
      return `<a href=\"${match}\" target=\"_blank\">${beforeMath}</a>`;
    }).replace(/\n/g,'<br/>');
  }
}