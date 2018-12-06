/**
 * Created by vercent on 2017/9/26.
 */

import getIdCardInfo from '../../functions/getIdCardInfo';

describe('getIdCardInfo',() => {
  it('测试正常数值',() => {
    let value = '110101198505120483';
    let result = getIdCardInfo(value);
    let {isTrue, isFemale, isMale} = result;
    expect(isTrue).toBeTruthy();
    expect(isFemale).toBeTruthy();
    expect(isMale).toBeFalsy();
  });

  it('测试x结尾的ID',() => {
    let value = '11010119850512904x';
    let result = getIdCardInfo(value);
    let {isTrue,isFemale} = result;
    expect(isTrue).toBeTruthy();
    expect(isFemale).toBeTruthy();
  });

  it('测试15位身份证',() => {
    let value = '110101850512048';
    let result = getIdCardInfo(value);
    let {isTrue} = result;
    expect(isTrue).toBeTruthy();
  });

  it('测试错误数值',() => {
    let value = '110101198505120484';
    let result = getIdCardInfo(value);
    let {isTrue} = result;
    expect(isTrue).toBeFalsy();
  });

})