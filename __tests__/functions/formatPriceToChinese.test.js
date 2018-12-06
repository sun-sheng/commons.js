import formatPriceToChinese from '../../functions/formatPriceToChinese';

test('正常情况',() => {
  // '零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖'
  // '', '拾', '佰', '仟', '万', '亿', '圆', ''
  expect(formatPriceToChinese(390234)).toEqual('叁拾玖万零仟贰佰叁拾肆圆整');

});