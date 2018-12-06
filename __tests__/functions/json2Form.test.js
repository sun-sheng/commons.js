/**
 * Created by xuqiangxing on 2017/12/25.
 */
import json2Form from '../../functions/json2Form';

test('',() => {
  let obj = {};
  obj.name = 'hehe';
  obj.age = 12;
  expect(json2Form(obj)).toEqual('name=hehe&age=12');
  obj = {};
  obj.name = 'hehe';
  obj.age = 12;
  expect(json2Form(obj,'prefix')).toEqual('prefix%5Bname%5D=hehe&prefix%5Bage%5D=12');
  obj = [{name:'json',age:12},{sex:'man'}];
  expect(json2Form(obj,'prefix')).toEqual('prefix%5B0%5D%5Bname%5D=json&prefix%5B0%5D%5Bage%5D=12&prefix%5B1%5D%5Bsex%5D=man');
  obj = [{name:'json',age:12},{sex:'man'}];
  expect(json2Form(obj,'//')).toEqual('%2F%2F%5B0%5D%5Bname%5D=json&%2F%2F%5B0%5D%5Bage%5D=12&%2F%2F%5B1%5D%5Bsex%5D=man');
  obj = [{name:'json',age:12},{sex:'man'}];
  expect(json2Form(obj)).toEqual('json=&undefined=');

});