import getCharacterLength from '../../functions/getCharacterLength';

test('正常情况',() => {
  // '零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖'
  // '', '拾', '佰', '仟', '万', '亿', '圆', ''
  expect(getCharacterLength('叁拾玖万零仟整')).toEqual(14);
  expect(getCharacterLength('good things')).toEqual(11);

});