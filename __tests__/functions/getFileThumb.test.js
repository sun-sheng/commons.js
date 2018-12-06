import getFileThumb from '../../functions/getFileThumb';

test('正常情况',() => {
  expect(getFileThumb('some.pdf')).toEqual('https://static.tezign.com/tezign-web-vendors/images/thumb/file-pdf.png');
  expect(getFileThumb({name: 'others.txt'})).toEqual('https://static.tezign.com/tezign-web-vendors/images/thumb/file.png');
});