/**
 * Created by 苑永志 on 2017/11/24.
 */

import convertNumToChinese from '../../functions/convertNumToChinese';

describe('convertNumToChinese',() => {
  it('无效字符串',() => {
    const params = [null, 'xxx'];
    for(let _num of params){
      expect(convertNumToChinese(_num)).toBe('请传入正确的整数');
    }
  });
  it('过大数字',() => {
    expect(convertNumToChinese('1111111111111')).toBe('请不要传入过大的数字');
  });
  it('万后的4位为0',() => {
    expect(convertNumToChinese('10000')).toBe('一万');
  });
  it('一般情况',() => {
    expect(convertNumToChinese('111111101')).toBe('一亿一千一百一十一万一千一百零一');
  });
});