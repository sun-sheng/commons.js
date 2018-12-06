/**
 * Created by xuqiangxing on 2017/12/25.
 */

import isVideo from '../../functions/isVideo';

describe('isVideo',() => {
  it('测试正常数值',() => {
    let filename = 'xxx.mp4';
    expect(isVideo(filename)).toBeTruthy();
  });

  it('测试正常数值2',() => {
    expect(isVideo('kkk.txt')).toBeFalsy();
  });
  it('测试空字符串',() => {
    expect(isVideo('')).toBeFalsy();
  });
});