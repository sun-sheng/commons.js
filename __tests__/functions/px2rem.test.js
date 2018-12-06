/**
 * Created by vercent on 2017/9/20.
 */

import px2rem from '../../functions/px2rem';

describe('px2rem',() => {

  it('使用默认值', () => {
    let value = 25;
    let result = px2rem(value);
    expect(result).toBe(`${1/3}rem`);
  });

  it('使用给给定变量', () => {
    let value = 25;
    let result = px2rem(value, 25);
    expect(result).toBe(`1rem`);
  });

})
