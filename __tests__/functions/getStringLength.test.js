/**
 * Created by xuqiangxing on 2017/12/25.
 */

import getStringLength from '../../functions/getStringLength';

describe('getStringLength',() => {
  it('测试正常数值',() => {
    let str = '我是66啊';
    expect(getStringLength(str)).toBe(8);
  });

  it('测试null',() => {
    expect(getStringLength(null)).toBe(0);
  });

  it('测试非法值',() => {
    expect(() => getStringLength({'hehe':9})).toThrow();
  });
});