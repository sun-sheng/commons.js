/**
 * Created by xuqiangxing on 2017/12/25.
 */
import json2formData from '../../functions/json2formData';

test('',() => {
  let obj = {};
  obj.name = 'hehe';
  obj.age = 12;
  expect(json2formData(obj)).toEqual('name=hehe&age=12');
  obj = [{name:'json',age:12},{sex:'man'}];
  expect(json2formData(obj)).toEqual('json=&undefined=');
  expect(json2formData([{name:'json',value:12},{name:'hehe',value:'kk'}])).toEqual('json=12&hehe=kk');
});