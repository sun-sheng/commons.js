/**
 * Created by 苑永志 on 2017/11/24.
 */

import createClassName from '../../functions/createClassName';

describe('createClassName',() => {
  it('测试正常情况',() => {
    let value = {
      "btn": true,
      "btn-primary": false,
      "btn-danger": true,
    };
    expect(createClassName(value).trim()).toEqual("btn btn-danger");
  });
});