
import getFileSizeStr from '../../functions/getFileSizeStr';

test('正常情况',() => {

  expect(getFileSizeStr(3145728)).toEqual('3M');

});