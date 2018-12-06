/**
 * Created by 苑永志 on 2017/11/24.
 */

import diffWith from '../../functions/diffWith';

describe('diffWith',() => {
  it('测试一般的情况',() => {
    const p1 = {id: 1, name: '小明'};
    const p3 = {id: 1, name: '小强', age: 18};
    expect(diffWith(p1, p3,['id', 'name',])).toBeTruthy();
    expect(diffWith(p1, p3,['id', 'name', 'age'])).toBeTruthy();
  });
});