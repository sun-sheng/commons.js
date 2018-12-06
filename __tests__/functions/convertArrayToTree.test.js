/**
 * Created by 苑永志 on 2017/11/24.
 */

import convertArrayToTree from '../../functions/convertArrayToTree';

let locationList = [{
  id: 1,
  name: '中国',
  parentId: 0
},{
  id: 2,
  name: '北京',
  parentId: 1,
},{
  id: 3,
  name: '东城区',
  parentId: 2,
},{
  id: 5,
  name: '西城区',
  parentId: 2,
},{
  id: 19,
  name: '天津',
  parentId: 1,
}];

const locationList2 = locationList.map(({ name, id: code, parentId: superCode }) => ({ name, code, superCode }));

test('一般情况',() => {
  expect(convertArrayToTree(locationList)).toEqual([{
    id:1,
    name:'中国',
    parentId: 0,
    children: [{
      id: 2,
      name: '北京',
      parentId: 1,
      children: [{
        id: 3,
        name: '东城区',
        parentId: 2,
      },{
        id: 5,
        name: '西城区',
        parentId: 2,
      }]
    },{
      id: 19,
      name: '天津',
      parentId: 1,
    }]
  }]);
});

test('指定rule',() => {
  expect(convertArrayToTree(locationList2, { id: 'code', parentId: 'superCode' })).toEqual([{
    code:1,
    name:'中国',
    superCode: 0,
    children: [{
      code: 2,
      name: '北京',
      superCode: 1,
      children: [{
        code: 3,
        name: '东城区',
        superCode: 2,
      },{
        code: 5,
        name: '西城区',
        superCode: 2,
      }]
    },{
      code: 19,
      name: '天津',
      superCode: 1,
    }]
  }]);
});