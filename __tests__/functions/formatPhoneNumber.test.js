import formatPhoneNumber from '../../functions/formatPhoneNumber';

test('正常情况',() => {

  expect(formatPhoneNumber('12800789903')).toEqual("128 0078 9903");

});

test('异常情况',() => {

  expect(formatPhoneNumber('11233')).toEqual("11233");

});