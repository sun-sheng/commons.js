/**
 * Created by xuqiangxing on 2017/12/25.
 */

import getRandomString from '../../functions/getRandomString';

describe('getRandomString',() => {
  it('测试正常数值',() => {
    let length = 6;
    expect(getRandomString(length).length).toBe(6);
  });

  it('测试null',() => {
    expect(getRandomString(null)).toBe('');
  });
});