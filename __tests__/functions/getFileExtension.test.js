/**
 * Created by xuqiangxing on 2017/12/25.
 */
import getFileExtension from '../../functions/getFileExtension';

test('正常情况',() => {
  expect(getFileExtension('some.pdf')).toEqual('pdf');
  expect(getFileExtension('some')).toEqual('');
  expect(getFileExtension('')).toEqual('');
});

