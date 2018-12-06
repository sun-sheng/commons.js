/**
 * Created by 苑永志 on 2017/11/24.
 */

import each from '../../functions/each';

describe('each',() => {
  it('不指定each的长度',() => {
    const arr =  [{id:1,name:'aa'},{id:2,name:'bb'},{id:3,name:'cc'},];
    const map = {};
    each(arr, item => {
      map[item.id] = item;
    });

    expect(map).toEqual({
      1:arr[0],
      2:arr[1],
      3:arr[2],
    });
  });

  it('指定each的长度',() => {
    const arr =  [{id:1,name:'aa'},{id:2,name:'bb'},{id:3,name:'cc'},];
    const map = {};
    each(arr, item => {
      map[item.id] = item;
    },2);

    expect(map).toEqual({
      1:arr[0],
      2:arr[1],
    });
  });
});