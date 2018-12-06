import _ from 'lodash';
export default function (obj) {
  let str = '';
  _.forEach(obj, function (value, key) {
    if (value === undefined || value === null) return;
    str += '&' + encodeURIComponent(key) + '=' + encodeURIComponent(value)
  });
  return str.substring(1);
}

