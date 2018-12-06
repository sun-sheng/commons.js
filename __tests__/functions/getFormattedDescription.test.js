import getFormattedDescription from '../../functions/getFormattedDescription';

test('正常情况',() => {
  let desc = '一直在乎的事情，网站地址 http://www.dsf.com 哇哈哈\n咯';
  let result = '一直在乎的事情，网站地址 <a href="http://www.dsf.com" target="_blank">http://www.dsf.com</a> 哇哈哈<br/>咯';
  expect(getFormattedDescription(desc)).toEqual(result);
});