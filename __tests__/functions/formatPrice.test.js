import formatPrice from '../../functions/formatPrice';

test('正常情况',() => {

  expect(formatPrice(390234)).toEqual('390,234.00');
  expect(formatPrice(395677888)).toEqual('395,677,888.00');

});