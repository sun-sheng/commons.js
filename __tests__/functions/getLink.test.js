import getLink from '../../functions/getLink';

test('正常情况',() => {
  let in1 = 'https://www.dsf.com';
  let out1 = 'https://www.dsf.com';
  expect(getLink(in1)).toEqual(out1);
  let in2 = 'www.dsf.com';
  let out2 = 'http://www.dsf.com';
  expect(getLink(in2)).toEqual(out2);

});