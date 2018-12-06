import getFilePostfix from '../../functions/getFilePostfix';

test('正常情况',() => {
  expect(getFilePostfix('some.pdf')).toEqual('pdf');
  expect(getFilePostfix({name: 'others.txt'})).toEqual('txt');
});