/**
 * Created by 苑永志 on 2017/11/24.
 */

import eqWith from '../../functions/eqWith';

describe('eqWith',() => {
  it('测试正常情况',() => {
    const p1 = {id: 1, name: '小明'};
    const p3 = {id: 1, name: '小明', age: 18};
    expect(eqWith(p1, p3,['id', 'name',])).toBeTruthy();
    expect(eqWith(p1, p3,['id', 'name', 'age'])).toBeFalsy();
  });
});